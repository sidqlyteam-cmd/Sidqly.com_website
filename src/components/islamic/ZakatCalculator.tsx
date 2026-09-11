import React, { useState, useEffect } from 'react';
import { calculateZakatEstimate, type ZakatState, type ZakatResult } from '../../lib/zakatCalculator';
import { useLanguage } from '../../i18n/LanguageContext';
import { Calculator, AlertCircle, Info, RefreshCw } from 'lucide-react';

const NISAB_DEFAULTS = {
  gold: 7000,   // Estimated baseline threshold for 87.48g gold
  silver: 600   // Estimated baseline threshold for 612.36g silver
};

const INITIAL_STATE: ZakatState = {
  cash: 0,
  bankBalance: 0,
  goldValue: 0,
  silverValue: 0,
  businessInventory: 0,
  receivables: 0,
  investments: 0,
  otherAssets: 0,
  shortTermLiabilities: 0,
  manualNisabValue: NISAB_DEFAULTS.gold,
  nisabMethod: 'gold'
};

const ZakatCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [state, setState] = useState<ZakatState>(INITIAL_STATE);
  const [result, setResult] = useState<ZakatResult | null>(null);

  useEffect(() => {
    setResult(calculateZakatEstimate(state));
  }, [state]);

  const handleChange = (field: keyof ZakatState, value: string) => {
    if (field === 'nisabMethod') {
      const method = value as 'gold' | 'silver' | 'custom';
      let defaultVal = state.manualNisabValue;
      if (method === 'gold') defaultVal = NISAB_DEFAULTS.gold;
      if (method === 'silver') defaultVal = NISAB_DEFAULTS.silver;
      setState(prev => ({ ...prev, nisabMethod: method, manualNisabValue: defaultVal }));
      return;
    }

    const numValue = value === '' ? 0 : parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setState(prev => ({ ...prev, [field]: numValue }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '0') {
      e.target.value = '';
    }
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto w-full">
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl sm:text-3xl font-bold text-sidqly-navy mb-2">{t('islamicTools.zakat.title')}</h2>
         <p className="text-gray-500 text-sm">{t('islamicTools.zakat.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Col: Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100">
             <h3 className="text-base sm:text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">
               {t('islamicTools.zakat.nisabSectionTitle')}
             </h3>
             <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="nisabMethod"
                      value="gold"
                      checked={state.nisabMethod === 'gold'}
                      onChange={(e) => handleChange('nisabMethod', e.target.value)}
                      className="text-sidqly-green-emerald focus:ring-sidqly-green-emerald"
                    />
                    <span>{t('islamicTools.zakat.goldNisab')}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="nisabMethod"
                      value="silver"
                      checked={state.nisabMethod === 'silver'}
                      onChange={(e) => handleChange('nisabMethod', e.target.value)}
                      className="text-sidqly-green-emerald focus:ring-sidqly-green-emerald"
                    />
                    <span>{t('islamicTools.zakat.silverNisab')}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="nisabMethod"
                      value="custom"
                      checked={state.nisabMethod === 'custom'}
                      onChange={(e) => handleChange('nisabMethod', e.target.value)}
                      className="text-sidqly-green-emerald focus:ring-sidqly-green-emerald"
                    />
                    <span>{t('islamicTools.zakat.customNisab')}</span>
                  </label>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     {t('islamicTools.zakat.currentNisabValue')}
                   </label>
                   <div className="relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                     <input
                       type="number"
                       min="0"
                       value={state.manualNisabValue || ''}
                       onFocus={handleFocus}
                       onChange={(e) => handleChange('manualNisabValue', e.target.value)}
                       placeholder="Enter current threshold"
                       className="w-full rounded-xl border-gray-200 border py-3 pl-8 pr-3 text-sm focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                     />
                   </div>
                   <p className="text-xs text-gray-500 mt-2 flex items-start gap-1">
                     <Info size={14} className="shrink-0 mt-0.5 text-sidqly-green-deep" />
                     <span>{t('islamicTools.zakat.nisabNote')}</span>
                   </p>
                </div>
             </div>
          </div>

          <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100">
             <h3 className="text-base sm:text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">
               {t('islamicTools.zakat.assetsSectionTitle')}
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { key: 'cash', labelKey: 'islamicTools.zakat.cash' },
                 { key: 'bankBalance', labelKey: 'islamicTools.zakat.bankBalance' },
                 { key: 'goldValue', labelKey: 'islamicTools.zakat.gold' },
                 { key: 'silverValue', labelKey: 'islamicTools.zakat.silver' },
                 { key: 'businessInventory', labelKey: 'islamicTools.zakat.businessAssets' },
                 { key: 'receivables', labelKey: 'islamicTools.zakat.receivables' },
                 { key: 'investments', labelKey: 'islamicTools.zakat.investments' },
                 { key: 'otherAssets', labelKey: 'islamicTools.zakat.otherAssets' }
               ].map((field) => (
                 <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t(field.labelKey)}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                      <input
                        type="number"
                        min="0"
                        value={state[field.key as keyof ZakatState] || ''}
                        onFocus={handleFocus}
                        onChange={(e) => handleChange(field.key as keyof ZakatState, e.target.value)}
                        className="w-full rounded-xl border-gray-200 border py-2.5 pl-8 pr-3 text-sm focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                      />
                    </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100">
             <h3 className="text-base sm:text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">
               {t('islamicTools.zakat.liabilitiesSectionTitle')}
             </h3>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.zakat.liabilities')}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    value={state.shortTermLiabilities || ''}
                    onFocus={handleFocus}
                    onChange={(e) => handleChange('shortTermLiabilities', e.target.value)}
                    className="w-full rounded-xl border-gray-200 border py-2.5 pl-8 pr-3 text-sm focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                  />
                </div>
             </div>
          </div>

          <div className="flex justify-end">
             <button
               onClick={handleReset}
               className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-sidqly-navy hover:underline transition-all"
             >
               <RefreshCw size={14} />
               {t('islamicTools.reset')}
             </button>
          </div>
        </div>

        {/* Right Col: Detailed Result Summary */}
        <div className="lg:col-span-1">
          <div className="bg-sidqly-navy text-white p-6 rounded-3xl sticky top-8 shadow-xl space-y-4">
             <h3 className="text-lg font-bold border-b border-white/20 pb-4">{t('islamicTools.zakat.estimatedSummary')}</h3>

             {state.manualNisabValue <= 0 ? (
               <div className="text-sm text-gray-300 italic text-center py-8">
                 {t('islamicTools.zakat.enterNisabPrompt')}
               </div>
             ) : result && (
               <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>{t('islamicTools.zakat.totalAssets')}</span>
                    <span className="font-semibold">${result.totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>{t('islamicTools.zakat.deductibleLiabilities')}</span>
                    <span className="font-semibold">-${result.totalLiabilities.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-bold border-t border-white/20 pt-3">
                    <span>{t('islamicTools.zakat.netZakatableWealth')}</span>
                    <span>${result.netZakatableWealth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>

                 <div className="flex justify-between items-center text-xs text-gray-300 pt-1">
                    <span>{t('islamicTools.zakat.nisabThreshold')}</span>
                    <span>${result.nisabThreshold.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
                 <div className="flex justify-between items-center text-xs text-gray-300">
                    <span>{t('islamicTools.zakat.zakatRate')}</span>
                    <span>2.5%</span>
                 </div>

                 <div className="mt-6 pt-6 border-t border-white/20">
                    {result.isEligible ? (
                      <div className="text-center">
                         <span className="inline-block px-3 py-1 bg-sidqly-green-emerald/20 text-sidqly-green-soft text-xs font-bold rounded-full mb-3">
                           {t('islamicTools.zakat.eligibleForZakat')}
                         </span>
                         <p className="text-xs text-gray-300 mb-1">{t('islamicTools.zakat.estimatedZakat')}</p>
                         <p className="text-3xl font-extrabold text-white">
                           ${result.estimatedZakat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                         </p>
                      </div>
                    ) : (
                      <div className="text-center py-4 bg-white/10 rounded-xl px-3">
                         <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-full mb-2">
                           {t('islamicTools.zakat.belowNisab')}
                         </span>
                         <p className="text-xs text-gray-300 mt-1">
                           ${result.netZakatableWealth.toLocaleString(undefined, { minimumFractionDigits: 2 })} &lt; ${result.nisabThreshold.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                         </p>
                      </div>
                    )}
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
            <p>{t('islamicTools.zakat.religiousDisclaimer')}</p>
         </div>
      </div>
    </div>
  );
};

export default ZakatCalculator;
