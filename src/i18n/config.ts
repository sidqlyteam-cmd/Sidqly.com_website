export type Language = 'en' | 'ar' | 'ur' | 'fr' | 'de';

export type Direction = 'ltr' | 'rtl';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  dir: Direction;
  isDefault?: boolean;
}

export const DEFAULT_LANGUAGE: Language = 'en';

export const SUPPORTED_LANGUAGES: Record<Language, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    isDefault: true,
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
  },
  ur: {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    dir: 'rtl',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
  },
};

export const LANGUAGE_CODES: Language[] = ['en', 'ar', 'ur', 'fr', 'de'];

export function isSupportedLanguage(
  code: string | undefined | null
): code is Language {
  if (!code) return false;
  return LANGUAGE_CODES.includes(code as Language);
}

export function getLanguageDir(lang: Language): Direction {
  return SUPPORTED_LANGUAGES[lang]?.dir || 'ltr';
}