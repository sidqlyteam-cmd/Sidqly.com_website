/**
 * Sidqly SEO Keyword-to-Page Architecture Map
 *
 * Enforces strict mapping of unique search query clusters to distinct primary target pages.
 * Helps prevent keyword cannibalization and defines clear internal linking routes.
 */

export interface SeoMappingEntry {
  pageUrl: string;
  clusterName: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Informational' | 'Transactional' | 'Navigational';
  targetRegions: string[];
  internalLinkingTargets: string[];
  conversionGoal: string;
}

export const seoMap: SeoMappingEntry[] = [
  {
    pageUrl: "/",
    clusterName: "Islamic Giving Platform",
    primaryKeyword: "Islamic giving operations platform",
    secondaryKeywords: ["verified giving software", "charity audit software", "Amanah platform"],
    searchIntent: "Transactional",
    targetRegions: ["Global", "United Kingdom", "United States", "Pakistan", "Canada", "Australia", "Gulf"],
    internalLinkingTargets: ["/features", "/pricing", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application / Book Demo"
  },
  {
    pageUrl: "/use-cases/islamic-charities",
    clusterName: "Islamic Charity Software",
    primaryKeyword: "Islamic charity management software",
    secondaryKeywords: ["Muslim NGO software", "halal fundraising tools", "donor-safe proof tracker"],
    searchIntent: "Transactional",
    targetRegions: ["United Kingdom", "United States", "Canada", "Australia", "Gulf"],
    internalLinkingTargets: ["/features", "/pricing", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/use-cases/mosques",
    clusterName: "Mosque/Masjid Management Software",
    primaryKeyword: "mosque management software",
    secondaryKeywords: ["masjid donation platform", "mosque member tracking", "jamaat coordination tool"],
    searchIntent: "Transactional",
    targetRegions: ["United Kingdom", "United States", "Canada", "Australia", "Pakistan", "Gulf"],
    internalLinkingTargets: ["/features", "/pricing", "/guided-pilot"],
    conversionGoal: "Book a Demo"
  },
  {
    pageUrl: "/modules/zakat-fund-separation",
    clusterName: "Zakat Systems",
    primaryKeyword: "Zakat separation system",
    secondaryKeywords: ["Zakat calculation software", "direct recipient Tamleek tracker", "Shariah audit trail", "Zakat ledger separation"],
    searchIntent: "Informational",
    targetRegions: ["Global", "United Kingdom", "United States", "Pakistan", "Canada", "Australia", "Gulf"],
    internalLinkingTargets: ["/pricing", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/modules/qurbani-lifecycle",
    clusterName: "Qurbani Management",
    primaryKeyword: "Qurbani management software",
    secondaryKeywords: ["Udhiya share tracker", "livestock procurement system", "slaughter certificate generator"],
    searchIntent: "Transactional",
    targetRegions: ["Pakistan", "Gulf", "United Kingdom", "United States", "Canada"],
    internalLinkingTargets: ["/pricing", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/modules/ramadan-meals-rations",
    clusterName: "Ramadan Distribution",
    primaryKeyword: "Ramadan donation management",
    secondaryKeywords: ["iftar delivery route planner", "family ration pack tracker", "volunteer dispatch app"],
    searchIntent: "Transactional",
    targetRegions: ["Pakistan", "Gulf", "United Kingdom", "United States", "Canada", "Australia"],
    internalLinkingTargets: ["/features", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/modules/manual-payment-review",
    clusterName: "Donation Verification",
    primaryKeyword: "donation verification software",
    secondaryKeywords: ["bank transfer review ledger", "reconcile payment screenshot", "donation audit check"],
    searchIntent: "Transactional",
    targetRegions: ["Global", "United Kingdom", "United States", "Pakistan"],
    internalLinkingTargets: ["/how-it-works", "/guided-pilot"],
    conversionGoal: "Book a Demo"
  },
  {
    pageUrl: "/modules/privacy-dignity-controls",
    clusterName: "Beneficiary Management & Recipient Privacy",
    primaryKeyword: "recipient privacy software",
    secondaryKeywords: ["beneficiary face blurring", "EXIF metadata scrubber", "role-based photo database"],
    searchIntent: "Informational",
    targetRegions: ["Global", "United Kingdom", "United States", "Canada", "Australia"],
    internalLinkingTargets: ["/what-is-sidqly", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/modules/proof-trust-engine",
    clusterName: "Proof of Delivery",
    primaryKeyword: "charity proof of delivery tracker",
    secondaryKeywords: ["field photo proof uploader", "dignity-safe update portal", "donor evidence validation"],
    searchIntent: "Informational",
    targetRegions: ["Global", "United Kingdom", "United States", "Canada", "Australia"],
    internalLinkingTargets: ["/features", "/guided-pilot"],
    conversionGoal: "Guided Pilot Application"
  },
  {
    pageUrl: "/modules/reports-board-packs",
    clusterName: "Impact Reporting",
    primaryKeyword: "charity board pack generator",
    secondaryKeywords: ["nonprofit impact reports", "audit-ready giving dashboard", "sponsor trust reporting"],
    searchIntent: "Informational",
    targetRegions: ["Global", "United Kingdom", "United States", "Canada", "Australia", "Gulf"],
    internalLinkingTargets: ["/pricing", "/contact-sales"],
    conversionGoal: "Contact Sales Team"
  }
];

export default seoMap;
