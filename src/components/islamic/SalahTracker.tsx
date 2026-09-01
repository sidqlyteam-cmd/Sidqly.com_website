import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  type PrayerName,
  type PrayerStatus,
  PRAYER_NAMES,
  formatDateKey,
  loadSalahTrackerState,
  updatePrayerStatus,
  updateQazaCount,
  getDailyMetrics,
  getWeeklySummary,
  type SalahTrackerState,
} from '../../lib/salahTracker';
import {
  CheckCircle2,
  XCircle,
  Clock,
  Plus,
  Minus,
  Calendar,
  Activity,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const SalahTracker: React.FC = () => {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const [state, setState] = useState<SalahTrackerState>(loadSalahTrackerState);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const dateKey = formatDateKey(selectedDate);
  const dailyMetrics = getDailyMetrics(state, dateKey);
  const weeklySummary = getWeeklySummary(state);

  const todayKey = formatDateKey(new Date());
  const isToday = dateKey === todayKey;

  const currentDayRecord = state.history[dateKey] || {
    fajr: 'none',
    dhuhr: 'none',
    asr: 'none',
    maghrib: 'none',
    isha: 'none',
  };

  const handleStatusChange = (prayer: PrayerName, status: PrayerStatus) => {
    const updated = updatePrayerStatus(state, dateKey, prayer, status);
    setState(updated);
  };

  const handleQazaChange = (prayer: PrayerName, delta: number) => {
    const updated = updateQazaCount(state, prayer, delta);
    setState(updated);
  };

  const changeDate = (days: number) => {
    const next = new Date(selectedDate);
    next.setDate(selectedDate.getDate() + days);
    setSelectedDate(next);
  };

  return (
    <div className="bg-sidqly-ivory min-h-screen py-10 sm:py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-sidqly-green-deep dark:bg-emerald-900/30 dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Activity size={16} />
            <span>{t('islamicTools.salahTracker.title')}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy dark:text-white mb-4">
            {t('islamicTools.salahTracker.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            {t('islamicTools.salahTracker.subtitle')}
          </p>
        </div>

        {/* Date Selector & Daily Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
            <button
              onClick={() => changeDate(-1)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft size={20} className={isRtl ? 'rotate-180' : ''} />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 font-bold text-lg text-sidqly-navy dark:text-white">
                <Calendar size={18} className="text-sidqly-green-deep" />
                <span>
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                {isToday && (
                  <span className="bg-emerald-100 text-sidqly-green-deep text-xs px-2 py-0.5 rounded-md font-bold">
                    Today
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => changeDate(1)}
              disabled={isToday}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 transition-colors disabled:opacity-40"
            >
              <ChevronRight size={20} className={isRtl ? 'rotate-180' : ''} />
            </button>
          </div>

          {/* Metrics Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-emerald-50/60 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-center">
              <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold block mb-1">
                {t('islamicTools.salahTracker.completedPrayers')}
              </span>
              <span className="text-2xl font-extrabold text-sidqly-green-deep dark:text-emerald-400">
                {dailyMetrics.completed} / 5
              </span>
            </div>

            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 text-center">
              <span className="text-xs text-amber-800 dark:text-amber-300 font-bold block mb-1">
                {t('islamicTools.salahTracker.qazaPrayers')}
              </span>
              <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">
                {dailyMetrics.qaza}
              </span>
            </div>

            <div className="bg-red-50/60 dark:bg-red-950/20 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-center">
              <span className="text-xs text-red-800 dark:text-red-300 font-bold block mb-1">
                {t('islamicTools.salahTracker.missedPrayers')}
              </span>
              <span className="text-2xl font-extrabold text-red-600 dark:text-red-400">
                {dailyMetrics.missed}
              </span>
            </div>

            <div className="bg-blue-50/60 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 text-center">
              <span className="text-xs text-blue-800 dark:text-blue-300 font-bold block mb-1">
                {t('islamicTools.salahTracker.completionRate')}
              </span>
              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                {dailyMetrics.percentage}%
              </span>
            </div>
          </div>

          {/* Daily 5 Prayers Checklist Controls */}
          <div className="space-y-4">
            {PRAYER_NAMES.map((prayer) => {
              const status = currentDayRecord[prayer] || 'none';
              const label = t(`islamicTools.salahTracker.prayers.${prayer}` as any);

              return (
                <div
                  key={prayer}
                  className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base text-sidqly-navy dark:text-white capitalize">
                      {label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStatusChange(prayer, 'completed')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                        status === 'completed'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-emerald-50'
                      }`}
                    >
                      <CheckCircle2 size={14} />
                      <span>{t('islamicTools.salahTracker.markCompleted')}</span>
                    </button>

                    <button
                      onClick={() => handleStatusChange(prayer, 'qaza')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                        status === 'qaza'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-amber-50'
                      }`}
                    >
                      <Clock size={14} />
                      <span>{t('islamicTools.salahTracker.markQaza')}</span>
                    </button>

                    <button
                      onClick={() => handleStatusChange(prayer, 'missed')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                        status === 'missed'
                          ? 'bg-red-600 text-white shadow-sm'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-red-50'
                      }`}
                    >
                      <XCircle size={14} />
                      <span>{t('islamicTools.salahTracker.markMissed')}</span>
                    </button>

                    {status !== 'none' && (
                      <button
                        onClick={() => handleStatusChange(prayer, 'none')}
                        className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        title={t('islamicTools.salahTracker.clearStatus')}
                      >
                        <RotateCcw size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Qaza Counter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-sidqly-navy dark:text-white">
              {t('islamicTools.salahTracker.qazaTrackerTitle')}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t('islamicTools.salahTracker.qazaTrackerSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {PRAYER_NAMES.map((prayer) => {
              const count = state.qaza[prayer] || 0;
              const label = t(`islamicTools.salahTracker.prayers.${prayer}` as any);

              return (
                <div
                  key={prayer}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-100 dark:border-gray-600 text-center flex flex-col justify-between"
                >
                  <span className="font-bold text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-2">
                    {label} Qaza
                  </span>

                  <span className="text-3xl font-extrabold text-sidqly-navy dark:text-white mb-3">
                    {count}
                  </span>

                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleQazaChange(prayer, -1)}
                      disabled={count <= 0}
                      className="p-1.5 rounded-lg bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-500 disabled:opacity-30 hover:bg-gray-100"
                    >
                      <Minus size={14} />
                    </button>
                    <button
                      onClick={() => handleQazaChange(prayer, 1)}
                      className="p-1.5 rounded-lg bg-sidqly-green-deep text-white hover:bg-emerald-700"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly History Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-sidqly-navy dark:text-white mb-6">
            {t('islamicTools.salahTracker.weeklyHistoryTitle')}
          </h2>

          <div className="grid grid-cols-7 gap-2 text-center">
            {weeklySummary.map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl border border-gray-100 dark:border-gray-600">
                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </span>
                <span className="block text-lg font-extrabold text-sidqly-green-deep dark:text-emerald-400">
                  {item.completed}/5
                </span>
                <span className="block text-[10px] text-gray-400 mt-1">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-6 flex items-start gap-3">
          <ShieldCheck size={20} className="text-sidqly-green-deep shrink-0 mt-0.5" />
          <div className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            <span className="font-bold text-sidqly-navy dark:text-white block mb-1">
              {t('islamicTools.salahTracker.disclaimerTitle')}
            </span>
            <span>{t('islamicTools.salahTracker.disclaimerText')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
