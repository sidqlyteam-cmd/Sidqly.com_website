import React, { useState, useEffect } from 'react';
import { getRamadanSeasonInfo, type SeasonalEventDetails } from '../../lib/seasonalDates';
import { MoonStar, AlertCircle, ArrowRight, CheckCircle2, RotateCcw, CheckSquare, Square, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const STORAGE_KEY = 'sidqly_ramadan_checklist';

interface ChecklistState {
  fastingGoal: boolean;
  quranGoal: boolean;
  charityGoal: boolean;
  dhikrGoal: boolean;
  taskIftarModule: boolean;
  taskVendorRation: boolean;
  taskSponsorTemplates: boolean;
  taskWeatherGuidelines: boolean;
  taskDailyProof: boolean;
  taskDonorUpdates: boolean;
  taskVolunteerMapping: boolean;
  taskMonitorNamaz: boolean;
}

const DEFAULT_CHECKLIST: ChecklistState = {
  fastingGoal: false,
  quranGoal: false,
  charityGoal: false,
  dhikrGoal: false,
  taskIftarModule: false,
  taskVendorRation: false,
  taskSponsorTemplates: false,
  taskWeatherGuidelines: false,
  taskDailyProof: false,
  taskDonorUpdates: false,
  taskVolunteerMapping: false,
  taskMonitorNamaz: false,
};

const RamadanCountdown: React.FC = () => {
  const { language, dir, t } = useLanguage();

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [seasonInfo, setSeasonInfo] = useState<SeasonalEventDetails>(() =>
    getRamadanSeasonInfo(new Date(), isConfirmed)
  );

  const [checklist, setChecklist] = useState<ChecklistState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          const validated: Partial<ChecklistState> = {};
          (Object.keys(DEFAULT_CHECKLIST) as Array<keyof ChecklistState>).forEach((key) => {
            if (typeof parsed[key] === 'boolean') {
              validated[key] = parsed[key];
            }
          });
          return { ...DEFAULT_CHECKLIST, ...validated };
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_CHECKLIST;
  });

  useEffect(() => {
    setSeasonInfo(getRamadanSeasonInfo(new Date(), isConfirmed));
  }, [isConfirmed]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checklist));
    } catch {
      // Ignore
    }
  }, [checklist]);

  const toggleCheck = (key: keyof ChecklistState) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetChecklist = () => {
    setChecklist(DEFAULT_CHECKLIST);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const totalItems = Object.keys(DEFAULT_CHECKLIST).length;
  const completedCount = Object.values(checklist).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  const formattedDate = seasonInfo.targetDate.toLocaleDateString(
    language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US',
    { month: 'long', year: 'numeric', day: 'numeric' }
  );

  return (
    <div dir={dir} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-sidqly-green-deep/10 p-3 rounded-xl shrink-0">
            <MoonStar className="text-sidqly-green-deep w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sidqly-navy">{t('islamicTools.ramadan.title')}</h2>
            <p className="text-sm text-gray-500">{t('islamicTools.ramadan.subtitle')}</p>
          </div>
        </div>

        {/* Confirmed vs Estimated Toggle Badge */}
        <button
          onClick={() => setIsConfirmed(!isConfirmed)}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
            isConfirmed
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
              : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
          }`}
          title="Click to toggle astronomical estimate vs confirmed date"
        >
          <ShieldCheck size={14} className={isConfirmed ? 'text-emerald-600' : 'text-amber-600'} />
          <span>{isConfirmed ? t('islamicTools.ramadan.officiallyConfirmed') : t('islamicTools.ramadan.estimatedDate')}</span>
        </button>
      </div>

      {/* Countdown Hero Box */}
      {seasonInfo.phase === 'during' ? (
        <div className="bg-gradient-to-br from-sidqly-navy via-sidqly-navy to-sidqly-green-deep rounded-2xl p-6 sm:p-8 text-white mb-8 text-center shadow-inner relative overflow-hidden">
          <div className="inline-block bg-sidqly-green-deep/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 text-sidqly-green-soft border border-sidqly-green-soft/30">
            {t('islamicTools.ramadan.ramadanActiveTitle')}
          </div>
          <p className="text-sm text-gray-200 mb-2">{t('islamicTools.ramadan.ramadanActiveSubtitle')}</p>
          <div className="flex justify-center items-baseline gap-2 mb-2">
            <span className="text-5xl sm:text-6xl font-extrabold text-amber-300">
              {t('islamicTools.ramadan.day')} {seasonInfo.currentSeasonDay}
            </span>
            <span className="text-xl text-white/80">/ {seasonInfo.totalDaysInSeason}</span>
          </div>
          <p className="text-xs text-white/70">
            {t('islamicTools.ramadan.targetEstimateLabel')} {formattedDate} (AH {seasonInfo.hijriYear})
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-sidqly-navy via-sidqly-navy to-sidqly-green-deep rounded-2xl p-6 sm:p-8 text-white mb-8 text-center shadow-inner">
          <p className="text-xs sm:text-sm text-sidqly-green-soft font-bold uppercase tracking-widest mb-4">
            {seasonInfo.isConfirmed ? t('islamicTools.ramadan.officiallyConfirmed') : t('islamicTools.ramadan.estimatedDate')}
          </p>
          <div className="flex justify-center items-end gap-2 mb-2">
            <span className="text-5xl sm:text-6xl font-extrabold">{seasonInfo.daysRemaining}</span>
            <span className="text-lg sm:text-xl text-white/80 mb-2">{t('islamicTools.ramadan.daysAway')}</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70">
            {t('islamicTools.ramadan.targetEstimateLabel')} {formattedDate} (AH {seasonInfo.hijriYear})
          </p>
        </div>
      )}

      {/* Progress & Checklist Tracker */}
      <div className="bg-sidqly-ivory/60 border border-gray-100 rounded-2xl p-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckSquare size={18} className="text-sidqly-green-deep" />
            <h3 className="font-bold text-sidqly-navy text-sm sm:text-base">{t('islamicTools.ramadan.dailyChecklist')}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 font-semibold">
              {completedCount} / {totalItems} {t('islamicTools.ramadan.completed')} ({progressPercent}%)
            </span>
            <button
              onClick={resetChecklist}
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-sidqly-navy transition-colors cursor-pointer"
              title={t('islamicTools.ramadan.reset')}
            >
              <RotateCcw size={12} />
              <span>{t('islamicTools.ramadan.reset')}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div
            className="bg-sidqly-green-deep h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Goals Checklist Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { key: 'fastingGoal', label: t('islamicTools.ramadan.fastingGoal') },
            { key: 'quranGoal', label: t('islamicTools.ramadan.quranGoal') },
            { key: 'charityGoal', label: t('islamicTools.ramadan.charityGoal') },
            { key: 'dhikrGoal', label: t('islamicTools.ramadan.dhikrGoal') },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => toggleCheck(item.key as keyof ChecklistState)}
              className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                checklist[item.key as keyof ChecklistState]
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {checklist[item.key as keyof ChecklistState] ? (
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              ) : (
                <Square size={16} className="text-gray-400 shrink-0" />
              )}
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Distribution Workflow Checklists */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Pre-Ramadan */}
          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-xs">
            <h4 className="font-bold text-xs sm:text-sm text-sidqly-green-deep mb-3 border-b border-gray-50 pb-2">
              {t('islamicTools.ramadan.preRamadanPlanning')}
            </h4>
            <div className="space-y-2.5">
              {[
                { key: 'taskIftarModule', label: t('islamicTools.ramadan.taskIftarModule') },
                { key: 'taskVendorRation', label: t('islamicTools.ramadan.taskVendorRation') },
                { key: 'taskSponsorTemplates', label: t('islamicTools.ramadan.taskSponsorTemplates') },
                { key: 'taskWeatherGuidelines', label: t('islamicTools.ramadan.taskWeatherGuidelines'), link: '/weather-charity-distribution' },
              ].map((task) => (
                <div key={task.key} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <button
                    onClick={() => toggleCheck(task.key as keyof ChecklistState)}
                    className="mt-0.5 shrink-0 text-gray-400 hover:text-sidqly-green-deep transition-colors cursor-pointer"
                  >
                    {checklist[task.key as keyof ChecklistState] ? (
                      <CheckCircle2 size={16} className="text-emerald-600" />
                    ) : (
                      <Square size={16} />
                    )}
                  </button>
                  <span className={checklist[task.key as keyof ChecklistState] ? 'line-through text-gray-400' : 'text-gray-700'}>
                    {task.label}{' '}
                    {task.link && (
                      <Link to={task.link} className="text-sidqly-green-emerald hover:underline">
                        (Link)
                      </Link>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* During Ramadan */}
          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-xs">
            <h4 className="font-bold text-xs sm:text-sm text-sidqly-green-deep mb-3 border-b border-gray-50 pb-2">
              {t('islamicTools.ramadan.duringRamadanOperations')}
            </h4>
            <div className="space-y-2.5">
              {[
                { key: 'taskDailyProof', label: t('islamicTools.ramadan.taskDailyProof') },
                { key: 'taskDonorUpdates', label: t('islamicTools.ramadan.taskDonorUpdates') },
                { key: 'taskVolunteerMapping', label: t('islamicTools.ramadan.taskVolunteerMapping') },
                { key: 'taskMonitorNamaz', label: t('islamicTools.ramadan.taskMonitorNamaz'), link: '/namaz-timings' },
              ].map((task) => (
                <div key={task.key} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <button
                    onClick={() => toggleCheck(task.key as keyof ChecklistState)}
                    className="mt-0.5 shrink-0 text-gray-400 hover:text-sidqly-green-deep transition-colors cursor-pointer"
                  >
                    {checklist[task.key as keyof ChecklistState] ? (
                      <CheckCircle2 size={16} className="text-emerald-600" />
                    ) : (
                      <Square size={16} />
                    )}
                  </button>
                  <span className={checklist[task.key as keyof ChecklistState] ? 'line-through text-gray-400' : 'text-gray-700'}>
                    {task.label}{' '}
                    {task.link && (
                      <Link to={task.link} className="text-sidqly-green-emerald hover:underline">
                        (Link)
                      </Link>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Module Links */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Link
          to="/modules/ramadan-donation-management"
          className="inline-flex items-center gap-2 bg-sidqly-ivory text-sidqly-navy px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors"
        >
          {t('islamicTools.ramadan.ramadanModule')} <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
        <Link
          to="/modules/vendor-fulfillment-platform"
          className="inline-flex items-center gap-2 bg-sidqly-ivory text-sidqly-navy px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors"
        >
          {t('islamicTools.ramadan.vendorFulfillment')} <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
        <Link
          to="/book-demo"
          className="inline-flex items-center gap-2 bg-sidqly-green-deep text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-sidqly-navy transition-colors"
        >
          {t('islamicTools.ramadan.bookDemo')} <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
        <p>{t('islamicTools.ramadan.disclaimerText')}</p>
      </div>
    </div>
  );
};

export default RamadanCountdown;
