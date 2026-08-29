import React from 'react';
import SEO from '../../components/SEO';
import SadqaZakatPlanner from '../../components/islamic/SadqaZakatPlanner';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';

const SadqaZakatPlannerPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('islamicTools.sadqaZakatPlanner.title')} | Sidqly`,
    "description": t('islamicTools.sadqaZakatPlanner.subtitle'),
    "url": `${brand.domain}/sadqa-zakat-planner`
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.sadqaZakatPlanner.title')} | Sidqly`}
        description={t('islamicTools.sadqaZakatPlanner.subtitle')}
        canonical="/sadqa-zakat-planner"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              {t('islamicTools.sadqaZakatPlanner.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('islamicTools.sadqaZakatPlanner.subtitle')}
            </p>
          </div>

          <div className="mb-12">
             <SadqaZakatPlanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadqaZakatPlannerPage;
