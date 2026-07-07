export interface ComparisonData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    quickAnswer: string;
    audience: string[];
    oldWorksFor: string;
    oldDifficultWhen: string;
    sidqlyImproves: string;
    notRightFit: string;
    features: { name: string; old: string; sidqly: string; }[];
    workflow: { step: string; old: string; sidqly: string; }[];
    trustConsiderations: string;
    reportingConsiderations: string;
    faqs: { question: string; answer: string }[];
    relatedModules: { title: string; url: string }[];
    relatedUseCases: { title: string; url: string }[];
    cta: string;
}

export const comparisons: ComparisonData[] = [
    {
        slug: "sidqly-vs-spreadsheets",
        title: "Sidqly vs Spreadsheets for Islamic Charity Operations",
        metaTitle: "Sidqly vs Spreadsheets | Verified Giving Software",
        metaDescription: "Compare Sidqly with spreadsheets for managing Islamic charity operations, Zakat funds, and Qurbani workflows.",
        h1: "Sidqly vs Spreadsheets for Islamic Charity Operations",
        quickAnswer: "Sidqly replaces manual spreadsheets with a structured, verified giving platform that includes built-in payment review queues, dignity-safe proof tracking, and automated board reporting. It is useful when teams need clearer records, safer proof handling, and more structured donor communication.",
        audience: ["Mosque admins", "Charity operations teams", "Zakat committees"],
        oldWorksFor: "Simple, one-time collections with a handful of donors, or very small local initiatives with no external reporting requirements.",
        oldDifficultWhen: "You have multiple volunteers tracking data, need to verify bank transfer screenshots, have to separate Zakat from Sadaqah, or need to provide board-ready reports and donor updates without exposing private recipient details.",
        sidqlyImproves: "Sidqly provides an automated, centralized workflow where data is structured, statuses are locked, proof is verified, and Zakat funds are mathematically separated by default.",
        notRightFit: "Sidqly may not be necessary for a very small one-time collection with no proof approval, no donor updates, and no reporting requirements. It becomes more useful when teams need review trails, donor-safe proof, role-based workflows, recurring campaigns, or board-ready reporting.",
        features: [
            { name: "Payment Tracking", old: "Manual row entry", sidqly: "Structured review queue" },
            { name: "Proof Verification", old: "Folder of messy screenshots", sidqly: "Approved/Rejected status logs" },
            { name: "Dignity Protection", old: "None (risky copy/paste)", sidqly: "Automated face-blurring tools" },
            { name: "Board Reporting", old: "Manual pivot tables", sidqly: "One-click audit-ready PDF/Excel" }
        ],
        workflow: [
            { step: "Intake", old: "Manual typing into cells", sidqly: "Direct secure form ingestion" },
            { step: "Review", old: "Scrolling rows and checking emails", sidqly: "Side-by-side visual review" },
            { step: "Reporting", old: "Formula building and formatting", sidqly: "Automated real-time aggregation" }
        ],
        trustConsiderations: "Spreadsheets lack audit trails. Anyone can accidentally delete a row or alter a payment amount without a trace. Sidqly enforces immutable logs.",
        reportingConsiderations: "Extracting Zakat-only data from a massive general spreadsheet is error-prone. Sidqly categorizes funds from the moment of intake.",
        faqs: [
            { question: "Can we import our existing spreadsheet into Sidqly?", answer: "Yes, Sidqly provides tools to securely import historical donor and campaign data so you don't lose your previous records." },
            { question: "Is Sidqly more expensive than free spreadsheets?", answer: "While basic spreadsheets are free, the operational cost of errors, lost donations, and time spent on manual reporting often makes dedicated software a more cost-effective choice for growing charities." }
        ],
        relatedModules: [
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
            { title: "Board Reporting", url: "/modules/reports-board-packs" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" }
        ],
        cta: "See how Sidqly organizes your spreadsheet data."
    },
    {
        slug: "sidqly-vs-message-based-tracking",
        title: "Sidqly vs Message-Based Tracking for Charity Teams",
        metaTitle: "Sidqly vs WhatsApp/Message Tracking | Charity Workflows",
        metaDescription: "Why professional Islamic organizations move from WhatsApp groups to Sidqly's structured operations platform for verified giving.",
        h1: "Sidqly vs Message-Based Tracking for Charity Teams",
        quickAnswer: "Sidqly helps teams move critical giving operations out of WhatsApp and Telegram, providing a structured platform for payment review, field proof tracking, and recipient dignity protection. It is useful when teams need clearer records, safer proof handling, and more structured donor communication.",
        audience: ["Field operations teams", "Ramadan relief organizers", "Qurbani volunteers"],
        oldWorksFor: "Quick ad-hoc communication between 2 or 3 volunteers for a single afternoon event.",
        oldDifficultWhen: "You are receiving hundreds of payment screenshots, trying to track which families received ration packs, or trying to find a specific receipt from three weeks ago.",
        sidqlyImproves: "Sidqly centralizes submissions, ties proof directly to specific donors or campaigns, and creates an organized dashboard instead of an endless scrolling chat feed.",
        notRightFit: "Sidqly may not be necessary for a very small one-time collection with no proof approval, no donor updates, and no reporting requirements. It becomes more useful when teams need review trails, donor-safe proof, role-based workflows, recurring campaigns, or board-ready reporting.",
        features: [
            { name: "Data Search", old: "Scrolling endlessly through chat", sidqly: "Instant campaign filtering" },
            { name: "Status Tracking", old: "Asking 'Did anyone do this?'", sidqly: "Clear Approved/Pending badges" },
            { name: "Privacy", old: "Photos saved to personal camera rolls", sidqly: "Secure, role-based cloud storage" }
        ],
        workflow: [
            { step: "Submission", old: "Sending photo to group chat", sidqly: "Uploading via secure vendor link" },
            { step: "Approval", old: "Thumbs up emoji reaction", sidqly: "Formal 'Approved' system log" }
        ],
        trustConsiderations: "Sharing photos of recipients receiving aid in a WhatsApp group is a massive privacy risk. Sidqly keeps these photos behind secure logins.",
        reportingConsiderations: "You cannot generate a board report from a WhatsApp chat export. Sidqly turns operations into clear metrics.",
        faqs: [
            { question: "Do our volunteers need to download a new app?", answer: "No, Sidqly provides secure, mobile-friendly web links for field workers to upload proof without needing a dedicated app installation." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Vendor Fulfillment", url: "/modules/vendor-fulfillment" }
        ],
        relatedUseCases: [
            { title: "Ramadan Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" }
        ],
        cta: "Move your charity operations out of the group chat."
    },
    {
        slug: "sidqly-vs-basic-forms",
        title: "Sidqly vs Basic Forms for Verified Giving Workflows",
        metaTitle: "Sidqly vs Google Forms | Charity Operations Comparison",
        metaDescription: "See how Sidqly compares to Google Forms or basic website builders for managing Islamic charity workflows, approvals, and donor updates.",
        h1: "Sidqly vs Basic Forms for Verified Giving Workflows",
        quickAnswer: "Sidqly provides an end-to-end operational workflow—from intake to manual review, proof approval, and board reporting—whereas basic forms only handle the initial data collection step. It is useful when teams need clearer records, safer proof handling, and more structured donor communication.",
        audience: ["Zakat committees", "Mosque admins", "Charity intake teams"],
        oldWorksFor: "A simple survey or collecting names for a community dinner.",
        oldDifficultWhen: "You need to manually review submitted bank transfer proof, assign a volunteer to fulfill a request, track the status of that fulfillment, and then email the donor a safe update.",
        sidqlyImproves: "Sidqly takes the data submitted and moves it through a structured operational pipeline with strict statuses (Pending, Review, Approved) and role-based permissions.",
        notRightFit: "Sidqly may not be necessary for a very small one-time collection with no proof approval, no donor updates, and no reporting requirements. It becomes more useful when teams need review trails, donor-safe proof, role-based workflows, recurring campaigns, or board-ready reporting.",
        features: [
            { name: "Workflow State", old: "Just a list of responses", sidqly: "Full lifecycle tracking" },
            { name: "Follow-up", old: "Manual email routing", sidqly: "In-platform donor updates" },
            { name: "Zakat Rules", old: "No specific logic", sidqly: "Built-in fund separation" }
        ],
        workflow: [
            { step: "Processing", old: "Exporting form to Excel to work on it", sidqly: "Reviewing directly in Sidqly dashboard" }
        ],
        trustConsiderations: "Basic forms are easy to spoof and lack the audit trails required for serious financial or Zakat verification.",
        reportingConsiderations: "Sidqly aggregates the operational outcomes, not just the intake data, giving boards a full picture of impact.",
        faqs: [
            { question: "Does Sidqly replace our donation website?", answer: "Sidqly handles the operational backend. You can link your existing website directly to Sidqly's secure intake flows." }
        ],
        relatedModules: [
            { title: "Charity Request Intake", url: "/modules/charity-request-intake" }
        ],
        relatedUseCases: [
            { title: "Zakat Committees", url: "/use-cases/zakat-committees" }
        ],
        cta: "Upgrade your intake process to a verified workflow."
    },
    {
        slug: "sidqly-vs-manual-proof-folders",
        title: "Sidqly vs Manual Proof Folders for Donor Updates",
        metaTitle: "Sidqly vs Manual Proof Folders | Impact Reporting",
        metaDescription: "Compare Sidqly's Proof Trust Engine with manual Google Drive or Dropbox folders for managing charity distribution proof and donor updates.",
        h1: "Sidqly vs Manual Proof Folders for Donor Updates",
        quickAnswer: "Sidqly replaces messy cloud storage folders with a Proof Trust Engine that directly links field evidence to specific campaigns, blurs recipient faces for dignity, and generates professional donor updates automatically. It is useful when teams need clearer records, safer proof handling, and more structured donor communication.",
        audience: ["Donor reporting teams", "Charity marketing staff", "Board members"],
        oldWorksFor: "Storing internal documents or sharing non-sensitive marketing assets.",
        oldDifficultWhen: "A major donor asks for proof of their specific Qurbani, and you have to dig through a generic folder of 500 unnamed IMG_1234.jpg files to find it.",
        sidqlyImproves: "Sidqly tags proof at the moment of upload, associates it with the correct campaign/donor, and provides tools to review and sanitize it before sharing.",
        notRightFit: "Sidqly may not be necessary for a very small one-time collection with no proof approval, no donor updates, and no reporting requirements. It becomes more useful when teams need review trails, donor-safe proof, role-based workflows, recurring campaigns, or board-ready reporting.",
        features: [
            { name: "Organization", old: "Manual folder structures", sidqly: "Automated campaign/donor linking" },
            { name: "Face Blurring", old: "Requires Photoshop/editing apps", sidqly: "Built-in dignity-safe tools" },
            { name: "Sharing", old: "Sending generic folder links", sidqly: "Branded, specific donor portal views" }
        ],
        workflow: [
            { step: "Finding Proof", old: "Searching by date or guessing file names", sidqly: "Filtering by donor name or campaign ID" }
        ],
        trustConsiderations: "Sharing a raw Google Drive link often exposes metadata and unedited photos of vulnerable recipients. Sidqly ensures only approved, safe updates are shared.",
        reportingConsiderations: "Sidqly allows you to generate a PDF report that includes the verified photos directly, rather than sending a report alongside a separate photo link.",
        faqs: [
            { question: "Is the face blurring automated?", answer: "Yes, Sidqly provides tools to quickly anonymize photos, ensuring recipient dignity is protected before any image is shown to a donor." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Donor-Safe Updates", url: "/modules/donor-safe-updates" }
        ],
        relatedUseCases: [
            { title: "Qurbani Organizers", url: "/use-cases/qurbani-organizers" }
        ],
        cta: "See how Sidqly organizes your impact proof."
    }
];
