import React from 'react';
import { ShieldCheck, Heart, BarChart3, Users } from 'lucide-react';

const TrustPillars: React.FC = () => {
  const pillars = [
    { icon: <ShieldCheck className="text-sidqly-green-emerald" />, title: "Amanah", desc: "Verified manual review for every payment." },
    { icon: <Heart className="text-sidqly-green-emerald" />, title: "Dignity", desc: "Automated identity protection for recipients." },
    { icon: <BarChart3 className="text-sidqly-green-emerald" />, title: "Clarity", desc: "Board-ready impact reporting in seconds." },
    { icon: <Users className="text-sidqly-green-emerald" />, title: "Community", desc: "Organized support for local and global needs." }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto py-12">
      {pillars.map((p, i) => (
        <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm text-center flex flex-col items-center hover:border-sidqly-green-soft transition-all">
           <div className="w-12 h-12 bg-sidqly-ivory rounded-2xl flex items-center justify-center mb-4">
              {p.icon}
           </div>
           <h4 className="font-bold text-sidqly-navy mb-2">{p.title}</h4>
           <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustPillars;
