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

export interface RamadanToolTranslations {
  title: string;
  subtitle: string;
  daysRemaining: string;
  daysAway: string;
  targetEstimateLabel: string;
  estimatedDate: string;
  officiallyConfirmed: string;
  disclaimerText: string;
  ramadanActiveTitle: string;
  ramadanActiveSubtitle: string;
  currentDayLabel: string;
  day: string;
  suhoor: string;
  iftar: string;
  fastingGoal: string;
  quranGoal: string;
  charityGoal: string;
  dhikrGoal: string;
  dailyChecklist: string;
  operationalChecklist: string;
  completed: string;
  remaining: string;
  reset: string;
  ramadanModule: string;
  vendorFulfillment: string;
  bookDemo: string;
  preRamadanPlanning: string;
  duringRamadanOperations: string;
  taskIftarModule: string;
  taskVendorRation: string;
  taskSponsorTemplates: string;
  taskWeatherGuidelines: string;
  taskDailyProof: string;
  taskDonorUpdates: string;
  taskVolunteerMapping: string;
  taskMonitorNamaz: string;
}

export interface EidQurbaniToolTranslations {
  title: string;
  subtitle: string;
  targetPlanningWindow: string;
  daysToPrepare: string;
  estimatedDate: string;
  officiallyConfirmed: string;
  disclaimerText: string;
  eidActiveTitle: string;
  eidActiveSubtitle: string;
  shareTrackingTitle: string;
  participantCountLabel: string;
  sharesLabel: string;
  invalidParticipantError: string;
  completedSharesLabel: string;
  operationalChecklistTitle: string;
  operationalReadiness: string;
  executionReporting: string;
  qurbaniSelection: string;
  participantPlanning: string;
  paymentConfirmation: string;
  slaughterConfirmation: string;
  distribution: string;
  recipientConfirmation: string;
  proofDocumentation: string;
  donorUpdate: string;
  certificateCompletion: string;
  completed: string;
  remaining: string;
  reset: string;
  exploreModule: string;
  requestDemo: string;
}

export interface HajjToolTranslations {
  title: string;
  subtitle: string;
  daysRemaining: string;
  daysAway: string;
  targetEstimateLabel: string;
  estimatedDate: string;
  officiallyConfirmed: string;
  disclaimerText: string;
  preparationTimelineTitle: string;
  upcomingHajj: string;
  currentHajjSeason: string;
  nextHajj: string;
  hajjActiveTitle: string;
  hajjActiveSubtitle: string;
  timeline90Days: string;
  timeline60Days: string;
  timeline30Days: string;
  timeline10Days: string;
  timelineAction90: string;
  timelineAction60: string;
  timelineAction30: string;
  timelineAction10: string;
  qurbaniWorkflows: string;
  requestDemo: string;
}

export interface WeatherToolTranslations {
  title: string;
  subtitle: string;
  enterCityPlaceholder: string;
  check: string;
  riskLevel: string;
  temperature: string;
  condition: string;
  wind: string;
  adviceTitle: string;
  privacyNote: string;
  disclaimer: string;
  errorFallback: string;
  enterCityError: string;
  currentLocationLabel: string;
}

export interface SadqaZakatPlannerTranslations {
  title: string;
  subtitle: string;
  sadqaTitle: string;
  zakatTitle: string;
  zakatModuleLink: string;
  sadaqahModuleLink: string;
  disclaimer: string;
  items: {
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    z1: string;
    z2: string;
    z3: string;
    z4: string;
  };
}

export interface IslamicGlossaryTranslations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  viewRelatedModule: string;
  noTermsFound: string;
  disclaimer: string;
}

export interface IslamicUtilitiesHubTranslations {
  title: string;
  subtitle: string;
  openTool: string;
}

export interface PrayerTimePlanningCardTranslations {
  title: string;
  description: string;
  supportsTitle: string;
  point1: string;
  point2: string;
  point3: string;
  disclaimer: string;
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
  ramadan: RamadanToolTranslations;
  eidQurbani: EidQurbaniToolTranslations;
  hajj: HajjToolTranslations;
  weather: WeatherToolTranslations;
  sadqaZakatPlanner: SadqaZakatPlannerTranslations;
  glossary: IslamicGlossaryTranslations;
  utilitiesHub: IslamicUtilitiesHubTranslations;
  prayerPlanningCard: PrayerTimePlanningCardTranslations;
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
