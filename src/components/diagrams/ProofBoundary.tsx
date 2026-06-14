import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ProofBoundary: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">

        {/* Left Side: Private Data */}
        <div className="flex-1 text-center bg-sidqly-ivory p-6 rounded-2xl w-full border border-gray-100">
           <h4 className="font-bold text-gray-500 mb-4 uppercase tracking-widest text-xs">Private Organization Data</h4>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-medium text-gray-600 mb-2 border border-red-100">
              Unblurred Recipient Photos
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-medium text-gray-600 mb-2 border border-red-100">
              Exact Recipient Address
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-medium text-gray-600 border border-red-100">
              Full Recipient Name & ID
           </div>
        </div>

        {/* Boundary Wall */}
        <div className="flex flex-col items-center justify-center relative z-10 mx-4">
           <div className="w-12 h-12 bg-sidqly-green-deep rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
              <ShieldCheck size={24} />
           </div>
           <div className="text-xs font-bold text-sidqly-green-deep uppercase tracking-widest bg-white px-2">
              Dignity Boundary
           </div>
           {/* Visual Divider line (behind) */}
           <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-sidqly-green-soft -z-10 -translate-x-1/2 hidden md:block"></div>
        </div>

        {/* Right Side: Donor Safe Data */}
        <div className="flex-1 text-center bg-sidqly-green-soft/10 p-6 rounded-2xl w-full border border-sidqly-green-soft/30">
           <h4 className="font-bold text-sidqly-green-deep mb-4 uppercase tracking-widest text-xs">Donor-Visible Impact</h4>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-bold text-sidqly-green-emerald mb-2 border border-sidqly-green-soft/50">
              Automatically Blurred Photos
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-bold text-sidqly-green-emerald mb-2 border border-sidqly-green-soft/50">
              General Location (e.g. Village)
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm text-sm font-bold text-sidqly-green-emerald border border-sidqly-green-soft/50">
              Verified Delivery Timestamp
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProofBoundary;
