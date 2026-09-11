import type { Language } from '../config';
import type { UITranslationKeys } from '../types';
import { enTranslations } from './en';
import { arTranslations } from './ar';
import { urTranslations } from './ur';
import { frTranslations } from './fr';
import { deTranslations } from './de';

export const uiTranslations: Record<Language, UITranslationKeys> = {
  en: enTranslations,
  ar: arTranslations,
  ur: urTranslations,
  fr: frTranslations,
  de: deTranslations,
};

export function getUITranslations(lang: Language): UITranslationKeys {
  return uiTranslations[lang] || enTranslations;
}

export { enTranslations, arTranslations, urTranslations, frTranslations, deTranslations };
