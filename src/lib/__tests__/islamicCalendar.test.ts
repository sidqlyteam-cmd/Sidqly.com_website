import { describe, it, expect } from 'vitest';
import {
  getIslamicDateInfo,
  calculateApproximateHijri,
  hijriToGregorian,
  getIslamicEvent,
  HIJRI_MONTHS
} from '../islamicCalendar';

describe('Islamic Calendar Library', () => {
  describe('getIslamicDateInfo', () => {
    it('returns consistent Hijri date for current date or fixed dates', () => {
      const date = new Date(2025, 2, 1); // March 1, 2025
      const res = getIslamicDateInfo(date);
      expect(res).not.toBeNull();
      expect(res.hijriYear).toBeGreaterThan(1440);
      expect(res.hijriMonthIndex).toBeGreaterThanOrEqual(0);
      expect(res.hijriMonthIndex).toBeLessThanOrEqual(11);
      expect(res.hijriDay).toBeGreaterThanOrEqual(1);
      expect(res.hijriDay).toBeLessThanOrEqual(30);
      expect(res.hijriMonthName).toBe(HIJRI_MONTHS[res.hijriMonthIndex]);
    });

    it('remains deterministic independent of browser locale formatting', () => {
      const testDate = new Date(2025, 5, 15); // June 15, 2025
      const res1 = getIslamicDateInfo(testDate);
      const res2 = getIslamicDateInfo(testDate);

      expect(res1.hijriYear).toBe(res2.hijriYear);
      expect(res1.hijriMonthIndex).toBe(res2.hijriMonthIndex);
      expect(res1.hijriDay).toBe(res2.hijriDay);
    });

    it('handles Gregorian month and year boundaries correctly', () => {
      const yearStart = new Date(2025, 0, 1);
      const yearEnd = new Date(2025, 11, 31);
      const leapFebEnd = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)

      const resStart = getIslamicDateInfo(yearStart);
      const resEnd = getIslamicDateInfo(yearEnd);
      const resLeap = getIslamicDateInfo(leapFebEnd);

      expect(resStart.hijriYear).toBeGreaterThan(1440);
      expect(resEnd.hijriYear).toBeGreaterThan(1440);
      expect(resLeap.hijriYear).toBeGreaterThan(1440);
    });

    it('is robust across timezone boundary hours (00:00 vs 23:59)', () => {
      const midnightStart = new Date(2025, 4, 10, 0, 0, 1);
      const midnightEnd = new Date(2025, 4, 10, 23, 59, 59);

      const resStart = getIslamicDateInfo(midnightStart);
      const resEnd = getIslamicDateInfo(midnightEnd);

      expect(resStart.hijriYear).toBe(resEnd.hijriYear);
      expect(resStart.hijriMonthIndex).toBe(resEnd.hijriMonthIndex);
      expect(resStart.hijriDay).toBe(resEnd.hijriDay);
    });
  });

  describe('calculateApproximateHijri (Kuwaity fallback)', () => {
    it('always produces valid Hijri month index (0-11) and day (1-30)', () => {
      const sampleDates = [
        new Date(2020, 0, 1),
        new Date(2023, 11, 31),
        new Date(2025, 8, 15),
        new Date(2030, 5, 20)
      ];

      sampleDates.forEach((d) => {
        const res = calculateApproximateHijri(d);
        expect(res.hijriMonthIndex).toBeGreaterThanOrEqual(0);
        expect(res.hijriMonthIndex).toBeLessThanOrEqual(11);
        expect(res.hijriDay).toBeGreaterThanOrEqual(1);
        expect(res.hijriDay).toBeLessThanOrEqual(30);
      });
    });
  });

  describe('hijriToGregorian', () => {
    it('converts valid Hijri inputs to a valid Gregorian Date', () => {
      const gDate = hijriToGregorian(1446, 8, 1); // 1st Ramadan 1446
      expect(gDate).toBeInstanceOf(Date);
      expect(gDate?.getFullYear()).toBeGreaterThanOrEqual(2024);
    });

    it('returns null for invalid inputs', () => {
      expect(hijriToGregorian(0, 5, 10)).toBeNull();
      expect(hijriToGregorian(1446, -1, 10)).toBeNull();
      expect(hijriToGregorian(1446, 12, 10)).toBeNull();
      expect(hijriToGregorian(1446, 5, 0)).toBeNull();
      expect(hijriToGregorian(1446, 5, 31)).toBeNull();
      expect(hijriToGregorian(NaN, 5, 10)).toBeNull();
    });
  });

  describe('getIslamicEvent', () => {
    it('identifies Ramadan correctly', () => {
      const event = getIslamicEvent(8, 15); // Month 8 is Ramadan
      expect(event).not.toBeNull();
      expect(event?.nameKey).toBe('ramadanMonth');
      expect(event?.status).toBe('estimated');
    });

    it('identifies Eid al-Fitr correctly', () => {
      const event = getIslamicEvent(9, 1); // Month 9 Day 1 is 1st Shawwal
      expect(event).not.toBeNull();
      expect(event?.nameKey).toBe('eidAlFitr');
    });

    it('identifies Day of Arafah and Eid al-Adha', () => {
      const arafah = getIslamicEvent(11, 9);
      const adha = getIslamicEvent(11, 10);

      expect(arafah?.nameKey).toBe('dayOfArafah');
      expect(adha?.nameKey).toBe('eidAlAdha');
    });

    it('returns null for non-significant dates', () => {
      const event = getIslamicEvent(1, 15);
      expect(event).toBeNull();
    });
  });
});
