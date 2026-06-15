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
    "@type": "OfferCatalog",
    "name": "Sidqly Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Starter Launch Offer",
        "price": "49.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Growth Launch Offer",
        "price": "129.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Premium Launch Offer",
        "price": "249.00",
        "priceCurrency": "USD"
      }
    ]
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

export const generateArticleSchema = (article: { title: string; description: string; date: string; modifiedDate?: string; author: string; url: string; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.date,
  "dateModified": article.modifiedDate || article.date,
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

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${brand.domain}${item.item}`
  }))
});

export const generateCollectionSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": title,
  "description": description,
  "url": `${brand.domain}${url}`
});

export const generateItemListSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `${brand.domain}${item.url}`,
    "name": item.name
  }))
});
