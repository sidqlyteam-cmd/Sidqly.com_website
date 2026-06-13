import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import BookDemo from './pages/BookDemo';
import InquiryForm from './pages/InquiryForm';
import AskSidqly from './pages/AskSidqly';
import WhyFillForm from './pages/WhyFillForm';
import Security from './pages/Security';
import Brand from './pages/Brand';
import TrustCenter from './pages/TrustCenter';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';
import Billing from './pages/Billing';
import Help from './pages/Help';
import StartPilot from './pages/StartPilot';
import Implementation from './pages/Implementation';
import Migration from './pages/Migration';
import Purchase from './pages/Purchase';
import Status from './pages/Status';
import Legal from './pages/Legal';
import ThankYou from './pages/ThankYou';
import SitemapPage from './pages/SitemapPage';
import AISearchReadiness from './pages/AISearchReadiness';

// Dynamic Templates
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import SolutionDetail from './pages/solutions/SolutionDetail';
import ModuleDetail from './pages/modules/ModuleDetail';
import CompareIndex from './pages/compare/CompareIndex';
import CompareDetail from './pages/compare/CompareDetail';
import ResourceDetail from './pages/resources/ResourceDetail';
import Solutions from './pages/Solutions';
import Modules from './pages/Modules';
import RegionsIndex from './pages/regions/RegionsIndex';
import RegionDetail from './pages/regions/RegionDetail';

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
          <a href={brand.calendlyUrl} className="bg-white border border-gray-200 px-8 py-3 rounded-xl font-bold text-sidqly-navy hover:bg-gray-50 transition-all">Book Demo</a>
          <a href={brand.inquiryFormUrl} className="text-sidqly-green-emerald font-bold px-4 py-3">Fill Inquiry Form</a>
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
        <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
        <a href={brand.inquiryFormUrl} className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-sidqly-navy hover:bg-gray-50 transition-all">Fill Form</a>
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
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="demo" element={<BookDemo />} />
            <Route path="book-demo" element={<BookDemo />} />
            <Route path="inquiry-form" element={<InquiryForm />} />
            <Route path="ask-sidqly" element={<AskSidqly />} />
            <Route path="why-fill-the-form" element={<WhyFillForm />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="help" element={<Help />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="security" element={<Security />} />
            <Route path="brand" element={<Brand />} />
            <Route path="trust-center" element={<TrustCenter />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="billing" element={<Billing />} />
            <Route path="start-pilot" element={<StartPilot />} />
            <Route path="implementation" element={<Implementation />} />
            <Route path="migration" element={<Migration />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="status" element={<Status />} />
            <Route path="legal" element={<Legal />} />
            <Route path="sitemap" element={<SitemapPage />} />
            <Route path="ai-search-readiness" element={<AISearchReadiness />} />
            <Route path="regions" element={<RegionsIndex />} />
            <Route path="regions/:slug" element={<RegionDetail />} />

            {/* Solutions Routes */}
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:slug" element={<SolutionDetail />} />

            {/* Modules Routes */}
            <Route path="modules" element={<Modules />} />
            <Route path="modules/:slug" element={<ModuleDetail />} />

            {/* Blog Routes */}
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:slug" element={<BlogPost />} />

            {/* Thank You Routes */}
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="thank-you/demo" element={<ThankYou type="demo" />} />
            <Route path="thank-you/contact" element={<ThankYou type="contact" />} />
            <Route path="thank-you/pricing" element={<ThankYou type="pricing" />} />

            {/* Comparison / GEO / LLMO Routes */}
            <Route path="compare" element={<CompareIndex />} />
            <Route path="why-sidqly" element={<CompareDetail />} />
            <Route path="trust-and-dignity" element={<CompareDetail />} />
            <Route path="proof-trust-engine" element={<CompareDetail />} />
            <Route path="verified-giving" element={<CompareDetail />} />
            <Route path="manual-payment-review" element={<CompareDetail />} />
            <Route path="donor-safe-impact" element={<CompareDetail />} />
            <Route path="corporate-reporting" element={<CompareDetail />} />
            <Route path="zakat-fund-separation" element={<CompareDetail />} />
            <Route path="qurbani-management-software" element={<CompareDetail />} />
            <Route path="ramadan-donation-management" element={<CompareDetail />} />
            <Route path="charity-request-management" element={<CompareDetail />} />
            <Route path="vendor-fulfillment-platform" element={<CompareDetail />} />
            <Route path="islamic-charity-software" element={<CompareDetail />} />
            <Route path="mosque-donation-management" element={<CompareDetail />} />

            <Route path="compare/:slug" element={<CompareDetail />} />
            <Route path="alternatives/:slug" element={<CompareDetail />} />

            {/* Resources Routes */}
            <Route path="resources" element={<Placeholder title="Resources" />} />
            <Route path="resources/:slug" element={<ResourceDetail />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
