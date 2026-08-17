import type { LocationLink, LocationRecord } from './locationTypes';

export const locationModuleRecommendations: Record<string, LocationLink[]> = {
  // REGIONS
  "gulf": [
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Coordinates Udhiyah shares, slaughterhouse allocations, vendor updates, and donor certificates during Eid-ul-Adha across Gulf operations."
    },
    {
      label: "Corporate CSR / Zakat Reporting",
      href: "/modules/corporate-csr-zakat",
      description: "Produces executive PDF reporting summaries suitable for corporate sponsors, patrons, and institutional leadership in the Gulf."
    },
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Centralizes review of high-volume direct bank transfer receipts and wire submissions for Gulf-based campaigns."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains strict operational ledger boundaries between Zakat-eligible welfare and general Sadaqah collections."
    }
  ],
  "north-america": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Streamlines verification of direct deposit receipts, Zelle transfers, and wire confirmations submitted by North American donors."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Enforces automatic face-blurring and privacy controls before distribution updates are shared with community donors."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates clean financial balance sheets and operational summaries for 501(c)(3) and nonprofit board governance."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Provides clear fund segregation between designated Zakat hardship funds and general mosque capital or operational accounts."
    }
  ],
  "europe": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies direct bank transfer receipts and payment confirmations across European banking channels."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends secure, dignity-safe campaign fulfillment updates to European Muslim community donors."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains permanent timestamped logs for internal governance and registered charity compliance across Europe."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates seasonal Iftar drives, ration pack distributions, and volunteer schedules for European communities."
    }
  ],
  "middle-east": [
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "End-to-end management of Udhiyah orders, animal share assignments, vendor tracking, and donor completion notices."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Enforces strict operational tagging to keep Zakat assistance separate from general Sadaqah initiatives."
    },
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Multi-stage field proof review that sanitizes distribution images before public release."
    },
    {
      label: "Donor Communication",
      href: "/modules/donor-communication",
      description: "Delivers clear, professional campaign updates directly to regional supporters."
    }
  ],
  "south-asia": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Replaces chaotic WhatsApp screenshot verification with a structured queue for mobile bank transfers (EasyPaisa, JazzCash, UPI, direct deposit)."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Manages large-scale Ramadan ration bag procurement, distribution route logs, and volunteer deployments."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Tracks animal share bookings, slaughterhouse vendor updates, and field proof during Bakra Eid drives."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Processes family hardship applications and welfare assistance requests while preserving applicant dignity."
    }
  ],
  "asia-pacific": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates electronic transfer receipts and bank deposit confirmations across Asia Pacific networks."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Deploys field volunteers, assigns delivery tasks, and collects completion proof seamlessly."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Tracks Korban / Udhiyah share assignments, vendor distribution logs, and donor proof certificates."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Compiles concise operational and financial progress reports for community organization boards."
    }
  ],
  "africa": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Multi-stage field evidence verification ensuring recipient dignity before publishing impact updates."
    },
    {
      label: "Vendor Fulfillment",
      href: "/modules/vendor-fulfillment",
      description: "Provides local suppliers and distribution partners a streamlined portal to upload field proof and delivery notes."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Generates private, encrypted update links for international donors funding African relief projects."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Organizes food pack procurement, delivery routes, and field distribution logs across regional relief programs."
    }
  ],

  // COUNTRIES
  "united-kingdom": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Organizes UK direct bank transfer receipts and online donation proof into a secure admin queue for UK charity teams."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Produces audit-ready financial summaries and campaign status packs for UK charity trustees and governance meetings."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers dignified, privacy-filtered progress reports to UK donors supporting domestic or international appeals."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains clear operational ledger separation between Zakat hardship funds and general charity accounts in the UK."
    }
  ],
  "united-states": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates Zelle, wire transfers, ACH deposits, and check receipts into a single verification queue for US nonprofits."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Enforces strict ledger segregation between local Zakat assistance and mosque expansion or general Sadaqah funds."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains permanent timestamped approval logs required for board audits and 501(c)(3) internal compliance in the US."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Protects local food pantry and hardship recipients by blurring faces prior to sharing impact media."
    }
  ],
  "canada": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Simplifies verification of direct deposit receipts and e-Transfer confirmations for Canadian Islamic charities."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Filters and anonymizes local beneficiary images before publishing updates to Canadian community donors."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates clear, structured financial reports for Canadian mosque committees and charity board meetings."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Coordinates field teams for local food drives, community events, and Ramadan volunteer shifts across Canada."
    }
  ],
  "united-arab-emirates": [
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Provides strict operational fund tagging for Zakat campaigns and welfare initiatives in the UAE."
    },
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Ensures multi-stage review of fulfillment evidence and recipient privacy before sharing impact proof."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Coordinates Udhiyah share assignments, slaughterhouse fulfillment, and verified delivery proof across the Emirates."
    },
    {
      label: "Corporate CSR / Zakat Reporting",
      href: "/modules/corporate-csr-zakat",
      description: "Generates executive PDF summaries tailored for corporate CSR sponsors and institutional giving partners in the UAE."
    }
  ],
  "saudi-arabia": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies direct bank transfer receipts and payment confirmations for charity appeals across the Kingdom."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains clear operational segregation for Zakat eligibility workflows and general welfare funds."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends dignified, privacy-protected completion reports to community patrons and institutional donors."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Manages Udhiyah share allocations, vendor slaughter schedules, and execution proof during Eid-ul-Adha."
    }
  ],
  "qatar": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies field evidence and sanitizes beneficiary images before publishing campaign updates in Qatar."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Keeps an immutable administrative log of all payment reviews, approvals, and fund disbursements."
    },
    {
      label: "Corporate CSR / Zakat Reporting",
      href: "/modules/corporate-csr-zakat",
      description: "Compiles board-ready reporting packs for institutional sponsors and CSR foundation committees in Qatar."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Enforces strict operational boundaries between Zakat-designated relief and general Sadaqah collections."
    }
  ],
  "kuwait": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates direct bank transfer confirmations and wire receipts into a structured admin review queue in Kuwait."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Logically separates Zakat allocations from general Sadaqah and Waqf operational funds."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Prepares executive reporting summaries for committee leadership and patron boards."
    },
    {
      label: "Donor Communication",
      href: "/modules/donor-communication",
      description: "Automates clear, dignified status updates for donors supporting local and international appeals."
    }
  ],
  "bahrain": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Multi-stage verification queue that ensures field distribution photos protect recipient dignity before release."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Provides encrypted, privacy-safe update links to community donors in Bahrain."
    },
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Manages direct bank deposit screenshot reviews and contribution logging systematically."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Organizes local volunteer teams for community food drives and seasonal campaign tasks."
    }
  ],
  "oman": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Structures incoming direct bank transfer proof and payment confirmations for Omani welfare teams."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains full action history and reviewer logs for all financial and fulfillment approvals in Oman."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Separates Zakat hardship funds from general community charity and Amanah initiatives."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers dignified, sanitized delivery confirmation reports to donors across Oman."
    }
  ],
  "pakistan": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Replaces messy WhatsApp queues by verifying mobile transfers (EasyPaisa, JazzCash, bank screenshots) in a structured admin dashboard."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "End-to-end management of animal shares, slaughterhouse vendors, field proof, and donor certificates for Bakra Eid in Pakistan."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates high-volume Ramadan ration pack assembly, route assignments, and daily distribution logs."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Screens local welfare and hardship applications in a private queue to ensure dignified community support."
    }
  ],
  "india": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Enforces mandatory image sanitization and recipient privacy controls before field updates are shared."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains distinct operational ledgers for Zakat eligibility reviews and general Sadaqah collections."
    },
    {
      label: "Sadaqah Campaigns",
      href: "/modules/sadaqah-campaigns",
      description: "Tracks general welfare projects, water well installations, and medical relief campaigns from contribution to delivery."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Organizes Iftar meal drives and ration bag distribution across Indian local community networks."
    }
  ],
  "malaysia": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Manages online bank transfer screenshots and direct payment receipts in a centralized verification queue in Malaysia."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Coordinates Korban share orders, vendor slaughter schedules, and digital execution proof certificates."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates clear financial progress and fund balance reports for community organization boards."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Deploys volunteer field teams for sedekah distribution and community welfare operations."
    }
  ],
  "indonesia": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies field evidence and blurs beneficiary faces before publishing updates for Indonesian zakat initiatives."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Structures task assignments and field instructions for large networks of community volunteers."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers secure, privacy-preserving completion updates to supporters across Indonesia."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Manages sembako / ration package assembly, field routes, and distribution tracking during Ramadan."
    }
  ],
  "australia": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates direct bank transfer receipts and EFT payment confirmations into a clear verification queue for Australian charities."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Enforces privacy safeguards so local hardship recipients are treated with complete dignity."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Provides complete, timestamped audit trails for Australian mosque and nonprofit board compliance."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Coordinates volunteer rosters and task lists for community food programs and mosque events across Australia."
    }
  ],
  "south-africa": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Sanitizes field photos and verifies distribution evidence before sharing progress updates."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Generates secure impact cards for South African donors supporting local feeding programs and welfare drives."
    },
    {
      label: "Vendor Fulfillment",
      href: "/modules/vendor-fulfillment",
      description: "Connects local suppliers and distribution partners to submit digital proof of delivered goods."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates food pack distribution, Iftar meal logistics, and daily reporting during Ramadan."
    }
  ],

  // CITIES - Specific Local Context Overrides & Contextualizations

  // UK Cities
  "london-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates high-volume UK bank transfer screenshots from London donors into a secure, audit-ready admin queue."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates executive summaries and financial packs for London mosque trustees and registered charity boards."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends dignity-safe impact reports to Greater London donors funding local community or international aid."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains strict ledger boundaries between London Zakat hardship funds and general mosque collections."
    }
  ],
  "birmingham-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Processes direct bank deposit receipts from Birmingham community appeals with clear admin approvals."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates local food parcel drives and Iftar distribution across Birmingham neighborhoods."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Manages local volunteer shifts for community food banks and mosque collection drives in Birmingham."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Protects local beneficiary privacy by auto-blurring faces before updates are shared with donors."
    }
  ],
  "manchester-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Tracks donor bank transfer receipts for Greater Manchester mosque and charity campaigns."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Processes community welfare and hardship applications in Manchester through a private, secure queue."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Keeps timestamped records of all payment approvals and fund disbursements for Manchester trustee reviews."
    },
    {
      label: "Donor Communication",
      href: "/modules/donor-communication",
      description: "Automates clear, professional receipt notifications to Manchester community supporters."
    }
  ],
  "leicester-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Simplifies verification of bank transfers submitted during Leicester mosque and charity drives."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Organizes seasonal ration box assembly and distribution logs across Leicester."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Ensures local Zakat collections remain strictly separated from general Sadaqah and operating expenses."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Provides structured financial summaries for Leicester committee meetings."
    }
  ],

  // US Cities
  "new-york-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates Zelle, wire transfers, and direct deposit receipts from NYC donors into a unified admin queue."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains clear operational ledgers between local NYC Zakat hardship funds and general Islamic center accounts."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Generates permanent timestamped logs required for NY 501(c)(3) nonprofit compliance and board audits."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Safeguards local food pantry and welfare recipients by anonymizing field images before donor sharing."
    }
  ],
  "houston-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies direct bank deposits and transfer confirmations submitted for Houston mosque and relief initiatives."
    },
    {
      label: "Sadaqah Campaigns",
      href: "/modules/sadaqah-campaigns",
      description: "Manages local disaster relief, emergency assistance, and community welfare projects across Houston."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Organizes volunteer shifts for food drives, disaster relief dispatch, and Ramadan activities in Houston."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends verified, privacy-sanitized impact updates to supporting donors in Greater Houston."
    }
  ],
  "chicago-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Replaces scattered chat receipts with a structured admin review queue for Chicago community appeals."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Handles sensitive community assistance requests and hardship applications in Chicagoland discreetly."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Compiles clear board presentation packs for Chicago Islamic center trustees."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Ensures strict ledger segregation between Zakat eligibility cases and general charity funds."
    }
  ],
  "dallas-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Organizes bank transfers and payment proof for Dallas-Fort Worth Islamic center campaigns."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains clear financial logs and reviewer activity tracking for DFW nonprofit board governance."
    },
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies distribution evidence before public release while protecting recipient privacy."
    },
    {
      label: "Donor Communication",
      href: "/modules/donor-communication",
      description: "Automates professional receipting and campaign updates for Dallas donor networks."
    }
  ],

  // Canada Cities
  "toronto-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates e-Transfer screenshots and direct bank transfer confirmations for GTA Islamic charities."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Protects local food bank and hardship beneficiaries in Toronto by automatically blurring faces in updates."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Produces audit-friendly balance sheets for Toronto mosque committees and charity board members."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Coordinates volunteer dispatch for local community drives, food banks, and Ramadan events in Toronto."
    }
  ],
  "mississauga-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Tracks incoming direct bank deposit receipts for Mississauga Islamic organizations and mosques."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Organizes seasonal food pack distribution and volunteer schedules across Mississauga."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains clear ledger separation between Zakat hardship relief and mosque capital funds."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers encrypted, dignity-safe progress reports to community donors in Mississauga."
    }
  ],

  // Gulf Cities
  "dubai-islamic-charity-software": [
    {
      label: "Corporate CSR / Zakat Reporting",
      href: "/modules/corporate-csr-zakat",
      description: "Generates executive PDF impact reports tailored for corporate sponsors and institutional foundations in Dubai."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains strict operational ledger boundaries for Dubai-based Zakat eligibility reviews and campaign funds."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Coordinates Udhiyah share allocations, slaughterhouse vendor updates, and digital certificates during Eid."
    },
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Streamlines verification of corporate and individual bank transfer submissions in Dubai."
    }
  ],
  "abu-dhabi-islamic-charity-software": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies multi-stage field evidence and enforces privacy protection for local and international distribution."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains permanent administrative logs of payment reviews, approvals, and disbursement notes in Abu Dhabi."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Provides structured fund tracking separating Zakat allocations from general Sadaqah initiatives."
    },
    {
      label: "Corporate CSR / Zakat Reporting",
      href: "/modules/corporate-csr-zakat",
      description: "Produces board-ready summary packs for Abu Dhabi leadership and institutional patrons."
    }
  ],
  "riyadh-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies direct bank deposit receipts and transaction proof for charity appeals across Riyadh."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Separates Zakat hardship relief logically from general Sadaqah and seasonal campaigns in Riyadh."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Tracks Udhiyah share assignments, vendor slaughter schedules, and delivery confirmations during Eid."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends sanitized completion updates to Riyadh patrons while preserving recipient privacy."
    }
  ],

  // Pakistan Cities
  "karachi-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Replaces chaotic WhatsApp screenshot reviews with a structured admin queue for mobile bank transfers (EasyPaisa, JazzCash, bank receipts) in Karachi."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates large-scale ration pack procurement, delivery route logs, and volunteer tasks across Karachi neighborhoods."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Tracks Bakra Eid animal share bookings, slaughterhouse vendor updates, field proof, and donor completion certificates in Karachi."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains strict operational ledgers separating Zakat funds from general Sadaqah collections for Karachi welfare organizations."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Processes family hardship applications and welfare support requests in Karachi through a private, dignity-preserving queue."
    }
  ],
  "lahore-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies mobile bank transfer screenshots and direct deposit receipts for Lahore welfare organizations."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Manages Udhiyah share assignments, vendor slaughterhouse tracking, and donor proof certificates across Lahore."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Organizes Iftar ration pack assembly, volunteer schedules, and daily distribution reports in Lahore."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Deploys field volunteer teams with clear task instructions and proof submission rules."
    }
  ],
  "islamabad-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Organizes bank transfer proof and donor receipts into an administrative review queue in Islamabad."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates clean financial and operational reporting packs for Islamabad charity trust boards."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains complete audit trails of reviewer approvals and welfare disbursements."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers privacy-protected fulfillment updates to Islamabad donors and institutional patrons."
    }
  ],

  // India Cities
  "hyderabad-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates UPI screenshots and direct bank transfer proofs for Hyderabad masjid trusts and welfare groups."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates food pack distribution and Iftar meal drives across Hyderabad localities."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Ensures Zakat eligibility funds remain separate from general Sadaqah and masjid funds."
    },
    {
      label: "Charity Request Intake",
      href: "/modules/charity-request-intake",
      description: "Processes community hardship and medical aid applications privately to maintain applicant dignity."
    }
  ],
  "mumbai-islamic-charity-software": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Enforces image sanitization and face-blurring before sharing welfare distribution updates in Mumbai."
    },
    {
      label: "Sadaqah Campaigns",
      href: "/modules/sadaqah-campaigns",
      description: "Tracks general relief projects, medical assistance, and community welfare initiatives in Mumbai."
    },
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies incoming bank deposit receipts and online transfer proofs systematically."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Manages local volunteer deployments for field distribution and campaign activities across Mumbai."
    }
  ],

  // SE Asia & Oceania Cities
  "kuala-lumpur-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Organizes online bank transfer screenshots into a structured verification queue for KL charity teams."
    },
    {
      label: "Qurbani Lifecycle",
      href: "/modules/qurbani-lifecycle",
      description: "Tracks Korban share orders, vendor slaughter schedules, and digital proof certificates in Kuala Lumpur."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates financial summary reports and progress updates for organization leadership in KL."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Coordinates volunteer assignments for sedekah distribution and community events."
    }
  ],
  "jakarta-islamic-charity-software": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies field evidence and blurs beneficiary faces before publishing updates for Jakarta zakat programs."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Deploys volunteer field teams for sembako distribution and community welfare drives in Jakarta."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends encrypted, privacy-safe completion notices to supporters across Greater Jakarta."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Manages ration package procurement, distribution routes, and daily logs during Ramadan."
    }
  ],
  "sydney-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates direct bank deposit receipts and EFT proofs for Sydney mosque and charity appeals."
    },
    {
      label: "Privacy & Dignity Controls",
      href: "/modules/privacy-dignity-controls",
      description: "Enforces privacy safeguards so local welfare recipients receive support without public photo exposure."
    },
    {
      label: "Audit-Ready Records",
      href: "/modules/audit-ready-records",
      description: "Maintains complete, timestamped audit logs for Sydney Islamic center board governance."
    },
    {
      label: "Volunteer Coordination",
      href: "/modules/volunteer-coordination",
      description: "Organizes volunteer shifts for Sydney community food drives and mosque events."
    }
  ],
  "melbourne-islamic-charity-software": [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Verifies direct bank transfer confirmations for Melbourne charity campaigns."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Produces audit-ready financial summaries and campaign progress packs for Melbourne trustees."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Delivers privacy-protected impact reports to Melbourne community donors."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Ensures local Zakat welfare funds remain strictly segregated from general operating funds."
    }
  ],
  "cape-town-islamic-charity-software": [
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Verifies distribution evidence and sanitizes field images before donor update release in Cape Town."
    },
    {
      label: "Donor-Safe Impact Updates",
      href: "/modules/donor-safe-updates",
      description: "Sends encrypted update links to donors supporting Cape Town feeding schemes and welfare programs."
    },
    {
      label: "Vendor Fulfillment",
      href: "/modules/vendor-fulfillment",
      description: "Connects local suppliers to upload delivery notes and proof of goods received."
    },
    {
      label: "Ramadan Meals & Rations",
      href: "/modules/ramadan-meals-rations",
      description: "Coordinates food parcel distribution and daily Iftar meal logistics across Cape Town communities."
    }
  ]
};

/**
 * Gets the relevant Sidqly modules for a location, inheriting from Country or Region if necessary.
 */
export function getLocationModuleRecommendations(location: LocationRecord): LocationLink[] {
  // 1. Direct match by location slug
  if (locationModuleRecommendations[location.slug]) {
    return locationModuleRecommendations[location.slug];
  }

  // 2. Fallback to country match
  if (location.countrySlug && locationModuleRecommendations[location.countrySlug]) {
    const countryModules = locationModuleRecommendations[location.countrySlug];
    // Contextualize descriptions with city name if available
    if (location.cityName) {
      return countryModules.map(m => ({
        ...m,
        description: m.description ? m.description.replace(/this region|the country|the area/gi, location.cityName!) : m.description
      }));
    }
    return countryModules;
  }

  // 3. Fallback to region match
  if (location.regionSlug && locationModuleRecommendations[location.regionSlug]) {
    const regionModules = locationModuleRecommendations[location.regionSlug];
    if (location.cityName || location.country) {
      const locationName = location.cityName || location.country;
      return regionModules.map(m => ({
        ...m,
        description: m.description ? m.description.replace(/this region|the area/gi, locationName) : m.description
      }));
    }
    return regionModules;
  }

  // 4. Default fallback if no mapping found
  return [
    {
      label: "Manual Payment Review",
      href: "/modules/manual-payment-review",
      description: "Consolidates donor transfer screenshots and deposit receipts into a structured admin verification queue."
    },
    {
      label: "Proof Trust Engine",
      href: "/modules/proof-trust-engine",
      description: "Multi-stage field evidence verification protecting recipient privacy before updates are shared."
    },
    {
      label: "Reports & Board Packs",
      href: "/modules/reports-board-packs",
      description: "Generates audit-ready financial summaries and operational packs for board and trustee meetings."
    },
    {
      label: "Zakat Fund Separation",
      href: "/modules/zakat-fund-separation",
      description: "Maintains strict operational ledger boundaries between Zakat funds and general Sadaqah collections."
    }
  ];
}
