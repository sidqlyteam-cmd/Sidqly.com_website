import React, { useState, useEffect } from 'react';
import { calculateZakatEstimate, type ZakatState, type ZakatResult } from '../../lib/zakatCalculator';
import { Calculator, AlertCircle, Info } from 'lucide-react';

const INITIAL_STATE: ZakatState = {
  cash: 0,
  bankBalance: 0,
  goldValue: 0,
  silverValue: 0,
  businessInventory: 0,
  receivables: 0,
  investments: 0,
  shortTermLiabilities: 0,
  manualNisabValue: 0,
  nisabMethod: 'gold'
};

const ZakatCalculator: React.FC = () => {
  const [state, setState] = useState<ZakatState>(INITIAL_STATE);
  const [result, setResult] = useState<ZakatResult | null>(null);

  useEffect(() => {
    // Only calculate if a nisab value is provided
    if (state.manualNisabValue > 0) {
      setResult(calculateZakatEstimate(state));
    } else {
      setResult(null);
    }
  }, [state]);

  const handleChange = (field: keyof ZakatState, value: string) => {
    if (field === 'nisabMethod') {
      setState(prev => ({ ...prev, [field]: value as 'gold' | 'silver' }));
      return;
    }

    // Parse to float, or 0 if empty/invalid
    const numValue = value === '' ? 0 : parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setState(prev => ({ ...prev, [field]: numValue }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '0') {
          e.target.value = '';
      }
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">Zakat Planning Calculator</h2>
         <p className="text-gray-500 text-sm">Estimate your Zakat for operational and personal planning.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Col: Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
             <h3 className="text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">1. Nisab Threshold</h3>
             <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="nisabMethod"
                      value="gold"
                      checked={state.nisabMethod === 'gold'}
                      onChange={(e) => handleChange('nisabMethod', e.target.value)}
                      className="text-sidqly-green-emerald focus:ring-sidqly-green-emerald"
                    />
                    <span className="text-sm text-gray-700">Gold Nisab (87.48g)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="nisabMethod"
                      value="silver"
                      checked={state.nisabMethod === 'silver'}
                      onChange={(e) => handleChange('nisabMethod', e.target.value)}
                      className="text-sidqly-green-emerald focus:ring-sidqly-green-emerald"
                    />
                    <span className="text-sm text-gray-700">Silver Nisab (612.36g)</span>
                  </label>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Current Nisab Value</label>
                   <div className="relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                     <input
                       type="number"
                       min="0"
                       value={state.manualNisabValue || ''}
                       onFocus={handleFocus}
                       onChange={(e) => handleChange('manualNisabValue', e.target.value)}
                       placeholder="Enter today's threshold"
                       className="w-full rounded-xl border-gray-200 border py-3 pl-8 pr-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                     />
                   </div>
                   <p className="text-xs text-gray-500 mt-2 flex items-start gap-1">
                     <Info size={14} className="shrink-0 mt-0.5" />
                     Enter the current nisab value based on your local scholar, committee, or trusted gold/silver price source.
                   </p>
                </div>
             </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
             <h3 className="text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">2. Zakatable Assets</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { key: 'cash', label: 'Cash on Hand' },
                 { key: 'bankBalance', label: 'Bank Balance' },
                 { key: 'goldValue', label: 'Gold Value' },
                 { key: 'silverValue', label: 'Silver Value' },
                 { key: 'businessInventory', label: 'Business Inventory' },
                 { key: 'receivables', label: 'Receivables / Loans given' },
                 { key: 'investments', label: 'Investments / Shares' }
               ].map((field) => (
                 <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        min="0"
                        value={state[field.key as keyof ZakatState] || ''}
                        onFocus={handleFocus}
                        onChange={(e) => handleChange(field.key as keyof ZakatState, e.target.value)}
                        className="w-full rounded-xl border-gray-200 border py-2 pl-8 pr-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                      />
                    </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
             <h3 className="text-lg font-bold text-sidqly-navy mb-4 border-b pb-2">3. Deductible Liabilities</h3>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short-term Debts & Liabilities</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    min="0"
                    value={state.shortTermLiabilities || ''}
                    onFocus={handleFocus}
                    onChange={(e) => handleChange('shortTermLiabilities', e.target.value)}
                    className="w-full rounded-xl border-gray-200 border py-2 pl-8 pr-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Right Col: Results */}
        <div className="lg:col-span-1">
          <div className="bg-sidqly-navy text-white p-6 rounded-3xl sticky top-8 shadow-xl">
             <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-4">Estimated Summary</h3>

             {state.manualNisabValue === 0 ? (
               <div className="text-sm text-gray-300 italic text-center py-8">
                 Please enter a Nisab Threshold value to see your estimate.
               </div>
             ) : result && (
               <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>Total Assets</span>
                    <span>${result.totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>Liabilities</span>
                    <span>-${result.totalLiabilities.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-semibold border-t border-white/20 pt-3">
                    <span>Net Zakatable</span>
                    <span>${result.zakatableAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>

                 <div className="mt-6 pt-6 border-t border-white/20">
                    {result.isEligible ? (
                      <div className="text-center">
                         <p className="text-sm text-sidqly-green-soft mb-1">Estimated Zakat (2.5%)</p>
                         <p className="text-3xl font-bold text-white mb-2">
                           ${result.estimatedZakat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                         </p>
                      </div>
                    ) : (
                      <div className="text-center py-4 bg-white/10 rounded-xl">
                         <p className="text-sm text-gray-200">Net assets are below the Nisab threshold of ${state.manualNisabValue.toLocaleString()}.</p>
                         <p className="text-sm font-bold text-white mt-2">Zakat may not be obligatory.</p>
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
            <p><strong>Disclaimer:</strong> This calculator is for planning support only. Zakat rules, nisab values, eligibility, deductions, and final obligations should be confirmed with authorized scholars, local committees, or official guidance.</p>
         </div>
      </div>
    </div>
  );
};

export default ZakatCalculator;
