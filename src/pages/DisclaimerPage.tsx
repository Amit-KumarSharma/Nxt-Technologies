import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const DisclaimerPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Disclaimer"
      subtitle="Important disclaimers regarding website performance, search rankings, third-party integrations, and indicative pricing."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. General Information Only
        </h2>
        <p>
          The materials and information contained on the website of <strong>Nxt Technologies</strong> are provided for general illustrative and informational purposes only. Nothing on this website constitutes legal, financial, or formal contractual advice. A formal, legally binding client relationship is formed only upon the mutual execution of an official project quotation, contract, or invoice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. Business Results & Search Rankings Not Guaranteed
        </h2>
        <p>
          While Nxt Technologies engineers websites using modern SEO best practices, semantic markup, and performance optimization, actual business outcomes, customer acquisition volumes, Google search rankings, and sales figures depend upon numerous external variables outside our control (including client marketing budgets, brand reputation, market demand, competition, and search engine algorithm updates). Consequently, Nxt Technologies makes no representations, warranties, or guarantees regarding specific revenue figures or search engine ranking positions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. Third-Party Integrations & Services
        </h2>
        <p>
          Our websites may integrate third-party APIs, payment gateways (such as Razorpay, Stripe, or PayPal), analytics tools, cloud hosting networks (such as Vercel or AWS), or external databases. The ongoing availability, uptime, policy compliance, and performance of these third-party services are the sole responsibility of their respective providers. Nxt Technologies is not liable for disruptions, policy changes, or service terminations enacted by third-party platforms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Indicative Pricing & Scope Changes
        </h2>
        <p>
          All starter packages and indicative prices published on this website (e.g., Starter Website at ₹4,999, Business Website at ₹9,999, E-commerce starting at ₹19,999) represent baseline estimates for standard deliverables. Final project costs and scope are subject to the specific written quotation prepared after reviewing your detailed requirements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Portfolio Concepts
        </h2>
        <p>
          Certain featured projects showcased on our website are explicitly labelled as concept showcases and architectural demonstrations designed by our creative technology team to illustrate technical capability.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Contact for Clarifications
        </h2>
        <p>
          If you have any questions regarding this Disclaimer, please reach out to us at <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a>.
        </p>
      </section>
    </PolicyLayout>
  );
};
