import { describe, it, expect } from 'vitest';
import {
  getRamadanSeasonInfo,
  getEidQurbaniSeasonInfo,
  getHajjSeasonInfo,
  getHajjPreparationTimeline,
} from '../seasonalDates';

import {
  getEidFitrSeasonInfo,
  getEidSeasonInfo,
} from '../seasonalDates';

describe('Seasonal Dates Utility Engine', () => {
  describe('Ramadan Date Logic', () => {
    it('calculates countdown before Ramadan', () => {
      // Jan 15, 2025 -> Ramadan 1446 is March 1, 2025
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const info = getRamadanSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.hijriYear).toBe(1446);
      expect(info.daysRemaining).toBeGreaterThan(0);
      expect(isNaN(info.daysRemaining)).toBe(false);
    });

    it('identifies active Ramadan during Ramadan', () => {
      // March 10, 2025 is during Ramadan 1446 (March 1 - March 30)
      const refDate = new Date(2025, 2, 10, 12, 0, 0);
      const info = getRamadanSeasonInfo(refDate, false);
      expect(info.phase).toBe('during');
      expect(info.currentSeasonDay).toBeGreaterThanOrEqual(1);
      expect(info.currentSeasonDay).toBeLessThanOrEqual(30);
      expect(info.daysRemaining).toBe(0);
    });

    it('rolls over to next year after Ramadan', () => {
      // April 15, 2025 -> After Ramadan 1446, should target Ramadan 1447 (Feb 18, 2026)
      const refDate = new Date(2025, 3, 15, 12, 0, 0);
      const info = getRamadanSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.hijriYear).toBe(1447);
      expect(info.daysRemaining).toBeGreaterThan(0);
      expect(isNaN(info.daysRemaining)).toBe(false);
    });

    it('handles midnight timezone boundaries cleanly', () => {
      const midnightUTC = new Date(Date.UTC(2025, 2, 1, 0, 0, 0));
      const info = getRamadanSeasonInfo(midnightUTC, false);
      expect(isNaN(info.daysRemaining)).toBe(false);
      expect(info.targetDate.getHours()).toBe(12);
    });

    it('handles officially confirmed state flag', () => {
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const info = getRamadanSeasonInfo(refDate, true);
      expect(info.isConfirmed).toBe(true);
      expect(info.status).toBe('officially_confirmed');
    });
  });

  describe('Eid al-Fitr & Eid al-Adha Date Logic', () => {
    it('calculates countdown before Eid al-Fitr', () => {
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const info = getEidFitrSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.daysRemaining).toBeGreaterThan(0);
      expect(info.id).toBe('eid_al_fitr');
    });

    it('identifies active Eid al-Fitr period', () => {
      // March 31, 2025 is 1st Shawwal 1446
      const refDate = new Date(2025, 2, 31, 12, 0, 0);
      const info = getEidFitrSeasonInfo(refDate, false);
      expect(info.phase).toBe('during');
      expect(info.daysRemaining).toBe(0);
    });

    it('calculates unified getEidSeasonInfo for fitr and adha', () => {
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const fitr = getEidSeasonInfo('fitr', refDate);
      const adha = getEidSeasonInfo('adha', refDate);
      expect(fitr.id).toBe('eid_al_fitr');
      expect(adha.id).toBe('eid_al_adha');
    });

    it('calculates countdown before Dhul Hijjah / Eid al-Adha', () => {
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const info = getEidQurbaniSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.daysRemaining).toBeGreaterThan(0);
    });

    it('identifies active Eid al-Adha period', () => {
      // June 7, 2025 is Eid al-Adha 1446
      const refDate = new Date(2025, 5, 7, 12, 0, 0);
      const info = getEidQurbaniSeasonInfo(refDate, false);
      expect(info.phase).toBe('during');
      expect(info.daysRemaining).toBe(0);
    });

    it('rolls over to next season after Eid', () => {
      // July 15, 2025 -> After Eid 1446, targets Eid 1447
      const refDate = new Date(2025, 6, 15, 12, 0, 0);
      const info = getEidQurbaniSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.hijriYear).toBe(1447);
    });
  });

  describe('Hajj Countdown & Preparation Timeline', () => {
    it('calculates countdown before Hajj', () => {
      const refDate = new Date(2025, 0, 15, 12, 0, 0);
      const info = getHajjSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.daysRemaining).toBeGreaterThan(0);
    });

    it('identifies active Hajj season', () => {
      // June 5, 2025 is during Hajj 1446 (June 4 - June 9)
      const refDate = new Date(2025, 5, 5, 12, 0, 0);
      const info = getHajjSeasonInfo(refDate, false);
      expect(info.phase).toBe('during');
    });

    it('calculates preparation timeline correctly', () => {
      const targetDate = new Date(2025, 5, 4, 12, 0, 0); // June 4, 2025
      const timeline = getHajjPreparationTimeline(targetDate);
      expect(timeline.length).toBe(4);
      expect(timeline[0].daysBefore).toBe(90);
      expect(timeline[1].daysBefore).toBe(60);
      expect(timeline[2].daysBefore).toBe(30);
      expect(timeline[3].daysBefore).toBe(10);
      expect(timeline[0].targetDate.getTime()).toBeLessThan(timeline[3].targetDate.getTime());
    });

    it('handles year rollover gracefully after Hajj season ends', () => {
      // June 20, 2025 -> After Hajj 1446, target Hajj 1447
      const refDate = new Date(2025, 5, 20, 12, 0, 0);
      const info = getHajjSeasonInfo(refDate, false);
      expect(info.phase).toBe('before');
      expect(info.hijriYear).toBe(1447);
      expect(info.daysRemaining).toBeGreaterThan(0);
    });
  });
});
