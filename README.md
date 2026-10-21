# Kairo Technologies — Website Development Agency

A modern, high-converting website built for **Kairo Technologies**, an agency crafting bespoke digital experiences across healthcare, restaurants, real estate, education, e-commerce, hospitality, industrial manufacturing, and tech startups.

---

## Official Contact Details

- **Business Name**: Kairo Technologies
- **Email**: [karinakumari1612@gmail.com](mailto:karinakumari1612@gmail.com)
- **Phone / WhatsApp**: [+91 8294291412](tel:+918294291412) / [WhatsApp Chat](https://wa.me/918294291412)
- **Country**: India
- **Currency**: INR (₹)
- **Service Reach**: India — Remote / Digital Services Worldwide

---

## Website Routes & Pages

### Core Public Pages
- **`/` (Home)**: High-impact hero, interactive 3D device showcase, 6 service cards, 8 tailored industries, concept portfolio with mobile/desktop switcher, 4 why-choose-us benefits with live speed benchmark, 4-phase timeline, and contact section.
- **`/pricing` (Pricing & Custom Quotations)**:
  - **Starter Website — ₹4,999**: Up to 3 pages, responsive design, basic contact form, essential on-page SEO setup, social links, one revision round.
  - **Business Website — ₹9,999**: Up to 7 pages, custom-designed business website, responsive layouts, contact & inquiry forms, basic on-page SEO, WhatsApp integration, two revision rounds.
  - **E-commerce Website — Starting at ₹19,999**: Product catalogue setup, cart & checkout integration, responsive design, basic product/category structure, payment gateway integration, order inquiry/management, two revision rounds.
  - **"Have a Custom Project?" Section**: Secure workflow for clients with an agreed quotation reference to proceed with advance, milestone, or full project payment.
- **`/contact` (Professional Contact Page)**: Clickable email (`mailto:`), phone (`tel:`), direct WhatsApp click-to-chat, and an inquiry form with instant client feedback and WhatsApp synchronization.

### Legal & Compliance Pages
- **`/terms` (Terms and Conditions)**: Service scope, client content ownership, revision allowances, governing law under Indian jurisdiction.
- **`/privacy` (Privacy Policy)**: Transparent data collection, handling, non-storage of sensitive payment card data, and Indian data protection standards.
- **`/refund-policy` (Refund and Cancellation Policy)**: Fair evaluation of work performed, milestone treatment, third-party expense handling, and dispute resolution.
- **`/payment-policy` (Payment and Project Policy)**: Accepted payment methods (UPI, Bank Transfer, Razorpay), invoice references, scope changes, and transaction reconciliation.
- **`/service-policy` (Service Delivery Policy)**: Sequential delivery stages (Discovery, Prototype, Staging, Production), milestone timelines, code handover, and 14-day warranty.
- **`/cookie-policy` (Cookie Policy)**: Minimal essential local storage usage, no invasive third-party ad profiling.
- **`/disclaimer` (Disclaimer)**: Search rankings, business results, and third-party dependency disclosures.

---

## Razorpay Payment Gateway Integration

The payment gateway is powered by **Razorpay Checkout**:
1. **Pay Custom Amount**: Clients can enter any agreed custom amount on `/pricing` and click **Proceed to Pay** to launch Razorpay's 256-bit encrypted checkout.
2. **Standard Packages**: Direct one-click Razorpay payment is also available on Starter (₹4,999), Business (₹9,999), and E-commerce (₹19,999) packages.
3. **Supported Payment Modes**:
   - **UPI**: Google Pay, PhonePe, Paytm, BHIM, and QR code scans.
   - **Cards**: All Visa, Mastercard, RuPay, and American Express debit/credit cards.
   - **Net Banking**: Supported across 50+ Indian banks.
   - **Digital Wallets**: Amazon Pay, Mobikwik, Airtel Money, etc.
4. **Configuring Your Razorpay Key ID**:
   - Add your Key ID in `.env`:
     ```env
     VITE_RAZORPAY_KEY_ID=rzp_test_your_key_here
     ```
   - For production, replace with your live key `rzp_live_...`.
   - If not set in `.env`, a setup dialog allows entering the key on-the-fly or seamlessly falling back to direct WhatsApp/UPI payment instructions.
5. **Instant Receipts**: Upon successful payment, an animated confirmation receipt appears with the Razorpay Transaction Reference ID and a direct button to share the confirmation on WhatsApp.

---

## Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```
