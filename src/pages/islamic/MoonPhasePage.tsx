import React from 'react';
import SEO from '../../components/SEO';
import MoonPhaseCard from '../../components/islamic/MoonPhaseCard';
import { useLanguage } from '../../i18n/LanguageContext';
import { brand } from '../../config/brand';
import { Link } from 'react-router-dom';

const MoonPhasePage: React.FC = () => {
  const { t, dir, getLocalizedPath } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('islamicTools.moonPhase.title')} | Sidqly`,
    "description": t('islamicTools.moonPhase.subtitle'),
    "url": `${brand.domain}/moon-phase-islamic-calendar`
  };

  return (
    <>
      <SEO
        title={`${t('islamicTools.moonPhase.title')} | Sidqly`}
        description={t('islamicTools.moonPhase.subtitle')}
        canonical="/moon-phase-islamic-calendar"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-12 sm:py-20" dir={dir}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4 sm:mb-6">
              {t('islamicTools.moonPhase.title')}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t('islamicTools.moonPhase.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <MoonPhaseCard />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-sidqly-navy mb-4">{t('islamicTools.moonPhase.operationalReadinessTitle')}</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {t('islamicTools.moonPhase.operationalReadinessDesc')}
              </p>

              <h3 className="font-bold text-xs sm:text-sm text-sidqly-green-deep mb-3 uppercase tracking-wider">
                {t('islamicTools.moonPhase.preparationGuidelinesTitle')}
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-700 mb-8">
                <li className="flex gap-3">
                  <span className="font-bold text-gray-400">01</span>
                  <span><strong>{t('islamicTools.moonPhase.phases.newMoon')}:</strong> {t('islamicTools.moonPhase.prepStep1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-400">02</span>
                  <span><strong>{t('islamicTools.moonPhase.phases.fullMoon')}:</strong> {t('islamicTools.moonPhase.prepStep2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-400">03</span>
                  <span><strong>{t('islamicTools.moonPhase.phases.waningCrescent')}:</strong> {t('islamicTools.moonPhase.prepStep3')}</span>
                </li>
              </ul>

              <Link to={getLocalizedPath('/islamic-calendar')} className="text-sidqly-green-deep font-bold hover:underline text-sm sm:text-base">
                {t('islamicTools.calendar.title')} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoonPhasePage;
