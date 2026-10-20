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
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Search Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-16 shadow-xs">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Search Sidqly</h2>
              <p className="text-slate-600 mb-6 text-sm md:text-base">Find Islamic tools, giving workflows, use cases, resources, newsroom updates, and compliance guides.</p>

              <button
                onClick={handleOpenSearch}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-slate-700 px-6 py-4 rounded-xl flex items-center justify-between transition-all mb-5 group text-left shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3 w-full overflow-hidden">
                  <Search size={20} className="text-slate-400 group-hover:text-sidqly-green-deep transition-colors" />
                  <span className="truncate text-slate-500 font-medium">{t('common.searchPlaceholder', 'Search modules, features, guides, or locations...')}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                   <kbd className="bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-mono font-bold text-slate-500">⌘</kbd>
                   <kbd className="bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-mono font-bold text-slate-500">K</kbd>
                </div>
              </button>

              <div className="flex flex-wrap justify-center gap-2">
                 {popularSearches.map(chip => (
                   <button
                     key={chip}
                     onClick={handleOpenSearch}
                     className="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-sidqly-green-deep border border-slate-200/80 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                   >
                     {chip}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-1">
            <Link to={getLocalizedPath('/')} className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <img src="/brand/sidqly-logo.svg" alt="Sidqly" className="h-9 w-auto" />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xs font-medium">
              Verified giving operations platform for Islamic charities, mosques, and relief organizations.
            </p>

            <div className="mb-6">
              <LanguageSwitcher dropUp />
            </div>

            <div className="space-y-3.5">
              <a
                href={brand.calendlyUrl}
                onClick={() => trackEvent('demo_submit', { cta_source: 'footer_links_demo' })}
                className="flex items-center gap-2.5 text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors text-sm font-bold"
              >
                <Calendar size={18} /> {t('common.bookDemo', 'Book a Demo')}
              </a>
              <a
                href={brand.inquiryFormUrl}
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_links_inquiry' })}
                className="flex items-center gap-2.5 text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors text-sm font-bold"
              >
                <FileText size={18} /> Fill Inquiry Form
              </a>
              <a
                href={`mailto:${brand.email}`}
                onClick={() => trackEvent('contact_submit', { cta_source: 'footer_links_email' })}
                className="flex items-center gap-2.5 text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors text-sm font-bold"
              >
                <Mail size={18} /> {brand.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-3">
             <div className="space-y-10">
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">{t('nav.product', 'Product')}</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/what-is-sidqly')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.whatIsSidqly', 'What is Sidqly?')}</Link></li>
                      <li><Link to={getLocalizedPath('/features')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.features', 'Features')}</Link></li>
                      <li><Link to={getLocalizedPath('/modules')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.modules', 'Modules')}</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.useCases', 'Use Cases')}</Link></li>
                      <li><Link to={getLocalizedPath('/pricing')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.pricing', 'Pricing')}</Link></li>
                      <li><Link to={getLocalizedPath('/guided-pilot')} className="hover:text-sidqly-green-emerald transition-colors font-bold text-sidqly-green-deep">{t('nav.guidedPilot', 'Guided Pilot')}</Link></li>
                      <li><Link to={getLocalizedPath('/data-migration')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.dataMigration', 'Data Migration')}</Link></li>
                      <li><Link to={getLocalizedPath('/contact-sales')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.contactSales', 'Contact Sales')}</Link></li>
                      <li><Link to={getLocalizedPath('/compare')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.compare', 'Compare')}</Link></li>
                      <li><Link to={getLocalizedPath('/request-organization')} className="hover:text-sidqly-green-deep transition-colors">Request Organization</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">{t('nav.islamicTools', 'Islamic Tools')}</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/islamic-utilities')} className="hover:text-sidqly-green-deep transition-colors">Islamic Utilities Hub</Link></li>
                      <li><Link to={getLocalizedPath('/islamic-calendar')} className="hover:text-sidqly-green-deep transition-colors">Islamic Calendar</Link></li>
                      <li><Link to={getLocalizedPath('/namaz-timings')} className="hover:text-sidqly-green-deep transition-colors">Namaz Timings</Link></li>
                      <li><Link to={getLocalizedPath('/qibla-direction')} className="hover:text-sidqly-green-deep transition-colors">Qibla Direction</Link></li>
                      <li><Link to={getLocalizedPath('/zakat-calculator')} className="hover:text-sidqly-green-deep transition-colors">Zakat Calculator</Link></li>
                      <li><Link to={getLocalizedPath('/moon-phase-islamic-calendar')} className="hover:text-sidqly-green-deep transition-colors">Moon Phase</Link></li>
                      <li><Link to={getLocalizedPath('/weather-charity-distribution')} className="hover:text-sidqly-green-deep transition-colors">Weather-Aware Distribution</Link></li>
                      <li><Link to={getLocalizedPath('/hajj-countdown')} className="hover:text-sidqly-green-deep transition-colors">Hajj Countdown</Link></li>
                      <li><Link to={getLocalizedPath('/ramadan-planner')} className="hover:text-sidqly-green-deep transition-colors">Ramadan Planner</Link></li>
                      <li><Link to={getLocalizedPath('/eid-qurbani-planner')} className="hover:text-sidqly-green-deep transition-colors">Eid/Qurbani Planner</Link></li>
                      <li><Link to={getLocalizedPath('/sadqa-zakat-planner')} className="hover:text-sidqly-green-deep transition-colors">Sadqa/Zakat Planner</Link></li>
                      <li><Link to={getLocalizedPath('/islamic-glossary')} className="hover:text-sidqly-green-deep transition-colors">Islamic Glossary</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">{t('nav.resources', 'Resources')}</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/resources')} className="hover:text-sidqly-green-deep transition-colors">Resources Hub</Link></li>
                      <li><Link to={getLocalizedPath('/resources/eid-giving')} className="hover:text-sidqly-green-deep transition-colors">Seasonal Giving Guides</Link></li>
                      <li><Link to={getLocalizedPath('/blog')} className="hover:text-sidqly-green-deep transition-colors">Blog & Guides</Link></li>
                      <li><Link to={getLocalizedPath('/newsroom')} className="hover:text-sidqly-green-deep transition-colors">{t('nav.newsroom', 'Newsroom')}</Link></li>
                      <li><Link to={getLocalizedPath('/press-releases')} className="hover:text-sidqly-green-deep transition-colors">Press Releases</Link></li>
                      <li><Link to={getLocalizedPath('/media-kit')} className="hover:text-sidqly-green-deep transition-colors">Media Kit</Link></li>
                      <li><Link to={getLocalizedPath('/sitemap')} className="hover:text-sidqly-green-deep transition-colors">Sitemap</Link></li>
                   </ul>
                </div>
             </div>

             <div className="space-y-10">
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">{t('nav.useCases', 'Use Cases')}</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/use-cases/mosques')} className="hover:text-sidqly-green-deep transition-colors">Mosques / Masjids</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/islamic-charities')} className="hover:text-sidqly-green-deep transition-colors">Islamic Charities</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/zakat-committees')} className="hover:text-sidqly-green-deep transition-colors">Zakat Committees</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/qurbani-organizers')} className="hover:text-sidqly-green-deep transition-colors">Qurbani Organizers</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/ramadan-ration-teams')} className="hover:text-sidqly-green-deep transition-colors">Ramadan Ration Teams</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/sadaqah-campaign-teams')} className="hover:text-sidqly-green-deep transition-colors">Sadaqah Campaign Teams</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/corporate-sponsors')} className="hover:text-sidqly-green-deep transition-colors">Corporate Sponsors</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/donors')} className="hover:text-sidqly-green-deep transition-colors">Donors</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/volunteers')} className="hover:text-sidqly-green-deep transition-colors">Volunteers</Link></li>
                      <li><Link to={getLocalizedPath('/use-cases/vendors')} className="hover:text-sidqly-green-deep transition-colors">Vendors</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">{t('nav.trust', 'Trust & Legal')}</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/trust-center')} className="hover:text-sidqly-green-deep transition-colors">Trust Center</Link></li>
                      <li><Link to={getLocalizedPath('/security')} className="hover:text-sidqly-green-deep transition-colors">Security</Link></li>
                      <li><Link to={getLocalizedPath('/privacy')} className="hover:text-sidqly-green-deep transition-colors">Privacy Policy</Link></li>
                      <li><Link to={getLocalizedPath('/terms')} className="hover:text-sidqly-green-deep transition-colors">Terms of Service</Link></li>
                      <li><Link to={getLocalizedPath('/accessibility')} className="hover:text-sidqly-green-deep transition-colors">Accessibility</Link></li>
                      <li><Link to={getLocalizedPath('/contact')} className="hover:text-sidqly-green-deep transition-colors">Contact</Link></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sidqly-green-deep mb-5">Global Service Areas</h4>
                   <ul className="space-y-3 text-sm text-slate-600 font-medium">
                      <li><Link to={getLocalizedPath('/locations')} className="hover:text-sidqly-green-deep transition-colors font-bold text-slate-900">View All 465+ Locations</Link></li>
                      <li className="pt-2 text-xs text-slate-400 font-bold uppercase tracking-wider">Top Regions & Hubs</li>
                      <li><Link to={getLocalizedPath('/locations/united-kingdom')} className="hover:text-sidqly-green-deep transition-colors">United Kingdom</Link></li>
                      <li><Link to={getLocalizedPath('/locations/united-states')} className="hover:text-sidqly-green-deep transition-colors">United States</Link></li>
                      <li><Link to={getLocalizedPath('/locations/canada')} className="hover:text-sidqly-green-deep transition-colors">Canada</Link></li>
                      <li><Link to={getLocalizedPath('/locations/saudi-arabia')} className="hover:text-sidqly-green-deep transition-colors">Saudi Arabia</Link></li>
                      <li><Link to={getLocalizedPath('/locations/united-arab-emirates')} className="hover:text-sidqly-green-deep transition-colors">United Arab Emirates</Link></li>
                      <li><Link to={getLocalizedPath('/locations/pakistan')} className="hover:text-sidqly-green-deep transition-colors">Pakistan</Link></li>
                      <li><Link to={getLocalizedPath('/locations/malaysia')} className="hover:text-sidqly-green-deep transition-colors">Malaysia</Link></li>
                      <li><Link to={getLocalizedPath('/locations/australia')} className="hover:text-sidqly-green-deep transition-colors">Australia</Link></li>
                   </ul>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-12 text-center bg-white rounded-3xl p-8 mb-12 shadow-xs">
           <h3 className="text-xl font-bold text-slate-900 mb-3">Want your organization to manage giving with clarity?</h3>
           <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">Schedule an interactive guided demo or apply for our hands-on pilot onboarding.</p>
           <div className="flex flex-wrap justify-center gap-3">
              <Link
                to={getLocalizedPath('/request-organization')}
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_bottom_request' })}
                className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-all text-sm shadow-xs"
              >
                 Request Your Organization
              </Link>
              <a
                href={brand.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('demo_submit', { cta_source: 'footer_bottom_demo' })}
                className="bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm"
              >
                 {t('common.bookDemo', 'Book Demo')}
              </a>
              <a
                href={brand.links.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'footer_bottom_inquiry' })}
                className="bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm"
              >
                 Fill Inquiry Form
              </a>
           </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-xs">
                <Shield size={15} className="text-sidqly-green-emerald" /> <span>Amanah-Safe Engine</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
             <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-xs">
                <Globe size={15} className="text-sidqly-green-emerald" /> <span>Global Standard</span>
             </div>
          </div>
          <p className="text-slate-500 text-xs font-semibold tracking-wide">
            © {currentYear} {brand.name} Operations. {t('common.allRightsReserved', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
