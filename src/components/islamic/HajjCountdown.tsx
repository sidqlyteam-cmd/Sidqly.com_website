import React, { useState, useEffect } from 'react';
import {
  getHajjSeasonInfo,
  getHajjPreparationTimeline,
  type SeasonalEventDetails,
} from '../../lib/seasonalDates';
import { Compass, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const HajjCountdown: React.FC = () => {
  const { language, dir, t } = useLanguage();

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [seasonInfo, setSeasonInfo] = useState<SeasonalEventDetails>(() =>
    getHajjSeasonInfo(new Date(), isConfirmed)
  );

  useEffect(() => {
    setSeasonInfo(getHajjSeasonInfo(new Date(), isConfirmed));
  }, [isConfirmed]);

  const timelineSteps = getHajjPreparationTimeline(seasonInfo.targetDate);

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
            <Compass className="text-sidqly-green-deep w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sidqly-navy">{t('islamicTools.hajj.title')}</h2>
            <p className="text-sm text-gray-500">{t('islamicTools.hajj.subtitle')}</p>
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
          <span>{isConfirmed ? t('islamicTools.hajj.officiallyConfirmed') : t('islamicTools.hajj.estimatedDate')}</span>
        </button>
      </div>

      {/* Hero Box */}
      {seasonInfo.phase === 'during' ? (
        <div className="bg-gradient-to-br from-sidqly-navy to-gray-900 rounded-2xl p-6 sm:p-8 text-white mb-8 text-center shadow-inner">
          <div className="inline-block bg-sidqly-green-deep/40 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3 text-sidqly-green-soft border border-sidqly-green-soft/30">
            {t('islamicTools.hajj.activeSeasonTitle')}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-2">{t('islamicTools.hajj.activeSeasonSubtitle')}</h3>
          <p className="text-sm text-gray-300">
            AH {seasonInfo.hijriYear} — 8 to 13 Dhul Hijjah
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-sidqly-navy to-gray-900 rounded-2xl p-6 sm:p-8 text-white mb-8 text-center shadow-inner">
          <p className="text-xs sm:text-sm text-sidqly-green-soft font-bold uppercase tracking-widest mb-3">
            {t('islamicTools.hajj.upcomingTitle')} ({isConfirmed ? t('islamicTools.hajj.officiallyConfirmed') : t('islamicTools.hajj.estimatedDate')})
          </p>
          <div className="flex justify-center items-end gap-2 mb-3">
            <span className="text-5xl sm:text-6xl font-extrabold text-white">{seasonInfo.daysRemaining}</span>
            <span className="text-lg text-gray-400 mb-2">{t('islamicTools.hajj.daysRemaining')}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">
            {formattedDate} (AH {seasonInfo.hijriYear})
          </p>
        </div>
      )}

      {/* Preparation Timeline */}
      <div className="space-y-4 mb-8">
        <h3 className="font-bold text-sidqly-navy text-base sm:text-lg">{t('islamicTools.hajj.timelineTitle')}</h3>
        <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {timelineSteps.map((step, i) => {
            const timeLabel = t(`islamicTools.hajj.${step.timeLabelKey}`);
            const actionLabel = t(`islamicTools.hajj.${step.actionKey}`);
            const stepFormattedDate = step.targetDate.toLocaleDateString(
              language === 'ar' ? 'ar-SA' : language === 'ur' ? 'ur-PK' : 'en-US',
              { month: 'short', day: 'numeric', year: 'numeric' }
            );

            return (
              <li key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sidqly-ivory group-hover:bg-sidqly-green-deep group-hover:text-white text-sidqly-green-deep shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                  <span className="text-sm font-bold">{i + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-xs font-bold text-sidqly-green-soft">{timeLabel}</p>
                    <span className="text-[11px] text-gray-400 font-medium">{stepFormattedDate}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">{actionLabel}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Quick Action Links */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Link
          to="/modules/qurbani-management-software"
          className="flex items-center justify-between p-4 rounded-xl bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100 transition-colors"
        >
          <span className="font-bold text-xs sm:text-sm">{t('islamicTools.hajj.qurbaniWorkflows')}</span>
          <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
        <Link
          to="/book-demo"
          className="flex items-center justify-between p-4 rounded-xl bg-sidqly-green-deep text-white hover:shadow-md transition-all"
        >
          <span className="font-bold text-xs sm:text-sm">{t('islamicTools.hajj.requestOrganization')}</span>
          <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-gray-500" />
        <p>{t('islamicTools.hajj.disclaimerText')}</p>
      </div>
    </div>
  );
};

export default HajjCountdown;
