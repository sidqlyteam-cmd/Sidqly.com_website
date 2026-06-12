import React, { useState, useEffect } from 'react';
import { Calendar, FileText, Mail, X } from 'lucide-react';
import { brand } from '../config/brand';

const StickyLeadCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} md:bottom-6 md:right-6 md:left-auto md:w-96`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-sidqly-green-soft overflow-hidden relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <X size={16} />
        </button>

        <div className="p-5">
          <p className="text-sidqly-green-deep font-semibold mb-1">Need help choosing the right Sidqly setup?</p>
          <p className="text-sm text-gray-600 mb-4">Book a demo or tell us about your organization.</p>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-3">
            <a
              href={brand.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 bg-sidqly-green-emerald text-white p-2 md:px-4 md:py-2 rounded-xl hover:bg-sidqly-green-deep transition-colors"
            >
              <Calendar size={18} />
              <span className="text-[10px] md:text-sm font-medium uppercase md:tracking-widest md:normal-case md:tracking-normal">Book Demo</span>
              <span className="hidden md:inline text-sm font-medium">Book Demo</span>
            </a>

            <a
              href={brand.links.inquiryForm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 bg-white text-sidqly-green-deep border border-sidqly-green-emerald p-2 md:px-4 md:py-2 rounded-xl hover:bg-sidqly-green-soft transition-colors"
            >
              <FileText size={18} />
              <span className="text-[10px] md:text-sm font-medium uppercase md:tracking-widest md:normal-case md:tracking-normal">Fill Form</span>
              <span className="hidden md:inline text-sm font-medium">Fill Inquiry Form</span>
            </a>

            <a
              href={brand.links.emailInquiry}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 bg-sidqly-ivory text-sidqly-navy p-2 md:px-4 md:py-2 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Mail size={18} />
              <span className="text-[10px] md:text-sm font-medium uppercase md:tracking-widest md:normal-case md:tracking-normal">Email Us</span>
              <span className="hidden md:inline text-sm font-medium">Email Sidqly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyLeadCTA;
