import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Layout, MessageSquare, FileText } from 'lucide-react';

const Migration: React.FC = () => {
  const steps = [
    { title: "Map current process", desc: "Identify all the manual touchpoints in your current WhatsApp and Excel workflows." },
    { title: "Choose first module", desc: "Start with the service line that causes the most manual overhead." },
    { title: "Prepare current lists", desc: "Our team helps you clean and format your Excel donor and requester lists." },
    { title: "Define proof rules", desc: "Standardize what constitutes 'verified proof' for your specific organization." },
    { title: "Train team", desc: "Interactive sessions for your field team, vendors, and board members." },
    { title: "Launch pilot", desc: "Execute one campaign on Sidqly while maintaining your old records as a backup." },
    { title: "Review reports", desc: "See the difference in clarity with board-ready impact summaries." },
    { title: "Expand gradually", desc: "Move all your operations to Sidqly for complete operational peace of mind." }
  ];

  return (
    <>
      <SEO title="Migration Guide" description="Moving from WhatsApp and Excel to professional giving operations with Sidqly." canonical="/migration" />
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
                <h1 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight">Replace the mess.</h1>
                <p className="text-xl text-sidqly-green-soft leading-relaxed">
                  Moving from years of WhatsApp groups and Excel sheets can feel overwhelming. Sidqly provides the path to a professional digital transition.
                </p>
             </div>
             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                   <MessageSquare className="mx-auto mb-4 text-red-400" />
                   <div className="text-xs font-bold uppercase text-gray-400">Before</div>
                   <div className="text-sm font-bold">WhatsApp Chaos</div>
                </div>
                <div className="bg-sidqly-green-emerald/20 p-6 rounded-3xl border border-sidqly-green-emerald/30 text-center">
                   <Layout className="mx-auto mb-4 text-sidqly-green-soft" />
                   <div className="text-xs font-bold uppercase text-sidqly-green-soft">After</div>
                   <div className="text-sm font-bold">Sidqly Dashboard</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">The Migration Path</h2>
           <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-50 hover:border-sidqly-green-soft transition-all group">
                   <div className="w-10 h-10 rounded-xl bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep font-bold flex-shrink-0 group-hover:bg-sidqly-green-deep group-hover:text-white transition-all">
                      {i + 1}
                   </div>
                   <div>
                      <h4 className="font-bold text-sidqly-navy mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <FileText className="mx-auto text-sidqly-green-deep mb-8" size={48} />
           <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Let us handle the heavy lifting.</h2>
           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Our data migration specialists ensure your transition is accurate and secure. Don't let your old data hold back your future impact.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.inquiryFormUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Start Migration Inquiry</a>
           </div>
        </div>
      </section>
    </>
  );
};

export default Migration;
