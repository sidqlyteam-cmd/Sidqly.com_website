export interface LegalPolicy {
  slug: string;
  title: string;
  lastUpdated: string;
  description: string;
  h1: string;
  sections: {
    title: string;
    content: string | string[];
    isAlert?: boolean;
    isList?: boolean;
  }[];
}

export const legalPolicies: LegalPolicy[] = [
  {
    slug: "data-handling",
    title: "Data Processing & Handling",
    lastUpdated: "August 4, 2026",
    description: "Detailed practices on how Sidqly collects, processes, and stores data on behalf of Islamic organizations.",
    h1: "Data Processing & Handling Policy",
    sections: [
      {
        title: "1. Core Principles of Data Amanah",
        content: "We treat data as a sacred trust (Amanah). Sidqly collects and handles donor and recipient information strictly to fulfill verified giving workflows, preventing unapproved exposure and keeping data logically isolated."
      },
      {
        title: "2. Data Capture and Storage Layer",
        content: [
          "Hosting Environment: Sidqly is hosted entirely in standard secure regions on Firebase and Google Cloud Platform (GCP).",
          "Data at Rest: All structured data is encrypted at rest using industry-standard AES-256 protocols.",
          "Data in Transit: Any interaction with the Sidqly platform is secured via forced HTTPS SSL/TLS 1.3 encryption.",
          "Logical Isolation: Customer data is separated using secure software boundaries, ensuring your records are never co-mingled with other organizations."
        ],
        isList: true
      },
      {
        title: "3. Processing of Manual Payment Proofs",
        content: "When donors upload screenshots of bank wire transfers or mobile receipts, the image is parsed securely and displayed inside a restricted admin queue. Raw receipt metadata (EXIF/GPS data) is stripped upon upload to prevent location exposure."
      },
      {
        title: "4. Face Blurring and Anonymization Function",
        content: "For field evidence (such as delivery photos uploaded by volunteers), the platform processes the image using serverless visual functions. It automatically detects and blurs facial details, persisting only the anonymized, dignity-safe variant."
      },
      {
        title: "Product Disclaimer & Limitations",
        content: "Sidqly acts strictly as an administrative data processor. We do not inspect or audit your records for physical compliance or Shariah validity; total bookkeeping accuracy remains the sole responsibility of your designated human reviewers.",
        isAlert: true
      }
    ]
  },
  {
    slug: "data-retention",
    title: "Data Retention Policy",
    lastUpdated: "August 4, 2026",
    description: "Clear timelines and procedures for retaining and disposing of system data.",
    h1: "Data Retention Policy",
    sections: [
      {
        title: "1. Active Contract Lifecycle Retention",
        content: "All campaign ledgers, approved payment screenshots, volunteer tasks, and anonymized field proofs are retained continuously for the active duration of your subscription to ensure total compliance and historical audit-readiness."
      },
      {
        title: "2. Contract Termination and Shredding Timeline",
        content: "Upon contract expiration or termination, Sidqly adheres to a strict decommissioning timeline: data remains accessible for a 90-day grace period to allow your team to export all records. On day 91, all database records, file assets, and unblurred backups associated with your organization are permanently and irreversibly purged from our active systems."
      },
      {
        title: "3. Backup Lifecycle",
        content: "Database snapshot backups are retained on a rolling 30-day lifecycle. Expired backups are systematically overwritten, ensuring no residual data remains on our storage systems past 30 days after deletion from active databases."
      },
      {
        title: "Operational Safeguard",
        content: "We do not automatically delete or shred any active campaign files. All data purging must be manually requested or explicitly confirmed by an authenticated Super Admin of your organization.",
        isAlert: true
      }
    ]
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery Policy",
    lastUpdated: "August 4, 2026",
    description: "Our policy regarding daily system backups, recovery metrics, and quarterly testing protocols.",
    h1: "Backup & Recovery Policy",
    sections: [
      {
        title: "1. Backup Frequency and Infrastructure",
        content: "Database snapshots are generated programmatically every 24 hours. These backups are stored in geo-redundant, logically separated cloud buckets, ensuring high availability even in the case of localized infrastructure issues."
      },
      {
        title: "2. Key Recovery Metrics (RPO & RTO)",
        content: [
          "Recovery Point Objective (RPO): 24 hours (maximum data loss window since last programmatic snapshot).",
          "Recovery Time Objective (RTO): 48 hours for restoring non-disastrous core data services back to operational status."
        ],
        isList: true
      },
      {
        title: "3. Quarterly Recovery Auditing",
        content: "We test our backup recovery systems quarterly under simulated environment failure conditions. Results of these tests are documented to ensure that restore times continuously align with our target RTO parameters."
      },
      {
        title: "Limitation on Real-Time Recovery",
        content: "Because Sidqly prioritizes strict ledger consistency, we do not support instantaneous 'point-in-time' rollback for individual transactions. Reversing individual entry errors must be done through manual adjustments by your treasurers.",
        isAlert: true
      }
    ]
  },
  {
    slug: "incident-response",
    title: "Incident Response Overview",
    lastUpdated: "August 4, 2026",
    description: "Our step-by-step protocol for identifying, isolating, and disclosing security incidents.",
    h1: "Incident Response Overview",
    sections: [
      {
        title: "1. Standard Response Protocol",
        content: [
          "Step 1: Identification - Programmatic alert triggers or manual reports are logged into our system monitoring console.",
          "Step 2: Isolation - Compromised sessions, role-credentials, or database connections are instantly cycled and suspended.",
          "Step 3: Remediation - Security engineers deploy targeted hotfixes and audit audit logs to locate vulnerability points.",
          "Step 4: Disclosure - Organizations affected by verified unauthorized data exposure are notified within 72 hours of verification."
        ],
        isList: true
      },
      {
        title: "2. Responsible Security Disclosure",
        content: "We encourage community whitehat researchers to disclose potential vulnerabilities responsibly. Reports can be submitted directly to our support desk. We investigate all verified issues promptly."
      },
      {
        title: "Limitation on Incident Liability",
        content: "Sidqly is not liable for data exposure caused by compromised local credentials, shared admin passwords, or weak access hygiene on your organization's devices. Super Admins are urged to enforce strong password protocols.",
        isAlert: true
      }
    ]
  },
  {
    slug: "rbac",
    title: "Role-Based Access Control (RBAC)",
    lastUpdated: "August 4, 2026",
    description: "A transparent breakdown of user roles, system permissions, and row-level restrictions.",
    h1: "Role-Based Access Control (RBAC)",
    sections: [
      {
        title: "1. The Principle of Least Privilege",
        content: "To protect the integrity of your campaigns and the dignity of recipients, Sidqly enforces strict Role-Based Access Control. Users are restricted only to the operations and views necessary for their specific roles."
      },
      {
        title: "2. Detailed Predefined System Roles",
        content: [
          "Super Admin: Holds system-wide access to organization configurations, billing data, user management, and ledger history.",
          "Finance Reviewer: Has restricted access to the side-by-side payment review queue to match bank wires manually against donor screenshot uploads.",
          "Campaign Coordinator: Can structure campaigns (Zakat, Sadaqah, Qurbani), assign delivery locations, and view volunteer tasks.",
          "Field Volunteer: Only has row-restricted access to their assigned delivery task via secure, tokenized mobile links. Cannot view donor details, general ledgers, or other volunteer lists."
        ],
        isList: true
      },
      {
        title: "3. Token-Based Volunteer Links",
        content: "Field volunteers do not require full system user accounts. They interact strictly via secure, single-use web tokens generated for their specific delivery runs, preventing accidental leakage of general recipient directories."
      },
      {
        title: "Security Limitation",
        content: "Role permissions are managed strictly by your organization's Super Admin. Sidqly cannot verify if your designated Campaign Coordinators or Volunteers are legally or Shariah-authorized in your jurisdiction.",
        isAlert: true
      }
    ]
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI Statement",
    lastUpdated: "August 4, 2026",
    description: "How we implement assistive technology transparently, with human-in-the-loop validation.",
    h1: "Responsible AI Statement",
    sections: [
      {
        title: "1. Human-in-the-Loop Philosophy",
        content: "At Sidqly, we believe that critical religious and operational decisions must always remain in human hands. We DO NOT employ autonomous artificial intelligence models to determine Zakat eligibility, judge recipient worthiness, or make Shariah compliance rulings."
      },
      {
        title: "2. Assistive Visual Face-Blurring",
        content: "AI and machine learning are utilized in the Sidqly platform strictly for assistive, non-decision-making tasks. Specifically, we use an automated face-detection library to locate facial boundaries in volunteer-submitted field photos and apply a local blur filter to protect beneficiary modesty."
      },
      {
        title: "3. Bias and Accuracy Warnings",
        content: "While our face-detection models are trained to perform across diverse lighting and environmental conditions, they are not 100% infallible. Because of this, Sidqly routes all blurred field proofs through an admin approval gate. A human coordinator must verify that anonymization is correct before the proof is sent to donors."
      },
      {
        title: "System Guardrail",
        content: "All AI-driven features operate as optional operational aids. If you prefer to manually anonymize photos or keep recipients off-camera entirely, you can turn off facial blurring in your system settings.",
        isAlert: true
      }
    ]
  },
  {
    slug: "recipient-dignity",
    title: "Recipient Dignity & Privacy Standards",
    lastUpdated: "August 4, 2026",
    description: "Our operational rules and design principles for protecting beneficiary dignity in the field.",
    h1: "Recipient Dignity & Privacy Standards",
    sections: [
      {
        title: "1. Charity Without Exposure",
        content: "Sidqly is built on the core belief that giving should never make a recipient look small or compromise their modesty. Traditional proof-of-delivery models often result in sharing sensitive recipient images on public feeds. Sidqly systematically blocks this behavior."
      },
      {
        title: "2. Best Practices for Field Volunteers",
        content: [
          "Doorway-Only Shots: Train volunteers to take photos of delivered food boxes or aid packages on doorsteps, avoiding placing individuals in the frame entirely.",
          "No PII in Photos: Ensure no home numbers, address plates, or identity documents are visible in submitted files.",
          "Anonymized Uploads: All volunteer uploads are automatically stripped of EXIF coordinates and GPS telemetry to prevent physical location leakages."
        ],
        isList: true
      },
      {
        title: "3. Non-Crawlable Impact Proofs",
        content: "When a donor receives a secure impact verification link, that page is configured with strict 'noindex, nofollow' metadata directives. This prevents search engine spiders or AI bots from index-harvesting impact proofs."
      },
      {
        title: "Operational Responsibility",
        content: "Sidqly provides the software gates to blur faces and scrub locations, but the behavior of your volunteers in the field remains your responsibility. Establish strict training guidelines before dispatching teams.",
        isAlert: true
      }
    ]
  },
  {
    slug: "support-implementation",
    title: "Support & Implementation Model",
    lastUpdated: "August 4, 2026",
    description: "Our structured 3-week onboarding pathway, SLA response targets, and remote-only boundaries.",
    h1: "Support & Implementation Model",
    sections: [
      {
        title: "1. The 3-Week Guided Implementation Pathway",
        content: [
          "Week 1: Document Mapping - We help your campaign leads map current Excel spreadsheets and informal WhatsApp routines to logical Sidqly databases.",
          "Week 2: Role Assignment - Setting up Super Admins, assigning Finance Reviewers, and configuring the campaign structures.",
          "Week 3: Volunteer Simulation - Conducting dry-run volunteer task dispatches and verifying payment proof reviews under live conditions."
        ],
        isList: true
      },
      {
        title: "2. Support SLA Response Targets",
        content: "Standard remote customer support is available via email and chat from 9:00 AM to 5:00 PM EST, Monday through Friday (excluding public holidays). We target an initial response time of 24 hours for non-critical workflow inquiries."
      },
      {
        title: "3. Remote-Only Support Boundary",
        content: "To maintain competitive pricing and absolute software security, all Sidqly implementation support is conducted remotely via video conferencing, secure guides, and email. We do not provide physical, on-site software installation or local field coordinators."
      },
      {
        title: "Service Scope",
        content: "Our support leads assist with software features and configuration. We do not provide accounting services, bookkeeping audits, tax filing, or religious advisory services.",
        isAlert: true
      }
    ]
  },
  {
    slug: "service-boundaries",
    title: "Service Boundaries (Included vs. Excluded)",
    lastUpdated: "August 4, 2026",
    description: "Honest limitations outlining what is legally and technically included or excluded in the Sidqly platform.",
    h1: "Service Boundaries & Limitations",
    sections: [
      {
        title: "1. What is Technically Included",
        content: [
          "Cloud SaaS Interface: Access to your organization's secure cloud database and campaign dashboard.",
          "Manual Verification Queues: Double-entry side-by-side screens to match bank transfers manually against donor screenshots.",
          "Dignity-Safe Face Blurring: Automatic processing of field photos to blur facial details before saving.",
          "Logical Ledgers: Segregated system logs to maintain distinct, co-mingling-safe balances for Zakat and Sadaqah.",
          "Reporting Modules: One-click export of clean, CSV/PDF audit-ready summaries for board reviews."
        ],
        isList: true
      },
      {
        title: "2. Critical Platform Exclusions (Limitations)",
        content: [
          "NOT a Payment Processor: Sidqly does not hold, clear, route, or directly touch your organization's cash. You must connect your own merchant accounts or use external bank transfers.",
          "NOT a Tax Advisor: We provide template logs for giving, but we do not verify tax-exempt eligibility (e.g. 501(c)(3) or Gift Aid) or file regulatory documents on your behalf.",
          "NOT a Shariah Board: While our software supports logical ledgers and direct Tamleek logs, Sidqly is not a religious authority. Organizations must verify their local scholars’ approval of operational practices.",
          "NOT an Accounting Firm: We provide structured audit-ready logs, but we do not perform professional financial reconciliations or legal bookkeeping reviews."
        ],
        isList: true
      },
      {
        title: "Platform Disclaimer",
        content: "Organizations use Sidqly entirely at their own discretion. Ensure your operational leads are trained and that your local advisors approve your digital giving methods.",
        isAlert: true
      }
    ]
  }
];
