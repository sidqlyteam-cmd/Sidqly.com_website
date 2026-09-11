import { describe, it, expect, beforeEach } from 'vitest';
import {
  getDuas,
  searchDuas,
  getDailyDua,
  getFavoriteDuaIds,
  toggleFavoriteDua,
  isDuaFavorite,
} from '../duas';
import { DUAS_DATA } from '../../data/duasData';

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

describe('Duas & Azkar utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('retrieves all duas or by category', () => {
    const all = getDuas();
    expect(all.length).toBe(DUAS_DATA.length);

    const morning = getDuas('morning');
    expect(morning.every((d) => d.category === 'morning')).toBe(true);
  });

  it('searches duas correctly', () => {
    const results = searchDuas('Protection');
    expect(results.length).toBeGreaterThan(0);
  });

  it('returns a deterministic daily dua', () => {
    const daily1 = getDailyDua();
    const daily2 = getDailyDua();
    expect(daily1.id).toBe(daily2.id);
  });

  it('manages favorite duas in LocalStorage', () => {
    expect(getFavoriteDuaIds()).toEqual([]);
    expect(isDuaFavorite('m1')).toBe(false);

    toggleFavoriteDua('m1');
    expect(isDuaFavorite('m1')).toBe(true);
    expect(getFavoriteDuaIds()).toContain('m1');

    toggleFavoriteDua('m1');
    expect(isDuaFavorite('m1')).toBe(false);
  });
});
