import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brand } from '../config/brand';

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
  schema
}) => {
  const fullTitle = title ? `${title} | ${brand.name}` : `${brand.name} | Verified Giving & Protected Dignity`;
  const url = canonical ? `${brand.domain}${canonical}` : brand.domain;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
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
