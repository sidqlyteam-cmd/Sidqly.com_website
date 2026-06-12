import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Modules from './pages/Modules';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import BookDemo from './pages/BookDemo';
import InquiryForm from './pages/InquiryForm';
import AskSidqly from './pages/AskSidqly';
import WhyFillForm from './pages/WhyFillForm';
import Security from './pages/Security';
import Brand from './pages/Brand';

import { brand } from './config/brand';
import { Link } from 'react-router-dom';

// Simple placeholder for pages not yet fully implemented
const Placeholder = ({ title }: { title: string }) => (
  <section className="py-20 bg-sidqly-ivory min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-sidqly-navy mb-10">{title}</h1>
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
        <p className="text-gray-600 leading-relaxed mb-10">Details about {title} are being updated for v1.5. Sidqly is a premium operating platform for modern Islamic organizations.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Go Home</Link>
          <a href={brand.links.calendly} className="bg-white border border-gray-200 px-8 py-3 rounded-xl font-bold text-sidqly-navy hover:bg-gray-50 transition-all">Book Demo</a>
          <a href={brand.links.emailInquiry} className="text-sidqly-green-emerald font-bold px-4 py-3">Contact Sidqly</a>
        </div>
      </div>
    </div>
  </section>
);

const NotFound = () => (
  <section className="py-20 bg-sidqly-ivory min-h-screen flex items-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-6xl font-extrabold text-sidqly-navy mb-6">404</h1>
      <h2 className="text-3xl font-bold text-sidqly-green-deep mb-6">Page not found</h2>
      <p className="text-gray-600 mb-12 max-w-md mx-auto">The page you are looking for may have moved. You can return to the homepage, explore Sidqly features, book a demo, or contact the Sidqly team.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Go Home</Link>
        <a href={brand.links.calendly} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
        <a href={brand.links.emailInquiry} className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-sidqly-navy hover:bg-gray-50 transition-all">Contact Sidqly</a>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* Core Routes */}
            <Route path="features" element={<Features />} />
            <Route path="how-it-works" element={<Placeholder title="How It Works" />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="demo" element={<BookDemo />} />
            <Route path="book-demo" element={<BookDemo />} />
            <Route path="inquiry-form" element={<InquiryForm />} />
            <Route path="ask-sidqly" element={<AskSidqly />} />
            <Route path="why-fill-the-form" element={<WhyFillForm />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="help" element={<Placeholder title="Help Center" />} />
            <Route path="about" element={<Placeholder title="About Sidqly" />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
            <Route path="privacy" element={<Placeholder title="Privacy Policy" />} />
            <Route path="terms" element={<Placeholder title="Terms of Service" />} />
            <Route path="security" element={<Security />} />
            <Route path="brand" element={<Brand />} />

            {/* Solutions Routes */}
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:slug" element={<Solutions />} />

            {/* Modules Routes */}
            <Route path="modules" element={<Modules />} />
            <Route path="modules/:slug" element={<Modules />} />

            {/* Help Sub-pages */}
            <Route path="help/:slug" element={<Placeholder title="Help Center" />} />

            {/* Comparison / GEO / LLMO Routes */}
            <Route path="why-sidqly" element={<Placeholder title="Why Sidqly" />} />
            <Route path="trust-and-dignity" element={<Placeholder title="Trust and Dignity" />} />
            <Route path="proof-trust-engine" element={<Placeholder title="Proof Trust Engine" />} />
            <Route path="verified-giving" element={<Placeholder title="Verified Giving" />} />
            <Route path="manual-payment-review" element={<Placeholder title="Manual Payment Review" />} />
            <Route path="donor-safe-impact" element={<Placeholder title="Donor-Safe Impact" />} />
            <Route path="corporate-reporting" element={<Placeholder title="Corporate Reporting" />} />
            <Route path="zakat-fund-separation" element={<Placeholder title="Zakat Fund Separation" />} />
            <Route path="qurbani-management-software" element={<Placeholder title="Qurbani Management Software" />} />
            <Route path="ramadan-donation-management" element={<Placeholder title="Ramadan Donation Management" />} />
            <Route path="charity-request-management" element={<Placeholder title="Charity Request Management" />} />
            <Route path="vendor-fulfillment-platform" element={<Placeholder title="Vendor Fulfillment Platform" />} />
            <Route path="islamic-charity-software" element={<Placeholder title="Islamic Charity Software" />} />
            <Route path="mosque-donation-management" element={<Placeholder title="Mosque Donation Management" />} />

            <Route path="alternatives/whatsapp-excel" element={<Placeholder title="Moving from WhatsApp and Excel" />} />
            <Route path="compare/basic-donation-form" element={<Placeholder title="Sidqly vs Basic Donation Forms" />} />
            <Route path="compare/mosque-website" element={<Placeholder title="Sidqly vs Basic Mosque Websites" />} />
            <Route path="compare/generic-crm" element={<Placeholder title="Sidqly vs Generic CRMs" />} />
            <Route path="compare/manual-spreadsheets" element={<Placeholder title="Sidqly vs Manual Spreadsheets" />} />

            {/* Resources Routes */}
            <Route path="resources" element={<Placeholder title="Resources" />} />
            <Route path="resources/islamic-giving-operations" element={<Placeholder title="Islamic Giving Operations" />} />
            <Route path="resources/donor-trust" element={<Placeholder title="Donor Trust" />} />
            <Route path="resources/proof-and-privacy" element={<Placeholder title="Proof and Privacy" />} />
            <Route path="resources/zakat-operations" element={<Placeholder title="Zakat Operations" />} />
            <Route path="resources/qurbani-operations" element={<Placeholder title="Qurbani Operations" />} />
            <Route path="resources/corporate-csr-zakat" element={<Placeholder title="Corporate CSR & Zakat" />} />

            {/* Thank You Routes */}
            <Route path="thank-you" element={<Placeholder title="Thank You" />} />
            <Route path="thank-you/demo" element={<Placeholder title="Thank You for Booking a Demo" />} />
            <Route path="thank-you/contact" element={<Placeholder title="Thank You for Contacting Us" />} />
            <Route path="thank-you/pricing" element={<Placeholder title="Thank You for Your Interest" />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
