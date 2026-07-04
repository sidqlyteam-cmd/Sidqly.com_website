import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { Mail, Calendar, FileText, Globe, Shield, Search } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  const popularSearches = ['Qibla', 'Namaz Timings', 'Zakat Calculator', 'Islamic Calendar', 'Qurbani', 'Ramadan Planner', 'Newsroom', 'Press Releases', 'Media Kit', 'Brand Assets', 'Reports'];

  return (
    <footer className="bg-sidqly-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Search Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Search Sidqly</h2>
              <p className="text-gray-400 mb-8">Find Islamic tools, giving workflows, use cases, resources, newsroom updates, press materials, and trust pages.</p>

              <button
                onClick={handleOpenSearch}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 px-6 py-4 rounded-xl flex items-center justify-between transition-all mb-6 group text-left"
              >
                <div className="flex items-center gap-3">
                  <Search size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="truncate">Search Qibla, Namaz timings, Zakat, Qurbani, Ramadan, proof, reports...</span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                   <kbd className="bg-white/10 px-2 py-1 rounded text-xs font-mono font-bold text-gray-400">⌘</kbd>
                   <kbd className="bg-white/10 px-2 py-1 rounded text-xs font-mono font-bold text-gray-400">K</kbd>
                </div>
              </button>

              <div className="flex flex-wrap justify-center gap-2">
                 {popularSearches.map(chip => (
                   <button
                     key={chip}
                     onClick={handleOpenSearch}
                     className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                   >
                     {chip}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8 hover:opacity-90 transition-opacity">
              <img src="/brand/sidqly-logo-light-text.svg" alt="Sidqly" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs">
              Verified giving operations platform for Islamic charities.
            </p>
            <div className="space-y-4">
              <a href={brand.calendlyUrl} className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold">
                <Calendar size={18} /> Book a Demo
              </a>
              <a href={brand.inquiryFormUrl} className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold">
                <FileText size={18} /> Fill Inquiry Form
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold">
                <Mail size={18} /> {brand.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
             <div className="space-y-12">
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Product</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                      <li><Link to="/modules" className="hover:text-white transition-colors">Modules</Link></li>
                      <li><Link to="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                      <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                      <li><Link to="/compare" className="hover:text-white transition-colors">Compare</Link></li>
                      <li><Link to="/request-organization" className="hover:text-white transition-colors">Request Organization</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Islamic Tools</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to="/islamic-utilities" className="hover:text-white transition-colors">Islamic Utilities</Link></li>
                      <li><Link to="/islamic-calendar" className="hover:text-white transition-colors">Islamic Calendar</Link></li>
                      <li><Link to="/namaz-timings" className="hover:text-white transition-colors">Namaz Timings</Link></li>
                      <li><Link to="/qibla-direction" className="hover:text-white transition-colors">Qibla Direction</Link></li>
                      <li><Link to="/zakat-calculator" className="hover:text-white transition-colors">Zakat Calculator</Link></li>
                      <li><Link to="/moon-phase-islamic-calendar" className="hover:text-white transition-colors">Moon Phase</Link></li>
                      <li><Link to="/weather-charity-distribution" className="hover:text-white transition-colors">Weather-Aware Distribution</Link></li>
                      <li><Link to="/hajj-countdown" className="hover:text-white transition-colors">Hajj Countdown</Link></li>
                      <li><Link to="/ramadan-planner" className="hover:text-white transition-colors">Ramadan Planner</Link></li>
                      <li><Link to="/eid-qurbani-planner" className="hover:text-white transition-colors">Eid/Qurbani Planner</Link></li>
                      <li><Link to="/sadqa-zakat-planner" className="hover:text-white transition-colors">Sadqa/Zakat Planner</Link></li>
                      <li><Link to="/islamic-glossary" className="hover:text-white transition-colors">Islamic Glossary</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Resources</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to="/resources" className="hover:text-white transition-colors">Resources Hub</Link></li>
                      <li><Link to="/resources/eid-giving" className="hover:text-white transition-colors">Seasonal Giving Guides</Link></li>
                      <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                      <li><Link to="/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
                      <li><Link to="/press-releases" className="hover:text-white transition-colors">Press Releases</Link></li>
                      <li><Link to="/media-kit" className="hover:text-white transition-colors">Media Kit</Link></li>
                      <li><Link to="/brand-assets" className="hover:text-white transition-colors">Brand Assets</Link></li>
                      <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
                   </ul>
                </div>
             </div>

             <div className="space-y-12">
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Use Cases</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to="/use-cases/mosques" className="hover:text-white transition-colors">Mosques / Masjids</Link></li>
                      <li><Link to="/use-cases/islamic-charities" className="hover:text-white transition-colors">Islamic Charities</Link></li>
                      <li><Link to="/use-cases/zakat-committees" className="hover:text-white transition-colors">Zakat Committees</Link></li>
                      <li><Link to="/use-cases/qurbani-organizers" className="hover:text-white transition-colors">Qurbani Organizers</Link></li>
                      <li><Link to="/use-cases/ramadan-ration-teams" className="hover:text-white transition-colors">Ramadan Ration Teams</Link></li>
                      <li><Link to="/use-cases/sadaqah-campaign-teams" className="hover:text-white transition-colors">Sadaqah Campaign Teams</Link></li>
                      <li><Link to="/use-cases/corporate-sponsors" className="hover:text-white transition-colors">Corporate Sponsors</Link></li>
                      <li><Link to="/use-cases/donors" className="hover:text-white transition-colors">Donors</Link></li>
                      <li><Link to="/use-cases/volunteers" className="hover:text-white transition-colors">Volunteers</Link></li>
                      <li><Link to="/use-cases/vendors" className="hover:text-white transition-colors">Vendors</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Trust</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to="/trust-center" className="hover:text-white transition-colors">Trust Center</Link></li>
                      <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                      <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                      <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                      <li><Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
                      <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                   </ul>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-12 text-center">
           <h3 className="text-xl font-bold text-white mb-6">Want your organization to manage giving more clearly?</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-organization" className="bg-sidqly-green-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all text-sm">
                 Request Your Organization
              </Link>
              <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all text-sm border border-white/10">
                 Book Demo
              </a>
              <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all text-sm border border-white/10">
                 Fill Inquiry Form
              </a>
           </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-sidqly-green-soft font-bold text-xs">
                <Shield size={14} /> <span>Amanah-Safe Engine</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/20"></div>
             <div className="flex items-center gap-2 text-sidqly-green-soft font-bold text-xs">
                <Globe size={14} /> <span>Global Standard</span>
             </div>
          </div>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} {brand.name} Operations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
