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
      {/* Desktop Sticky CTA (1280px+ viewports, floating above AI footer bar) */}
      <div className="hidden xl:block fixed bottom-14 ltr:right-6 rtl:left-6 z-30">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 p-4 w-64 transform transition-all hover:-translate-y-1 relative">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2.5 ltr:right-2.5 rtl:left-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>
          <h4 className="font-bold text-sidqly-navy dark:text-white mb-2.5 text-sm">{t('common.readyToStart', 'Ready to start?')}</h4>
          <div className="space-y-2">
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-sidqly-green-deep text-white px-3 py-2 rounded-xl font-bold text-xs hover:bg-sidqly-green-emerald transition-all"
            >
              <Calendar size={16} /> Book Demo
            </a>
            <a
              href={brand.inquiryFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-sidqly-ivory text-sidqly-navy border border-gray-200 px-3 py-2 rounded-xl font-bold text-xs hover:bg-white transition-all"
            >
              <FileText size={16} /> Fill Inquiry Form
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center justify-center gap-2 w-full text-sidqly-green-emerald font-bold text-xs py-1"
            >
              <Mail size={14} /> Email team
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyLeadCTA;
