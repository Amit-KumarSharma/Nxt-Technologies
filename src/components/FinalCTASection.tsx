import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MessageCircle, 
  Send, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Globe, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG } from '../data/agencyData';

interface FinalCTASectionProps {
  prefilledBusiness?: string;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ prefilledBusiness }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: prefilledBusiness || 'Corporate / Business',
    message: '',
    sendToWhatsapp: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Corporate / Business',
    'Starter Website (₹4,999 Package)',
    'Business Website (₹9,999 Package)',
    'E-commerce Store (₹19,999+ Package)',
    'Healthcare & Clinic',
    'Restaurant / Hospitality',
    'Real Estate & Luxury',
    'Education & Coaching',
    'Industrial & Manufacturing',
    'Startup & SaaS',
    'Agreed Custom Quotation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      if (formData.sendToWhatsapp) {
        const msg = `Hello Nxt Technologies!%0A%0A*New Project Inquiry:*%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Email:* ${encodeURIComponent(formData.email)}%0A- *Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A- *Business / Package:* ${encodeURIComponent(formData.businessType)}%0A- *Project Message:* ${encodeURIComponent(formData.message)}`;
        const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${msg}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }, 800);
  };

  const whatsappDirectUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg)}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#040408]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-violet-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Ready for the Next Step?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Your Business Deserves a{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Better Website.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Let's build something exceptional for your brand.
          </motion.p>

          {/* Quick Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-white/80" />
            </a>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 flex items-center justify-center gap-2.5 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Contact Form & Official Contact Details Container */}
        <div id="contact-form" className="max-w-5xl mx-auto rounded-3xl glass-card border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Official Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold">
                  Official Channels
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  Connect with our team
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Have questions or want a direct consultation on website packages? Reach out directly via email, phone, or WhatsApp.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-zinc-400 block">Direct Inquiries</span>
                    <a 
                      href={`mailto:${AGENCY_CONFIG.email}`} 
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {AGENCY_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Direct Phone (India)</span>
                    <a 
                      href={`tel:${AGENCY_CONFIG.phoneTel}`} 
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors font-mono"
                    >
                      {AGENCY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">WhatsApp Click-to-Chat</span>
                    <a 
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono"
                    >
                      {AGENCY_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Service Reach</span>
                    <span className="text-sm font-medium text-zinc-300">
                      {AGENCY_CONFIG.locationDisplay}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Transparent deliverables & milestone schedules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Fair INR (₹) packages & custom project quotations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Fast response within standard business hours</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Project Request Received!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We've logged your request regarding <span className="text-white font-semibold">{formData.businessType}</span> and will get in touch with you at <span className="text-white font-semibold">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Work Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Type / Package field */}
                  <div>
                    <label htmlFor="contact-business-type" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Package or Business Type *
                    </label>
                    <select
                      id="contact-business-type"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                    >
                      {businessTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0b0c16] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Project Goals & Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell us what you want to achieve, any deadline, or specific features you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* WhatsApp Sync Option */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="sync-whatsapp"
                      type="checkbox"
                      checked={formData.sendToWhatsapp}
                      onChange={(e) => setFormData({ ...formData, sendToWhatsapp: e.target.checked })}
                      className="w-4 h-4 rounded bg-black/50 border-white/20 text-indigo-600 focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="sync-whatsapp" className="text-xs text-zinc-300 cursor-pointer select-none">
                      Connect via WhatsApp directly with this message
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
