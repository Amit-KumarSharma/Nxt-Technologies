import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ShoppingCart, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Check,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-sky-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>High-Impact Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Capabilities Engineered for{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Measurable Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400"
          >
            We don't sell bloated packages. We design, build, and scale high-conversion web solutions specifically engineered around your business objectives.
          </motion.p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0c0e18] hover:shadow-xl hover:shadow-indigo-950/40"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-indigo-500/30">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] text-zinc-400 border border-white/[0.06]">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">
                    Included Capabilities
                  </span>
                  <ul className="space-y-1.5 mt-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card bottom CTA */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="text-[11px] text-zinc-400">
                  <span className="text-zinc-500 block">Deliverables:</span>
                  <span className="text-zinc-300 font-medium">{service.deliverables}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/20 text-xs font-semibold transition-all group-hover:translate-x-0.5 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-950/30 via-indigo-950/20 to-purple-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-sm text-zinc-300">
              Need a specialized architecture not listed here? We build custom web apps, integrations, and tailored workflows.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Bespoke Project')}
            className="shrink-0 text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
          >
            Talk to an Engineer
          </button>
        </div>

      </div>
    </section>
  );
};
