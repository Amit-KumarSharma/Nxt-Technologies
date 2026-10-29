import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How Nxt Technologies collects, uses, protects, and handles your personal and project information."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. Introduction
        </h2>
        <p>
          At <strong>Nxt Technologies</strong>, accessible from our digital platform, the privacy of our visitors and clients is of utmost importance. This Privacy Policy outlines the types of information we collect, why we collect it, and how your data is handled in compliance with applicable Indian digital data regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. Information We Collect
        </h2>
        <p>
          We only collect personal information that you voluntarily provide to us when submitting an inquiry, requesting a custom quotation, or communicating with our team:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Contact Details:</strong> Your full name, email address, and phone / WhatsApp number.</li>
          <li><strong>Business Details:</strong> Company name, website URL, industry type, and target audience.</li>
          <li><strong>Project Specifications:</strong> Desired features, design preferences, quotation references, and budget estimates.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. How We Use Your Information
        </h2>
        <p>
          The information collected is used exclusively for legitimate business purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>To prepare and provide transparent, itemized project quotations.</li>
          <li>To communicate project milestones, staging reviews, and deliverables.</li>
          <li>To issue payment receipts, invoices, and service confirmations.</li>
          <li>To provide ongoing technical support and maintenance when requested.</li>
        </ul>
        <p className="text-zinc-400 text-xs">
          We never sell, rent, or trade your personal data to third-party marketing companies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Payment Processing Information
        </h2>
        <p>
          When you make a payment for standard packages or an agreed custom project, transactions are processed directly through authorized, PCI-DSS compliant third-party payment gateways (such as Razorpay, UPI, or direct NEFT/IMPS bank transfer). Nxt Technologies does not collect, process, or store sensitive credit card numbers, debit card PINs, or net banking passwords on our servers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Data Sharing with Service Providers
        </h2>
        <p>
          We may share relevant technical details solely with trusted infrastructure service providers strictly required to execute your project (e.g., cloud deployment platforms like Vercel or cloud email gateways). All such providers operate under confidentiality obligations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Data Retention & Deletion
        </h2>
        <p>
          Client contact information and quotation records are retained for the duration of the service contract and for legitimate accounting and tax compliance under Indian regulations. Clients may request the deletion or export of their contact data at any time by contacting us directly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          7. Security Measures & Limitations
        </h2>
        <p>
          We employ industry-standard encryption protocols (HTTPS/TLS) across our web interfaces. While we take every reasonable measure to protect your data, no method of transmission over the Internet or electronic storage is 100% impenetrable.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          8. Your Privacy Rights
        </h2>
        <p>
          Under applicable Indian laws, you have the right to access, rectify, or request deletion of the personal data held by us. To exercise these rights, please contact our data coordinator at <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a>.
        </p>
      </section>
    </PolicyLayout>
  );
};
