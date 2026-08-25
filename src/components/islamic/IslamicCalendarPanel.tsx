import React, { useState } from 'react';
import { getIslamicDateInfo, getIslamicEvent, HIJRI_MONTHS } from '../../lib/islamicCalendar';
import { useLanguage } from '../../i18n/LanguageContext';
import { CalendarDays, AlertCircle, Heart, Gift, Activity, Clock, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const MONTH_KEYS = [
  'muharram', 'safar', 'rabiAlAwwal', 'rabiAlThani',
  'jumadaAlAwwal', 'jumadaAlThani', 'rajab', 'shaban',
  'ramadan', 'shawwal', 'dhulQadah', 'dhulHijjah'
];

const IslamicCalendarPanel: React.FC = () => {
  const { t, language, dir, getLocalizedPath } = useLanguage();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const currentIslamic = getIslamicDateInfo(today);
  const selectedIslamic = selectedDate ? getIslamicDateInfo(selectedDate) : null;
  const eventInfo = selectedIslamic ? getIslamicEvent(selectedIslamic.hijriMonthIndex, selectedIslamic.hijriDay) : null;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getLocalizedHijriMonthName = (monthIndex: number): string => {
    const key = MONTH_KEYS[monthIndex];
    if (key) {
      return t(`islamicTools.calendar.months.${key}`, HIJRI_MONTHS[monthIndex]);
    }
    return HIJRI_MONTHS[monthIndex] || '';
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  // Generate next 12 Gregorian months with Hijri equivalents
  const upcomingMonths = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date();
    d.setMonth(d.getMonth() + i);
    d.setDate(15);
    const iDate = getIslamicDateInfo(d);
    return {
      gMonth: d.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US', { month: 'long', year: 'numeric' }),
      iMonth: iDate ? getLocalizedHijriMonthName(iDate.hijriMonthIndex) : '',
      iYear: iDate ? iDate.hijriYear : ''
    };
  });

  const isRtl = dir === 'rtl';

  return (
    <div className="space-y-8" dir={dir}>
      {/* Current Overview */}
      <div className="bg-sidqly-navy rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} p-8 opacity-10 pointer-events-none`}>
          <CalendarDays size={120} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t('islamicTools.calendar.title')}</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">{t('islamicTools.calendar.subtitle')}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
              <p className="text-xs sm:text-sm text-sidqly-green-soft font-bold mb-1">{t('islamicTools.calendar.gregorianDate')}</p>
              <p className="text-lg sm:text-xl font-bold">
                {today.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
              <p className="text-xs sm:text-sm text-sidqly-green-soft font-bold mb-1">{t('islamicTools.calendar.hijriDate')} ({t('islamicTools.calendar.estimated')})</p>
              <p className="text-lg sm:text-xl font-bold">
                {currentIslamic?.hijriDay} {getLocalizedHijriMonthName(currentIslamic?.hijriMonthIndex ?? 0)} {currentIslamic?.hijriYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Grid & Selected Details */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-sidqly-navy">
              {currentDate.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={isRtl ? handleNextMonth : handlePrevMonth}
                aria-label={t('islamicTools.calendar.previousMonth')}
                className="p-2 bg-sidqly-ivory hover:bg-gray-200 rounded-lg text-sidqly-navy transition-colors"
              >
                <ChevronLeft size={20} className={isRtl ? 'rotate-180' : ''} />
              </button>
              <button
                onClick={isRtl ? handlePrevMonth : handleNextMonth}
                aria-label={t('islamicTools.calendar.nextMonth')}
                className="p-2 bg-sidqly-ivory hover:bg-gray-200 rounded-lg text-sidqly-navy transition-colors"
              >
                <ChevronRight size={20} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs font-bold text-gray-500 mb-2">
            {(language === 'ar'
              ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
              : language === 'ur'
              ? ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ']
              : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            ).map((d) => (
              <div key={d} className="truncate">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {blanks.map((b) => (
              <div key={`blank-${b}`} className="aspect-square"></div>
            ))}
            {days.map((day) => {
              const iterDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
              const isToday = iterDate.toDateString() === today.toDateString();
              const isSelected = selectedDate?.toDateString() === iterDate.toDateString();
              const iterIslamic = getIslamicDateInfo(iterDate);

              let bgColor = 'bg-gray-50 hover:bg-sidqly-green-soft/20';
              if (isSelected) bgColor = 'bg-sidqly-green-deep text-white shadow-md';
              else if (isToday) bgColor = 'bg-sidqly-green-emerald text-white shadow-md';
              else if (iterIslamic && (iterIslamic.hijriMonthIndex === 8 || iterIslamic.hijriMonthIndex === 11)) {
                bgColor = 'bg-yellow-50 hover:bg-yellow-100 text-yellow-900 border border-yellow-200';
              }

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(iterDate)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 transition-all border border-transparent ${bgColor}`}
                >
                  <span className={`text-xs sm:text-sm font-bold ${isToday || isSelected ? 'text-white' : 'text-sidqly-navy'}`}>
                    {day}
                  </span>
                  {iterIslamic && (
                    <span className={`text-[8px] sm:text-[9px] truncate w-full px-1 text-center ${isToday || isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                      {iterIslamic.hijriDay} {getLocalizedHijriMonthName(iterIslamic.hijriMonthIndex).substring(0, 4)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Details */}
        <div className="bg-sidqly-ivory rounded-3xl border border-gray-100 p-6 flex flex-col">
          <h3 className="text-lg font-bold text-sidqly-navy mb-6 border-b border-gray-200 pb-4">
            {t('islamicTools.calendar.selectedDateDetails')}
          </h3>
          {selectedIslamic && selectedDate ? (
            <div className="flex-grow space-y-4">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                  {t('islamicTools.calendar.gregorianDate')}
                </p>
                <p className="font-medium text-sidqly-navy">
                  {selectedDate.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                  {t('islamicTools.calendar.hijriDate')} ({t('islamicTools.calendar.estimated')})
                </p>
                <p className="font-bold text-sidqly-green-deep text-lg">
                  {selectedIslamic.hijriDay} {getLocalizedHijriMonthName(selectedIslamic.hijriMonthIndex)} {selectedIslamic.hijriYear}
                </p>
              </div>

              {eventInfo && (
                <div className="bg-yellow-100/50 p-4 rounded-xl border border-yellow-200">
                  <div className="flex gap-2 items-start text-yellow-800">
                    <Info size={16} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">
                        {t(`islamicTools.calendar.events.${eventInfo.nameKey}`, eventInfo.defaultTitle)}
                      </p>
                      <span className="inline-block mt-1 text-[10px] uppercase font-bold px-2 py-0.5 bg-yellow-200 text-yellow-900 rounded">
                        {t('islamicTools.calendar.estimated')}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">
                  {t('common.learnMore')}
                </p>
                <div className="flex flex-col gap-2">
                  {selectedIslamic.hijriMonthIndex === 8 ? (
                    <Link
                      to={getLocalizedPath('/ramadan-planner')}
                      className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors"
                    >
                      {t('islamicTools.calendar.ramadanPlannerTitle')} →
                    </Link>
                  ) : selectedIslamic.hijriMonthIndex === 11 ? (
                    <Link
                      to={getLocalizedPath('/eid-qurbani-planner')}
                      className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors"
                    >
                      {t('islamicTools.calendar.eidPlannerTitle')} →
                    </Link>
                  ) : (
                    <Link
                      to={getLocalizedPath('/zakat-calculator')}
                      className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors"
                    >
                      {t('islamicTools.zakat.title')} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center text-gray-400 text-sm">
              {t('islamicTools.calendar.selectDatePrompt')}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800">
        <AlertCircle size={20} className="shrink-0 mt-0.5" />
        <p>{t('islamicTools.calendar.planningDisclaimer')}</p>
      </div>

      {/* Seasonal Planning Checklists */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-sidqly-navy mb-6">
          {t('islamicTools.calendar.importantDates')}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to={getLocalizedPath('/ramadan-planner')}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group"
          >
            <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shrink-0">
              <Heart size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">{t('islamicTools.calendar.ramadanPlannerTitle')}</h4>
              <p className="text-sm text-gray-500 mt-1">{t('islamicTools.calendar.ramadanPlannerDesc')}</p>
            </div>
          </Link>

          <Link
            to={getLocalizedPath('/eid-qurbani-planner')}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group"
          >
            <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shrink-0">
              <Gift size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">{t('islamicTools.calendar.eidPlannerTitle')}</h4>
              <p className="text-sm text-gray-500 mt-1">{t('islamicTools.calendar.eidPlannerDesc')}</p>
            </div>
          </Link>

          <Link
            to={getLocalizedPath('/hajj-countdown')}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group"
          >
            <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">{t('islamicTools.calendar.hajjCountdownTitle')}</h4>
              <p className="text-sm text-gray-500 mt-1">{t('islamicTools.calendar.hajjCountdownDesc')}</p>
            </div>
          </Link>

          <Link
            to={getLocalizedPath('/zakat-calculator')}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group"
          >
            <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shrink-0">
              <Activity size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">{t('islamicTools.calendar.zakatPlanningTitle')}</h4>
              <p className="text-sm text-gray-500 mt-1">{t('islamicTools.calendar.zakatPlanningDesc')}</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Upcoming Year Estimate */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-sidqly-navy mb-6">{t('islamicTools.calendar.twelveMonthEstimate')}</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-left text-sm" dir={dir}>
            <thead className="bg-sidqly-ivory border-b border-gray-100 text-gray-600">
              <tr>
                <th className={`p-4 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('islamicTools.calendar.gregorianDate')}</th>
                <th className={`p-4 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('islamicTools.calendar.estimatedHijriOverlap')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
              {upcomingMonths.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4">{m.gMonth}</td>
                  <td className="p-4 text-sidqly-green-deep">{m.iMonth} {m.iYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendarPanel;
