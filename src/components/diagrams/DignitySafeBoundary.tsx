import React from 'react';

const DignitySafeBoundary: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
      <div className="flex flex-col items-center">
         <div className="w-full h-48 border-4 border-dashed border-sidqly-green-soft/30 rounded-[32px] flex items-center justify-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sidqly-green-deep text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
               Private Data Boundary
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 w-full">
               <div className="text-center">
                  <div className="text-sidqly-navy font-bold text-xs mb-2 uppercase tracking-tighter">Internal Visibility</div>
                  <div className="bg-sidqly-ivory p-3 rounded-xl text-[10px] text-gray-500">Recipient Names, IDs, Full Photos</div>
               </div>
               <div className="text-center opacity-30">
                  <div className="text-sidqly-navy font-bold text-xs mb-2 uppercase tracking-tighter">Public Indexing</div>
                  <div className="bg-red-50 p-3 rounded-xl text-[10px] text-red-500">BLOCKED BY SYSTEM</div>
               </div>
            </div>
         </div>

         <div className="my-8">
            <div className="w-0.5 h-12 bg-sidqly-green-emerald animate-pulse"></div>
         </div>

         <div className="w-full bg-sidqly-navy p-6 rounded-3xl text-center shadow-xl">
            <div className="text-sidqly-green-soft font-bold text-sm mb-2">Donor-Safe Impact View</div>
            <div className="flex gap-2 justify-center mb-2">
               <div className="w-12 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/40">BLURRED</div>
               <div className="w-12 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/40">HIDDEN</div>
               <div className="w-12 h-6 bg-sidqly-green-emerald rounded flex items-center justify-center text-[8px] font-bold text-white">VERIFIED</div>
            </div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest">Secure • Temporary • Non-Indexed</div>
         </div>
      </div>
    </div>
  );
};

export default DignitySafeBoundary;
