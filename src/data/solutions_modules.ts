export const modules = [
  {
    slug: "manual-payment-review",
    title: "Manual Payment Review for Verified Donations",
    desc: "Human-verified bank transfers and screenshots.",
    quickAnswer: "Sidqly’s manual payment review workflow helps Islamic charities, mosques, and giving teams review donor payment proof before marking a donation, campaign contribution, or fulfillment request as approved.",
    benefit: "Sidqly helps teams record donation/payment submissions and manually review them before confirmation.",
    who: "Finance teams and admin staff.",
    problem: "Missed bank transfers, fake or duplicate screenshots, missing donor records, and phantom donations inflating campaign reports.",
    workflow: ["Payment submitted via form", "Bank reference or screenshot recorded", "Finance reviewer checks bank statement manually", "Approved, rejected, or correction requested with admin notes", "Status becomes visible to authorized team", "Permanent audit trail remains available"],
    output: "Clear payment confirmation records and campaign finance clarity before work moves forward.",
    disclaimer: "Sidqly supports manual review. It does not claim automatic payment verification unless configured separately.",
    faqs: [
      {
        question: "Does Sidqly automatically verify bank transfers?",
        answer: "No, Sidqly is designed for manual review. It provides the structured queue and audit trail for your finance team to review screenshots and references against your actual bank statement."
      },
      {
        question: "Can we track partial payments?",
        answer: "Yes, reviewers can approve partial amounts and leave admin notes explaining the discrepancy, keeping the audit trail clear."
      }
    ],
    internalLinks: [
      { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
      { title: "Receipts and Certificates", url: "/modules/receipts-certificates" },
      { title: "Reports and Board Packs", url: "/modules/reports-board-packs" },
      { title: "Pricing", url: "/pricing" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },
  {
    slug: "proof-trust-engine",
    title: "Proof Trust Engine",
    desc: "Multi-stage field evidence verification.",
    quickAnswer: "Sidqly's Proof Trust Engine helps organizations protect recipient dignity by reviewing and blurring photos before they are shared with donors or sponsors.",
    benefit: "Teams upload proof, reviewers check it, and only donor-safe proof is shared externally.",
    who: "Field operators and management.",
    problem: "Unsafe sharing of recipient faces on social media or direct to donors without review.",
    workflow: ["Staff/vendor/volunteer uploads proof", "Internal reviewer checks proof", "Private data is reviewed", "Donor-safe version is approved", "Donor/corporate-safe update is shared", "Internal record remains protected"],
    output: "Proof can be reviewed before donors or sponsors see it.",
    disclaimer: null,
    internalLinks: [
      { title: "Donor-Safe Impact Updates", url: "/modules/donor-safe-updates" },
      { title: "Privacy and Dignity Controls", url: "/modules/privacy-dignity-controls" },
      { title: "QR/Code Verification", url: "/modules/qr-code-verification" },
      { title: "Qurbani/Udhiya Lifecycle", url: "/modules/qurbani-lifecycle" }
    ]
  },
  {
    slug: "donor-safe-updates",
    title: "Donor-Safe Impact Updates",
    desc: "Dignified updates with automated face-blurring.",
    quickAnswer: "Sidqly's donor-safe updates allow your team to send impact reports and fulfillment proof to donors using private, restricted links that protect sensitive data.",
    benefit: "Donors receive approved updates without exposing private recipient data.",
    who: "Donor relations teams.",
    problem: "Donors demand proof, but providing it manually risks violating beneficiary privacy.",
    workflow: ["proof approved", "faces blurred/encrypted", "secure link generated", "donor notified", "safe view only"],
    output: "Donors get proof without compromising recipient dignity.",
    disclaimer: null
  },
  {
    slug: "zakat-fund-separation",
    title: "Zakat Fund Separation",
    desc: "Logical filters to keep Zakat and Sadaqah distinct.",
    quickAnswer: "Sidqly provides strict operational filters to keep Zakat and Sadaqah funds clearly separated in reporting and fulfillment workflows.",
    benefit: "Zakat workflows can be tracked separately from Sadaqah and other funds.",
    who: "Zakat committees and scholars.",
    problem: "Accidentally mixing Zakat with general charity funds or operating expenses, losing track of specific campaign tagging and fund purpose.",
    workflow: ["Fund type tagging (Zakat vs Sadaqah)", "Eligibility review status logged by specific review roles", "Reviewer notes and conditions added", "Disbursement tracking against specific Zakat targets", "Separated reporting"],
    output: "Audit-ready Zakat separation logs.",
    disclaimer: "Sidqly supports operational fund separation and reporting. Religious rulings and eligibility decisions should remain with the organization’s authorized scholars, advisors, or responsible review team.",
    keywords: ["Zakat", "Zakaat", "Zakat fund separation", "Zakat tracking", "Zakat committee", "eligibility review support"],
    internalLinks: [
      { title: "Charity Request Intake", url: "/modules/charity-request-intake" },
      { title: "Audit-Ready Records", url: "/modules/audit-ready-records" },
      { title: "Reports and Board Packs", url: "/modules/reports-board-packs" },
      { title: "Corporate CSR/Zakat Reporting", url: "/modules/corporate-csr-zakat" }
    ]
  },
  {
    slug: "sadaqah-campaigns",
    title: "Sadaqah/Sadqa Campaigns",
    desc: "Versatile tracking for projects and emergency aid.",
    quickAnswer: "Sidqly organizes Sadaqah campaigns by tracking general giving goals, volunteer coordination, and non-restricted fund allocation in real time.",
    benefit: "Sadaqah/Sadqa, Khairat, and Amanah campaigns move clearly from contribution to delivery proof.",
    who: "Campaign managers.",
    problem: "Losing track of specific project funding (e.g., water wells) across WhatsApp messages.",
    workflow: ["campaign setup", "donation/payment review", "assignment", "delivery", "proof upload", "approval", "donor update"],
    output: "Verified Sadaqah delivery records.",
    disclaimer: null,
    keywords: ["Sadqa", "Sadaqah", "Sadqa fitr", "Sadqa e Fitr", "Khairat", "Amanah", "family support", "donor-safe proof"]
  },
  {
    slug: "qurbani-lifecycle",
    title: "Qurbani/Udhiya Lifecycle",
    desc: "End-to-end share allocation and distribution tracking.",
    quickAnswer: "Sidqly tracks Qurbani from donor payment and share assignment to vendor fulfillment and verified field proof.",
    benefit: "Qurbani/Udhiya operations can be tracked from order/payment to slaughter, distribution, proof, and certificate.",
    who: "Qurbani providers and field teams.",
    problem: "Chaos during Eid matching donor shares to specific animals and vendors.",
    workflow: ["Order Received", "Payment Under Review", "Share Assigned", "Vendor Assigned", "Slaughter Scheduled", "Slaughter Completed", "Distribution In Progress", "Proof Uploaded", "Proof Approved", "Certificate Ready", "Closed"],
    output: "End-to-end share tracking and donor certificates.",
    disclaimer: "No. Sidqly supports operational tracking and reporting. Religious decisions remain with the organization's authorized reviewers, scholars, or policy team.",
    keywords: ["Qurbani 2026", "Eid ul Adha", "Bakra Eid", "Qurbani order tracking", "Qurbani certificate", "Qurbani proof", "Qurbani distribution"],
    internalLinks: [
      { title: "Vendor Fulfillment", url: "/modules/vendor-fulfillment" },
      { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
      { title: "Receipts and Certificates", url: "/modules/receipts-certificates" },
      { title: "Donor Communication", url: "/modules/donor-communication" }
    ]
  },
  {
    slug: "ramadan-meals-rations",
    title: "Ramadan/Ramzan Meals and Ration Packs",
    desc: "Scalable workflows for peak holy month distribution.",
    quickAnswer: "Sidqly’s Ramadan module coordinates ration pack distribution, Iftar scheduling, and volunteer tasks with verifiable field tracking.",
    benefit: "Ramadan/Ramzan workflows can track Iftar, Suhoor/Sehri, ration packs, batches, volunteers, vendors, and reports.",
    who: "Ramadan logistics coordinators.",
    problem: "Overwhelming volume of daily Iftar distribution tracking.",
    workflow: ["meal/ration batch", "route/team assignment", "delivery proof", "daily report", "donor-safe summary"],
    output: "Daily verified distribution logs.",
    disclaimer: null,
    keywords: ["Ramadan 2026", "Iftar distribution", "Ramadan ration packs", "Iftar meals", "Suhoor/Sehri support", "food packs", "daily Ramadan reports"]
  },
  {
    slug: "charity-request-intake",
    title: "Charity Request Intake",
    desc: "Dignified screening for community aid applications.",
    benefit: "Organizations can receive and review support requests while protecting sensitive information.",
    who: "Community welfare officers.",
    problem: "Handling sensitive beneficiary medical/financial documents via insecure emails or paper folders, and disorganized eligibility review.",
    workflow: ["Dignity-safe application received", "Sensitive documents attached securely", "Reviewer assigned by staff", "Eligibility reviewed in private queue", "Approval status updated with notes"],
    output: "A private, tracked intake queue with protected document privacy.",
    disclaimer: null,
    keywords: ["family support", "request intake", "beneficiary privacy", "recipient dignity", "hardship review", "community welfare"]
  },
  {
    slug: "vendor-fulfillment",
    title: "Vendor Fulfillment",
    desc: "Collaborative portal for fulfillment partners.",
    benefit: "Vendors can receive tasks, update status, upload proof, and report issues.",
    who: "External partners and slaughterhouses.",
    problem: "Chasing vendors via WhatsApp for delivery photos.",
    workflow: ["task assignment", "acceptance", "delivery instructions", "proof upload", "issue reporting"],
    output: "Centralized vendor proof collection.",
    disclaimer: null
  },
  {
    slug: "volunteer-coordination",
    title: "Volunteer Coordination",
    desc: "Shift and task management for field teams.",
    benefit: "Volunteers can receive assignments and complete delivery/service tasks with proof instructions.",
    who: "Volunteer managers.",
    problem: "Unclear volunteer assignments and lost field updates.",
    workflow: ["volunteer task list", "delivery instructions", "proof guidance", "issue reporting", "completion status"],
    output: "Structured volunteer deployment.",
    disclaimer: null
  },
  {
    slug: "corporate-csr-zakat",
    title: "Corporate CSR/Zakat Reporting",
    desc: "Board-ready reports for institutional sponsors.",
    benefit: "Corporate sponsors can receive safe impact summaries without exposing private recipient data.",
    who: "Corporate liaisons.",
    problem: "Corporate sponsors demanding detailed impact reports that charities struggle to format securely.",
    workflow: ["sponsored campaigns", "corporate-safe reporting", "sponsor visibility check", "no private recipient exposure", "board-ready summaries"],
    output: "Professional PDF impact summaries.",
    disclaimer: null
  },
  {
    slug: "receipts-certificates",
    title: "Receipts and Certificates",
    desc: "Automated, branded donor documents.",
    benefit: "Organizations can prepare professional receipts and certificates where applicable.",
    who: "Finance and donor relations.",
    problem: "Manually generating and emailing hundreds of PDF receipts.",
    workflow: ["reference IDs generated", "campaign/service noted", "date and amount (if applicable) logged", "verification codes/QR created", "organization branding applied"],
    output: "Automated, verifiable documents.",
    disclaimer: null
  },
  {
    slug: "qr-code-verification",
    title: "QR/Code Verification",
    desc: "Instant validity checks for issued records.",
    benefit: "Receipts, certificates, and selected proof items can be verified public-safely.",
    who: "Donors and auditors.",
    problem: "Fake receipts or inability to verify if an impact report is authentic.",
    workflow: ["verification code generated", "QR scan executed", "public-safe status displayed", "no sensitive details exposed"],
    output: "Instant document authentication.",
    disclaimer: null
  },
  {
    slug: "reports-board-packs",
    title: "Reports and Board Packs",
    desc: "One-click operational and financial summaries.",
    quickAnswer: "Sidqly generates board-ready reports summarizing Zakat distributions, Sadaqah totals, and operational metrics with full audit trails.",
    benefit: "Sidqly helps prepare structured summaries for leadership, donors, sponsors, and internal review.",
    who: "Board members and executives.",
    problem: "Spending days compiling data from multiple spreadsheets, creating reporting risk, and struggling to summarize proof reviews for board meetings.",
    workflow: ["Data entered and approved daily", "Platform structures donor summaries and fund reports", "User selects date range or campaign summary", "Audit-ready leadership pack generated", "Spreadsheet work drastically reduced"],
    output: "Quick, structured visibility and audit-ready board packs.",
    disclaimer: null
  },
  {
    slug: "privacy-dignity-controls",
    title: "Privacy and Dignity Controls",
    desc: "Granular data boundaries and access logs.",
    quickAnswer: "Sidqly enforces dignity controls like automated face-blurring and strict access roles to ensure charity requests and recipient identities are never exposed inappropriately.",
    benefit: "Sensitive recipient/requester details remain protected and are not shown to donors by default.",
    who: "Compliance officers.",
    problem: "Accidental leaks of private beneficiary data to the public.",
    workflow: ["internal-only labeling", "donor-safe classification", "corporate-safe grouping", "proof review gates", "approval boundaries"],
    output: "Strict data compliance and dignity protection.",
    disclaimer: null
  },
  {
    slug: "audit-ready-records",
    title: "Audit-Ready Records",
    desc: "Comprehensive action logs for compliance teams.",
    quickAnswer: "Sidqly maintains a permanent log of all approvals, proof uploads, and fund separations to ensure compliance during internal or external reviews.",
    benefit: "Teams can maintain clearer records for review, board discussions, and operational accountability.",
    who: "Auditors and finance teams.",
    problem: "Inability to prove who approved a specific payment or Zakat case.",
    workflow: ["payment status history logged", "proof status history tracked", "task history recorded", "reviewer notes stored", "report exports enabled"],
    output: "Timestamped accountability logs.",
    disclaimer: null
  },
  {
    slug: "donor-communication",
    title: "Donor Communication",
    desc: "Automated but dignified recipient updates.",
    benefit: "Donor updates can be clearer, safer, and more professional.",
    who: "Marketing and donor relations.",
    problem: "Inconsistent and unprofessional donor follow-ups, or sharing unapproved proof because it's too hard to segment who gave to what.",
    workflow: ["Campaign selected", "Proof approval completed before sharing", "Dignity-safe update drafted", "Audience segmented automatically", "Receipts and campaign progress updates sent"],
    output: "Improved donor trust and dignity-safe follow-ups.",
    disclaimer: null
  },
  {
    slug: "pilot-launch-support",
    title: "Pilot Launch Support",
    desc: "Guided onboarding for starting your digital journey safely.",
    benefit: "Organizations can start with a pilot workflow before expanding.",
    who: "New organizations onboarding.",
    problem: "Overwhelming software rollouts that fail due to team confusion.",
    workflow: ["first campaign setup", "team onboarding", "first report generation", "expansion plan discussion"],
    output: "A safe, structured digital transition.",
    disclaimer: null
  }
];

export const solutions = [
  { slug: "mosques", title: "Mosques", desc: "Managing Friday collections and community funds.", who: ["Mosque admins", "Imams"], problem: ["Unorganized donation tracking"], benefit: ["Centralized fund management"], workflow: ["Collection", "Review", "Reporting"], output: ["Financial summaries"], relevantModules: [] },
  { slug: "islamic-charities", title: "Islamic Charities", desc: "Audit-ready operations for registered organizations.", who: ["Charity managers"], problem: ["Lack of clear audit trails"], benefit: ["Audit-ready records"], workflow: ["Submission", "Approval", "Reporting"], output: ["Board-ready reports"], relevantModules: [] },
  { slug: "qurbani-organizers", title: "Qurbani Organizers", desc: "Manage Qurbani donor records, payment proof, animal shares, fulfillment updates, and dignity-safe reporting with Sidqly.", who: ["Qurbani teams"], problem: ["Chaos matching donors to shares"], benefit: ["End-to-end tracking"], workflow: ["Order Received", "Slaughtered", "Distributed"], output: ["Donor certificates"], relevantModules: [] },
  { slug: "sadaqah-campaign-teams", title: "Sadaqah Campaign Teams", desc: "Run Sadaqah campaigns with verified payment review, donor tracking, proof approval, dignity-safe updates, and transparent reporting.", who: ["Logistics teams"], problem: ["High volume tracking"], benefit: ["Scalable batch processing"], workflow: ["Route assignment", "Delivery proof", "Daily report"], output: ["Distribution logs"], relevantModules: [] },
  { slug: "zakat-teams", title: "Zakat Teams", desc: "Specialized workflows for eligible Zakat distribution.", who: ["Zakat committees"], problem: ["Co-mingling Zakat with Sadaqah"], benefit: ["Logical fund separation"], workflow: ["Case intake", "Verification", "Disbursement"], output: ["Eligibility reports"], relevantModules: [] },
  { slug: "corporate-csr-zakat", title: "Corporate CSR / Zakat", desc: "Transparency for corporate community investments.", who: ["Corporate liaisons"], problem: ["Sponsors demanding detailed impact"], benefit: ["Corporate-safe reporting"], workflow: ["Sponsored campaign", "Impact proof", "Report generation"], output: ["Professional PDF summaries"], relevantModules: [] },
  { slug: "vendors", title: "Vendors & Partners", desc: "Portals for fulfillment and field delivery partners.", who: ["Vendors"], problem: ["Chasing proof via WhatsApp"], benefit: ["Centralized vendor portals"], workflow: ["Task assignment", "Acceptance", "Proof upload"], output: ["Vendor proof collection"], relevantModules: [] },
  { slug: "volunteers", title: "Volunteers", desc: "Tools for distributed team task management.", who: ["Volunteer managers"], problem: ["Unclear field assignments"], benefit: ["Clear task lists"], workflow: ["Task assignment", "Instructions", "Completion status"], output: ["Activity logs"], relevantModules: [] },
  { slug: "community-welfare-teams", title: "Community Welfare", desc: "Organized local support and case management.", who: ["Welfare officers"], problem: ["Handling sensitive documents insecurely"], benefit: ["Protected case review"], workflow: ["Protected review", "Approval", "Anonymization"], output: ["Private requester queues"], relevantModules: [] },
  { slug: "donors", title: "Donors", desc: "A trustworthy experience for giving with proof.", who: ["Donors"], problem: ["Demanding proof manually"], benefit: ["Dignified automatic updates"], workflow: ["Payment", "Processing", "Impact proof received"], output: ["Donor-safe updates"], relevantModules: [] }
];
