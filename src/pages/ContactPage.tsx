import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG } from '../data/agencyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Corporate / Business',
    serviceRequired: 'Business Website Development',
    message: '',
    sendViaWhatsApp: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Corporate / Business',
    'Healthcare & Clinic',
    'Restaurant / Hospitality',
    'Real Estate & Luxury',
    'E-commerce & Retail',
    'Education & Coaching',
    'Industrial & Manufacturing',
    'Startup & SaaS',
    'Other / Custom'
  ];

  const serviceOptions = [
    'Starter Website (₹4,999)',
    'Business Website (₹9,999)',
    'E-commerce Website (Starting ₹19,999)',
    'Landing Page Development',
    'Custom Web Application',
    'Website Redesign',
    'Website Maintenance',
    'Custom Project Quotation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      if (formData.sendViaWhatsApp) {
        const text = `Hello Kairo Technologies!%0A%0A*New Website Inquiry:*%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Email:* ${encodeURIComponent(formData.email)}%0A- *Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A- *Business Type:* ${encodeURIComponent(formData.businessType)}%0A- *Service Required:* ${encodeURIComponent(formData.serviceRequired)}%0A- *Message:* ${encodeURIComponent(formData.message)}`;
        const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${text}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }, 700);
  };

  const whatsappDirectUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg)}`;

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Connect Directly with Kairo Technologies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Next Website
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Whether you need a new starter website, a comprehensive e-commerce store, or an agreed custom project quotation, we're here to help.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold">
                  Official Channels
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  Fast Direct Contact
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Connect with us directly through email, phone, or WhatsApp for consultations and quotation requests.
                </p>
              </div>

              {/* Direct clickable channels */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5 group hover:border-indigo-500/30 transition-colors">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-zinc-400 block font-medium">Official Email</span>
                    <a 
                      href={`mailto:${AGENCY_CONFIG.email}`}
                      className="text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {AGENCY_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5 group hover:border-sky-500/30 transition-colors">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Phone Support (India)</span>
                    <a 
                      href={`tel:${AGENCY_CONFIG.phoneTel}`}
                      className="text-sm font-semibold text-white hover:text-sky-300 transition-colors font-mono"
                    >
                      {AGENCY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20 flex items-center gap-3.5 group hover:border-emerald-500/40 transition-colors">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-emerald-400 block font-medium">WhatsApp Direct Chat</span>
                    <a 
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors font-mono flex items-center justify-between"
                    >
                      <span>{AGENCY_CONFIG.whatsappDisplay}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        Chat Now
                      </span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Service Reach</span>
                    <span className="text-xs text-zinc-300">
                      {AGENCY_CONFIG.locationDisplay}
                    </span>
                  </div>
                </div>
              </div>

              {/* Response commitment */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Typical response time: Within a few hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Inquiry Transmitted Successfully!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We've received your requirements for <span className="text-indigo-400 font-semibold">{formData.serviceRequired}</span> and will reach out to <span className="text-white font-semibold">{formData.email}</span>.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Fill out the form below and we will prepare tailored recommendations for your project.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                        Business Type *
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#0b0c16]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0b0c16]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Project Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you want to achieve, any deadline, or specific features you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="contact-page-wa"
                      type="checkbox"
                      checked={formData.sendViaWhatsApp}
                      onChange={(e) => setFormData({ ...formData, sendViaWhatsApp: e.target.checked })}
                      className="w-4 h-4 rounded bg-black/50 border-white/20 text-indigo-600 focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="contact-page-wa" className="text-xs text-zinc-300 cursor-pointer select-none">
                      Connect via WhatsApp directly with this message
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-2 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your details are kept confidential and used solely for your project inquiry.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
