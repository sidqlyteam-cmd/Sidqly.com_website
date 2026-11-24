export const pricing = {
  plans: [
    {
      name: "Starter",
      badge: "Starter Launch Offer",
      monthly: { standard: "$59", launch: "$29", launchRaw: 29 },
      annual: { standard: "$590", launch: "$290", savings: "$58", launchRaw: 290 },
      savingsCopy: "Save compared with monthly billing",
      description: "For small mosques, small Islamic charities, pilot teams, and single community projects.",
      idealFor: ["Small mosque", "Small charity", "Pilot launch", "Sadaqah campaign", "Ramadan food drive", "Small Zakat workflow"],
      features: [
        "1 organization workspace (+$19/mo per extra org)",
        "Dedicated branded subdomain (e.g. yourmosque.sidqly.com)",
        "Core campaign & donation pages",
        "0% platform fee on all donations",
        "Donation & workflow tracking",
        "Manual payment review workflow (Cash & Bank Transfer)",
        "Proof approval & dignity-safe updates",
        "Receipts & automated tax certificates",
        "Access to Modular Apps (Matrimonial, Hifz, Janazah add-ons)",
        "Standard support & onboarding guide"
      ],
      cta: "Start with Starter",
      href: "/purchase?plan=starter",
      popular: false
    },
    {
      name: "Growth",
      badge: "Most Popular",
      monthly: { standard: "$199", launch: "$99", launchRaw: 99 },
      annual: { standard: "$1,990", launch: "$990", savings: "$198", launchRaw: 990 },
      savingsCopy: "Most popular annual plan",
      description: "For active charities, Qurbani teams, Ramadan drives, and Zakat committees.",
      idealFor: ["Active Islamic charity", "Qurbani provider", "Ramadan drive", "Zakat committee", "Multi-campaign organization", "Growing donor base"],
      features: [
        "Up to 3 organization workspaces included",
        "Dedicated subdomains for all 3 organizations",
        "Custom domain support (donate.yourcharity.org)",
        "Everything in Starter",
        "Unlimited campaigns & donor forms",
        "Zakat fund separation (AAOIFI Shariah standards)",
        "Qurbani lifecycle & meat distribution tracking",
        "Ramadan meal & food ration pack workflows",
        "Charity request & beneficiary intake",
        "Vendor & volunteer task management",
        "AI-assisted proof dignity controls (face blurring)",
        "Priority setup & migration guidance"
      ],
      cta: "Choose Growth",
      href: "/purchase?plan=growth",
      popular: true
    },
    {
      name: "Premium",
      badge: "Best Value for Scaling Teams",
      monthly: { standard: "$399", launch: "$199", launchRaw: 199 },
      annual: { standard: "$3,990", launch: "$1,990", savings: "$398", launchRaw: 1990 },
      savingsCopy: "Best value for scaling organizations",
      description: "For serious organizations managing multiple wings, relief bodies, and school foundations.",
      idealFor: ["Multi-organization foundation (up to 10 entities)", "Large charity", "Multi-city campaign", "Corporate CSR / Zakat sponsor", "Board-led organization"],
      features: [
        "Up to 10 organization workspaces included",
        "Dedicated subdomains + custom domains for all entities",
        "Single Master Admin account with quick Org Switcher",
        "Everything in Growth",
        "Advanced multi-ledger accounting & audits",
        "Corporate sponsor & Zakat reporting packs",
        "Board-ready financial & impact summaries",
        "QR / code verification workflow for aid distribution",
        "Multi-team coordination & volunteer dispatch",
        "White-label donor portal experience",
        "Dedicated account manager & phone support"
      ],
      cta: "Choose Premium",
      href: "/purchase?plan=premium",
      popular: false
    },
    {
      name: "Enterprise",
      badge: "For large or multi-branch operations",
      monthly: { standard: "Custom", launch: "Custom" },
      annual: { standard: "Custom", launch: "Custom", savings: "" },
      savingsCopy: "Custom annual agreement",
      description: "For large, multi-branch, corporate, multi-country, or highly customized operations.",
      idealFor: ["Multi-country NGO", "Large corporate foundation", "Government-linked Zakat fund", "Complex custom integrations"],
      features: [
        "Unlimited organization workspaces",
        "Custom domain and SSO integrations",
        "Custom app module development",
        "Custom rollout & hands-on data migration",
        "Multi-country currency & tax compliance",
        "Advanced stakeholder reporting",
        "Enterprise SLA with dedicated engineering support",
        "Custom billing agreement"
      ],
      cta: "Contact Sales",
      href: "/contact-sales",
      popular: false
    }
  ],
  modules: [
    {
      name: "Matrimonial & Nikah Portal",
      badge: "Popular Mosque Add-on",
      price: "$29/mo",
      annualPrice: "$290/yr",
      description: "A Shariah-compliant matrimonial service for your mosque community. Verified profiles, Wali involvement, confidential vetting, and imam approval workflows.",
      features: [
        "Private community matching portal under your subdomain",
        "Wali involvement and guardian communication workflow",
        "Confidential biodata vetting by mosque committee / Imam",
        "Zero public exposure of private contact details",
        "Application fee collection (keep 100% of registration fees)"
      ]
    },
    {
      name: "Hifz & Quran Academy",
      badge: "Madrassah Add-on",
      price: "$39/mo",
      annualPrice: "$390/yr",
      description: "Complete Quran school and student management. Daily memorization tracking, parent portal, attendance, and automated monthly tuition fees.",
      features: [
        "Daily Sabak, Sabqi, and Manzil memorization progress logs",
        "Parent portal with mobile notifications and progress charts",
        "Teacher attendance and class grading roster",
        "Automated monthly tuition recurring billing via Stripe/Paddle",
        "Hifz completion certificate generator"
      ]
    },
    {
      name: "Janazah & Bereavement Fund",
      badge: "Community Essential",
      price: "$19/mo",
      annualPrice: "$190/yr",
      description: "Community funeral support fund. Manage cemetery plots, pool monthly burial mutual-aid funds, and broadcast emergency bereavement notices.",
      features: [
        "Monthly burial mutual aid / Takaful fund collection",
        "Cemetery plot reservation and documentation registry",
        "Instant community broadcast (SMS & WhatsApp funeral alerts)",
        "Grave location coordinates and Janazah prayer directions",
        "Bereavement family case support workflow"
      ]
    }
  ],
  addons: [
    "Dedicated Subdomain for Every Org (included)",
    "Matrimonial & Nikah Matchmaking Portal ($29/mo)",
    "Hifz & Quran Academy Student Tracking ($39/mo)",
    "Janazah & Bereavement Mutual Fund ($19/mo)",
    "Extra Organization Workspace (+$19/mo)",
    "Custom Domain Setup with Free SSL",
    "Launch setup & Excel data migration support",
    "Dedicated staff & volunteer training session"
  ],
  disclaimer: "Launch pricing is available during Sidqly’s public rollout. Every organization receives its own dedicated subdomain. Specialized modular apps (Matrimonial, Hifz, Janazah) can be added to any base plan and link seamlessly under your master dashboard."
};
