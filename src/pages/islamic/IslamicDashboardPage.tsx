import React from 'react';
import SEO from '../../components/SEO';
import IslamicDailyDashboard from '../../components/islamic/IslamicDailyDashboard';
import { useLanguage } from '../../i18n/LanguageContext';
import { brand } from '../../config/brand';

const IslamicDashboardPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('islamicTools.dashboard.title', 'Islamic Daily Dashboard')} | Sidqly`,
    "description": t('islamicTools.dashboard.subtitle', 'Your single-page daily summary for prayer times, Hijri date, Qibla, moon phase, active season, and personal progress.'),
    "url": `${brand.domain}/islamic-dashboard`,
    "publisher": {
      "@type": "Organization",
      "name": "Sidqly",
      "logo": `${brand.domain}/brand/sidqly-mark.svg`
    }
  };

  return (
    <>
      <SEO
        title={`${t('islamicTools.dashboard.title', 'Islamic Daily Dashboard')} | Sidqly`}
        description={t('islamicTools.dashboard.subtitle', 'Your single-page daily summary for prayer times, Hijri date, Qibla, moon phase, active season, and personal progress.')}
        canonical="/islamic-dashboard"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-10 sm:py-16" dir={dir}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IslamicDailyDashboard />
        </div>
      </div>
    </>
  );
};

export default IslamicDashboardPage;
