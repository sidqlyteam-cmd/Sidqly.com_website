export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Press Release' | 'Sidqly Updates' | 'Islamic Giving News' | 'Makkah and Madinah Updates' | 'Hajj and Umrah Operations' | 'Ramadan and Qurbani Planning' | 'Product Announcements';
  date: string;
  summary: string;
  isExternal?: boolean;
  externalUrl?: string;
  sourceName?: string;
}

export const newsroomData: NewsItem[] = [
  // Press Releases
  {
    id: 'pr-1',
    slug: 'sidqly-introduces-islamic-giving-platform',
    title: 'Sidqly introduces Islamic giving operations platform for mosques and charities',
    category: 'Press Release',
    date: '2024-03-01',
    summary: 'Sidqly launches a dedicated operating platform to help organizations manage verified giving, manual payment reviews, and proof approvals.',
  },
  {
    id: 'pr-2',
    slug: 'sidqly-adds-islamic-tools',
    title: 'Sidqly adds Islamic tools for Ramadan, Qurbani, Qibla, Namaz timing, and Zakat planning',
    category: 'Press Release',
    date: '2024-04-15',
    summary: 'A new suite of operational tools allows giving teams to coordinate seasonal distributions directly alongside their workflow management.',
  },
  {
    id: 'pr-3',
    slug: 'sidqly-expands-use-cases',
    title: 'Sidqly expands use cases for mosques, Islamic charities, donors, volunteers, vendors, and sponsors',
    category: 'Press Release',
    date: '2024-05-20',
    summary: 'Enhanced module alignment allows diverse stakeholders to participate safely and securely in global charity operations.',
  },
  // Sidqly Updates
  {
    id: 'su-1',
    slug: 'trust-engine-updates',
    title: 'Enhancements to the Proof Trust Engine for Qurbani seasons',
    category: 'Sidqly Updates',
    date: '2024-06-01',
    summary: 'New workflow checks ensure recipient dignity while providing donors with required visual proof of their shares.',
  },
  {
    id: 'su-2',
    slug: 'zakat-fund-separation',
    title: 'Zakat fund separation features now live',
    category: 'Product Announcements',
    date: '2024-06-10',
    summary: 'Organizations can now tightly control Zakat flows separately from general Sadaqah to maintain religious compliance.',
  },
  // Placeholders / Curated (Source-Safe)
  {
    id: 'hajj-op-1',
    slug: 'dhul-hijjah-readiness-2024',
    title: 'Preparing for Dhul Hijjah: Essential Operational Checks',
    category: 'Hajj and Umrah Operations',
    date: '2024-05-15',
    summary: 'Organizations should confirm official Hajj and Umrah updates through official authorities. Use this time to ready your vendor pipelines and donor communications.',
  },
  {
    id: 'ram-1',
    slug: 'ramadan-distribution-guidelines',
    title: 'Ramadan Ration Pack Guidelines for Hot Weather',
    category: 'Ramadan and Qurbani Planning',
    date: '2024-02-10',
    summary: 'As Ramadan shifts through the calendar, operational teams must adapt food safety and distribution logistics to local climates.',
  }
];

export const mediaKitData = {
  description: "Sidqly is a premium Islamic operating platform for verified giving, manual payment review, proof approval, donor-safe impact updates, protected recipient dignity, Zakat fund separation, Sadaqah campaigns, Qurbani operations, Ramadan distribution, receipts, certificates, audit-ready records, and board-ready reports.",
  tagline: "Verified giving. Protected dignity. Clear impact.",
  brandColors: [
    { name: "Deep Green", hex: "#0F4D3E" },
    { name: "Emerald Green", hex: "#15803D" },
    { name: "Soft Green", hex: "#A7F3D0" },
    { name: "Charcoal Navy", hex: "#0B1D2A" },
    { name: "Trust Gold", hex: "#D4AF37" }
  ],
  contactEmail: "team@sidqly.com",
  website: "https://www.sidqly.com"
};
