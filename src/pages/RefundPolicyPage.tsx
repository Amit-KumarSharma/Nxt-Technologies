import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { AGENCY_CONFIG } from '../data/agencyData';

export const RefundPolicyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Refund and Cancellation Policy"
      subtitle="Transparent guidelines on project cancellations, milestone assessments, and refund eligibility."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. Overview
        </h2>
        <p>
          At <strong>Nxt Technologies</strong>, we strive to build collaborative relationships with our clients based on transparency and clear milestones. Because our web development services involve bespoke design, architecture, and coding tailored exclusively for each client, this Refund and Cancellation Policy governs how cancellation requests and refunds are processed.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. How Cancellation Requests Are Made
        </h2>
        <p>
          If you wish to cancel an active project, written notification must be submitted via email to <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sky-400">{AGENCY_CONFIG.email}</a> specifying your project name, invoice or quotation reference, and reasons for cancellation. Verbal requests or casual messages will not be considered formal cancellation notices until confirmed via email.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. Evaluation of Work Already Performed
        </h2>
        <p>
          Upon receiving a cancellation notice:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>All active development is paused immediately.</li>
          <li>An audit of completed deliverables (wireframes, prototypes, coded components, or staging builds) is conducted against the project milestone schedule.</li>
          <li>The client is billed solely for the pro-rata proportion of work completed up to the cancellation timestamp.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Treatment of Advance & Milestone Payments
        </h2>
        <p>
          Advance and milestone payments are treated fairly based on actual work performed rather than arbitrary forfeiture:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Cancellation Prior to Work Commencement:</strong> If a cancellation notice is received before any research, design wireframing, or engineering has begun, the advance payment is refunded in full, minus any direct gateway transaction fees.</li>
          <li><strong>Cancellation During Active Sprints:</strong> If work has commenced, the value of hours and deliverables completed will be calculated. If the completed work value is less than the advance paid, the remaining balance will be refunded. If the completed work value exceeds the advance, the client is responsible for paying for the work performed to date.</li>
          <li><strong>Milestone Payments:</strong> Once a project milestone (e.g. Design Approval or Staging Build) is formally reviewed and approved by the client, the milestone payment associated with that phase is deemed earned and is non-refundable.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          5. Third-Party Expenses
        </h2>
        <p>
          Third-party out-of-pocket expenses incurred specifically on behalf of the client (including specialized domain registrations, proprietary software licenses, third-party API keys, or paid typeface licenses) cannot be refunded once purchased.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          6. Refund Processing Timeline
        </h2>
        <p>
          Approved refunds will be processed within seven (7) to ten (10) business days back to the original method of payment (bank account, UPI, or card via Razorpay).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          7. Dispute Resolution
        </h2>
        <p>
          If a disagreement arises regarding the calculation of completed work, both parties agree to engage in good-faith communication to resolve the matter amicably. If an agreement cannot be reached, the matter will be addressed under the dispute resolution mechanisms established under Indian jurisdiction.
        </p>
      </section>
    </PolicyLayout>
  );
};
