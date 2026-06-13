import React from 'react';

const ManualPaymentReview: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
         {/* Donor Side */}
         <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-sidqly-ivory rounded-3xl flex items-center justify-center border border-gray-100 mx-auto mb-4">
               <div className="w-10 h-10 border-2 border-sidqly-green-deep rounded-full flex items-center justify-center font-bold text-sidqly-green-deep">$</div>
            </div>
            <div className="text-sidqly-navy font-bold text-sm">Donor Uploads Proof</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Receipt/Screenshot</div>
         </div>

         {/* Gate */}
         <div className="relative group">
            <div className="w-24 h-24 bg-sidqly-navy rounded-[32px] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
               <div className="text-white text-xs font-bold text-center leading-tight">
                  Sidqly<br/>Manual<br/>Gate
               </div>
            </div>
            {/* Animated Ring */}
            <div className="absolute inset-0 border-2 border-sidqly-green-emerald rounded-[32px] animate-ping opacity-20 pointer-events-none"></div>
         </div>

         {/* Team Side */}
         <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-sidqly-green-soft/20 rounded-3xl flex items-center justify-center border border-sidqly-green-soft/50 mx-auto mb-4">
               <div className="w-10 h-10 bg-sidqly-green-emerald rounded-full flex items-center justify-center font-bold text-white">✓</div>
            </div>
            <div className="text-sidqly-navy font-bold text-sm">Team Verifies IBAN</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Status: Confirmed</div>
         </div>
      </div>
      <div className="mt-12 p-4 bg-sidqly-ivory rounded-2xl text-center">
         <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
            Sidqly prevents "phantom donations" by ensuring every bank transfer or mobile payment is human-reviewed before it enters your impact reports.
         </p>
      </div>
    </div>
  );
};

export default ManualPaymentReview;
