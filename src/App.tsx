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
import StaticPage from './pages/StaticPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:slug" element={<Solutions />} />
            <Route path="modules" element={<Modules />} />
            <Route path="modules/:slug" element={<Modules />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="book-demo" element={<BookDemo />} />
            <Route path="inquiry-form" element={<InquiryForm />} />
            <Route path="ask-sidqly" element={<AskSidqly />} />
            <Route path="why-fill-the-form" element={<WhyFillForm />} />
            <Route path="demo" element={<BookDemo />} />
            <Route path="how-it-works" element={<StaticPage title="How It Works" description="Learn about the Sidqly verification workflow." content="Sidqly simplifies your operations through a professional 4-step workflow: 1. Submission, 2. Manual Review, 3. Approval, 4. Reporting." />} />
            <Route path="help" element={<StaticPage title="Help Center" description="Sidqly support and documentation." content="Our help center provides guides for organizations, donors, and vendors." />} />
            <Route path="help/:slug" element={<StaticPage title="Help Center" description="Sidqly support and documentation." content="Detailed guidance for your specific role in the Sidqly ecosystem." />} />
            <Route path="about" element={<StaticPage title="About Sidqly" description="Our mission to bring trust and professionalism to giving." content="Sidqly was founded to solve the operational challenges faced by modern Islamic organizations." />} />
            <Route path="contact" element={<StaticPage title="Contact Us" description="Get in touch with the Sidqly team." content="Email us at team@sidqly.com or book a demo to speak with our experts." />} />
            <Route path="privacy" element={<StaticPage title="Privacy Policy" description="How we protect your data." content="We take data privacy and recipient dignity seriously. Your data is secure and never shared without consent." />} />
            <Route path="terms" element={<StaticPage title="Terms of Service" description="Our service agreement." content="By using Sidqly, you agree to our professional standards of verified giving." />} />
            <Route path="security" element={<StaticPage title="Security" description="Sidqly's security standards." content="Sidqly uses bank-grade security to protect your organization's data and financial records." />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
