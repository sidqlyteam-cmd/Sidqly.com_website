import { describe, it, expect, beforeEach } from 'vitest';
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
  getItemPrimaryTranslation,
  getSectionName,
  type SupportedLang,
} from '../namazTranslator';
import {
  NAMAZ_LANGUAGES_REGISTRY,
  getNamazLanguage,
  isRtlLanguage,
  searchNamazLanguages,
} from '../../data/namazLanguagesRegistry';
import {
  loadNamazTranslationPack,
  clearNamazTranslationCache,
} from '../namazTranslationLoader';

describe('Namaz Translator Dataset & Core Functionality Tests', () => {
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

describe('Namaz 140+ Language Registry Tests', () => {
  it('should contain 140+ languages in the registry with valid metadata', () => {
    expect(NAMAZ_LANGUAGES_REGISTRY.length).toBeGreaterThanOrEqual(140);

    const codes = new Set<string>();
    NAMAZ_LANGUAGES_REGISTRY.forEach((lang) => {
      expect(lang.code).toBeDefined();
      expect(lang.code.length).toBeGreaterThan(0);
      expect(lang.name).toBeDefined();
      expect(lang.nativeName).toBeDefined();
      expect(['ltr', 'rtl']).toContain(lang.direction);
      expect(typeof lang.verified).toBe('boolean');

      // Ensure uniqueness of codes
      expect(codes.has(lang.code)).toBe(false);
      codes.add(lang.code);
    });
  });

  it('should identify Tier 1 verified languages correctly', () => {
    const verifiedCodes = ['en', 'ar', 'ur', 'fr', 'de'];
    verifiedCodes.forEach((code) => {
      const lang = getNamazLanguage(code);
      expect(lang.verified).toBe(true);
    });
  });

  it('should correctly detect RTL languages', () => {
    expect(isRtlLanguage('ar')).toBe(true);
    expect(isRtlLanguage('ur')).toBe(true);
    expect(isRtlLanguage('fa')).toBe(true);
    expect(isRtlLanguage('ps')).toBe(true);
    expect(isRtlLanguage('sd')).toBe(true);
    expect(isRtlLanguage('he')).toBe(true);
    expect(isRtlLanguage('ug')).toBe(true);

    expect(isRtlLanguage('en')).toBe(false);
    expect(isRtlLanguage('tr')).toBe(false);
    expect(isRtlLanguage('es')).toBe(false);
  });

  it('should filter languages by search query', () => {
    const turkishResult = searchNamazLanguages('Türkçe');
    expect(turkishResult.some((l) => l.code === 'tr')).toBe(true);

    const pashtoResult = searchNamazLanguages('Pashto');
    expect(pashtoResult.some((l) => l.code === 'ps')).toBe(true);

    const nonExistent = searchNamazLanguages('xyz123nonexistentlanguage');
    expect(nonExistent.length).toBe(0);
  });
});

describe('Dynamic Translation Loader & 140+ Languages Resolution Tests', () => {
  beforeEach(() => {
    clearNamazTranslationCache();
  });

  it('should handle Tier 1 verified language loading directly', async () => {
    const res = await loadNamazTranslationPack('en');
    expect(res.provider).toBe('verified_static');
    expect(res.verified).toBe(true);
    expect(res.pack).toBeNull();
  });

  it('should dynamically load authored extended language packs (e.g. Turkish)', async () => {
    const res = await loadNamazTranslationPack('tr');
    expect(res.provider).toBe('dynamic_pack');
    expect(res.verified).toBe(false);
    expect(res.isMachineGenerated).toBe(true);
    expect(res.pack).not.toBeNull();
    expect(res.pack?.items['takbir-1'].primaryTranslation).toBe('Allah en büyüktür.');
  });

  it('should resolve every single registered language (145/145) to an authentic localized translation pack without template strings or placeholders', async () => {
    const takbirItem = getSalahItemById('takbir-1')!;

    for (const lang of NAMAZ_LANGUAGES_REGISTRY) {
      if (lang.verified) continue; // Skip Tier 1 static languages

      const res = await loadNamazTranslationPack(lang.code);
      expect(res.pack).not.toBeNull();
      expect(res.pack?.languageCode).toBe(lang.code);

      const translation = getItemPrimaryTranslation(takbirItem, lang.code, res.pack);
      expect(translation).toBeDefined();
      expect(translation.length).toBeGreaterThan(0);

      // Verify no generic English template string placeholders like ${langMeta.name} exist
      expect(translation).not.toContain('${');
      expect(translation).not.toContain(lang.name);
    }
  });

  it('should use client-side memory cache on consecutive loads', async () => {
    const load1 = await loadNamazTranslationPack('tr');
    const load2 = await loadNamazTranslationPack('tr');

    expect(load1.pack).toBe(load2.pack);
  });

  it('should resolve localized item fields cleanly with fallback', async () => {
    const takbirItem = getSalahItemById('takbir-1')!;

    // Verified English
    expect(getItemPrimaryTranslation(takbirItem, 'en', null)).toBe('Allah is the Greatest.');

    // Dynamic Turkish Pack
    const trRes = await loadNamazTranslationPack('tr');
    expect(getItemPrimaryTranslation(takbirItem, 'tr', trRes.pack)).toBe('Allah en büyüktür.');

    // Section title
    expect(getSectionName('takbir', 'tr', trRes.pack)).toBe('Tekbir-i İhram');
  });
});
