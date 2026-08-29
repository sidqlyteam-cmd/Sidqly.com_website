import React from 'react';
import SEO from '../../components/SEO';
import WeatherPlanningWidget from '../../components/islamic/WeatherPlanningWidget';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';

const WeatherPlanningPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${t('islamicTools.weather.title')} | Sidqly`,
    "description": t('islamicTools.weather.subtitle'),
    "url": `${brand.domain}/weather-charity-distribution`,
    "applicationCategory": "BusinessApplication"
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.weather.title')} | Sidqly`}
        description={t('islamicTools.weather.subtitle')}
        canonical="https://www.sidqly.com/weather-charity-distribution"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              {t('islamicTools.weather.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('islamicTools.weather.subtitle')}
            </p>
          </div>

          <div className="mb-12">
             <WeatherPlanningWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPlanningPage;
