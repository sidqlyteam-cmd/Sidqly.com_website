import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageContext';
import { isSupportedLanguage } from './i18n/config';

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
import LegalDetail from './pages/LegalDetail';
import ThankYou from './pages/ThankYou';
import SitemapPage from './pages/SitemapPage';
import AISearchReadiness from './pages/AISearchReadiness';
import Resources from './pages/Resources';
import WhatIsSidqly from './pages/WhatIsSidqly';
import WhySidqly from './pages/WhySidqly';
import MissionAndValues from './pages/MissionAndValues';
import Platform from './pages/Platform';
import GuidedPilot from './pages/GuidedPilot';
import DataMigration from './pages/DataMigration';
import ContactSales from './pages/ContactSales';
import IslamicCharitySoftware from './pages/IslamicCharitySoftware';
import IslamicGivingPlatform from './pages/IslamicGivingPlatform';
import ZakatManagementSoftware from './pages/ZakatManagementSoftware';
import KnowledgeHub from './pages/KnowledgeHub';
import KnowledgeDetail from './pages/KnowledgeDetail';

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
import IslamicDashboardPage from './pages/islamic/IslamicDashboardPage';

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
import ProductTour from './pages/ProductTour';
import UseCases from './pages/UseCases';
import UseCaseDetail from './pages/use-cases/UseCaseDetail';
import RegionsIndex from './pages/regions/RegionsIndex';
import RegionDetail from './pages/regions/RegionDetail';
import LocationsIndex from './pages/locations/LocationsIndex';
import LocationDetail from './pages/locations/LocationDetail';

import { brand } from './config/brand';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
  <section className="py-20 bg-sidqly-ivory min-h-screen flex items-center">
    <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
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

const LanguageGuard = () => {
  const { lang } = useParams<{ lang: string }>();
  if (!lang || !isSupportedLanguage(lang) || lang === 'en') {
    return <NotFound />;
  }
  return <Outlet />;
};

const siteRoutes = [
  <Route key="home" index element={<Home />} />,
  <Route key="features" path="features" element={<Features />} />,
  <Route key="product-tour" path="product-tour" element={<ProductTour />} />,
  <Route key="how-it-works" path="how-it-works" element={<HowItWorks />} />,
  <Route key="pricing" path="pricing" element={<Pricing />} />,
  <Route key="demo" path="demo" element={<Navigate to="/book-demo" replace />} />,
  <Route key="book-demo" path="book-demo" element={<BookDemo />} />,
  <Route key="guided-pilot" path="guided-pilot" element={<GuidedPilot />} />,
  <Route key="data-migration" path="data-migration" element={<DataMigration />} />,
  <Route key="contact-sales" path="contact-sales" element={<ContactSales />} />,
  <Route key="islamic-charity-software" path="islamic-charity-software" element={<IslamicCharitySoftware />} />,
  <Route key="islamic-giving-operations-platform" path="islamic-giving-operations-platform" element={<IslamicGivingPlatform />} />,
  <Route key="zakat-management-software" path="zakat-management-software" element={<ZakatManagementSoftware />} />,
  <Route key="knowledge-hub" path="knowledge-hub" element={<KnowledgeHub />} />,
  <Route key="knowledge-hub-detail" path="knowledge-hub/:slug" element={<KnowledgeDetail />} />,
  <Route key="what-is-sidqly" path="what-is-sidqly" element={<WhatIsSidqly />} />,
  <Route key="why-sidqly" path="why-sidqly" element={<WhySidqly />} />,
  <Route key="how-sidqly-works" path="how-sidqly-works" element={<Navigate to="/how-it-works" replace />} />,
  <Route key="mission-and-values" path="mission-and-values" element={<MissionAndValues />} />,
  <Route key="platform" path="platform" element={<Platform />} />,
  <Route key="trust" path="trust" element={<Navigate to="/trust-center" replace />} />,
  <Route key="inquiry-form" path="inquiry-form" element={<InquiryForm />} />,
  <Route key="ask-sidqly" path="ask-sidqly" element={<AskSidqly />} />,
  <Route key="why-fill-the-form" path="why-fill-the-form" element={<WhyFillForm />} />,
  <Route key="faqs" path="faqs" element={<FAQs />} />,
  <Route key="help" path="help" element={<Help />} />,
  <Route key="about" path="about" element={<About />} />,
  <Route key="contact" path="contact" element={<Contact />} />,
  <Route key="privacy" path="privacy" element={<Privacy />} />,
  <Route key="terms" path="terms" element={<Terms />} />,
  <Route key="security" path="security" element={<Security />} />,
  <Route key="brand" path="brand" element={<Brand />} />,
  <Route key="trust-center" path="trust-center" element={<TrustCenter />} />,
  <Route key="accessibility" path="accessibility" element={<Accessibility />} />,
  <Route key="billing" path="billing" element={<Billing />} />,
  <Route key="start-pilot" path="start-pilot" element={<StartPilot />} />,
  <Route key="implementation" path="implementation" element={<Implementation />} />,
  <Route key="migration" path="migration" element={<Migration />} />,
  <Route key="purchase" path="purchase" element={<Purchase />} />,
  <Route key="status" path="status" element={<Status />} />,
  <Route key="legal" path="legal" element={<Legal />} />,
  <Route key="legal-detail" path="legal/:slug" element={<LegalDetail />} />,
  <Route key="sitemap" path="sitemap" element={<SitemapPage />} />,
  <Route key="ai-search-readiness" path="ai-search-readiness" element={<AISearchReadiness />} />,
  <Route key="request-organization" path="request-organization" element={<RequestOrganization />} />,
  <Route key="regions" path="regions" element={<RegionsIndex />} />,
  <Route key="locations" path="locations" element={<LocationsIndex />} />,
  <Route key="locations-detail" path="locations/:slug" element={<LocationDetail />} />,
  <Route key="newsroom" path="newsroom" element={<Newsroom />} />,
  <Route key="press-releases" path="press-releases" element={<PressReleases />} />,
  <Route key="media-kit" path="media-kit" element={<MediaKit />} />,
  <Route key="regions-detail" path="regions/:slug" element={<RegionDetail />} />,
  <Route key="solutions" path="solutions" element={<Solutions />} />,
  <Route key="solutions-detail" path="solutions/:slug" element={<SolutionDetail />} />,
  <Route key="modules" path="modules" element={<Modules />} />,
  <Route key="modules-detail" path="modules/:slug" element={<ModuleDetail />} />,
  <Route key="use-cases" path="use-cases" element={<UseCases />} />,
  <Route key="use-cases-detail" path="use-cases/:slug" element={<UseCaseDetail />} />,
  <Route key="blog" path="blog" element={<BlogIndex />} />,
  <Route key="blog-detail" path="blog/:slug" element={<BlogPost />} />,
  <Route key="thank-you" path="thank-you" element={<ThankYou />} />,
  <Route key="thank-you-demo" path="thank-you/demo" element={<ThankYou type="demo" />} />,
  <Route key="thank-you-contact" path="thank-you/contact" element={<ThankYou type="contact" />} />,
  <Route key="thank-you-pricing" path="thank-you/pricing" element={<ThankYou type="pricing" />} />,
  <Route key="compare" path="compare" element={<CompareIndex />} />,
  <Route key="trust-and-dignity" path="trust-and-dignity" element={<CompareDetail />} />,
  <Route key="proof-trust-engine" path="proof-trust-engine" element={<CompareDetail />} />,
  <Route key="verified-giving" path="verified-giving" element={<CompareDetail />} />,
  <Route key="manual-payment-review" path="manual-payment-review" element={<CompareDetail />} />,
  <Route key="donor-safe-impact" path="donor-safe-impact" element={<CompareDetail />} />,
  <Route key="corporate-reporting" path="corporate-reporting" element={<CompareDetail />} />,
  <Route key="zakat-fund-separation" path="zakat-fund-separation" element={<CompareDetail />} />,
  <Route key="qurbani-management-software" path="qurbani-management-software" element={<CompareDetail />} />,
  <Route key="ramadan-donation-management" path="ramadan-donation-management" element={<CompareDetail />} />,
  <Route key="charity-request-management" path="charity-request-management" element={<CompareDetail />} />,
  <Route key="vendor-fulfillment-platform" path="vendor-fulfillment-platform" element={<CompareDetail />} />,
  <Route key="mosque-donation-management" path="mosque-donation-management" element={<CompareDetail />} />,
  <Route key="compare-detail" path="compare/:slug" element={<CompareDetail />} />,
  <Route key="alternatives-detail" path="alternatives/:slug" element={<CompareDetail />} />,
  <Route key="islamic-utilities" path="islamic-utilities" element={<IslamicUtilitiesPage />} />,
  <Route key="namaz-timings" path="namaz-timings" element={<NamazTimingsPage />} />,
  <Route key="zakat-calculator" path="zakat-calculator" element={<ZakatCalculatorPage />} />,
  <Route key="islamic-calendar" path="islamic-calendar" element={<IslamicCalendarPage />} />,
  <Route key="moon-phase" path="moon-phase-islamic-calendar" element={<MoonPhasePage />} />,
  <Route key="qibla" path="qibla-direction" element={<QiblaDirectionPage />} />,
  <Route key="weather" path="weather-charity-distribution" element={<WeatherPlanningPage />} />,
  <Route key="hajj" path="hajj-countdown" element={<HajjCountdownPage />} />,
  <Route key="ramadan" path="ramadan-planner" element={<RamadanPlannerPage />} />,
  <Route key="eid" path="eid-qurbani-planner" element={<EidQurbaniPlannerPage />} />,
  <Route key="sadqa" path="sadqa-zakat-planner" element={<SadqaZakatPlannerPage />} />,
  <Route key="glossary" path="islamic-glossary" element={<IslamicGlossaryPage />} />,
  <Route key="islamic-dashboard" path="islamic-dashboard" element={<IslamicDashboardPage />} />,
  <Route key="resources" path="resources" element={<Resources />} />,
  <Route key="resources-detail" path="resources/:slug" element={<ResourceDetail />} />,
  <Route key="not-found" path="*" element={<NotFound />} />,
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <AnalyticsProvider />
          <ScrollToTop />
          <Routes>
            {/* English Default Root Routes */}
            <Route path="/" element={<MainLayout />}>
              {siteRoutes}
            </Route>

            {/* Localized Language Routes (/ar, /ur) */}
            <Route path="/:lang" element={<LanguageGuard />}>
              <Route element={<MainLayout />}>
                {siteRoutes}
              </Route>
            </Route>
          </Routes>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
