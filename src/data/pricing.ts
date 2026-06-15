export const pricing = {
  plans: [
    {
      name: "Starter",
      badge: "Starter Launch Offer",
      monthly: { standard: "$99", launch: "$49", launchRaw: 49 },
      annual: { standard: "$990", launch: "$490", savings: "$98", launchRaw: 490 },
      savingsCopy: "Save compared with monthly billing",
      description: "For small mosques, small Islamic charities, pilot teams, and community welfare groups.",
      idealFor: ["Small mosque", "Small charity", "Pilot launch", "Sadaqah campaign", "Ramadan food drive", "Small Zakat workflow"],
      features: [
        "1 organization workspace",
        "Core campaign pages",
        "Donation & workflow tracking",
        "Manual payment review workflow",
        "Proof approval workflow",
        "Donor-safe updates",
        "Basic reports",
        "Receipts & certificates basics",
        "Limited modules",
        "Standard support"
      ],
      cta: "Start with Starter",
      href: "/purchase?plan=starter",
      popular: false
    },
    {
      name: "Growth",
      badge: "Most Popular",
      monthly: { standard: "$249", launch: "$129", launchRaw: 129 },
      annual: { standard: "$2,490", launch: "$1,290", savings: "$258", launchRaw: 1290 },
      savingsCopy: "Most popular annual plan",
      description: "For active charities, Qurbani teams, Ramadan drives, and Zakat committees.",
      idealFor: ["Active Islamic charity", "Qurbani provider", "Ramadan drive", "Zakat committee", "Multi-campaign organization", "Growing donor base"],
      features: [
        "Everything in Starter",
        "More active campaigns",
        "Expanded modules",
        "Zakat fund separation",
        "Qurbani lifecycle support",
        "Ramadan meal/ration workflow",
        "Charity request intake",
        "Vendor & volunteer task support",
        "Stronger proof review",
        "Donor-ready & Board-ready reports",
        "Priority setup guidance"
      ],
      cta: "Choose Growth",
      href: "/purchase?plan=growth",
      popular: true
    },
    {
      name: "Premium",
      badge: "Best Value for Serious Teams",
      monthly: { standard: "$499", launch: "$249", launchRaw: 249 },
      annual: { standard: "$4,990", launch: "$2,490", savings: "$498", launchRaw: 2490 },
      savingsCopy: "Best value for scaling organizations",
      description: "For serious organizations that need stronger workflows, reporting, and leadership visibility.",
      idealFor: ["Larger charity", "Multi-city campaign", "Corporate CSR / Zakat sponsor workflow", "Board-led organization", "High-volume operations"],
      features: [
        "Everything in Growth",
        "Advanced reports",
        "Corporate sponsor reporting",
        "Board pack style summaries",
        "QR / code verification workflow",
        "Expanded vendor & volunteer workflows",
        "Advanced proof and dignity controls",
        "Multi-team coordination",
        "Implementation support",
        "Premium support"
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
        "Custom modules",
        "Custom rollout",
        "Multi-organization setup",
        "Advanced stakeholder reporting",
        "Enterprise onboarding",
        "Custom support",
        "Implementation planning",
        "Custom agreement"
      ],
      cta: "Contact Sidqly",
      href: "/contact?plan=enterprise",
      popular: false
    }
  ],
  addons: [
    "Launch setup support",
    "Data/workflow mapping",
    "Custom report layout",
    "Brand customization",
    "Additional training session",
    "Extra organization workspace",
    "Extra stakeholder reporting setup",
    "Priority implementation"
  ],
  disclaimer: "Early access launch pricing for organizations joining during Sidqly's public rollout. Final pricing may vary based on modules, team size, rollout needs, and support level."
};
