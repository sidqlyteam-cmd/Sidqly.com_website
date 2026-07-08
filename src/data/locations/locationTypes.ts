export type LocationIndexStatus = "index" | "noindex";

export type LocationPriorityTier = 1 | 2 | 3;

export type LocationContentQuality = "strong" | "medium" | "weak";

export type LocationPageType = "hub" | "region" | "country" | "city";

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationLink {
  label: string;
  href: string;
  description?: string;
}

export interface LocationRecord {
  cityName?: string;
  country: string;
  countrySlug: string;
  region: string;
  regionSlug: string;
  slug: string;
  pageType: LocationPageType;
  priorityTier: LocationPriorityTier;
  indexStatus: LocationIndexStatus;
  includeInSitemap: boolean;
  contentQuality: LocationContentQuality;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortHero: string;
  quickAnswer: string;
  localNeeds?: string;
  culturalNote?: string;
  localLanguageNote?: string;
  stakeholderSummary?: string;
  organizationTypes?: string[];
  recommendedModules?: LocationLink[];
  relatedUseCases?: LocationLink[];
  relatedUtilities?: LocationLink[];
  relatedResources?: LocationLink[];
  relatedTrustPages?: LocationLink[];
  faqs?: LocationFaq[];
  canonicalPath?: string;
}
