import React from 'react';
import { Shield, Eye, EyeOff, ArrowRight, UserCheck, Lock, Unlock, Users, ClipboardCheck } from 'lucide-react';

export const PrivacyBoundaryGraphic: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden relative my-10">
      <div className="text-center mb-8">
        <h4 className="font-bold text-sidqly-navy text-lg">The Privacy Boundary</h4>
        <p className="text-sm text-gray-500">How Sidqly protects recipient dignity during proof review.</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative z-10">

        {/* Internal Side */}
        <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-300 relative text-center">
          <div className="absolute top-3 left-3 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
             <EyeOff size={12} /> Internal Only
          </div>
          <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 mt-4 text-gray-400">
             <Users size={32} />
          </div>
          <h5 className="font-bold text-gray-700 text-sm mb-2">Raw Field Proof</h5>
          <p className="text-xs text-gray-500">Unedited photos showing recipient faces, IDs, or home locations.</p>
        </div>

        {/* Boundary (The Wall) */}
        <div className="flex flex-col justify-center items-center px-4 relative">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-sidqly-navy to-transparent absolute left-1/2 -translate-x-1/2 hidden md:block"></div>
          <div className="bg-sidqly-navy text-white p-4 rounded-xl shadow-lg relative z-10">
             <Shield size={24} className="mb-2 mx-auto text-sidqly-gold" />
             <div className="text-[10px] font-bold uppercase tracking-widest text-center">Review<br/>Gate</div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-sidqly-navy to-transparent absolute top-1/2 -translate-y-1/2 md:hidden"></div>
        </div>

        {/* External Side */}
        <div className="flex-1 bg-sidqly-green-soft/10 rounded-2xl p-6 border border-sidqly-green-emerald/20 relative text-center">
          <div className="absolute top-3 left-3 bg-sidqly-green-emerald text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
             <Eye size={12} /> Donor Safe
          </div>
          <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 mt-4 text-sidqly-green-emerald border border-sidqly-green-emerald/20">
             <UserCheck size={32} />
          </div>
          <h5 className="font-bold text-sidqly-green-deep text-sm mb-2">Approved Update</h5>
          <p className="text-xs text-gray-600">Faces blurred, PII removed, showing only the completed action (e.g., delivered box).</p>
        </div>

      </div>
    </div>
  );
};

export const ReviewGateGraphic: React.FC = () => {
  return (
    <div className="bg-sidqly-navy rounded-3xl p-8 shadow-xl overflow-hidden relative my-10 text-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sidqly-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>

      <div className="text-center mb-8 relative z-10">
        <h4 className="font-bold text-white text-lg">Mandatory Human Review</h4>
        <p className="text-sm text-gray-300">Nothing moves forward without explicit authorization.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        <div className="w-32 text-center">
           <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-2 border border-white/20 text-gray-400">
              <Lock size={24} />
           </div>
           <div className="text-xs font-medium text-gray-300">Pending Action</div>
        </div>

        <div className="flex items-center text-sidqly-gold">
           <div className="h-0.5 w-8 bg-sidqly-gold/50"></div>
           <ArrowRight size={16} className="-ml-1" />
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-sidqly-gold text-center min-w-[160px]">
           <ClipboardCheck size={24} className="mx-auto text-sidqly-gold mb-2" />
           <div className="text-sm font-bold text-white">Authorized Officer</div>
           <div className="text-[10px] text-sidqly-gold uppercase mt-1">Review & Sign-off</div>
        </div>

        <div className="flex items-center text-sidqly-green-emerald">
           <div className="h-0.5 w-8 bg-sidqly-green-emerald/50"></div>
           <ArrowRight size={16} className="-ml-1" />
        </div>

        <div className="w-32 text-center">
           <div className="w-16 h-16 mx-auto bg-sidqly-green-emerald/20 rounded-full flex items-center justify-center mb-2 border border-sidqly-green-emerald/50 text-sidqly-green-emerald">
              <Unlock size={24} />
           </div>
           <div className="text-xs font-medium text-sidqly-green-soft">Action Approved</div>
        </div>
      </div>
    </div>
  );
};
