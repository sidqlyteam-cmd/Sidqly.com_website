/**
 * Scalable Namaz Translator Multilingual Architecture - Type Definitions
 */

export type TextDirection = 'ltr' | 'rtl';

export type LanguageCode = string;

export interface NamazLanguage {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: TextDirection;
  script?: string;
  verified: boolean;
  isDynamic?: boolean;
  region?: string;
}

export interface WordTranslationItem {
  arabic: string;
  translation: string;
}

export interface SunnahVariantTranslation {
  id: string;
  name: string;
  translation: string;
}

export interface NamazItemTranslation {
  title?: string;
  primaryTranslation?: string;
  wordBreakdown?: WordTranslationItem[];
  variants?: SunnahVariantTranslation[];
  contextNote?: string;
}

export interface NamazTranslationPack {
  languageCode: LanguageCode;
  isMachineGenerated: boolean;
  disclaimer?: string;
  sections?: Record<string, string>; // Section ID -> Localized Section Title
  items: Record<string, NamazItemTranslation>; // Recitation Item ID -> Localized Item Content
}

export type TranslationProviderType =
  | 'verified_static'
  | 'dynamic_pack'
  | 'external_api'
  | 'fallback';

export interface TranslationLoadResult {
  languageCode: LanguageCode;
  provider: TranslationProviderType;
  pack: NamazTranslationPack | null;
  verified: boolean;
  isMachineGenerated: boolean;
  error?: string;
}
