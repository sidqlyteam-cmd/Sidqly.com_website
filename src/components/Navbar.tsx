import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './search/SearchModal';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { brand } from '../config/brand';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { t, getLocalizedPath } = useLanguage();

  // Enforce Sovereign White / Light Theme globally
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    const handleOpenSearch = () => setIsSearchOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-search', handleOpenSearch);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-search', handleOpenSearch);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const primaryNavigation = [
    {
      name: t('nav.product', 'Product'),
      href: "/how-it-works",
      children: [
        { name: t('nav.whatIsSidqly', 'What is Sidqly?'), href: '/what-is-sidqly' },
        { name: t('nav.features', 'Features'), href: '/features' },
        { name: t('nav.modules', 'Modules'), href: '/modules' },
        { name: t('nav.compare', 'Compare'), href: '/compare' },
        { name: t('nav.pricing', 'Pricing'), href: '/pricing' },
        { name: t('nav.guidedPilot', 'Guided Pilot'), href: '/guided-pilot' },
        { name: t('nav.dataMigration', 'Data Migration'), href: '/data-migration' },
        { name: t('nav.contactSales', 'Contact Sales'), href: '/contact-sales' }
      ]
    },
    { name: t('nav.useCases', 'Use Cases'), href: '/use-cases' },
    {
      name: t('nav.islamicTools', 'Islamic Tools'),
      href: '/islamic-utilities',
      children: [
        { name: 'Islamic Utilities', href: '/islamic-utilities' },
        { name: 'Islamic Calendar', href: '/islamic-calendar' },
        { name: 'Namaz Timings', href: '/namaz-timings' },
        { name: 'Qibla Direction', href: '/qibla-direction' },
        { name: 'Zakat Calculator', href: '/zakat-calculator' },
        { name: 'Moon Phase', href: '/moon-phase-islamic-calendar' },
        { name: 'Weather-Aware Distribution', href: '/weather-charity-distribution' },
        { name: 'Hajj Countdown', href: '/hajj-countdown' },
        { name: 'Ramadan Planner', href: '/ramadan-planner' },
        { name: 'Eid/Qurbani Planner', href: '/eid-qurbani-planner' },
        { name: 'Sadqa/Zakat Planner', href: '/sadqa-zakat-planner' },
        { name: 'Islamic Glossary', href: '/islamic-glossary' }
      ]
    },
    {
      name: t('nav.resources', 'Resources'),
      href: '/resources',
      children: [
        { name: 'Resources Hub', href: '/resources' },
        { name: 'Seasonal Giving Guides', href: '/resources/eid-giving' },
        { name: 'Blog & Guides', href: '/blog' },
        { name: 'Glossary', href: '/islamic-glossary' },
        { name: 'Sitemap', href: '/sitemap' },
        { name: 'Request Organization', href: '/request-organization' }
      ]
    }
  ];

  const secondaryNavigation = [
    {
      name: t('nav.newsroom', 'Newsroom'),
      href: '/newsroom',
      children: [
        { name: 'Newsroom Overview', href: '/newsroom' },
        { name: 'Press Releases', href: '/press-releases' },
        { name: 'Media Kit', href: '/media-kit' }
      ]
    },
    { name: t('nav.locations', 'Global Hubs'), href: '/locations' },
    { name: t('nav.pricing', 'Pricing'), href: '/pricing' },
    { name: t('nav.trust', 'Trust'), href: '/trust-center' }
  ];

  const fullNavigation = [...primaryNavigation, ...secondaryNavigation];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-2">
            {/* Logo */}
            <div className="flex items-center shrink-0 ltr:mr-2 xl:ltr:mr-4 rtl:ml-2 xl:rtl:ml-4">
              <Link to={getLocalizedPath('/')} className="shrink-0 flex items-center gap-2 sm:gap-3 group">
                <img src="/brand/sidqly-mark.svg" alt="Sidqly" className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 group-hover:scale-105 transition-transform" />
                <span className="text-sidqly-navy text-xl sm:text-2xl font-extrabold tracking-tight truncate">Sidqly</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-3 2xl:gap-x-5 min-w-0">
              {/* Primary Nav Links */}
              {primaryNavigation.map((item) => (
                <div key={item.name} className="relative group shrink-0">
                  {item.children ? (
                    <button
                      className="flex items-center gap-1 text-slate-700 hover:text-sidqly-green-deep font-bold text-xs xl:text-[13px] 2xl:text-sm transition-colors py-7 whitespace-nowrap cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform shrink-0" />
                    </button>
                  ) : (
                    <Link
                      to={getLocalizedPath(item.href)}
                      className={`text-xs xl:text-[13px] 2xl:text-sm font-bold transition-colors py-7 inline-block whitespace-nowrap ${location.pathname === getLocalizedPath(item.href) ? 'text-sidqly-green-deep border-b-2 border-sidqly-green-emerald' : 'text-slate-700 hover:text-sidqly-green-deep'}`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.children && (
                    <div className="absolute ltr:left-0 rtl:right-0 mt-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform ltr:origin-top-left rtl:origin-top-right translate-y-1 group-hover:translate-y-0 z-50 p-2">
                      <div className="space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={getLocalizedPath(child.href)}
                            className="block px-3.5 py-2 text-xs sm:text-sm text-slate-700 hover:bg-emerald-50/80 hover:text-sidqly-green-deep rounded-xl font-medium transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Secondary Navigation */}
              {secondaryNavigation.map((item) => (
                <div key={item.name} className="hidden 2xl:block relative group shrink-0">
                  {item.children ? (
                    <button
                      className="flex items-center gap-1 text-slate-700 hover:text-sidqly-green-deep font-bold text-sm transition-colors py-7 whitespace-nowrap cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform shrink-0" />
                    </button>
                  ) : (
                    <Link
                      to={getLocalizedPath(item.href)}
                      className={`text-sm font-bold transition-colors py-7 inline-block whitespace-nowrap ${location.pathname === getLocalizedPath(item.href) ? 'text-sidqly-green-deep border-b-2 border-sidqly-green-emerald' : 'text-slate-700 hover:text-sidqly-green-deep'}`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.children && (
                    <div className="absolute ltr:left-0 rtl:right-0 mt-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform ltr:origin-top-left rtl:origin-top-right translate-y-1 group-hover:translate-y-0 z-50 p-2">
                      <div className="space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={getLocalizedPath(child.href)}
                            className="block px-3.5 py-2 text-xs sm:text-sm text-slate-700 hover:bg-emerald-50/80 hover:text-sidqly-green-deep rounded-xl font-medium transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* "More" Dropdown Menu for LG/XL screens */}
              <div className="2xl:hidden relative group shrink-0">
                <button
                  className="flex items-center gap-1 text-slate-700 hover:text-sidqly-green-deep font-bold text-xs xl:text-[13px] transition-colors py-7 whitespace-nowrap cursor-pointer"
                >
                  <span>{t('nav.more', 'More')}</span>
                  <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform shrink-0" />
                </button>

                <div className="absolute ltr:left-0 rtl:right-0 mt-0 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform ltr:origin-top-left rtl:origin-top-right translate-y-1 group-hover:translate-y-0 z-50 p-2">
                  <div className="space-y-0.5">
                    {secondaryNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={getLocalizedPath(item.href)}
                        className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-emerald-50/80 hover:text-sidqly-green-deep rounded-xl font-bold transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search & Language */}
              <div className="flex items-center gap-1.5 shrink-0 ltr:ml-2 rtl:mr-2">
                <LanguageSwitcher />

                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-slate-600 hover:text-sidqly-green-deep p-2 hover:bg-slate-100 rounded-xl transition-all shrink-0 cursor-pointer"
                  aria-label="Search"
                  title="Search (⌘K)"
                >
                  <Search size={18} />
                </button>
              </div>

              {/* Desktop CTAs */}
              <div className="flex items-center gap-2 ltr:pl-3 rtl:pr-3 ltr:border-l rtl:border-r border-slate-200 shrink-0">
                <Link
                  to={getLocalizedPath('/guided-pilot')}
                  className="hidden xl:inline-block bg-sidqly-green-deep text-white px-4 py-2 rounded-xl font-bold text-xs 2xl:text-sm hover:bg-sidqly-green-emerald hover:shadow-md transition-all whitespace-nowrap shrink-0"
                >
                  {t('common.applyGuidedPilot', 'Guided Pilot')}
                </Link>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('demo_submit', { cta_source: 'navbar_desktop_cta' })}
                  className="bg-white border border-slate-200 text-sidqly-navy hover:bg-slate-50 px-3.5 2xl:px-4 py-2 rounded-xl font-bold text-xs 2xl:text-sm hover:shadow-xs transition-all whitespace-nowrap shrink-0"
                >
                  {t('common.bookDemo', 'Book a Demo')}
                </a>
              </div>
            </div>

            {/* Mobile menu and search buttons */}
            <div className="lg:hidden flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-slate-700 hover:text-sidqly-green-deep p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-sidqly-green-deep p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 overflow-y-auto max-h-[calc(100vh-80px)] shadow-2xl">
            <div className="px-4 pt-4 pb-8 space-y-3">
              {fullNavigation.map((item) => (
                <div key={item.name} className="border-b border-slate-100 last:border-0 pb-3">
                  <div className="flex items-center justify-between py-2 px-2">
                    <Link
                      to={getLocalizedPath(item.href)}
                      className="text-base font-extrabold text-sidqly-navy hover:text-sidqly-green-emerald transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                  {item.children && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pb-2 px-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={getLocalizedPath(child.href)}
                          className="block px-3 py-2 bg-slate-50 hover:bg-emerald-50 hover:text-sidqly-green-deep rounded-xl text-xs font-semibold text-slate-700 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 px-2 flex flex-col gap-3">
                {/* Language Switcher in Mobile Drawer */}
                <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">Language</span>
                  <LanguageSwitcher />
                </div>

                <Link
                  to={getLocalizedPath('/guided-pilot')}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-sidqly-green-deep text-white py-3.5 rounded-xl font-bold shadow-md hover:bg-sidqly-green-emerald transition-all"
                >
                  {t('common.applyGuidedPilot', 'Apply for Guided Pilot')}
                </Link>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent('demo_submit', { cta_source: 'navbar_mobile_menu_demo' });
                    setIsOpen(false);
                  }}
                  className="block w-full text-center bg-white border border-slate-200 text-sidqly-navy py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  {t('common.bookDemo', 'Book a Demo')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
