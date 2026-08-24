import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './search/SearchModal';
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react';
import { brand } from '../config/brand';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { t, getLocalizedPath } = useLanguage();

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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

  const navigation = [
    { name: t('nav.product', 'Product'), href: "/how-it-works", children: [
        { name: t('nav.whatIsSidqly', 'What is Sidqly?'), href: '/what-is-sidqly' },
        { name: t('nav.features', 'Features'), href: '/features' },
        { name: t('nav.modules', 'Modules'), href: '/modules' },
        { name: t('nav.compare', 'Compare'), href: '/compare' },
        { name: t('nav.pricing', 'Pricing'), href: '/pricing' },
        { name: t('nav.guidedPilot', 'Guided Pilot'), href: '/guided-pilot' },
        { name: t('nav.dataMigration', 'Data Migration'), href: '/data-migration' },
        { name: t('nav.contactSales', 'Contact Sales'), href: '/contact-sales' }
    ] },
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
        { name: 'Blog', href: '/blog' },
        { name: 'Glossary', href: '/islamic-glossary' },
        { name: 'Sitemap', href: '/sitemap' },
        { name: 'Request Organization', href: '/request-organization' }
      ]
    },
    {
      name: t('nav.newsroom', 'Newsroom'),
      href: '/newsroom',
      children: [
        { name: 'Newsroom', href: '/newsroom' },
        { name: 'Press Releases', href: '/press-releases' },
        { name: 'Media Kit', href: '/media-kit' },
        { name: 'Sidqly Updates', href: '/newsroom' },
        { name: 'Makkah and Madinah Updates', href: '/newsroom' },
        { name: 'Hajj and Umrah Operations', href: '/newsroom' },
        { name: 'Ramadan and Qurbani Planning', href: '/newsroom' }
      ]
    },
    { name: t('nav.locations', 'Global Hubs'), href: '/locations' },
    { name: t('nav.pricing', 'Pricing'), href: '/pricing' },
    { name: t('nav.trust', 'Trust'), href: '/trust-center' }
  ] as Array<{ name: string; href: string; external?: boolean; children?: Array<{ name: string; href: string; }> }>;

  return (
    <>
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2 xl:gap-4">
          <div className="flex items-center shrink-0 ltr:mr-2 rtl:ml-2">
            <Link to={getLocalizedPath('/')} className="shrink-0 flex items-center gap-2 sm:gap-3">
              <img src="/brand/sidqly-mark.svg" alt="Sidqly" className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
              <span className="text-sidqly-navy text-xl sm:text-2xl font-extrabold tracking-tighter truncate">Sidqly</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-2.5 2xl:gap-x-5 min-w-0">
            {navigation.map((item) => (
              <div key={item.name} className="relative group shrink-0">
                {item.children ? (
                  <button
                    className="flex items-center gap-0.5 text-gray-500 hover:text-sidqly-green-deep font-bold text-[11px] xl:text-[13px] 2xl:text-sm transition-colors py-8 whitespace-nowrap"
                  >
                    {item.name} <ChevronDown size={12} className="opacity-50 shrink-0" />
                  </button>
                ) : (
                  <Link
                    to={getLocalizedPath(item.href)}
                    className={`text-[11px] xl:text-[13px] 2xl:text-sm font-bold transition-colors py-8 inline-block whitespace-nowrap ${location.pathname === getLocalizedPath(item.href) ? 'text-sidqly-green-deep border-b-2 border-sidqly-green-emerald' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute ltr:left-0 rtl:right-0 mt-0 w-64 bg-white border border-gray-100 rounded-b-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform ltr:origin-top-left rtl:origin-top-right translate-y-0 group-hover:translate-y-0 z-50">
                    <div className="py-3 px-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={getLocalizedPath(child.href)}
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-sidqly-ivory hover:text-sidqly-green-deep rounded-xl font-medium transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher, Search & Theme Toggle */}
            <div className="flex items-center gap-1 xl:gap-1.5 shrink-0">
              <LanguageSwitcher />

              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-sidqly-green-deep dark:text-gray-300 dark:hover:text-sidqly-green-soft p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all shrink-0"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <button
                onClick={toggleTheme}
                className="text-gray-600 hover:text-sidqly-green-deep dark:text-gray-300 dark:hover:text-sidqly-green-soft p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all flex items-center justify-center shrink-0"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-x-1 xl:gap-2 ltr:pl-1 xl:ltr:pl-2 ltr:border-l rtl:pr-1 xl:rtl:pr-2 rtl:border-r border-gray-100 dark:border-white/10 shrink-0">
               <Link
                 to={getLocalizedPath('/guided-pilot')}
                 className="bg-sidqly-green-deep text-white px-2 xl:px-3 2xl:px-5 py-1.5 xl:py-2 rounded-xl font-bold text-[11px] xl:text-[12px] 2xl:text-sm hover:shadow-lg transition-all whitespace-nowrap shrink-0"
               >
                 {t('common.applyGuidedPilot', 'Guided Pilot')}
               </Link>
               <a
                 href={brand.calendlyUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={() => trackEvent('demo_submit', { cta_source: 'navbar_desktop_cta' })}
                 className="bg-white border border-gray-200 text-sidqly-navy px-2 xl:px-3 2xl:px-5 py-1.5 xl:py-2 rounded-xl font-bold text-[11px] xl:text-[12px] 2xl:text-sm hover:shadow-lg transition-all whitespace-nowrap shrink-0"
               >
                 {t('common.bookDemo', 'Book a Demo')}
               </a>
            </div>
          </div>

          {/* Mobile menu button & search */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-sidqly-green-deep p-2"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-sidqly-green-deep p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-50 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-50 last:border-0 pb-2">
                <div className="flex items-center justify-between py-4 px-3">
                   <Link
                     to={getLocalizedPath(item.href)}
                     className="text-lg font-extrabold text-sidqly-navy"
                     onClick={() => setIsOpen(false)}
                   >
                     {item.name}
                   </Link>
                </div>
                {item.children && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4 px-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={getLocalizedPath(child.href)}
                        className="block px-3 py-2 bg-sidqly-ivory rounded-lg text-xs font-bold text-gray-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 px-3 flex flex-col gap-3">
              {/* Language Selector */}
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-white/5 rounded-xl mb-1 border border-gray-100/50 dark:border-white/5">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-300">Language</span>
                <LanguageSwitcher />
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-white/5 rounded-xl mb-1 border border-gray-100/50 dark:border-white/5">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-300">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-bold text-xs hover:shadow-sm border border-gray-200 dark:border-neutral-700 transition-all flex items-center gap-2"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon size={16} className="text-sidqly-navy" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun size={16} className="text-sidqly-green-deep dark:text-sidqly-green-soft" />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>
              </div>

              <Link
                to={getLocalizedPath('/guided-pilot')}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-sidqly-green-deep text-white py-4 rounded-xl font-bold"
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
                className="block w-full text-center bg-white border border-gray-200 text-sidqly-navy py-4 rounded-xl font-bold"
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
