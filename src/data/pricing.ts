export const pricing = {
  plans: [
    {
      name: "Starter",
      badge: "Starter Launch Offer",
      monthly: { standard: "$59", launch: "$29", launchRaw: 29 },
      annual: { standard: "$590", launch: "$290", savings: "$58", launchRaw: 290 },
      savingsCopy: "2 months free with annual billing",
      staffLimit: "3 Staff Accounts",
      workspaceLimit: "1 Organization Workspace",
      allowanceSummary: "5 GB storage · 1,000 emails/mo · 100 AI proof images/mo",
      description: "For small mosques, local Islamic charities, and single community projects.",
      idealFor: ["Small mosque", "Local charity", "Sadaqah campaign", "Ramadan food drive", "Single Zakat workflow"],
      features: [
        "3 named staff accounts (any admin/staff permission)",
        "1 organization workspace (+$19/mo per extra org)",
        "Dedicated branded subdomain (yourmosque.sidqly.com)",
        "Unlimited donor records & donation entries",
        "Donation records, receipts & tax certificates",
        "0% platform fee on all community donations",
        "Manual payment review (Cash & Bank Transfer)",
        "Basic proof approval & dignity-safe updates",
        "5 GB storage · 1,000 emails/mo · 100 AI proof images/mo",
        "Access to paid Add-on Modules (Matrimonial, Hifz, Janazah)"
      ],
      cta: "Subscribe to Starter",
      href: "/purchase?plan=starter",
      popular: false
    },
    {
      name: "Growth",
      badge: "Most Popular",
      monthly: { standard: "$199", launch: "$99", launchRaw: 99 },
      annual: { standard: "$1,990", launch: "$990", savings: "$198", launchRaw: 990 },
      savingsCopy: "2 months free with annual billing",
      staffLimit: "10 Staff Accounts",
      workspaceLimit: "Up to 3 Organization Workspaces",
      allowanceSummary: "25 GB storage · 5,000 emails/mo · 500 AI proof images/mo",
      description: "For active charities, multi-branch mosques, Qurbani teams, and Zakat committees.",
      idealFor: ["Active Islamic charity", "Multi-branch mosque", "Qurbani organizer", "Ramadan drive", "Zakat committee"],
      features: [
        "10 named staff accounts across your workspaces",
        "Up to 3 organization workspaces included",
        "Dedicated subdomains + custom domain (donate.yourcharity.org)",
        "Unlimited donor records & donation entries",
        "Everything in Starter",
        "Zakat fund separation (AAOIFI Shariah standards)",
        "Qurbani lifecycle & meat distribution tracking",
        "Ramadan meal & food ration pack workflows",
        "Beneficiary intake, vendor & volunteer task workflows",
        "25 GB storage · 5,000 emails/mo · 500 AI proof images/mo"
      ],
      cta: "Subscribe to Growth",
      href: "/purchase?plan=growth",
      popular: true
    },
    {
      name: "Premium",
      badge: "Best Value for Scaling Teams",
      monthly: { standard: "$399", launch: "$199", launchRaw: 199 },
      annual: { standard: "$3,990", launch: "$1,990", savings: "$398", launchRaw: 1990 },
      savingsCopy: "2 months free with annual billing",
      staffLimit: "30 Staff Accounts",
      workspaceLimit: "Up to 10 Organization Workspaces",
      allowanceSummary: "100 GB storage · 20,000 emails/mo · 2,500 AI proof images/mo",
      description: "For larger foundations managing multiple branches, schools, and relief wings.",
      idealFor: ["Multi-organization foundation (up to 10 entities)", "Large relief charity", "Multi-city campaign", "Corporate CSR / Zakat sponsor", "Board-led organization"],
      features: [
        "30 named staff accounts across your workspaces",
        "Up to 10 organization workspaces included",
        "Master Admin account with instant Org Switcher",
        "Dedicated subdomains + custom domains for all entities",
        "Unlimited donor records & donation entries",
        "Everything in Growth",
        "Consolidated multi-org reporting & board packs",
        "4-eyes AAOIFI treasury & advanced approval rules",
        "White-label donor portal & API integrations",
        "100 GB storage · 20,000 emails/mo · 2,500 AI proof images/mo"
      ],
      cta: "Subscribe to Premium",
      href: "/purchase?plan=premium",
      popular: false
    },
    {
      name: "Enterprise",
      badge: "Custom Capacity & SLA",
      monthly: { standard: "Custom", launch: "Custom" },
      annual: { standard: "Custom", launch: "Custom", savings: "" },
      savingsCopy: "Custom annual agreement",
      staffLimit: "Agreed Staff Allowance",
      workspaceLimit: "Agreed / Unlimited Workspaces",
      allowanceSummary: "Custom storage, AI, SMS & API capacity",
      description: "For national, multi-country, or institutional operations requiring custom integrations and SLAs.",
      idealFor: ["Multi-country NGO", "Large corporate foundation", "Institutional Zakat fund", "Complex custom integrations"],
      features: [
        "Agreed staff seat & organization workspace allowances",
        "Unlimited donor records & donation entries",
        "Custom domains, SSO & ERP/CRM integrations",
        "Custom app module development",
        "Hands-on data migration & rollout engineering",
        "Multi-country currency & compliance controls",
        "Enterprise SLA with dedicated support",
        "Custom invoicing & billing agreement"
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
        "Automated monthly tuition recurring billing",
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
    "Extra Organization / Branch Workspace (+$19/mo)",
    "Matrimonial & Nikah Matchmaking Portal (+$29/mo)",
    "Hifz & Quran Academy Student Tracking (+$39/mo)",
    "Janazah & Bereavement Mutual Fund (+$19/mo)",
    "Prepaid AI, SMS & Storage Top-up Packs",
    "Custom Domain Setup with Automated SSL",
    "Excel / Legacy Data Migration Support",
    "Dedicated Staff & Volunteer Training Session"
  ],
  disclaimer: "Pricing is based on features, named staff accounts (3 / 10 / 30), organization workspaces (1 / 3 / 10), and published storage/AI/email allowances—never on active donor counts. Customers subscribe first on sidqly.com and unlock app.sidqly.com immediately after payment verification."
};
