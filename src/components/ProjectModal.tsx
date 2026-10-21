import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG } from '../data/agencyData';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  isOpen, 
  onClose,
  defaultService 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || 'Business Website (₹9,999)',
    budget: '₹10,000 - ₹25,000',
    timeline: 'Within 2-4 Weeks',
    notes: '',
    openWhatsapp: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const services = [
    'Starter Website (₹4,999)',
    'Business Website (₹9,999)',
    'E-commerce Store (₹19,999+)',
    'Custom Web Application',
    'Landing Page Development',
    'Website Redesign',
    'Website Maintenance',
    'Agreed Custom Quotation'
  ];

  const budgets = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000+'
  ];

  const timelines = [
    'Urgent (1-2 wks)',
    'Within 2-4 Wks',
    '1-2 Months',
    'Flexible'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {
        // ignore
      }

      if (formData.openWhatsapp) {
        const msg = `Hello Kairo Technologies!%0A%0A*Project Inquiry Scope:*%0A- *Client:* ${encodeURIComponent(formData.name)}%0A- *Email:* ${encodeURIComponent(formData.email)}%0A- *Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A- *Company:* ${encodeURIComponent(formData.company || 'Not specified')}%0A- *Selected Package / Service:* ${encodeURIComponent(formData.service)}%0A- *Target Budget:* ${encodeURIComponent(formData.budget)}%0A- *Timeline:* ${encodeURIComponent(formData.timeline)}%0A- *Brief:* ${encodeURIComponent(formData.notes || 'Looking for a formal proposal')}`;
        const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${msg}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto cursor-pointer"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-3xl bg-[#090b14] border border-white/15 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden cursor-default"
        >
          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-28 bg-indigo-600/20 blur-3xl pointer-events-none" />

          {/* Close button with high z-index and clear tap target */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Project Inquiry Initiated!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. We've logged your request for <span className="text-indigo-400 font-semibold">{formData.service}</span>. Our lead team will review your requirements and follow up via email at <span className="text-white font-semibold">{formData.email}</span>.
              </p>

              <div className="pt-6 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-colors hover:bg-zinc-200 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Start Your Project</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  Let's Build Something Exceptional
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Tell us a bit about your project goals. We'll respond with actionable recommendations and a project roadmap.
                </p>
              </div>

              {/* Basic Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 uppercase tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 uppercase tracking-wider">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 uppercase tracking-wider">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Service / Package Needed
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`p-2 rounded-xl text-left text-[11px] font-medium border transition-all cursor-pointer leading-tight ${
                        formData.service === srv
                          ? 'bg-indigo-600/25 border-indigo-400 text-white shadow-md'
                          : 'bg-black/30 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget & Timeline dual row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Target Budget (INR ₹)
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`p-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-sky-600/25 border-sky-400 text-white shadow-md'
                            : 'bg-black/30 border-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Target Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`p-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                          formData.timeline === t
                            ? 'bg-indigo-600/25 border-indigo-400 text-white shadow-md'
                            : 'bg-black/30 border-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 uppercase tracking-wider">
                  Brief Project Overview
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a short note on what you need, current website URL, or key objectives..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              {/* WhatsApp auto-connect checkbox */}
              <div className="flex items-center gap-2">
                <input
                  id="modal-wa"
                  type="checkbox"
                  checked={formData.openWhatsapp}
                  onChange={(e) => setFormData({ ...formData, openWhatsapp: e.target.checked })}
                  className="w-4 h-4 rounded bg-black/50 border-white/20 text-indigo-600 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="modal-wa" className="text-xs text-zinc-300 cursor-pointer select-none">
                  Also open WhatsApp to connect directly with the lead engineer
                </label>
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Project Scope...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-sky-300" />
                      <span>Request Project Scope & Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligations • Direct response within 24 hours</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
