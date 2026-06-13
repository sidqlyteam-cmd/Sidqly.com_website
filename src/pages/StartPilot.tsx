import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

const StartPilot: React.FC = () => {
  const pilots = [
    { title: "Qurbani Pilot", desc: "Manage your upcoming Qurbani shares, vendor tasks, and distribution proof." },
    { title: "Ramadan Ration Pilot", desc: "Coordinate ration pack delivery and volunteer routes for the holy month." },
    { title: "Zakat Case Review Pilot", desc: "Standardize your intake and screening process for new Zakat applications." },
    { title: "Sadaqah Support Pilot", desc: "Launch a specific community support campaign with verified impact." },
    { title: "Vendor Fulfillment Pilot", desc: "Move one vendor relationship to Sidqly to track delivery performance." },
    { title: "Corporate Reporting Pilot", desc: "Generate board-ready reports for your primary corporate sponsor." }
  ];

  return (
    <>
      <SEO title="Start a Pilot" description="Begin your Sidqly journey with a focused pilot program for a specific campaign or workflow." canonical="/start-pilot" />
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Launch a Pilot</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed">
            Not ready for a full transition? Start with one service line and see the Sidqly difference in trust and clarity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilots.map((pilot, i) => (
              <div key={i} className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100 hover:border-sidqly-green-soft transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sidqly-green-deep mb-6 shadow-sm">
                  <Play size={24} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">{pilot.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{pilot.desc}</p>
                <a href={brand.calendlyUrl} className="text-sidqly-green-deep font-bold text-sm flex items-center gap-2">
                  Discuss Pilot <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12">How the pilot works</h2>
          <div className="space-y-6 text-left max-w-2xl mx-auto">
             {[
               "Select one campaign or workflow.",
               "Our team sets up your dedicated module.",
               "Upload your active lists (Excel migration).",
               "Run the operation from intake to proof.",
               "Review the final impact report with your board."
             ].map((step, i) => (
               <div key={i} className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                 <CheckCircle2 className="text-sidqly-green-emerald" size={20} />
                 <span className="text-sidqly-navy font-bold text-sm">{step}</span>
               </div>
             ))}
          </div>
          <div className="mt-16">
             <a href={brand.inquiryFormUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-block">
                Fill Inquiry Form for Pilot
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartPilot;
