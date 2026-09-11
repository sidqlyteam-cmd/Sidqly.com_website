import { SURAHS_LIST, type SurahMeta } from '../data/quranSurahsData';

export interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  translation: string;
  juz?: number;
  page?: number;
}

export interface SurahDetail extends SurahMeta {
  ayahs: Ayah[];
}

export interface QuranBookmark {
  surahNumber: number;
  ayahNumberInSurah: number;
  surahName: string;
  textSnippet: string;
  timestamp: number;
}

export interface LastReadPosition {
  surahNumber: number;
  ayahNumberInSurah: number;
  surahName: string;
  timestamp: number;
}

const BOOKMARKS_KEY = 'sidqly_quran_bookmarks';
const LAST_READ_KEY = 'sidqly_quran_last_read';

/**
 * Fetch Surah details containing Arabic text and translation.
 */
export async function fetchSurahDetail(surahNumber: number): Promise<SurahDetail> {
  const meta = SURAHS_LIST.find((s) => s.number === surahNumber) || SURAHS_LIST[0];

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.sahih`);
    if (!res.ok) {
      throw new Error(`Failed to fetch Surah ${surahNumber}: HTTP status ${res.status}`);
    }
    const json = await res.json();
    if (json.code === 200 && Array.isArray(json.data) && json.data.length >= 2) {
      const arabicEd = json.data[0];
      const englishEd = json.data[1];

      const ayahs: Ayah[] = arabicEd.ayahs.map((a: any, idx: number) => {
        const transAyah = englishEd.ayahs[idx];
        return {
          number: a.number,
          numberInSurah: a.numberInSurah,
          text: a.text,
          translation: transAyah ? transAyah.text : '',
          juz: a.juz,
          page: a.page,
        };
      });

      return {
        ...meta,
        ayahs,
      };
    }
    throw new Error('Invalid Quran API response structure');
  } catch (err) {
    // Return fallback structure if API is down or offline
    return generateFallbackSurahDetail(meta);
  }
}

/**
 * Fallback generator for Surahs when network requests fail.
 */
function generateFallbackSurahDetail(meta: SurahMeta): SurahDetail {
  const ayahs: Ayah[] = [];
  // Basic fallback ayahs for offline support
  for (let i = 1; i <= meta.numberOfAyahs; i++) {
    ayahs.push({
      number: i,
      numberInSurah: i,
      text: i === 1 && meta.number !== 9 ? 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' : `آية رقم ${i} من ${meta.name}`,
      translation: `Ayah ${i} of Surah ${meta.englishName}. (Translation offline view)`,
    });
  }
  return {
    ...meta,
    ayahs,
  };
}

/**
 * Search Ayahs across Quran translations.
 */
export async function searchQuran(query: string): Promise<Array<{ surahNumber: number; surahName: string; ayahNumberInSurah: number; text: string; translation: string }>> {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.trim().toLowerCase();

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(cleanQuery)}/all/en.sahih`);
    if (res.ok) {
      const json = await res.json();
      if (json.code === 200 && json.data && Array.isArray(json.data.matches)) {
        return json.data.matches.map((m: any) => ({
          surahNumber: m.surah.number,
          surahName: m.surah.englishName,
          ayahNumberInSurah: m.numberInSurah,
          text: m.text,
          translation: m.text,
        }));
      }
    }
  } catch (e) {
    // API search failed, proceed to local fallback
  }

  // Fallback local search over common keywords or surah list
  const matches: Array<{ surahNumber: number; surahName: string; ayahNumberInSurah: number; text: string; translation: string }> = [];
  for (const surah of SURAHS_LIST) {
    if (surah.englishName.toLowerCase().includes(cleanQuery) || surah.englishNameTranslation.toLowerCase().includes(cleanQuery)) {
      matches.push({
        surahNumber: surah.number,
        surahName: surah.englishName,
        ayahNumberInSurah: 1,
        text: surah.name,
        translation: `${surah.englishName} - ${surah.englishNameTranslation} (${surah.numberOfAyahs} Ayahs)`,
      });
    }
  }
  return matches;
}

/**
 * LocalStorage bookmark helpers.
 */
export function getQuranBookmarks(): QuranBookmark[] {
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function saveQuranBookmark(bookmark: QuranBookmark): QuranBookmark[] {
  try {
    const existing = getQuranBookmarks();
    const filtered = existing.filter(
      (b) => !(b.surahNumber === bookmark.surahNumber && b.ayahNumberInSurah === bookmark.ayahNumberInSurah)
    );
    const updated = [bookmark, ...filtered];
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}

export function removeQuranBookmark(surahNumber: number, ayahNumberInSurah: number): QuranBookmark[] {
  try {
    const existing = getQuranBookmarks();
    const updated = existing.filter((b) => !(b.surahNumber === surahNumber && b.ayahNumberInSurah === ayahNumberInSurah));
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}

export function isAyahBookmarked(surahNumber: number, ayahNumberInSurah: number): boolean {
  const bookmarks = getQuranBookmarks();
  return bookmarks.some((b) => b.surahNumber === surahNumber && b.ayahNumberInSurah === ayahNumberInSurah);
}

/**
 * LocalStorage last read position helpers.
 */
export function getLastReadPosition(): LastReadPosition | null {
  try {
    const data = localStorage.getItem(LAST_READ_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    if (parsed && typeof parsed.surahNumber === 'number' && typeof parsed.ayahNumberInSurah === 'number') {
      return parsed;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export function saveLastReadPosition(pos: LastReadPosition): void {
  try {
    localStorage.setItem(LAST_READ_KEY, JSON.stringify(pos));
  } catch (e) {
    // ignore
  }
}
