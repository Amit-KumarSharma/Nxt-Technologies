import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Check, 
  ArrowRight,
  X
} from 'lucide-react';
import { FEATURED_PROJECTS, type ProjectItem } from '../data/agencyData';

interface FeaturedWorkSectionProps {
  onOpenProjectModal: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ onOpenProjectModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [viewModes, setViewModes] = useState<Record<string, 'desktop' | 'mobile'>>({});

  const toggleViewMode = (projectId: string, mode: 'desktop' | 'mobile', e: React.MouseEvent) => {
    e.stopPropagation();
    setViewModes(prev => ({
      ...prev,
      [projectId]: mode
    }));
  };

  const categories = ['All', 'Healthcare', 'Restaurants', 'Real Estate', 'E-commerce & Retail', 'Startups & Tech', 'Travel & Hospitality'];

  const filteredProjects = selectedFilter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.industry.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  // Simulated Visual Previews for Concept Projects
  const renderSimulatedPreview = (project: ProjectItem, mode: 'desktop' | 'mobile') => {
    const isMobile = mode === 'mobile';

    return (
      <div className={`w-full h-full transition-all duration-300 flex items-center justify-center p-3 sm:p-5 ${
        isMobile ? 'max-w-[280px] mx-auto' : 'w-full'
      }`}>
        <div className={`w-full rounded-xl bg-[#080910] border border-white/10 shadow-2xl overflow-hidden flex flex-col ${
          isMobile ? 'h-[360px] border-zinc-700' : 'h-[280px] sm:h-[320px]'
        }`}>
          {/* Mock Browser Header */}
          <div className="px-3 py-2 bg-black/60 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="truncate max-w-[180px]">{project.title.toLowerCase().replace(/\s+/g, '')}.nxt.dev</span>
            <span className="text-[10px] text-zinc-600 hidden sm:inline">HTTPS</span>
          </div>

          {/* Mock Website Body */}
          <div className="flex-1 p-4 bg-gradient-to-b from-[#0a0d18] to-[#04050a] flex flex-col justify-between overflow-hidden relative">
            {/* Top Bar inside mockup */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-bold text-white tracking-wider uppercase font-display flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                {project.title.split(' ')[0]}
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-2 rounded bg-white/10" />
                <span className="w-8 h-2 rounded bg-white/10" />
              </div>
            </div>

            {/* Middle Hero inside mockup */}
            <div className="space-y-2 py-3">
              <div className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                {project.category}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display line-clamp-2">
                {project.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-400 line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Bottom Elements inside mockup */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
              <span className="px-2.5 py-1 rounded text-white font-medium" style={{ backgroundColor: project.color }}>
                {isMobile ? 'Book Now' : 'Interactive Prototype'}
              </span>
              <span className="text-zinc-400 font-mono">
                {project.stats.value}
              </span>
            </div>

            {/* Subtle background graphic line */}
            <div 
              className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-25 pointer-events-none"
              style={{ backgroundColor: project.color }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Featured Agency Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Crafted with{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Precision & Vision
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400"
          >
            Explore our curated concept projects and design systems. Each architecture is precision-built with smooth scroll dynamics, mobile responsiveness, and high conversion psychology.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 max-w-4xl mx-auto justify-start sm:justify-center scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Large cards with desktop/mobile switcher) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const currentMode = viewModes[project.id] || 'desktop';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl glass-card border border-white/10 hover:border-indigo-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40"
              >
                {/* Card Top: Controls & Badges */}
                <div className="p-6 pb-2 flex items-center justify-between border-b border-white/[0.06]">
                  {/* Concept Label */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                    <span>{project.conceptNote}</span>
                  </div>

                  {/* Desktop / Mobile Toggle */}
                  <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/10">
                    <button
                      onClick={(e) => toggleViewMode(project.id, 'desktop', e)}
                      aria-label="Desktop view"
                      className={`p-1.5 rounded text-xs transition-colors ${
                        currentMode === 'desktop' ? 'bg-indigo-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                      title="Desktop view"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => toggleViewMode(project.id, 'mobile', e)}
                      aria-label="Mobile view"
                      className={`p-1.5 rounded text-xs transition-colors ${
                        currentMode === 'mobile' ? 'bg-indigo-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                      title="Mobile view"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Middle: Simulated Live Preview */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="relative cursor-pointer bg-[#05060d]/80 py-4 px-2 transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  {renderSimulatedPreview(project, currentMode)}

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-2 shadow-2xl">
                      <span>Inspect Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Details & Tags */}
                <div className="p-6 pt-4 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-0.5">
                        {project.title}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">{project.stats.label}</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-emerald-400">
                        {project.stats.value}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-medium text-indigo-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Project Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenProjectModal}
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
                    >
                      Request Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Inspection Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveModalProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-[#090b14] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] cursor-default"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeModalProject.color }} />
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
                    {activeModalProject.conceptNote}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-indigo-400 text-sm mt-1">{activeModalProject.category}</p>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.description}
                </p>

                {/* Key Deliverables & Engineering highlights */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Engineered Deliverables & Flow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    Ready to build a website engineered for your business?
                  </div>
                  <button
                    onClick={() => {
                      setActiveModalProject(null);
                      onOpenProjectModal();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-95 shadow-lg shadow-indigo-600/30"
                  >
                    Discuss This Project Type
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
