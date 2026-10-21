import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Target, 
  CheckCircle2, 
  Award, 
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/agencyData';

export const WhyChooseUsSection: React.FC = () => {
  const [activeBenchmark, setActiveBenchmark] = useState<'kairo' | 'generic'>('kairo');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#06070d] border-t border-b border-white/[0.05] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-900/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4"
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Agency Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Kairo Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400"
          >
            We replace cookie-cutter website builders and bloated themes with meticulously engineered, high-performance web systems that drive qualified customers to your business.
          </motion.p>
        </div>

        {/* 4 Benefits Grid — Revealed Progressively */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {WHY_CHOOSE_US_DATA.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl glass-card p-8 border border-white/10 hover:border-indigo-500/40 hover:bg-[#0c0e1a] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-indigo-500/30">
                    {getIcon(benefit.iconName)}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-white font-mono bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                      {benefit.stat}
                    </span>
                    <span className="text-[11px] text-zinc-500 block uppercase tracking-wider">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{benefit.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Performance Comparison Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl bg-[#090b14] border border-white/10 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold">
                Live Speed & Quality Benchmark
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                Kairo Custom Code vs. Generic Page Builders
              </h4>
            </div>

            {/* Switcher */}
            <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveBenchmark('kairo')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeBenchmark === 'kairo'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Kairo Technologies
              </button>
              <button
                onClick={() => setActiveBenchmark('generic')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeBenchmark === 'generic'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Generic WordPress / Templates
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {activeBenchmark === 'kairo' ? (
              <>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Load Time (LCP)</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">0.4s</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Instant First Paint</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Lighthouse Score</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">99 / 100</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Perfect Optimization</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Code Weight</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">~120 KB</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Ultra Lean</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Lead Conversion</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">+140%</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Optimized Psychology</span>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Load Time (LCP)</span>
                  <span className="text-2xl font-mono font-bold text-rose-400">4.8s</span>
                  <span className="text-[10px] text-rose-400/70 block mt-1">53% Bounce Rate Risk</span>
                </div>
                <div className="p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Lighthouse Score</span>
                  <span className="text-2xl font-mono font-bold text-amber-400">48 / 100</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Plugin Overhead</span>
                </div>
                <div className="p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Code Weight</span>
                  <span className="text-2xl font-mono font-bold text-rose-400">4.5 MB+</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">Bloated Scripts</span>
                </div>
                <div className="p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 text-center">
                  <span className="text-xs text-zinc-400 block mb-1">Lead Conversion</span>
                  <span className="text-2xl font-mono font-bold text-zinc-500">Baseline</span>
                  <span className="text-[10px] text-zinc-500 block mt-1">High Abandonment</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
