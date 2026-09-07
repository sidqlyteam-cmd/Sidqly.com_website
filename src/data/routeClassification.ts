import { blogPosts } from './blogs';
import { legalPolicies } from './legalPolicies';
import { knowledgeHub } from './knowledgeHub';
import { comparisons } from './comparisons';
import { resources } from './resources';
import { useCases } from './useCases';
import { modules, solutions } from './solutions_modules';
import { getIndexableLocations } from '../../scripts/build-locations-sitemap.mjs';

export interface RouteClassification {
  path: string;
  status: 200 | 301 | 308 | 404;
  indexable: boolean;
  canonical: string | null;
  type: "public" | "noindex" | "private" | "redirect" | "404";
}

const domain = 'https://www.sidqly.com';

const staticPublicPaths: string[] = [
  '/',
  '/features',
  '/product-tour',
  '/how-it-works',
  '/pricing',
  '/book-demo',
  '/about',
  '/contact',
  '/legal',
  '/help',
  '/brand',
  '/privacy',
  '/terms',
  '/security',
  '/trust-center',
  '/accessibility',
  '/sitemap',
  '/compare',
  '/solutions',
  '/modules',
  '/use-cases',
  '/regions',
  '/locations',
  '/newsroom',
  '/press-releases',
  '/media-kit',
  '/blog',
  '/islamic-utilities',
  '/namaz-timings',
  '/namaz-translator',
  '/zakat-calculator',
  '/islamic-calendar',
  '/hijri-gregorian-converter',
  '/moon-phase-islamic-calendar',
  '/qibla-direction',
  '/weather-charity-distribution',
  '/hajj-countdown',
  '/ramadan-planner',
  '/fasting-planner',
  '/eid-qurbani-planner',
  '/sadqa-zakat-planner',
  '/sadaqah-giving-planner',
  '/islamic-glossary',
  '/quran-reader',
  '/duas-azkar',
  '/tasbih-counter',
  '/salah-tracker',
  '/islamic-dashboard',
  '/islamic-daily-dashboard',
  '/resources',
  '/guided-pilot',
  '/data-migration',
  '/contact-sales',
  '/islamic-charity-software',
  '/islamic-giving-operations-platform',
  '/zakat-management-software',
  '/knowledge-hub',
  '/what-is-sidqly',
  '/why-sidqly',
  '/mission-and-values',
  '/platform',
  '/faqs',
  '/inquiry-form',
  '/ai-search-readiness'
];

const dynamicPublicPaths: string[] = [
  ...blogPosts.map(p => `/blog/${p.slug}`),
  ...getIndexableLocations(),
  ...modules.map(m => `/modules/${m.slug}`),
  ...useCases.map(u => `/use-cases/${u.slug}`),
  ...resources.map(r => `/resources/${r.slug}`),
  ...knowledgeHub.map(k => `/knowledge-hub/${k.slug}`),
  ...legalPolicies.map(l => `/legal/${l.slug}`),
  ...solutions.map(s => `/solutions/${s.slug}`),
  ...comparisons.map(c => {
    if (c.slug.endsWith('-alternatives')) return `/alternatives/${c.slug}`;
    return `/compare/${c.slug}`;
  })
];

const publicClassifications: RouteClassification[] = Array.from(
  new Set([...staticPublicPaths, ...dynamicPublicPaths])
).map(pathStr => ({
  path: pathStr,
  status: 200,
  indexable: true,
  canonical: pathStr === '/' ? `${domain}/` : `${domain}${pathStr}`,
  type: "public"
}));

const nonIndexableClassifications: RouteClassification[] = [
  // System / Private Noindex Pages
  { path: "/billing", status: 200, indexable: false, canonical: "https://www.sidqly.com/billing", type: "noindex" },
  { path: "/start-pilot", status: 200, indexable: false, canonical: "https://www.sidqly.com/start-pilot", type: "noindex" },
  { path: "/implementation", status: 200, indexable: false, canonical: "https://www.sidqly.com/implementation", type: "noindex" },
  { path: "/migration", status: 200, indexable: false, canonical: "https://www.sidqly.com/migration", type: "noindex" },
  { path: "/purchase", status: 200, indexable: false, canonical: "https://www.sidqly.com/purchase", type: "noindex" },
  { path: "/status", status: 200, indexable: false, canonical: "https://www.sidqly.com/status", type: "noindex" },
  { path: "/request-organization", status: 200, indexable: false, canonical: "https://www.sidqly.com/request-organization", type: "noindex" },
  { path: "/why-fill-the-form", status: 200, indexable: false, canonical: "https://www.sidqly.com/why-fill-the-form", type: "noindex" },
  { path: "/ask-sidqly", status: 200, indexable: false, canonical: "https://www.sidqly.com/ask-sidqly", type: "noindex" },
  { path: "/thank-you", status: 200, indexable: false, canonical: "https://www.sidqly.com/thank-you", type: "noindex" },
  { path: "/thank-you/demo", status: 200, indexable: false, canonical: "https://www.sidqly.com/thank-you/demo", type: "noindex" },
  { path: "/thank-you/contact", status: 200, indexable: false, canonical: "https://www.sidqly.com/thank-you/contact", type: "noindex" },
  { path: "/thank-you/pricing", status: 200, indexable: false, canonical: "https://www.sidqly.com/thank-you/pricing", type: "noindex" },

  // Redirect Routes
  { path: "/demo", status: 301, indexable: false, canonical: "https://www.sidqly.com/book-demo", type: "redirect" },
  { path: "/how-sidqly-works", status: 301, indexable: false, canonical: "https://www.sidqly.com/how-it-works", type: "redirect" },
  { path: "/trust", status: 301, indexable: false, canonical: "https://www.sidqly.com/trust-center", type: "redirect" },

  // Vanity Alias Routes (Noindex Fallback)
  { path: "/trust-and-dignity", status: 200, indexable: false, canonical: "https://www.sidqly.com/trust-and-dignity", type: "noindex" },
  { path: "/proof-trust-engine", status: 200, indexable: false, canonical: "https://www.sidqly.com/proof-trust-engine", type: "noindex" },
  { path: "/verified-giving", status: 200, indexable: false, canonical: "https://www.sidqly.com/verified-giving", type: "noindex" },
  { path: "/manual-payment-review", status: 200, indexable: false, canonical: "https://www.sidqly.com/manual-payment-review", type: "noindex" },
  { path: "/donor-safe-impact", status: 200, indexable: false, canonical: "https://www.sidqly.com/donor-safe-impact", type: "noindex" },
  { path: "/corporate-reporting", status: 200, indexable: false, canonical: "https://www.sidqly.com/corporate-reporting", type: "noindex" },
  { path: "/zakat-fund-separation", status: 200, indexable: false, canonical: "https://www.sidqly.com/zakat-fund-separation", type: "noindex" },
  { path: "/qurbani-management-software", status: 200, indexable: false, canonical: "https://www.sidqly.com/qurbani-management-software", type: "noindex" },
  { path: "/ramadan-donation-management", status: 200, indexable: false, canonical: "https://www.sidqly.com/ramadan-donation-management", type: "noindex" },
  { path: "/charity-request-management", status: 200, indexable: false, canonical: "https://www.sidqly.com/charity-request-management", type: "noindex" },
  { path: "/vendor-fulfillment-platform", status: 200, indexable: false, canonical: "https://www.sidqly.com/vendor-fulfillment-platform", type: "noindex" },
  { path: "/mosque-donation-management", status: 200, indexable: false, canonical: "https://www.sidqly.com/mosque-donation-management", type: "noindex" }
];

export const routeClassifications: RouteClassification[] = [
  ...publicClassifications,
  ...nonIndexableClassifications
];
