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

export interface IslamicCalendarToolTranslations {
  title: string;
  subtitle: string;
  today: string;
  todaysDate: string;
  previous: string;
  next: string;
  previousMonth: string;
  nextMonth: string;
  previousYear: string;
  nextYear: string;
  currentMonth: string;
  currentYear: string;
  hijriDate: string;
  gregorianDate: string;
  islamicMonth: string;
  importantDates: string;
  selectedDateDetails: string;
  selectDatePrompt: string;
  estimated: string;
  officiallyConfirmed: string;
  planningDisclaimer: string;
  twelveMonthEstimate: string;
  estimatedHijriOverlap: string;
  operationalAlignmentTitle: string;
  operationalAlignmentSubtitle: string;
  ramadanSpike: string;
  dhulHijjahSpike: string;
  muharramSpike: string;
  ramadanPlannerTitle: string;
  ramadanPlannerDesc: string;
  eidPlannerTitle: string;
  eidPlannerDesc: string;
  hajjCountdownTitle: string;
  hajjCountdownDesc: string;
  zakatPlanningTitle: string;
  zakatPlanningDesc: string;
  months: {
    muharram: string;
    safar: string;
    rabiAlAwwal: string;
    rabiAlThani: string;
    jumadaAlAwwal: string;
    jumadaAlThani: string;
    rajab: string;
    shaban: string;
    ramadan: string;
    shawwal: string;
    dhulQadah: string;
    dhulHijjah: string;
  };
  events: {
    islamicNewYear: string;
    dayOfAshura: string;
    mawlid: string;
    israMiraj: string;
    nisfuShaban: string;
    firstRamadan: string;
    ramadanMonth: string;
    eidAlFitr: string;
    dayOfArafah: string;
    eidAlAdha: string;
    daysOfDhulHijjah: string;
  };
}

export interface MoonPhaseToolTranslations {
  title: string;
  subtitle: string;
  currentPhase: string;
  illumination: string;
  lunarAge: string;
  days: string;
  nextPhase: string;
  astronomicalEstimate: string;
  astronomicalDisclaimer: string;
  operationalReadinessTitle: string;
  operationalReadinessDesc: string;
  preparationGuidelinesTitle: string;
  prepStep1: string;
  prepStep2: string;
  prepStep3: string;
  phases: {
    newMoon: string;
    waxingCrescent: string;
    firstQuarter: string;
    waxingGibbous: string;
    fullMoon: string;
    waningGibbous: string;
    lastQuarter: string;
    waningCrescent: string;
  };
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
  calendar: IslamicCalendarToolTranslations;
  moonPhase: MoonPhaseToolTranslations;
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
