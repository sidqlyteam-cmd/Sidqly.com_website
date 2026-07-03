import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2 } from 'lucide-react';

const WhyFillForm: React.FC = () => {
  return (
    <>
      <SEO title="Why Fill the Inquiry Form?" canonical="/why-fill-the-form" noindex={true} />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Why fill the inquiry form?</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our process is designed to save your team time and ensure the right fit for your mission.
            </p>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Fill the detailed inquiry form so the Sidqly team can understand your organization type, current tools, active services, and biggest operational challenges before recommending the right plan, pilot, or demo focus.
             </p>

             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Better Context", desc: "We learn about your team's size and service lines (Zakat, Qurbani, etc.) before we ever speak." },
                  { title: "Tailored Demos", desc: "Instead of a generic walkthrough, we show you features that solve your specific problems." },
                  { title: "Accurate Quoting", desc: "Knowing your scale helps us provide a clear and fair pricing recommendation." },
                  { title: "Faster Onboarding", desc: "Details provided upfront speed up the technical setup and data migration process." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-sidqly-green-soft/30 flex items-center justify-center text-sidqly-green-deep flex-shrink-0 mt-1">
                        <CheckCircle2 size={18} />
                     </div>
                     <div>
                        <h4 className="font-bold text-sidqly-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-sidqly-navy text-white rounded-3xl p-10 text-center">
             <h3 className="text-2xl font-bold mb-6">Ready to share details?</h3>
             <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-block">
                Open Google Inquiry Form
             </a>
             <p className="mt-6 text-gray-400 text-sm italic">
                Your data is handled according to our strict privacy and dignity-safe policies.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFillForm;
