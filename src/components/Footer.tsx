import React from 'react';
import { 
  ArrowUp, 
  MessageCircle, 
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg)}`;

  return (
    <footer className="relative bg-[#020205] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content — 4 Well-Organized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Column 1: Brand Info & Official Contact (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-[#07070b] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-xl tracking-tighter bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    K
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                  {AGENCY_CONFIG.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 -mt-0.5">
                  Website Development Agency
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              We engineer high-performance, conversion-focused websites and modern digital experiences that elevate brands, inspire confidence, and turn visitors into customers.
            </p>

            {/* Official Contact Info */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a 
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="text-zinc-300 hover:text-white transition-colors truncate"
                >
                  {AGENCY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a 
                  href={`tel:${AGENCY_CONFIG.phoneTel}`}
                  className="text-zinc-300 hover:text-white transition-colors font-mono"
                >
                  {AGENCY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                >
                  WhatsApp: {AGENCY_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 text-zinc-500 text-[11px] pt-1">
                <Globe className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{AGENCY_CONFIG.locationDisplay}</span>
              </div>
            </div>

            {/* Social media links with inline SVG icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76a1.76 1.76 0 0 0-1.75-1.76 1.76 1.76 0 0 0-1.75 1.76c0 .97.78 1.76 1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">Industries</a>
              </li>
              <li>
                <a href="/#work" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <Link to="/pricing" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors flex items-center gap-1">
                  <span>Packages & Pricing</span>
                  <span className="text-[10px] px-1 rounded bg-indigo-500/20 text-indigo-300">INR</span>
                </Link>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">About & Why Us</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Breakdown (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Starter Websites</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Business Websites</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">E-commerce Stores</Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Landing Pages</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Custom Web Apps</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Website Redesign</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Essential Legal & Policies (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-white transition-colors">Refund & Cancellation Policy</Link>
              </li>
              <li>
                <Link to="/payment-policy" className="hover:text-white transition-colors">Payment and Project Policy</Link>
              </li>
              <li>
                <Link to="/service-policy" className="hover:text-white transition-colors">Service Delivery Policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {AGENCY_CONFIG.name}. All rights reserved.</span>
            <span>•</span>
            <span>Serving Businesses Across India & Worldwide</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/5 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
