import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';
import { QuranReader } from '../../components/islamic/QuranReader';

const QuranReaderPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('islamicTools.quranReader.title')} | Sidqly`,
    description: t('islamicTools.quranReader.subtitle'),
    url: `${brand.domain}/quran-reader`,
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.quranReader.title')} | Sidqly`}
        description={t('islamicTools.quranReader.subtitle')}
        canonical="https://www.sidqly.com/quran-reader"
        schema={schema}
      />
      <QuranReader />
    </div>
  );
};

export default QuranReaderPage;
