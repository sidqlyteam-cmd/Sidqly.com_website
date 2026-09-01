import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadSalahTrackerState,
  updatePrayerStatus,
  updateQazaCount,
  getDailyMetrics,
  getWeeklySummary,
  getInitialState,
  formatDateKey,
} from '../salahTracker';

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

describe('Salah Tracker utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads initial empty state when LocalStorage is empty', () => {
    const state = loadSalahTrackerState();
    expect(state.qaza.fajr).toBe(0);
    expect(state.history).toEqual({});
  });

  it('recovers gracefully from corrupted LocalStorage json', () => {
    localStorage.setItem('sidqly_salah_tracker_data', '{ corrupted json ...');
    const state = loadSalahTrackerState();
    expect(state).toEqual(getInitialState());
  });

  it('updates prayer status and recalculates daily metrics', () => {
    let state = loadSalahTrackerState();
    const today = formatDateKey();

    state = updatePrayerStatus(state, today, 'fajr', 'completed');
    state = updatePrayerStatus(state, today, 'dhuhr', 'completed');
    state = updatePrayerStatus(state, today, 'asr', 'missed');

    const metrics = getDailyMetrics(state, today);
    expect(metrics.completed).toBe(2);
    expect(metrics.missed).toBe(1);
    expect(metrics.percentage).toBe(40);
  });

  it('increments and decrements Qaza count without negative values', () => {
    let state = loadSalahTrackerState();

    state = updateQazaCount(state, 'fajr', 2);
    expect(state.qaza.fajr).toBe(2);

    state = updateQazaCount(state, 'fajr', -5);
    expect(state.qaza.fajr).toBe(0);
  });

  it('generates weekly summary array of 7 days', () => {
    const state = loadSalahTrackerState();
    const summary = getWeeklySummary(state);
    expect(summary.length).toBe(7);
  });
});
