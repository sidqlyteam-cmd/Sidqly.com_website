import React, { useState } from 'react';
import { brand } from '../config/brand';
import { Calendar, FileText, Mail, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const StickyLeadCTA: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const { t } = useLanguage();

  if (isDismissed) return null;

  return (
    <>
      {/* Desktop Sticky CTA */}
      <div className="hidden xl:block fixed bottom-16 ltr:right-6 rtl:left-6 z-40">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 p-5 w-72 transform transition-all hover:-translate-y-1 relative">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 ltr:right-3 rtl:left-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          <h4 className="font-bold text-sidqly-navy dark:text-white mb-3 text-base">{t('common.readyToStart', 'Ready to start?')}</h4>
          <div className="space-y-2.5">
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-sidqly-green-deep text-white px-4 py-3 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-all"
            >
              <Calendar size={20} /> Book Demo
            </a>
            <a
              href={brand.inquiryFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-sidqly-ivory text-sidqly-navy border border-gray-200 px-4 py-3 rounded-xl font-bold hover:bg-white transition-all"
            >
              <FileText size={20} /> Fill Inquiry Form
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 w-full justify-center text-sidqly-green-emerald font-bold text-sm py-2"
            >
              <Mail size={16} /> Email the team
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-4 flex gap-3">
        <a
          href={brand.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-sidqly-green-deep text-white py-3 rounded-xl font-bold text-center text-sm"
        >
          Book Demo
        </a>
        <a
          href={brand.inquiryFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-sidqly-ivory text-sidqly-navy border border-gray-200 py-3 rounded-xl font-bold text-center text-sm"
        >
          Inquiry Form
        </a>
      </div>
    </>
  );
};

export default StickyLeadCTA;
