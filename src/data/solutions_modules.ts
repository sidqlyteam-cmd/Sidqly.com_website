export const modules = [
  {
    slug: "atiyat-box-management",
    category: "donations-funds",
    title: "Atiyat Box & Mosque Cash Donation Management",
    desc: "Dual-key physical donation box counting, tamper seal tracking, and cash-to-bank deposit reconciliation.",
    quickAnswer: "Sidqly's Atiyat Box Management module provides mosques and Islamic centers with a secure, auditable workflow for collecting, counting, and depositing physical cash donations with dual-trustee signoffs.",
    benefit: "Eliminates cash mishandling risks, enforces dual-key counting protocols, and creates an audit-ready bridge between physical cash boxes and bank deposits.",
    who: "Mosque trustees, treasury volunteers, finance committees, and custodial staff.",
    problem: "Untracked cash in Friday donation boxes, missing paper tally sheets, unverified cash-to-bank deposits, and donor skepticism regarding physical cash handling.",
    workflow: [
      "Trustees log scheduled opening of sealed Atiyat donation boxes",
      "Two authorized trustees enter unique PINs/signatures to verify physical seal integrity",
      "Cash is counted by currency denomination (bills and coins) on digital tally sheet",
      "Funds are categorized by donor intent (Zakat, Sadaqah, Mosque Construction, Utilities)",
      "System generates Cash Reconciliation Batch Voucher with unique serial barcode",
      "Bank deposit slip receipt is uploaded and verified against the batch total by senior treasurer"
    ],
    output: "Auditable Cash Reconciliation Batch Vouchers, denomination breakdown sheets, and bank deposit match logs.",
    disclaimer: "Sidqly provides administrative recording and dual-authorization software. Physical custody and banking of cash remain the direct responsibility of your organization.",
    faqs: [
      {
        question: "What is an Atiyat box in mosque administration?",
        answer: "An Atiyat box (from Arabic/Urdu عطیات, meaning donations or gifts) is a physical secure collection box mounted inside mosques and Islamic centers where worshippers drop cash, checks, and fitrah envelopes during daily prayers and Friday Jumu'ah."
      },
      {
        question: "How does Sidqly enforce the four-eyes principle on cash counting?",
        answer: "Sidqly requires two distinct trustee or committee logins to initiate and submit a cash counting session. Neither user can finalize the batch alone, ensuring strict dual-custody compliance."
      },
      {
        question: "Can Atiyat cash be separated between Zakat and general Sadaqah?",
        answer: "Yes. The digital counting form allows volunteers to record segregated totals for marked envelopes (Zakat, Fitrana, Sadqah) and general unmarked cash (Sadaqah/Mosque Maintenance), automatically creating separate ledger line items."
      }
    ],
    internalLinks: [
      { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
      { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
      { title: "AAOIFI Treasury Ledger", url: "/modules/aaoifi-treasury-ledger" },
      { title: "Reports and Board Packs", url: "/modules/reports-board-packs" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },

  {
    slug: "manual-payment-review",
    category: "donations-funds",
    title: "Manual Payment Review & Atiyat Cash Box Reconciliation",
    desc: "Human-verified bank transfers, screenshots, and mosque Atiyat cash box deposits.",
    quickAnswer: "Sidqly’s manual payment review workflow helps Islamic charities, mosques, and giving teams review donor payment proof before marking a donation, campaign contribution, or fulfillment request as approved.",
    benefit: "Sidqly helps teams record donation/payment submissions and manually review them before confirmation.",
    who: "Finance teams and admin staff.",
    problem: "Missed bank transfers, fake deposit slips, untracked cash collections in mosque donation boxes, and phantom donations inflating campaign reports.",
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
    category: "proof-privacy-trust",
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
    category: "donor-communication",
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
    category: "donations-funds",
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
    category: "donations-funds",
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
    category: "programs-fulfillment",
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
    category: "programs-fulfillment",
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
    category: "programs-fulfillment",
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
    category: "programs-fulfillment",
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
    category: "programs-fulfillment",
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
    category: "reporting-management",
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
    category: "donor-communication",
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
    category: "proof-privacy-trust",
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
    category: "reporting-management",
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
    category: "proof-privacy-trust",
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
    category: "reporting-management",
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
    category: "donor-communication",
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
    category: "launch-support",
    title: "Pilot Launch Support",
    desc: "Guided onboarding for starting your digital journey safely.",
    benefit: "Organizations can start with a pilot workflow before expanding.",
    who: "New organizations onboarding.",
    problem: "Overwhelming software rollouts that fail due to team confusion.",
    workflow: ["first campaign setup", "team onboarding", "first report generation", "expansion plan discussion"],
    output: "A safe, structured digital transition.",
    disclaimer: null
  },
  {
    slug: "khidmah-timebank",
    category: "community-empowerment",
    title: "Mosque Khidmah TimeBank (Cashless Skill Barter)",
    desc: "Interest-free mutual aid exchange where 1 hour of service = 1 TimeBank credit.",
    quickAnswer: "Sidqly's Mosque Khidmah TimeBank enables worshippers to exchange essential skills and services without cash. Every member's time is valued equally (1 hour = 1 credit) with oversight from the Mosque Welfare Committee.",
    benefit: "Empowers the congregation through cashless mutual aid, skill-sharing, and community service recognition.",
    who: "Mosque welfare committees, musallis, youth mentors, and skilled volunteers.",
    problem: "Community members face financial strain and cannot afford tutoring, legal advice, or home repairs, while valuable community skills remain untapped.",
    workflow: [
      "Musalli registers verified profile and offers skills (tutoring, plumbing, coding, counseling)",
      "Member requests assistance through the private community directory",
      "Service is fulfilled and hours logged digitally",
      "Both parties confirm completion with optional feedback",
      "TimeBank credits automatically credited (1 hr = 1 credit)",
      "Mosque Welfare Committee audits logs and awards volunteer recognition"
    ],
    output: "Verifiable cashless exchange ledger and volunteer service records.",
    disclaimer: "Sidqly provides administrative tracking for mutual service exchanges. Sidqly is not an employer, broker, or licensed contractor service.",
    faqs: [
      {
        question: "Can TimeBank credits be bought or sold for money?",
        answer: "No. Sidqly TimeBank is strictly non-monetary and interest-free, designed to uphold mutual brotherhood (Ukhuwah) in line with Shariah principles."
      },
      {
        question: "How does the mosque verify service quality?",
        answer: "Both giver and receiver sign off digitally on the completed exchange, and welfare admins can review any flagged reports."
      }
    ],
    internalLinks: [
      { title: "Dignity QR Vouchers", url: "/modules/dignity-qr-vouchers" },
      { title: "Maktaba Library Desk", url: "/modules/maktaba-library-desk" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },
  {
    slug: "ai-khutbah-reader",
    category: "worship-inclusion",
    title: "Live AI Multilingual Khutbah Reader",
    desc: "Real-time Friday sermon translation into 6 languages via Gemini AI on web and mobile.",
    quickAnswer: "Sidqly's Live AI Khutbah Reader translates Friday Jumu'ah sermons into English, Urdu, French, Arabic, Turkish, Bengali, and Somali in real time with synchronized mobile web reading.",
    benefit: "Ensures every congregant, new Muslim, and international worshipper understands the Khutbah live without hardware headsets.",
    who: "Imams, AV engineers, non-native speakers, converts, and youth.",
    problem: "Non-native speakers and new Muslims attend Friday prayers without understanding the sermon, missing out on spiritual guidance and community announcements.",
    workflow: [
      "Imam or admin paste or transcribe Khutbah text or stream live audio",
      "Gemini AI translates into 6 synchronized community languages in seconds",
      "Musallis scan a simple QR code at the sanctuary entrance (zero login required)",
      "Stealth mobile reader displays dark/light synchronized text with optional whisper audio",
      "Archives remain available for community study and reflection"
    ],
    output: "Live synchronized multilingual sermon stream and downloadable sermon archives.",
    disclaimer: "Sidqly AI translations are provided for comprehension support. Religious interpretations remain with the speaking Imam.",
    faqs: [
      {
        question: "Do congregants need to download an app or create an account?",
        answer: "No. Musallis simply scan a QR code on the sanctuary screen or noticeboard to open the live web reader in any smartphone browser."
      },
      {
        question: "Is there a distraction-free mode for the sanctuary?",
        answer: "Yes. The mobile reader includes a stealth OLED mode with high-contrast text and zero ads or notifications."
      }
    ],
    internalLinks: [
      { title: "Maktaba Library Desk", url: "/modules/maktaba-library-desk" },
      { title: "Islamic Daily Dashboard", url: "/islamic-daily-dashboard" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },
  {
    slug: "aaoifi-treasury-ledger",
    category: "governance-audit",
    title: "Institutional 4-Eyes AAOIFI Treasury & Partitioned Zakat",
    desc: "Maker-Checker dual authorization and strict mathematical fund segregation meeting AAOIFI standards.",
    quickAnswer: "Sidqly's 4-Eyes AAOIFI Treasury provides dual-signature authorization for all disbursements and strict mathematical separation between Zakat and operational funds.",
    benefit: "Guarantees zero fund leakage and protects board trustees with immutable audit trails.",
    who: "Mosque treasurers, finance staff, board trustees, and Shariah auditors.",
    problem: "Single-person signoffs, co-mingling of Zakat with mosque overhead, lost bank receipts, and lack of audit-ready compliance records.",
    workflow: [
      "Staff member initiates expense or Zakat disbursement request (Maker)",
      "System verifies adequate balance in mathematically isolated Zakat/Sadaqah sub-ledger",
      "Second authorized board trustee or treasurer reviews and approves with signature (Checker)",
      "Disbursement marked complete with bank reference or cheque upload",
      "Immutable AAOIFI-compliant transaction record logged with timestamp"
    ],
    output: "Audit-ready dual-signed disbursement records and fund-segregated ledgers.",
    disclaimer: "Sidqly provides operational dual-approval workflows and bookkeeping tracking. Sidqly is not a chartered accounting firm or bank.",
    faqs: [
      {
        question: "What is the 4-Eyes principle?",
        answer: "The 4-Eyes (Maker-Checker) principle requires that at least two distinct individuals approve every financial disbursement, preventing fraud and unauthorized spending."
      },
      {
        question: "Does Sidqly physically hold or move the money?",
        answer: "No. Sidqly is a pure SaaS ledger and approval tracker. All funds remain in your organization's own bank accounts."
      }
    ],
    internalLinks: [
      { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
      { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
      { title: "Pricing", url: "/pricing" }
    ]
  },
  {
    slug: "dignity-qr-vouchers",
    category: "dignity-relief",
    title: "Zero-Exposure Dignity Aid Intake & Merchant QR Vouchers",
    desc: "Confidential family relief with web merchant terminals at local halal grocers and pharmacies.",
    quickAnswer: "Sidqly's Dignity QR Voucher module allows vulnerable families to receive digital aid vouchers on their phone, redeemable at partner halal grocers with zero cash handling and zero public exposure.",
    benefit: "Protects recipient honor (Izzah) and eliminates humiliating food lines and photo ops.",
    who: "Welfare committees, beneficiary families, and partner halal grocers.",
    problem: "Needy families standing in public lines, camera exposure for proof, and unhygienic or chaotic cash handouts.",
    workflow: [
      "Family submits private intake form through secure online portal",
      "Welfare committee reviews application under confidential alias",
      "Approved family receives unique encrypted QR voucher via SMS or web pass",
      "Family shops with dignity at local partner grocery store or pharmacy",
      "Merchant scans QR voucher on their mobile browser to redeem approved amount",
      "Mosque settles invoice with merchant using 4-Eyes Treasury"
    ],
    output: "Digital redemption receipts and sanitized, dignity-safe proof reports.",
    disclaimer: "Sidqly provides voucher software. Vendor agreements and redemption policies are managed directly by your organization.",
    faqs: [
      {
        question: "Do merchants need specialized point-of-sale hardware?",
        answer: "No. Partner grocers simply open Sidqly's merchant web scanner on any smartphone or tablet to validate vouchers instantly."
      },
      {
        question: "Are recipient identities visible to the public or donors?",
        answer: "Never. Recipient names and faces are strictly quarantined. Donors only see sanitized categories, items provided, and redacted receipts."
      }
    ],
    internalLinks: [
      { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
      { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },
  {
    slug: "corporate-csr-matching",
    category: "corporate-partnerships",
    title: "Corporate CSR Matching & B2B Tax Portal",
    desc: "Automated 1:1 or 2:1 corporate gift matching with instant B2B tax certificates.",
    quickAnswer: "Sidqly's Corporate CSR Matching module connects local Muslim-owned businesses and corporate employers directly to mosque and charity campaigns with automated 1:1 matching rules and tax certificates.",
    benefit: "Doubles giving volume and unlocks corporate community development budgets.",
    who: "Corporate donors, business owners, mosque fundraising chairs, and finance teams.",
    problem: "Chasing matching gifts manually through spreadsheets, missing corporate deadlines, and failing to provide institutional tax packages.",
    workflow: [
      "Corporate partner registers match profile with budget cap and match ratio (1:1 or 2:1)",
      "Employees or congregants donate and select their matching employer",
      "Corporate portal automatically queues matching donation against pledge budget",
      "Corporate admin reviews and releases match funding in single monthly batch",
      "Instant B2B tax receipts and comprehensive impact board pack generated"
    ],
    output: "Automated corporate matching ledgers and downloadable institutional tax packets.",
    disclaimer: "Tax deductibility depends on local charity registration and tax laws in your jurisdiction.",
    faqs: [
      {
        question: "Can companies set a maximum ceiling on their match budget?",
        answer: "Yes. Corporate partners set precise limits (e.g., up to $25,000 for Ramadan) and the system automatically halts matching when reached."
      }
    ],
    internalLinks: [
      { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
      { title: "Reports and Board Packs", url: "/modules/reports-board-packs" },
      { title: "Contact Sales", url: "/contact-sales" }
    ]
  },
  {
    slug: "maktaba-library-desk",
    category: "education-maktaba",
    title: "Maktaba Digital Library & Quiet Study Reservations",
    desc: "Digital Islamic book catalog, QR checkouts, and quiet study desk booking with Wi-Fi credentials.",
    quickAnswer: "Sidqly's Maktaba module transforms the mosque library into a modern intellectual center with searchable book catalogs, mobile barcode lending, and bookable study carrel desks.",
    benefit: "Prevents book loss and provides students with structured quiet study spaces.",
    who: "Mosque librarians, students, researchers, youth, and educators.",
    problem: "Uncataloged Islamic books disappearing from mosque shelves, disorganized study areas, and lack of youth study engagement.",
    workflow: [
      "Librarian catalogs books with ISBN lookup or custom Islamic shelf tags",
      "Musalli browses digital catalog on their phone and requests book",
      "Simple QR scan checks book out with automatic due-date reminders via email/SMS",
      "Students book quiet study carrel desks with auto-generated Wi-Fi access codes",
      "Return scanned back into shelf inventory with dignity-safe fine waiver options"
    ],
    output: "Live book circulation records, carrel desk schedules, and catalog search portal.",
    disclaimer: null,
    faqs: [
      {
        question: "Does Maktaba support Arabic and Urdu titles?",
        answer: "Yes. The catalog has native multilingual search supporting Arabic script, Urdu nastaliq, transliteration, and English."
      }
    ],
    internalLinks: [
      { title: "Khidmah TimeBank", url: "/modules/khidmah-timebank" },
      { title: "AI Khutbah Reader", url: "/modules/ai-khutbah-reader" },
      { title: "Book Demo", url: "/book-demo" }
    ]
  },


];

export const solutions = [
  { slug: "mosques", title: "Mosques", desc: "Managing Friday collections and community funds.", who: ["Mosque admins", "Imams"], problem: ["Unorganized donation tracking"], benefit: ["Centralized fund management"], workflow: ["Collection", "Review", "Reporting"], output: ["Financial summaries"], relevantModules: [] },
  { slug: "islamic-charities", title: "Islamic Charities", desc: "Audit-ready operations for registered organizations.", who: ["Charity managers"], problem: ["Lack of clear audit trails"], benefit: ["Audit-ready records"], workflow: ["Submission", "Approval", "Reporting"], output: ["Board-ready reports"], relevantModules: [] },
  { slug: "qurbani-organizers", title: "Qurbani Organizers", desc: "Manage Qurbani donor records, payment proof, animal shares, fulfillment updates, and dignity-safe reporting with Sidqly.", who: ["Qurbani teams"], problem: ["Chaos matching donors to shares"], benefit: ["End-to-end tracking"], workflow: ["Order Received", "Slaughtered", "Distributed"], output: ["Donor certificates"], relevantModules: [] },
  { slug: "sadaqah-campaign-teams", title: "Sadaqah Campaign Teams", desc: "Run Sadaqah campaigns with verified payment review, donor tracking, proof approval, dignity-safe updates, and transparent reporting.", who: ["Logistics teams"], problem: ["High volume tracking"], benefit: ["Scalable batch processing"], workflow: ["Route assignment", "Daily report"], output: ["Distribution logs"], relevantModules: [] },
  { slug: "zakat-teams", title: "Zakat Teams", desc: "Specialized workflows for eligible Zakat distribution.", who: ["Zakat committees"], problem: ["Co-mingling Zakat with Sadaqah"], benefit: ["Logical fund separation"], workflow: ["Case intake", "Verification", "Disbursement"], output: ["Eligibility reports"], relevantModules: [] },
  { slug: "corporate-csr-zakat", title: "Corporate CSR / Zakat", desc: "Transparency for corporate community investments.", who: ["Corporate liaisons"], problem: ["Sponsors demanding detailed impact"], benefit: ["Corporate-safe reporting"], workflow: ["Sponsored campaign", "Impact proof", "Report generation"], output: ["Professional PDF summaries"], relevantModules: [] },
  { slug: "vendors", title: "Vendors & Partners", desc: "Portals for fulfillment and field delivery partners.", who: ["Vendors"], problem: ["Chasing proof via WhatsApp"], benefit: ["Centralized vendor portals"], workflow: ["Task assignment", "Acceptance", "Proof upload"], output: ["Vendor proof collection"], relevantModules: [] },
  { slug: "volunteers", title: "Volunteers", desc: "Tools for distributed team task management.", who: ["Volunteer managers"], problem: ["Unclear field assignments"], benefit: ["Clear task lists"], workflow: ["Task assignment", "Instructions", "Completion status"], output: ["Activity logs"], relevantModules: [] },
  { slug: "community-welfare-teams", title: "Community Welfare", desc: "Organized local support and case management.", who: ["Welfare officers"], problem: ["Handling sensitive documents insecurely"], benefit: ["Protected case review"], workflow: ["Protected review", "Approval", "Anonymization"], output: ["Private requester queues"], relevantModules: [] },
  { slug: "donors", title: "Donors", desc: "A trustworthy experience for giving with proof.", who: ["Donors"], problem: ["Demanding proof manually"], benefit: ["Dignified automatic updates"], workflow: ["Payment", "Processing", "Impact proof received"], output: ["Donor-safe updates"], relevantModules: [] }
];
