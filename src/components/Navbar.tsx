import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  MessageCircle, 
  ArrowRight, 
  Sparkles,
  Phone
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AGENCY_CONFIG } from '../data/agencyData';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionLink = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg)}`;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'py-3.5 glass-nav shadow-lg shadow-black/40' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#07070b] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-xl tracking-tighter bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    K
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                  Kairo
                  <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-normal border border-indigo-500/20">
                    Tech
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 -mt-0.5">
                  Web Development
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
              <Link
                to="/"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isHomePage ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Home
              </Link>

              <button
                onClick={() => handleSectionLink('services')}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() => handleSectionLink('industries')}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Industries
              </button>

              <button
                onClick={() => handleSectionLink('work')}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Portfolio
              </button>

              <Link
                to="/pricing"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1 ${
                  location.pathname === '/pricing' ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Pricing</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  ₹
                </span>
              </Link>

              <button
                onClick={() => handleSectionLink('why-us')}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Why Us
              </button>

              <Link
                to="/contact"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  location.pathname === '/contact' ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Actions: Phone, WhatsApp & CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Phone quick call */}
              <a
                href={`tel:${AGENCY_CONFIG.phoneTel}`}
                aria-label="Call Kairo Technologies"
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
                title={`Call: ${AGENCY_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{AGENCY_CONFIG.phoneDisplay}</span>
              </a>

              {/* WhatsApp direct trigger */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-all duration-200"
                title={`Chat on WhatsApp: ${AGENCY_CONFIG.whatsappDisplay}`}
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Start Project CTA Button */}
              <button
                onClick={onOpenProjectModal}
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-indigo-600/40 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-300 animate-pulse" />
                <span>Start Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${AGENCY_CONFIG.phoneTel}`}
                aria-label="Call"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300"
              >
                <Phone className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#07070c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 lg:hidden shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5"
              >
                <span>Home</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>

              <button
                onClick={() => handleSectionLink('services')}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 text-left"
              >
                <span>Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              <button
                onClick={() => handleSectionLink('industries')}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 text-left"
              >
                <span>Industries</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              <button
                onClick={() => handleSectionLink('work')}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 text-left"
              >
                <span>Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-sky-400 bg-sky-500/10 border border-sky-500/20"
              >
                <span className="flex items-center gap-1.5 font-semibold">
                  <span>Packages & Pricing (INR ₹)</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </Link>

              <button
                onClick={() => handleSectionLink('why-us')}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 text-left"
              >
                <span>Why Choose Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={`tel:${AGENCY_CONFIG.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono font-medium text-zinc-200 bg-white/5 border border-white/10"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  Call: {AGENCY_CONFIG.phoneDisplay}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp ({AGENCY_CONFIG.whatsappDisplay})
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProjectModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/25 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                  Start Your Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
