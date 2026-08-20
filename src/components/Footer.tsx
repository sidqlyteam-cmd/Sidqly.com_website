import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { Mail, Calendar, FileText, Globe, Shield, Search } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, getLocalizedPath } = useLanguage();

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
                <div className="flex items-center gap-3 w-full overflow-hidden">
                  <Search size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="truncate">{t('common.searchPlaceholder', 'Search modules, features, guides, or locations...')}</span>
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
            <Link to={getLocalizedPath('/')} className="inline-block mb-8 hover:opacity-90 transition-opacity">
              <img src="/brand/sidqly-logo-light-text.svg" alt="Sidqly" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Verified giving operations platform for Islamic charities.
            </p>

            <div className="mb-8">
              <LanguageSwitcher dropUp />
            </div>

            <div className="space-y-4">
              <a
                href={brand.calendlyUrl}
                onClick={() => trackEvent('demo_submit', { cta_source: 'footer_links_demo' })}
                className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold"
              >
                <Calendar size={18} /> {t('common.bookDemo', 'Book a Demo')}
              </a>
              <a
                href={brand.inquiryFormUrl}
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_links_inquiry' })}
                className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold"
              >
                <FileText size={18} /> Fill Inquiry Form
              </a>
              <a
                href={`mailto:${brand.email}`}
                onClick={() => trackEvent('contact_submit', { cta_source: 'footer_links_email' })}
                className="flex items-center gap-3 text-sidqly-green-soft hover:text-white transition-colors text-sm font-bold"
              >
                <Mail size={18} /> {brand.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-3">
             <div className="space-y-12">
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">{t('nav.product', 'Product')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/what-is-sidqly')} className="hover:text-white transition-colors">{t('nav.whatIsSidqly', 'What is Sidqly?')}</Link></li>
                      <li><Link to={getLocalizedPath('/features')} className="hover:text-white transition-colors">{t('nav.features', 'Features')}</Link></li>
                      <li><Link to={getLocalizedPath('/modules')} className="hover:text-white transition-colors">{t('nav.modules', 'Modules')}</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases')} className="hover:text-white transition-colors">{t('nav.useCases', 'Use Cases')}</Link></li>
                      <li><Link to={getLocalizedPath('/pricing')} className="hover:text-white transition-colors">{t('nav.pricing', 'Pricing')}</Link></li>
                      <li><Link to={getLocalizedPath('/guided-pilot')} className="hover:text-white transition-colors font-bold text-sidqly-green-soft">{t('nav.guidedPilot', 'Guided Pilot')}</Link></li>
                      <li><Link to={getLocalizedPath('/data-migration')} className="hover:text-white transition-colors">{t('nav.dataMigration', 'Data Migration')}</Link></li>
                      <li><Link to={getLocalizedPath('/contact-sales')} className="hover:text-white transition-colors">{t('nav.contactSales', 'Contact Sales')}</Link></li>
                      <li><Link to={getLocalizedPath('/compare')} className="hover:text-white transition-colors">{t('nav.compare', 'Compare')}</Link></li>
                      <li><Link to={getLocalizedPath('/request-organization')} className="hover:text-white transition-colors">Request Organization</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">{t('nav.islamicTools', 'Islamic Tools')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/islamic-utilities')} className="hover:text-white transition-colors">Islamic Utilities</Link></li>
                      <li><Link to={getLocalizedPath('/islamic-calendar')} className="hover:text-white transition-colors">Islamic Calendar</Link></li>
                      <li><Link to={getLocalizedPath('/namaz-timings')} className="hover:text-white transition-colors">Namaz Timings</Link></li>
                      <li><Link to={getLocalizedPath('/qibla-direction')} className="hover:text-white transition-colors">Qibla Direction</Link></li>
                      <li><Link to={getLocalizedPath('/zakat-calculator')} className="hover:text-white transition-colors">Zakat Calculator</Link></li>
                      <li><Link to={getLocalizedPath('/moon-phase-islamic-calendar')} className="hover:text-white transition-colors">Moon Phase</Link></li>
                      <li><Link to={getLocalizedPath('/weather-charity-distribution')} className="hover:text-white transition-colors">Weather-Aware Distribution</Link></li>
                      <li><Link to={getLocalizedPath('/hajj-countdown')} className="hover:text-white transition-colors">Hajj Countdown</Link></li>
                      <li><Link to={getLocalizedPath('/ramadan-planner')} className="hover:text-white transition-colors">Ramadan Planner</Link></li>
                      <li><Link to={getLocalizedPath('/eid-qurbani-planner')} className="hover:text-white transition-colors">Eid/Qurbani Planner</Link></li>
                      <li><Link to={getLocalizedPath('/sadqa-zakat-planner')} className="hover:text-white transition-colors">Sadqa/Zakat Planner</Link></li>
                      <li><Link to={getLocalizedPath('/islamic-glossary')} className="hover:text-white transition-colors">Islamic Glossary</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">{t('nav.resources', 'Resources')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/resources')} className="hover:text-white transition-colors">Resources Hub</Link></li>
                      <li><Link to={getLocalizedPath('/resources/eid-giving')} className="hover:text-white transition-colors">Seasonal Giving Guides</Link></li>
                      <li><Link to={getLocalizedPath('/blog')} className="hover:text-white transition-colors">Blog</Link></li>
                      <li><Link to={getLocalizedPath('/newsroom')} className="hover:text-white transition-colors">{t('nav.newsroom', 'Newsroom')}</Link></li>
                      <li><Link to={getLocalizedPath('/press-releases')} className="hover:text-white transition-colors">Press Releases</Link></li>
                      <li><Link to={getLocalizedPath('/media-kit')} className="hover:text-white transition-colors">Media Kit</Link></li>
                      <li><Link to={getLocalizedPath('/sitemap')} className="hover:text-white transition-colors">Sitemap</Link></li>
                   </ul>
                </div>
             </div>

             <div className="space-y-12">
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">{t('nav.useCases', 'Use Cases')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/use-cases/mosques')} className="hover:text-white transition-colors">Mosques / Masjids</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/islamic-charities')} className="hover:text-white transition-colors">Islamic Charities</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/zakat-committees')} className="hover:text-white transition-colors">Zakat Committees</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/qurbani-organizers')} className="hover:text-white transition-colors">Qurbani Organizers</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/ramadan-ration-teams')} className="hover:text-white transition-colors">Ramadan Ration Teams</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/sadaqah-campaign-teams')} className="hover:text-white transition-colors">Sadaqah Campaign Teams</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/corporate-sponsors')} className="hover:text-white transition-colors">Corporate Sponsors</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/donors')} className="hover:text-white transition-colors">Donors</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/volunteers')} className="hover:text-white transition-colors">Volunteers</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/vendors')} className="hover:text-white transition-colors">Vendors</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">{t('nav.trust', 'Trust')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/trust-center')} className="hover:text-white transition-colors">Trust Center</Link></li>
                      <li><Link to={getLocalizedPath('/security')} className="hover:text-white transition-colors">Security</Link></li>
                      <li><Link to={getLocalizedPath('/privacy')} className="hover:text-white transition-colors">Privacy</Link></li>
                      <li><Link to={getLocalizedPath('/terms')} className="hover:text-white transition-colors">Terms</Link></li>
                      <li><Link to={getLocalizedPath('/accessibility')} className="hover:text-white transition-colors">Accessibility</Link></li>
                      <li><Link to={getLocalizedPath('/contact')} className="hover:text-white transition-colors">Contact</Link></li>
                   </ul>
                </div>
                <div className="mt-12">
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sidqly-green-soft mb-6">Global Service Areas</h4>
                   <ul className="space-y-4 text-sm text-gray-400 font-medium">
                      <li><Link to={getLocalizedPath('/locations')} className="hover:text-white transition-colors font-bold text-gray-300">View All Service Areas</Link></li>
                      <li className="pt-2 text-xs text-white/40 uppercase tracking-widest">Main Regions</li>
                      <li><Link to={getLocalizedPath('/locations/north-america')} className="hover:text-white transition-colors">North America</Link></li>
                      <li><Link to={getLocalizedPath('/locations/europe')} className="hover:text-white transition-colors">Europe</Link></li>
                      <li><Link to={getLocalizedPath('/locations/middle-east')} className="hover:text-white transition-colors">Middle East</Link></li>
                      <li><Link to={getLocalizedPath('/locations/south-asia')} className="hover:text-white transition-colors">South Asia</Link></li>
                      <li><Link to={getLocalizedPath('/locations/asia-pacific')} className="hover:text-white transition-colors">Asia Pacific</Link></li>
                      <li><Link to={getLocalizedPath('/locations/africa')} className="hover:text-white transition-colors">Africa</Link></li>

                      <li className="pt-2 text-xs text-white/40 uppercase tracking-widest">Priority Countries</li>
                      <li><Link to={getLocalizedPath('/locations/united-kingdom')} className="hover:text-white transition-colors">United Kingdom</Link></li>
                      <li><Link to={getLocalizedPath('/locations/united-states')} className="hover:text-white transition-colors">United States</Link></li>
                      <li><Link to={getLocalizedPath('/locations/canada')} className="hover:text-white transition-colors">Canada</Link></li>
                      <li><Link to={getLocalizedPath('/locations/united-arab-emirates')} className="hover:text-white transition-colors">United Arab Emirates</Link></li>
                      <li><Link to={getLocalizedPath('/locations/saudi-arabia')} className="hover:text-white transition-colors">Saudi Arabia</Link></li>
                      <li><Link to={getLocalizedPath('/locations/pakistan')} className="hover:text-white transition-colors">Pakistan</Link></li>
                      <li><Link to={getLocalizedPath('/locations/malaysia')} className="hover:text-white transition-colors">Malaysia</Link></li>
                      <li><Link to={getLocalizedPath('/locations/australia')} className="hover:text-white transition-colors">Australia</Link></li>

                      <li className="pt-2 text-xs text-white/40 uppercase tracking-widest">Top Cities</li>
                      <li><Link to={getLocalizedPath('/locations/london-islamic-charity-software')} className="hover:text-white transition-colors">London</Link></li>
                      <li><Link to={getLocalizedPath('/locations/dubai-islamic-charity-software')} className="hover:text-white transition-colors">Dubai</Link></li>
                      <li><Link to={getLocalizedPath('/locations/riyadh-islamic-charity-software')} className="hover:text-white transition-colors">Riyadh</Link></li>
                      <li><Link to={getLocalizedPath('/locations/doha-islamic-charity-software')} className="hover:text-white transition-colors">Doha</Link></li>
                      <li><Link to={getLocalizedPath('/locations/toronto-islamic-charity-software')} className="hover:text-white transition-colors">Toronto</Link></li>
                      <li><Link to={getLocalizedPath('/locations/new-york-islamic-charity-software')} className="hover:text-white transition-colors">New York</Link></li>
                      <li><Link to={getLocalizedPath('/locations/houston-islamic-charity-software')} className="hover:text-white transition-colors">Houston</Link></li>
                      <li><Link to={getLocalizedPath('/locations/karachi-islamic-charity-software')} className="hover:text-white transition-colors">Karachi</Link></li>
                      <li><Link to={getLocalizedPath('/locations/lahore-islamic-charity-software')} className="hover:text-white transition-colors">Lahore</Link></li>
                      <li><Link to={getLocalizedPath('/locations/kuala-lumpur-islamic-charity-software')} className="hover:text-white transition-colors">Kuala Lumpur</Link></li>
                      <li><Link to={getLocalizedPath('/locations/sydney-islamic-charity-software')} className="hover:text-white transition-colors">Sydney</Link></li>
                      <li><Link to={getLocalizedPath('/locations/melbourne-islamic-charity-software')} className="hover:text-white transition-colors">Melbourne</Link></li>
                   </ul>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-12 text-center">
           <h3 className="text-xl font-bold text-white mb-6">Want your organization to manage giving more clearly?</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={getLocalizedPath('/request-organization')}
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_bottom_request' })}
                className="bg-sidqly-green-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all text-sm"
              >
                 Request Your Organization
              </Link>
              <a
                href={brand.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('demo_submit', { cta_source: 'footer_bottom_demo' })}
                className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all text-sm border border-white/10"
              >
                 {t('common.bookDemo', 'Book Demo')}
              </a>
              <a
                href={brand.links.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_bottom_inquiry' })}
                className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all text-sm border border-white/10"
              >
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
            © {currentYear} {brand.name} Operations. {t('common.allRightsReserved', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
