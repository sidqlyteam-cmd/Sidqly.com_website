import React from 'react';

const ZakatSeparation: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative h-64 flex items-center justify-between gap-4">
        {/* Input */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-16 h-16 bg-sidqly-ivory rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="w-8 h-8 bg-sidqly-gold rounded-full opacity-50"></div>
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Incoming Funds</span>
        </div>

        {/* Separator Box */}
        <div className="flex-1 h-48 bg-sidqly-navy rounded-[32px] flex flex-col items-center justify-center p-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sidqly-green-emerald text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Sidqly Logical Filter
          </div>
          <div className="w-full h-px bg-white/10 my-4"></div>
          <div className="text-white text-sm font-bold">Amanah-Safe Engine</div>
          <div className="w-full h-px bg-white/10 my-4"></div>
        </div>

        {/* Outputs */}
        <div className="flex flex-col gap-8 z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-sidqly-green-soft/20 rounded-2xl flex items-center justify-center border-2 border-sidqly-green-emerald shadow-lg">
              <span className="text-sidqly-green-deep font-bold text-lg">Z</span>
            </div>
            <span className="text-[10px] font-bold text-sidqly-green-deep uppercase tracking-widest">Zakat Fund</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-sidqly-ivory rounded-2xl flex items-center justify-center border-2 border-gray-100 shadow-sm">
              <span className="text-sidqly-navy font-bold text-lg">S</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sadaqah Fund</span>
          </div>
        </div>

        {/* Connection Lines (CSS) */}
        <div className="absolute left-16 right-32 top-1/2 h-0.5 bg-gradient-to-r from-gray-100 via-sidqly-green-emerald to-transparent -translate-y-1/2 opacity-20"></div>
      </div>
      <div className="mt-8 text-center">
         <p className="text-xs text-gray-500 font-medium">Sidqly enforces strict fund separation at the point of entry, ensuring your Zakat and Sadaqah remain distinct throughout the entire lifecycle.</p>
      </div>
    </div>
  );
};

export default ZakatSeparation;
