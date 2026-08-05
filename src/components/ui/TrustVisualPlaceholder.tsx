import React, { useState, useEffect } from 'react';
import { Image, ShieldAlert, Loader2 } from 'lucide-react';

interface TrustVisualPlaceholderProps {
  title: string;
  description: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  type: 'conceptual' | 'demo' | 'live';
  altText: string;
  mockDataLayout?: 'dashboard' | 'before-after' | 'testimonial';
  beforeText?: string;
  afterText?: string;
  caption?: string;
}

export const TrustVisualPlaceholder: React.FC<TrustVisualPlaceholderProps> = ({
  title,
  description,
  aspectRatio = '16:9',
  type,
  altText,
  mockDataLayout = 'dashboard',
  beforeText,
  afterText,
  caption
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading behavior for visual testing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const getAspectClass = () => {
    if (aspectRatio === '4:3') return 'aspect-[4/3]';
    if (aspectRatio === '1:1') return 'aspect-square';
    return 'aspect-video'; // 16:9
  };

  const getBadgeColor = () => {
    if (type === 'live') return 'bg-sidqly-green-emerald text-white border-sidqly-green-deep';
    if (type === 'demo') return 'bg-amber-500 text-white border-amber-600';
    return 'bg-blue-600 text-white border-blue-700'; // conceptual
  };

  return (
    <div className="w-full bg-sidqly-ivory rounded-[32px] border border-gray-200 overflow-hidden shadow-sm flex flex-col">

      {/* Visual Frame */}
      <div className={`relative w-full overflow-hidden bg-gray-100 flex flex-col justify-center items-center ${getAspectClass()}`}>

        {/* Loading Shimmer Behavior */}
        {loading ? (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-pulse flex items-center justify-center">
            <Loader2 className="animate-spin text-gray-400" size={32} />
          </div>
        ) : null}

        {/* Content Render */}
        {!loading && (
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">

            {/* Top Bar with Badge Flags */}
            <div className="flex justify-between items-center w-full z-10">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border ${getBadgeColor()}`}>
                {type} illustration
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200/50">
                Sample Concept
              </span>
            </div>

            {/* Mock Layouts to avoid fake usage claims */}
            <div className="flex-grow flex items-center justify-center w-full my-4">

              {/* Dashboard Layout Mock */}
              {mockDataLayout === 'dashboard' && (
                <div className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-5 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs font-bold text-sidqly-navy ml-2">{title} (Mock View)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Zakat Pool", v: "$42,050.00" },
                      { l: "Sadaqah Pool", v: "$18,420.00" },
                      { l: "Pending Audits", v: "14 Transactions" }
                    ].map((m, i) => (
                      <div key={i} className="bg-sidqly-ivory p-3 rounded-xl border border-gray-100 text-center">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">{m.l}</span>
                        <span className="text-xs font-extrabold text-sidqly-navy">{m.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-sidqly-navy text-white text-[10px] font-bold text-center py-2.5 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                    <ShieldAlert size={14} className="text-sidqly-green-soft" />
                    DISCLAIMER: All values represent demo workflow data for demonstration purposes only.
                  </div>
                </div>
              )}

              {/* Before/After Layout Mock */}
              {mockDataLayout === 'before-after' && (
                <div className="w-full max-w-xl grid grid-cols-2 gap-4">
                  <div className="bg-red-50/90 backdrop-blur-sm p-4 rounded-2xl border border-red-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest bg-red-100 px-2 py-1 rounded-md self-start mb-4">
                      Before Sidqly
                    </span>
                    <p className="text-xs text-red-900 leading-relaxed font-semibold">
                      {beforeText || "Scattered WhatsApp screenshots, manual spreadsheets, co-mingled accounts, unblurred beneficiary images."}
                    </p>
                  </div>
                  <div className="bg-emerald-50/90 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-2 py-1 rounded-md self-start mb-4">
                      After Sidqly
                    </span>
                    <p className="text-xs text-emerald-900 leading-relaxed font-semibold">
                      {afterText || "Centralized payment verification queues, distinct logical Zakat/Sadaqah balances, automated face-blurring."}
                    </p>
                  </div>
                </div>
              )}

              {/* Testimonial Placeholder Layout */}
              {mockDataLayout === 'testimonial' && (
                <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/60 shadow-sm text-center">
                  <p className="text-xs italic text-gray-500 mb-4 leading-relaxed">
                    "This is a structural placeholder reserved for future authenticated pilot testimonials. We do not fabricate user endorsements or success metrics."
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-sidqly-navy text-white text-[10px] font-bold flex items-center justify-center">
                      SP
                    </div>
                    <span className="text-[10px] font-bold text-sidqly-navy uppercase tracking-wider">
                      Pilot Coordinator Placeholder
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom metadata details */}
            <div className="text-xs text-gray-500 font-medium z-10 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50 w-full flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Image size={14} className="text-sidqly-green-deep" />
                {description}
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                ALT: {altText}
              </span>
            </div>

          </div>
        )}

      </div>

      {/* Caption Field */}
      {caption && (
        <div className="p-4 bg-white border-t border-gray-200 text-xs text-gray-500 italic text-center">
          {caption}
        </div>
      )}

    </div>
  );
};
