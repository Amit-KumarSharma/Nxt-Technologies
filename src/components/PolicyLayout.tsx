import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  children
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const policyLinks = [
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Refund & Cancellation Policy', path: '/refund-policy' },
    { label: 'Payment & Project Policy', path: '/payment-policy' },
    { label: 'Service Delivery Policy', path: '/service-policy' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-600/10 via-sky-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Policy Header */}
        <div className="mb-12 border-b border-white/[0.08] pb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span>Nxt Technologies Legal Documentation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base text-zinc-400 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <div className="mt-4 text-xs font-mono text-zinc-500">
            Last Updated: {lastUpdated} • Governing Jurisdiction: India
          </div>
        </div>

        {/* Policy Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed"
        >
          {children}
        </motion.div>

        {/* Footer Policy Switcher Nav */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-4">
            Related Policies & Agreements:
          </span>
          <div className="flex flex-wrap gap-2">
            {policyLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
