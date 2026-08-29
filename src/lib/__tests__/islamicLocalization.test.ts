import { describe, it, expect } from 'vitest';
import { enTranslations } from '../../i18n/translations/en';
import { arTranslations } from '../../i18n/translations/ar';
import { urTranslations } from '../../i18n/translations/ur';

describe('Islamic Tools Localization Completeness', () => {
  const checkKeysRecursive = (enObj: any, targetObj: any, path = '') => {
    for (const key of Object.keys(enObj)) {
      const currentPath = path ? `${path}.${key}` : key;
      expect(targetObj, `Missing parent object for path: ${currentPath}`).toBeDefined();
      expect(targetObj[key], `Missing translation key: ${currentPath}`).toBeDefined();

      if (typeof enObj[key] === 'object' && enObj[key] !== null) {
        checkKeysRecursive(enObj[key], targetObj[key], currentPath);
      } else {
        expect(typeof targetObj[key]).toBe('string');
        expect(targetObj[key].trim().length).toBeGreaterThan(0);
      }
    }
  };

  it('contains complete Arabic translations for all islamicTools keys', () => {
    checkKeysRecursive(enTranslations.islamicTools, arTranslations.islamicTools, 'islamicTools');
  });

  it('contains complete Urdu translations for all islamicTools keys', () => {
    checkKeysRecursive(enTranslations.islamicTools, urTranslations.islamicTools, 'islamicTools');
  });

  it('uses consistent terminology for Zakat, Sadaqah, Qurbani, and Ramadan in Urdu and Arabic', () => {
    // Zakat
    expect(arTranslations.islamicTools.zakat.title).toContain('الزكاة');
    expect(urTranslations.islamicTools.zakat.title).toContain('زکوٰۃ');

    // Sadaqah / Sadqa
    expect(arTranslations.islamicTools.sadqaZakatPlanner.sadqaTitle).toContain('الصدقة');
    expect(urTranslations.islamicTools.sadqaZakatPlanner.sadqaTitle).toContain('صدقہ');

    // Qurbani
    expect(arTranslations.islamicTools.eidQurbani.title).toContain('الأضاحي');
    expect(urTranslations.islamicTools.eidQurbani.title).toContain('قربانی');

    // Ramadan
    expect(arTranslations.islamicTools.ramadan.title).toContain('رمضان');
    expect(urTranslations.islamicTools.ramadan.title).toContain('رمضان');
  });
});
