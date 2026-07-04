import React from 'react';

const ProofTrustEngine: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-sidqly-navy p-10 rounded-[40px] shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <div className="w-64 h-64 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
         {/* Step 1 */}
         <div className="text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mx-auto mb-4">
               <div className="w-8 h-8 bg-sidqly-green-soft rounded-lg"></div>
            </div>
            <div className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Upload</div>
            <div className="text-gray-400 text-[10px]">Field Proof</div>
         </div>

         {/* Arrow */}
         <div className="h-0.5 bg-gradient-to-r from-transparent via-sidqly-green-emerald to-transparent opacity-50"></div>

         {/* Step 2 */}
         <div className="text-center bg-white/5 p-6 rounded-3xl border border-sidqly-green-emerald/30 shadow-[0_0_20px_rgba(21,128,61,0.1)]">
            <div className="w-12 h-12 bg-sidqly-green-emerald rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
               ✓
            </div>
            <div className="text-sidqly-green-soft text-[10px] font-bold uppercase tracking-widest mb-1">Approve</div>
            <div className="text-white text-[10px]">Manual Review</div>
         </div>

         {/* Arrow */}
         <div className="h-0.5 bg-gradient-to-r from-transparent via-sidqly-green-emerald to-transparent opacity-50"></div>

         {/* Connection to Step 3 */}
         <div className="col-span-3 flex justify-center py-4">
            <div className="w-0.5 h-8 bg-sidqly-green-emerald/30"></div>
         </div>

         {/* Step 3 */}
         <div className="col-span-3 text-center">
            <div className="inline-block bg-white p-6 rounded-3xl border border-gray-100 shadow-xl max-w-xs">
               <div className="text-sidqly-navy font-bold text-sm mb-2">Dignity-Safe Export</div>
               <div className="flex gap-2 justify-center mb-4">
                  <div className="w-8 h-4 bg-gray-100 rounded"></div>
                  <div className="w-8 h-4 bg-sidqly-green-soft rounded"></div>
                  <div className="w-8 h-4 bg-gray-100 rounded"></div>
               </div>
               <div className="text-gray-400 text-[10px] uppercase tracking-tighter">Verified • Blurred • Secure</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProofTrustEngine;
