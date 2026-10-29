import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const ServicePolicyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Service Delivery Policy"
      subtitle="Operational guidelines on how digital website projects are engineered, delivered, and handed over."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. Digital Service Nature
        </h2>
        <p>
          <strong>Nxt Technologies</strong> provides professional digital services, software engineering, and bespoke website creation. Because our deliverables consist of digital code, design systems, and online platforms rather than physical goods, no physical shipping or courier delivery is involved.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. Delivery Process & Milestones
        </h2>
        <p>
          Delivery occurs in sequential, verifiable stages:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Stage 1 (Discovery & Architecture):</strong> Reviewing project brief, wireframing, and design system alignment.</li>
          <li><strong>Stage 2 (Design Prototype):</strong> Interactive review of visual mockups and layout styling.</li>
          <li><strong>Stage 3 (Staging Environment):</strong> The website is deployed to a password-protected staging URL for client testing across desktop, tablet, and mobile devices.</li>
          <li><strong>Stage 4 (Production Deployment & Handover):</strong> Final DNS migration to the client's production domain and transfer of repository/source code assets.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. Project Timelines & Variations
        </h2>
        <p>
          Because project scopes vary significantly—from a concise 3-page Starter site to an extensive E-commerce platform—timelines are established individually in each quotation. Typical indicative timelines range from 2 to 6 weeks, depending on project complexity. We do not promise a single universal timeframe for all projects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Client Feedback & Content Responsibilities
        </h2>
        <p>
          Timely delivery depends on active client collaboration. Delays in providing copy, high-resolution media, access credentials, or milestone sign-offs will directly extend the estimated delivery completion date.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Source Code & Asset Handover
        </h2>
        <p>
          Upon receipt of the final project payment:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Full access to clean, production-ready source code is transferred (via GitHub repository or secure archive).</li>
          <li>Ownership of bespoke graphics and custom layout files is handed over to the client.</li>
          <li>Standard deployment instructions or direct server configuration support is provided.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Post-Launch Support & Warranty
        </h2>
        <p>
          Every newly launched website includes a complimentary 14-day warranty period following live deployment, covering bug fixes and minor alignment corrections related to the original agreed scope. Ongoing feature additions, content updates, and server maintenance are available under dedicated monthly maintenance packages.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          7. Questions Regarding Delivery
        </h2>
        <p>
          For questions regarding delivery schedules or deployment milestones, contact our project delivery team at <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a> or call <a href={`tel:${AGENCY_CONFIG.phoneTel}`} className="text-sky-400">{AGENCY_CONFIG.phoneDisplay}</a>.
        </p>
      </section>
    </PolicyLayout>
  );
};
