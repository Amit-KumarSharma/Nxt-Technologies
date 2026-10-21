import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Gauge, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'metrics'>('preview');

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-32 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Glows & Grid Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2438_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

        {/* Top radial ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[550px] bg-gradient-to-b from-indigo-600/20 via-sky-500/10 to-transparent blur-[120px] rounded-full" />
        
        {/* Secondary ambient lights */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-violet-600/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/15 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status Pill */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-medium text-zinc-300 shadow-xl"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200">Accepting Select Projects for 2026</span>
            <span className="text-zinc-500">•</span>
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              Kairo Technologies
            </span>
          </motion.div>
        </div>

        {/* Main Headline & Supporting Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]"
          >
            We Build{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>{' '}
            That Grow Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            From business websites to powerful e-commerce experiences, we help brands establish their digital presence and turn visitors into customers.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenProjectModal}
              id="hero-start-project-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-300 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={scrollToWork}
              id="hero-explore-work-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium text-zinc-200 hover:text-white glass-card hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>

        {/* 3D-Inspired Interactive Device Showcase / Interface Element */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-6"
        >
          {/* Subtle Outer Frame with Glow */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-indigo-500/20 to-transparent shadow-2xl shadow-indigo-950/60">
            <div className="relative rounded-2xl bg-[#090b14]/90 backdrop-blur-xl border border-white/[0.06] overflow-hidden">
              
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#07080f]/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-zinc-500 font-mono hidden sm:inline">
                    https://kairotechnologies.com/preview
                  </span>
                </div>

                {/* View Toggles */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                      activeTab === 'preview' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Live Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                      activeTab === 'code' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                      activeTab === 'metrics' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Lighthouse 100
                  </button>
                </div>
              </div>

              {/* Showcase Body Content */}
              <div className="p-5 md:p-8 min-h-[340px] flex flex-col justify-center">
                {activeTab === 'preview' && (
                  <div className="space-y-6">
                    {/* Simulated High-End Digital Experience Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> High-End Bespoke Architecture
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                          Transforming Modern Businesses Into Digital Leaders
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          We eliminate slow templates and disconnected workflows. Every website we build features custom animations, high-intent lead funnels, and effortless mobile responsiveness.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {['React / Next.js', 'Tailwind Styling', 'GSAP & Motion', 'Frictionless SEO'].map((tech) => (
                            <span 
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Visual Card */}
                      <div className="md:col-span-5">
                        <div className="relative rounded-xl p-5 bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-indigo-500/30 shadow-inner">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <span className="text-xs text-zinc-400 font-medium">Conversion Engine</span>
                            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" /> Active
                            </span>
                          </div>

                          <div className="py-4 space-y-3">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-zinc-300">Average Session Duration</span>
                              <span className="font-mono text-white font-semibold">+184%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                              <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full w-[84%] rounded-full" />
                            </div>

                            <div className="flex justify-between items-center text-xs pt-1">
                              <span className="text-zinc-300">Direct Inquiries Captured</span>
                              <span className="font-mono text-sky-400 font-semibold">+3.2x</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[92%] rounded-full" />
                            </div>
                          </div>

                          <div className="mt-2 p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                            <span className="text-[11px] text-zinc-400">Mobile Speed Index</span>
                            <span className="text-xs text-emerald-400 font-mono font-bold">0.4s (Grade A+)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="font-mono text-xs text-zinc-300 space-y-2 bg-black/50 p-5 rounded-xl border border-white/5">
                    <p className="text-zinc-500">// Kairo Technologies - High-Performance Web Architecture</p>
                    <p>
                      <span className="text-indigo-400">export const</span>{' '}
                      <span className="text-sky-300">kairoWebsite</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">framework:</span> <span className="text-emerald-400">"React 19 / TypeScript"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">stylingEngine:</span> <span className="text-emerald-400">"Tailwind CSS + Fluid Tokens"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">animations:</span> <span className="text-emerald-400">"Framer Motion + Smooth Scroll"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">conversionFunnels:</span> <span className="text-sky-300">['WhatsApp Chat', 'Smart Leads', 'Analytics']</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">accessibility:</span> <span className="text-emerald-400">"WCAG 2.1 AA Compliant & Reduced Motion"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">buildTarget:</span> <span className="text-emerald-400">"High-Traffic Production Ready"</span>
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                    {[
                      { label: 'Performance', score: '100', color: 'text-emerald-400', ring: 'border-emerald-500' },
                      { label: 'Accessibility', score: '100', color: 'text-emerald-400', ring: 'border-emerald-500' },
                      { label: 'Best Practices', score: '100', color: 'text-emerald-400', ring: 'border-emerald-500' },
                      { label: 'SEO Ranking', score: '100', color: 'text-emerald-400', ring: 'border-emerald-500' },
                    ].map((metric) => (
                      <div 
                        key={metric.label}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <div className={`w-16 h-16 rounded-full border-2 ${metric.ring} flex items-center justify-center bg-emerald-500/5 mb-3`}>
                          <span className={`text-xl font-bold font-mono ${metric.color}`}>{metric.score}</span>
                        </div>
                        <span className="text-xs text-zinc-300 font-medium text-center">{metric.label}</span>
                        <span className="text-[10px] text-zinc-500 mt-0.5">Google Verified</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="px-6 py-3.5 border-t border-white/[0.06] bg-[#05060c] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Production Grade Security & SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-sky-400" />
                  <span>Adaptive Mobile Layouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-indigo-400" />
                  <span>Sub-Second Page Loads</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden lg:block absolute -left-10 -bottom-6 p-4 rounded-xl glass-card border border-white/10 shadow-xl max-w-xs animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Client Results</p>
                <p className="text-sm font-semibold text-white">+140% Average Inquiry Growth</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 -top-6 p-4 rounded-xl glass-card border border-white/10 shadow-xl max-w-xs animate-float-delayed">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Design Standard</p>
                <p className="text-sm font-semibold text-white">Bespoke Clean Code</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agency Key Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          {AGENCY_CONFIG.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-xl glass-card border border-white/[0.06] text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
