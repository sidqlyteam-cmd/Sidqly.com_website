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

export async function fetchNamazTimingsByCity(city: string, country: string, method: number = 1): Promise<NamazTimings> {
  const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`);
  if (!res.ok) {
    throw new Error('Failed to fetch timings');
  }
  const data = await res.json();
  return data.data;
}

export async function fetchNamazTimingsByCoords(lat: number, lng: number, method: number = 1): Promise<NamazTimings> {
  const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=${method}`);
  if (!res.ok) {
    throw new Error('Failed to fetch timings');
  }
  const data = await res.json();
  return data.data;
}

export function getNextPrayer(timings: NamazTimings): { name: string; time: string } | null {
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
    const [hours, mins] = prayer.time.split(':').map(Number);
    if (hours === undefined || mins === undefined) continue;
    const prayerMinutes = hours * 60 + mins;
    if (prayerMinutes > currentMinutes) {
      return prayer;
    }
  }

  // If all prayers today have passed, the next one is Fajr tomorrow
  return { name: 'Fajr (Tomorrow)', time: prayers[0].time };
}
