import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';
import { DuasAzkar } from '../../components/islamic/DuasAzkar';

const DuasAzkarPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('islamicTools.duasAzkar.title')} | Sidqly`,
    description: t('islamicTools.duasAzkar.subtitle'),
    url: `${brand.domain}/duas-azkar`,
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.duasAzkar.title')} | Sidqly`}
        description={t('islamicTools.duasAzkar.subtitle')}
        canonical="https://www.sidqly.com/duas-azkar"
        schema={schema}
      />
      <DuasAzkar />
    </div>
  );
};

export default DuasAzkarPage;
