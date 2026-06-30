import { modules, solutions } from './solutions_modules';
import { useCases } from './useCases';

export interface SearchResult {
  id: string;
  type: 'Module' | 'Solution' | 'Use Case' | 'Islamic Tool' | 'Resource' | 'Blog' | 'FAQ' | 'Compare' | 'Trust' | 'Legal' | 'Page' | 'Feature' | 'Newsroom';
  title: string;
  description: string;
  url: string;
}

export const generateSearchIndex = (): SearchResult[] => {
  const index: SearchResult[] = [];

  // Core Pages

  // Newsroom & Media
  index.push({
    id: 'newsroom',
    type: 'Newsroom',
    title: 'Newsroom',
    description: 'Latest Sidqly updates, press releases, Makkah, Madinah, Hajj, Umrah, Ramadan, and Qurbani planning news.',
    url: '/newsroom'
  });
  index.push({
    id: 'press-releases',
    type: 'Newsroom',
    title: 'Press Releases',
    description: 'Official press releases, product updates, and company announcements from Sidqly.',
    url: '/press-releases'
  });
  index.push({
    id: 'media-kit',
    type: 'Newsroom',
    title: 'Media Kit',
    description: 'Brand assets, boilerplates, and guidelines for press and media coverage.',
    url: '/media-kit'
  });

  // Islamic Utilities
  index.push({
    id: 'util-islamic-utilities',
    type: 'Islamic Tool',
    title: 'Islamic Utilities',
    description: 'Islamic Tools Hub for Ramadan, Qurbani, Zakat, Sadqa, and general planning utilities.',
    url: '/islamic-utilities'
  });
  index.push({
    id: 'util-namaz-timings',
    type: 'Islamic Tool',
    title: 'Namaz Timings',
    description: 'Prayer times, salah time, fajr, dhuhr, asr, maghrib, isha for operational planning.',
    url: '/namaz-timings'
  });
  index.push({
    id: 'util-zakat-calculator',
    type: 'Islamic Tool',
    title: 'Zakat Calculator',
    description: 'Plan your Zakat obligations with manual nisab input for gold and silver.',
    url: '/zakat-calculator'
  });
  index.push({
    id: 'util-islamic-calendar',
    type: 'Islamic Tool',
    title: 'Islamic Calendar & Hijri Date',
    description: 'Current Islamic date, Hijri calendar planning, and countdown estimates.',
    url: '/islamic-calendar'
  });
  index.push({
    id: 'util-qibla-direction',
    type: 'Islamic Tool',
    title: 'Qibla Direction Tool',
    description: 'Calculate approximate Qibla direction, compass for site logistics.',
    url: '/qibla-direction'
  });
  index.push({
    id: 'util-moon-phase',
    type: 'Islamic Tool',
    title: 'Moon Phase & Lunar Planning',
    description: 'Approximate lunar phase for Islamic charity operations planning.',
    url: '/moon-phase-islamic-calendar'
  });
  index.push({
    id: 'util-weather-planning',
    type: 'Islamic Tool',
    title: 'Weather-Aware Distribution Planning',
    description: 'Weather guidance for safe charity distribution and volunteer operations.',
    url: '/weather-charity-distribution'
  });
  index.push({
    id: 'util-ramadan-planner',
    type: 'Islamic Tool',
    title: 'Ramadan Planner & Calendar',
    description: 'Ramadan countdown, Iftar operations checklist, and Suhoor/Sehri preparation.',
    url: '/ramadan-planner'
  });
  index.push({
    id: 'util-eid-qurbani-planner',
    type: 'Islamic Tool',
    title: 'Eid & Qurbani Planner',
    description: 'Checklist for Eid ul Adha, Eid ul Fitr, Qurbani, and Udhiya operations.',
    url: '/eid-qurbani-planner'
  });
  index.push({
    id: 'util-hajj-countdown',
    type: 'Islamic Tool',
    title: 'Hajj Countdown',
    description: 'Dhul Hijjah operations planner and countdown.',
    url: '/hajj-countdown'
  });
  index.push({
    id: 'util-sadqa-zakat-planner',
    type: 'Islamic Tool',
    title: 'Sadqa & Zakat Planner',
    description: 'Sadqa Fitr preparation and Zakat fund separation checklists.',
    url: '/sadqa-zakat-planner'
  });
  index.push({
    id: 'util-islamic-glossary',
    type: 'Islamic Tool',
    title: 'Islamic Glossary',
    description: 'Definitions of Islamic charity terms like Zakat, Sadaqah, Aqiqa/Aqiqah, and Qurbani in an operational context.',
    url: '/islamic-glossary'
  });

  index.push({
    id: 'page-home',
    type: 'Page',
    title: 'Sidqly Home',
    description: 'Verified giving. Protected dignity. Clear impact. The premium operating platform for Islamic charities.',
    url: '/'
  });

  index.push({
    id: 'page-modules-index',
    type: 'Page',
    title: 'Modular Operating System',
    description: 'Explore the 18 professional operating modules built for modern Islamic giving.',
    url: '/modules'
  });

  index.push({
    id: 'page-pricing',
    type: 'Page',
    title: 'Pricing & Plans',
    description: 'Simple, transparent pricing for Sidqly platform access.',
    url: '/pricing'
  });

  index.push({
    id: 'page-request-organization',
    type: 'Page',
    title: 'Request Organization',
    description: 'Submit an inquiry to begin onboarding your mosque or charity to Sidqly.',
    url: '/inquiry-form'
  });

  // Modules
  modules.forEach(m => {
    index.push({
      id: `module-${m.slug}`,
      type: 'Module',
      title: m.title,
      description: m.desc,
      url: `/modules/${m.slug}`
    });
  });

  // Solutions
  solutions.forEach(s => {
    index.push({
      id: `solution-${s.slug}`,
      type: 'Solution',
      title: s.title,
      description: s.desc,
      url: `/solutions/${s.slug}`
    });
  });

  // Use Cases
  index.push({
    id: 'page-use-cases-index',
    type: 'Page',
    title: 'Use Cases Hub',
    description: 'Explore how Sidqly supports mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan ration teams, donors, volunteers, vendors, and corporate sponsors.',
    url: '/use-cases'
  });
  useCases.forEach(uc => {
    index.push({
      id: `use-case-${uc.slug}`,
      type: 'Use Case',
      title: uc.title,
      description: uc.shortDescription,
      url: `/use-cases/${uc.slug}`
    });
  });

  // Static Resources/Compare (Hardcoded examples based on current content)
  const resources = [
    { title: 'Moving from WhatsApp and Excel to Professional Workflows', url: '/resources/moving-from-whatsapp-excel' },
    { title: 'Pilot Launch Playbook', url: '/resources/pilot-launch-guide' }
  ];
  resources.forEach((r, i) => {
    index.push({
      id: `resource-${i}`,
      type: 'Resource',
      title: r.title,
      description: 'Operational guide and playbook for Islamic charities.',
      url: r.url
    });
  });

  const comparisons = [
    { name: 'Manual Spreadsheets', url: '/compare/manual-spreadsheets' },
    { name: 'WhatsApp Groups', url: '/compare/whatsapp-coordination' },
    { name: 'Basic Donation Forms', url: '/compare/basic-donation-form' },
    { name: 'Generic CRMs', url: '/compare/generic-crm' }
  ];
  comparisons.forEach((c, i) => {
    index.push({
      id: `compare-${i}`,
      type: 'Compare',
      title: `Sidqly vs ${c.name}`,
      description: `Understand why leading organizations choose a professional operating platform over ${c.name.toLowerCase()}.`,
      url: c.url
    });
  });

  // Trust & Legal
  index.push({ id: 'trust-center', type: 'Trust', title: 'Trust Center', description: 'Security, privacy, and compliance details.', url: '/trust-center' });
  index.push({ id: 'privacy-policy', type: 'Legal', title: 'Privacy Policy', description: 'How we handle data.', url: '/privacy' });


  // Seasonal Guides
  index.push({
    id: 'resource-eid-giving',
    type: 'Resource',
    title: 'Eid Giving Guide',
    description: 'Learn how to manage Eid giving, sponsor interest, food support, and community campaigns. Topics: Eid 2026, Eid ul Fitr.',
    url: '/resources/eid-giving'
  });

  index.push({
    id: 'resource-qurbani-operations',
    type: 'Resource',
    title: 'Qurbani Operations Guide',
    description: 'Manage Qurbani operations with manual payment review, vendor assignment, certificates, and reports. Topics: Bakra Eid, Qurbani dua, Qurbani certificate.',
    url: '/resources/qurbani-operations'
  });

  index.push({
    id: 'resource-eid-ul-adha-qurbani',
    type: 'Resource',
    title: 'Eid ul Adha and Qurbani Operations',
    description: 'Explore how Sidqly helps organizations manage Qurbani operations for Eid ul Adha. Topics: Eid ul Adha 2026, Qurbani.',
    url: '/resources/eid-ul-adha-qurbani'
  });

  index.push({
    id: 'resource-sadqa-fitr',
    type: 'Resource',
    title: 'Sadqa Fitr and Sadaqah Campaigns',
    description: 'Manage Sadqa, Sadaqah, Sadqa Fitr, payment review, family support, and Zakat separation.',
    url: '/resources/sadqa-fitr'
  });

  index.push({
    id: 'resource-ramadan-giving',
    type: 'Resource',
    title: 'Ramadan Giving Guide',
    description: 'Organize Ramadan meals, Iftar support, ration packs, volunteer tasks, and campaign reports. Topics: Ramadan 2026, Ramzan.',
    url: '/resources/ramadan-giving'
  });

  index.push({
    id: 'resource-iftar-ration-workflow',
    type: 'Resource',
    title: 'Iftar and Ration Pack Workflow',
    description: 'Managing Iftar and ration pack distributions, batch planning, and daily reports. Topics: Iftar time today, food packs.',
    url: '/resources/iftar-ration-workflow'
  });

  index.push({
    id: 'resource-aqiqa-charity-workflow',
    type: 'Resource',
    title: 'Aqiqa / Aqiqah Charity Workflow',
    description: 'Handle Aqiqa charity requests operationally with vendor fulfillment and reporting.',
    url: '/resources/aqiqa-charity-workflow'
  });

  // Seasonal keywords mapping (for broader search coverage)
  index.push({
    id: 'seasonal-keywords',
    type: 'Resource',
    title: 'Seasonal Giving Guides',
    description: 'Eid, Eid 2026, Eid ul Adha, Eid ul Fitr, Bakra Eid, Qurbani, Qurbani certificate, Sadqa, Sadaqah, Sadqa Fitr, Sadqa e Fitr, Zakat, Ramadan, Ramzan, Iftar, ration packs, Aqiqa, Aqiqah.',
    url: '/resources/eid-giving'
  });

  // Product keywords mapping
  index.push({
    id: 'product-keywords',
    type: 'Feature',
    title: 'Platform Features & Workflows',
    description: 'verified giving, manual payment review, donor-safe proof, proof approval, audit-ready records, board reports, receipts, certificates, QR verification, vendor fulfillment, volunteer coordination, request organization.',
    url: '/how-it-works'
  });

  // Brand Assets
  index.push({
    id: 'brand-assets',
    type: 'Feature',
    title: 'Brand Assets',
    description: 'Brand assets and guidelines.',
    url: '/brand-assets'
  });

  // Extra Keywords mapping for Newsroom and Utilities
  index.push({
    id: 'extra-search-terms',
    type: 'Feature',
    title: 'Additional Topics & News',
    description: 'newsroom, news, press, press release, media kit, Sidqly updates, Islamic giving news, Makkah updates, Madinah updates, Hajj news, Umrah updates, Ramadan news, Qurbani news',
    url: '/newsroom'
  });

  return index;
};

export const searchIndex = generateSearchIndex();

export const performSearch = (query: string): SearchResult[] => {
  if (!query || query.trim().length < 2) return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchIndex.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.type.toLowerCase().includes(lowerQuery)
  ).slice(0, 8); // Return max 8 results
};
