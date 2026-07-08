export interface ExpansionPlan {
  tier1: {
    completedCount: number;
    completedCities: string[];
    plannedCount: number;
    plannedCities: string[];
    indexingStrategy: string;
  };
  tier2: {
    plannedCount: number;
    distributionStrategy: string;
    indexingStrategy: string;
  };
  tier3: {
    plannedCount: number;
    expansionNote: string;
    indexingStrategy: string;
  };
  globalDirective: string;
}

export const cityExpansionPlan: ExpansionPlan = {
  tier1: {
    completedCount: 50,
    completedCities: [
      "London, United Kingdom",
      "Birmingham, United Kingdom",
      "Manchester, United Kingdom",
      "Leicester, United Kingdom",
      "New York, United States",
      "Houston, United States",
      "Chicago, United States",
      "Dallas, United States",
      "Toronto, Canada",
      "Mississauga, Canada",
      "Dubai, United Arab Emirates",
      "Abu Dhabi, United Arab Emirates",
      "Sharjah, United Arab Emirates",
      "Riyadh, Saudi Arabia",
      "Jeddah, Saudi Arabia",
      "Doha, Qatar",
      "Kuwait City, Kuwait",
      "Manama, Bahrain",
      "Muscat, Oman",
      "Karachi, Pakistan",
      "Lahore, Pakistan",
      "Islamabad, Pakistan",
      "Kuala Lumpur, Malaysia",
      "Sydney, Australia",
      "Melbourne, Australia"
    ],
    plannedCount: 0,
    plannedCities: [
      // Tier 1 index candidates all created.
      "Bradford, United Kingdom",
      "Luton, United Kingdom",
      "Los Angeles, United States",
      "Detroit, United States",
      "Montreal, Canada",
      "Calgary, Canada",
      "Mecca, Saudi Arabia",
      "Medina, Saudi Arabia",
      "Dammam, Saudi Arabia",
      "Al Ain, United Arab Emirates",
      "Rawalpindi, Pakistan",
      "Peshawar, Pakistan",
      "Hyderabad, India",
      "Mumbai, India",
      "Delhi, India",
      "Jakarta, Indonesia",
      "Surabaya, Indonesia",
      "Bandung, Indonesia",
      "Johor Bahru, Malaysia",
      "Cape Town, South Africa",
      "Johannesburg, South Africa",
      "Durban, South Africa",
      "Perth, Australia",
      "Brisbane, Australia",
      "Auckland, New Zealand"
    ],
    indexingStrategy: "Indexable only after manual quality approval confirming unique content, no fake claims, and strong relevance."
  },
  tier2: {
    plannedCount: 150,
    distributionStrategy: "Focus on secondary cities in primary markets (UK, US, Canada, GCC, South Asia, SE Asia) with established Muslim communities and charitable infrastructure.",
    indexingStrategy: "Initially noindex. Graduate to Tier 1 indexable status only if high-quality localized content is authored and engagement justifies it."
  },
  tier3: {
    plannedCount: 300,
    expansionNote: "Directory-style listings for smaller cities or tertiary markets. These pages provide basic hub information for search continuity but are not prioritized for rich content authoring.",
    indexingStrategy: "Strictly noindex to avoid thin content penalties."
  },
  globalDirective: "Do not index a city page until it has strong unique content, visible FAQs, useful stakeholder content, accurate local/cultural notes, no fake office claims, and a clear demo CTA."
};
