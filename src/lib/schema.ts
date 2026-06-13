import { brand } from '../config/brand';

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": brand.name,
  "url": brand.domain,
  "logo": `${brand.domain}/brand/sidqly-logo.svg`,
  "contactPoint": {
    "@type": "ContactPoint",
    "email": brand.email,
    "contactType": "customer service"
  }
});

export const generateSoftwareAppSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": brand.name,
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "19000.00",
    "priceCurrency": "PKR"
  }
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateArticleSchema = (article: { title: string; description: string; date: string; author: string; url: string; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.date,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": brand.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${brand.domain}/brand/sidqly-logo.svg`
    }
  },
  "image": article.image || `${brand.domain}/brand/sidqly-og.svg`,
  "url": `${brand.domain}${article.url}`
});
