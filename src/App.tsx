import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { FeaturedWorkSection } from './components/FeaturedWorkSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated New Pages
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { PaymentPolicyPage } from './pages/PaymentPolicyPage';
import { ServicePolicyPage } from './pages/ServicePolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

import { AGENCY_CONFIG } from './data/agencyData';

interface HomePageProps {
  onOpenProjectModal: (service?: string) => void;
  prefilledIndustry: string;
  onSelectIndustry: (ind: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onOpenProjectModal,
  prefilledIndustry,
  onSelectIndustry
}) => {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero onOpenProjectModal={() => onOpenProjectModal()} />

      {/* 2. Services Section */}
      <ServicesSection onSelectService={(srv) => onOpenProjectModal(srv)} />

      {/* 3. Industries We Serve */}
      <IndustriesSection onSelectIndustry={onSelectIndustry} />

      {/* 4. Featured Work */}
      <FeaturedWorkSection onOpenProjectModal={() => onOpenProjectModal()} />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Our Process */}
      <ProcessSection />

      {/* 7. Final Call to Action with Contact Form & WhatsApp */}
      <FinalCTASection prefilledBusiness={prefilledIndustry} />
    </main>
  );
};

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Business Website (₹9,999)');
  const [prefilledIndustry, setPrefilledIndustry] = useState('');
  const navigate = useNavigate();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenProjectModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleSelectIndustry = (industryName: string) => {
    setPrefilledIndustry(industryName);
    const contactSection = document.getElementById('contact-form') || document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact-form');
    }
  };

  const whatsappDirectUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg)}`;

  return (
    <div className="relative min-h-screen bg-[#040407] text-[#EDEDF2] selection:bg-indigo-600/30 selection:text-white">
      {/* Route change scroll handler */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar onOpenProjectModal={() => handleOpenProjectModal()} />

      {/* Dynamic Route Switching */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onOpenProjectModal={handleOpenProjectModal}
              prefilledIndustry={prefilledIndustry}
              onSelectIndustry={handleSelectIndustry}
            />
          } 
        />
        <Route 
          path="/pricing" 
          element={<PricingPage onOpenProjectModal={handleOpenProjectModal} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage />} 
        />
        <Route 
          path="/terms" 
          element={<TermsPage />} 
        />
        <Route 
          path="/privacy" 
          element={<PrivacyPolicyPage />} 
        />
        <Route 
          path="/refund-policy" 
          element={<RefundPolicyPage />} 
        />
        <Route 
          path="/payment-policy" 
          element={<PaymentPolicyPage />} 
        />
        <Route 
          path="/service-policy" 
          element={<ServicePolicyPage />} 
        />
        <Route 
          path="/cookie-policy" 
          element={<CookiePolicyPage />} 
        />
        <Route 
          path="/disclaimer" 
          element={<DisclaimerPage />} 
        />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Project Proposal Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Persistent Floating WhatsApp Quick-Connect Trigger */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title={`Chat directly on WhatsApp: ${AGENCY_CONFIG.whatsappDisplay}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
