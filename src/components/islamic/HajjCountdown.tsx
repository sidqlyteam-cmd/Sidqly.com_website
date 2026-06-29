import React, { useState, useEffect } from 'react';
import { getNextHajjEstimate, type SeasonalEventEstimate } from '../../lib/seasonalDates';
import { Compass, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HajjCountdown: React.FC = () => {
  const [estimate, setEstimate] = useState<SeasonalEventEstimate | null>(null);

  useEffect(() => {
    setEstimate(getNextHajjEstimate());
  }, []);

  if (!estimate) return null;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-sidqly-green-deep/10 p-3 rounded-xl">
          <Compass className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sidqly-navy">Hajj & Dhul Hijjah Planner</h2>
          <p className="text-sm text-gray-500">Estimated countdown to the next major giving season.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-sidqly-navy to-gray-900 rounded-2xl p-8 text-white mb-8 text-center">
         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">{estimate.name}</p>
         <div className="flex justify-center items-end gap-2 mb-2">
            <span className="text-6xl font-extrabold">{estimate.daysRemaining}</span>
            <span className="text-xl text-gray-400 mb-2">days away</span>
         </div>
         <p className="text-sm text-gray-400">
           Targeting approx. {estimate.estimatedGregorianDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
         </p>
      </div>

      <div className="space-y-4 mb-8">
        <h3 className="font-bold text-sidqly-navy">Operational Preparation Timeline</h3>
        <ul className="space-y-3 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
           {[
             { time: '90 days before', action: 'Campaign setup & module activation' },
             { time: '60 days before', action: 'Vendor planning & animal sourcing readiness' },
             { time: '30 days before', action: 'Donor communication, share allocation & sponsor updates' },
             { time: '10 days before', action: 'Certificates, proof review templates & report readiness' },
           ].map((step, i) => (
             <li key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sidqly-ivory group-hover:bg-sidqly-green-deep group-hover:text-white text-sidqly-green-deep shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                  <span className="text-sm font-bold">{i + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                   <p className="text-xs font-bold text-sidqly-green-soft mb-1">{step.time}</p>
                   <p className="text-sm text-gray-700 font-medium">{step.action}</p>
                </div>
             </li>
           ))}
        </ul>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Link to="/modules/qurbani-management-software" className="flex items-center justify-between p-4 rounded-xl bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100 transition-colors">
           <span className="font-bold text-sm">Qurbani Workflows</span>
           <ArrowRight size={16} />
        </Link>
        <Link to="/book-demo" className="flex items-center justify-between p-4 rounded-xl bg-sidqly-green-deep text-white hover:shadow-md transition-all">
           <span className="font-bold text-sm">Request Organization</span>
           <ArrowRight size={16} />
        </Link>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
         <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
         <p>Final Hajj and Eid dates depend on official Saudi announcements and lunar calendar confirmation. Organizations should confirm official Hajj and Umrah updates through official authorities and trusted sources.</p>
      </div>
    </div>
  );
};

export default HajjCountdown;
