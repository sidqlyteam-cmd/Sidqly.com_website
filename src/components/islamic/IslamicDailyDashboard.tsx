import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { getIslamicDateInfo, HIJRI_MONTHS, type IslamicDateInfo } from '../../lib/islamicCalendar';
import { fetchNamazTimingsByCity, fetchNamazTimingsByCoords, getNextPrayer, type NamazTimings } from '../../lib/namazTimings';
import { calculateQiblaDirection, type QiblaResult } from '../../lib/qibla';
import { getRamadanSeasonInfo, getEidFitrSeasonInfo, getEidQurbaniSeasonInfo, getHajjSeasonInfo, type SeasonalEventDetails } from '../../lib/seasonalDates';
import { getApproximateMoonPhase, type MoonPhaseResult } from '../../lib/moonPhase';
import { useGeolocation } from '../../hooks/useGeolocation';
import {
  Calendar,
  Clock,
  Compass,
  Moon,
  Sparkles,
  CheckCircle2,
  ListTodo,
  MapPin,
  Search,
  AlertCircle,
  ArrowRight,
  Calculator,
  Gift,
  Heart,
  BookOpen,
  CloudSun,
  Activity,
  LayoutDashboard
} from 'lucide-react';

const MONTH_KEYS = [
  'muharram', 'safar', 'rabiAlAwwal', 'rabiAlThani',
  'jumadaAlAwwal', 'jumadaAlThani', 'rajab', 'shaban',
  'ramadan', 'shawwal', 'dhulQadah', 'dhulHijjah'
];

interface PersonalProgressSummary {
  ramadanChecklist: { total: number; done: number } | null;
  qurbaniChecklist: { total: number; done: number } | null;
  qurbaniShares: { participants: number; shares: number } | null;
}

const IslamicDailyDashboard: React.FC = () => {
  const { t, language, dir, getLocalizedPath } = useLanguage();

  // Priority 1: Dates & Hijri Status
  const [islamicDate, setIslamicDate] = useState<IslamicDateInfo | null>(null);

  // Priority 2: Prayer Timings
  const [city, setCity] = useState('Lahore');
  const [country, setCountry] = useState('Pakistan');
  const [namazData, setNamazData] = useState<NamazTimings | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
  const [namazLoading, setNamazLoading] = useState(false);
  const [namazError, setNamazError] = useState<string | null>(null);
  const { loading: geoLoading, error: geoError, clearError, getCurrentPosition } = useGeolocation();

  // Priority 3: Qibla Summary
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [qiblaResult, setQiblaResult] = useState<QiblaResult | null>(null);

  // Priority 5: Seasonal Status
  const [activeSeason, setActiveSeason] = useState<SeasonalEventDetails | null>(null);

  // Priority 6: Moon Phase
  const [moonPhase, setMoonPhase] = useState<MoonPhaseResult | null>(null);

  // Priority 7: Local Progress
  const [personalProgress, setPersonalProgress] = useState<PersonalProgressSummary>({
    ramadanChecklist: null,
    qurbaniChecklist: null,
    qurbaniShares: null,
  });

  // Load Date, Moon, and Seasons on Mount & hourly interval
  useEffect(() => {
    const updateTimeSensitiveData = () => {
      const now = new Date();
      setIslamicDate(getIslamicDateInfo(now));
      setMoonPhase(getApproximateMoonPhase(now));

      // Calculate seasons & select the active or nearest upcoming season
      const ramadan = getRamadanSeasonInfo(now);
      const eidFitr = getEidFitrSeasonInfo(now);
      const eidQurbani = getEidQurbaniSeasonInfo(now);
      const hajj = getHajjSeasonInfo(now);

      const seasons = [ramadan, eidFitr, eidQurbani, hajj];
      const duringSeason = seasons.find((s) => s.phase === 'during');

      if (duringSeason) {
        setActiveSeason(duringSeason);
      } else {
        // Find nearest upcoming season
        seasons.sort((a, b) => a.daysRemaining - b.daysRemaining);
        setActiveSeason(seasons[0] || ramadan);
      }
    };

    updateTimeSensitiveData();
    const interval = setInterval(updateTimeSensitiveData, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  // Fetch Prayer Times safely
  const loadNamazByCity = async (c: string, cntry: string) => {
    setNamazLoading(true);
    setNamazError(null);
    clearError();
    try {
      const data = await fetchNamazTimingsByCity(c, cntry);
      setNamazData(data);
      setNextPrayer(getNextPrayer(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setNamazError(err.message);
      } else {
        setNamazError(t('islamicTools.unableToCalculate'));
      }
      setNamazData(null);
      setNextPrayer(null);
    } finally {
      setNamazLoading(false);
    }
  };

  useEffect(() => {
    loadNamazByCity(city, country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchNamaz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim() || !country.trim()) {
      setNamazError(t('islamicTools.namaz.enterCityCountry'));
      return;
    }
    loadNamazByCity(city.trim(), country.trim());
  };

  const handleUseLocationNamaz = () => {
    setNamazError(null);
    clearError();
    getCurrentPosition(async (coords) => {
      setNamazLoading(true);
      try {
        const data = await fetchNamazTimingsByCoords(coords.latitude, coords.longitude);
        setNamazData(data);
        setNextPrayer(getNextPrayer(data));
        setUserCoords({ lat: coords.latitude, lng: coords.longitude });
        setQiblaResult(calculateQiblaDirection(coords.latitude, coords.longitude));
      } catch (err: unknown) {
        if (err instanceof Error) {
          setNamazError(err.message);
        } else {
          setNamazError(t('islamicTools.unableToCalculate'));
        }
      } finally {
        setNamazLoading(false);
      }
    });
  };

  // Safely read LocalStorage for personal progress
  useEffect(() => {
    try {
      let ramadanChecklist: { total: number; done: number } | null = null;
      let qurbaniChecklist: { total: number; done: number } | null = null;
      let qurbaniShares: { participants: number; shares: number } | null = null;

      if (typeof localStorage !== 'undefined') {
        const rawRamadan = localStorage.getItem('sidqly_ramadan_checklist');
        if (rawRamadan) {
          const parsed = JSON.parse(rawRamadan);
          if (parsed && typeof parsed === 'object') {
            const keys = Object.keys(parsed);
            const done = keys.filter((k) => Boolean(parsed[k])).length;
            ramadanChecklist = { total: keys.length, done };
          }
        }

        const rawQurbani = localStorage.getItem('sidqly_qurbani_checklist');
        if (rawQurbani) {
          const parsed = JSON.parse(rawQurbani);
          if (parsed && typeof parsed === 'object') {
            const keys = Object.keys(parsed);
            const done = keys.filter((k) => Boolean(parsed[k])).length;
            qurbaniChecklist = { total: keys.length, done };
          }
        }

        const rawShares = localStorage.getItem('sidqly_qurbani_shares');
        if (rawShares) {
          const parsed = JSON.parse(rawShares);
          if (parsed && typeof parsed === 'object' && parsed.participants) {
            qurbaniShares = {
              participants: Number(parsed.participants) || 0,
              shares: Number(parsed.shares) || 0,
            };
          }
        }
      }

      setPersonalProgress({ ramadanChecklist, qurbaniChecklist, qurbaniShares });
    } catch {
      // Handle corrupted localStorage gracefully without throwing
      setPersonalProgress({ ramadanChecklist: null, qurbaniChecklist: null, qurbaniShares: null });
    }
  }, []);

  // Format Dates
  const formattedGregorian = islamicDate
    ? islamicDate.gregorianDate.toLocaleDateString(
        language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US',
        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
      )
    : '';

  const monthKey = islamicDate ? MONTH_KEYS[islamicDate.hijriMonthIndex] : '';
  const localizedHijriMonth = monthKey
    ? t(`islamicTools.calendar.months.${monthKey}` as any, HIJRI_MONTHS[islamicDate?.hijriMonthIndex || 0])
    : islamicDate?.hijriMonthName || '';

  const activeError = namazError || geoError;
  const isNamazBusy = namazLoading || geoLoading;

  // Tools Quick Links Grid
  const quickTools = [
    { nameKey: 'islamicTools.namaz.title', path: '/namaz-timings', icon: <Clock size={20} /> },
    { nameKey: 'islamicTools.qibla.title', path: '/qibla-direction', icon: <Compass size={20} /> },
    { nameKey: 'islamicTools.zakat.title', path: '/zakat-calculator', icon: <Calculator size={20} /> },
    { nameKey: 'islamicTools.calendar.title', path: '/islamic-calendar', icon: <Calendar size={20} /> },
    { nameKey: 'islamicTools.moonPhase.title', path: '/moon-phase-islamic-calendar', icon: <Moon size={20} /> },
    { nameKey: 'islamicTools.ramadan.title', path: '/ramadan-planner', icon: <Heart size={20} /> },
    { nameKey: 'islamicTools.eidQurbani.title', path: '/eid-qurbani-planner', icon: <Gift size={20} /> },
    { nameKey: 'islamicTools.hajj.title', path: '/hajj-countdown', icon: <Sparkles size={20} /> },
    { nameKey: 'islamicTools.weather.title', path: '/weather-charity-distribution', icon: <CloudSun size={20} /> },
    { nameKey: 'islamicTools.sadqaZakatPlanner.title', path: '/sadqa-zakat-planner', icon: <Activity size={20} /> },
    { nameKey: 'islamicTools.glossary.title', path: '/islamic-glossary', icon: <BookOpen size={20} /> },
  ];

  return (
    <div className="space-y-8" dir={dir}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sidqly-navy via-sidqly-navy/95 to-sidqly-green-deep text-white p-6 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sidqly-green-soft text-xs sm:text-sm font-semibold mb-4">
            <LayoutDashboard size={16} />
            <span>{t('islamicTools.dashboard.title', 'Islamic Daily Dashboard')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('islamicTools.dashboard.todaySummary', "Today's Overview")}
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            {t('islamicTools.dashboard.subtitle', 'Your central daily hub for prayer times, Hijri date, Qibla direction, seasonal status, and personal planning.')}
          </p>
        </div>
        <div className="absolute ltr:-right-12 rtl:-left-12 -bottom-12 opacity-10 pointer-events-none">
          <Moon size={280} />
        </div>
      </div>

      {/* Priority 1 & Priority 5 Grid: Today's Date & Active Season */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Date Card */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sidqly-green-deep/10 p-2.5 rounded-2xl text-sidqly-green-deep">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-sidqly-navy">{t('islamicTools.calendar.todaysDate')}</h2>
                <p className="text-xs text-gray-500">{formattedGregorian}</p>
              </div>
            </div>

            {islamicDate && (
              <div className="py-4 border-y border-gray-100 my-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-sidqly-green-deep mb-1">
                  {islamicDate.hijriDay} {localizedHijriMonth} {islamicDate.hijriYear} <span className="text-sm font-semibold text-gray-400">AH</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                  <span className="px-2 py-0.5 bg-sidqly-ivory text-sidqly-green-deep rounded font-bold">
                    {t('islamicTools.calendar.estimated')}
                  </span>
                  <span>{t('islamicTools.calendar.planningDisclaimer')}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-gray-500">{t('islamicTools.calendar.title')}</span>
            <Link
              to={getLocalizedPath('/islamic-calendar')}
              className="text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald flex items-center gap-1"
            >
              <span>{t('islamicTools.utilitiesHub.openTool')}</span>
              <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>

        {/* Priority 5: Active / Upcoming Season Card */}
        <div className="bg-gradient-to-br from-sidqly-green-deep/5 via-white to-sidqly-ivory p-6 sm:p-8 rounded-3xl border border-sidqly-green-emerald/20 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sidqly-green-deep uppercase tracking-wider mb-3">
              <Sparkles size={16} />
              <span>{t('islamicTools.dashboard.activeSeason', 'Current & Upcoming Islamic Season')}</span>
            </div>

            {activeSeason && (
              <div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-2">
                  {t(`islamicTools.calendar.${activeSeason.titleKey}` as any, activeSeason.defaultTitle)}
                </h3>
                <div className="mb-4">
                  {activeSeason.phase === 'during' ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sidqly-green-emerald text-white rounded-full text-xs font-bold">
                      <CheckCircle2 size={14} />
                      <span>Season Active (Day {activeSeason.currentSeasonDay} of {activeSeason.totalDaysInSeason})</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sidqly-navy text-white rounded-full text-xs font-bold">
                      <Clock size={14} />
                      <span>{activeSeason.daysRemaining} days remaining ({activeSeason.targetDate.toLocaleDateString()})</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Status: <span className="font-semibold text-sidqly-navy">{activeSeason.status === 'officially_confirmed' ? t('islamicTools.calendar.officiallyConfirmed') : t('islamicTools.calendar.estimated')}</span>
                </p>
              </div>
            )}
          </div>

          <Link
            to={getLocalizedPath('/ramadan-planner')}
            className="inline-flex items-center justify-between w-full p-3 bg-white hover:bg-sidqly-ivory rounded-xl border border-gray-200 text-xs font-bold text-sidqly-navy transition-all group"
          >
            <span>View Season Planners</span>
            <ArrowRight size={14} className={`group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </Link>
        </div>
      </div>

      {/* Priority 2: Namaz Prayer Timings Section */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-sidqly-green-deep/10 p-2.5 rounded-2xl text-sidqly-green-deep">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-sidqly-navy">{t('islamicTools.namaz.title')}</h2>
              <p className="text-xs text-gray-500">{t('islamicTools.namaz.subtitle')}</p>
            </div>
          </div>

          {/* Quick Location Search Controls */}
          <form onSubmit={handleSearchNamaz} className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="px-3 py-1.5 text-xs rounded-xl border border-gray-200 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald w-28 sm:w-32"
            />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="px-3 py-1.5 text-xs rounded-xl border border-gray-200 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald w-28 sm:w-32"
            />
            <button
              type="submit"
              disabled={isNamazBusy}
              className="px-3 py-1.5 bg-sidqly-navy text-white text-xs font-bold rounded-xl hover:bg-sidqly-green-deep transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              <Search size={14} />
              <span>{isNamazBusy ? t('islamicTools.loading') : t('islamicTools.calculate')}</span>
            </button>
            <button
              type="button"
              onClick={handleUseLocationNamaz}
              disabled={isNamazBusy}
              className="px-3 py-1.5 bg-sidqly-ivory text-sidqly-navy text-xs font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              <MapPin size={14} />
              <span>{t('islamicTools.useMyLocation')}</span>
            </button>
          </form>
        </div>

        {activeError && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-xs flex items-start gap-2 border border-red-100">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <div className="flex-1">
              <p>{activeError}</p>
            </div>
          </div>
        )}

        {namazData ? (
          <div className="space-y-6">
            {nextPrayer && (
              <div className="bg-sidqly-green-emerald/10 border border-sidqly-green-emerald/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  <Sparkles size={18} />
                  <span>{t('islamicTools.dashboard.nextPrayerLabel', 'Next Prayer')}:</span>
                </div>
                <div className="text-xl font-extrabold text-sidqly-navy">
                  {nextPrayer.name} at {nextPrayer.time}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Fajr', time: namazData.Fajr },
                { name: 'Sunrise', time: namazData.Sunrise },
                { name: 'Dhuhr', time: namazData.Dhuhr },
                { name: 'Asr', time: namazData.Asr },
                { name: 'Maghrib', time: namazData.Maghrib },
                { name: 'Isha', time: namazData.Isha },
              ].map((prayer) => {
                const isNext = nextPrayer?.name === prayer.name;
                return (
                  <div
                    key={prayer.name}
                    className={`p-3.5 rounded-2xl text-center border transition-all ${
                      isNext
                        ? 'border-sidqly-green-emerald bg-sidqly-green-emerald/10 font-bold shadow-sm'
                        : 'border-gray-100 bg-gray-50/50 hover:bg-gray-50'
                    }`}
                  >
                    <p className="text-xs font-medium text-gray-500 mb-1">{prayer.name}</p>
                    <p className="text-base sm:text-lg font-bold text-sidqly-navy">{prayer.time}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-50">
              <span>Timezone: {namazData.timezone}</span>
              <Link to={getLocalizedPath('/namaz-timings')} className="font-bold text-sidqly-green-deep hover:underline">
                Full Namaz Timings Tool &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-xs text-gray-500">{t('islamicTools.loading', 'Loading prayer times...')}</p>
          </div>
        )}
      </div>

      {/* Priority 3 & Priority 6 Grid: Qibla Summary & Moon Phase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Priority 3: Qibla Summary */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sidqly-green-deep/10 p-2.5 rounded-2xl text-sidqly-green-deep">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sidqly-navy">{t('islamicTools.qibla.title')}</h3>
                <p className="text-xs text-gray-500">{t('islamicTools.qibla.subtitle')}</p>
              </div>
            </div>

            {qiblaResult ? (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100 mb-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{t('islamicTools.qibla.qiblaBearing')}</p>
                <p className="text-3xl font-extrabold text-sidqly-green-deep mb-1">{qiblaResult.bearing}°</p>
                <p className="text-xs font-semibold text-sidqly-navy">{qiblaResult.cardinalDirection}</p>
              </div>
            ) : (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100 mb-4 text-center">
                <p className="text-xs text-gray-500">{userCoords ? 'Calculating...' : 'Use your location or click below to calculate Qibla direction.'}</p>
              </div>
            )}
          </div>

          <Link
            to={getLocalizedPath('/qibla-direction')}
            className="inline-flex items-center justify-between w-full p-3 bg-sidqly-navy hover:bg-sidqly-green-deep text-white rounded-xl text-xs font-bold transition-all"
          >
            <span>Open Qibla Direction Tool</span>
            <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
          </Link>
        </div>

        {/* Priority 6: Moon Phase Summary */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sidqly-green-deep/10 p-2.5 rounded-2xl text-sidqly-green-deep">
                <Moon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sidqly-navy">{t('islamicTools.moonPhase.title')}</h3>
                <p className="text-xs text-gray-500">{t('islamicTools.moonPhase.subtitle')}</p>
              </div>
            </div>

            {moonPhase && (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100 mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{t('islamicTools.moonPhase.currentPhase')}</p>
                  <p className="text-lg font-bold text-sidqly-navy">
                    {t(`islamicTools.moonPhase.phases.${moonPhase.phaseKey}` as any, moonPhase.phaseLabel)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t('islamicTools.moonPhase.illumination')}: <span className="font-bold text-sidqly-green-deep">{Math.round(moonPhase.illumination * 100)}%</span> | Age: {moonPhase.ageDays} {t('islamicTools.moonPhase.days')}
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link
            to={getLocalizedPath('/moon-phase-islamic-calendar')}
            className="inline-flex items-center justify-between w-full p-3 bg-sidqly-navy hover:bg-sidqly-green-deep text-white rounded-xl text-xs font-bold transition-all"
          >
            <span>Open Moon Phase Tool</span>
            <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
          </Link>
        </div>
      </div>

      {/* Priority 7: Personal Local Storage Progress Summaries */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-sidqly-green-deep/10 p-2.5 rounded-2xl text-sidqly-green-deep">
            <ListTodo size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-sidqly-navy">
              {t('islamicTools.dashboard.personalProgress', 'Personal Local Progress')}
            </h2>
            <p className="text-xs text-gray-500">Local browser saved state for planners and checklists.</p>
          </div>
        </div>

        {personalProgress.ramadanChecklist || personalProgress.qurbaniChecklist || personalProgress.qurbaniShares ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {personalProgress.ramadanChecklist && (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-sidqly-navy mb-1">{t('islamicTools.calendar.ramadanPlannerTitle')}</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
                  <div
                    className="bg-sidqly-green-deep h-full rounded-full transition-all"
                    style={{
                      width: `${Math.round(
                        (personalProgress.ramadanChecklist.done / (personalProgress.ramadanChecklist.total || 1)) * 100
                      )}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {personalProgress.ramadanChecklist.done} of {personalProgress.ramadanChecklist.total} completed
                </p>
              </div>
            )}

            {personalProgress.qurbaniChecklist && (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-sidqly-navy mb-1">{t('islamicTools.eidQurbani.title')}</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
                  <div
                    className="bg-sidqly-green-deep h-full rounded-full transition-all"
                    style={{
                      width: `${Math.round(
                        (personalProgress.qurbaniChecklist.done / (personalProgress.qurbaniChecklist.total || 1)) * 100
                      )}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {personalProgress.qurbaniChecklist.done} of {personalProgress.qurbaniChecklist.total} completed
                </p>
              </div>
            )}

            {personalProgress.qurbaniShares && (
              <div className="p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-sidqly-navy mb-1">Qurbani Shares Calculator</p>
                <p className="text-lg font-extrabold text-sidqly-green-deep mb-1">
                  {personalProgress.qurbaniShares.shares} Shares
                </p>
                <p className="text-xs text-gray-500">{personalProgress.qurbaniShares.participants} participants recorded</p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 bg-sidqly-ivory rounded-2xl border border-dashed border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-3">
              {t(
                'islamicTools.dashboard.noProgressData',
                'No local checklist or progress saved yet. Use our planners to start tracking.'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to={getLocalizedPath('/ramadan-planner')}
                className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-sidqly-navy transition-colors"
              >
                Open Ramadan Planner
              </Link>
              <Link
                to={getLocalizedPath('/eid-qurbani-planner')}
                className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-sidqly-navy transition-colors"
              >
                Open Qurbani Planner
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Quick Tools Access Grid */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-sidqly-navy mb-6">
          {t('islamicTools.dashboard.quickActions', 'Quick Tool Access')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {quickTools.map((tool) => {
            const title = t(tool.nameKey as any);
            return (
              <Link
                key={tool.path}
                to={getLocalizedPath(tool.path)}
                className="p-4 rounded-2xl border border-gray-100 bg-sidqly-ivory hover:bg-white hover:border-sidqly-green-emerald hover:shadow-md transition-all flex flex-col items-start gap-2 group"
              >
                <div className="p-2 bg-white group-hover:bg-sidqly-green-deep group-hover:text-white rounded-xl text-sidqly-green-deep transition-colors shadow-xs">
                  {tool.icon}
                </div>
                <span className="text-xs font-bold text-sidqly-navy leading-snug group-hover:text-sidqly-green-deep transition-colors">
                  {title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IslamicDailyDashboard;
