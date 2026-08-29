import React from 'react';
import SEO from '../../components/SEO';
import IslamicDateWidget from '../../components/islamic/IslamicDateWidget';
import IslamicCalendarPanel from '../../components/islamic/IslamicCalendarPanel';
import { useLanguage } from '../../i18n/LanguageContext';
import { brand } from '../../config/brand';

const IslamicCalendarPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('islamicTools.calendar.title')} | Sidqly`,
    "description": t('islamicTools.calendar.subtitle'),
    "url": `${brand.domain}/islamic-calendar`,
    "publisher": {
      "@type": "Organization",
      "name": "Sidqly",
      "logo": `${brand.domain}/brand/sidqly-mark.svg`
    }
  };

  return (
    <>
      <SEO
        title={`${t('islamicTools.calendar.title')} | Sidqly`}
        description={t('islamicTools.calendar.subtitle')}
        canonical="/islamic-calendar"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-12 sm:py-20" dir={dir}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4 sm:mb-6">
              {t('islamicTools.calendar.title')}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              {t('islamicTools.calendar.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <IslamicDateWidget />

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sidqly-navy mb-3">{t('islamicTools.calendar.operationalAlignmentTitle')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('islamicTools.calendar.operationalAlignmentSubtitle')}
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• {t('islamicTools.calendar.ramadanSpike')}</li>
                  <li>• {t('islamicTools.calendar.dhulHijjahSpike')}</li>
                  <li>• {t('islamicTools.calendar.muharramSpike')}</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <IslamicCalendarPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamicCalendarPage;
