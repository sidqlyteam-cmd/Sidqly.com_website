import { describe, it, expect } from 'vitest';
import {
  SALAH_DATASET,
} from '../../data/namazTranslatorData';
import {
  getAllSalahSections,
  getSalahRecitationsBySection,
  getSalahItemById,
  searchSalahRecitations,
  getSalahDatasetStats,
  getLocalizedField,
  type SupportedLang,
} from '../namazTranslator';

describe('Namaz Translator Dataset & Library Tests', () => {
  const supportedLangs: SupportedLang[] = ['en', 'ar', 'ur', 'fr', 'de'];

  it('should contain all 13 required Salah sections in metadata', () => {
    const sections = getAllSalahSections();
    expect(sections.length).toBe(13);

    const requiredSectionIds = [
      'takbir',
      'sana',
      'taawwudh',
      'basmalah',
      'fatihah',
      'ruku',
      'qawmah',
      'sujood',
      'jalsah',
      'tashahhud',
      'durood',
      'closing_dua',
      'qunut',
    ];

    const presentIds = sections.map((s) => s.id);
    requiredSectionIds.forEach((reqId) => {
      expect(presentIds).toContain(reqId);
    });
  });

  it('should verify dataset integrity across all recitations', () => {
    expect(SALAH_DATASET.length).toBeGreaterThan(0);

    SALAH_DATASET.forEach((item) => {
      expect(item.id).toBeDefined();
      expect(item.section).toBeDefined();
      expect(item.primaryArabic.length).toBeGreaterThan(0);
      expect(item.primaryTransliteration.length).toBeGreaterThan(0);
      expect(item.sourceReference.length).toBeGreaterThan(0);

      // Verify translations exist for all 5 languages
      supportedLangs.forEach((lang) => {
        expect(item.title[lang]).toBeDefined();
        expect(item.title[lang].length).toBeGreaterThan(0);
        expect(item.primaryTranslations[lang]).toBeDefined();
        expect(item.primaryTranslations[lang].length).toBeGreaterThan(0);
      });
    });
  });

  it('should verify word-by-word breakdown integrity where present', () => {
    const itemsWithBreakdown = SALAH_DATASET.filter((i) => i.wordBreakdown);
    expect(itemsWithBreakdown.length).toBeGreaterThan(5);

    itemsWithBreakdown.forEach((item) => {
      item.wordBreakdown!.forEach((word) => {
        expect(word.arabic.length).toBeGreaterThan(0);
        expect(word.transliteration.length).toBeGreaterThan(0);
        supportedLangs.forEach((lang) => {
          expect(word.translations[lang]).toBeDefined();
          expect(word.translations[lang].length).toBeGreaterThan(0);
        });
      });
    });
  });

  it('should verify Sunnah variants integrity and Hadith source references', () => {
    const itemsWithVariants = SALAH_DATASET.filter((i) => i.variants);
    expect(itemsWithVariants.length).toBeGreaterThan(3);

    itemsWithVariants.forEach((item) => {
      item.variants!.forEach((variant) => {
        expect(variant.id).toBeDefined();
        expect(variant.sourceReference.length).toBeGreaterThan(0);
        expect(variant.arabicText.length).toBeGreaterThan(0);
        expect(variant.transliteration.length).toBeGreaterThan(0);
        supportedLangs.forEach((lang) => {
          expect(variant.name[lang]).toBeDefined();
          expect(variant.name[lang].length).toBeGreaterThan(0);
          expect(variant.translations[lang]).toBeDefined();
          expect(variant.translations[lang].length).toBeGreaterThan(0);
        });
      });
    });
  });

  it('should correctly filter recitations by section', () => {
    const fatihahItems = getSalahRecitationsBySection('fatihah');
    expect(fatihahItems.length).toBe(5);
    fatihahItems.forEach((item) => {
      expect(item.section).toBe('fatihah');
    });

    const allItems = getSalahRecitationsBySection('all');
    expect(allItems.length).toBe(SALAH_DATASET.length);
  });

  it('should correctly retrieve recitation items by ID', () => {
    const item = getSalahItemById('takbir-1');
    expect(item).toBeDefined();
    expect(item?.primaryTransliteration).toBe('Allāhu Akbar');

    const nonExistent = getSalahItemById('non-existent-id');
    expect(nonExistent).toBeUndefined();
  });

  it('should correctly handle search filtering', () => {
    const result1 = searchSalahRecitations('Fatihah');
    expect(result1.length).toBeGreaterThan(0);

    const result2 = searchSalahRecitations('جهنم');
    expect(result2.length).toBeGreaterThan(0);
    expect(result2.some((i) => i.id === 'closing-dua-1')).toBe(true);

    const result3 = searchSalahRecitations('Subḥānakal-lāhumma');
    expect(result3.length).toBeGreaterThan(0);

    const result4 = searchSalahRecitations('nonexistentsearchquery12345');
    expect(result4.length).toBe(0);
  });

  it('should correctly fall back language in getLocalizedField', () => {
    const dict = {
      en: 'English Text',
      ar: 'النص العربي',
      ur: 'اردو متن',
      fr: 'Texte français',
      de: 'Deutscher Text',
    };

    expect(getLocalizedField(dict, 'ur')).toBe('اردو متن');
    expect(getLocalizedField(undefined, 'en')).toBe('');
  });

  it('should accurately compute dataset stats', () => {
    const stats = getSalahDatasetStats();
    expect(stats.totalItems).toBe(SALAH_DATASET.length);
    expect(stats.totalSections).toBe(13);
    expect(stats.itemsWithBreakdown).toBeGreaterThan(5);
    expect(stats.itemsWithVariants).toBeGreaterThan(3);
  });
});
