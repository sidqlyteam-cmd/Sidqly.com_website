export const modules = [
  {
    slug: "manual-payment-review",
    title: "Manual Payment Review",
    desc: "Human-verified bank transfers and screenshots.",
    benefit: "Sidqly helps teams record donation/payment submissions and manually review them before confirmation.",
    who: "Finance teams and admin staff.",
    problem: "Missed bank transfers, fake screenshots, and phantom donations inflating reports.",
    workflow: ["Payment submitted", "Reference/screenshot recorded", "Finance reviewer checks it", "Approved, rejected, or correction requested", "Status becomes visible to authorized team", "Audit trail remains available"],
    output: "Clear payment confirmation records before work moves forward.",
    disclaimer: "Sidqly supports manual review. It does not claim automatic payment verification unless configured separately."
  },
  {
    slug: "proof-trust-engine",
    title: "Proof Trust Engine",
    desc: "Multi-stage field evidence verification.",
    benefit: "Teams upload proof, reviewers check it, and only donor-safe proof is shared externally.",
    who: "Field operators and management.",
    problem: "Unsafe sharing of recipient faces on social media or direct to donors without review.",
    workflow: ["Staff/vendor/volunteer uploads proof", "Internal reviewer checks proof", "Private data is reviewed", "Donor-safe version is approved", "Donor/corporate-safe update is shared", "Internal record remains protected"],
    output: "Proof can be reviewed before donors or sponsors see it.",
    disclaimer: null
  },
  {
    slug: "donor-safe-updates",
    title: "Donor-Safe Impact Updates",
    desc: "Dignified updates with automated face-blurring.",
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
    benefit: "Zakat workflows can be tracked separately from Sadaqah and other funds.",
    who: "Zakat committees and scholars.",
    problem: "Accidentally mixing Zakat with general charity funds or operating expenses.",
    workflow: ["fund type tagging", "eligibility review status", "reviewer notes", "disbursement tracking", "reporting"],
    output: "Audit-ready Zakat separation logs.",
    disclaimer: "Zakat eligibility decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team."
  },
  {
    slug: "sadaqah-campaigns",
    title: "Sadaqah/Sadqa Campaigns",
    desc: "Versatile tracking for projects and emergency aid.",
    benefit: "Sadaqah/Sadqa, Khairat, and Amanah campaigns move clearly from contribution to delivery proof.",
    who: "Campaign managers.",
    problem: "Losing track of specific project funding (e.g., water wells) across WhatsApp messages.",
    workflow: ["campaign setup", "donation/payment review", "assignment", "delivery", "proof upload", "approval", "donor update"],
    output: "Verified Sadaqah delivery records.",
    disclaimer: null
  },
  {
    slug: "qurbani-lifecycle",
    title: "Qurbani/Udhiya Lifecycle",
    desc: "End-to-end share allocation and distribution tracking.",
    benefit: "Qurbani/Udhiya operations can be tracked from order/payment to slaughter, distribution, proof, and certificate.",
    who: "Qurbani providers and field teams.",
    problem: "Chaos during Eid matching donor shares to specific animals and vendors.",
    workflow: ["Order Received", "Payment Under Review", "Share Assigned", "Vendor Assigned", "Slaughter Scheduled", "Slaughter Completed", "Distribution In Progress", "Proof Uploaded", "Proof Approved", "Certificate Ready", "Closed"],
    output: "End-to-end share tracking and donor certificates.",
    disclaimer: null
  },
  {
    slug: "ramadan-meals-rations",
    title: "Ramadan/Ramzan Meals and Ration Packs",
    desc: "Scalable workflows for peak holy month distribution.",
    benefit: "Ramadan/Ramzan workflows can track Iftar, Suhoor/Sehri, ration packs, batches, volunteers, vendors, and reports.",
    who: "Ramadan logistics coordinators.",
    problem: "Overwhelming volume of daily Iftar distribution tracking.",
    workflow: ["meal/ration batch", "route/team assignment", "delivery proof", "daily report", "donor-safe summary"],
    output: "Daily verified distribution logs.",
    disclaimer: null
  },
  {
    slug: "charity-request-intake",
    title: "Charity Request Intake",
    desc: "Dignified screening for community aid applications.",
    benefit: "Organizations can receive and review support requests while protecting sensitive information.",
    who: "Community welfare officers.",
    problem: "Handling sensitive medical/financial documents via insecure emails or paper folders.",
    workflow: ["protected request review", "hardship/category classification", "internal notes", "document privacy checks", "approved anonymized donor-safe summary"],
    output: "Organized, private requester queues.",
    disclaimer: null
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
    benefit: "Sidqly helps prepare structured summaries for leadership, donors, sponsors, and internal review.",
    who: "Board members and executives.",
    problem: "Spending days compiling data from multiple spreadsheets for board meetings.",
    workflow: ["campaign summary", "payment report", "proof log", "vendor/volunteer activity", "corporate/sponsor metrics", "board summary generation"],
    output: "Instant executive visibility.",
    disclaimer: null
  },
  {
    slug: "privacy-dignity-controls",
    title: "Privacy and Dignity Controls",
    desc: "Granular data boundaries and access logs.",
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
    problem: "Inconsistent and unprofessional donor follow-ups.",
    workflow: ["donor status updates", "approved proof sharing", "receipts/certificates dispatch", "safe impact messages delivered"],
    output: "Professional donor touchpoints.",
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
  { slug: "mosques", title: "Mosques", desc: "Managing Friday collections and community funds." },
  { slug: "islamic-charities", title: "Islamic Charities", desc: "Audit-ready operations for registered organizations." },
  { slug: "qurbani-providers", title: "Qurbani Providers", desc: "End-to-end management for global animal shares." },
  { slug: "ramadan-food-drives", title: "Ramadan Food Drives", desc: "Logistics for large-scale meal and ration distribution." },
  { slug: "zakat-teams", title: "Zakat Teams", desc: "Specialized workflows for eligible Zakat distribution." },
  { slug: "corporate-csr-zakat", title: "Corporate CSR / Zakat", desc: "Transparency for corporate community investments." },
  { slug: "vendors", title: "Vendors & Partners", desc: "Portals for fulfillment and field delivery partners." },
  { slug: "volunteers", title: "Volunteers", desc: "Tools for distributed team task management." },
  { slug: "community-welfare-teams", title: "Community Welfare", desc: "Organized local support and case management." },
  { slug: "donors", title: "Donors", desc: "A trustworthy experience for giving with proof." }
];
