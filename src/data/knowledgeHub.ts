/**
 * Sidqly Knowledge Hub & AI Overview Data Model
 *
 * Centralized, authoritative directory of pillar guides, articles, and glossary terms
 * following the strict Answer-First content model.
 */

export interface KnowledgeItem {
  id: string;
  type: 'pillar' | 'article' | 'glossary';
  slug: string;
  title: string;
  focusKeyword: string;
  directAnswer: string; // 40-70 words direct overview answer
  definition: string;
  explanation: string;
  workflow: string[];
  examples: string[];
  faqs: { question: string; answer: string }[];
  author: string;
  reviewer: string;
  lastUpdated: string;
  svgIconName?: string;
}

export const knowledgeHub: KnowledgeItem[] = [
  {
    id: "p1",
    type: "pillar",
    slug: "guide-islamic-charity-operations",
    title: "Guide to Islamic Charity Operations",
    focusKeyword: "Islamic charity operations",
    directAnswer: "Islamic charity operations encompass the mobilization, manual payment matching, logical ledger separation (between Zakat and Sadaqah), field task assignment, and dignity-safe verification of charitable distributions. Modern compliance demands transition from informal spreadsheets into secure, role-restricted SaaS environments to guarantee audit-readiness and preserve donor confidence.",
    definition: "An operational discipline focused on the backend administrative workflows of Muslim-led NGOs, masjids, and welfare committees, prioritizing Shariah-conscious fund isolation, recipient modesty, and compliance records.",
    explanation: "Most giving organizations manage their campaign collections using scattered Excel spreadsheets and WhatsApp messages. While easy to launch, these informal systems break down at scale, introducing mathematical reconciliation risks and exposing sensitive beneficiary details to the public. Professional operations require strict segregation of duties between finance reviewers and field volunteers. We replace chaotic legacy operations with structured audit trails, securing manual payment reviews, logic-isolated ledgers, volunteer maps, and automated face-blurring filters. This ensures that every donor deposit is verified manually, and every field distribution preserves recipient dignity.",
    workflow: [
      "Record Payment: Intake manual cash receipts or bank transfer details onto a centralized ledger.",
      "Verify Wire: Match statements manually against bank records side-by-side to prevent accounting inflation.",
      "Separate Ledgers: Logically allocate the checked transaction to distinct Zakat, Sadaqah, or Project pools.",
      "Dispatch Tasks: Distribute row-restricted delivery schedules to volunteers with zero PII exposure.",
      "Review & Anonymize: Inspect uploaded field evidence, apply face-blurring, and scrub GPS EXIF telemetry.",
      "Donor Reporting: Deliver secure, non-crawlable updates to sponsors, backing up their trust."
    ],
    examples: [
      "A registered Muslim NGO replaces a shared Google sheet with Sidqly, routing volunteer drivers via secure mobile checklists and protecting beneficiary privacy during food box drop-offs.",
      "A mosque welfare committee automates its donor certificate exports for seasonal Qurbani shares, saving days of manual data entry after Eid."
    ],
    faqs: [
      { question: "Is special software required for Islamic charities?", answer: "Yes, standard non-profit databases are built for public fundraising and lack the specific, logically isolated ledgers necessary to separate Zakat funds mathematically from general charity." },
      { question: "How does Sidqly secure our records?", answer: "All data is encrypted in transit and at rest using SSL/TLS and AES-256 protocols, with granular access limits restricting files based on roles." }
    ],
    author: "Sidqly Operations Desk",
    reviewer: "Scholarly Compliance Board",
    lastUpdated: "August 2026",
    svgIconName: "donation-lifecycle"
  },
  {
    id: "p2",
    type: "pillar",
    slug: "zakat-management-systems-guide",
    title: "Complete Guide to Zakat Management Systems",
    focusKeyword: "Zakat management systems",
    directAnswer: "Zakat management systems are specialized administrative software tools designed to separate obligatory alms from voluntary Sadaqah, track applicant eligibility documentation, log direct recipient handover (Tamleek), and provide audit-ready logs for Shariah compliance reviews. These tools prevent co-mingling and preserve Zakat’s strict religious parameters.",
    definition: "A dedicated financial and operational framework managing Zakat assets and disbursements with separate logical ledgers, role-restricted folders, and precise compliance tracing.",
    explanation: "Because Zakat has strict compliance rules (Masarif-e-Zakat) defined by Shariah, general non-profit bookkeeping tools do not suffice. Mixing Zakat funds with operating budgets or voluntary Sadaqah violates the trust (Amanah) of donors. A dedicated system enforces distinct isolated ledger balances and documents caseworkers' eligibility checks manually. Sidqly supports committees with distinct Zakat databases, case reviews, automated Gold and Silver Nisab calculations, and explicit Tamleek records. This ensures that every Zakat dollar is tracked with precision, disbursed responsibly, and fully verified to scholars.",
    workflow: [
      "Establish Criteria: Define eligible screening benchmarks (e.g. wealth levels under gold/silver Nisab).",
      "Screen Applicants: Case workers log applicant assets, incomes, and liabilities securely.",
      "Calculate Allocation: Cross-reference current regional Nisab benchmarks to verify eligibility.",
      "Log isolated deposit: Finance routes verified payments strictly into mathematically isolated Zakat ledgers.",
      "Tamleek Disbursement: Execute direct transfer of wealth, logging signed confirmations from beneficiaries."
    ],
    examples: [
      "A Zakat committee screens community welfare requests, uploading delicate financials securely and recording direct recipient handovers in compliance with Tamleek guidelines.",
      "An organization uses Nisab calculations to programmatically flag which applicants qualify for immediate housing aid."
    ],
    faqs: [
      { question: "Does this software make automatic Zakat decisions?", answer: "No. Sidqly acts purely as an administrative tracker. Rulings and decisions must be made by your local authorized scholars." },
      { question: "How is Tamleek documented?", answer: "The platform records explicit recipient handovers with verification codes or physical signatures to ensure the asset has successfully transferred ownership." }
    ],
    author: "Zakat Compliance Desk",
    reviewer: "Islamic Finance Scholar Board",
    lastUpdated: "August 2026",
    svgIconName: "zakat-calculation"
  },
  {
    id: "p3",
    type: "pillar",
    slug: "ramadan-food-distribution-logistics",
    title: "Pillar Guide to Ramadan Distribution Logistics",
    focusKeyword: "Ramadan campaign flow",
    directAnswer: "Ramadan distribution logistics focus on coordinating high-volume ration packing, meal preparation, volunteer dispatching, and dignity-first evidence uploading during the peak giving season. By standardizing driver schedules and applying automated face-detection filters, organizations can satisfy donor demands for proof without exposing private recipient features.",
    definition: "An operations methodology tailored for the extreme volume of daily Iftar deliveries and Suhoor distributions, prioritizing volunteer coordination and modesty-safe proof updates.",
    explanation: "Peak giving seasons like Ramadan introduce massive administrative burdens. Organizations receive hundreds of bank receipts daily while volunteers dispatch food packages in the field. Collecting delivery proof without structured review gates routinely results in sharing unblurred, undignified beneficiary photos, which violates modesty guidelines. Sidqly optimizes driver scheduling, dispatch tasking, and mobile uploads, instantly sanitizing raw imagery before donor updates. This ensures that food distribution is fast, efficient, highly responsive, and fully respectful of beneficiary modesty at all times.",
    workflow: [
      "Campaign Setup: Standardize ration targets and compile recipient coordinates.",
      "Sourcing check: Reconcile payments and place aggregate supplier orders.",
      "Optimize Route: Map driving paths programmatically to reduce volunteer travel times.",
      "Dispatch Drivers: Distribute isolated route checklists to volunteers' mobile browsers.",
      "Upload proof: Field workers photograph deliveries on-site without public exposure.",
      "Automatic blurring: System-rendered filters blur names and facial features instantly."
    ],
    examples: [
      "A community campaign deploys 50 drivers to deliver Iftar ration boxes, tracking completions in real-time without exposing general donor lists to drivers.",
      "An operations lead monitors daily distribution tallies, automatically compiling sanitized donor reports at sunset."
    ],
    faqs: [
      { question: "Do volunteers need an app to upload photos?", answer: "No, Sidqly delivers secure, mobile-friendly web links so field workers can submit proof directly without app installations." }
    ],
    author: "Logistics Sourcing Team",
    reviewer: "NGO Operations Audit Board",
    lastUpdated: "August 2026",
    svgIconName: "ramadan-campaign-flow"
  },
  {
    id: "a1",
    type: "article",
    slug: "manual-payment-verification-process",
    title: "Best Practices in Manual Payment Verification",
    focusKeyword: "payment verification process",
    directAnswer: "The manual payment verification process ensures that bank wire transfers, mobile deposits, and cash receipts are manually reconciled against actual bank statements before being confirmed. This prevents 'phantom' donations from distorting campaign balances and guarantees absolute bookkeeping integrity.",
    definition: "The internal accounting practice of matching submitted donor screenshots and reference IDs manually against corporate bank reports before campaign funding occurs.",
    explanation: "Many organizations automatically count a donation as received the moment a donor uploads a screenshot on a form. This opens the door to duplicate submissions, error-prone bank wire references, or fraud. Standardizing a separate verification queue secures the ledger. We help organizations enforce this double-entry compliance with side-by-side reconciliation boards.",
    workflow: [
      "Log Deposit Submission: Retrieve reference receipts from the intake queue.",
      "Audit statement: Finance check actual corporate bank lines manually.",
      "Confirm ledger line: Set status to confirmed, updating active campaign balances."
    ],
    examples: [
      "A mosque finance officer compares a submitted mobile transfer screenshot with the mosque's statement to confirm and allocate a $500 Zakat payment."
    ],
    faqs: [
      { question: "Is this automated?", answer: "No, Sidqly implements human-verified queues to guarantee that your treasurers retain total oversight of actual deposits." }
    ],
    author: "Sidqly Finance Team",
    reviewer: "Treasury Audit Lead",
    lastUpdated: "August 2026",
    svgIconName: "payment-verification"
  },
  {
    id: "g1",
    type: "glossary",
    slug: "what-is-tamleek",
    title: "Understanding Tamleek in Zakat Operations",
    focusKeyword: "what is Tamleek",
    directAnswer: "Tamleek is the Shariah requirement of transferring direct, unconditional ownership of Zakat assets to an eligible beneficiary. In digital Zakat operations, Tamleek requires explicit, signed handover logs to verify that ownership transfer has successfully occurred.",
    definition: "The religious and operational act of transferring total proprietary rights of Zakat funds or resources directly to the hands of an eligible recipient.",
    explanation: "Unlike voluntary Sadaqah, which can be spent on general community infrastructure (like building masjids or schools), Zakat requires direct transfer of wealth (Tamleek) to qualified individuals. Failing to establish this direct ownership renders the Zakat distribution invalid according to most Islamic scholars.",
    workflow: [
      "Screen Recipient: Confirm eligibility before disbursement.",
      "Direct Handover: Physically deliver resources or transfer funds directly.",
      "Log Confirmation: Verify recipient acceptance via signature or unique verification codes."
    ],
    examples: [
      "A casework committee records a physical cash aid handover, obtaining signed digital receipts to provide the Shariah board with proof of direct Tamleek."
    ],
    faqs: [
      { question: "Can Zakat pay for charity operating salaries?", answer: "Generally no, as Zakat requires direct transfer of ownership to eligible individuals. Voluntary Sadaqah is used for operations." }
    ],
    author: "Zakat Compliance Desk",
    reviewer: "Islamic Finance Scholar Board",
    lastUpdated: "August 2026"
  }
];
export default knowledgeHub;
