import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sidqly-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/brand/sidqly-logo.svg" alt="Sidqly Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold tracking-tight text-white">Sidqly</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Verified giving. Protected dignity. Clear impact. The premium operating platform for modern Islamic organizations.
            </p>
          </div>
          <div>
            <h4 className="text-sidqly-gold font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/modules" className="hover:text-white transition-colors">Modules</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sidqly-gold font-bold mb-4 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/solutions/mosques" className="hover:text-white transition-colors">Mosques</Link></li>
              <li><Link to="/solutions/islamic-charities" className="hover:text-white transition-colors">Charities</Link></li>
              <li><Link to="/solutions/zakat-teams" className="hover:text-white transition-colors">Zakat Teams</Link></li>
              <li><Link to="/solutions/qurbani-providers" className="hover:text-white transition-colors">Qurbani</Link></li>
              <li><Link to="/solutions/corporate-csr-zakat" className="hover:text-white transition-colors">Corporate CSR</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sidqly-gold font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/brand" className="hover:text-white transition-colors">Brand Assets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sidqly-gold font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/trust-and-dignity" className="hover:text-white transition-colors">Trust Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>{brand.links.email}</span>
            <span>Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
