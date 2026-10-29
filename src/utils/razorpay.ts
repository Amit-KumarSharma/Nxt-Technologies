import { AGENCY_CONFIG } from '../data/agencyData';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface RazorpayPaymentOptions {
  amount: number; // in INR Rupees
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess: (response: RazorpaySuccessResponse) => void;
  onError?: (error: any) => void;
  onDismiss?: () => void;
}

/**
 * Ensures the Razorpay checkout script is loaded.
 */
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Gets the configured Razorpay Key ID from environment variables, localStorage, or agency configuration.
 */
export const getRazorpayKeyId = (): string => {
  const envKey = typeof import.meta !== 'undefined' && import.meta.env?.VITE_RAZORPAY_KEY_ID;
  if (envKey && envKey.trim() !== '') {
    return envKey.trim();
  }
  if (typeof window !== 'undefined') {
    const localKey = localStorage.getItem('nxt_razorpay_key') || localStorage.getItem('kairo_razorpay_key');
    if (localKey && localKey.trim() !== '') {
      return localKey.trim();
    }
  }
  if (AGENCY_CONFIG.razorpayKeyId && AGENCY_CONFIG.razorpayKeyId.trim() !== '') {
    return AGENCY_CONFIG.razorpayKeyId.trim();
  }
  return '';
};

/**
 * Saves a Razorpay Key ID to localStorage for quick testing/runtime configuration.
 */
export const saveRazorpayKeyId = (key: string): void => {
  if (typeof window !== 'undefined') {
    if (key.trim()) {
      localStorage.setItem('nxt_razorpay_key', key.trim());
      localStorage.removeItem('kairo_razorpay_key');
    } else {
      localStorage.removeItem('nxt_razorpay_key');
      localStorage.removeItem('kairo_razorpay_key');
    }
  }
};

/**
 * Launches the official Razorpay Checkout modal for a given amount.
 */
export const openRazorpayPayment = async (options: RazorpayPaymentOptions): Promise<{ success: boolean; reason?: string }> => {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || !window.Razorpay) {
    if (options.onError) {
      options.onError({ message: 'SDK_LOAD_FAILED', description: 'Could not load Razorpay SDK securely.' });
    }
    return { success: false, reason: 'SDK_LOAD_FAILED' };
  }

  const keyId = getRazorpayKeyId();
  if (!keyId) {
    if (options.onError) {
      options.onError({ message: 'KEY_NOT_CONFIGURED', description: 'Razorpay Key ID is not configured.' });
    }
    return { success: false, reason: 'KEY_NOT_CONFIGURED' };
  }

  try {
    const amountInPaise = Math.round(options.amount * 100);

    const rzpOptions = {
      key: keyId,
      amount: amountInPaise,
      currency: 'INR',
      name: AGENCY_CONFIG.name,
      description: options.description || `Project Payment - ₹${options.amount.toLocaleString('en-IN')}`,
      image: '/favicon.svg',
      prefill: {
        name: options.prefill?.name || '',
        email: options.prefill?.email || '',
        contact: options.prefill?.contact || ''
      },
      notes: {
        agency: AGENCY_CONFIG.name,
        currency: 'INR',
        amount: String(options.amount),
        ...options.notes
      },
      theme: {
        color: '#1e4db7'
      },
      modal: {
        ondismiss: function () {
          if (options.onDismiss) {
            options.onDismiss();
          }
        }
      },
      handler: function (response: RazorpaySuccessResponse) {
        options.onSuccess(response);
      }
    };

    const rzpInstance = new window.Razorpay(rzpOptions);

    if (options.onError) {
      rzpInstance.on('payment.failed', function (err: any) {
        options.onError?.(err);
      });
    }

    rzpInstance.open();
    return { success: true };
  } catch (err) {
    if (options.onError) {
      options.onError(err);
    }
    return { success: false, reason: 'CHECKOUT_OPEN_ERROR' };
  }
};
