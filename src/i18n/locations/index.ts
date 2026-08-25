import type { Language } from '../config';
import type { LocationRecord } from '../../data/locations/locationTypes';
import type { LocationTranslation } from '../types';
import { arLocationTranslations } from './ar';
import { urLocationTranslations } from './ur';

export const locationTranslations: Record<Exclude<Language, 'en'>, Record<string, LocationTranslation>> = {
  ar: arLocationTranslations,
  ur: urLocationTranslations,
  fr: {},
  de: {},
};

export function getLocationTranslation(
  record: LocationRecord,
  lang: Language
): LocationRecord {
  if (!record || lang === 'en') {
    return record;
  }

  const langMap = locationTranslations[lang];
  if (!langMap) return record;

  const translation = langMap[record.slug];
  if (!translation) return record;

  return {
    ...record,
    cityName: translation.cityName || record.cityName,
    country: translation.country || record.country,
    region: translation.region || record.region,
    h1: translation.h1 || record.h1,
    metaTitle: translation.metaTitle || record.metaTitle,
    metaDescription: translation.metaDescription || record.metaDescription,
    shortHero: translation.shortHero || record.shortHero,
    quickAnswer: translation.quickAnswer || record.quickAnswer,
    localNeeds: translation.localNeeds || record.localNeeds,
    culturalNote: translation.culturalNote || record.culturalNote,
    localLanguageNote: translation.localLanguageNote || record.localLanguageNote,
    stakeholderSummary: translation.stakeholderSummary || record.stakeholderSummary,
    whySidqlyForLocation: translation.whySidqlyForLocation
      ? {
          title: translation.whySidqlyForLocation.title || record.whySidqlyForLocation?.title || '',
          subtitle: translation.whySidqlyForLocation.subtitle || record.whySidqlyForLocation?.subtitle,
          benefits: translation.whySidqlyForLocation.benefits || record.whySidqlyForLocation?.benefits || [],
        }
      : record.whySidqlyForLocation,
    faqs: translation.faqs || record.faqs,
  };
}
