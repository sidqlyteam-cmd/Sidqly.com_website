import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, LayoutList } from 'lucide-react';

const TrustLinkStrip: React.FC = () => {
  return (
    <div className="bg-white border-y border-gray-100 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex items-center gap-8 min-w-max text-sm font-medium">
          <li>
            <Link to="/trust-center" className="flex items-center gap-2 text-sidqly-navy hover:text-sidqly-green-emerald transition-colors">
              <ShieldCheck size={16} /> Trust Center
            </Link>
          </li>
          <li>
            <Link to="/security" className="flex items-center gap-2 text-gray-500 hover:text-sidqly-navy transition-colors">
              <Lock size={16} /> Security
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="flex items-center gap-2 text-gray-500 hover:text-sidqly-navy transition-colors">
              <FileText size={16} /> Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="flex items-center gap-2 text-gray-500 hover:text-sidqly-navy transition-colors">
              <FileText size={16} /> Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/legal" className="flex items-center gap-2 text-gray-500 hover:text-sidqly-navy transition-colors">
              <LayoutList size={16} /> Legal & Compliance
            </Link>
          </li>
          <li>
            <Link to="/accessibility" className="flex items-center gap-2 text-gray-500 hover:text-sidqly-navy transition-colors">
              <LayoutList size={16} /> Accessibility
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrustLinkStrip;
