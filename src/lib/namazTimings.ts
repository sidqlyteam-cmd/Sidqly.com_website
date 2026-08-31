export interface NamazTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  timezone: string;
  date: {
    readable: string;
    gregorian: { date: string };
    hijri: { date: string; month: { en: string }; year: string };
  };
  meta: {
    method: {
      name: string;
    };
  };
}

export const CALCULATION_METHODS = [
  { id: 1, name: "University of Islamic Sciences, Karachi" },
  { id: 2, name: "Islamic Society of North America (ISNA)" },
  { id: 3, name: "Muslim World League" },
  { id: 4, name: "Umm Al-Qura University, Makkah" },
  { id: 5, name: "Egyptian General Authority of Truth" },
  { id: 7, name: "Institute of Geophysics, University of Tehran" },
  { id: 8, name: "Gulf Region" },
  { id: 9, name: "Kuwait" },
  { id: 10, name: "Qatar" },
  { id: 11, name: "Majlis Ugama Islam Singapura, Singapore" },
  { id: 12, name: "Union Organization islamic de France" },
  { id: 13, name: "Diyanet İşleri Başkanlığı, Turkey" },
  { id: 14, name: "Spiritual Administration of Muslims of Russia" }
];

/**
 * Validates and explicitly maps an API response (from AlAdhan or similar)
 * into the internal `NamazTimings` data structure.
 */
export function validateAndMapNamazResponse(apiData: unknown): NamazTimings {
  if (!apiData || typeof apiData !== 'object') {
    throw new Error('Unable to calculate prayer times for this location. Please check the city and country and try again.');
  }

  const payload = (apiData as Record<string, any>).data;
  if (!payload || typeof payload !== 'object') {
    throw new Error('Unable to calculate prayer times for this location. Please check the city and country and try again.');
  }

  const timings = payload.timings;
  if (!timings || typeof timings !== 'object') {
    throw new Error('Prayer time data is temporarily unavailable. Please try again.');
  }

  const requiredFields = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;
  for (const field of requiredFields) {
    const val = timings[field];
    if (typeof val !== 'string' || !val.trim()) {
      throw new Error('Prayer time data is temporarily unavailable. Please try again.');
    }
  }

  // Extract date structure safely
  const dateObj = payload.date || {};
  const gregorianObj = dateObj.gregorian || {};
  const hijriObj = dateObj.hijri || {};
  const hijriMonthObj = hijriObj.month || {};

  const readableDate = typeof dateObj.readable === 'string' && dateObj.readable ? dateObj.readable : 'Today';
  const gregorianDate = typeof gregorianObj.date === 'string' ? gregorianObj.date : '';
  const hijriDate = typeof hijriObj.date === 'string' ? hijriObj.date : '';
  const hijriMonthEn = typeof hijriMonthObj.en === 'string' ? hijriMonthObj.en : '';
  const hijriYear = typeof hijriObj.year === 'string' ? hijriObj.year : '';

  // Extract meta structure safely
  const metaObj = payload.meta || {};
  const methodObj = metaObj.method || {};
  const methodName = typeof methodObj.name === 'string' ? methodObj.name : 'Standard Method';

  // Timezone can be in meta.timezone or payload.timezone
  const timezoneStr = typeof metaObj.timezone === 'string'
    ? metaObj.timezone
    : (typeof payload.timezone === 'string' ? payload.timezone : 'UTC');

  return {
    Fajr: timings.Fajr.trim(),
    Sunrise: timings.Sunrise.trim(),
    Dhuhr: timings.Dhuhr.trim(),
    Asr: timings.Asr.trim(),
    Maghrib: timings.Maghrib.trim(),
    Isha: timings.Isha.trim(),
    timezone: timezoneStr,
    date: {
      readable: readableDate,
      gregorian: { date: gregorianDate },
      hijri: {
        date: hijriDate,
        month: { en: hijriMonthEn },
        year: hijriYear,
      },
    },
    meta: {
      method: {
        name: methodName,
      },
    },
  };
}

export async function fetchNamazTimingsByCity(city: string, country: string, method: number = 1): Promise<NamazTimings> {
  const trimmedCity = (city || '').trim();
  const trimmedCountry = (country || '').trim();

  if (!trimmedCity || !trimmedCountry) {
    throw new Error('Please enter both city and country.');
  }

  try {
    const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(trimmedCity)}&country=${encodeURIComponent(trimmedCountry)}&method=${method}`);
    if (!res.ok) {
      throw new Error('Unable to calculate prayer times for this location. Please check the city and country and try again.');
    }
    const data = await res.json();
    return validateAndMapNamazResponse(data);
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('Prayer time data is temporarily unavailable. Please try again.');
  }
}

/**
 * Attempts reverse geocoding for a given coordinate pair using a free client-side API.
 * Returns detected city and country names, or null if reverse geocoding is unavailable or fails.
 */
export async function reverseGeocodeCoords(lat: number, lng: number): Promise<{ city: string; country: string } | null> {
  if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return null;
  }

  try {
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || typeof data !== 'object') return null;

    const city = (data.city || data.locality || data.principalSubdivision || '').toString().trim();
    const country = (data.countryName || '').toString().trim();

    if (city || country) {
      return { city, country };
    }
    return null;
  } catch {
    return null;
  }
}

export async function fetchNamazTimingsByCoords(lat: number, lng: number, method: number = 1): Promise<NamazTimings> {
  if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error('Please provide valid location coordinates (Latitude -90 to 90, Longitude -180 to 180).');
  }

  try {
    const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=${method}`);
    if (!res.ok) {
      throw new Error('Unable to calculate prayer times for this location. Please check coordinates and try again.');
    }
    const data = await res.json();
    return validateAndMapNamazResponse(data);
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('Prayer time data is temporarily unavailable. Please try again.');
  }
}

export function getNextPrayer(timings: NamazTimings | null | undefined): { name: string; time: string } | null {
  if (!timings || typeof timings !== 'object') {
    return null;
  }

  const parseMinutes = (timeStr: unknown): number | null => {
    if (typeof timeStr !== 'string' || !timeStr.trim()) {
      return null;
    }
    const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})/);
    if (!match) return null;

    const hours = parseInt(match[1], 10);
    const mins = parseInt(match[2], 10);

    if (isNaN(hours) || isNaN(mins) || hours < 0 || hours > 23 || mins < 0 || mins > 59) {
      return null;
    }
    return hours * 60 + mins;
  };

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayers = [
    { name: 'Fajr', time: timings.Fajr },
    { name: 'Sunrise', time: timings.Sunrise },
    { name: 'Dhuhr', time: timings.Dhuhr },
    { name: 'Asr', time: timings.Asr },
    { name: 'Maghrib', time: timings.Maghrib },
    { name: 'Isha', time: timings.Isha }
  ];

  for (const prayer of prayers) {
    const prayerMinutes = parseMinutes(prayer.time);
    if (prayerMinutes === null) continue;
    if (prayerMinutes > currentMinutes) {
      return { name: prayer.name, time: prayer.time };
    }
  }

  // If all prayers today have passed, the next one is Fajr tomorrow
  const fajrTime = typeof timings.Fajr === 'string' && timings.Fajr.trim() ? timings.Fajr : undefined;
  if (fajrTime) {
    return { name: 'Fajr (Tomorrow)', time: fajrTime };
  }

  return null;
}
