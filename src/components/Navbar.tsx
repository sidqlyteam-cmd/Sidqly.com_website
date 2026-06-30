import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './search/SearchModal';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { brand } from '../config/brand';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

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
    { name: "Product", href: "/how-it-works", children: [
        { name: 'Features', href: '/features' },
        { name: 'Modules', href: '/modules' },
        { name: 'Compare', href: '/compare' },
        { name: 'Pricing', href: '/pricing' }
    ] },
    { name: 'Use Cases', href: '/use-cases' },
    {
      name: 'Islamic Tools',
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
      name: 'Resources',
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
      name: 'Newsroom',
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
    { name: 'Pricing', href: '/pricing' },
    { name: 'Trust', href: '/trust-center' },
    { name: 'Demo', href: brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz', external: true }
  ] as Array<{ name: string; href: string; external?: boolean; children?: Array<{ name: string; href: string; }> }>;


  return (
    <>
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img src="/brand/sidqly-mark.svg" alt="Sidqly" className="h-10 w-10" />
              <span className="text-sidqly-navy text-2xl font-extrabold tracking-tighter">Sidqly</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-sidqly-green-deep p-2 hidden lg:block"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 text-gray-500 hover:text-sidqly-green-deep font-bold text-sm transition-colors py-8"
                  >
                    {item.name} <ChevronDown size={14} className="opacity-50" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-bold transition-colors py-8 ${location.pathname === item.href ? 'text-sidqly-green-deep border-b-2 border-sidqly-green-emerald' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-b-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-0 group-hover:translate-y-0">
                    <div className="py-3 px-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
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
            <div className="flex items-center gap-4 pl-4 border-l border-gray-100">
               <a
                 href={brand.calendlyUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-sidqly-green-deep text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all"
               >
                 Book Demo
               </a>
            </div>
          </div>

          {/* Mobile menu button & search */}
          <div className="lg:hidden flex items-center gap-2">
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
                     to={item.href}
                     className="text-lg font-extrabold text-sidqly-navy"
                     onClick={() => setIsOpen(false)}
                   >
                     {item.name}
                   </Link>
                </div>
                {item.children && (
                  <div className="grid grid-cols-2 gap-2 pb-4 px-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
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
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-sidqly-green-deep text-white py-4 rounded-xl font-bold"
              >
                Book Demo
              </a>
              <a
                href={brand.inquiryFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-sidqly-ivory text-sidqly-navy py-4 rounded-xl font-bold"
              >
                Fill Inquiry Form
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
