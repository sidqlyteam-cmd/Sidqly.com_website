import React, { useState, useEffect } from 'react';
import { getNextHajjEstimate, type SeasonalEventEstimate } from '../../lib/seasonalDates';
import { Gift, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EidQurbaniPlanner: React.FC = () => {
  const [estimate, setEstimate] = useState<SeasonalEventEstimate | null>(null);

  useEffect(() => {
    setEstimate(getNextHajjEstimate());
  }, []);

  if (!estimate) return null;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-sidqly-green-deep/10 p-3 rounded-xl">
          <Gift className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sidqly-navy">Eid & Qurbani Planner</h2>
          <p className="text-sm text-gray-500">Checklists for manual payment review and safe delivery.</p>
        </div>
      </div>

      <div className="bg-sidqly-navy rounded-2xl p-6 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
         <div>
             <p className="text-sm text-sidqly-green-soft font-bold uppercase tracking-widest mb-1">Target Planning Window</p>
             <p className="text-xl font-bold">{estimate.estimatedGregorianDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
         </div>
         <div className="bg-white/10 px-6 py-3 rounded-xl text-center">
             <span className="block text-3xl font-extrabold">{estimate.daysRemaining}</span>
             <span className="text-xs text-white/70 uppercase">Days to prepare</span>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
         <div className="space-y-4">
             <h3 className="font-bold text-sidqly-navy flex items-center gap-2">
                 <CheckCircle2 size={18} className="text-sidqly-green-deep" /> Operational Readiness
             </h3>
             <ul className="space-y-3">
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Order and share tracking checklists
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Vendor assignment and supply chain mapping
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Set up Qurbani module parameters
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Hajj planning alignment <Link to="/hajj-countdown" className="text-sidqly-green-emerald hover:underline">(View)</Link>
                 </li>
             </ul>
         </div>

         <div className="space-y-4">
             <h3 className="font-bold text-sidqly-navy flex items-center gap-2">
                 <CheckCircle2 size={18} className="text-sidqly-green-deep" /> Execution & Reporting
             </h3>
             <ul className="space-y-3">
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Manual payment review checklists
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Proof approval rules and guidelines
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Certificate generation and delivery timelines
                 </li>
                 <li className="text-sm text-gray-600 flex gap-2">
                    <span className="text-sidqly-green-emerald">•</span> Donor-safe update checklists
                 </li>
             </ul>
         </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 border-t border-gray-100 pt-6">
         <Link to="/modules/qurbani-management-software" className="inline-flex items-center justify-between w-full sm:w-auto px-6 py-3 rounded-xl bg-sidqly-ivory text-sidqly-navy font-bold hover:bg-gray-100 transition-colors gap-2">
            Explore Qurbani Module <ArrowRight size={16} />
         </Link>
         <Link to="/book-demo" className="inline-flex items-center justify-between w-full sm:w-auto px-6 py-3 rounded-xl bg-sidqly-green-deep text-white font-bold hover:shadow-lg transition-all gap-2">
            Request Demo <ArrowRight size={16} />
         </Link>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-500 bg-yellow-50 text-yellow-800 p-3 rounded-lg border border-yellow-200">
         <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
         <p>Disclaimer: Eid ul Adha dates depend on official moon-sighting. Organization administrators should not publish exact operational dates until confirmed.</p>
      </div>
    </div>
  );
};

export default EidQurbaniPlanner;
