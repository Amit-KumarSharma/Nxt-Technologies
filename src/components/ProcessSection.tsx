import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  PenTool, 
  Code, 
  Rocket, 
  Check, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 1:
        return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Code className="w-5 h-5 text-violet-400" />;
      case 3:
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-indigo-950/20 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-4"
          >
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Methodical Execution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Our Proven{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              4-Step Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400"
          >
            From the initial strategy session to the final production deployment, our transparent four-stage sprint keeps your project strictly on time, on budget, and exceeding expectations.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Animated Connecting Line */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-white/10 -z-0">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer rounded-2xl p-6 glass-card border transition-all duration-300 ${
                  activeStepIndex === idx
                    ? 'border-indigo-500/60 bg-[#0e1122] shadow-xl shadow-indigo-950/40 -translate-y-1'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {/* Step indicator node */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                    activeStepIndex === idx
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-[#090b14] border-white/10 text-zinc-300'
                  }`}>
                    {getStepIcon(idx)}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-zinc-500 block">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {step.tagline}
                </p>

                {/* Deliverables tags */}
                <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                  {step.deliverables.slice(0, 2).map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300 truncate">
                      <Check className="w-3 h-3 text-indigo-400 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="block lg:hidden relative space-y-6">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-gradient-to-b from-sky-500 via-indigo-500 to-emerald-400 -z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-14"
            >
              {/* Timeline circle badge */}
              <div className="absolute left-3 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080a14] border-2 border-indigo-500 flex items-center justify-center text-xs font-mono font-bold text-indigo-300 z-10 shadow-lg shadow-indigo-600/30">
                {step.step}
              </div>

              <div className="rounded-2xl glass-card border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {step.number} • {step.duration}
                  </span>
                  <div className="p-1 rounded-lg bg-white/5">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-zinc-300">
                  {step.tagline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Deliverables:
                  </span>
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Phase Detail Showcase Card */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-2xl bg-gradient-to-r from-sky-950/20 via-indigo-950/30 to-violet-950/20 border border-white/10 p-6 sm:p-8 hidden lg:block"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold">
                  Phase {PROCESS_STEPS[activeStepIndex].step} Deep Dive
                </span>
                <span className="text-xs text-zinc-400">
                  Target Duration: {PROCESS_STEPS[activeStepIndex].duration}
                </span>
              </div>
              
              <h4 className="text-2xl font-display font-bold text-white">
                {PROCESS_STEPS[activeStepIndex].title}: {PROCESS_STEPS[activeStepIndex].tagline}
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 shrink-0 w-80 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                Deliverables Package
              </span>
              <ul className="space-y-1.5">
                {PROCESS_STEPS[activeStepIndex].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
