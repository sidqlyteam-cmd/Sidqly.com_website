export interface IslamicDateInfo {
  gregorianDate: Date;
  hijriYear: number;
  hijriMonthIndex: number; // 0-11
  hijriMonthName: string;
  hijriDay: number;
  weekday: string;
}

export interface IslamicImportantEvent {
  hijriMonthIndex: number;
  hijriDay: number;
  nameKey: string;
  defaultTitle: string;
  status: 'estimated' | 'officially_confirmed';
  gregorianEstimate?: Date;
}

export const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
  'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
  'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah'
];

/**
 * Gets Hijri date information deterministically for a given Gregorian date.
 * Uses a fixed Latin locale with Islamic calendar part parsing or falls back to Kuwaity algorithm.
 */
export const getIslamicDateInfo = (date: Date = new Date()): IslamicDateInfo => {
  // Normalize date to 12:00 local time to avoid timezone boundary shifts
  const cleanDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);

  try {
    // Force Latin numbers (-nu-latn) and English day names for deterministic numeric extraction
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-nu-latn', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long'
    });

    const parts = formatter.formatToParts(cleanDate);

    let year = NaN;
    let monthIndex = NaN;
    let day = NaN;
    let weekday = '';

    parts.forEach(part => {
      if (part.type === 'year') {
        year = parseInt(part.value.replace(/[^0-9]/g, ''), 10);
      }
      if (part.type === 'month') {
        const parsedMonth = parseInt(part.value.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(parsedMonth)) {
          monthIndex = parsedMonth - 1;
        }
      }
      if (part.type === 'day') {
        day = parseInt(part.value.replace(/[^0-9]/g, ''), 10);
      }
      if (part.type === 'weekday') {
        weekday = part.value;
      }
    });

    if (isNaN(year) || isNaN(monthIndex) || isNaN(day) || monthIndex < 0 || monthIndex > 11 || day < 1 || day > 30) {
      return calculateApproximateHijri(cleanDate);
    }

    return {
      gregorianDate: cleanDate,
      hijriYear: year,
      hijriMonthIndex: monthIndex,
      hijriMonthName: HIJRI_MONTHS[monthIndex],
      hijriDay: day,
      weekday: weekday || cleanDate.toLocaleDateString('en-US', { weekday: 'long' })
    };
  } catch {
    return calculateApproximateHijri(cleanDate);
  }
};

/**
 * Kuwaity algorithm (Tabular Islamic Calendar approximation).
 * Used as a deterministic fallback independent of browser Intl implementation.
 */
export function calculateApproximateHijri(date: Date): IslamicDateInfo {
  let day = date.getDate();
  let month = date.getMonth(); // 0-11
  let year = date.getFullYear();

  let m = month + 1;
  let y = year;

  if (m < 3) {
    y -= 1;
    m += 12;
  }

  let a = Math.floor(y / 100);
  let b = 2 - a + Math.floor(a / 4);

  if (y < 1583) {
    b = 0;
  }
  if (y === 1582) {
    if (m > 10) b = -10;
    if (m === 10) {
      b = 0;
      if (day > 4) b = -10;
    }
  }

  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

  b = 0;
  if (jd > 2299160) {
    a = Math.floor((jd - 1867216.25) / 36524.25);
    b = 1 + a - Math.floor(a / 4);
  }
  const bb = jd + b + 1524;
  let cc = Math.floor((bb - 122.1) / 365.25);
  const dd = Math.floor(365.25 * cc);
  const ee = Math.floor((bb - dd) / 30.6001);
  day = (bb - dd) - Math.floor(30.6001 * ee);
  month = ee - 1;
  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;

  const iyear = 10631.0 / 30.0;
  const epochastro = 1948084;
  const shift1 = 8.01 / 60.0;

  let z = jd - epochastro;
  const cyc = Math.floor(z / 10631);
  z = z - 10631 * cyc;
  const j = Math.floor((z - shift1) / iyear);
  const iy = 30 * cyc + j;
  z = z - Math.floor(j * iyear + shift1);
  let im = Math.floor((z + 28.5001) / 29.5);

  if (im === 13) {
    im = 12;
  }
  const id = z - Math.floor(29.5001 * im - 29);

  const monthIdx = Math.max(0, Math.min(11, im - 1));

  return {
    gregorianDate: date,
    hijriYear: iy,
    hijriMonthIndex: monthIdx,
    hijriMonthName: HIJRI_MONTHS[monthIdx],
    hijriDay: Math.max(1, Math.min(30, id)),
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
  };
}

/**
 * Converts Hijri date (year, monthIndex 0-11, day 1-30) to Gregorian date estimate.
 */
export function hijriToGregorian(hijriYear: number, hijriMonthIndex: number, hijriDay: number): Date | null {
  if (
    typeof hijriYear !== 'number' ||
    typeof hijriMonthIndex !== 'number' ||
    typeof hijriDay !== 'number' ||
    isNaN(hijriYear) || isNaN(hijriMonthIndex) || isNaN(hijriDay) ||
    hijriMonthIndex < 0 || hijriMonthIndex > 11 ||
    hijriDay < 1 || hijriDay > 30 ||
    hijriYear < 1
  ) {
    return null;
  }

  const cyc = Math.floor((hijriYear - 1) / 30);
  const iyInCyc = (hijriYear - 1) % 30;
  const iyearDays = [
    0, 354, 709, 1063, 1417, 1772, 2126, 2481, 2835, 3189, 3544, 3898, 4252, 4607, 4961,
    5315, 5670, 6024, 6379, 6733, 7087, 7442, 7796, 8150, 8505, 8859, 9213, 9568, 9922, 10276
  ];

  let daysInYearBeforeMonth = 0;
  for (let m = 0; m < hijriMonthIndex; m++) {
    daysInYearBeforeMonth += (m % 2 === 0) ? 30 : 29;
  }

  const jd = 1948439.5 + cyc * 10631 + iyearDays[iyInCyc] + daysInYearBeforeMonth + hijriDay - 1;

  const z = Math.floor(jd + 0.5);
  const a = Math.floor((z - 1867216.25) / 36524.25);
  const aa = z + 1 + a - Math.floor(a / 4);
  const b = aa + 1524;
  const c = Math.floor((b - 122.1) / 365.25);
  const d = Math.floor(365.25 * c);
  const e = Math.floor((b - d) / 30.6001);
  const day = Math.floor(b - d - Math.floor(30.6001 * e));
  const month = (e < 14) ? e - 1 : e - 13;
  const year = (month > 2) ? c - 4716 : c - 4715;

  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

/**
 * Returns significant Islamic events for a given Hijri month and day.
 */
export const getIslamicEvent = (hijriMonthIndex: number, hijriDay: number): IslamicImportantEvent | null => {
  if (hijriMonthIndex === 0 && hijriDay === 1) {
    return {
      hijriMonthIndex: 0,
      hijriDay: 1,
      nameKey: 'islamicNewYear',
      defaultTitle: 'Islamic New Year (1st Muharram)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 0 && hijriDay === 10) {
    return {
      hijriMonthIndex: 0,
      hijriDay: 10,
      nameKey: 'dayOfAshura',
      defaultTitle: 'Day of Ashura (10th Muharram)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 2 && hijriDay === 12) {
    return {
      hijriMonthIndex: 2,
      hijriDay: 12,
      nameKey: 'mawlid',
      defaultTitle: 'Mawlid an-Nabi (12th Rabi al-Awwal)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 6 && hijriDay === 27) {
    return {
      hijriMonthIndex: 6,
      hijriDay: 27,
      nameKey: 'israMiraj',
      defaultTitle: 'Isra and Mi\'raj (27th Rajab)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 7 && hijriDay === 15) {
    return {
      hijriMonthIndex: 7,
      hijriDay: 15,
      nameKey: 'nisfuShaban',
      defaultTitle: 'Nisfu Sha\'ban (15th Sha\'ban)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 8 && hijriDay === 1) {
    return {
      hijriMonthIndex: 8,
      hijriDay: 1,
      nameKey: 'firstRamadan',
      defaultTitle: 'First Day of Ramadan',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 8) {
    return {
      hijriMonthIndex: 8,
      hijriDay,
      nameKey: 'ramadanMonth',
      defaultTitle: 'Ramadan (Month of Fasting)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 9 && hijriDay === 1) {
    return {
      hijriMonthIndex: 9,
      hijriDay: 1,
      nameKey: 'eidAlFitr',
      defaultTitle: 'Eid al-Fitr (1st Shawwal)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 11 && hijriDay === 9) {
    return {
      hijriMonthIndex: 11,
      hijriDay: 9,
      nameKey: 'dayOfArafah',
      defaultTitle: 'Day of Arafah (9th Dhul Hijjah)',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 11 && hijriDay >= 10 && hijriDay <= 12) {
    return {
      hijriMonthIndex: 11,
      hijriDay,
      nameKey: 'eidAlAdha',
      defaultTitle: 'Eid al-Adha / Days of Qurbani',
      status: 'estimated'
    };
  }
  if (hijriMonthIndex === 11 && hijriDay >= 1 && hijriDay <= 10) {
    return {
      hijriMonthIndex: 11,
      hijriDay,
      nameKey: 'daysOfDhulHijjah',
      defaultTitle: 'First 10 Days of Dhul Hijjah',
      status: 'estimated'
    };
  }
  return null;
};
