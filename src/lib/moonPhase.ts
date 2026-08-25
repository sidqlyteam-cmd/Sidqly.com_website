export interface MoonPhaseResult {
  phaseKey: string;
  phaseLabel: string;
  ageDays: number;
  illumination: number; // 0 to 1 (0% to 100%)
  nextPhaseKey?: string;
  nextPhaseLabel?: string;
  nextPhaseDaysAway?: number;
  calculatedAtUtc: string;
}

export const MOON_PHASES = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent'
];

export const MOON_PHASE_KEYS = [
  'newMoon',
  'waxingCrescent',
  'firstQuarter',
  'waxingGibbous',
  'fullMoon',
  'waningGibbous',
  'lastQuarter',
  'waningCrescent'
];

/**
 * Calculates deterministic approximate moon phase based on synodic lunar cycle.
 * Known astronomical new moon epoch: Dec 12, 2023, 23:32 UTC.
 */
export const getApproximateMoonPhase = (date: Date = new Date()): MoonPhaseResult => {
  const targetTime = date.getTime();
  const knownNewMoon = Date.UTC(2023, 11, 12, 23, 32, 0);

  const lunarCycle = 29.53058867; // average synodic month length in days
  const msPerDay = 1000 * 60 * 60 * 24;

  const diffMs = targetTime - knownNewMoon;
  const diffDays = diffMs / msPerDay;

  // Calculate age within cycle [0, lunarCycle)
  let age = diffDays % lunarCycle;
  if (age < 0) {
    age += lunarCycle;
  }

  // Calculate illumination percentage safely bounded between 0 and 1
  // Using standard trigonometric approximation: 0.5 * (1 - cos(2 * pi * age / lunarCycle))
  const rawIllum = 0.5 * (1 - Math.cos((2 * Math.PI * age) / lunarCycle));
  const illumination = Math.max(0, Math.min(1, Math.round(rawIllum * 1000) / 1000));

  // Determine phase classification (8 segments of cycle)
  const segment = lunarCycle / 8;
  const offset = segment / 2;

  let phaseIndex = 0;
  if (age < offset || age >= lunarCycle - offset) {
    phaseIndex = 0; // New Moon
  } else if (age < segment + offset) {
    phaseIndex = 1; // Waxing Crescent
  } else if (age < 2 * segment + offset) {
    phaseIndex = 2; // First Quarter
  } else if (age < 3 * segment + offset) {
    phaseIndex = 3; // Waxing Gibbous
  } else if (age < 4 * segment + offset) {
    phaseIndex = 4; // Full Moon
  } else if (age < 5 * segment + offset) {
    phaseIndex = 5; // Waning Gibbous
  } else if (age < 6 * segment + offset) {
    phaseIndex = 6; // Last Quarter
  } else {
    phaseIndex = 7; // Waning Crescent
  }

  // Calculate next major phase (New Moon, First Quarter, Full Moon, Last Quarter)
  const majorPhases = [
    { index: 0, ageTarget: 0, key: 'newMoon', label: 'New Moon' },
    { index: 2, ageTarget: lunarCycle / 4, key: 'firstQuarter', label: 'First Quarter' },
    { index: 4, ageTarget: lunarCycle / 2, key: 'fullMoon', label: 'Full Moon' },
    { index: 6, ageTarget: (3 * lunarCycle) / 4, key: 'lastQuarter', label: 'Last Quarter' }
  ];

  let nextMajor = majorPhases.find(p => p.ageTarget > age);
  if (!nextMajor) {
    nextMajor = { index: 0, ageTarget: lunarCycle, key: 'newMoon', label: 'New Moon' };
  }

  const daysAway = Math.round((nextMajor.ageTarget - age) * 10) / 10;

  return {
    phaseKey: MOON_PHASE_KEYS[phaseIndex],
    phaseLabel: MOON_PHASES[phaseIndex],
    ageDays: Math.round(age * 10) / 10,
    illumination,
    nextPhaseKey: nextMajor.key,
    nextPhaseLabel: nextMajor.label,
    nextPhaseDaysAway: daysAway,
    calculatedAtUtc: new Date(targetTime).toISOString()
  };
};
