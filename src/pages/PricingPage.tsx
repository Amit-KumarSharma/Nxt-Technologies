import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Lock,
  CreditCard,
  X,
  MessageCircle,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG, PRICING_PACKAGES, type PricingPackage } from '../data/agencyData';
import { 
  openRazorpayPayment, 
  getRazorpayKeyId, 
  saveRazorpayKeyId, 
  type RazorpaySuccessResponse 
} from '../utils/razorpay';

interface PricingPageProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

interface PaymentReceipt {
  paymentId: string;
  amount: number;
  itemName: string;
  timestamp: string;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenProjectModal }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [amountError, setAmountError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<PaymentReceipt | null>(null);

  // Key configuration modal state
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [pendingPayment, setPendingPayment] = useState<{ amount: number; description: string } | null>(null);
  const [inputKey, setInputKey] = useState('');
  const [keyError, setKeyError] = useState<string | null>(null);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }
  };

  const handleInitiatePayment = async (amount: number, description: string) => {
    setIsProcessing(true);
    setAmountError(null);

    const configuredKey = getRazorpayKeyId();

    if (!configuredKey) {
      setIsProcessing(false);
      setPendingPayment({ amount, description });
      setInputKey('');
      setKeyError(null);
      setIsKeyModalOpen(true);
      return;
    }

    const result = await openRazorpayPayment({
      amount,
      description,
      onSuccess: (res: RazorpaySuccessResponse) => {
        setIsProcessing(false);
        triggerConfetti();
        setPaymentSuccess({
          paymentId: res.razorpay_payment_id,
          amount,
          itemName: description,
          timestamp: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        });
      },
      onError: (err: any) => {
        setIsProcessing(false);
        if (err?.description || err?.message) {
          setAmountError(err.description || err.message || 'Payment could not be completed.');
        }
      },
      onDismiss: () => {
        setIsProcessing(false);
      }
    });

    if (!result.success && result.reason === 'KEY_NOT_CONFIGURED') {
      setIsProcessing(false);
      setPendingPayment({ amount, description });
      setIsKeyModalOpen(true);
    }
  };

  const handleCustomPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAmountError(null);

    const amountNum = parseFloat(customAmount.replace(/,/g, '').trim());
    if (isNaN(amountNum) || amountNum <= 0) {
      setAmountError('Please enter a valid payment amount.');
      return;
    }

    if (amountNum < 10) {
      setAmountError('Minimum payment amount is ₹10.');
      return;
    }

    handleInitiatePayment(amountNum, `Custom Agreed Payment - ₹${amountNum.toLocaleString('en-IN')}`);
  };

  const handleSaveKeyAndRetry = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputKey.trim();

    if (!trimmed.startsWith('rzp_test_') && !trimmed.startsWith('rzp_live_')) {
      setKeyError("Razorpay Key ID typically begins with 'rzp_test_' or 'rzp_live_'.");
      return;
    }

    saveRazorpayKeyId(trimmed);
    setIsKeyModalOpen(false);

    if (pendingPayment) {
      handleInitiatePayment(pendingPayment.amount, pendingPayment.description);
      setPendingPayment(null);
    }
  };

  const handleWhatsAppDirectPay = () => {
    if (!pendingPayment) return;
    const text = `Hello Kairo Technologies!%0A%0AI would like to make a verified payment of *₹${pendingPayment.amount.toLocaleString('en-IN')}* for: ${encodeURIComponent(pendingPayment.description)}.%0A%0APlease share your direct UPI / QR code payment instructions.`;
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsKeyModalOpen(false);
    setPendingPayment(null);
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Transparent Web Development Packages</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Pricing in INR (₹)
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Clear starting packages designed for businesses across India and worldwide. Every package is custom-coded for speed, search visibility, and mobile conversions.
          </motion.p>
        </div>

        {/* Indicative Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start sm:items-center gap-3 text-xs text-zinc-400">
          <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Indicative Package Rates:</strong> All packages listed below are starting estimates based on standard deliverables. Final quotations depend on exact page counts, custom integrations, and specific functionality. Third-party hosting, domains, and external APIs are not included unless agreed upon.
          </span>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((pkg: PricingPackage, idx: number) => {
            const isBusiness = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isBusiness
                    ? 'bg-gradient-to-b from-[#111425] to-[#090b14] border-2 border-indigo-500 shadow-2xl shadow-indigo-950/60 md:-translate-y-2'
                    : 'glass-card border border-white/10 hover:border-white/20 hover:bg-[#0c0e18]'
                }`}
              >
                {/* Popular badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-semibold tracking-wider uppercase shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-display font-bold text-white">
                      {pkg.name}
                    </h3>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5 font-mono">
                      {pkg.pageLimit}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed min-h-[40px]">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                        {pkg.price}
                      </span>
                      {pkg.isStartingAt && (
                        <span className="text-xs font-mono text-zinc-400">
                          (starting)
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-zinc-500 block mt-1">
                      One-time development fee • {pkg.revisions}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA & Razorpay Payment Action */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-2.5">
                  <button
                    onClick={() => onOpenProjectModal(pkg.name)}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isBusiness
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white hover:opacity-95 shadow-xl shadow-indigo-600/30 hover:scale-[1.01]'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleInitiatePayment(pkg.amountNumber, `${pkg.name} Package`)}
                    disabled={isProcessing}
                    className="w-full py-2.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                    <span>Pay {pkg.price} via Razorpay</span>
                  </button>

                  <p className="text-[10px] text-center text-zinc-500">
                    UPI, Credit/Debit Cards, Net Banking & Wallets accepted
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scope Disclosures & Transparency Note */}
        <div className="max-w-4xl mx-auto mt-16 p-6 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span>Scope & Inclusions Transparency</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Our package rates cover custom design, front-end development, mobile responsiveness, on-page SEO setup, and code handover. Recurring third-party costs such as annual domain registration, cloud hosting, commercial CMS licenses, premium third-party plugins, and payment gateway transaction fees are paid directly to their respective providers. Continuous ongoing maintenance is available under separate maintenance plans.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PAY CUSTOM AMOUNT CARD (EXACT REPLICA OF USER DESIGN) */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-[#0d1020]/95 border border-[#1e2544] p-8 sm:p-10 shadow-2xl backdrop-blur-xl text-center overflow-hidden">
            {/* Subtle glow backdrop */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-blue-600/10 blur-[70px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Pay Custom Amount
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                Already discussed your project with us? Enter the agreed amount below and proceed to payment securely.
              </p>

              <form onSubmit={handleCustomPaymentSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <div className="relative w-full sm:w-64">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium text-sm select-none">
                      ₹
                    </span>
                    <input
                      type="text"
                      inputMode="decimal"
                      required
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        if (amountError) setAmountError(null);
                      }}
                      className="w-full pl-8 pr-4 py-3 rounded-full bg-[#181c2f] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1e4db7] hover:bg-[#2563eb] active:scale-95 text-white font-medium text-sm shadow-lg shadow-blue-900/30 transition-all duration-200 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                  >
                    {isProcessing ? 'Connecting...' : 'Proceed to Pay'}
                  </button>
                </div>

                {amountError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-rose-400 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{amountError}</span>
                  </motion.div>
                )}

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Secured by 256-bit encrypted Razorpay Checkout</span>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* FAQ Quick Accordion / Cards */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold text-white text-center mb-8">
            Frequently Asked Questions About Pricing & Payments
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold text-white">Which payment methods are supported?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We accept all major Indian & International debit/credit cards (Visa, Mastercard, RuPay, Amex), UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across 50+ banks, and direct NEFT/RTGS transfers.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold text-white">How do milestone payments work?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Standard projects operate on a 50% advance milestone to initiate design architecture, and the remaining 50% balance upon staging approval before production handover.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold text-white">Do I receive an official invoice / receipt?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Yes. Every completed transaction generates an instant digital Razorpay receipt with a unique transaction reference ID, followed by an official itemized agency invoice.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold text-white">Are domain and hosting included?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We configure and deploy your site on your choice of hosting (Vercel, Netlify, VPS, AWS, etc.). Domain and hosting accounts remain 100% under your ownership.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* PAYMENT SUCCESS RECEIPT MODAL */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {paymentSuccess && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setPaymentSuccess(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-[#090b14] border border-white/15 p-6 sm:p-8 shadow-2xl text-center overflow-hidden"
            >
              {/* Glow backdrop */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-emerald-500/20 blur-3xl pointer-events-none" />

              <button
                onClick={() => setPaymentSuccess(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                Payment Successful!
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Your transaction has been processed securely via Razorpay.
              </p>

              {/* Receipt Summary Card */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Item / Scope:</span>
                  <span className="text-white font-medium truncate max-w-[180px]">{paymentSuccess.itemName}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Amount Paid:</span>
                  <span className="text-emerald-400 font-bold text-sm">₹{paymentSuccess.amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Payment ID:</span>
                  <span className="text-indigo-300 font-semibold truncate max-w-[180px]">{paymentSuccess.paymentId}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Date & Time:</span>
                  <span className="text-zinc-300">{paymentSuccess.timestamp}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Kairo Technologies! I have completed payment of ₹${paymentSuccess.amount.toLocaleString('en-IN')} via Razorpay. Reference ID: ${paymentSuccess.paymentId}. Please find my confirmation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={() => setPaymentSuccess(null)}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* RAZORPAY CONFIGURATION MODAL (WHEN KEY NOT SET) */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isKeyModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsKeyModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-[#0b0e1b] border border-white/15 p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-24 bg-indigo-600/20 blur-3xl pointer-events-none" />

              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    Razorpay Gateway Setup
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Provide your Razorpay Key ID to launch live checkout
                  </p>
                </div>
              </div>

              {pendingPayment && (
                <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 flex justify-between items-center">
                  <span>Pending Payment:</span>
                  <span className="font-bold text-white font-mono">₹{pendingPayment.amount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                You can obtain your Key ID from the <a href="https://dashboard.razorpay.com/app/keys" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline inline-flex items-center gap-1">Razorpay Dashboard <ExternalLink className="w-3 h-3" /></a>. Key IDs start with <code className="text-indigo-300 font-mono">rzp_test_</code> (for testing) or <code className="text-emerald-300 font-mono">rzp_live_</code> (for production).
              </p>

              <form onSubmit={handleSaveKeyAndRetry} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Razorpay Key ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="rzp_test_..."
                    value={inputKey}
                    onChange={(e) => {
                      setInputKey(e.target.value);
                      if (keyError) setKeyError(null);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-indigo-500"
                  />
                  {keyError && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{keyError}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 rounded-xl bg-[#1e4db7] hover:bg-[#2563eb] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Save Key & Proceed to Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirectPay}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pay via WhatsApp / UPI</span>
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                Tip: You can also permanently set <code className="text-zinc-400 font-mono">VITE_RAZORPAY_KEY_ID</code> in your <code className="text-zinc-400 font-mono">.env</code> file.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
