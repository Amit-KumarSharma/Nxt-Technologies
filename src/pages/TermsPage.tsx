import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const TermsPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      subtitle="The terms, rights, and operational agreements governing your use of Nxt Technologies' services and website."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing the website of <strong>Nxt Technologies</strong> or engaging our web development services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in India. If you do not agree with any of these terms, you are prohibited from using or accessing this site or commissioning custom work.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. Description of Services
        </h2>
        <p>
          Nxt Technologies operates as an independent web development agency providing digital design, custom front-end engineering, web application development, landing page creation, e-commerce integration, and website maintenance. Our services are digital in nature and provided according to the specific scope agreed upon in your quotation or project brief.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. Project Scope, Deliverables & Revisions
        </h2>
        <p>
          Each project's deliverables, timelines, and pricing are defined in the specific proposal or invoice agreed upon prior to commencement. 
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Starter Package:</strong> Includes up to 3 pages and one (1) revision round.</li>
          <li><strong>Business Package:</strong> Includes up to 7 pages and two (2) revision rounds.</li>
          <li><strong>E-commerce Package:</strong> Includes catalogue setup, cart & payment gateway integration, and two (2) revision rounds.</li>
          <li><strong>Scope Creep:</strong> Any functionality, design alterations, or additional pages requested outside the agreed scope will be itemized and quoted separately.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Client Responsibilities & Content Ownership
        </h2>
        <p>
          Clients are responsible for providing all necessary text copy, brand assets, logos, and high-resolution media required for the website. The client represents that they own or hold lawful license to all content provided. Nxt Technologies bears no legal liability for copyright or trademark infringements arising from client-provided materials.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Quotation Validity & Approval Delays
        </h2>
        <p>
          Written quotations issued by Nxt Technologies are valid for thirty (30) calendar days from the date of issue. Project schedules depend upon timely client feedback and milestone sign-offs. Delays of more than fifteen (15) business days in client feedback or provision of assets may result in schedule adjustments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Payment Terms & Overdue Accounts
        </h2>
        <p>
          Unless otherwise specified in writing:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>An initial advance payment (typically 50%) is required prior to commencing architectural design and development.</li>
          <li>The remaining balance is due upon project staging approval prior to final source code handover and live production launch.</li>
          <li>All payments are in Indian Rupees (INR ₹) or agreed currency equivalents.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          7. Intellectual Property & Source Code Handover
        </h2>
        <p>
          Upon receipt of full and final payment, ownership of the bespoke front-end code, website structure, and customized graphic layouts transfers to the client. Nxt Technologies retains the moral right to display non-confidential project visuals and concept snapshots in its agency portfolio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          8. Third-Party Services, Hosting & Domain Ownership
        </h2>
        <p>
          Domains and cloud hosting accounts must be registered directly in the client's name or transferred upon launch. Nxt Technologies is not an internet service provider or domain registrar and is not liable for third-party hosting downtimes, DNS outages, or third-party API disruptions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          9. Limitation of Liability
        </h2>
        <p>
          In no event shall Nxt Technologies or its team be liable for indirect, incidental, or consequential damages (including loss of profits, business interruptions, or data loss) arising from the use or inability to use the developed website. Our aggregate liability is strictly limited to the amount paid for the specific service under dispute.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          10. Governing Law & Dispute Resolution
        </h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          11. Contact Information
        </h2>
        <p>
          For any questions regarding these Terms and Conditions, please contact us:
        </p>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 text-xs">
          <p><strong>Business:</strong> {AGENCY_CONFIG.name}</p>
          <p><strong>Email:</strong> <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a></p>
          <p><strong>Phone / WhatsApp:</strong> <a href={`tel:${AGENCY_CONFIG.phoneTel}`} className="text-sky-400">{AGENCY_CONFIG.phoneDisplay}</a></p>
          <p><strong>Country:</strong> India</p>
        </div>
      </section>
    </PolicyLayout>
  );
};
