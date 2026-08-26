import React, { useState, useEffect } from 'react';
import { getEidQurbaniSeasonInfo, type SeasonalEventDetails } from '../../lib/seasonalDates';
import { Gift, AlertCircle, ArrowRight, CheckCircle2, RotateCcw, ShieldCheck, Users, PieChart, CheckSquare, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const CHECKLIST_STORAGE_KEY = 'sidqly_qurbani_checklist';
const SHARES_STORAGE_KEY = 'sidqly_qurbani_shares';

interface QurbaniChecklistState {
  qurbaniSelection: boolean;
  participantPlanning: boolean;
  paymentConfirmation: boolean;
  slaughterConfirmation: boolean;
  distribution: boolean;
  recipientConfirmation: boolean;
  proofDocumentation: boolean;
  donorUpdate: boolean;
  certificateCompletion: boolean;
}

const DEFAULT_CHECKLIST: QurbaniChecklistState = {
  qurbaniSelection: false,
  participantPlanning: false,
  paymentConfirmation: false,
  slaughterConfirmation: false,
  distribution: false,
  recipientConfirmation: false,
  proofDocumentation: false,
  donorUpdate: false,
  certificateCompletion: false,
};

interface ShareTrackingState {
  participants: number;
  shares: number;
}

const DEFAULT_SHARES: ShareTrackingState = {
  participants: 7,
  shares: 7,
};

const EidQurbaniPlanner: React.FC = () => {
  const { language, dir, t } = useLanguage();

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [seasonInfo, setSeasonInfo] = useState<SeasonalEventDetails>(() =>
    getEidQurbaniSeasonInfo(new Date(), isConfirmed)
  );

  const [checklist, setChecklist] = useState<QurbaniChecklistState>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CHECKLIST, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_CHECKLIST;
  });

  const [shareData, setShareData] = useState<ShareTrackingState>(() => {
    try {
      const saved = localStorage.getItem(SHARES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          typeof parsed.participants === 'number' &&
          !isNaN(parsed.participants) &&
          parsed.participants >= 0 &&
          typeof parsed.shares === 'number' &&
          !isNaN(parsed.shares) &&
          parsed.shares >= 0
        ) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_SHARES;
  });

  const [shareError, setShareError] = useState<string | null>(null);

  useEffect(() => {
    setSeasonInfo(getEidQurbaniSeasonInfo(new Date(), isConfirmed));
  }, [isConfirmed]);

  useEffect(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checklist));
    } catch {
      // Ignore
    }
  }, [checklist]);

  useEffect(() => {
    try {
      localStorage.setItem(SHARES_STORAGE_KEY, JSON.stringify(shareData));
    } catch {
      // Ignore
    }
  }, [shareData]);

  const toggleCheck = (key: keyof QurbaniChecklistState) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetChecklist = () => {
    setChecklist(DEFAULT_CHECKLIST);
    try {
      localStorage.removeItem(CHECKLIST_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleParticipantChange = (val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0) {
      setShareError(t('islamicTools.eidQurbani.invalidParticipantError'));
      setShareData((prev) => ({ ...prev, participants: 0 }));
    } else {
      setShareError(null);
      setShareData((prev) => ({ ...prev, participants: num }));
    }
  };

  const handleSharesChange = (val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0) {
      setShareError(t('islamicTools.eidQurbani.invalidParticipantError'));
      setShareData((prev) => ({ ...prev, shares: 0 }));
    } else {
      setShareError(null);
      setShareData((prev) => ({ ...prev, shares: num }));
    }
  };

  const resetShares = () => {
    setShareData(DEFAULT_SHARES);
    setShareError(null);
    try {
      localStorage.removeItem(SHARES_STORAGE_KEY);
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
            <Gift className="text-sidqly-green-deep w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sidqly-navy">{t('islamicTools.eidQurbani.title')}</h2>
            <p className="text-sm text-gray-500">{t('islamicTools.eidQurbani.subtitle')}</p>
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
          <span>{isConfirmed ? t('islamicTools.eidQurbani.officiallyConfirmed') : t('islamicTools.eidQurbani.estimatedDate')}</span>
        </button>
      </div>

      {/* Hero Countdown Box */}
      {seasonInfo.phase === 'during' ? (
        <div className="bg-sidqly-navy rounded-2xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
          <div>
            <div className="inline-block bg-sidqly-green-deep/40 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-2 text-sidqly-green-soft border border-sidqly-green-soft/30">
              {t('islamicTools.eidQurbani.eidActiveTitle')}
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-amber-300 mb-1">{t('islamicTools.eidQurbani.eidActiveSubtitle')}</p>
            <p className="text-xs text-white/70">
              AH {seasonInfo.hijriYear} — 10-12 Dhul Hijjah
            </p>
          </div>
          <div className="bg-white/10 px-6 py-4 rounded-xl text-center shrink-0 border border-white/10">
            <span className="block text-3xl font-extrabold text-amber-300">Active</span>
            <span className="text-xs text-white/80 uppercase">Qurbani Season</span>
          </div>
        </div>
      ) : (
        <div className="bg-sidqly-navy rounded-2xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
          <div>
            <p className="text-xs sm:text-sm text-sidqly-green-soft font-bold uppercase tracking-widest mb-1">
              {t('islamicTools.eidQurbani.targetPlanningWindow')} ({isConfirmed ? t('islamicTools.eidQurbani.officiallyConfirmed') : t('islamicTools.eidQurbani.estimatedDate')})
            </p>
            <p className="text-xl sm:text-2xl font-bold">{formattedDate} (AH {seasonInfo.hijriYear})</p>
          </div>
          <div className="bg-white/10 px-6 py-4 rounded-xl text-center shrink-0 border border-white/10">
            <span className="block text-3xl sm:text-4xl font-extrabold">{seasonInfo.daysRemaining}</span>
            <span className="text-xs text-white/70 uppercase">{t('islamicTools.eidQurbani.daysToPrepare')}</span>
          </div>
        </div>
      )}

      {/* Share Tracking Widget */}
      <div className="bg-sidqly-ivory/80 border border-gray-200 rounded-2xl p-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-sidqly-green-deep" />
            <h3 className="font-bold text-sidqly-navy text-sm sm:text-base">{t('islamicTools.eidQurbani.shareTrackingTitle')}</h3>
          </div>
          <button
            onClick={resetShares}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-sidqly-navy transition-colors cursor-pointer"
            title={t('islamicTools.eidQurbani.reset')}
          >
            <RotateCcw size={12} />
            <span>{t('islamicTools.eidQurbani.reset')}</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">{t('islamicTools.eidQurbani.participantCountLabel')}</label>
            <input
              type="number"
              min="0"
              value={shareData.participants}
              onChange={(e) => handleParticipantChange(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sidqly-green-deep"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">{t('islamicTools.eidQurbani.sharesLabel')}</label>
            <input
              type="number"
              min="0"
              value={shareData.shares}
              onChange={(e) => handleSharesChange(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sidqly-green-deep"
            />
          </div>
        </div>

        {shareError && <p className="text-xs text-red-600 mb-3">{shareError}</p>}

        <div className="flex flex-wrap items-center justify-between bg-white border border-gray-100 p-4 rounded-xl text-xs sm:text-sm gap-2">
          <div className="flex items-center gap-2">
            <PieChart size={16} className="text-sidqly-green-emerald" />
            <span className="text-gray-600">
              {t('islamicTools.eidQurbani.sharesLabel').split(' ')[0]}: <strong className="text-sidqly-navy">{shareData.shares}</strong> | {t('islamicTools.eidQurbani.participantCountLabel')}: <strong className="text-sidqly-navy">{shareData.participants}</strong>
            </span>
          </div>
          <span className="font-bold text-sidqly-green-deep bg-emerald-50 px-3 py-1 rounded-lg">
            {Math.ceil(shareData.shares / 7)} Large Animals (Cattle) / {shareData.shares} Small Animals (Goat)
          </span>
        </div>
      </div>

      {/* Operational Checklist */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-8 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckSquare size={18} className="text-sidqly-green-deep" />
            <h3 className="font-bold text-sidqly-navy text-sm sm:text-base">{t('islamicTools.eidQurbani.operationalChecklistTitle')}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 font-semibold">
              {completedCount} / {totalItems} {t('islamicTools.eidQurbani.completed')} ({progressPercent}%)
            </span>
            <button
              onClick={resetChecklist}
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-sidqly-navy transition-colors cursor-pointer"
              title={t('islamicTools.eidQurbani.reset')}
            >
              <RotateCcw size={12} />
              <span>{t('islamicTools.eidQurbani.reset')}</span>
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

        <div className="grid md:grid-cols-2 gap-6">
          {/* Readiness */}
          <div>
            <h4 className="font-bold text-sm text-sidqly-navy flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <CheckCircle2 size={16} className="text-sidqly-green-deep" /> {t('islamicTools.eidQurbani.operationalReadiness')}
            </h4>
            <div className="space-y-2.5">
              {[
                { key: 'qurbaniSelection', label: t('islamicTools.eidQurbani.qurbaniSelection') },
                { key: 'participantPlanning', label: t('islamicTools.eidQurbani.participantPlanning') },
                { key: 'paymentConfirmation', label: t('islamicTools.eidQurbani.paymentConfirmation') },
                { key: 'slaughterConfirmation', label: t('islamicTools.eidQurbani.slaughterConfirmation') },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleCheck(item.key as keyof QurbaniChecklistState)}
                  className={`w-full flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    checklist[item.key as keyof QurbaniChecklistState]
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {checklist[item.key as keyof QurbaniChecklistState] ? (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  ) : (
                    <Square size={16} className="text-gray-400 shrink-0" />
                  )}
                  <span className={checklist[item.key as keyof QurbaniChecklistState] ? 'line-through text-gray-500' : ''}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Execution & Reporting */}
          <div>
            <h4 className="font-bold text-sm text-sidqly-navy flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <CheckCircle2 size={16} className="text-sidqly-green-deep" /> {t('islamicTools.eidQurbani.executionReporting')}
            </h4>
            <div className="space-y-2.5">
              {[
                { key: 'distribution', label: t('islamicTools.eidQurbani.distribution') },
                { key: 'recipientConfirmation', label: t('islamicTools.eidQurbani.recipientConfirmation') },
                { key: 'proofDocumentation', label: t('islamicTools.eidQurbani.proofDocumentation') },
                { key: 'donorUpdate', label: t('islamicTools.eidQurbani.donorUpdate') },
                { key: 'certificateCompletion', label: t('islamicTools.eidQurbani.certificateCompletion') },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleCheck(item.key as keyof QurbaniChecklistState)}
                  className={`w-full flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    checklist[item.key as keyof QurbaniChecklistState]
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {checklist[item.key as keyof QurbaniChecklistState] ? (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  ) : (
                    <Square size={16} className="text-gray-400 shrink-0" />
                  )}
                  <span className={checklist[item.key as keyof QurbaniChecklistState] ? 'line-through text-gray-500' : ''}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 border-t border-gray-100 pt-6">
        <Link
          to="/modules/qurbani-management-software"
          className="inline-flex items-center justify-between w-full sm:w-auto px-6 py-3 rounded-xl bg-sidqly-ivory text-sidqly-navy font-bold hover:bg-gray-100 transition-colors gap-2 text-xs sm:text-sm"
        >
          {t('islamicTools.eidQurbani.exploreModule')} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
        <Link
          to="/book-demo"
          className="inline-flex items-center justify-between w-full sm:w-auto px-6 py-3 rounded-xl bg-sidqly-green-deep text-white font-bold hover:shadow-lg transition-all gap-2 text-xs sm:text-sm"
        >
          {t('islamicTools.eidQurbani.requestDemo')} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 text-xs text-yellow-800 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>{t('islamicTools.eidQurbani.disclaimerText')}</p>
      </div>
    </div>
  );
};

export default EidQurbaniPlanner;
