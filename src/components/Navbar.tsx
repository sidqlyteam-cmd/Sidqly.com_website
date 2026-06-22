import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './search/SearchModal';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigation = [
    { name: 'Features', href: '/features' },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'Mosques', href: '/solutions/mosques' },
        { name: 'Islamic Charities', href: '/solutions/islamic-charities' },
        { name: 'Qurbani Providers', href: '/solutions/qurbani-providers' },
        { name: 'Ramadan Teams', href: '/solutions/ramadan-food-drives' },
        { name: 'Zakat Teams', href: '/solutions/zakat-teams' },
        { name: 'Corporate CSR', href: '/solutions/corporate-csr-zakat' },
        { name: 'View All Solutions', href: '/solutions' },
      ]
    },
    {
      name: 'Modules',
      href: '/modules',
      children: [
        { name: 'Manual Review', href: '/modules/manual-payment-review' },
        { name: 'Proof Trust', href: '/modules/proof-trust-engine' },
        { name: 'Zakat Separation', href: '/modules/zakat-fund-separation' },
        { name: 'Qurbani Lifecycle', href: '/modules/qurbani-lifecycle' },
        { name: 'Ramadan Meals', href: '/modules/ramadan-meals-rations' },
        { name: 'View All Modules', href: '/modules' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    {
      name: 'Resources',
      href: '/resources',
      children: [
        { name: 'Blog', href: '/blog' },
        { name: 'Guides', href: '/resources' },
        { name: 'Use Cases', href: '/resources' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Glossary', href: '/resources' },
        { name: 'Comparison', href: '/compare' },
        { name: 'Implementation', href: '/implementation' },
        { name: 'Trust Center', href: '/trust-center' },
      ]
    },
    { name: 'Trust', href: '/trust-center' },
  ];

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

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
