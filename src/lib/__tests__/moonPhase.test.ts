import { describe, it, expect } from 'vitest';
import {
  getApproximateMoonPhase,
  MOON_PHASES,
  MOON_PHASE_KEYS
} from '../moonPhase';

describe('Moon Phase Library', () => {
  it('returns valid moon phase properties for the current date', () => {
    const res = getApproximateMoonPhase();
    expect(res).toHaveProperty('phaseKey');
    expect(res).toHaveProperty('phaseLabel');
    expect(res).toHaveProperty('ageDays');
    expect(res).toHaveProperty('illumination');
    expect(res).toHaveProperty('calculatedAtUtc');

    expect(MOON_PHASE_KEYS).toContain(res.phaseKey);
    expect(MOON_PHASES).toContain(res.phaseLabel);
  });

  it('guarantees illumination is strictly between 0 and 1 across multiple cycle dates', () => {
    const baseTime = Date.UTC(2025, 0, 1);
    const msPerDay = 1000 * 60 * 60 * 24;

    for (let i = 0; i < 100; i++) {
      const testDate = new Date(baseTime + i * msPerDay);
      const res = getApproximateMoonPhase(testDate);

      expect(res.illumination).toBeGreaterThanOrEqual(0);
      expect(res.illumination).toBeLessThanOrEqual(1);
      expect(res.ageDays).toBeGreaterThanOrEqual(0);
      expect(res.ageDays).toBeLessThan(30);
    }
  });

  it('correctly identifies New Moon around known epoch (Dec 12, 2023)', () => {
    const epochDate = new Date(Date.UTC(2023, 11, 12, 23, 32, 0));
    const res = getApproximateMoonPhase(epochDate);

    expect(res.phaseKey).toBe('newMoon');
    expect(res.phaseLabel).toBe('New Moon');
    expect(res.illumination).toBeLessThanOrEqual(0.05);
  });

  it('calculates next major moon phase correctly', () => {
    const epochDate = new Date(Date.UTC(2023, 11, 12, 23, 32, 0));
    const res = getApproximateMoonPhase(epochDate);

    expect(res.nextPhaseKey).toBe('firstQuarter');
    expect(res.nextPhaseDaysAway).toBeGreaterThan(0);
    expect(res.nextPhaseDaysAway).toBeLessThan(10);
  });

  it('produces deterministic output for identical timestamps', () => {
    const d1 = new Date(2025, 4, 15, 12, 0, 0);
    const d2 = new Date(2025, 4, 15, 12, 0, 0);

    const res1 = getApproximateMoonPhase(d1);
    const res2 = getApproximateMoonPhase(d2);

    expect(res1.phaseKey).toBe(res2.phaseKey);
    expect(res1.illumination).toBe(res2.illumination);
    expect(res1.ageDays).toBe(res2.ageDays);
  });
});
