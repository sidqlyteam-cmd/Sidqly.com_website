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
      title: m.name,
      description: m.summary,
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
