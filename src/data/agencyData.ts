export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  deliverables: string;
  badge: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tailoredRequirements: string[];
  gradient: string;
  accentColor: string;
  mockupType: string;
  keyMetric: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  conceptNote: string;
  tags: string[];
  highlights: string[];
  color: string;
  stats: { label: string; value: string };
  previewType: 'clinic' | 'dining' | 'realty' | 'ecommerce' | 'saas' | 'hospitality';
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  iconName: string;
  detail: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  amountNumber: number;
  isStartingAt?: boolean;
  tagline: string;
  badge?: string;
  pageLimit: string;
  revisions: string;
  features: string[];
  deliverables: string;
  popular?: boolean;
  ctaText: string;
}

export const AGENCY_CONFIG = {
  name: "Nxt Technologies",
  shortName: "Nxt",
  tagline: "We Build Digital Experiences That Grow Businesses.",
  subheadline: "From business websites to powerful e-commerce experiences, we help brands establish their digital presence and turn visitors into customers.",
  email: "karinakumari1612@gmail.com",
  phoneRaw: "8294291412",
  phoneDisplay: "+91 8294291412",
  phoneTel: "+918294291412",
  whatsappNumber: "918294291412", // India country code (+91) + 8294291412
  whatsappDisplay: "+91 8294291412",
  whatsappDefaultMsg: "Hello Nxt Technologies! I would like to inquire about website development services for my business.",
  country: "India",
  currencySymbol: "₹",
  currencyCode: "INR",
  locationDisplay: "India — Remote / Digital Services Worldwide",
  
  // Payment Gateway Configuration
  // Set your Razorpay Key ID here or pass via VITE_RAZORPAY_KEY_ID in .env
  razorpayKeyId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_RAZORPAY_KEY_ID) || "",
  
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "X (Twitter)", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" }
  ],
  stats: [
    { value: "99.8%", label: "Average Performance Score" },
    { value: "3.2x", label: "Higher Lead Conversion" },
    { value: "100%", label: "Tailored Custom Code" },
    { value: "<4 wks", label: "Average Delivery Time" },
  ]
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "₹4,999",
    amountNumber: 4999,
    tagline: "Ideal for personal brands, local professionals, and small businesses launching their first digital presence.",
    pageLimit: "Up to 3 pages",
    revisions: "One revision round",
    features: [
      "Up to 3 pages (e.g. Home, About, Contact)",
      "Responsive design (desktop, tablet & mobile)",
      "Basic contact form for inquiries",
      "Essential on-page SEO setup (meta tags & headings)",
      "Social media links integration",
      "One revision round included",
      "Clean, modern fast-loading code"
    ],
    deliverables: "Ready-to-deploy static web files, mobile optimized, setup guidance.",
    ctaText: "Get Started"
  },
  {
    id: "business",
    name: "Business Website",
    price: "₹9,999",
    amountNumber: 9999,
    popular: true,
    badge: "Most Popular",
    tagline: "Tailored for growing companies requiring authority, multi-section service layouts, and direct lead generation funnels.",
    pageLimit: "Up to 7 pages",
    revisions: "Two revision rounds",
    features: [
      "Up to 7 pages (e.g. Home, About, Services, Portfolio, Contact, etc.)",
      "Custom-designed business website matching your brand",
      "Responsive layouts tuned across all screen sizes",
      "Contact and dedicated inquiry forms",
      "Basic on-page SEO & metadata architecture",
      "WhatsApp click-to-chat integration",
      "Two revision rounds included",
      "Interactive component animations"
    ],
    deliverables: "Complete tailored website, lead funnels, WhatsApp integration, deployment handoff.",
    ctaText: "Discuss Your Project"
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    price: "₹19,999",
    amountNumber: 19999,
    isStartingAt: true,
    badge: "Advanced Commerce",
    tagline: "Engineered for merchants looking to showcase products, capture orders, and accept digital payments online.",
    pageLimit: "Tailored catalogue & checkout flow",
    revisions: "Two revision rounds included",
    features: [
      "Product catalogue setup with categories & filters",
      "Shopping cart and checkout integration",
      "Responsive mobile-first storefront design",
      "Basic product and category structure",
      "Payment gateway integration (subject to provider approval & configuration)",
      "Order inquiry or management functionality appropriate to agreed scope",
      "Customer inquiry triggers & WhatsApp ordering option",
      "Two revision rounds included"
    ],
    deliverables: "Storefront application, catalogue setup, payment routing hook, checkout workflow.",
    ctaText: "Get Started"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-website",
    title: "Business Website Development",
    shortDesc: "High-credibility corporate and business websites engineered to showcase your brand authority and capture qualified client leads.",
    iconName: "Briefcase",
    features: [
      "Custom brand-aligned architecture",
      "Lead generation & inquiry flows",
      "Interactive service catalogs",
      "Fast mobile loading"
    ],
    deliverables: "Full responsive site, lead funnels, SEO schema setup",
    badge: "Core Expertise"
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Website Development",
    shortDesc: "High-conversion digital storefronts built with seamless checkout funnels, fast catalog navigation, and payment gateway integration.",
    iconName: "ShoppingCart",
    features: [
      "Frictionless checkout experiences",
      "Mobile-optimized product discovery",
      "Secure payment gateway integration",
      "Product inquiry & order notifications"
    ],
    deliverables: "Storefront, payment routing, analytics setup",
    badge: "High Conversion"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    shortDesc: "Hyper-focused, performance-tuned landing pages crafted specifically for ad campaigns, product drops, and targeted user acquisitions.",
    iconName: "Sparkles",
    features: [
      "Data-backed visual hierarchy",
      "Sub-second load times for lower ad bounce",
      "Direct conversion psychology",
      "Frictionless lead-capture mechanics"
    ],
    deliverables: "Single-page experience, tracking hooks, speed optimization",
    badge: "Performance Driven"
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    shortDesc: "Interactive client portals, SaaS interfaces, booking engines, and dynamic calculation tools designed for complex business workflows.",
    iconName: "Cpu",
    features: [
      "Modern React / TypeScript architectures",
      "API integrations & custom endpoints",
      "Role-based client/admin access",
      "Real-time reactive state management"
    ],
    deliverables: "Scalable frontend application, API bridges, documentation",
    badge: "Advanced Tech"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    shortDesc: "Modernize outdated sites with cutting-edge visual aesthetics, modern tech stacks, and enhanced user journeys that reignite growth.",
    iconName: "Layers",
    features: [
      "Comprehensive UX & audit analysis",
      "Preservation of existing SEO rankings",
      "Contemporary dark/light modern UI",
      "Dramatic speed & mobile responsiveness upgrade"
    ],
    deliverables: "Complete aesthetic redesign, migration plan",
    badge: "Modernization"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Proactive security, continuous performance tuning, uptime monitoring, and ongoing feature updates so your business never misses a beat.",
    iconName: "ShieldCheck",
    features: [
      "Uptime monitoring & rapid recovery",
      "Security patching & dependency upgrades",
      "Periodic speed & performance checks",
      "Dedicated developer support hours"
    ],
    deliverables: "Health reports, continuous backups, priority support",
    badge: "Peace of Mind"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare and Clinics",
    subtitle: "Medical, Dental, & Wellness Practices",
    description: "Trust-centric patient platforms featuring secure appointment scheduling, clear practitioner profiles, and patient inquiries.",
    tailoredRequirements: [
      "Online appointment scheduling system",
      "Patient intake forms & clinic directions",
      "Specialist directory & credential displays",
      "Accessibility & compliance standard adherence"
    ],
    gradient: "from-blue-600/20 via-sky-500/10 to-transparent",
    accentColor: "#38bdf8",
    mockupType: "Patient portal booking preview",
    keyMetric: "+42% online patient bookings"
  },
  {
    id: "restaurants",
    name: "Restaurants and Cafes",
    subtitle: "Fine Dining, Bistros, & Coffee Roasters",
    description: "Atmospheric, appetizing digital experiences with real-time menu management, open table reservations, and seamless catering requests.",
    tailoredRequirements: [
      "Dynamic interactive seasonal menus",
      "Table reservation system integration",
      "Location mapping & private event inquiry",
      "Visual ambiance & culinary storytelling"
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#fbbf24",
    mockupType: "Interactive tasting menu & reservation",
    keyMetric: "+65% direct table reservations"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    subtitle: "Brokerages, Luxury Living, & Developers",
    description: "Immersive architectural showcases with interactive property filters, virtual tour embeds, and high-intent inquiry captures for agents.",
    tailoredRequirements: [
      "Filterable property search & floorplans",
      "High-resolution media galleries & 3D tours",
      "Instant WhatsApp broker contact triggers",
      "Neighborhood & amenity map highlights"
    ],
    gradient: "from-indigo-600/20 via-violet-500/10 to-transparent",
    accentColor: "#818cf8",
    mockupType: "Luxury penthouse property showcase",
    keyMetric: "3.8x longer property dwell time"
  },
  {
    id: "education",
    name: "Education and Coaching",
    subtitle: "Academies, Tutoring, & Executive Mentors",
    description: "Engaging educational portals with syllabus breakdowns, course enrollment workflows, student reviews, and automated onboarding.",
    tailoredRequirements: [
      "Curriculum outlines & preview modules",
      "Cohort enrollment & payment integration",
      "Student success metrics & video showcases",
      "Live webinar & schedule registration"
    ],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "#a855f7",
    mockupType: "Curriculum roadmap & student enrollment",
    keyMetric: "+53% course enrollment rate"
  },
  {
    id: "ecommerce-retail",
    name: "E-commerce and Retail",
    subtitle: "Direct-to-Consumer & Boutiques",
    description: "Lightning-fast shopping destinations engineered for high average order value, smooth variant pickers, and single-click checkout.",
    tailoredRequirements: [
      "High-velocity mobile-first catalog browsing",
      "Upsell & cross-sell conversion mechanics",
      "Wishlist, reviews & social proof widgets",
      "Automated abandoned checkout recovery"
    ],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "#34d399",
    mockupType: "Minimalist fashion e-commerce checkout",
    keyMetric: "-38% cart abandonment rate"
  },
  {
    id: "travel",
    name: "Travel and Hospitality",
    subtitle: "Boutique Resorts, Lodges, & Tour Guides",
    description: "Aspirational travel platforms showcasing destination aesthetics, suite availability calendars, and direct booking engines.",
    tailoredRequirements: [
      "Direct room booking & date picker engine",
      "Experience itineraries & activity guides",
      "Multi-currency & localized language support",
      "Dynamic weather & seasonal guide highlights"
    ],
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
    accentColor: "#22d3ee",
    mockupType: "Private villa booking calendar",
    keyMetric: "Zero 3rd-party OTA commission on direct stays"
  },
  {
    id: "manufacturing",
    name: "Manufacturing and Industrial Businesses",
    subtitle: "Industrial Plants, Equipment, & Supply Chains",
    description: "Authoritative B2B industrial hubs with downloadable CAD/spec sheets, custom quote builders, and compliance certifications.",
    tailoredRequirements: [
      "B2B Request For Quote (RFQ) custom builder",
      "Technical specification sheet downloads",
      "Facility tour & machinery capability proof",
      "ISO & environmental compliance credentials"
    ],
    gradient: "from-slate-600/20 via-zinc-500/10 to-transparent",
    accentColor: "#94a3b8",
    mockupType: "Industrial RFQ & machinery catalog",
    keyMetric: "2.4x higher RFQ submission quality"
  },
  {
    id: "startups",
    name: "Startups and Professional Services",
    subtitle: "SaaS Ventures, Legal, & Advisory Firms",
    description: "Futuristic digital headquarters designed to win investor conviction, acquire enterprise users, and validate market leadership.",
    tailoredRequirements: [
      "Interactive product feature walkthroughs",
      "Investor-grade storytelling & pitch decks",
      "Integrations ecosystem directory",
      "Consultation & lead booking hooks"
    ],
    gradient: "from-fuchsia-600/20 via-indigo-500/10 to-transparent",
    accentColor: "#e879f9",
    mockupType: "SaaS interactive platform dashboard",
    keyMetric: "+80% investor & enterprise inquiries"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "project-apex-health",
    title: "Apex Specialist Clinic",
    category: "Healthcare & Clinic Web Platform",
    industry: "Healthcare",
    description: "A patient-centric medical portal featuring friction-free doctor appointments, real-time consultation triage, and interactive treatment guides.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["React", "Tailwind CSS", "Appointment Engine", "WCAG 2.1 AA"],
    highlights: ["Sub-second load speed", "Direct appointment booking", "Automated SMS reminders"],
    color: "#38bdf8",
    stats: { label: "Patient Inquiries", value: "+45% in 60 Days" },
    previewType: "clinic"
  },
  {
    id: "project-aura-dining",
    title: "Aura Culinary & Lounge",
    category: "Fine Dining & Hospitality Web Experience",
    industry: "Restaurants",
    description: "An experiential culinary journey with dark cinematic ambiance, real-time wine list filtering, and integrated table reservation management.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["Next.js", "Framer Motion", "OpenTable API", "Mobile Menus"],
    highlights: ["Interactive dish preview", "Instant table booking", "VIP event inquiries"],
    color: "#fbbf24",
    stats: { label: "Direct Bookings", value: "72% Direct Channel" },
    previewType: "dining"
  },
  {
    id: "project-lumina-living",
    title: "Lumina Residences",
    category: "Luxury Architectural & Real Estate Showcase",
    industry: "Real Estate",
    description: "Ultra-luxury residential property website with interactive penthouse floorplans, neighborhood lifestyle maps, and private VIP inquiry routing.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["WebGL Previews", "Interactive Maps", "Lead Capture", "Responsive Video"],
    highlights: ["Interactive floorplans", "Virtual 3D tour embeds", "Direct agent WhatsApp trigger"],
    color: "#818cf8",
    stats: { label: "Inquiry Quality", value: "3.4x Higher Intent" },
    previewType: "realty"
  },
  {
    id: "project-nova-atelier",
    title: "Nova Atelier Goods",
    category: "Modern Headless E-commerce Storefront",
    industry: "E-commerce & Retail",
    description: "A minimalist luxury lifestyle storefront engineered with instant variant switching, slide-out micro cart, and frictionless one-page checkout.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["Headless E-commerce", "Stripe API", "Micro-animations", "SEO Architecture"],
    highlights: ["Instant checkout flow", "0.4s page transitions", "Multi-currency switcher"],
    color: "#34d399",
    stats: { label: "Conversion Rate", value: "4.1% Benchmark" },
    previewType: "ecommerce"
  },
  {
    id: "project-vanguard-saas",
    title: "Vanguard Intelligence",
    category: "AI SaaS & Enterprise Web Application",
    industry: "Startups & Tech",
    description: "Next-generation software product marketing website featuring live interactive calculators, API documentation viewer, and self-serve onboarding.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["TypeScript", "Interactive Playground", "Dark UI", "Docs Architecture"],
    highlights: ["Interactive ROI calculator", "Demo sandbox preview", "Enterprise sales funnel"],
    color: "#a855f7",
    stats: { label: "Demo Signups", value: "+84% Growth" },
    previewType: "saas"
  },
  {
    id: "project-solaria-escape",
    title: "Solaria Alpine Sanctuary",
    category: "Boutique Resort & Travel Destination",
    industry: "Travel & Hospitality",
    description: "A breathtaking destination experience for a secluded mountain resort, featuring date-based suite booking, seasonal activity guides, and local guides.",
    conceptNote: "Concept Showcase — Engineered by Nxt Technologies",
    tags: ["Date Engine", "Parallax Landscapes", "Multi-Language", "Fast Edge CDN"],
    highlights: ["Live calendar availability", "Curated alpine packages", "Zero OTA commission"],
    color: "#22d3ee",
    stats: { label: "Direct Revenue", value: "91% Direct Stays" },
    previewType: "hospitality"
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "custom-designs",
    title: "Custom Designs",
    description: "No generic templates or cookie-cutter page builders. Every pixel, layout, and interaction is tailor-crafted to embody your brand's unique identity and positioning.",
    stat: "100%",
    statLabel: "Bespoke Design",
    iconName: "Palette",
    detail: "Handcrafted UI/UX architecture designed in Figma and brought to life with precision code."
  },
  {
    id: "mobile-first",
    title: "Mobile-First Development",
    description: "Over 65% of your customers visit on mobile devices. We develop with a mobile-first philosophy, ensuring flawless touch ergonomics, fast tap response, and adaptive layouts.",
    stat: "60fps",
    statLabel: "Touch Fluidity",
    iconName: "Smartphone",
    detail: "Thoroughly tested across dozens of physical mobile screen sizes and orientations."
  },
  {
    id: "performance-focused",
    title: "Performance-Focused Websites",
    description: "Speed directly impacts your revenue and Google rankings. We build ultra-lean codebases that consistently achieve 95+ Google Lighthouse scores and sub-second load times.",
    stat: "99+",
    statLabel: "Lighthouse Score",
    iconName: "Zap",
    detail: "Optimized asset pipelines, modern WebP/AVIF imagery, and zero bloat libraries."
  },
  {
    id: "business-solutions",
    title: "Solutions Built Around Your Business",
    description: "We don't just write code; we solve business bottlenecks. Whether you need automated lead qualification, booking systems, or e-commerce pipelines, we build for tangible ROI.",
    stat: "3.2x",
    statLabel: "Avg ROI Multiplier",
    iconName: "Target",
    detail: "Conversion-optimized design psychology combined with frictionless customer journeys."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "Phase 1",
    title: "Discover",
    tagline: "Uncovering your business goals & competitive edge",
    description: "We dive deep into your target audience, industry positioning, customer pain points, and technical requirements to define a high-impact digital roadmap.",
    deliverables: [
      "Brand & audience audit",
      "Information architecture map",
      "Conversion funnel blueprint",
      "Technical stack specification"
    ],
    duration: "Week 1"
  },
  {
    step: "02",
    number: "Phase 2",
    title: "Design",
    tagline: "Translating brand strategy into high-end visual systems",
    description: "We create interactive wireframes and high-fidelity prototypes in modern dark/light aesthetics, refining every micro-interaction and responsive layout until perfection.",
    deliverables: [
      "Full interactive Figma prototype",
      "Custom responsive design system",
      "Typography & color harmonies",
      "Motion & interaction guidelines"
    ],
    duration: "Week 2"
  },
  {
    step: "03",
    number: "Phase 3",
    title: "Develop",
    tagline: "Clean, performant engineering with modern tech",
    description: "We build your website using modern, scalable technologies (React, TypeScript, Tailwind CSS, smooth animations). Fast, responsive, accessible, and completely bug-tested.",
    deliverables: [
      "Production-ready codebase",
      "Mobile-first responsive tuning",
      "Lead forms & WhatsApp click-to-chat",
      "SEO schema & metadata setup"
    ],
    duration: "Week 3"
  },
  {
    step: "04",
    number: "Phase 4",
    title: "Launch",
    tagline: "Flawless deployment, speed testing & growth handoff",
    description: "We conduct end-to-end QA, SSL configuration, domain setup, CDN optimization, and provide personalized training so you have complete confidence in your new digital home.",
    deliverables: [
      "Live production deployment",
      "Lighthouse 95+ speed audit",
      "Google Search Console submission",
      "Dedicated post-launch support"
    ],
    duration: "Week 4"
  }
];
