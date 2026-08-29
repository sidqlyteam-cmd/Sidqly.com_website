import React, { useState, useEffect } from 'react';
import { getApproximateMoonPhase, type MoonPhaseResult } from '../../lib/moonPhase';
import { useLanguage } from '../../i18n/LanguageContext';
import { Moon, AlertCircle } from 'lucide-react';

const MoonPhaseCard: React.FC = () => {
  const { t, dir } = useLanguage();
  const [phase, setPhase] = useState<MoonPhaseResult | null>(null);

  useEffect(() => {
    setPhase(getApproximateMoonPhase());
    const timer = setInterval(() => {
      setPhase(getApproximateMoonPhase());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, []);

  if (!phase) return null;

  const localizedPhaseLabel = t(`islamicTools.moonPhase.phases.${phase.phaseKey}`, phase.phaseLabel);
  const localizedNextPhaseLabel = phase.nextPhaseKey
    ? t(`islamicTools.moonPhase.phases.${phase.nextPhaseKey}`, phase.nextPhaseLabel || '')
    : '';

  const illuminationPct = Math.round(phase.illumination * 100);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-sidqly-navy p-6 rounded-2xl text-white shadow-lg relative overflow-hidden" dir={dir}>
      <div className={`absolute -top-10 ${dir === 'rtl' ? '-left-10' : '-right-10'} opacity-10 pointer-events-none`}>
        <Moon size={150} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="text-sidqly-green-soft w-6 h-6 shrink-0" />
          <h3 className="text-lg font-bold">{t('islamicTools.moonPhase.title')}</h3>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
            {t('islamicTools.moonPhase.currentPhase')} ({t('islamicTools.moonPhase.astronomicalEstimate')})
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{localizedPhaseLabel}</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-300">
            <span>{t('islamicTools.moonPhase.lunarAge')}: ~{phase.ageDays} {t('islamicTools.moonPhase.days')}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500 hidden sm:inline-block"></span>
            <span>{t('islamicTools.moonPhase.illumination')}: {illuminationPct}%</span>
          </div>
        </div>

        {localizedNextPhaseLabel && phase.nextPhaseDaysAway !== undefined && (
          <div className="bg-white/10 p-3 rounded-lg border border-white/10 text-xs text-gray-300 mb-4">
            <strong>{t('islamicTools.moonPhase.nextPhase')}:</strong> {localizedNextPhaseLabel} (~{phase.nextPhaseDaysAway} {t('islamicTools.moonPhase.days')})
          </div>
        )}

        <div className="flex items-start gap-2 text-[10px] text-gray-400 opacity-80">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-yellow-400" />
          <p>{t('islamicTools.moonPhase.astronomicalDisclaimer')}</p>
        </div>
      </div>
    </div>
  );
};

export default MoonPhaseCard;
