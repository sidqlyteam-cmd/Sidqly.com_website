import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brand } from '../config/brand';
import { useLanguage } from '../i18n/LanguageContext';
import { getRawPath } from '../i18n/LanguageContext';
import type { Language, Direction } from '../i18n/config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  robots?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Verified giving. Protected dignity. Clear impact. The operating platform for modern Islamic organizations.",
  canonical,
  focusKeyword,
  secondaryKeywords,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  robots = "index,follow",
  ogType = "website",
  schema,
  noindex
}) => {
  let activeLang: Language = 'en';
  let activeDir: Direction = 'ltr';

  try {
    const langCtx = useLanguage();
    if (langCtx) {
      activeLang = langCtx.language;
      activeDir = langCtx.dir;
    }
  } catch (e) {
    // Fallback for isolated components outside LanguageProvider
  }

  const fullTitle = title
    ? (title.includes(`| ${brand.name}`) ? title : `${title} | ${brand.name}`)
    : `${brand.name} | Verified Giving & Protected Dignity`;

  let rawPath = canonical ? getRawPath(canonical) : '/';
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
    try {
      rawPath = new URL(rawPath).pathname;
    } catch (e) {
      rawPath = '/';
    }
  }
  const cleanCanonicalPath = rawPath === '/' ? '/' : (rawPath.startsWith('/') ? rawPath : `/${rawPath}`);
  const url = cleanCanonicalPath === '/' ? `${brand.domain}/` : `${brand.domain}${cleanCanonicalPath}`;

  const isIndexable = !noindex;

  return (
    <Helmet>
      <html lang={activeLang} dir={activeDir} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {isIndexable && <link rel="canonical" href={url} />}
      <meta name="robots" content={noindex ? "noindex,follow" : robots} />
      {focusKeyword && <meta name="keywords" content={[focusKeyword, ...(secondaryKeywords || [])].join(', ')} />}

      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${brand.domain}/brand/sidqly-og.svg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={`${brand.domain}/brand/sidqly-og.svg`} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
