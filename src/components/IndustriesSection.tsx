import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  UtensilsCrossed, 
  Home, 
  GraduationCap, 
  ShoppingBag, 
  Compass, 
  Factory, 
  Rocket, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/agencyData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return <Building2 className="w-5 h-5" />;
      case 'restaurants':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'real-estate':
        return <Home className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'ecommerce-retail':
        return <ShoppingBag className="w-5 h-5" />;
      case 'travel':
        return <Compass className="w-5 h-5" />;
      case 'manufacturing':
        return <Factory className="w-5 h-5" />;
      case 'startups':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedIndustry = INDUSTRIES_DATA.find(i => i.id === activeIndustryId) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#05060b] border-t border-b border-white/[0.05] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-950/20 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Tailored Industry Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Industries We{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Elevate
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400"
          >
            A clinic website has completely different technical requirements than a luxury fashion boutique or an industrial supplier. We engineer every website specifically around industry workflows and buyer expectations.
          </motion.p>
        </div>

        {/* Industry Pill Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none max-w-5xl mx-auto justify-start lg:justify-center">
          {INDUSTRIES_DATA.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20 border border-indigo-400/30'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                <span>{getIndustryIcon(ind.id)}</span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Dynamic Industry Showcase Card */}
        <div className="mt-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl glass-card border border-white/10 p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Dynamic Industry Gradient Layer */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${selectedIndustry.gradient} opacity-40 pointer-events-none`} 
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
                      {getIndustryIcon(selectedIndustry.id)}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold block">
                        {selectedIndustry.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                        {selectedIndustry.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {selectedIndustry.description}
                  </p>

                  {/* Tailored Requirements List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>Industry-Tailored Requirements & Tech:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedIndustry.tailoredRequirements.map((req, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-200 leading-snug">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectIndustry(selectedIndustry.name)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-90 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                    >
                      <span>Build a {selectedIndustry.name} Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="text-xs font-mono px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Impact: {selectedIndustry.keyMetric}</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Wireframe Mockup */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-[#090b14] border border-white/10 p-5 shadow-2xl space-y-4">
                    {/* Mockup Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {selectedIndustry.mockupType}
                      </span>
                    </div>

                    {/* Interactive UI Mockup Blueprint */}
                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-24 h-4 rounded bg-white/10" />
                        <div className="w-16 h-4 rounded-full bg-indigo-500/20" />
                      </div>
                      
                      <div className="space-y-1.5 py-2">
                        <div className="w-full h-3 rounded bg-white/15" />
                        <div className="w-4/5 h-3 rounded bg-white/10" />
                        <div className="w-3/5 h-3 rounded bg-white/5" />
                      </div>

                      {/* Mockup custom interactive elements */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                          <span className="text-[10px] text-zinc-400 block font-mono">Conversion Point</span>
                          <span className="text-xs text-white font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> WhatsApp & Forms
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                          <span className="text-[10px] text-zinc-400 block font-mono">Device Layout</span>
                          <span className="text-xs text-white font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Mobile First (100%)
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/20 text-[11px] text-zinc-300 flex items-center justify-between">
                        <span>Speed & Core Web Vitals</span>
                        <span className="font-mono text-emerald-400 font-bold">Grade 99+</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-center text-zinc-500">
                      Engineered for high user retention and zero bounce rate.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Grid of all 8 Industries for instant scan */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-5xl mx-auto">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                ind.id === activeIndustryId
                  ? 'bg-indigo-600/15 border-indigo-500/40 text-white'
                  : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-indigo-400">{getIndustryIcon(ind.id)}</span>
                <span className="text-[10px] font-mono text-zinc-500">0{INDUSTRIES_DATA.indexOf(ind) + 1}</span>
              </div>
              <div className="text-xs font-semibold text-zinc-200 line-clamp-1">
                {ind.name}
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
