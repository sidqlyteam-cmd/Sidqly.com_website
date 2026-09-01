import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';
import { SalahTracker } from '../../components/islamic/SalahTracker';

const SalahTrackerPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('islamicTools.salahTracker.title')} | Sidqly`,
    description: t('islamicTools.salahTracker.subtitle'),
    url: `${brand.domain}/salah-tracker`,
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.salahTracker.title')} | Sidqly`}
        description={t('islamicTools.salahTracker.subtitle')}
        canonical="https://www.sidqly.com/salah-tracker"
        schema={schema}
      />
      <SalahTracker />
    </div>
  );
};

export default SalahTrackerPage;
