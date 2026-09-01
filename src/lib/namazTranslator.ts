import {
  SALAH_DATASET,
  SALAH_SECTIONS_META,
  type SalahRecitationItem,
  type SalahSectionCategory,
} from '../data/namazTranslatorData';

export type SupportedLang = 'en' | 'ar' | 'ur' | 'fr' | 'de';

/**
 * Helper to extract localized text with graceful fallback to English.
 */
export function getLocalizedField<T extends Record<SupportedLang, string>>(
  field: T | undefined,
  lang: SupportedLang
): string {
  if (!field) return '';
  return field[lang] || field.en || '';
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
 * or translations across all supported languages.
 */
export function searchSalahRecitations(
  query: string,
  sectionFilter?: SalahSectionCategory | 'all'
): SalahRecitationItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  const baseItems = getSalahRecitationsBySection(sectionFilter);

  if (!normalizedQuery) {
    return baseItems;
  }

  return baseItems.filter((item) => {
    // Match in title
    const matchTitle = Object.values(item.title).some((t) =>
      t.toLowerCase().includes(normalizedQuery)
    );
    if (matchTitle) return true;

    // Match in primary Arabic or Transliteration
    if (
      item.primaryArabic.includes(query.trim()) ||
      item.primaryTransliteration.toLowerCase().includes(normalizedQuery)
    ) {
      return true;
    }

    // Match in primary Translations
    const matchTranslation = Object.values(item.primaryTranslations).some((t) =>
      t.toLowerCase().includes(normalizedQuery)
    );
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
