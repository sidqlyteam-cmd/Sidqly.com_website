import { officialReferences } from './references';

export type ArticleReference = {
  title: string;
  sourceName: string;
  url: string;
  accessedDate?: string;
  note?: string;
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  modifiedDate: string;
  author: string;
  readingTime: string;
  content: string;
  faqs: { question: string; answer: string }[];
  focusKeyword?: string;
  tags: string[];
  perspective: string;
  references?: ArticleReference[];
}

export const generateBlogContent = (topic: string) => {
  const title = topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `
    <section id="overview" class="mb-10">
      <h2 class="text-2xl font-bold text-sidqly-navy mb-4">Overview</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Managing ${title.toLowerCase()} is a foundational responsibility for any organization handling charitable funds. In modern Islamic giving operations, moving from informal coordination to a structured platform is no longer optional—it is a requirement for maintaining the "Amanah" (trust) placed by donors and the dignity of recipients.
      </p>
    </section>

    <section id="the-problem" class="mb-10">
      <h2 class="text-2xl font-bold text-sidqly-navy mb-4">The Problem with Manual Workflows</h2>
      <p class="mb-4">Many teams begin with WhatsApp groups, spreadsheets, and payment screenshots because they are easy to start. However, the problem appears later, when campaigns grow and complexity increases.</p>
      <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p class="text-red-700 font-bold mb-2">Common Challenges:</p>
        <ul class="list-disc pl-6 space-y-1 text-red-600">
          <li>Scattered WhatsApp messages and lost payment screenshots.</li>
          <li>Manual receipt creation causing delays and errors.</li>
          <li>Privacy risks for requesters when field photos are shared without blurring.</li>
          <li>Lack of board-ready reports in real-time.</li>
        </ul>
      </div>
    </section>

    <section id="best-practices" class="mb-10">
      <h2 class="text-2xl font-bold text-sidqly-navy mb-4">Best-Practice Workflow</h2>
      <p class="mb-6">A professional operating approach focuses on clear separation of duties and automated verification gates. Organizations should aim for the following workflow standards:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="border border-gray-200 p-6 rounded-2xl">
          <h4 class="font-bold text-sidqly-green-deep mb-2">1. Manual Review Gate</h4>
          <p class="text-sm text-gray-600">Every financial transaction and payment screenshot must be manually reviewed by a dedicated team member before being marked as verified.</p>
        </div>
        <div class="border border-gray-200 p-6 rounded-2xl">
          <h4 class="font-bold text-sidqly-green-deep mb-2">2. Dignity-Safe Proof</h4>
          <p class="text-sm text-gray-600">Never show private recipient faces in public updates. Use automated blurring to protect recipient dignity while still providing proof of impact.</p>
        </div>
      </div>
    </section>

    <section id="how-sidqly-helps" class="mb-10">
      <h2 class="text-2xl font-bold text-sidqly-navy mb-4">How Sidqly Helps</h2>
      <p class="mb-6">Sidqly is designed to help teams organize these steps in one premium operating platform. We replace the chaos of manual tools with specific modules for ${title.toLowerCase()}.</p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start gap-3">
          <span class="bg-sidqly-green-emerald text-white p-1 rounded-full text-[10px]">✓</span>
          <div>
            <p class="font-bold text-sidqly-navy">Manual Payment Review</p>
            <p class="text-sm text-gray-600">Centralize all payment screenshots and bank records for manual human verification.</p>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="bg-sidqly-green-emerald text-white p-1 rounded-full text-[10px]">✓</span>
          <div>
            <p class="font-bold text-sidqly-navy">Proof Trust Engine</p>
            <p class="text-sm text-gray-600">Review field evidence and automatically blur faces before donors see them.</p>
          </div>
        </li>
      </ul>
    </section>

    <section id="conclusion" class="mb-10">
      <h2 class="text-2xl font-bold text-sidqly-navy mb-4">Conclusion</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Managing ${title.toLowerCase()} through messages and spreadsheets can work for a small team, but it becomes difficult when orders, proof, and donor expectations increase. By adopting a clearer workflow that separates tracking, verification, and reporting, organizations can scale their impact without sacrificing trust.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Sidqly supports your team by providing the operational structure needed for modern Islamic giving. To explore how Sidqly can support your specific team, we recommend booking a demo or filling our detailed inquiry form.
      </p>
    </section>
  `;
};

const slugs = [
  { slug: "how-to-manage-mosque-donations", perspective: "Mosque leader", focusKeyword: "mosque donation management" },
  "how-to-track-zakat-donations",
  "how-to-manage-qurbani-orders",
  "how-to-track-ramadan-ration-packs",
  "how-to-give-donors-proof-safely",
  "how-to-protect-charity-recipient-dignity",
  "how-to-replace-whatsapp-for-charity-work",
  "how-to-prepare-charity-impact-reports",
  "how-to-separate-zakat-and-sadaqah-funds",
  "qurbani-share-tracking-software-guide",
  "how-to-manage-ramadan-food-drives",
  "how-to-track-iftar-meal-distribution",
  "how-to-manage-ration-pack-delivery",
  "what-is-donor-safe-proof",
  "why-charities-should-not-share-recipient-faces",
  "why-excel-is-not-enough-for-donation-management",
  "manual-payment-review-for-donations",
  "how-to-review-payment-proof",
  "how-to-issue-donation-receipts",
  "how-to-create-donor-certificates",
  "how-to-prepare-charity-impact-reports-advanced",
  "how-to-create-board-ready-charity-reports",
  "how-to-manage-charity-request-intake",
  "how-to-screen-charity-requests-safely",
  "how-to-manage-zakat-case-review",
  "how-to-track-zakat-disbursement",
  "how-to-run-a-sadaqah-campaign",
  "how-to-track-emergency-aid",
  "how-to-manage-vendor-delivery-tasks",
  "how-vendors-can-upload-proof",
  "how-to-manage-volunteers-for-charity",
  "how-to-track-volunteer-hours",
  "how-corporate-sponsors-track-impact",
  "corporate-zakat-reporting-guide",
  "employee-giving-for-islamic-charities",
  "matching-contributions-for-csr-zakat",
  "how-to-build-donor-trust",
  "how-to-improve-donor-updates",
  "why-donors-ask-for-proof",
  "how-to-share-proof-without-exposing-private-data",
  "qr-verification-for-charity-delivery",
  "six-digit-codes-for-pickup-and-delivery",
  "how-to-track-delivery-status-for-charity",
  "how-to-manage-charity-delivery-proof",
  "how-to-run-a-charity-pilot-project",
  "how-to-move-from-manual-charity-processes",
  "how-to-organize-islamic-charity-operations",
  "islamic-charity-software-features",
  "mosque-donation-management-features",
  "qurbani-management-features",
  "ramadan-donation-management-features",
  "zakat-management-features",
  "sadaqah-campaign-management-features",
  "charity-request-management-features",
  "vendor-fulfillment-for-charities",
  "proof-trust-engine-explained",
  "dignity-safe-charity-support-explained",
  "donor-safe-impact-reporting-explained",
  "why-manual-approval-matters-in-charity",
  "why-zakat-eligibility-should-be-human-reviewed",
  "how-to-build-a-proof-policy",
  "how-to-create-a-charity-reporting-system",
  "how-small-charities-can-look-professional",
  "how-mosques-can-improve-donor-communication",
  "how-ramadan-teams-can-reduce-manual-work",
  "how-qurbani-teams-can-reduce-confusion",
  "how-zakat-teams-can-protect-private-data",
  "how-to-choose-charity-management-software"
];

const aiSearchTopics = [
  { slug: "what-is-geo-generative-engine-optimization", title: "What is GEO? Generative Engine Optimization for SaaS" },
  { slug: "what-is-llmo-for-saas-websites", title: "What is LLMO for SaaS Websites?" },
  { slug: "how-ai-search-changes-saas-websites", title: "How AI Search is Changing SaaS Marketing" },
  { slug: "how-startups-can-prepare-for-ai-search", title: "How Startups Can Prepare for AI Search" },
  { slug: "how-to-write-faqs-for-ai-search", title: "How to Write FAQs for AI Search Bots" },
  { slug: "how-to-make-saas-content-easy-for-ai-assistants", title: "Making SaaS Content AI-Assistant Friendly" },
  { slug: "why-structured-data-matters-for-startups", title: "Why Structured Data Matters for Modern Startups" },
  { slug: "how-to-use-schema-for-saas-seo", title: "How to Use Schema.org for SaaS SEO" },
  { slug: "how-to-create-an-llms-txt-file", title: "How to Create an llms.txt File for Your Website" },
  { slug: "how-to-protect-a-website-from-bad-bots", title: "How to Protect Your Website from Malicious Bots" },
  { slug: "how-to-balance-ai-crawling-and-security", title: "Balancing AI Crawling and Data Security" },
  { slug: "how-sidqly-prepares-public-content-for-ai-search", title: "How Sidqly Prepares Content for the Future of Search" }
];

export const blogPosts: BlogPost[] = slugs.map(item => {
  const slug = typeof item === 'string' ? item : item.slug;
  const perspective = typeof item === 'string' ? "Islamic charity director" : item.perspective;
  const focusKeyword = typeof item === 'string' ? slug.replace(/-/g, ' ') : item.focusKeyword;

  return {
    slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `A practical guide on ${slug.replace(/-/g, ' ')} for Islamic organizations looking to improve operational integrity and donor trust.`,
    category: "Operations",
    date: "2026-06-12",
    modifiedDate: "2026-06-12",
    author: "Sidqly Team",
    readingTime: "6 min read",
    content: generateBlogContent(slug),
    perspective,
    focusKeyword,
    tags: ["Operations", slug.split('-')[0].charAt(0).toUpperCase() + slug.split('-')[0].slice(1)],
    faqs: [
      { question: `Can Sidqly support ${slug.replace(/-/g, ' ')}?`, answer: "Yes, our modular platform provides specialized tools and workflows for this specific area of giving operations." },
    { question: "Is this suitable for small teams?", answer: "Absolutely. Sidqly is designed to scale from small local mosques to large international charities." },
    { question: "How does Sidqly protect privacy here?", answer: "Our Proof Trust Engine automatically blurs recipient identities and uses secure, non-indexed links for sharing impact updates." },
    { question: "Can we migrate our current Excel data?", answer: "Yes, the Sidqly team provides professional assistance for migrating your existing donor and aid seeker records." }
  ]
  };
});

aiSearchTopics.forEach(topic => {
  blogPosts.push({
    slug: topic.slug,
    title: topic.title,
    description: `Learn about the future of search and how ${topic.title.toLowerCase()} affects modern SaaS growth.`,
    category: "AI & SEO",
    date: "2026-06-12",
    modifiedDate: "2026-06-12",
    author: "Sidqly Team",
    readingTime: "5 min read",
    content: `
      <h3>Introduction</h3>
      <p>The landscape of search is shifting from traditional links to generative answers. Understanding ${topic.title} is essential for any modern SaaS brand.</p>
      <h3>Why This Matters</h3>
      <p>Modern AI search engines and LLMs depend on clear, structured, and crawlable content to provide accurate answers to users. For startups, this is a new frontier for visibility.</p>
      <h3>Practical Guidance</h3>
      <p>Focus on source-friendly content, valid JSON-LD schema, and specialized guidance files like llms.txt to ensure AI assistants can represent your product accurately.</p>
      <p><strong>Note:</strong> Sidqly does not claim guaranteed rankings. We believe in providing clear, professional information that is easy for both humans and machines to understand.</p>
    `,
    perspective: "SaaS founder",
    focusKeyword: topic.title,
    tags: ["AI & SEO", "LLMO", "GEO"],
    references: [officialReferences.googleSeoStarter, officialReferences.googleHelpfulContent],
    faqs: [
      { question: `What is ${topic.slug.replace(/-/g, ' ')}?`, answer: "It is a strategy focused on making website content more readable and authoritative for generative AI search engines." },
      { question: "Does Sidqly use these techniques?", answer: "Yes, our public website is built with a focus on AI-readiness, including structured data and crawlable markdown summaries." }
    ]
  });
});
