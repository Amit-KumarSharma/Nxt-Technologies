import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const PaymentPolicyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Payment and Project Policy"
      subtitle="Details on accepted payment methods, milestone schedules, invoice validation, and scope adjustments."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. Governing Agreement
        </h2>
        <p>
          At <strong>Nxt Technologies</strong>, the official quotation or project contract agreed upon between the client and our agency governs the actual project amount, milestone breakdowns, and payment schedule. Package prices shown on our website represent indicative starting figures for standard scopes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. Accepted Payment Methods
        </h2>
        <p>
          We accept payments in Indian Rupees (INR ₹) through the following secure channels:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>UPI (Unified Payments Interface):</strong> Instant mobile UPI transfers to our verified business VPA.</li>
          <li><strong>Direct Bank Transfer:</strong> NEFT, RTGS, or IMPS directly into our current account.</li>
          <li><strong>Razorpay Gateway:</strong> Credit cards, debit cards, net banking, and digital wallets via our secure Razorpay checkout or payment links.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. When Work Begins
        </h2>
        <p>
          Engineering, custom UI design, and development commence strictly after:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>The written quotation and scope specification are acknowledged by the client.</li>
          <li>The agreed advance milestone (typically 50% of the total project value) has been credited and verified.</li>
          <li>Initial brand assets and content requirements have been provided.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Quotation References & Official Invoicing
        </h2>
        <p>
          To maintain accounting integrity and transparent project tracking:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>All custom project payments must correspond to an official written Quotation or Invoice reference issued by Nxt Technologies (e.g., <code>NT-2026-XX</code>).</li>
          <li>Payments are settled against approved milestone deliverables via direct bank transfer, UPI, or verified payment instructions provided by our team.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Scope Changes & Price Adjustments
        </h2>
        <p>
          If during the project the client requests features, pages, or integrations outside the original scope, Nxt Technologies will provide a Change Request quotation. Work on new additions will proceed once the adjusted scope and associated cost are approved.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Payment Receipts & Confirmations
        </h2>
        <p>
          Upon successful payment verification, clients receive a digital receipt and payment acknowledgment via email and WhatsApp. For Razorpay transactions, an automated transaction ID is generated instantly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          7. Failed or Duplicate Transactions
        </h2>
        <p>
          In the event of a duplicate payment or transaction failure where money was debited from your bank account:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Failed transactions are usually automatically reversed by your bank within 3 to 5 business days.</li>
          <li>If an accidental double payment occurs on our platform, notify us at <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a> with your transaction references, and the excess amount will be refunded immediately after gateway reconciliation.</li>
        </ul>
      </section>
    </PolicyLayout>
  );
};
