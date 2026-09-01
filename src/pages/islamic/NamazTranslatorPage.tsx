import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';
import NamazTranslator from '../../components/islamic/NamazTranslator';

const NamazTranslatorPage: React.FC = () => {
  const { t, dir, language } = useLanguage();

  const title = `${t('islamicTools.namazTranslator.title')} | Sidqly`;
  const description = t('islamicTools.namazTranslator.subtitle');
  const canonicalUrl =
    language === 'en'
      ? `${brand.domain}/namaz-translator`
      : `${brand.domain}/${language}/namaz-translator`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: brand.domain,
    },
    inLanguage: language,
  };

  return (
    <div dir={dir} className="bg-sidqly-ivory min-h-screen">
      <SEO
        title={title}
        description={description}
        canonical={canonicalUrl}
        schema={schema}
      />
      <div className="py-6 sm:py-10">
        <NamazTranslator />
      </div>
    </div>
  );
};

export default NamazTranslatorPage;
