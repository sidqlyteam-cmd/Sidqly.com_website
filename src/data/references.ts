import type { ArticleReference } from './blogs';

export const officialReferences: Record<string, ArticleReference> = {
  googleSeoStarter: {
    title: "SEO Starter Guide: The Basics",
    sourceName: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    accessedDate: "2026-06-12"
  },
  googleHelpfulContent: {
    title: "Creating helpful, reliable, people-first content",
    sourceName: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    accessedDate: "2026-06-12"
  },
  schemaOrg: {
    title: "Schema.org Documentation",
    sourceName: "Schema.org",
    url: "https://schema.org/docs/gs.html",
    accessedDate: "2026-06-12"
  },
  bingWebmaster: {
    title: "Bing Webmaster Guidelines",
    sourceName: "Bing Webmaster Tools",
    url: "https://www.bing.com/webmasters/help/webmaster-guidelines-30f72230",
    accessedDate: "2026-06-12"
  }
};
