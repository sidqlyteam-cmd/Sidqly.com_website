import React, { useState, useEffect } from 'react';
import { getIslamicDateInfo, HIJRI_MONTHS, type IslamicDateInfo } from '../../lib/islamicCalendar';
import { useLanguage } from '../../i18n/LanguageContext';
import { Calendar } from 'lucide-react';

const MONTH_KEYS = [
  'muharram', 'safar', 'rabiAlAwwal', 'rabiAlThani',
  'jumadaAlAwwal', 'jumadaAlThani', 'rajab', 'shaban',
  'ramadan', 'shawwal', 'dhulQadah', 'dhulHijjah'
];

const IslamicDateWidget: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [islamicDate, setIslamicDate] = useState<IslamicDateInfo | null>(null);

  useEffect(() => {
    setIslamicDate(getIslamicDateInfo());
    const timer = setInterval(() => {
      setIslamicDate(getIslamicDateInfo());
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  if (!islamicDate) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32" dir={dir}>
        <p className="text-gray-500 text-sm">{t('islamicTools.calendar.title')}</p>
      </div>
    );
  }

  const monthKey = MONTH_KEYS[islamicDate.hijriMonthIndex];
  const localizedHijriMonth = monthKey
    ? t(`islamicTools.calendar.months.${monthKey}`, HIJRI_MONTHS[islamicDate.hijriMonthIndex])
    : islamicDate.hijriMonthName;

  const formattedGregorian = islamicDate.gregorianDate.toLocaleDateString(
    language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100" dir={dir}>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-sidqly-green-deep/10 p-2 rounded-lg">
          <Calendar className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-sidqly-navy">{t('islamicTools.calendar.todaysDate')}</h3>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-50">
        <div className="text-2xl sm:text-3xl font-extrabold text-sidqly-green-deep mb-1">
          {islamicDate.hijriDay} {localizedHijriMonth} {islamicDate.hijriYear} <span className="text-sm text-gray-400 font-normal">AH</span>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          {formattedGregorian}
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-400 bg-sidqly-ivory p-3 rounded-lg">
        <span className="font-bold text-sidqly-green-emerald shrink-0">{t('islamicTools.calendar.estimated')}:</span>
        <p>{t('islamicTools.calendar.planningDisclaimer')}</p>
      </div>
    </div>
  );
};

export default IslamicDateWidget;
