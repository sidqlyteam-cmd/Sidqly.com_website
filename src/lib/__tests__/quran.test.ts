import { describe, it, expect, beforeEach } from 'vitest';
import {
  getQuranBookmarks,
  saveQuranBookmark,
  removeQuranBookmark,
  isAyahBookmarked,
  getLastReadPosition,
  saveLastReadPosition,
  fetchSurahDetail,
  searchQuran,
} from '../quran';
import { SURAHS_LIST } from '../../data/quranSurahsData';

// Polyfill localStorage for node environment if not present
if (typeof globalThis.localStorage === 'undefined') {
  const store = new Map<string, string>();
  globalThis.localStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => store.set(key, value),
    removeItem: (key: string) => store.delete(key),
    clear: () => store.clear(),
    length: 0,
    key: () => null,
  };
}

describe('Quran utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('contains 114 Surahs in metadata', () => {
    expect(SURAHS_LIST.length).toBe(114);
    expect(SURAHS_LIST[0].englishName).toBe('Al-Fatihah');
    expect(SURAHS_LIST[113].englishName).toBe('An-Nas');
  });

  it('manages bookmarks in LocalStorage correctly', () => {
    expect(getQuranBookmarks()).toEqual([]);

    const bm = {
      surahNumber: 1,
      ayahNumberInSurah: 2,
      surahName: 'Al-Fatihah',
      textSnippet: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      timestamp: Date.now(),
    };

    saveQuranBookmark(bm);
    expect(isAyahBookmarked(1, 2)).toBe(true);
    expect(isAyahBookmarked(1, 3)).toBe(false);

    removeQuranBookmark(1, 2);
    expect(isAyahBookmarked(1, 2)).toBe(false);
  });

  it('manages last read position correctly', () => {
    expect(getLastReadPosition()).toBeNull();

    const pos = {
      surahNumber: 36,
      ayahNumberInSurah: 1,
      surahName: 'Ya-Sin',
      timestamp: Date.now(),
    };

    saveLastReadPosition(pos);
    const saved = getLastReadPosition();
    expect(saved).not.toBeNull();
    expect(saved?.surahNumber).toBe(36);
    expect(saved?.surahName).toBe('Ya-Sin');
  });

  it('handles offline fallback when fetching surah details', async () => {
    const detail = await fetchSurahDetail(1);
    expect(detail.number).toBe(1);
    expect(detail.englishName).toBe('Al-Fatihah');
    expect(detail.ayahs.length).toBeGreaterThan(0);
  });

  it('searches Quran local fallback gracefully', async () => {
    const results = await searchQuran('fatihah');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].surahName).toBe('Al-Fatihah');
  });
});
