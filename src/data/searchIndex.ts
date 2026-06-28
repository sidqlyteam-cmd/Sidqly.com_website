import { modules, solutions } from './solutions_modules';

export interface SearchResult {
  id: string;
  type: 'Module' | 'Solution' | 'Resource' | 'Blog' | 'FAQ' | 'Compare' | 'Trust' | 'Legal' | 'Page';
  title: string;
  description: string;
  url: string;
}

export const generateSearchIndex = (): SearchResult[] => {
  const index: SearchResult[] = [];

  // Core Pages
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
