export type PrayerName = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
export type PrayerStatus = 'completed' | 'missed' | 'qaza' | 'none';

export interface DailyPrayerRecord {
  date: string; // YYYY-MM-DD
  prayers: Record<PrayerName, PrayerStatus>;
}

export interface QazaCounter {
  fajr: number;
  dhuhr: number;
  asr: number;
  maghrib: number;
  isha: number;
}

export interface SalahTrackerState {
  history: Record<string, Record<PrayerName, PrayerStatus>>; // date -> prayer statuses
  qaza: QazaCounter;
}

const TRACKER_STORAGE_KEY = 'sidqly_salah_tracker_data';

export const PRAYER_NAMES: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

/**
 * Format a Date object to YYYY-MM-DD string.
 */
export function formatDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Get initial empty state.
 */
export function getInitialState(): SalahTrackerState {
  return {
    history: {},
    qaza: {
      fajr: 0,
      dhuhr: 0,
      asr: 0,
      maghrib: 0,
      isha: 0,
    },
  };
}

/**
 * Safely load and validate Salah Tracker state from LocalStorage.
 */
export function loadSalahTrackerState(): SalahTrackerState {
  try {
    const raw = localStorage.getItem(TRACKER_STORAGE_KEY);
    if (!raw) return getInitialState();

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return getInitialState();
    }

    const state: SalahTrackerState = getInitialState();

    // Validate and load qaza
    if (parsed.qaza && typeof parsed.qaza === 'object') {
      PRAYER_NAMES.forEach((p) => {
        const val = parsed.qaza[p];
        state.qaza[p] = typeof val === 'number' && val >= 0 ? Math.floor(val) : 0;
      });
    }

    // Validate and load history
    if (parsed.history && typeof parsed.history === 'object') {
      Object.keys(parsed.history).forEach((dateKey) => {
        const dayRecord = parsed.history[dateKey];
        if (dayRecord && typeof dayRecord === 'object') {
          const cleanDay: Record<PrayerName, PrayerStatus> = {
            fajr: 'none',
            dhuhr: 'none',
            asr: 'none',
            maghrib: 'none',
            isha: 'none',
          };
          PRAYER_NAMES.forEach((p) => {
            const st = dayRecord[p];
            if (st === 'completed' || st === 'missed' || st === 'qaza' || st === 'none') {
              cleanDay[p] = st;
            }
          });
          state.history[dateKey] = cleanDay;
        }
      });
    }

    return state;
  } catch (e) {
    return getInitialState();
  }
}

/**
 * Save state to LocalStorage safely.
 */
export function saveSalahTrackerState(state: SalahTrackerState): void {
  try {
    localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // ignore quota/storage errors
  }
}

/**
 * Update a specific prayer status for a date.
 */
export function updatePrayerStatus(
  state: SalahTrackerState,
  dateKey: string,
  prayer: PrayerName,
  status: PrayerStatus
): SalahTrackerState {
  const currentDay = state.history[dateKey] || {
    fajr: 'none',
    dhuhr: 'none',
    asr: 'none',
    maghrib: 'none',
    isha: 'none',
  };

  const newState: SalahTrackerState = {
    ...state,
    history: {
      ...state.history,
      [dateKey]: {
        ...currentDay,
        [prayer]: status,
      },
    },
  };

  saveSalahTrackerState(newState);
  return newState;
}

/**
 * Increment or decrement Qaza counter safely (non-negative).
 */
export function updateQazaCount(
  state: SalahTrackerState,
  prayer: PrayerName,
  delta: number
): SalahTrackerState {
  const current = state.qaza[prayer] || 0;
  const updated = Math.max(0, current + delta);

  const newState: SalahTrackerState = {
    ...state,
    qaza: {
      ...state.qaza,
      [prayer]: updated,
    },
  };

  saveSalahTrackerState(newState);
  return newState;
}

/**
 * Calculate completion metrics for a date.
 */
export function getDailyMetrics(
  state: SalahTrackerState,
  dateKey: string
): { completed: number; missed: number; qaza: number; total: number; percentage: number } {
  const day = state.history[dateKey] || {
    fajr: 'none',
    dhuhr: 'none',
    asr: 'none',
    maghrib: 'none',
    isha: 'none',
  };

  let completed = 0;
  let missed = 0;
  let qaza = 0;

  PRAYER_NAMES.forEach((p) => {
    const st = day[p];
    if (st === 'completed') completed++;
    else if (st === 'missed') missed++;
    else if (st === 'qaza') qaza++;
  });

  const percentage = Math.round((completed / 5) * 100);

  return {
    completed,
    missed,
    qaza,
    total: 5,
    percentage,
  };
}

/**
 * Get last 7 days history summary.
 */
export function getWeeklySummary(
  state: SalahTrackerState
): Array<{ dateKey: string; label: string; completed: number; percentage: number }> {
  const summary = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateKey = formatDateKey(d);
    const metrics = getDailyMetrics(state, dateKey);
    const label = d.toLocaleDateString('en-US', { weekday: 'short' });

    summary.push({
      dateKey,
      label,
      completed: metrics.completed,
      percentage: metrics.percentage,
    });
  }

  return summary;
}
