import React, { useState, useEffect } from 'react';
import { getNextRamadanEstimate, type SeasonalEventEstimate } from '../../lib/seasonalDates';
import { MoonStar, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RamadanCountdown: React.FC = () => {
  const [estimate, setEstimate] = useState<SeasonalEventEstimate | null>(null);

  useEffect(() => {
    setEstimate(getNextRamadanEstimate());
  }, []);

  if (!estimate) return null;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-sidqly-green-deep/10 p-3 rounded-xl">
          <MoonStar className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sidqly-navy">Ramadan Planner</h2>
          <p className="text-sm text-gray-500">Prepare your Iftar and ration distribution workflows.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-sidqly-navy to-sidqly-green-deep rounded-2xl p-8 text-white mb-8 text-center shadow-inner">
         <p className="text-sm text-sidqly-green-soft font-bold uppercase tracking-widest mb-4">Estimated Ramadan Planning Countdown</p>
         <div className="flex justify-center items-end gap-2 mb-2">
            <span className="text-6xl font-extrabold">{estimate.daysRemaining}</span>
            <span className="text-xl text-white/70 mb-2">days away</span>
         </div>
         <p className="text-sm text-white/70">
           Targeting approx. {estimate.estimatedGregorianDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
         </p>
      </div>

      <div className="space-y-6 mb-8">
         <h3 className="font-bold text-sidqly-navy">Distribution Workflow Checklists</h3>
         <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-100 p-4 rounded-xl">
               <h4 className="font-bold text-sm text-sidqly-green-deep mb-3 border-b border-gray-50 pb-2">Pre-Ramadan Planning</h4>
               <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span>•</span> Set up Iftar campaign modules</li>
                  <li className="flex gap-2"><span>•</span> Assign vendor fulfillments for ration packs</li>
                  <li className="flex gap-2"><span>•</span> Sponsor communication templates</li>
                  <li className="flex gap-2"><span>•</span> Review Weather Distribution guidelines <Link to="/weather-charity-distribution" className="text-sidqly-green-emerald hover:underline">(Link)</Link></li>
               </ul>
            </div>
            <div className="border border-gray-100 p-4 rounded-xl">
               <h4 className="font-bold text-sm text-sidqly-green-deep mb-3 border-b border-gray-50 pb-2">During Ramadan</h4>
               <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span>•</span> Daily proof review and approval workflows</li>
                  <li className="flex gap-2"><span>•</span> Donor-safe update dispatches</li>
                  <li className="flex gap-2"><span>•</span> Volunteer coordination mapping</li>
                  <li className="flex gap-2"><span>•</span> Monitor local <Link to="/namaz-timings" className="text-sidqly-green-emerald hover:underline">Namaz timings</Link> for operations</li>
               </ul>
            </div>
         </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
         <Link to="/modules/ramadan-donation-management" className="inline-flex items-center gap-2 bg-sidqly-ivory text-sidqly-navy px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
            Ramadan Module <ArrowRight size={14} />
         </Link>
         <Link to="/modules/vendor-fulfillment-platform" className="inline-flex items-center gap-2 bg-sidqly-ivory text-sidqly-navy px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
            Vendor Fulfillment <ArrowRight size={14} />
         </Link>
         <Link to="/book-demo" className="inline-flex items-center gap-2 bg-sidqly-green-deep text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sidqly-navy transition-colors">
            Book Demo <ArrowRight size={14} />
         </Link>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
         <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
         <p>Disclaimer: Final Ramadan dates depend on official moon-sighting committees. Dates shown are planning estimates only.</p>
      </div>
    </div>
  );
};

export default RamadanCountdown;
