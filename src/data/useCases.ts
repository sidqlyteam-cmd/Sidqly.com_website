export interface UseCaseData {
  slug: string;
  title: string;
  audience: string;
  shortDescription: string;
  heroSummary: string;
  problem: string[];
  manualWorkflowPain: string[];
  sidqlyWorkflow: string[];
  relevantModules: string[];
  relatedResources: string[];
  relatedIslamicTools: string[];
  proofPrivacyBoundary: string[];
  reportingOutputs: string[];
  exampleScenario: string;
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
    canonical: string;
  };
}

export const useCases: UseCaseData[] = [
  {
    slug: 'mosques',
    title: 'Mosques & Masjids',
    audience: 'Mosque Management',
    shortDescription: 'Streamline mosque donation management, Zakat tracking, and seasonal operations.',
    heroSummary: 'Move away from scattered spreadsheets and WhatsApp groups. Manage all mosque charity operations—from Zakat to Qurbani—in one unified, donor-safe platform.',
    problem: [
      'Managing donations, requests, and payments manually across spreadsheets.',
      'Tracking volunteers and sending donor updates via scattered WhatsApp messages.',
      'Struggling to separate Zakat funds from general Sadaqah accurately.',
      'Lack of unified reporting for board members or community transparency.'
    ],
    manualWorkflowPain: [
      'Time spent manually verifying bank transfers and matching them to receipts.',
      'Risk of losing track of Qurbani shares or Ramadan ration deliveries.',
      'Exposing recipient privacy when sending proof to donors.'
    ],
    sidqlyWorkflow: [
      'Manual payment review workflow to verify every donation.',
      'Automated separation of Zakat and Sadaqah funds.',
      'Dedicated workflows for Ramadan distribution and Qurbani.',
      'Dignity-safe proof approval before donors receive updates.',
      'Instant, structured reports for mosque boards.'
    ],
    relevantModules: ['zakat-module', 'campaigns-module', 'qurbani-module', 'ramadan-module', 'reporting-module'],
    relatedResources: ['/resources/eid-giving', '/resources/ramadan-giving'],
    relatedIslamicTools: ['/islamic-calendar', '/ramadan-planner'],
    proofPrivacyBoundary: [
      'Names and faces of beneficiaries are blurred or redacted.',
      'Donors only see approved, verified impact summaries and location data.',
      'Internal managers retain full audit logs for accountability.'
    ],
    reportingOutputs: [
      'Monthly donation summaries separated by fund type.',
      'Campaign-specific impact reports.',
      'Board-ready financial and operational packs.'
    ],
    exampleScenario: 'A local masjid runs a Ramadan campaign. Donations are verified through Sidqly. Funds are allocated to ration packs. Volunteers mark deliveries in the field, uploading photos. Managers approve the photos (blurring faces), and donors automatically receive safe impact updates.',
    faqs: [
      {
        question: 'Does Sidqly handle our bank payments directly?',
        answer: 'No, Sidqly provides a Manual Payment Review workflow where you verify bank transfers your organization receives directly, ensuring full control and compliance.'
      },
      {
        question: 'Can we manage both Zakat and general donations?',
        answer: 'Yes, Sidqly helps you logically separate Zakat from general Sadaqah to maintain operational integrity.'
      }
    ],
    seo: {
      title: 'Mosque Donation Management Software | Sidqly',
      description: 'Streamline mosque charity operations, Zakat tracking, Ramadan distribution, and Qurbani management with Sidqly.',
      focusKeyword: 'mosque donation management',
      secondaryKeywords: ['masjid charity operations', 'Islamic giving platform for mosques', 'mosque Zakat tracking', 'mosque Ramadan distribution', 'mosque Qurbani management'],
      canonical: 'https://www.sidqly.com/use-cases/mosques'
    }
  },
  {
    slug: 'islamic-charities',
    title: 'Islamic Charities',
    audience: 'Charity Operations Teams',
    shortDescription: 'Professionalize Islamic nonprofit operations with verified giving workflows.',
    heroSummary: 'Build donor trust with audit-ready charity records, donor-safe proof, and streamlined campaign management designed specifically for Islamic charities.',
    problem: [
      'Fragmented internal workflows for campaigns and payments.',
      'Difficulty reviewing proof of impact before it becomes visible to donors.',
      'Struggling to protect recipient dignity while proving impact.',
      'Time-consuming preparation of sponsor and board reports.'
    ],
    manualWorkflowPain: [
      'Sending sensitive beneficiary data directly to donors via messaging apps.',
      'Manual creation of donation receipts and certificates.',
      'Disorganized tracking of separate funds and campaigns.'
    ],
    sidqlyWorkflow: [
      'Organize and track multiple campaigns simultaneously.',
      'Implement a strict proof review gate before donor visibility.',
      'Protect recipient dignity with privacy-first evidence handling.',
      'Keep Zakat, Sadaqah, and specific funds logically separated.',
      'Generate instant sponsor and board reports.'
    ],
    relevantModules: ['campaigns-module', 'proof-module', 'reporting-module', 'donor-portal'],
    relatedResources: ['/resources/moving-from-whatsapp-excel'],
    relatedIslamicTools: ['/islamic-glossary'],
    proofPrivacyBoundary: [
      'All field evidence must pass a managerial approval gate.',
      'Beneficiary PII is strictly kept internal.',
      'Donors receive sanitized, verified impact updates.'
    ],
    reportingOutputs: [
      'Audit-ready transaction and delivery logs.',
      'Customizable sponsor reports.',
      'Comprehensive board reporting packs.'
    ],
    exampleScenario: 'An international Islamic charity launches a water well project. Field teams upload construction updates. Operations managers review and approve the evidence. Sidqly automatically generates donor-safe reports and sends them to the respective sponsors.',
    faqs: [
      {
        question: 'Is Sidqly suitable for international operations?',
        answer: 'Yes, Sidqly is designed to coordinate field teams, vendors, and operations managers globally.'
      }
    ],
    seo: {
      title: 'Islamic Charity Software | Verified Giving Platform | Sidqly',
      description: 'Professional Islamic charity software for verified giving workflows, donor-safe proof, and audit-ready charity records.',
      focusKeyword: 'Islamic charity software',
      secondaryKeywords: ['Islamic nonprofit operations', 'donor-safe proof', 'audit-ready charity records', 'verified giving workflow'],
      canonical: 'https://www.sidqly.com/use-cases/islamic-charities'
    }
  },
  {
    slug: 'zakat-committees',
    title: 'Zakat Committees',
    audience: 'Zakat Administrators',
    shortDescription: 'Ensure Zakat fund separation, track eligibility reviews, and generate Zakat reports.',
    heroSummary: 'Bring operational clarity to Zakat management. Track applications, maintain strict fund separation, and ensure every distribution is documented and audit-ready.',
    problem: [
      'Mixing Zakat funds with general charity funds.',
      'Scattered documentation for Zakat applicant reviews.',
      'Lack of clear, audit-ready reporting on Zakat distribution.'
    ],
    manualWorkflowPain: [
      'Using error-prone spreadsheets to calculate and track Zakat allocations.',
      'Losing track of manual eligibility checks.',
      'Difficulty generating accurate reports for Zakat donors.'
    ],
    sidqlyWorkflow: [
      'Strict logical separation of Zakat funds from Sadaqah.',
      'Workflow support for Zakat eligibility review documentation.',
      'Detailed tracking of Zakat disbursements.',
      'Automated Zakat reporting for donors and boards.'
    ],
    relevantModules: ['zakat-module', 'reporting-module'],
    relatedResources: ['/resources/sadqa-fitr'],
    relatedIslamicTools: ['/sadqa-zakat-planner'],
    proofPrivacyBoundary: [
      'Zakat applicant data is highly restricted and securely stored.',
      'Only authorized committee members can access sensitive eligibility details.',
      'Donor reports show aggregated impact without revealing recipient identities.'
    ],
    reportingOutputs: [
      'Zakat fund balance and allocation reports.',
      'Distribution logs with timestamps.',
      'Anonymized impact summaries.'
    ],
    exampleScenario: 'A local Zakat committee receives applications for debt relief. The committee uses Sidqly to document their review process (without Sidqly making religious rulings). Once approved, the disbursement is logged, and the Zakat fund balance is automatically updated.',
    faqs: [
      {
        question: 'Does Sidqly determine who is eligible for Zakat?',
        answer: 'No. Sidqly does not issue Zakat rulings or determine religious eligibility. It provides the software to track your committee’s operational decisions, documentation, and workflows.'
      }
    ],
    seo: {
      title: 'Zakat Committee Workflow Software | Sidqly',
      description: 'Operational tracking, Zakat fund separation, eligibility review support, and Zakat reporting for Islamic organizations.',
      focusKeyword: 'Zakat committee workflow',
      secondaryKeywords: ['Zakat fund separation', 'Zakat tracking', 'Zakat eligibility review support', 'Zakat reporting'],
      canonical: 'https://www.sidqly.com/use-cases/zakat-committees'
    }
  },
  {
    slug: 'qurbani-organizers',
    title: 'Qurbani Campaign Management for Islamic Giving Teams',
    audience: 'Eid ul Adha Operations Teams',
    shortDescription: 'Manage Qurbani orders, shares, vendor assignments, and donor certificates.',
    heroSummary: 'Simplify complex Qurbani logistics. Track every share from order to distribution, manage vendors, and provide donors with verified Qurbani certificates without the spreadsheet chaos.',
    problem: [
      'Extreme operational pressure near Eid matching shares to animals.',
      'Losing track of manual payment proofs from multiple donors.',
      'Coordinating with multiple slaughter vendors and distribution teams.',
      'Delays in sending updates and certificates to anxious donors post-Eid.'
    ],
    manualWorkflowPain: [
      'Matching payments to specific Qurbani shares manually.',
      'Chasing vendors for proof of slaughter and distribution over WhatsApp.',
      'Manually typing out hundreds of Qurbani certificates.',
      'Reporting accurate numbers to boards after Eid operations.'
    ],
    sidqlyWorkflow: [
      'Donor tracking and manual payment proof review.',
      'Digital order and animal/share allocation tracking.',
      'Slaughter confirmation workflow mapped to vendors.',
      'Distribution proof workflow with dignity-safe review.',
      'Automated generation and distribution of donor updates and certificates.',
      'Post-Eid board reporting.'
    ],
    relevantModules: ['qurbani-lifecycle', 'manual-payment-review', 'donor-communication', 'reports-board-packs'],
    relatedResources: ['/resources/qurbani-operations-guide'],
    relatedIslamicTools: ['/eid-qurbani-planner'],
    proofPrivacyBoundary: [
      'Distribution photos are reviewed before donor access.',
      'Certificates confirm completion without exposing sensitive field data.'
    ],
    reportingOutputs: [
      'Total shares allocated vs. completed.',
      'Vendor performance tracking.',
      'Certificate distribution logs.',
      'Post-Eid campaign summaries.'
    ],
    exampleScenario: 'During peak Eid operations, a charity receives 500 Qurbani orders. Sidqly organizes these into shares, assigns them to field vendors, tracks when slaughter is confirmed, and issues personalized certificates to all 500 donors—eliminating days of spreadsheet chaos.',
    faqs: [
      {
        question: 'Does Sidqly issue Islamic Qurbani rulings?',
        answer: 'No, Sidqly is a logistics and tracking platform. Your organization\'s scholars determine the religious guidelines, and Sidqly helps you execute the operational workflow.'
      },
      {
        question: 'Can we track shares for both small and large animals?',
        answer: 'Yes, the workflow allows you to allocate and track individual small animals or specific shares of larger animals.'
      }
    ],
    seo: {
      title: 'Qurbani Campaign Management Software for Islamic Giving Teams',
      description: 'Manage Qurbani donor records, payment proof, animal shares, slaughter confirmation, distribution proof, donor updates, and reporting with Sidqly.',
      focusKeyword: 'Qurbani campaign management software',
      secondaryKeywords: ['Qurbani tracking', 'Eid ul Adha logistics', 'Qurbani certificates', 'Qurbani vendor tracking', 'Qurbani payment proof'],
      canonical: 'https://www.sidqly.com/use-cases/qurbani-organizers'
    }
  },
  {
    slug: 'ramadan-ration-teams',
    title: 'Ramadan Ration Teams',
    audience: 'Ramadan Operations Managers',
    shortDescription: 'Organize high-volume Ramadan ration distribution and Iftar programs.',
    heroSummary: 'Scale your Ramadan impact. Plan distribution batches, coordinate volunteers, capture delivery proof, and send donor-safe updates efficiently.',
    problem: [
      'Managing high volumes of food pack requests and deliveries in a short timeframe.',
      'Coordinating large teams of temporary volunteers.',
      'Providing timely updates to sponsors during the busy month of Ramadan.'
    ],
    manualWorkflowPain: [
      'Losing track of which families have received rations and which haven’t.',
      'Relying on chaotic WhatsApp groups for volunteer dispatch and proof collection.',
      'Failing to compile sponsor reports until long after Eid.'
    ],
    sidqlyWorkflow: [
      'Batch planning for ration distributions.',
      'Vendor and volunteer assignment for packing and delivery.',
      'Mobile-friendly delivery proof capture.',
      'Donor-safe updates generated as distributions are approved.',
      'Daily and weekly operational reporting.'
    ],
    relevantModules: ['ramadan-module', 'volunteer-module', 'reporting-module'],
    relatedResources: ['/resources/ramadan-giving', '/resources/iftar-ration-workflow'],
    relatedIslamicTools: ['/ramadan-planner', '/weather-charity-distribution'],
    proofPrivacyBoundary: [
      'Delivery photos are strictly scrubbed of recipient faces.',
      'Location data is generalized (e.g., neighborhood level) in donor reports.'
    ],
    reportingOutputs: [
      'Daily distribution tallies.',
      'Volunteer activity logs.',
      'End-of-Ramadan sponsor impact reports.'
    ],
    exampleScenario: 'A team plans to distribute 1,000 ration packs. They create batches in Sidqly and assign volunteers. Volunteers use their phones to mark deliveries and upload photos. Once approved by admins, the system updates the daily tally and notifies the campaign sponsors.',
    faqs: [
      {
        question: 'Can volunteers use Sidqly on their phones?',
        answer: 'Yes, the platform is mobile-friendly, allowing volunteers to update statuses and upload proof directly from the field.'
      }
    ],
    seo: {
      title: 'Ramadan Ration Distribution Tracking | Sidqly',
      description: 'Manage Ramadan food drives, Iftar distribution workflows, and Ramadan charity operations with donor-safe updates.',
      focusKeyword: 'Ramadan ration distribution tracking',
      secondaryKeywords: ['Iftar distribution workflow', 'Ramadan food drive management', 'Ramadan charity operations', 'donor-safe Ramadan updates'],
      canonical: 'https://www.sidqly.com/use-cases/ramadan-ration-teams'
    }
  },
  {
    slug: 'sadaqah-campaign-teams',
    title: 'Sadaqah Campaign Management for Verified Giving',
    audience: 'Campaign Managers',
    shortDescription: 'Track Sadaqah campaigns, family support, and Sadqa Fitr workflows.',
    heroSummary: 'Run transparent and verifiable Sadaqah campaigns. Track family support initiatives and manage Sadqa workflows with complete operational clarity and dignity.',
    problem: [
      'Sadaqah campaigns often lack operational control, leading to chaotic tracking.',
      'Ensuring manual payments are verified before committing to field operations.',
      'Providing transparent proof to donors without compromising recipient dignity.',
      'Managing recurring donor expectations without burning out staff.'
    ],
    manualWorkflowPain: [
      'Tracking Sadqa Fitr payments manually during the last days of Ramadan.',
      'Inconsistent updates to recurring donors supporting specific families.',
      'Lack of clear approval workflows for field evidence, risking privacy.',
      'Spending hours drafting generic updates instead of specific impact reports.'
    ],
    sidqlyWorkflow: [
      'Donor intake and payment proof review.',
      'Beneficiary dignity checks embedded in workflows.',
      'Field proof review and approval before sharing.',
      'Automated recurring donor communication.',
      'Campaign reporting.'
    ],
    relevantModules: ['sadaqah-campaigns', 'charity-request-intake', 'donor-communication', 'reports-board-packs'],
    relatedResources: ['/resources/trust-and-safety'],
    relatedIslamicTools: ['/sadqa-zakat-planner'],
    proofPrivacyBoundary: [
      'Strict control over what field evidence is shared with donors.',
      'Approval required before any campaign update is dispatched.'
    ],
    reportingOutputs: [
      'Campaign progress summaries.',
      'Family support disbursement logs.',
      'Verified impact certificates for recurring campaigns.'
    ],
    exampleScenario: 'A charity runs a recurring Sadaqah campaign for a specific family in need. Donations are manually verified. Once the goal is reached, funds are disbursed. Field proof is captured and approved internally to ensure dignity. Finally, donors receive a sanitized, verified update confirming the campaign’s success.',
    faqs: [
      {
        question: 'How do you handle Sadqa Fitr?',
        answer: 'Sidqly allows you to set up specific campaigns for Sadqa Fitr, ensuring these funds are tracked separately and distributed before Eid prayers.'
      },
      {
        question: 'Can we track recurring Sadaqah?',
        answer: 'Yes, Sidqly helps you organize recurring donor records so they receive consistent, campaign-specific updates over time.'
      }
    ],
    seo: {
      title: 'Sadaqah Campaign Management Platform for Verified Giving',
      description: 'Run Sadaqah campaigns with verified payment review, donor tracking, proof approval, dignity-safe updates, and transparent reporting.',
      focusKeyword: 'Sadaqah campaign tracking',
      secondaryKeywords: ['Sadqa campaign workflow', 'Sadqa Fitr tracking', 'family support campaign', 'Islamic giving campaigns'],
      canonical: 'https://www.sidqly.com/use-cases/sadaqah-campaign-teams'
    }
  },
  {
    slug: 'corporate-sponsors',
    title: 'Corporate Sponsors (CSR)',
    audience: 'CSR Managers & Charity Partners',
    shortDescription: 'Provide corporate sponsors with board-ready, audit-compliant charity reports.',
    heroSummary: 'Attract and retain corporate sponsors by providing them with professional, audit-ready impact reports and transparent giving records.',
    problem: [
      'Corporate sponsors require detailed, audit-compliant reporting.',
      'Charities struggle to compile these reports manually.',
      'Ensuring corporate reporting doesn’t violate recipient privacy.'
    ],
    manualWorkflowPain: [
      'Spending days compiling spreadsheets and photos into presentation decks.',
      'Back-and-forth emails to answer sponsor queries about fund allocation.',
      'Risking privacy breaches when sharing raw field data with corporate entities.'
    ],
    sidqlyWorkflow: [
      'Automated generation of campaign summaries.',
      'Strict proof boundaries ensuring CSR reports are privacy-compliant.',
      'Creation of comprehensive report packs and receipts.',
      'Sponsor-safe dashboards for real-time visibility.',
      'Maintenance of audit-ready records.'
    ],
    relevantModules: ['reporting-module', 'donor-portal'],
    relatedResources: ['/resources/comparison-guides'],
    relatedIslamicTools: [],
    proofPrivacyBoundary: [
      'Corporate reports use aggregated data and approved imagery only.',
      'No individual recipient data is ever shared with corporate sponsors.'
    ],
    reportingOutputs: [
      'CSR impact reports.',
      'Corporate Zakat reporting documentation.',
      'Tax-compliant receipts (where applicable).'
    ],
    exampleScenario: 'A local business sponsors a Ramadan food drive. Through Sidqly, the charity automatically generates a professional, sanitized report pack detailing the number of meals provided, locations, and verified (blurred) photos, ready for the business’s CSR board meeting.',
    faqs: [
      {
        question: 'Can sponsors log in to see their impact?',
        answer: 'Yes, the platform can provide sponsor-safe views of verified, approved campaign progress.'
      }
    ],
    seo: {
      title: 'Corporate Zakat & CSR Charity Reporting | Sidqly',
      description: 'Provide corporate sponsors with board-ready charity reports, CSR Islamic giving reports, and audit-ready records.',
      focusKeyword: 'corporate Zakat reporting',
      secondaryKeywords: ['CSR Islamic giving reports', 'sponsor charity reporting', 'donor impact reports', 'board-ready charity reports'],
      canonical: 'https://www.sidqly.com/use-cases/corporate-sponsors'
    }
  },
  {
    slug: 'donors',
    title: 'Donors',
    audience: 'Organizations serving Donors',
    shortDescription: 'Deliver verified giving updates, donation receipts, and dignity-safe proof.',
    heroSummary: 'Give your donors the transparency they crave without compromising operational integrity. Sidqly helps organizations provide verified, safe updates and professional receipts.',
    problem: [
      'Donors want proof of impact, but raw proof violates recipient dignity.',
      'Donors often wait weeks for receipts or updates.',
      'Lack of trust due to unverified or generic communication.'
    ],
    manualWorkflowPain: [
      'Organizations manually emailing receipts one by one.',
      'Answering individual donor messages asking "Has my Qurbani been done?".',
      'Accidentally sharing un-blurred photos in broadcast lists.'
    ],
    sidqlyWorkflow: [
      'Automated sending of safe updates upon milestone completion.',
      'Instant generation of receipts and certificates.',
      'Clear campaign status visibility.',
      'Strict enforcement of dignity-safe proof.'
    ],
    relevantModules: ['donor-portal', 'proof-module'],
    relatedResources: ['/resources/trust-and-safety'],
    relatedIslamicTools: [],
    proofPrivacyBoundary: [
      'Donors NEVER see raw, unapproved field evidence.',
      'All updates pass through organizational review first.'
    ],
    reportingOutputs: [
      'Donation receipts.',
      'Qurbani/Campaign certificates.',
      'Verified impact emails.'
    ],
    exampleScenario: 'A donor contributes to a water well. They receive an instant receipt. Weeks later, after the organization approves the completion photos, the donor automatically receives a verified update and certificate. (Note: Donors do not control the internal workflow; they receive the verified outputs).',
    faqs: [
      {
        question: 'Do donors need an account?',
        answer: 'Organizations can send updates and receipts directly to donors via email or secure links, though donor portal access can be configured.'
      }
    ],
    seo: {
      title: 'Donor-Safe Proof & Verified Giving Updates | Sidqly',
      description: 'Help organizations provide donors with verified giving updates, donation receipts, and Islamic charity transparency.',
      focusKeyword: 'donor-safe proof',
      secondaryKeywords: ['verified giving updates', 'donation receipts', 'Islamic charity transparency', 'donor communication'],
      canonical: 'https://www.sidqly.com/use-cases/donors'
    }
  },
  {
    slug: 'volunteers',
    title: 'Volunteers',
    audience: 'Organizations managing Volunteers',
    shortDescription: 'Coordinate charity volunteers, assign tasks, and capture field proof safely.',
    heroSummary: 'Empower your volunteers with clear tasks while maintaining strict control over data and proof. Sidqly streamlines volunteer coordination for distributions and events.',
    problem: [
      'Chaotic coordination of volunteers during peak seasons (Ramadan, Qurbani).',
      'Volunteers capturing sensitive photos on personal devices without oversight.',
      'Lack of clear task assignment and completion tracking.'
    ],
    manualWorkflowPain: [
      'Managing 50+ volunteers via a single loud WhatsApp group.',
      'Chasing volunteers at the end of the day to collect delivery numbers.',
      'Inconsistent proof quality from different volunteers.'
    ],
    sidqlyWorkflow: [
      'Clear task and batch assignment to specific volunteers.',
      'Real-time delivery status tracking.',
      'Structured proof upload directly into the system.',
      'Role-safe access (volunteers only see their assigned tasks).',
      'Centralized volunteer coordination.'
    ],
    relevantModules: ['volunteer-module', 'ramadan-module'],
    relatedResources: ['/resources/iftar-ration-workflow'],
    relatedIslamicTools: ['/weather-charity-distribution'],
    proofPrivacyBoundary: [
      'Volunteers upload proof directly to Sidqly, which goes to a review queue, not publicly.',
      'Volunteers do not have access to the full donor database or financial data.'
    ],
    reportingOutputs: [
      'Volunteer task completion logs.',
      'Field evidence queues ready for review.'
    ],
    exampleScenario: 'During a Ramadan food drive, a volunteer is assigned a route in Sidqly. They open the link on their phone, see the 10 assigned deliveries, mark them as complete, and snap a photo. The manager back at the office sees the updates in real-time and approves the photos.',
    faqs: [
      {
        question: 'Can volunteers see donor information?',
        answer: 'No. Sidqly provides role-based access. Volunteers only see the tasks and delivery locations they are assigned to.'
      }
    ],
    seo: {
      title: 'Charity Volunteer Coordination Software | Sidqly',
      description: 'Manage Ramadan and Qurbani volunteer workflows, proof uploads, and distribution tracking for Islamic charities.',
      focusKeyword: 'charity volunteer coordination',
      secondaryKeywords: ['Ramadan volunteer tasks', 'Qurbani volunteer workflow', 'proof upload for charity', 'volunteer distribution tracking'],
      canonical: 'https://www.sidqly.com/use-cases/volunteers'
    }
  },
  {
    slug: 'vendors',
    title: 'Vendors',
    audience: 'Organizations managing Vendors',
    shortDescription: 'Assign tasks to charity vendors and track fulfillment and proof.',
    heroSummary: 'Bring accountability to your vendor network. Assign Qurbani slaughters, food pack creation, or Aqiqa tasks, and track fulfillment in one place.',
    problem: [
      'Lack of visibility into vendor progress.',
      'Difficulty collecting standardized proof of fulfillment from external vendors.',
      'Disputes over completed numbers vs. billed numbers.'
    ],
    manualWorkflowPain: [
      'Calling vendors constantly during Bakra Eid to check slaughter statuses.',
      'Vendors sending unorganized photos via messaging apps that get lost.',
      'Reconciling vendor invoices manually against scattered delivery logs.'
    ],
    sidqlyWorkflow: [
      'Assign specific batches or shares to vendors.',
      'Track real-time fulfillment status.',
      'Require structured proof submission from vendors.',
      'Review gate for all vendor-submitted evidence.',
      'Internal reporting for vendor reconciliation.'
    ],
    relevantModules: ['vendor-module', 'qurbani-module'],
    relatedResources: ['/resources/qurbani-operations', '/resources/aqiqa-charity-workflow'],
    relatedIslamicTools: [],
    proofPrivacyBoundary: [
      'Vendors upload proof into a secure holding area.',
      'Only organization admins review and approve vendor proof before finalizing the task.'
    ],
    reportingOutputs: [
      'Vendor fulfillment logs.',
      'Proof review queues.',
      'Reconciliation reports.'
    ],
    exampleScenario: 'An organization assigns 100 Qurbani shares to a specific farm (vendor). The vendor uses Sidqly to update statuses (e.g., "Slaughtered") and uploads the required photos. The organization reviews the photos, approves the batch, and the system logs the completion.',
    faqs: [
      {
        question: 'Do vendors need to install an app?',
        answer: 'No, vendors can interact with assigned tasks via secure, mobile-friendly web links.'
      }
    ],
    seo: {
      title: 'Charity Vendor Fulfillment Workflow | Sidqly',
      description: 'Manage Qurbani vendor workflows, Ramadan food vendor tracking, and proof uploads for Islamic charities.',
      focusKeyword: 'charity vendor fulfillment',
      secondaryKeywords: ['Qurbani vendor workflow', 'Ramadan food vendor tracking', 'ration pack fulfillment', 'proof upload vendor'],
      canonical: 'https://www.sidqly.com/use-cases/vendors'
    }
  },
  {
    slug: 'board-reporting-teams',
    title: 'Board & Reporting Teams',
    audience: 'Executive Leadership & Boards',
    shortDescription: 'Generate instant, audit-ready reports and board packs for Islamic charities.',
    heroSummary: 'Make informed decisions with instant, accurate data. Sidqly transforms daily operations into structured, professional board reports and audit-ready records.',
    problem: [
      'Board members lacking clear visibility into daily operations.',
      'Compiling reports takes weeks and pulls staff away from core duties.',
      'Inconsistent data when preparing for audits.'
    ],
    manualWorkflowPain: [
      'Operations managers spending the week before a board meeting building spreadsheets.',
      'Inability to quickly answer financial or impact questions during meetings.',
      'Missing historical context or approval logs for past transactions.'
    ],
    sidqlyWorkflow: [
      'Automated generation of structured summaries.',
      'Creation of sponsor and board report packs.',
      'Maintenance of immutable, audit-ready records.',
      'Clear visibility into campaign outcomes and fund balances.'
    ],
    relevantModules: ['reporting-module'],
    relatedResources: ['/resources/comparison-guides'],
    relatedIslamicTools: [],
    proofPrivacyBoundary: [
      'Board reports focus on aggregated metrics and verified outcomes.',
      'Full audit trails are maintained without exposing unnecessary PII in high-level summaries.'
    ],
    reportingOutputs: [
      'Executive dashboard summaries.',
      'Financial allocation reports (Zakat vs. Sadaqah).',
      'Audit logs of all manual payment reviews and proof approvals.'
    ],
    exampleScenario: 'At the end of Q3, the charity director needs a report for the board. Instead of manually compiling data, they use Sidqly to export a complete board pack detailing funds raised, Zakat separated, campaigns completed, and verified impact metrics.',
    faqs: [
      {
        question: 'Are the records ready for external audits?',
        answer: 'Yes, Sidqly maintains detailed logs of who approved payments and proof, providing a strong paper trail for audits.'
      }
    ],
    seo: {
      title: 'Islamic Charity Board Reports & Audit-Ready Records | Sidqly',
      description: 'Generate charity board reports, donor report packs, and maintain audit-ready records for Islamic organizations.',
      focusKeyword: 'charity board reports',
      secondaryKeywords: ['Islamic charity reporting', 'audit-ready records', 'donor report packs', 'CSR reports'],
      canonical: 'https://www.sidqly.com/use-cases/board-reporting-teams'
    }
  },
  {
    slug: 'community-request-organization',
    title: 'Community Members Requesting Organization',
    audience: 'Community Members',
    shortDescription: 'Nominate your local mosque or favorite Islamic charity to use Sidqly.',
    heroSummary: 'Help your local mosque or favorite charity modernize. Request that they join Sidqly to provide you with verified updates, proper Zakat tracking, and secure receipts.',
    problem: [
      'Community members want better transparency from their local organizations.',
      'Donors are tired of unverified WhatsApp updates and delayed receipts.',
      'Individuals want assurance their Zakat is handled professionally.'
    ],
    manualWorkflowPain: [
      'Feeling disconnected from the impact of local donations.',
      'Worrying about the operational security of cash or direct transfer donations to smaller masjids.'
    ],
    sidqlyWorkflow: [
      'Community members use the Request Organization form to nominate a charity.',
      'Sidqly reaches out to the organization to offer a demo.',
      'Once onboarded, the organization can provide the verified giving experience the community expects.'
    ],
    relevantModules: [],
    relatedResources: ['/request-organization'],
    relatedIslamicTools: [],
    proofPrivacyBoundary: [
      'The request process is private.',
      'Community members only receive updates if the organization successfully onboards and chooses to engage.'
    ],
    reportingOutputs: [
      'N/A - This is an onboarding request workflow.'
    ],
    exampleScenario: 'A regular donor to a local masjid wishes they received proper receipts and updates for their Qurbani shares. They fill out the Sidqly Request Organization form. The Sidqly team contacts the masjid board, demonstrating how the platform can solve their operational headaches.',
    faqs: [
      {
        question: 'What happens when I nominate an organization?',
        answer: 'Our team will respectfully reach out to their management or board with information about how Sidqly can help streamline their operations.'
      }
    ],
    seo: {
      title: 'Request Organization | Nominate an Islamic Charity | Sidqly',
      description: 'Ask your local mosque or Islamic charity to use Sidqly for better transparency, verified giving, and professional operations.',
      focusKeyword: 'request organization',
      secondaryKeywords: ['ask mosque to use Sidqly', 'request charity on Sidqly', 'nominate Islamic organization'],
      canonical: 'https://www.sidqly.com/use-cases/community-request-organization'
    }
  }
];
