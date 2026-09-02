import type {
  LanguageCode,
  NamazTranslationPack,
  TranslationLoadResult,
} from '../i18n/namazTypes';
import { getNamazLanguage } from '../data/namazLanguagesRegistry';
import { SALAH_DATASET, SALAH_SECTIONS_META } from '../data/namazTranslatorData';

/**
 * In-memory client-side cache for dynamically loaded language packs.
 */
const translationCache = new Map<LanguageCode, NamazTranslationPack>();

/**
 * Dynamic import registry for bundled extended language packs.
 */
const dynamicPacksRegistry: Record<LanguageCode, () => Promise<{ default: NamazTranslationPack }>> = {
  tr: () => import('../data/namazTranslations/tr'),
  id: () => import('../data/namazTranslations/id'),
  es: () => import('../data/namazTranslations/es'),
};

/**
 * Build a fallback translation pack for extended languages that do not yet have
 * a dedicated static dynamic pack file. Generates structured informational items using English text.
 */
function buildInformationalFallbackPack(langCode: LanguageCode): NamazTranslationPack {
  const langMeta = getNamazLanguage(langCode);
  const items: Record<string, any> = {};
  const sections: Record<string, string> = {};

  SALAH_SECTIONS_META.forEach((sec) => {
    sections[sec.id] = sec.name.en;
  });

  SALAH_DATASET.forEach((item) => {
    items[item.id] = {
      title: item.title.en,
      primaryTranslation: item.primaryTranslations.en,
      wordBreakdown: item.wordBreakdown?.map((wb) => ({
        arabic: wb.arabic,
        translation: wb.translations.en,
      })),
      variants: item.variants?.map((v) => ({
        id: v.id,
        name: v.name.en,
        translation: v.translations.en,
      })),
    };
  });

  return {
    languageCode: langCode,
    isMachineGenerated: true,
    disclaimer: `Translation for ${langMeta.name} (${langMeta.nativeName}) is currently presented using English scholarly reference with original Arabic preserved. High-trust community translations will be updated progressively.`,
    sections,
    items,
  };
}

/**
 * Load a Namaz Translation Pack dynamically with caching and deterministic fallback.
 */
export async function loadNamazTranslationPack(
  langCode: LanguageCode
): Promise<TranslationLoadResult> {
  const normalizedCode = (langCode || 'en').toLowerCase().trim();
  const langMeta = getNamazLanguage(normalizedCode);

  // 1. Tier 1 Core Verified Languages (en, ar, ur, fr, de)
  if (langMeta.verified) {
    return {
      languageCode: langMeta.code,
      provider: 'verified_static',
      pack: null,
      verified: true,
      isMachineGenerated: false,
    };
  }

  // 2. Check Client-side Memory Cache
  if (translationCache.has(langMeta.code)) {
    const cachedPack = translationCache.get(langMeta.code)!;
    return {
      languageCode: langMeta.code,
      provider: 'dynamic_pack',
      pack: cachedPack,
      verified: false,
      isMachineGenerated: cachedPack.isMachineGenerated,
    };
  }

  // 3. Dynamic Import from registry
  if (dynamicPacksRegistry[langMeta.code]) {
    try {
      const module = await dynamicPacksRegistry[langMeta.code]();
      const pack = module.default;
      translationCache.set(langMeta.code, pack);

      return {
        languageCode: langMeta.code,
        provider: 'dynamic_pack',
        pack,
        verified: false,
        isMachineGenerated: pack.isMachineGenerated,
      };
    } catch (err) {
      console.warn(`Failed to dynamically load Namaz translation pack for ${langMeta.code}:`, err);
    }
  }

  // 4. Fallback Provider
  const fallbackPack = buildInformationalFallbackPack(langMeta.code);
  translationCache.set(langMeta.code, fallbackPack);

  return {
    languageCode: langMeta.code,
    provider: 'fallback',
    pack: fallbackPack,
    verified: false,
    isMachineGenerated: true,
    error: 'Dynamic language pack unavailable; using informational English fallback with Arabic source.',
  };
}

/**
 * Prefetch language pack into memory cache without blocking UI.
 */
export function prefetchNamazTranslationPack(langCode: LanguageCode): void {
  const normalizedCode = (langCode || '').toLowerCase().trim();
  if (dynamicPacksRegistry[normalizedCode] && !translationCache.has(normalizedCode)) {
    loadNamazTranslationPack(normalizedCode).catch(() => {});
  }
}

/**
 * Clear in-memory translation cache.
 */
export function clearNamazTranslationCache(): void {
  translationCache.clear();
}
