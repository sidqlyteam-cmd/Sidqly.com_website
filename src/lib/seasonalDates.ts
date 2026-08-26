import { getIslamicDateInfo, hijriToGregorian } from './islamicCalendar';

export type SeasonalPhase = 'before' | 'during' | 'after';
export type SeasonalDateStatus = 'estimated' | 'officially_confirmed';

export interface SeasonalEventEstimate {
  name: string;
  estimatedGregorianDate: Date;
  daysRemaining: number;
  phase?: SeasonalPhase;
  status?: SeasonalDateStatus;
}

export interface SeasonalEventDetails {
  id: string;
  titleKey: string;
  defaultTitle: string;
  phase: SeasonalPhase;
  status: SeasonalDateStatus;
  targetDate: Date;
  endDate: Date;
  daysRemaining: number;
  currentSeasonDay: number | null;
  totalDaysInSeason: number | null;
  hijriYear: number;
  isConfirmed: boolean;
}

export interface TimelineStepInfo {
  id: string;
  daysBefore: number;
  targetDate: Date;
  timeLabelKey: string;
  defaultTimeLabel: string;
  actionKey: string;
  defaultAction: string;
}

/**
 * Normalizes a date to local 12:00:00 to eliminate UTC/local-midnight boundary shifts across timezones.
 */
export const normalizeToNoon = (d: Date = new Date()): Date => {
  if (isNaN(d.getTime())) {
    d = new Date();
  }
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0);
};

/**
 * Safely calculates whole calendar days remaining between referenceDate and targetDate.
 */
export const calculateDaysRemaining = (refDate: Date, targetDate: Date): number => {
  const normRef = normalizeToNoon(refDate);
  const normTarget = normalizeToNoon(targetDate);
  const diffMs = normTarget.getTime() - normRef.getTime();
  const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, days);
};

/**
 * Gets comprehensive seasonal information for Ramadan.
 * Handles: before Ramadan, during Ramadan (day 1-30), and post-Ramadan rollover to next Hijri year.
 */
export const getRamadanSeasonInfo = (
  inputDate: Date = new Date(),
  isConfirmedOverride: boolean = false
): SeasonalEventDetails => {
  const currentDate = normalizeToNoon(inputDate);
  const islamicInfo = getIslamicDateInfo(currentDate);

  let targetYear = islamicInfo.hijriYear;
  const monthIdx = islamicInfo.hijriMonthIndex; // 0-11. Ramadan is 8.

  if (monthIdx > 8) {
    targetYear += 1;
  }

  let ramadanStart = hijriToGregorian(targetYear, 8, 1) || new Date(currentDate.getFullYear(), 2, 1, 12, 0, 0);
  let ramadanEnd = hijriToGregorian(targetYear, 8, 30) || new Date(ramadanStart.getTime() + 29 * 24 * 60 * 60 * 1000);

  ramadanStart = normalizeToNoon(ramadanStart);
  ramadanEnd = normalizeToNoon(ramadanEnd);

  let phase: SeasonalPhase = 'before';
  let daysRemaining = 0;
  let currentSeasonDay: number | null = null;

  if (currentDate.getTime() < ramadanStart.getTime()) {
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, ramadanStart);
  } else if (currentDate.getTime() <= ramadanEnd.getTime()) {
    phase = 'during';
    daysRemaining = 0;
    const daysSinceStart = Math.floor((currentDate.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    currentSeasonDay = Math.min(30, Math.max(1, daysSinceStart));
  } else {
    targetYear += 1;
    ramadanStart = normalizeToNoon(hijriToGregorian(targetYear, 8, 1) || new Date(ramadanStart.getFullYear() + 1, ramadanStart.getMonth(), ramadanStart.getDate(), 12, 0, 0));
    ramadanEnd = normalizeToNoon(hijriToGregorian(targetYear, 8, 30) || new Date(ramadanStart.getTime() + 29 * 24 * 60 * 60 * 1000));
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, ramadanStart);
  }

  return {
    id: 'ramadan',
    titleKey: 'ramadanPlanner',
    defaultTitle: 'Ramadan Planner',
    phase,
    status: isConfirmedOverride ? 'officially_confirmed' : 'estimated',
    targetDate: ramadanStart,
    endDate: ramadanEnd,
    daysRemaining,
    currentSeasonDay,
    totalDaysInSeason: 30,
    hijriYear: targetYear,
    isConfirmed: isConfirmedOverride,
  };
};

/**
 * Legacy backwards-compatible Ramadan estimate wrapper.
 */
export const getNextRamadanEstimate = (currentDate: Date = new Date()): SeasonalEventEstimate => {
  const info = getRamadanSeasonInfo(currentDate);
  return {
    name: 'Ramadan Planning Window',
    estimatedGregorianDate: info.targetDate,
    daysRemaining: info.daysRemaining,
    phase: info.phase,
    status: info.status,
  };
};

/**
 * Gets seasonal info for Eid al-Adha & Qurbani planning (10th Dhul Hijjah).
 */
export const getEidQurbaniSeasonInfo = (
  inputDate: Date = new Date(),
  isConfirmedOverride: boolean = false
): SeasonalEventDetails => {
  const currentDate = normalizeToNoon(inputDate);
  const islamicInfo = getIslamicDateInfo(currentDate);

  let targetYear = islamicInfo.hijriYear;
  const monthIdx = islamicInfo.hijriMonthIndex; // Dhul Hijjah is 11

  if (monthIdx === 11 && islamicInfo.hijriDay > 12) {
    targetYear += 1;
  }

  let eidStart = hijriToGregorian(targetYear, 11, 10) || new Date(currentDate.getFullYear(), 5, 16, 12, 0, 0);
  let eidEnd = hijriToGregorian(targetYear, 11, 12) || new Date(eidStart.getTime() + 2 * 24 * 60 * 60 * 1000);

  eidStart = normalizeToNoon(eidStart);
  eidEnd = normalizeToNoon(eidEnd);

  let phase: SeasonalPhase = 'before';
  let daysRemaining = 0;
  let currentSeasonDay: number | null = null;

  if (currentDate.getTime() < eidStart.getTime()) {
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, eidStart);
  } else if (currentDate.getTime() <= eidEnd.getTime()) {
    phase = 'during';
    daysRemaining = 0;
    const daysSinceStart = Math.floor((currentDate.getTime() - eidStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    currentSeasonDay = Math.min(3, Math.max(1, daysSinceStart));
  } else {
    targetYear += 1;
    eidStart = normalizeToNoon(hijriToGregorian(targetYear, 11, 10) || new Date(eidStart.getFullYear() + 1, eidStart.getMonth(), eidStart.getDate(), 12, 0, 0));
    eidEnd = normalizeToNoon(hijriToGregorian(targetYear, 11, 12) || new Date(eidStart.getTime() + 2 * 24 * 60 * 60 * 1000));
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, eidStart);
  }

  return {
    id: 'eid_al_adha',
    titleKey: 'eidQurbaniPlanner',
    defaultTitle: 'Eid & Qurbani Planner',
    phase,
    status: isConfirmedOverride ? 'officially_confirmed' : 'estimated',
    targetDate: eidStart,
    endDate: eidEnd,
    daysRemaining,
    currentSeasonDay,
    totalDaysInSeason: 3,
    hijriYear: targetYear,
    isConfirmed: isConfirmedOverride,
  };
};

/**
 * Gets seasonal info for Hajj (8th - 13th Dhul Hijjah).
 */
export const getHajjSeasonInfo = (
  inputDate: Date = new Date(),
  isConfirmedOverride: boolean = false
): SeasonalEventDetails => {
  const currentDate = normalizeToNoon(inputDate);
  const islamicInfo = getIslamicDateInfo(currentDate);

  let targetYear = islamicInfo.hijriYear;
  const monthIdx = islamicInfo.hijriMonthIndex; // Dhul Hijjah is 11

  if (monthIdx === 11 && islamicInfo.hijriDay > 13) {
    targetYear += 1;
  }

  let hajjStart = hijriToGregorian(targetYear, 11, 8) || new Date(currentDate.getFullYear(), 5, 14, 12, 0, 0);
  let hajjEnd = hijriToGregorian(targetYear, 11, 13) || new Date(hajjStart.getTime() + 5 * 24 * 60 * 60 * 1000);

  hajjStart = normalizeToNoon(hajjStart);
  hajjEnd = normalizeToNoon(hajjEnd);

  let phase: SeasonalPhase = 'before';
  let daysRemaining = 0;
  let currentSeasonDay: number | null = null;

  if (currentDate.getTime() < hajjStart.getTime()) {
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, hajjStart);
  } else if (currentDate.getTime() <= hajjEnd.getTime()) {
    phase = 'during';
    daysRemaining = 0;
    const daysSinceStart = Math.floor((currentDate.getTime() - hajjStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    currentSeasonDay = Math.min(6, Math.max(1, daysSinceStart));
  } else {
    targetYear += 1;
    hajjStart = normalizeToNoon(hijriToGregorian(targetYear, 11, 8) || new Date(hajjStart.getFullYear() + 1, hajjStart.getMonth(), hajjStart.getDate(), 12, 0, 0));
    hajjEnd = normalizeToNoon(hijriToGregorian(targetYear, 11, 13) || new Date(hajjStart.getTime() + 5 * 24 * 60 * 60 * 1000));
    phase = 'before';
    daysRemaining = calculateDaysRemaining(currentDate, hajjStart);
  }

  return {
    id: 'hajj',
    titleKey: 'hajjCountdown',
    defaultTitle: 'Hajj & Dhul Hijjah Planner',
    phase,
    status: isConfirmedOverride ? 'officially_confirmed' : 'estimated',
    targetDate: hajjStart,
    endDate: hajjEnd,
    daysRemaining,
    currentSeasonDay,
    totalDaysInSeason: 6,
    hijriYear: targetYear,
    isConfirmed: isConfirmedOverride,
  };
};

/**
 * Legacy backwards-compatible Hajj estimate wrapper.
 */
export const getNextHajjEstimate = (currentDate: Date = new Date()): SeasonalEventEstimate => {
  const info = getHajjSeasonInfo(currentDate);
  return {
    name: 'Dhul Hijjah / Hajj Planning Window',
    estimatedGregorianDate: info.targetDate,
    daysRemaining: info.daysRemaining,
    phase: info.phase,
    status: info.status,
  };
};

/**
 * Dynamic 90, 60, 30, and 10-day preparation timeline steps calculated from target Hajj start date.
 */
export const getHajjPreparationTimeline = (hajjTargetDate: Date): TimelineStepInfo[] => {
  const normalizedHajj = normalizeToNoon(hajjTargetDate);

  const steps = [
    {
      id: 'step90',
      daysBefore: 90,
      timeLabelKey: 'timeline90Days',
      defaultTimeLabel: '90 days before',
      actionKey: 'timelineAction90',
      defaultAction: 'Campaign setup & module activation',
    },
    {
      id: 'step60',
      daysBefore: 60,
      timeLabelKey: 'timeline60Days',
      defaultTimeLabel: '60 days before',
      actionKey: 'timelineAction60',
      defaultAction: 'Vendor planning & animal sourcing readiness',
    },
    {
      id: 'step30',
      daysBefore: 30,
      timeLabelKey: 'timeline30Days',
      defaultTimeLabel: '30 days before',
      actionKey: 'timelineAction30',
      defaultAction: 'Donor communication, share allocation & sponsor updates',
    },
    {
      id: 'step10',
      daysBefore: 10,
      timeLabelKey: 'timeline10Days',
      defaultTimeLabel: '10 days before',
      actionKey: 'timelineAction10',
      defaultAction: 'Certificates, proof review templates & report readiness',
    },
  ];

  return steps.map((s) => {
    const target = new Date(normalizedHajj.getTime() - s.daysBefore * 24 * 60 * 60 * 1000);
    return {
      ...s,
      targetDate: normalizeToNoon(target),
    };
  });
};
