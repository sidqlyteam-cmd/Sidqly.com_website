import { DUAS_DATA, type DuaItem, type DuaCategory } from '../data/duasData';

const FAVORITES_KEY = 'sidqly_dua_favorites';

/**
 * Get all available Duas.
 */
export function getDuas(category?: DuaCategory | 'all'): DuaItem[] {
  if (!category || category === 'all') {
    return DUAS_DATA;
  }
  return DUAS_DATA.filter((d) => d.category === category);
}

/**
 * Search Duas by title, translation, or category.
 */
export function searchDuas(query: string, category?: DuaCategory | 'all'): DuaItem[] {
  const base = getDuas(category);
  if (!query || query.trim().length === 0) {
    return base;
  }

  const q = query.trim().toLowerCase();
  return base.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.translation.toLowerCase().includes(q) ||
      d.transliteration.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
  );
}

/**
 * Deterministically pick a Daily Dua based on current calendar day.
 */
export function getDailyDua(): DuaItem {
  const today = new Date();
  const dayOfYear = Math.floor(
    (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      Date.UTC(today.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000
  );
  const index = dayOfYear % DUAS_DATA.length;
  return DUAS_DATA[index] || DUAS_DATA[0];
}

/**
 * LocalStorage favorites management.
 */
export function getFavoriteDuaIds(): string[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function toggleFavoriteDua(id: string): string[] {
  try {
    const current = getFavoriteDuaIds();
    let updated: string[];
    if (current.includes(id)) {
      updated = current.filter((favId) => favId !== id);
    } else {
      updated = [...current, id];
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}

export function isDuaFavorite(id: string): boolean {
  return getFavoriteDuaIds().includes(id);
}
