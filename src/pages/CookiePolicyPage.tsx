import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const CookiePolicyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Cookie Policy"
      subtitle="Clear information on cookies and local storage technologies used on the Nxt Technologies website."
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites function efficiently and provide necessary interface preferences.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          2. How Nxt Technologies Uses Cookies
        </h2>
        <p>
          We take a privacy-conscious, minimal approach to cookies:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Essential & Functional Storage:</strong> We use lightweight browser session storage and local preferences to remember your UI state, modal interactions, and dark-theme display choices.</li>
          <li><strong>Performance Optimization:</strong> Our site utilizes local browser caching to speed up subsequent visits and asset loading.</li>
          <li><strong>No Invasive Third-Party Tracking:</strong> We do not deploy invasive cross-site tracking cookies, third-party advertising data brokers, or behavioral ad profiling tools on this website.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          3. How You Can Manage or Disable Cookies
        </h2>
        <p>
          You can choose to disable or block cookies through your individual browser settings (Chrome, Safari, Firefox, Edge, etc.). Note that disabling essential local storage may affect the smooth operation of interactive page elements such as modal drawers and layout toggles.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
          4. Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time if we introduce new functional utilities. Any revisions will be reflected on this page with an updated timestamp.
        </p>
      </section>
    </PolicyLayout>
  );
};
