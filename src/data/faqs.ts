export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const stakeholderGroups = [
  {
    category: "Mosques",
    faqs: [
      { q: "What is Sidqly for mosques?", a: "Sidqly is a professional operating platform that helps mosques manage Friday collections, donation campaigns, and donor updates with transparent, board-ready reporting." },
      { q: "Can Sidqly replace WhatsApp and Excel?", a: "Yes. Sidqly centralizes the fragmented coordination of WhatsApp and the data silos of Excel into a unified, secure system." },
      { q: "How does manual payment review work for mosques?", a: "Team members manually verify bank transfers and screenshots before they enter impact reports, ensuring your records are always accurate." },
      { q: "Can we issue automated receipts?", a: "Yes, once a payment is verified, Sidqly can generate and deliver professional, branded receipts to your donors." },
      { q: "How is donor privacy protected?", a: "We use strict role-based access so only authorized board members can see sensitive donor details." },
      { q: "Can we track specific construction projects?", a: "Yes, you can create distinct funds and campaigns for construction, education, or maintenance." },
      { q: "Is it easy for non-technical board members?", a: "Our reporting dashboards are designed for simplicity, providing 'at-a-glance' clarity for leadership teams." },
      { q: "Can we manage Ramadan collections?", a: "Sidqly handles the peak volume of Ramadan collections with dedicated workflows and real-time status updates." },
      { q: "How do we handle cash donations?", a: "Cash can be manually logged into the system to maintain a complete and verified digital audit trail." },
      { q: "Can we start with a pilot for one campaign?", a: "Absolutely. Many mosques start by moving their Zakat or a specific project to Sidqly first." },
      { q: "Can we track donor pledges?", a: "Yes, you can log pledges and track fulfillment over time, helping with project budgeting." },
      { q: "Does Sidqly handle mosque utility bills?", a: "No, Sidqly is focused on giving operations. We recommend general accounting software for operational expenses." },
      { q: "How do we prepare for the annual general meeting (AGM)?", a: "Sidqly generates comprehensive annual giving reports that are ready for presentation to your congregation and board." },
      { q: "Can we track Sadaqah Jariyah specifically?", a: "Yes, you can categorize and track long-term endowment projects separately." },
      { q: "Is there a limit on the number of donors?", a: "No, Sidqly is built to scale with your mosque's growth." }
    ]
  },
  {
    category: "Islamic Charities",
    faqs: [
      { q: "How does Sidqly help Islamic charities?", a: "We provide the 'operating system' for charities to manage intake, field verification, proof approval, and professional donor reporting." },
      { q: "Can we manage charity requests and screening?", a: "Yes, Sidqly includes a dignified intake module for tracking and screening community aid applications." },
      { q: "How is recipient dignity protected in proof?", a: "Our Proof Trust Engine automatically blurs faces and encrypts identifiers before updates are shared with donors." },
      { q: "Is Sidqly audit-ready?", a: "Every status change and approval is logged with a full audit trail, meeting the transparency needs of donors and regulators." },
      { q: "Can field teams upload proof directly?", a: "Yes, field staff and volunteers can upload evidence directly, which then goes to your management for approval." },
      { q: "Does Sidqly decide Zakat eligibility automatically?", a: "No. Sidqly supports your workflow, but all final eligibility decisions must be made manually by your team." },
      { q: "Can we manage international distribution?", a: "Yes, the platform tracks distribution across different locations, teams, and service lines." },
      { q: "How do we share impact with large sponsors?", a: "Sidqly generates secure, non-indexed links and professional PDF reports tailored for sponsors." },
      { q: "Can we track volunteer hours?", a: "Yes, the volunteer module logs shifts and attendance for comprehensive impact reporting." },
      { q: "Can we manage different aid categories?", a: "Yes, you can define custom aid types like medical, educational, or emergency relief." },
      { q: "How do we handle multi-currency donations?", a: "Sidqly supports tracking in both local and international currencies for global operations." },
      { q: "Is there a vendor portal for fulfillment?", a: "Yes, vendors can receive tasks and upload proof of delivery directly through Sidqly." },
      { q: "How do we prevent duplicate case files?", a: "The intake module flags potential duplicates based on name, ID, or contact details." },
      { q: "Can we customize the approval levels?", a: "Yes, you can set up multi-stage approval workflows for high-value aid disbursements." }
    ]
  },
  {
    category: "Qurbani Providers",
    faqs: [
      { q: "What does Sidqly do for Qurbani teams?", a: "Sidqly provides a premium operating platform to track animal bookings, share allocations, vendor fulfillment, and donor-safe proof of distribution." },
      { q: "Does Sidqly replace our Qurbani spreadsheets?", a: "Yes. Sidqly replaces fragmented spreadsheets with a real-time tracking system that connects bookings directly to field proof and certificates." },
      { q: "Can we track animal shares and bookings?", a: "Yes, our Qurbani module is built specifically to handle the booking and allocation of animal shares in real-time." },
      { q: "How do we provide proof of slaughter?", a: "Vendors upload proof directly to the platform, which your team verifies before generating donor certificates." },
      { q: "Can we generate Qurbani certificates?", a: "Yes, professional certificates are automatically prepared for every donor once the distribution is approved." },
      { q: "How do we manage slaughterhouse vendors?", a: "Our vendor portal allows you to assign tasks and track completion status across multiple partners." },
      { q: "Can donors see their specific distribution?", a: "Yes, Sidqly provides verified, donor-specific updates via secure links." },
      { q: "Can we handle late bookings?", a: "The system tracks available shares in real-time, allowing you to manage intake up to the day of Eid." },
      { q: "How do we handle share refunds?", a: "Manual review gates allow you to process cancellations and re-allocate shares as needed." },
      { q: "Can we track distribution to specific villages?", a: "Yes, distribution can be tracked by location, batch, and date for detailed reporting." },
      { q: "What data can we track for each animal?", a: "You can track species, share count, vendor assignment, slaughter timestamp, and distribution location." },
      { q: "How does manual payment review work for Qurbani?", a: "Finance teams manually verify payment screenshots before shares are confirmed, preventing over-booking based on unverified bank transfers." },
      { q: "Can we approve proof before donors see it?", a: "Yes. All field evidence uploaded by vendors stays in a review queue until your team approves it for donor visibility." },
      { q: "How is recipient privacy maintained?", a: "Sidqly's Proof Trust Engine enforces a dignity-safe boundary, automatically blurring faces in distribution photos." },
      { q: "Can we manage different Qurbani locations?", a: "Yes, you can track distribution across multiple regions, countries, or specific local slaughterhouses." },
      { q: "Can we run a pilot for one region first?", a: "Absolutely. Many providers start with one region to test the workflow before scaling to their entire operation." },
      { q: "How much does the Qurbani module cost?", a: "Pricing depends on your plan and the number of shares. Please see our pricing page or book a demo." },
      { q: "How do we pay for Sidqly?", a: "We accept payments via Easypaisa Pakistan. Subscriptions are confirmed after manual payment verification." },
      { q: "What should we prepare before a Qurbani demo?", a: "Have a list of your animal types, vendor counts, and current booking process ready for discussion." },
      { q: "How do we fill the inquiry form?", a: "Visit sidqly.com/inquiry-form to provide details about your Qurbani scale and current challenges." }
    ]
  },
  {
    category: "Ramadan Food Drives",
    faqs: [
      { q: "Can we track daily Iftar meal distribution?", a: "Yes, you can track distribution by batch, location, and date throughout the holy month." },
      { q: "How do we manage ration pack delivery?", a: "Sidqly provides status tracking for every ration pack, from packing to final delivery." },
      { q: "Can we coordinate volunteer shifts for Ramadan?", a: "Yes, our volunteer management module handles shift assignments and attendance for busy Ramadan nights." },
      { q: "How do we handle Zakat-ul-Fitr (Fitrana)?", a: "Fitrana can be tracked as a distinct fund type with its own intake and disbursement rules." },
      { q: "Can donors get real-time updates?", a: "Yes, organizations can send dignity-safe updates to donors as distribution happens on the ground." }
    ]
  },
  {
    category: "Zakat Teams",
    faqs: [
      { q: "How is Zakat fund separation enforced?", a: "Sidqly uses logical and operational filters at the point of entry to ensure Zakat and Sadaqah funds never mix." },
      { q: "Can we track the full Zakat case lifecycle?", a: "Yes, from intake and Mufti review notes to manual disbursement and impact proof." },
      { q: "Is there an automatic fraud detection tool?", a: "No. We provide the tools for your team to identify issues, but we believe in manual, human-led verification." },
      { q: "How is requester data privacy maintained?", a: "Sensitive requester data is logically isolated and only visible to authorized case reviewers." },
      { q: "Can we generate annual Zakat reports?", a: "Yes, Sidqly provides board-ready summaries of all Zakat collections and disbursements." },
      { q: "Can we attach Mufti review notes?", a: "Yes, each case file allows for internal notes and religious rulings to be attached." },
      { q: "How do we track Zakat disbursement aging?", a: "Reporting tools help you track how long Zakat funds have been held and prioritize disbursement." }
    ]
  },
  {
    category: "Corporate CSR / Zakat",
    faqs: [
      { q: "Can corporate sponsors get board-ready reports?", a: "Yes, Sidqly generates professional impact summaries suitable for corporate board presentations and CSR audits." },
      { q: "Can we track employee matching programs?", a: "Yes, the platform can track donations by team or individual for matching contribution logs." },
      { q: "Is the proof professional enough for CSR?", a: "Our dignity-safe proof is designed for high-standard reporting, providing verification without compromising privacy." },
      { q: "How do we manage corporate sponsored campaigns?", a: "You can create whitelabeled project views and dedicated impact reports for institutional partners." },
      { q: "Can employees see the impact of their giving?", a: "Organizations can provide staff with dignity-safe impact links to boost engagement and trust." }
    ]
  },
  {
    category: "Board & Leadership",
    faqs: [
      { q: "Can we get real-time financial summaries?", a: "Yes, Sidqly provides management dashboards that show collections and disbursements in real-time." },
      { q: "Is the system secure enough for our data?", a: "Amanah is our foundation. We use industry-standard encryption and strict logical data isolation." },
      { q: "How does Sidqly help with annual audits?", a: "Every status change, payment, and approval has a detailed timestamped log for auditors." },
      { q: "Can we manage multiple branches?", a: "Yes, Sidqly supports multi-branch organizations with consolidated board-level reporting." },
      { q: "How do we ensure staff accountability?", a: "Granular roles and permission tracking show exactly who approved which payment or proof." }
    ]
  },
  {
    category: "Donors",
    faqs: [
      { q: "How do I know my donation was used correctly?", a: "Sidqly provides verified proof of impact through secure links, ensuring your contribution reaches its intended purpose." },
      { q: "Is my privacy protected?", a: "Yes, we prioritize donor and recipient privacy. We never share your data with third parties." },
      { q: "How do I get my official receipt?", a: "Receipts are automatically generated and emailed to you once the organization verifies your payment." },
      { q: "Why is the impact proof blurred?", a: "We blur faces to protect the dignity of recipients, as per our 'Dignity-Safe' commitment." },
      { q: "Can I choose which campaign my money goes to?", a: "Yes, organizations can provide options for Zakat, Sadaqah, or specific projects." }
    ]
  },
  {
    category: "Vendors & Volunteers",
    faqs: [
      { q: "How do vendors receive tasks?", a: "Vendors have access to a simplified portal where they can view assigned tasks and upload proof of fulfillment." },
      { q: "How are volunteer hours tracked?", a: "Volunteers can check in/out of shifts, allowing organizations to report on total service hours." },
      { q: "Can vendors see donor details?", a: "No. Vendors only see the operational data necessary for fulfillment (e.g. delivery location or task description)." },
      { q: "How do I upload field proof?", a: "Field teams can upload photos or notes directly via mobile, which then go to management for approval." }
    ]
  }
];

const generalCategories = [
  {
    category: "General",
    faqs: [
      { q: "What is Sidqly?", a: "Sidqly is a premium global operating platform for Islamic organizations to manage verified giving, dignity-safe proof, and board-ready reporting." },
      { q: "Is Sidqly a mosque website builder?", a: "No. While we provide donor-facing interfaces, Sidqly is an operational tool for the 'middle' and 'back' of your mission." },
      { q: "What countries does Sidqly support?", a: "Sidqly is an international platform designed for organizations across the UK, Europe, North America, MENA, and South Asia." },
      { q: "Can Sidqly replace our existing CRM?", a: "Sidqly is focused on giving operations. It can complement your current donor database or act as a primary platform for organizations focused on impact verification." }
    ]
  },
  {
    category: "Pricing & Purchase",
    faqs: [
      { q: "How does pricing work?", a: "We offer monthly and annual plans in USD and PKR. Pricing scales based on the number of modules and your organization's size." },
      { q: "How do we pay?", a: "Payments are made via Easypaisa Pakistan. We manually review every payment for professional onboarding." },
      { q: "Can we book a demo first?", a: "Yes, we encourage all organizations to book a demo via Calendly to see how Sidqly fits their specific workflow." },
      { q: "Why fill the inquiry form?", a: "The form helps us understand your organization's scale and service lines before our first strategy call." }
    ]
  }
];

export const faqs: FAQ[] = [
  ...stakeholderGroups.flatMap(group =>
    group.faqs.map(f => ({
      category: group.category,
      question: f.q,
      answer: f.a
    }))
  ),
  ...generalCategories.flatMap(group =>
    group.faqs.map(f => ({
      category: group.category,
      question: f.q,
      answer: f.a
    }))
  )
];
