import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brand } from '../config/brand';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src="/brand/sidqly-logo.svg" alt="Sidqly Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-sidqly-green-deep tracking-tight">{brand.name}</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Features</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Solutions</Link>
              <Link to="/modules" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Modules</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Pricing</Link>
              <Link to="/faqs" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">FAQs</Link>
              <Link to="/demo" className="text-gray-600 hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Demo</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="text-sidqly-green-deep hover:text-sidqly-green-emerald px-3 py-2 text-sm font-medium">Book Demo</a>
            <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-sidqly-green-emerald transition-all shadow-sm">Get Started</a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Features</Link>
            <Link to="/solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Solutions</Link>
            <Link to="/modules" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Modules</Link>
            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Pricing</Link>
            <Link to="/faqs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">FAQs</Link>
            <div className="pt-4 pb-3 border-t border-gray-100 mt-2">
              <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-base font-medium text-sidqly-green-deep hover:bg-gray-50">Book Demo</a>
              <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-base font-medium text-sidqly-green-emerald hover:bg-gray-50">Fill Inquiry Form</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
