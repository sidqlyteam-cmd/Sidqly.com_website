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
    lastReviewed: string;
    sourceReferences: string[];
    sidqlyLimitations: string[];
    competitorLimitations: string[];
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
        slug: "sidqly-vs-launchgood",
        title: "Sidqly vs LaunchGood: Post-Donation Operations vs Crowdfunding",
        metaTitle: "Sidqly vs LaunchGood | Post-Donation Operations vs Crowdfunding",
        metaDescription: "Factual operational comparison between Sidqly and LaunchGood. Learn when to use crowdfunding vs post-donation verification software.",
        h1: "Sidqly vs LaunchGood Comparison",
        quickAnswer: "LaunchGood is an excellent public crowdfunding platform to attract initial donors and process card transactions. Sidqly is not a crowdfunding portal. Sidqly is a backend operating system designed to verify, track, and audit those donations after they are received, managing manual bank statements, volunteer tasks, and face-blurring privacy-safe proof updates.",
        audience: ["Muslim Charity Directors", "Campaign Managers", "NGO Operations Teams", "Trustees"],
        oldWorksFor: "Attracting global retail donors, processing card transactions, launching viral Ramadan giving campaigns, and driving community peer-to-peer appeals.",
        oldDifficultWhen: "You need to coordinate drivers, verify manual bank wire transfers, isolate Zakat accounts from general funds, blur recipient faces in distribution proof, or generate board packs.",
        sidqlyImproves: "Sidqly focuses entirely on post-donation fulfillment: manual payment verification, task coordination, privacy-safe proof review, and board-ready reporting packs.",
        notRightFit: "Sidqly is not the right fit if you need a public fundraising webpage, marketing outreach, or card processing. You should use LaunchGood for public fundraising and Sidqly for back-office tracking.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["LaunchGood Official Pricing and Platform Guides (2026)", "Islamic Nonprofit Operational Best Practices (2026)"],
        sidqlyLimitations: [
            "We do not process credit cards or host public fundraising campaign pages.",
            "Sidqly relies on manual reconciliation by your finance team against official bank records.",
            "We do not offer crowdfunding marketing syndication or donor leaderboards."
        ],
        competitorLimitations: [
            "They do not provide on-the-ground volunteer routing or task-level vendor boards.",
            "No built-in face-detection blurring or EXIF metadata scrubbers for modesty compliance.",
            "No multi-tier approval gate to enforce Shariah separation between Zakat and Sadaqah bank accounts."
        ],
        features: [
            { name: "Primary Purpose", old: "Public crowdfunding & card processing", sidqly: "Backend operations & verified proof logs" },
            { name: "Zakat Handling", old: "Self-declared Zakat tags by campaigners", sidqly: "Enforced, isolated logical separation gates" },
            { name: "Fulfillment tracking", old: "None (must use external chats/tools)", sidqly: "Mobile volunteer maps and vendor tasking" },
            { name: "Modesty Compliance", old: "Manual editing by charity staff", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Manual Bank Reconcile", old: "Basic payment dispute handling", sidqly: "Screenshot queue & statement cross-matching" },
            { name: "Compliance Reporting", old: "CSV exports of transaction amounts", sidqly: "One-click Shariah & Board audit packs" }
        ],
        workflow: [
            { step: "Donation Sourcing", old: "Launch public card campaign on LaunchGood", sidqly: "Enter direct manual transfers and import platform summaries into Sidqly" },
            { step: "Fulfillment Proof", old: "Manually compile photos on external storage and chat groups", sidqly: "Volunteers upload straight to review gate with automated timestamp checks" },
            { step: "Privacy Sanitization", old: "Manually crop photos in third-party software before publishing", sidqly: "Automated facial filters and EXIF metadata scrubbers protect recipient honor" },
            { step: "Stakeholder Reporting", old: "Export raw transaction spreadsheets for the board", sidqly: "Generate verified audit-ready PDF board packs with one click" }
        ],
        trustConsiderations: "Public platforms publish campaign summaries but do not log individual field deliveries. Sidqly establishes an unbroken trace from bank receipt to direct receipt.",
        reportingConsiderations: "Sponsors require detailed operational logs, not just totals. Sidqly generates complete board packs in seconds.",
        faqs: [
            { question: "Can we use both Sidqly and LaunchGood together?", answer: "Yes, this is the recommended setup for established charities. You source card donations through LaunchGood and import those transactions into Sidqly to handle field delivery, volunteer routing, and privacy-safe proof." },
            { question: "Does LaunchGood handle Zakat fund separation in bank accounts?", answer: "No, LaunchGood routes payments based on campaign tags but does not provide backend software to manage distinct, mathematically isolated Zakat bookkeeping or custody ledgers." },
            { question: "Does Sidqly replace LaunchGood for Ramadan campaigns?", answer: "No. LaunchGood excels at public Ramadan marketing and processing cards worldwide. Sidqly steps in once donations land, coordinating food distribution drivers, verifying cash receipts, and generating Shariah reports." },
            { question: "How does Sidqly protect beneficiary dignity compared to public campaigns?", answer: "Public platforms frequently incentivize dramatic beneficiary photos for conversions. Sidqly enforces automated face-blurring and EXIF metadata stripping so donors see verified delivery without exposing vulnerable families." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Donor-Safe Updates", url: "/modules/donor-safe-updates" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Ramadan Campaign Teams", url: "/use-cases/ramadan-campaign-teams" }
        ],
        cta: "See how Sidqly powers post-donation operations for growing Islamic charities."
    },
    {
        slug: "sidqly-vs-donorbox",
        title: "Sidqly vs Donorbox: Operational Backend vs Donor Checkout Forms",
        metaTitle: "Sidqly vs Donorbox | Operational Backend vs Checkout Forms",
        metaDescription: "Read a balanced comparison between Sidqly's giving operations platform and Donorbox checkout widgets for Islamic nonprofits.",
        h1: "Sidqly vs Donorbox Comparison",
        quickAnswer: "Donorbox is an excellent, lightweight recurring card payment widget. Sidqly is not a payment widget or card gateway. Sidqly organizes the operational work that happens after payment—reconciling manual statements, managing volunteer deliveries, blurring beneficiary faces for modesty, and preparing board reports.",
        audience: ["Treasurers", "Donor Relations Directors", "Nonprofit Admins", "Finance Officers"],
        oldWorksFor: "Embedding a slick debit/credit card recurring payment form on a pre-existing website and processing Stripe/PayPal donations.",
        oldDifficultWhen: "You need to log manual cash drop-offs, assign tasks to field vendors, protect recipient privacy during distribution runs, or generate comprehensive board packs.",
        sidqlyImproves: "Sidqly focuses entirely on backend logistics—payment screenshot review desks, volunteer coordination maps, face-blurring gates, and structured compliance ledgers.",
        notRightFit: "Sidqly is not the right fit if you need to process card transactions online or embed a check-out form. Use Donorbox for payments and Sidqly to manage operations.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Donorbox Feature List and Sourcing Docs (2026)", "Charity Commission Financial Controls Guidelines"],
        sidqlyLimitations: [
            "No merchant accounts or payment processing gateways are provided directly.",
            "Requires staff to manually verify transfers against bank reports or import checkout batches.",
            "Does not replace donor relationship management (CRM) features like recurring pledge dunning."
        ],
        competitorLimitations: [
            "Lacks task boards for field volunteers and vendor slaughterhouses.",
            "Does not have built-in privacy protection or face-detection tools.",
            "Cannot enforce dual-custody verification on manual cash donations or Atiyat boxes."
        ],
        features: [
            { name: "Primary Focus", old: "Checkout donation widgets & processing", sidqly: "Backend tracking & verified proof loops" },
            { name: "Zakat Handling", old: "Basic label tagging on forms", sidqly: "Enforced, logically isolated accounting ledgers" },
            { name: "Fulfillment Oversight", old: "None (leaves operations to email/chat)", sidqly: "Mobile dispatch and vendor SLA queues" },
            { name: "Beneficiary Modesty", old: "Manual editing by charity staff", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Manual Transfer Check", old: "Not supported for direct wire desks", sidqly: "Dedicated review queues with screenshot validation" },
            { name: "Field Coordination", old: "None", sidqly: "Volunteer driver maps and verification pins" }
        ],
        workflow: [
            { step: "Payment Logging", old: "Donor enters card details via Donorbox embed", sidqly: "Finance team reconciles direct wires and Atiyat box deposits in Sidqly review desk" },
            { step: "Disbursement Check", old: "Funds transfer to bank account with general tag", sidqly: "Zakat and Sadaqah funds strictly separated into distinct audited buckets" },
            { step: "Distribution Dispatch", old: "Staff coordinate volunteers via WhatsApp groups", sidqly: "Volunteers receive encrypted route assignments with zero recipient face exposure" },
            { step: "Donor Verification", old: "Automated plain receipt email sent", sidqly: "Donor receives audit-stamped digital certificate with sanitized proof of delivery" }
        ],
        trustConsiderations: "Processing cards does not guarantee resources reached eligible recipients. Sidqly establishes complete, auditable operational records.",
        reportingConsiderations: "Donorbox reports donation amounts, but Sidqly generates board-ready packs combining finances and visual proofs.",
        faqs: [
            { question: "Can we connect Donorbox to Sidqly?", answer: "Yes, you can import transaction exports from Donorbox into Sidqly to launch volunteer routing, verification, and privacy-safe donor reporting." },
            { question: "Does Donorbox verify cash deposits from mosque collection boxes?", answer: "No, Donorbox is exclusively for electronic card, ACH, and PayPal donations. Sidqly provides specific manual review desks for cash drops, wire transfers, and Atiyat boxes." },
            { question: "Why would an organization need Sidqly if they already use Donorbox?", answer: "Donorbox stops once the donor's card is charged. Sidqly handles everything that follows: routing the aid, verifying vendor deliveries, separating Zakat allocations, and compiling board audits." },
            { question: "Can Sidqly handle recurring bank transfers?", answer: "Yes, Sidqly allows finance teams to record and match standing order bank wires monthly with an immutable audit log." }
        ],
        relatedModules: [
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Receipts and Certificates", url: "/modules/receipts-certificates" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Board Reporting Teams", url: "/use-cases/board-reporting-teams" }
        ],
        cta: "Pair your payment form with Sidqly's robust backend giving operations."
    },
    {
        slug: "sidqly-vs-givebutter",
        title: "Sidqly vs Givebutter: Operations Backend vs Social Fundraising",
        metaTitle: "Sidqly vs Givebutter | Operations Backend vs Social Fundraising",
        metaDescription: "Factual comparison between Sidqly's giving operations engine and Givebutter's social fundraising platform for Islamic organizations.",
        h1: "Sidqly vs Givebutter Comparison",
        quickAnswer: "Givebutter is a dynamic social fundraising platform with live feeds, event ticketing, and peer-to-peer campaigns. Sidqly is not a front-end fundraising tool. Sidqly manages the backend operational workflow for Islamic charities—manual payment review, Zakat isolation, volunteer distribution tasks, and modesty-safe donor updates.",
        audience: ["Fundraising Directors", "Field Operations Managers", "Charity Treasurers"],
        oldWorksFor: "Engaging social audiences with live fundraising feeds, ticket sales for charity banquets, and peer-to-peer youth campaigns.",
        oldDifficultWhen: "You need to reconcile offline bank transfers, isolate Zakat ledger books under Shariah rules, coordinate field delivery drivers, or sanitize recipient photos.",
        sidqlyImproves: "Sidqly focuses on back-office operations: manual transfer verification, task routing, face-blurring gates, and board-ready compliance reports.",
        notRightFit: "Sidqly is not built for running charity galas, selling tickets, or hosting public social feeds. Use Givebutter for fundraising events and Sidqly for field execution.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Givebutter Platform Features Guide (2026)", "Nonprofit Technology Network Field Analysis"],
        sidqlyLimitations: [
            "We do not provide event ticketing, donor leaderboards, or live livestream widgets.",
            "Sidqly does not process credit cards or PayPal directly.",
            "Requires administrative setup of charity fulfillment teams and workflows."
        ],
        competitorLimitations: [
            "No Shariah-compliant Zakat fund isolation or Nisab calculations.",
            "Lacks volunteer distribution mapping and driver confirmation pins.",
            "No automated face-blurring or EXIF metadata wiping for modesty protection."
        ],
        features: [
            { name: "Primary Focus", old: "Social campaigns, ticketing, & card donation", sidqly: "Fulfillment ops, Zakat isolation, & audit trails" },
            { name: "Zakat Segregation", old: "Self-labeled campaign categories", sidqly: "Enforced, isolated logical accounting ledgers" },
            { name: "Field Logistics", old: "None (external tools required)", sidqly: "Volunteer driver maps and mobile task routing" },
            { name: "Modesty Protection", old: "Manual editing by charity staff", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Manual Bank Verification", old: "Standard payment processor reconciliation", sidqly: "Dedicated screenshot review desk for wire transfers" },
            { name: "Audit Packs", old: "Standard donation summary CSVs", sidqly: "One-click Shariah & Board audit PDF packs" }
        ],
        workflow: [
            { step: "Donation Intake", old: "Supporters donate via Givebutter social pages", sidqly: "Finance admins record direct bank transfers and offline mosque donations" },
            { step: "Fund Segregation", old: "All money deposits to main charity bank account", sidqly: "Zakat funds are locked into isolated operational ledgers" },
            { step: "Field Distribution", old: "Coordinators use messaging apps for task updates", sidqly: "Volunteers receive verified tasks with real-time delivery confirmation" },
            { step: "Proof Generation", old: "Staff manually select and upload photos to social feeds", sidqly: "Automated privacy filters sanitize faces before donor certificates are issued" }
        ],
        trustConsiderations: "Social feeds display donor enthusiasm but do not verify physical aid handover. Sidqly documents the chain of custody from deposit to delivery.",
        reportingConsiderations: "Event tools produce gross revenue reports. Sidqly generates granular compliance packages for auditors and Shariah boards.",
        faqs: [
            { question: "Can we use Givebutter for banquets and Sidqly for operations?", answer: "Yes, this is an ideal combination. Use Givebutter to sell banquet tickets and run live donor pledges, then manage the aid procurement, volunteer routes, and Zakat delivery through Sidqly." },
            { question: "Does Givebutter verify donor wire transfers manually?", answer: "No, Givebutter focuses on online card and digital wallet checkouts. Sidqly provides specific manual review queues for bank wires and cash deposits." },
            { question: "How does Sidqly handle Zakat differently from Givebutter?", answer: "Givebutter allows custom fund tags, but cannot prevent Zakat funds from being pooled or misdirected. Sidqly enforces logical accounting barriers ensuring Zakat is spent strictly on eligible recipients." },
            { question: "Does Sidqly offer donor leaderboards?", answer: "No. In Islamic philanthropy, anonymous and dignified giving is emphasized. Sidqly prioritizes privacy, audit trails, and modesty over public leaderboards." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Reports and Board Packs", url: "/modules/reports-board-packs" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Sadaqah Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" }
        ],
        cta: "Upgrade your back-office execution with Sidqly's verified giving platform."
    },
    {
        slug: "sidqly-vs-bloomerang",
        title: "Sidqly vs Bloomerang: Operations Platform vs Donor CRM",
        metaTitle: "Sidqly vs Bloomerang | Operations Platform vs Donor CRM",
        metaDescription: "Factual comparison between Sidqly's giving operations engine and Bloomerang's donor CRM for Islamic nonprofits.",
        h1: "Sidqly vs Bloomerang Comparison",
        quickAnswer: "Bloomerang is an industry-leading donor relationship management (CRM) database designed to track donor retention, email marketing, and recurring giving pledges. Sidqly is not a donor CRM. Sidqly manages the post-donation operational fulfillment—field volunteer routing, Zakat ledger separation, proof review gates, and dignity-safe donor updates.",
        audience: ["Charity Executives", "Development Directors", "Operations Leads", "Auditors"],
        oldWorksFor: "Managing long-term donor relationships, tracking gift frequency, running email marketing drip campaigns, and analyzing donor retention rates.",
        oldDifficultWhen: "You need to manage field volunteers, verify bank transfer screenshots, separate Zakat from general funds mathematically, or blur beneficiary faces automatically.",
        sidqlyImproves: "Sidqly provides structured operational desks: manual payment verification, task coordination, privacy-safe proof review, and board-ready reporting packs.",
        notRightFit: "Sidqly is not a replacement for donor relationship management. If you need email marketing sequences, wealth screening, or pledge dunning, Bloomerang remains the right choice.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Bloomerang Official Product Documentation (2026)", "Nonprofit CRM Benchmark Reports"],
        sidqlyLimitations: [
            "We do not provide email marketing automation, wealth screening, or direct mail tools.",
            "Sidqly does not track lifetime donor relationship scoring.",
            "Requires staff to review and confirm campaign tasks within the platform."
        ],
        competitorLimitations: [
            "Lacks field dispatch tools for volunteers and third-party vendors.",
            "No automated computer-vision face-blurring for recipient modesty.",
            "No native AAOIFI or Shariah-compliant Zakat fund isolation mechanisms."
        ],
        features: [
            { name: "Primary Focus", old: "Donor retention & email CRM", sidqly: "Field operations & verified proof logs" },
            { name: "Zakat Segregation", old: "Custom text tags on gifts", sidqly: "Enforced, isolated logical accounting ledgers" },
            { name: "Volunteer Dispatch", old: "None (requires separate tools)", sidqly: "Mobile dispatch maps and completion pins" },
            { name: "Modesty Compliance", old: "Manual photo editing", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Proof Verification", old: "Basic file attachments on donor record", sidqly: "Multi-tier approval gate with audit stamps" },
            { name: "Board Compliance", old: "Fundraising revenue reports", sidqly: "One-click Shariah & Board audit PDF packs" }
        ],
        workflow: [
            { step: "Gift Recording", old: "Gift logged in CRM contact profile with retention score", sidqly: "Finance team reconciles wire transfer and records exact campaign destination" },
            { step: "Fulfillment Check", old: "No field coordination tools; ops left to staff memory", sidqly: "Inspect geo-sanitized photos and delivery signatures at review desk" },
            { step: "Privacy Sanitization", old: "Staff manually inspect images before marketing use", sidqly: "Automatic face-blurring algorithms sanitize images instantly" },
            { step: "Audit Trail", old: "CRM stores donor giving history", sidqly: "Sidqly creates tamper-evident operational records connecting donation to field proof" }
        ],
        trustConsiderations: "CRMs track donor actions but cannot track volunteer or vendor handovers. Sidqly ensures the backend operational chain remains unbroken.",
        reportingConsiderations: "Bloomerang generates donor contribution histories. Sidqly generates board-ready compliance and impact summaries.",
        faqs: [
            { question: "Can we use Bloomerang alongside Sidqly?", answer: "Yes. Many larger charities utilize a general CRM like Bloomerang to manage donor relations and marketing, and deploy Sidqly to manage actual field campaigns, Zakat separation, and privacy-safe proof." },
            { question: "Does Bloomerang have Zakat calculation and fund isolation tools?", answer: "No, Bloomerang is a generic nonprofit CRM built for Western charities. It does not understand Zakat, Nisab thresholds, or Shariah fund isolation." },
            { question: "How does Sidqly assist auditors compared to a CRM?", answer: "Auditors need to verify that restricted funds were spent strictly on permitted programs with delivery proof. Sidqly links the bank receipt to field fulfillment photos and vendor invoices in a single PDF pack." },
            { question: "Can we export Sidqly reports into Bloomerang?", answer: "Yes, Sidqly produces structured CSV and PDF exports that can easily be attached to donor profiles in Bloomerang." }
        ],
        relatedModules: [
            { title: "Vendor Fulfillment", url: "/modules/vendor-fulfillment" },
            { title: "Volunteer Coordination", url: "/modules/volunteer-coordination" },
            { title: "Reports and Board Packs", url: "/modules/reports-board-packs" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Board Reporting Teams", url: "/use-cases/board-reporting-teams" }
        ],
        cta: "Equip your operations team with the giving engine built for Islamic charities."
    },
    {
        slug: "sidqly-vs-qurbanapp",
        title: "Sidqly vs QurbanApp: Modular Operating Platform vs Single-Service App",
        metaTitle: "Sidqly vs QurbanApp | Modular Platform vs Single-Service",
        metaDescription: "Factual comparison between Sidqly's modular operating platform and QurbanApp's single-service tracking tool for Eid ul Adha.",
        h1: "Sidqly vs QurbanApp Comparison",
        quickAnswer: "QurbanApp is a useful, single-service tool specifically focused on Eid ul Adha Qurbani orders. Sidqly is a modular, year-round operating platform built to handle Zakat fund separation, manual bank transfer verify, Ramadan food drives, volunteer routing, modesty-safe proof review, and custom board reporting.",
        audience: ["Islamic Charity Directors", "Eid Campaign Coordinators", "Slaughterhouse Logistics Leads"],
        oldWorksFor: "Tracking simple Qurbani order listings during the 4 days of Eid ul Adha holiday season.",
        oldDifficultWhen: "You need to manage complex case intakes, calculate Nisab, separate Zakat from Sadaqah, route daily Ramadan drivers, or generate audit-ready board packs.",
        sidqlyImproves: "Sidqly provides an all-in-one year-round operating system with 18 integrated modules covering all your charitable campaigns.",
        notRightFit: "Sidqly is not necessary if you only run Qurbani campaigns and have no other operations, Zakat funds, or reporting needs. It is built for multi-campaign groups.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["QurbanApp Public Sourcing and App Listings (2026)", "Halal Meat & Qurbani Compliance Standards"],
        sidqlyLimitations: [
            "We do not provide public-facing retail apps on iOS or Android stores.",
            "Requires staff to manually configure campaign categories in the web workspace.",
            "Sidqly is an operational portal, not a direct consumer livestock marketplace."
        ],
        competitorLimitations: [
            "Strictly focused on Qurbani; lacks support for general charity, Ramadan food packs, or Zakat review.",
            "Does not offer advanced board-reporting packs or general volunteer routing.",
            "Cannot handle multi-currency bank wire reconciliation across global offices."
        ],
        features: [
            { name: "Scope of use", old: "Single-service (Qurbani only)", sidqly: "Year-round (Zakat, Ramadan, Sadaqah, Qurbani)" },
            { name: "Fund Isolation", old: "None (basic order tally)", sidqly: "Enforced, logically isolated accounting ledgers" },
            { name: "Privacy Systems", old: "Basic file storage without filters", sidqly: "Automatic face-blurring and EXIF sanitization" },
            { name: "Customization", old: "Fixed Qurbani parameters", sidqly: "18 customizable, modular operations desks" },
            { name: "Vendor Dispatch", old: "Basic slaughterhouse status updates", sidqly: "Full vendor portals with portion allocation tracking" },
            { name: "Certificates", old: "Basic generic email", sidqly: "Automated, tamper-evident donor certificates" }
        ],
        workflow: [
            { step: "Order Intake", old: "Log Qurbani in custom mobile app", sidqly: "Record manual transfers and assign portion shares (1/7 cow or full sheep)" },
            { step: "Slaughter Oversight", old: "Vendor updates status in app without verification gates", sidqly: "Field inspectors audit slaughter logs, tags, and timestamps at review gate" },
            { step: "Meat Distribution", old: "Coordinators hand out meat packages manually", sidqly: "Volunteers follow optimized delivery routes with digital verification pins" },
            { step: "Donor Confirmation", old: "Bulk SMS notification sent to donor list", sidqly: "Branded certificate with verified completion timestamp issued to each donor" }
        ],
        trustConsiderations: "Using separate apps for separate holidays creates fragmented data. Sidqly maintains a permanent, audit-ready database history year-round.",
        reportingConsiderations: "QurbanApp generates Qurbani summaries. Sidqly builds comprehensive board packs across all active projects.",
        faqs: [
            { question: "Does Sidqly support Qurbani donor certificates?", answer: "Yes, Sidqly features a dedicated Qurbani module that automatically generates branded donor certificates once slaughter proof and weight distributions are verified." },
            { question: "Can Sidqly handle fractional animal shares (e.g., 1/7th cow)?", answer: "Yes, Sidqly natively handles 7-share large animals (cows, camels) as well as single-share small animals (sheep, goats), matching donors automatically." },
            { question: "Why should we switch from a Qurbani-only app to Sidqly?", answer: "Single-service apps create data silos that become useless the day after Eid. Sidqly retains donor histories, vendor contracts, and volunteer lists for Ramadan, Zakat, and emergency appeals throughout the year." },
            { question: "Can vendors upload slaughter proof directly to Sidqly?", answer: "Yes, Sidqly provides specialized vendor access where slaughterhouse managers can upload tagged photos and delivery receipts directly to your review gate." }
        ],
        relatedModules: [
            { title: "Qurbani/Udhiya Lifecycle", url: "/modules/qurbani-lifecycle" },
            { title: "Receipts and Certificates", url: "/modules/receipts-certificates" },
            { title: "Vendor Fulfillment", url: "/modules/vendor-fulfillment" }
        ],
        relatedUseCases: [
            { title: "Qurbani Organizers", url: "/use-cases/qurbani-organizers" },
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" }
        ],
        cta: "Manage your Qurbani and year-round giving campaigns on one platform."
    },
    {
        slug: "sidqly-vs-mosque-management",
        title: "Sidqly vs Mosque Management Software: Operations vs Membership",
        metaTitle: "Sidqly vs Mosque Management Software | Operations vs Membership",
        metaDescription: "Learn when to use generic Mosque membership portals vs Sidqly's specialized verified giving operations platform.",
        h1: "Sidqly vs Mosque Management Software",
        quickAnswer: "Traditional Mosque management systems are excellent for prayer display boards, membership directory rosters, and school (madrasah) enrollment tracking. Sidqly is not a member roster database. Sidqly is a backend operating system designed specifically to verify charity payments, logically separate Zakat funds, manage field volunteer tasks, and protect beneficiary dignity.",
        audience: ["Masjid Treasurers", "Mosque Committee Leads", "Imams", "Welfare Trustees"],
        oldWorksFor: "Managing congregant contact lists, tracking school enrollment files, handling nikah records, and displaying prayer times in the musalla.",
        oldDifficultWhen: "You need to manually verify bank wire transfers for charity appeals, isolate Zakat accounts, coordinate food distribution, or blur beneficiary faces in proof photos.",
        sidqlyImproves: "Sidqly provides clear, robust manual payment review desks, logical fund separation gates, volunteer dispatch dashboards, and board-ready reporting packs.",
        notRightFit: "Sidqly is not a replacement for mosque membership databases or madrasah software. If you need prayer display integration or classroom records, use traditional mosque tools.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Typical Mosque Membership and Madrasah Software Features (2026)", "Masjid Governance and Charity Regulations"],
        sidqlyLimitations: [
            "We do not provide prayer times display boards, madrasah rosters, or event ticketing.",
            "Lacks congregant SMS broadcast features or hall rental reservation desks.",
            "Requires administrative setup for charity welfare committees."
        ],
        competitorLimitations: [
            "Lacks specific, audit-ready Zakat ledger separation databases.",
            "Does not offer automated face-blurring or EXIF metadata scrubbers for modesty compliance.",
            "No mobile field coordination for volunteers distributing emergency ration packs."
        ],
        features: [
            { name: "Primary Focus", old: "Roster databases, madrasah, & display boards", sidqly: "Charity fulfillment & verified proof logs" },
            { name: "Zakat Handling", old: "General account tags", sidqly: "Isolated logical accounting ledgers" },
            { name: "Field Coordination", old: "None (coordinators use phone calls/chat)", sidqly: "Volunteer dispatch mapping and vendor tasking" },
            { name: "Privacy Controls", old: "N/A (files stored in shared drives)", sidqly: "Server-side blurring and EXIF data wiping" },
            { name: "Cash Box Tracking", old: "Paper ledger entries after counting", sidqly: "Dual-custody Atiyat box opening & counting logs" },
            { name: "Audit Reporting", old: "Simple income/expense spreadsheets", sidqly: "One-click Shariah & Board audit PDF packs" }
        ],
        workflow: [
            { step: "Donation Sourcing", old: "Log cash collection in member database or paper book", sidqly: "Verify manual bank transfers and Atiyat cash boxes in Sidqly desk" },
            { step: "Fund Segregation", old: "Treasurer manually calculates Zakat percentage in spreadsheet", sidqly: "Zakat and Sadaqah funds strictly separated into distinct audited buckets" },
            { step: "Fulfillment Check", old: "No post-donation workflow exists; committee trusts verbal reports", sidqly: "Review and approve geo-sanitized photos at review desk" },
            { step: "Committee Reporting", old: "Handwritten monthly financial statements for shura", sidqly: "Generate structured, tamper-evident board packs with photo proof attached" }
        ],
        trustConsiderations: "Traditional mosque software tracks congregant actions, but cannot track volunteer deliveries. Sidqly ensures the backend operational chain remains unbroken.",
        reportingConsiderations: "Mosque software generates monthly financial lists. Sidqly builds comprehensive board compliance and impact summaries.",
        faqs: [
            { question: "Can we use Sidqly alongside our mosque membership software?", answer: "Yes. Many mosques use standard tools to manage prayer schedules and member directories, and deploy Sidqly to handle their Zakat, Sadaqah, and Qurbani campaigns safely." },
            { question: "How does Sidqly help mosque treasurers with cash counting?", answer: "Sidqly provides a dual-witness Atiyat cash box reconciliation tool, recording box seal numbers, denomination breakdowns, and witness digital signatures to prevent cash discrepancies." },
            { question: "Does Sidqly replace our mosque website or prayer screens?", answer: "No. Sidqly runs privately in the administrative back office. You keep your existing mosque website and prayer display TV screens." },
            { question: "Can our welfare committee review emergency family aid requests confidentially?", answer: "Yes, Sidqly features a dedicated Charity Request Intake module that lets welfare committees review aid applications under anonymous aliases, protecting applicant dignity." }
        ],
        relatedModules: [
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
            { title: "Reports and Board Packs", url: "/modules/reports-board-packs" }
        ],
        relatedUseCases: [
            { title: "Mosques", url: "/use-cases/mosques" },
            { title: "Zakat Committees", url: "/use-cases/zakat-committees" }
        ],
        cta: "Give your mosque's charity committee the professional tools they deserve."
    },
    {
        slug: "sidqly-vs-custom-software",
        title: "Sidqly vs Custom-Built Charity Software: Platform vs Agency Dev",
        metaTitle: "Sidqly vs Custom In-House Software | Platform vs Agency Dev",
        metaDescription: "Factual analysis comparing custom in-house charity software development with Sidqly's specialized, ready-to-use giving operations platform.",
        h1: "Sidqly vs Custom Software Comparison",
        quickAnswer: "Custom software development offers unlimited theoretical tailoring, but comes with immense development costs ($40k-$150k+), maintenance headaches, security vulnerabilities, and developer abandonment. Sidqly is a turnkey, enterprise-grade giving operations platform with 18 pre-built modules ready on day one at a fraction of the cost.",
        audience: ["Charity Trustees", "CTOs", "Executive Directors", "Operations Managers"],
        oldWorksFor: "Organizations with dedicated in-house software engineering teams, multi-million dollar IT budgets, and proprietary regulatory workflows.",
        oldDifficultWhen: "Developers move on, security vulnerabilities emerge, server hosting costs scale up, or volunteers struggle with complex unpolished interfaces.",
        sidqlyImproves: "Sidqly provides an instant, maintained, bug-tested operating platform with zero custom code required, constant compliance updates, and dedicated support.",
        notRightFit: "Sidqly is not the right fit if your organization requires proprietary ERP integration, bespoke hardware sensor links, or wants to own all software intellectual property.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Gartner Enterprise Application Development Benchmarks", "Nonprofit Software Total Cost of Ownership (TCO) Studies"],
        sidqlyLimitations: [
            "You cannot modify the underlying source code or database schemas directly.",
            "Workflow stages follow proven best-practice patterns rather than arbitrary custom flows.",
            "Integrations rely on standard export and API hooks."
        ],
        competitorLimitations: [
            "Average build time of 9-18 months before launching basic features.",
            "High risk of project failure, scope creep, and unexpected maintenance contracts.",
            "Custom-built face-detection algorithms frequently break when AI libraries update."
        ],
        features: [
            { name: "Time to Launch", old: "9 to 18 months of development", sidqly: "Same-day deployment with guided setup" },
            { name: "Upfront Investment", old: "$40,000 to $150,000+ agency fees", sidqly: "Predictable monthly or annual subscription" },
            { name: "Security & Patches", old: "Charity must hire security consultants", sidqly: "Continuous cloud patches, encryption, & monitoring" },
            { name: "Shariah Logic", old: "Must teach software agency Islamic jurisprudence", sidqly: "Native Zakat separation, Nisab, and modesty gates" },
            { name: "Mobile Reliability", old: "Requires costly custom iOS/Android apps", sidqly: "Responsive web apps optimized for field volunteers" },
            { name: "Ongoing Support", old: "Expensive maintenance retainer or orphaned code", sidqly: "Included platform updates, bug fixes, & support" }
        ],
        workflow: [
            { step: "Project Initiation", old: "Write 100-page specifications and interview agency developers", sidqly: "Log in, configure campaign categories, and invite team members" },
            { step: "Module Deployment", old: "Wait months for developers to code payment review screens", sidqly: "Enable pre-tested payment review desks with one click" },
            { step: "Feature Updates", old: "Pay agency change-order fees whenever regulations shift", sidqly: "Receive regular feature enhancements automatically without downtime" },
            { step: "Security Auditing", old: "Worry about unpatched vulnerabilities exposing donor records", sidqly: "Rely on SOC-aligned infrastructure with end-to-end data encryption" }
        ],
        trustConsiderations: "Custom apps often lack the formal external validation and uptime monitoring that established platforms guarantee. Sidqly delivers proven reliability.",
        reportingConsiderations: "Custom reporting requires custom SQL scripts. Sidqly provides standardized, Shariah-aligned audit packs off the shelf.",
        faqs: [
            { question: "Why is building custom charity software risky?", answer: "Over 60% of custom nonprofit software projects exceed budget or fail entirely. The biggest risk is developer turnover: when the original agency or developer departs, the charity is left with unmaintainable code." },
            { question: "Can Sidqly migrate data from our legacy custom database?", answer: "Yes, our team provides assisted data migration to import donor lists, past campaigns, and historical fulfillment records cleanly into Sidqly." },
            { question: "Is our data isolated in Sidqly?", answer: "Yes, Sidqly enforces strict logical tenant isolation, ensuring your charity's donor records, financial statements, and beneficiary data remain completely private." },
            { question: "What if our charity has unique custom reporting requirements?", answer: "Sidqly offers customizable export fields, branded report templates, and flexible campaign tags that meet the needs of virtually all international charity regulators." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Reports and Board Packs", url: "/modules/reports-board-packs" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Board Reporting Teams", url: "/use-cases/board-reporting-teams" }
        ],
        cta: "Avoid costly agency development traps. Launch your giving operations today."
    },
    {
        slug: "sidqly-vs-atiyat-box",
        title: "Sidqly vs Atiyat Cash Boxes: Modernizing Mosque & Charity Cash Collections",
        metaTitle: "Atiyat Box Management vs Sidqly | Mosque Cash Donation Systems",
        metaDescription: "Objective comparison between traditional physical Atiyat cash boxes and Sidqly verified giving operations. Learn dual-custody cash counting and Shariah audit.",
        h1: "Atiyat Cash Box Management vs Sidqly Operations",
        quickAnswer: "Traditional Atiyat donation boxes (صناديق العطيات) are physical locked metal or wooden boxes placed in prayer halls and storefronts for loose cash giving. Sidqly is a software operating system that structures the entire reconciliation lifecycle: dual-witness collection logs, serialized tamper-evident seal audits, denomination counting sheets, and instant digital donor receipts to eliminate cash leakage and ensure Shariah audit compliance.",
        audience: ["Masjid Treasurers", "Cash Collection Trustees", "Auditors", "Mosque Finance Teams"],
        oldWorksFor: "Collecting immediate cash and coins from congregants in the prayer hall, during Friday Jummah prayers, and in community stores.",
        oldDifficultWhen: "You need to prove dual-custody opening, prevent cash loss, track which box collected how much, issue official tax receipts, or allocate cash to restricted Zakat funds.",
        sidqlyImproves: "Sidqly provides structured digital Atiyat cash box workflows: box barcode IDs, tamper-seal logs, dual-witness counters, denomination worksheets, and instant bank deposit matching.",
        notRightFit: "Sidqly is not physical hardware. You still need physical locked boxes or digital kiosks in the musalla; Sidqly provides the accountability software that governs them.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Charity Commission Internal Financial Controls for Charities (CC8)", "AAOIFI Governance Standard No. 4 for Islamic Financial Institutions"],
        sidqlyLimitations: [
            "Sidqly does not supply physical metal boxes or cash counting hardware machines.",
            "Requires mosque volunteers to input denomination counts into the web portal.",
            "Cannot physically stop dishonest handling without physical lock procedures."
        ],
        competitorLimitations: [
            "Physical boxes offer zero visibility until opened, creating high risk of theft or skimming.",
            "Paper counting sheets are easily altered, lost, or misplaced.",
            "No audit trail to prove whether money in a Zakat box was mistakenly spent on building repairs."
        ],
        features: [
            { name: "Collection Method", old: "Unmonitored physical coin slots & padlocks", sidqly: "Serialized box tracking & digital count worksheets" },
            { name: "Dual-Witness Gate", old: "Informal, often single-person counting", sidqly: "Enforced dual digital witness signatures on opening" },
            { name: "Seal Auditing", old: "Paper tags or standard padlocks", sidqly: "Tamper-evident serial number logging with photo capture" },
            { name: "Zakat Allocation", old: "Manual estimation of Zakat cash vs Sadaqah", sidqly: "Direct logical isolation to designated bank deposit slips" },
            { name: "Discrepancy Alerts", old: "Only discovered weeks later during bank audits", sidqly: "Real-time alerts if bank deposit differs from counted total" },
            { name: "Audit Trail", old: "Handwritten paper slips in lockbox", sidqly: "Permanent timestamped digital records with PDF board export" }
        ],
        workflow: [
            { step: "Box Placement & Sealing", old: "Place locked wooden box with generic paper label", sidqly: "Assign unique QR code to box and log serialized tamper seal number in Sidqly" },
            { step: "Dual-Custody Opening", old: "One or two volunteers unlock box and count onto a table", sidqly: "Two authorized trustees scan seal, confirm integrity, and enter denomination counts" },
            { step: "Deposit Reconciliation", old: "Cash taken to bank and deposit slip filed in drawer", sidqly: "Bank receipt uploaded to Sidqly and matched against counted total in review desk" },
            { step: "Shariah Allocation", old: "Money enters general mosque checking account", sidqly: "Zakat cash marked as restricted treasury balance with one-click audit trail" }
        ],
        trustConsiderations: "Cash donations carry the highest risk of suspicion and regulatory scrutiny. Sidqly's dual-custody verification protects mosque trustees from allegations of mismanagement.",
        reportingConsiderations: "Auditors require proof that cash was counted in presence of two people and banked promptly. Sidqly creates this documentation automatically.",
        faqs: [
            { question: "What is Atiyat box management in Islamic charity operations?", answer: "Atiyat boxes (صناديق العطيات) are physical charity cash collection boxes placed in mosques, Islamic centers, and halal shops. Management involves securing boxes, recording serial numbers, scheduling dual-custody openings, counting denominations, and reconciling with bank deposits." },
            { question: "How does Sidqly prevent cash theft from mosque collection boxes?", answer: "Sidqly enforces a dual-custody protocol where two independent trustees must log in, verify the tamper-evident seal serial number, and sign off on denomination counts before the batch can be approved for banking." },
            { question: "Can Sidqly generate donor receipts for cash placed in an Atiyat box?", answer: "When donors place cash inside an envelope with their name or phone number into the box, Sidqly allows the counters to issue an instant SMS/email digital donation receipt." },
            { question: "Does Sidqly help separate Zakat cash from general Sadaqah in the box?", answer: "Yes. Boxes can be designated specifically for Zakat with dedicated barcodes. When counted, Sidqly automatically routes the funds into the restricted Zakat ledger, ensuring it cannot be co-mingled with general mosque maintenance." }
        ],
        relatedModules: [
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Receipts and Certificates", url: "/modules/receipts-certificates" }
        ],
        relatedUseCases: [
            { title: "Mosques", url: "/use-cases/mosques" },
            { title: "Zakat Committees", url: "/use-cases/zakat-committees" }
        ],
        cta: "Modernize your mosque's Atiyat cash box management with Sidqly."
    },
    {
        slug: "islamic-charity-software-alternatives",
        title: "Islamic Charity Software Alternatives: Factual Comparison Guide",
        metaTitle: "Islamic Charity Software Alternatives | Verified Giving Guide",
        metaDescription: "Factual comparison of alternatives for Islamic charity management, reviewing features, workflows, and limitations honestly.",
        h1: "Islamic Charity Software Alternatives",
        quickAnswer: "Islamic charities historically relied on spreadsheets, generic CRMs, or card widgets. Sidqly is a backend operating platform designed specifically to verify payment screenshots, logically separate Zakat funds, manage field volunteer tasks, and protect beneficiary dignity.",
        audience: ["Muslim NGO Directors", "Operations Managers", "Trustees", "Finance Directors"],
        oldWorksFor: "Organizations looking for general CRM contact lists or simple online fundraising widgets without specialized Islamic compliance.",
        oldDifficultWhen: "You need logical Zakat ledgers, mobile volunteer dispatch mapping, automatic face-blurring, and one-click board packs.",
        sidqlyImproves: "Sidqly connects payments, volunteers, and dignity-safe proof in one secure, backend operational loop.",
        notRightFit: "Sidqly is not the right fit if you only need public fundraising web pages or card payment checkouts. Use generic fundraising alternatives for those front-end needs.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["SaaS Platform and Non-Profit Industry Guides (2026)", "International Shariah Governance Standards"],
        sidqlyLimitations: [
            "We do not provide public online donation pages or direct card checkouts.",
            "Requires staff to manually verify transfers against bank reports.",
            "Not designed for political campaign fundraising or secular membership clubs."
        ],
        competitorLimitations: [
            "Traditional alternatives do not offer automated face-blurring or metadata sanitization.",
            "Lacks specific, audit-ready Zakat fund separation ledgers.",
            "No field-level delivery verification loops for international aid."
        ],
        features: [
            { name: "Post-Donation Ops", old: "Manually managed via folders and messaging chats", sidqly: "Fully-integrated campaign tracking desks" },
            { name: "Privacy Systems", old: "Manual editing or completely ignored", sidqly: "Server-side blurring and EXIF sanitization" },
            { name: "Zakat Isolation", old: "General fund tagging without mathematical isolation", sidqly: "Strict logical separation gates with audit trail" },
            { name: "Volunteer Routing", old: "Informal phone calls and WhatsApp chats", sidqly: "Mobile dispatch with route optimization and completion pins" },
            { name: "Offline Cash Review", old: "Paper ledgers or basic spreadsheet rows", sidqly: "Atiyat box and wire screenshot verification desk" },
            { name: "Compliance Logs", old: "Spreadsheets or manual accounting entries", sidqly: "One-click Shariah & Board audit packs" }
        ],
        workflow: [
            { step: "Intake Evaluation", old: "Applications filed in paper folders or email inboxes", sidqly: "Confidential digital intake portal with anonymous welfare committee review" },
            { step: "Fund Allocation", old: "Money dispersed from pooled checking account", sidqly: "Automated Shariah eligibility checks restrict Zakat disbursements" },
            { step: "Fulfillment Check", old: "No field coordination tools; reliance on verbal updates", sidqly: "Inspect geo-sanitized photos and receiver acknowledgments at review desk" },
            { step: "Donor Reporting", old: "Periodic generic newsletters or un-sanitized photo dumps", sidqly: "Automated dignity-safe donor impact updates with blurred recipient faces" }
        ],
        trustConsiderations: "Traditional software tracks donor data but lacks on-the-ground volunteer or vendor audit loops. Sidqly maintains an unbroken operational trace.",
        reportingConsiderations: "Sponsors require detailed operational summaries. Sidqly generates board-ready packs in seconds.",
        faqs: [
            { question: "Can we use Sidqly alongside other fundraising alternatives?", answer: "Yes, you can use front-end fundraising widgets like Donorbox or LaunchGood to process cards, and import those transaction records into Sidqly to handle campaign operations." },
            { question: "What makes Islamic charity management software different from regular nonprofit software?", answer: "Islamic charity operations require strict adherence to Shariah principles: mathematical isolation of Zakat funds from general operational expenses, modesty protection for beneficiaries, and specific seasonal campaign lifecycles (Ramadan ration packs, Qurbani shares)." },
            { question: "How does Sidqly handle beneficiary dignity compared to alternatives?", answer: "Unlike generic tools that store raw photos in shared folders, Sidqly automatically detects faces and blurs them before donors or the public can view them, preserving the recipient's honor (Izzah)." },
            { question: "Does Sidqly replace our accounting software like QuickBooks or Xero?", answer: "Sidqly works alongside your accounting software. While accounting software records financial ledger entries, Sidqly manages the operational evidence: volunteer tasks, proof of delivery photos, and beneficiary eligibility records." }
        ],
        relatedModules: [
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Board Reporting Teams", url: "/use-cases/board-reporting-teams" }
        ],
        cta: "Explore the modern alternative to fragmented charity management tools."
    },
    {
        slug: "donorbox-alternatives",
        title: "Donorbox Alternatives for Islamic Nonprofits",
        metaTitle: "Donorbox Alternatives | Verified Giving Operations Guide",
        metaDescription: "Explore facts-first Donorbox alternatives for Islamic charities. Compare payments, Zakat ledgers, and operational features.",
        h1: "Donorbox Alternatives for Islamic Nonprofits",
        quickAnswer: "Donorbox is an excellent, lightweight recurring card payment widget. Sidqly is not a payment form. Sidqly acts as a backend operating platform designed specifically to manage manual bank wire reconciliations, separate Zakat ledgers mathematically, track field volunteers, and protect recipient modesty.",
        audience: ["NGO Directors", "Compliance Officers", "Treasurers", "Operations Leads"],
        oldWorksFor: "Embedding a recurring debit/credit card checkout widget on a website and accepting donations via Stripe, PayPal, and Apple Pay.",
        oldDifficultWhen: "You need to log manual cash payments, assign tasks to field vendors, protect beneficiary privacy, or generate board packs.",
        sidqlyImproves: "Sidqly organizes the back-office workflow that happens after payment—reconciling statements manually, managing volunteer deliveries, and blurring photos.",
        notRightFit: "Sidqly is not a payment gateway. If you need online credit card processing or a donor donation form, Donorbox remains a superior tool.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Donorbox and Non-Profit SaaS Sourcing Guides (2026)", "Islamic Philanthropy Research Institute Studies"],
        sidqlyLimitations: [
            "We do not process credit cards or host checkout widgets directly.",
            "Requires manual reconciliation of statements by your finance team.",
            "Does not manage donor credit card recurring billing retry logic."
        ],
        competitorLimitations: [
            "Lacks specific, mathematically isolated Zakat separation ledgers.",
            "No on-the-ground volunteer mapping or vendor task tracking.",
            "Cannot verify offline cash deposits, wire transfers, or mosque collection boxes."
        ],
        features: [
            { name: "Primary Focus", old: "Checkout donation widgets & processing", sidqly: "Backend tracking & verified proof loops" },
            { name: "Zakat Handling", old: "Basic label tagging on forms", sidqly: "Enforced, logically isolated accounting ledgers" },
            { name: "Fulfillment Oversight", old: "None (leaves delivery to emails/chats)", sidqly: "Mobile dispatch and vendor SLA queues" },
            { name: "Modesty Protection", old: "Manual photo scrubbing", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Offline Donation Review", old: "Manual receipt entry only", sidqly: "Dual-custody verification desks for cash and wires" },
            { name: "Audit Reporting", old: "Donation revenue summaries", sidqly: "One-click Shariah & Board audit PDF packs" }
        ],
        workflow: [
            { step: "Payment Logging", old: "Process card payment via Donorbox form", sidqly: "Reconcile direct wires and offline collections in Sidqly review desk" },
            { step: "Fund Segregation", old: "All money pooled into single merchant payout account", sidqly: "Zakat strictly separated into audited, isolated operational buckets" },
            { step: "Fulfillment Dispatch", old: "Staff coordinate volunteers via WhatsApp groups", sidqly: "Volunteers receive mapped delivery tasks with zero face exposure" },
            { step: "Donor Reporting", old: "Standard tax receipt email sent automatically", sidqly: "Audit-stamped digital certificates with sanitized proof of delivery issued" }
        ],
        trustConsiderations: "Processing cards does not guarantee resources reached eligible recipients. Sidqly establishes complete, auditable operational records.",
        reportingConsiderations: "Donorbox reports donation amounts, but Sidqly generates board-ready packs combining finances and visual proofs.",
        faqs: [
            { question: "Can we connect Donorbox to Sidqly?", answer: "Yes, you can import transaction exports from Donorbox into Sidqly to launch volunteer routing, verification, and privacy-safe donor reporting." },
            { question: "Does Donorbox manage volunteer food deliveries?", answer: "No, Donorbox is purely a fundraising checkout tool. Sidqly provides specific mobile volunteer dispatch, driver route tracking, and recipient receipt verification." },
            { question: "How does Sidqly help charities that already use Donorbox?", answer: "Sidqly solves the post-donation gap: once funds arrive via Donorbox, Sidqly verifies how the money is spent, ensures Zakat is segregated, and provides donors with verified delivery proof." },
            { question: "Does Sidqly charge a transaction fee on donations?", answer: "No, Sidqly charges zero transaction fees because it is an operations software platform, not a payment gateway." }
        ],
        relatedModules: [
            { title: "Manual Payment Review", url: "/modules/manual-payment-review" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Donor-Safe Updates", url: "/modules/donor-safe-updates" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Board Reporting Teams", url: "/use-cases/board-reporting-teams" }
        ],
        cta: "See how Sidqly complements your donation forms with operational rigor."
    },
    {
        slug: "launchgood-alternatives",
        title: "LaunchGood Alternatives: Factual Post-Donation Comparison",
        metaTitle: "LaunchGood Alternatives | Factual Platform Comparison Guide",
        metaDescription: "Factual comparison of alternatives to LaunchGood, reviewing crowdfunding vs post-donation verification software.",
        h1: "LaunchGood Alternatives",
        quickAnswer: "LaunchGood is an excellent public crowdfunding platform to attract initial donors and process card transactions. Sidqly is not a crowdfunding portal. Sidqly is a backend operating system designed to verify, track, and audit those donations after they are received, managing manual bank statements, volunteer tasks, and face-blurring privacy-safe proof updates.",
        audience: ["Muslim Charity Directors", "Campaign Managers", "NGO Operations Teams", "Trustees"],
        oldWorksFor: "Attracting global retail donors, processing card transactions, and launching public marketing campaigns during peak periods like Ramadan.",
        oldDifficultWhen: "You need to coordinate drivers, verify manual bank wire transfers, separate Zakat ledgers, blur recipient faces in distribution proof, or generate board packs.",
        sidqlyImproves: "Sidqly focuses entirely on post-donation fulfillment: manual payment verification, task coordination, privacy-safe proof review, and board-ready reporting packs.",
        notRightFit: "Sidqly is not the right fit if you need a public fundraising webpage, marketing outreach, or card processing. You should use LaunchGood for public fundraising and Sidqly for back-office tracking.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["LaunchGood Official Pricing and Platform Guides (2026)", "Crowdfunding in the Muslim World Research Paper"],
        sidqlyLimitations: [
            "We do not process credit cards or host public fundraising campaign pages.",
            "Sidqly relies on manual reconciliation by your finance team against official bank records.",
            "No public donor leaderboards or social sharing buttons."
        ],
        competitorLimitations: [
            "They do not provide on-the-ground volunteer routing or task-level vendor boards.",
            "No built-in face-detection blurring or EXIF metadata scrubbers for modesty compliance.",
            "Cannot enforce mathematical segregation between Zakat and Sadaqah funds."
        ],
        features: [
            { name: "Primary Purpose", old: "Public crowdfunding & card processing", sidqly: "Backend operations & verified proof logs" },
            { name: "Zakat Handling", old: "Self-declared Zakat tags by campaigners", sidqly: "Enforced, isolated logical separation gates" },
            { name: "Fulfillment tracking", old: "None (must use external chats/tools)", sidqly: "Mobile volunteer maps and vendor tasking" },
            { name: "Modesty Protection", old: "Manual editing by charity staff", sidqly: "Automated, server-rendered face-blurring" },
            { name: "Offline Cash Review", old: "Not supported for direct bank transfers", sidqly: "Dedicated screenshot review desk for wire transfers" },
            { name: "Audit Reporting", old: "CSV exports of transaction amounts", sidqly: "One-click Shariah & Board audit packs" }
        ],
        workflow: [
            { step: "Donation Sourcing", old: "Launch public card campaign on LaunchGood", sidqly: "Enter direct manual transfers and import platform summaries into Sidqly" },
            { step: "Fund Segregation", old: "Funds payout into general operating bank account", sidqly: "Zakat and Sadaqah segregated into strictly isolated sub-ledgers" },
            { step: "Fulfillment Proof", old: "Manually compile photos on external storage and chat groups", sidqly: "Volunteers upload straight to review gate with automated timestamp checks" },
            { step: "Reporting to Donors", old: "Publish raw field photos to public campaign page", sidqly: "Deliver sanitized, privacy-safe impact proof preserving recipient honor" }
        ],
        trustConsiderations: "Public platforms publish campaign summaries but do not log individual field deliveries. Sidqly establishes an unbroken trace from bank receipt to direct receipt.",
        reportingConsiderations: "Sponsors require detailed operational logs, not just totals. Sidqly generates complete board packs in seconds.",
        faqs: [
            { question: "Can we use both Sidqly and LaunchGood?", answer: "Yes, this is highly recommended. You can source card donations through LaunchGood and import those transactions into Sidqly to handle delivery, volunteer routing, and privacy-safe proof." },
            { question: "Does LaunchGood handle Zakat fund separation in bank accounts?", answer: "No, LaunchGood routes payments based on campaign tags but does not provide backend software to manage distinct, mathematically isolated Zakat bookkeeping." },
            { question: "Why should an NGO look for LaunchGood alternatives?", answer: "If an NGO already has established institutional donors or collects donations via direct bank wire and cash, they do not need high-fee crowdfunding portals. They need backend operating software like Sidqly to track distribution and maintain audit records." },
            { question: "How does Sidqly protect beneficiary privacy compared to crowdfunding sites?", answer: "Crowdfunding sites often showcase clear photos of needy children and families to boost donations. Sidqly uses automated facial detection to blur recipient faces before images can be shared, adhering strictly to Islamic modesty and child protection ethics." }
        ],
        relatedModules: [
            { title: "Proof Trust Engine", url: "/modules/proof-trust-engine" },
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Donor-Safe Updates", url: "/modules/donor-safe-updates" }
        ],
        relatedUseCases: [
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
            { title: "Ramadan Campaign Teams", url: "/use-cases/ramadan-campaign-teams" }
        ],
        cta: "Discover the post-donation operating platform built for verified giving."
    },
    {
        slug: "qurbanapp-alternatives",
        title: "QurbanApp Alternatives: Comprehensive Eid Giving Operations",
        metaTitle: "QurbanApp Alternatives | Comprehensive Eid Giving Operations",
        metaDescription: "Compare QurbanApp alternatives for Eid ul Adha Qurbani management. Explore year-round operations, vendor coordination, and certificates.",
        h1: "QurbanApp Alternatives for Islamic Charities",
        quickAnswer: "While QurbanApp is specifically tailored for Eid ul Adha animal orders, charities seeking alternatives often need a multi-campaign platform that manages Qurbani along with year-round Zakat, Ramadan ration packs, and ongoing Sadaqah. Sidqly provides comprehensive livestock vendor tracking, portion allocations, and automated donor certificates alongside complete charity operations.",
        audience: ["Qurbani Campaign Directors", "Mosque Treasurers", "Livestock Procurement Leads", "NGO Directors"],
        oldWorksFor: "Organizations running only an isolated 3-day Qurbani campaign without other ongoing charitable programs.",
        oldDifficultWhen: "You need to manage complex case intakes, calculate Nisab, separate Zakat from Sadaqah, route daily Ramadan drivers, or generate audit-ready board packs.",
        sidqlyImproves: "Sidqly provides an all-in-one year-round operating system with 18 integrated modules covering all your charitable campaigns.",
        notRightFit: "Sidqly is not necessary if you only run Qurbani campaigns and have no other operations, Zakat funds, or reporting needs. It is built for multi-campaign groups.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["Eid Qurbani Logistics Benchmark Report (2026)", "Halal Meat Supply Chain Operational Standards"],
        sidqlyLimitations: [
            "We do not offer a public consumer mobile app for browsing goat/cow catalog photos.",
            "Requires staff to configure campaign details and vendor slaughterhouse accounts in the web console.",
            "Not designed for commercial halal butcher retail operations."
        ],
        competitorLimitations: [
            "Strictly single-purpose; inactive for 11 months of the year.",
            "Lacks integrated Zakat fund segregation or Nisab calculators.",
            "Does not support general emergency relief, Ramadan food drives, or volunteer routing."
        ],
        features: [
            { name: "Operational Scope", old: "Single holiday (Eid ul Adha only)", sidqly: "Year-round (Zakat, Ramadan, Qurbani, Sadaqah)" },
            { name: "Portion Tracking", old: "Basic order count list", sidqly: "Automated 1/7 cow portion allocation & tags" },
            { name: "Vendor Logistics", old: "Vendor updates status without validation gates", sidqly: "Field slaughterhouse portal with photo review gate" },
            { name: "Donor Certificates", old: "Generic email text", sidqly: "Automated branded certificates with verified completion pins" },
            { name: "Modesty Compliance", old: "Unfiltered photo uploads", sidqly: "Server-side face blurring on meat distribution photos" },
            { name: "Year-Round Auditing", old: "Isolated seasonal export", sidqly: "Unified year-round Shariah & Board compliance packs" }
        ],
        workflow: [
            { step: "Order & Share Intake", old: "Collect orders through seasonal app forms", sidqly: "Record manual transfers and assign portion shares (1/7 cow or full sheep) in unified system" },
            { step: "Slaughter Verification", old: "Slaughterhouse marks orders done in app", sidqly: "Field inspectors verify ear-tags, halal slaughter logs, and timestamps at review desk" },
            { step: "Meat Distribution", old: "Unmonitored distribution to local groups", sidqly: "Volunteer dispatch mapping guides distribution teams to verified recipient households" },
            { step: "Certificate Issuance", old: "Batch SMS confirmation sent", sidqly: "Generate tamper-evident digital donor certificate with exact execution timestamp" }
        ],
        trustConsiderations: "Single-holiday apps frequently leave donors wondering if slaughter genuinely took place within the prescribed days of Tashreeq. Sidqly enforces verifiable time-stamped proof.",
        reportingConsiderations: "Auditors need to see exact animal counts, vendor invoices, and distribution logs. Sidqly compiles all three into one package.",
        faqs: [
            { question: "What are the best alternatives to QurbanApp for charities?", answer: "For organizations that manage multiple campaigns, Sidqly is the leading alternative, combining Qurbani portion tracking with year-round Zakat, Ramadan, and Sadaqah operations on one platform." },
            { question: "Can Sidqly track Qurbani in multiple countries?", answer: "Yes, Sidqly supports multi-region campaigns, allowing charities to assign orders to slaughterhouses in Pakistan, Yemen, Syria, Turkey, or East Africa with localized pricing." },
            { question: "Does Sidqly verify the days of Tashreeq?", answer: "Yes, Sidqly logs the exact server timestamp and geo-location for every slaughter confirmation photo, proving compliance with Shariah timing requirements." },
            { question: "What happens to donor data after Eid?", answer: "Unlike single-use apps where data is archived, Sidqly retains donor histories so charities can seamlessly follow up with Ramadan and winter relief campaigns." }
        ],
        relatedModules: [
            { title: "Qurbani/Udhiya Lifecycle", url: "/modules/qurbani-lifecycle" },
            { title: "Receipts and Certificates", url: "/modules/receipts-certificates" },
            { title: "Vendor Fulfillment", url: "/modules/vendor-fulfillment" }
        ],
        relatedUseCases: [
            { title: "Qurbani Organizers", url: "/use-cases/qurbani-organizers" },
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" }
        ],
        cta: "Upgrade from single-purpose apps to Sidqly's complete giving operations platform."
    },
    {
        slug: "zakat-management-software-alternatives",
        title: "Zakat Management Software Alternatives: Logical Fund Isolation Guide",
        metaTitle: "Zakat Management Software Alternatives | Shariah Fund Isolation",
        metaDescription: "Factual guide to Zakat management software alternatives. Compare Nisab calculations, logical fund isolation, and Shariah audit trails.",
        h1: "Zakat Management Software Alternatives",
        quickAnswer: "Most donation tools treat Zakat as a generic fundraising category or label tag. In Islamic jurisprudence, Zakat is a divine trust (Amanah) that must remain strictly isolated from general operating funds, marketing budgets, and building expenses. Sidqly provides native logical fund separation gates, Asnaf eligibility workflows, and one-click Shariah board audit packs.",
        audience: ["Zakat Committee Members", "Shariah Scholars", "Charity Treasurers", "NGO Directors"],
        oldWorksFor: "Organizations with very simple Zakat flows where all collected funds are immediately wired to a single partner agency without local distribution.",
        oldDifficultWhen: "You need to manage local Asnaf welfare applications, ensure zero co-mingling with overhead costs, calculate gold/silver Nisab, or provide external scholars with audit trails.",
        sidqlyImproves: "Sidqly enforces mathematical isolation gates between Zakat and Sadaqah, automates confidential applicant intake, and generates verifiable Shariah compliance packs.",
        notRightFit: "Sidqly is not a bank or legal fiduciary. You still maintain your own bank accounts; Sidqly provides the operational and bookkeeping controls that govern them.",
        lastReviewed: "Last reviewed on November 2026",
        sourceReferences: ["AAOIFI Shariah Standard No. 35 on Zakah", "World Zakat Forum Operational Guidelines"],
        sidqlyLimitations: [
            "Sidqly does not hold or custody cash directly; your organization manages its own banking.",
            "Requires administrative review of applicant proof documents against Nisab thresholds.",
            "Does not offer automated legal tax exemption filing in individual jurisdictions."
        ],
        competitorLimitations: [
            "Generic nonprofit CRMs lack Shariah concepts of Asnaf, Nisab, and Hawl.",
            "Traditional donation widgets co-mingle Zakat with general revenue in a single bank payout.",
            "No confidential beneficiary intake with anonymized scholar review."
        ],
        features: [
            { name: "Fund Isolation", old: "Text tags in spreadsheet or CRM", sidqly: "Enforced, logically isolated accounting ledgers" },
            { name: "Asnaf Allocation", old: "Manual guessing by staff", sidqly: "Guided 8-Asnaf categories per Quranic guidance" },
            { name: "Nisab Calculator", old: "External manual calculator checks", sidqly: "Real-time Gold & Silver Nisab threshold integration" },
            { name: "Applicant Dignity", old: "Paper forms or public office queues", sidqly: "Encrypted intake portal with anonymous alias review" },
            { name: "Disbursement Proof", old: "Unverified cash handoffs", sidqly: "Dignity-safe merchant QR vouchers or bank wire verification" },
            { name: "Shariah Audit Pack", old: "Days of manual spreadsheet reconciliations", sidqly: "One-click Shariah & Board audit PDF packs" }
        ],
        workflow: [
            { step: "Zakat Collection", old: "Donor selects 'Zakat' tag on generic website form", sidqly: "Donation routed into logically isolated Zakat ledger with zero overhead deductions" },
            { step: "Eligibility Verification", old: "Applicant brings bank statements to public mosque office", sidqly: "Confidential upload to Sidqly portal; committee reviews under anonymous alias" },
            { step: "Aid Disbursement", old: "Cash handed to recipient with photo taken for evidence", sidqly: "Digital QR voucher issued for halal grocer or direct wire verified with zero photo exploitation" },
            { step: "Scholar Audit", old: "Scholars inspect paper receipts and bank books manually", sidqly: "One-click Shariah audit report proves 100% Zakat delivery to eligible Asnaf" }
        ],
        trustConsiderations: "Donors fear their Zakat is being consumed by marketing overheads or administrative salaries. Sidqly provides mathematical proof that 100% of designated Zakat reaches verified recipients.",
        reportingConsiderations: "Islamic scholars and boards require granular transaction logs. Sidqly generates comprehensive Shariah audit packs instantly.",
        faqs: [
            { question: "What are the top alternatives for Zakat management software?", answer: "While generic software like Salesforce or Bloomerang requires extensive custom configuration, Sidqly is the leading dedicated platform built specifically for Islamic charities and Zakat committees." },
            { question: "How does Sidqly ensure Zakat funds are not spent on administrative overhead?", answer: "Sidqly enforces logical accounting separation gates. When funds are marked as Zakat, the platform strictly disallows assigning those funds to operational, marketing, or general expense tasks." },
            { question: "Can our Shariah board inspect Sidqly audit records?", answer: "Yes, you can generate comprehensive Shariah audit packs or grant read-only auditor access to your scholars so they can verify compliance directly." },
            { question: "Does Sidqly support Dignity QR vouchers for Zakat aid?", answer: "Yes, Sidqly's Dignity QR Voucher module allows needy families to redeem Zakat aid at partner halal grocers using a confidential phone QR code, completely eliminating humiliating public food lines." }
        ],
        relatedModules: [
            { title: "Zakat Fund Separation", url: "/modules/zakat-fund-separation" },
            { title: "Charity Request Intake", url: "/modules/charity-request-intake" },
            { title: "Dignity QR Vouchers", url: "/modules/dignity-qr-vouchers" }
        ],
        relatedUseCases: [
            { title: "Zakat Committees", url: "/use-cases/zakat-committees" },
            { title: "Islamic Charities", url: "/use-cases/islamic-charities" }
        ],
        cta: "Implement rigorous Shariah Zakat fund isolation with Sidqly."
    }
];
