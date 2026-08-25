import { describe, test, expect } from 'vitest';
import {
  validateAndMapNamazResponse,
  getNextPrayer,
  fetchNamazTimingsByCity,
  fetchNamazTimingsByCoords,
  type NamazTimings,
} from '../namazTimings';

describe('namazTimings API mapping and validation', () => {
  test('maps valid AlAdhan API response structure correctly', () => {
    const rawApiResponse = {
      code: 200,
      status: 'OK',
      data: {
        timings: {
          Fajr: '05:12',
          Sunrise: '06:30',
          Dhuhr: '12:15',
          Asr: '15:30',
          Sunset: '18:00',
          Maghrib: '18:00',
          Isha: '19:15',
        },
        date: {
          readable: '25 Aug 2026',
          gregorian: { date: '25-08-2026' },
          hijri: {
            date: '12-03-1448',
            month: { en: 'Rabi al-Awwal' },
            year: '1448',
          },
        },
        meta: {
          timezone: 'Asia/Karachi',
          method: {
            name: 'University of Islamic Sciences, Karachi',
          },
        },
      },
    };

    const mapped = validateAndMapNamazResponse(rawApiResponse);

    expect(mapped.Fajr).toBe('05:12');
    expect(mapped.Sunrise).toBe('06:30');
    expect(mapped.Dhuhr).toBe('12:15');
    expect(mapped.Asr).toBe('15:30');
    expect(mapped.Maghrib).toBe('18:00');
    expect(mapped.Isha).toBe('19:15');
    expect(mapped.timezone).toBe('Asia/Karachi');
    expect(mapped.date.readable).toBe('25 Aug 2026');
    expect(mapped.date.hijri.month.en).toBe('Rabi al-Awwal');
    expect(mapped.meta.method.name).toBe('University of Islamic Sciences, Karachi');
  });

  test('fails safely on missing data object', () => {
    expect(() => validateAndMapNamazResponse(null)).toThrow(
      'Unable to calculate prayer times'
    );
    expect(() => validateAndMapNamazResponse({})).toThrow(
      'Unable to calculate prayer times'
    );
  });

  test('fails safely on missing timings object', () => {
    expect(() => validateAndMapNamazResponse({ data: {} })).toThrow(
      'Prayer time data is temporarily unavailable'
    );
  });

  test('fails safely when required prayer fields are missing or empty', () => {
    const incompleteTimings = {
      data: {
        timings: {
          Fajr: '05:12',
          Sunrise: '06:30',
          // Dhuhr missing
          Asr: '15:30',
          Maghrib: '18:00',
          Isha: '19:15',
        },
      },
    };
    expect(() => validateAndMapNamazResponse(incompleteTimings)).toThrow(
      'Prayer time data is temporarily unavailable'
    );
  });

  test('fails safely when timings contain null or whitespace-only prayer strings', () => {
    const invalidTimings = {
      data: {
        timings: {
          Fajr: '   ',
          Sunrise: '06:30',
          Dhuhr: '12:15',
          Asr: '15:30',
          Maghrib: '18:00',
          Isha: '19:15',
        },
      },
    };
    expect(() => validateAndMapNamazResponse(invalidTimings)).toThrow(
      'Prayer time data is temporarily unavailable'
    );
  });
});

describe('fetchNamazTimings input validation', () => {
  test('rejects empty or whitespace city or country', async () => {
    await expect(fetchNamazTimingsByCity('', 'Pakistan')).rejects.toThrow('Please enter both city and country.');
    await expect(fetchNamazTimingsByCity('Lahore', '   ')).rejects.toThrow('Please enter both city and country.');
  });

  test('rejects invalid latitude and longitude ranges', async () => {
    await expect(fetchNamazTimingsByCoords(100, 74)).rejects.toThrow('Please provide valid location coordinates');
    await expect(fetchNamazTimingsByCoords(31.5, -200)).rejects.toThrow('Please provide valid location coordinates');
    await expect(fetchNamazTimingsByCoords(NaN, 74)).rejects.toThrow('Please provide valid location coordinates');
  });
});

describe('getNextPrayer robustness', () => {
  const sampleTimings: NamazTimings = {
    Fajr: '05:00',
    Sunrise: '06:30',
    Dhuhr: '12:30',
    Asr: '16:00',
    Maghrib: '18:30',
    Isha: '20:00',
    timezone: 'UTC',
    date: {
      readable: '25 Aug 2026',
      gregorian: { date: '25-08-2026' },
      hijri: { date: '12-03-1448', month: { en: 'Rabi' }, year: '1448' },
    },
    meta: { method: { name: 'Karachi' } },
  };

  test('calculates next prayer for valid times', () => {
    const result = getNextPrayer(sampleTimings);
    expect(result).not.toBeNull();
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('time');
  });

  test('handles midnight boundary after all prayers have passed', () => {
    const lateNightTimings: NamazTimings = {
      ...sampleTimings,
      Fajr: '00:01',
      Sunrise: '00:02',
      Dhuhr: '00:03',
      Asr: '00:04',
      Maghrib: '00:05',
      Isha: '00:06',
    };
    const result = getNextPrayer(lateNightTimings);
    expect(result).toEqual({ name: 'Fajr (Tomorrow)', time: '00:01' });
  });

  test('handles missing or malformed prayer time strings without throwing', () => {
    const malformedTimings = {
      ...sampleTimings,
      Dhuhr: 'invalid-time',
      Asr: '',
      Maghrib: null as any,
    };

    expect(() => getNextPrayer(malformedTimings)).not.toThrow();
  });

  test('handles null or undefined timings object without throwing', () => {
    expect(getNextPrayer(null)).toBeNull();
    expect(getNextPrayer(undefined)).toBeNull();
    expect(getNextPrayer({} as any)).toBeNull();
  });

  test('REGRESSION TEST: Old unmapped API structure passing undefined timings does not cause TypeError split crash', () => {
    // Before the fix, fetchNamazTimingsByCity returned raw `data.data`.
    // In raw AlAdhan, `data.data` had `timings`, so `data.data.Fajr` was undefined.
    // Passing that unmapped structure into `getNextPrayer` resulted in `timings.Fajr` being undefined,
    // causing `prayer.time.split(':')` -> `TypeError: Cannot read properties of undefined (reading 'split')`.

    const unmappedOldRawData: any = {
      timings: { Fajr: '05:00', Dhuhr: '12:00' },
      // Fajr, Sunrise, Dhuhr etc are NOT directly on top level of this object!
    };

    // Before fix: getNextPrayer(unmappedOldRawData) crashed with TypeError: Cannot read properties of undefined (reading 'split')
    // After fix: getNextPrayer safely handles undefined prayer properties without throwing any TypeError!
    expect(() => getNextPrayer(unmappedOldRawData)).not.toThrow();
    const result = getNextPrayer(unmappedOldRawData);
    // Should safely return null or handle gracefully without throwing TypeError
    expect(result === null || typeof result === 'object').toBe(true);
  });
});
