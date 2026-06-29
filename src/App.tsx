import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import AnalyticsProvider from './components/AnalyticsProvider';
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
import Resources from './pages/Resources';

// Islamic Utilities Pages
import IslamicUtilitiesPage from './pages/islamic/IslamicUtilitiesPage';
import NamazTimingsPage from './pages/islamic/NamazTimingsPage';
import ZakatCalculatorPage from './pages/islamic/ZakatCalculatorPage';
import IslamicCalendarPage from './pages/islamic/IslamicCalendarPage';
import MoonPhasePage from './pages/islamic/MoonPhasePage';
import QiblaDirectionPage from './pages/islamic/QiblaDirectionPage';
import WeatherPlanningPage from './pages/islamic/WeatherPlanningPage';
import HajjCountdownPage from './pages/islamic/HajjCountdownPage';
import RamadanPlannerPage from './pages/islamic/RamadanPlannerPage';
import EidQurbaniPlannerPage from './pages/islamic/EidQurbaniPlannerPage';
import SadqaZakatPlannerPage from './pages/islamic/SadqaZakatPlannerPage';
import IslamicGlossaryPage from './pages/islamic/IslamicGlossaryPage';

// Newsroom
import Newsroom from './pages/Newsroom';
import PressReleases from './pages/newsroom/PressReleases';
import MediaKit from './pages/newsroom/MediaKit';

// Dynamic Templates
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import SolutionDetail from './pages/solutions/SolutionDetail';
import ModuleDetail from './pages/modules/ModuleDetail';
import CompareIndex from './pages/compare/CompareIndex';
import CompareDetail from './pages/compare/CompareDetail';
import ResourceDetail from './pages/resources/ResourceDetail';
import RequestOrganization from './pages/resources/RequestOrganization';
import Solutions from './pages/Solutions';
import Modules from './pages/Modules';
import UseCases from './pages/UseCases';
import UseCaseDetail from './pages/use-cases/UseCaseDetail';
import RegionsIndex from './pages/regions/RegionsIndex';
import RegionDetail from './pages/regions/RegionDetail';

import { brand } from './config/brand';
import { Link } from 'react-router-dom';

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
        <AnalyticsProvider />
        <ScrollToTop />
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
            <Route path="request-organization" element={<RequestOrganization />} />
            <Route path="regions" element={<RegionsIndex />} />

            {/* Newsroom */}
            <Route path="newsroom" element={<Newsroom />} />
            <Route path="press-releases" element={<PressReleases />} />
            <Route path="media-kit" element={<MediaKit />} />
            <Route path="regions/:slug" element={<RegionDetail />} />

            {/* Solutions Routes */}
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:slug" element={<SolutionDetail />} />

            {/* Modules Routes */}
            <Route path="modules" element={<Modules />} />
            <Route path="modules/:slug" element={<ModuleDetail />} />

            {/* Use Cases Routes */}
            <Route path="use-cases" element={<UseCases />} />
            <Route path="use-cases/:slug" element={<UseCaseDetail />} />

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

            {/* Islamic Utilities Routes */}
            <Route path="islamic-utilities" element={<IslamicUtilitiesPage />} />
            <Route path="namaz-timings" element={<NamazTimingsPage />} />
            <Route path="zakat-calculator" element={<ZakatCalculatorPage />} />
            <Route path="islamic-calendar" element={<IslamicCalendarPage />} />
            <Route path="moon-phase-islamic-calendar" element={<MoonPhasePage />} />
            <Route path="qibla-direction" element={<QiblaDirectionPage />} />
            <Route path="weather-charity-distribution" element={<WeatherPlanningPage />} />
            <Route path="hajj-countdown" element={<HajjCountdownPage />} />
            <Route path="ramadan-planner" element={<RamadanPlannerPage />} />
            <Route path="eid-qurbani-planner" element={<EidQurbaniPlannerPage />} />
            <Route path="sadqa-zakat-planner" element={<SadqaZakatPlannerPage />} />
            <Route path="islamic-glossary" element={<IslamicGlossaryPage />} />

            {/* Resources Routes */}
            <Route path="resources" element={<Resources />} />
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
