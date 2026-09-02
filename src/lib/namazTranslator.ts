import {
  SALAH_DATASET,
  SALAH_SECTIONS_META,
  type SalahRecitationItem,
  type SalahSectionCategory,
} from '../data/namazTranslatorData';
import type { LanguageCode, NamazTranslationPack } from '../i18n/namazTypes';

export type SupportedLang = 'en' | 'ar' | 'ur' | 'fr' | 'de';

/**
 * Helper to extract localized text with graceful fallback to English.
 */
export function getLocalizedField<T extends Record<string, string>>(
  field: T | undefined,
  lang: LanguageCode
): string {
  if (!field) return '';
  if (field[lang]) return field[lang];

  // Try subtag fallback (e.g., 'en-US' -> 'en')
  const baseCode = (lang || '').split('-')[0];
  if (field[baseCode]) return field[baseCode];

  return field.en || '';
}

/**
 * Get localized item title using loaded dynamic translation pack or Tier 1 verified dictionary.
 */
export function getItemTitle(
  item: SalahRecitationItem,
  lang: LanguageCode,
  pack?: NamazTranslationPack | null
): string {
  if (pack?.items?.[item.id]?.title) {
    return pack.items[item.id].title!;
  }
  return getLocalizedField(item.title, lang);
}

/**
 * Get localized primary translation using loaded dynamic translation pack or Tier 1 verified dictionary.
 */
export function getItemPrimaryTranslation(
  item: SalahRecitationItem,
  lang: LanguageCode,
  pack?: NamazTranslationPack | null
): string {
  if (pack?.items?.[item.id]?.primaryTranslation) {
    return pack.items[item.id].primaryTranslation!;
  }
  return getLocalizedField(item.primaryTranslations, lang);
}

/**
 * Get localized word translation using loaded dynamic translation pack or Tier 1 verified dictionary.
 */
export function getWordTranslation(
  wordItem: { arabic: string; translations: Record<string, string> },
  itemKey: string,
  wordIndex: number,
  lang: LanguageCode,
  pack?: NamazTranslationPack | null
): string {
  if (pack?.items?.[itemKey]?.wordBreakdown?.[wordIndex]?.translation) {
    return pack.items[itemKey].wordBreakdown![wordIndex].translation;
  }
  return getLocalizedField(wordItem.translations, lang);
}

/**
 * Get localized variant translation using loaded dynamic translation pack or Tier 1 verified dictionary.
 */
export function getVariantTranslation(
  variant: { id: string; name: Record<string, string>; translations: Record<string, string> },
  itemKey: string,
  variantIndex: number,
  lang: LanguageCode,
  pack?: NamazTranslationPack | null
): { name: string; translation: string } {
  const packVariant = pack?.items?.[itemKey]?.variants?.[variantIndex];

  return {
    name: packVariant?.name || getLocalizedField(variant.name, lang),
    translation: packVariant?.translation || getLocalizedField(variant.translations, lang),
  };
}

/**
 * Get localized section name.
 */
export function getSectionName(
  sectionId: SalahSectionCategory,
  lang: LanguageCode,
  pack?: NamazTranslationPack | null
): string {
  if (pack?.sections?.[sectionId]) {
    return pack.sections[sectionId];
  }

  const meta = SALAH_SECTIONS_META.find((s) => s.id === sectionId);
  if (!meta) return sectionId;
  return getLocalizedField(meta.name, lang);
}

/**
 * Get all available Salah section metadata sorted by order.
 */
export function getAllSalahSections() {
  return [...SALAH_SECTIONS_META].sort((a, b) => a.order - b.order);
}

/**
 * Get recitations filtered by section.
 * If section is undefined, null, or 'all', returns all items sorted by order.
 */
export function getSalahRecitationsBySection(
  section?: SalahSectionCategory | 'all'
): SalahRecitationItem[] {
  if (!section || section === 'all') {
    return [...SALAH_DATASET].sort((a, b) => a.order - b.order);
  }
  return SALAH_DATASET.filter((item) => item.section === section).sort(
    (a, b) => a.order - b.order
  );
}

/**
 * Get a specific recitation item by ID.
 */
export function getSalahItemById(id: string): SalahRecitationItem | undefined {
  return SALAH_DATASET.find((item) => item.id === id);
}

/**
 * Search recitations by query string matching title, Arabic text, transliteration,
 * or translations across all supported languages and active translation pack.
 */
export function searchSalahRecitations(
  query: string,
  sectionFilter?: SalahSectionCategory | 'all',
  activePack?: NamazTranslationPack | null
): SalahRecitationItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  const baseItems = getSalahRecitationsBySection(sectionFilter);

  if (!normalizedQuery) {
    return baseItems;
  }

  return baseItems.filter((item) => {
    // Match in title (static + dynamic pack)
    const matchTitle =
      Object.values(item.title).some((t) => t.toLowerCase().includes(normalizedQuery)) ||
      (activePack?.items?.[item.id]?.title?.toLowerCase().includes(normalizedQuery) ?? false);
    if (matchTitle) return true;

    // Match in primary Arabic or Transliteration
    if (
      item.primaryArabic.includes(query.trim()) ||
      item.primaryTransliteration.toLowerCase().includes(normalizedQuery)
    ) {
      return true;
    }

    // Match in primary Translations (static + dynamic pack)
    const matchTranslation =
      Object.values(item.primaryTranslations).some((t) =>
        t.toLowerCase().includes(normalizedQuery)
      ) ||
      (activePack?.items?.[item.id]?.primaryTranslation?.toLowerCase().includes(normalizedQuery) ?? false);
    if (matchTranslation) return true;

    // Match in Source Reference
    if (item.sourceReference.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Match in Word Breakdown
    if (item.wordBreakdown) {
      const matchWord = item.wordBreakdown.some(
        (wb) =>
          wb.arabic.includes(query.trim()) ||
          wb.transliteration.toLowerCase().includes(normalizedQuery) ||
          Object.values(wb.translations).some((tr) =>
            tr.toLowerCase().includes(normalizedQuery)
          )
      );
      if (matchWord) return true;
    }

    // Match in Sunnah Variants
    if (item.variants) {
      const matchVariant = item.variants.some(
        (v) =>
          v.arabicText.includes(query.trim()) ||
          v.transliteration.toLowerCase().includes(normalizedQuery) ||
          Object.values(v.translations).some((tr) =>
            tr.toLowerCase().includes(normalizedQuery)
          ) ||
          Object.values(v.name).some((nm) =>
            nm.toLowerCase().includes(normalizedQuery)
          )
      );
      if (matchVariant) return true;
    }

    return false;
  });
}

/**
 * Return summary statistics of the Salah dataset.
 */
export function getSalahDatasetStats() {
  const totalItems = SALAH_DATASET.length;
  const totalSections = SALAH_SECTIONS_META.length;
  const itemsWithBreakdown = SALAH_DATASET.filter(
    (i) => i.wordBreakdown && i.wordBreakdown.length > 0
  ).length;
  const itemsWithVariants = SALAH_DATASET.filter(
    (i) => i.variants && i.variants.length > 0
  ).length;

  return {
    totalItems,
    totalSections,
    itemsWithBreakdown,
    itemsWithVariants,
  };
}
