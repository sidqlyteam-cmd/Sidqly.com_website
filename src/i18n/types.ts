import type { LocationBenefit, LocationFaq } from '../data/locations/locationTypes';

export interface NavTranslations {
  home?: string;
  product: string;
  whatIsSidqly: string;
  features: string;
  modules: string;
  compare: string;
  pricing: string;
  guidedPilot: string;
  dataMigration: string;
  contactSales: string;
  useCases: string;
  islamicTools: string;
  resources: string;
  newsroom: string;
  trust: string;
  demo: string;
  locations: string;
  more?: string;
}

export interface CommonTranslations {
  bookDemo: string;
  applyGuidedPilot: string;
  contactUs: string;
  learnMore: string;
  viewDetails: string;
  getStarted: string;
  search: string;
  searchPlaceholder: string;
  selectLanguage: string;
  copyright: string;
  allRightsReserved: string;
  verifiedGiving: string;
  protectedDignity: string;
  clearImpact: string;
}

export interface LocationUITranslations {
  operatingIn: string;
  locationOverview: string;
  whySidqlyIn: string;
  realisticUseCases: string;
  relevantModules: string;
  frequentlyAskedQuestions: string;
  quickAnswerTitle: string;
  localNeedsTitle: string;
  culturalContextTitle: string;
  stakeholdersTitle: string;
  bookDemoForLocation: string;
  startPilotForLocation: string;
  backToLocations: string;
}

export interface FormTranslations {
  fullName: string;
  emailAddress: string;
  organizationName: string;
  phoneNumber: string;
  message: string;
  submit: string;
  submitting: string;
  successMessage: string;
}

export interface NamazToolTranslations {
  title: string;
  subtitle: string;
  nextPrayer: string;
  enterCityCountry: string;
}

export interface QiblaToolTranslations {
  title: string;
  subtitle: string;
  qiblaBearing: string;
  fromNorth: string;
  orEnterManually: string;
  calculateDirection: string;
  recalculate: string;
  liveCompassActive: string;
  compassUnavailable: string;
  locationPermissionDenied: string;
  unableToDetermineLocation: string;
  invalidCoordinates: string;
  privacyDisclaimer: string;
  accuracyDisclaimer: string;
}

export interface ZakatToolTranslations {
  title: string;
  subtitle: string;
  nisabSectionTitle: string;
  assetsSectionTitle: string;
  liabilitiesSectionTitle: string;
  goldNisab: string;
  silverNisab: string;
  customNisab: string;
  currentNisabValue: string;
  nisabNote: string;
  cash: string;
  bankBalance: string;
  gold: string;
  silver: string;
  investments: string;
  businessAssets: string;
  receivables: string;
  otherAssets: string;
  liabilities: string;
  estimatedSummary: string;
  totalAssets: string;
  deductibleLiabilities: string;
  netZakatableWealth: string;
  nisabThreshold: string;
  zakatRate: string;
  estimatedZakat: string;
  belowNisab: string;
  eligibleForZakat: string;
  enterNisabPrompt: string;
  religiousDisclaimer: string;
}

export interface IslamicToolsTranslations {
  calculate: string;
  reset: string;
  retry: string;
  loading: string;
  error: string;
  location: string;
  useMyLocation: string;
  latitude: string;
  longitude: string;
  city: string;
  country: string;
  calculationMethod: string;
  result: string;
  unableToCalculate: string;
  tryAgain: string;
  privacyNotice: string;
  namaz: NamazToolTranslations;
  qibla: QiblaToolTranslations;
  zakat: ZakatToolTranslations;
}

export interface UITranslationKeys {
  nav: NavTranslations;
  common: CommonTranslations;
  locationUI: LocationUITranslations;
  forms: FormTranslations;
  islamicTools: IslamicToolsTranslations;
}

export interface LocationTranslation {
  cityName?: string;
  country?: string;
  region?: string;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  shortHero?: string;
  quickAnswer?: string;
  localNeeds?: string;
  culturalNote?: string;
  localLanguageNote?: string;
  stakeholderSummary?: string;
  whySidqlyForLocation?: {
    title?: string;
    subtitle?: string;
    benefits?: LocationBenefit[];
  };
  faqs?: LocationFaq[];
}
