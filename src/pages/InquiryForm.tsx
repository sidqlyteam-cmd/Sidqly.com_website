import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const InquiryForm: React.FC = () => {
  return (
    <>
      <SEO
        title="Inquiry Form"
        description="Fill the detailed inquiry form so the Sidqly team can understand your organization type and operational challenges."
        canonical="/inquiry-form"
      />

      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-8 leading-tight">
                Tell us about your organization.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Fill the detailed inquiry form so the Sidqly team can understand your organization type, current tools, active services, and biggest operational challenges before recommending the right plan, pilot, or demo focus.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "Understand your current manual workflows",
                  "Identify which Sidqly modules you need",
                  "Estimate implementation and onboarding timelines",
                  "Provide a customized pricing quote"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="text-sidqly-green-emerald" size={20} />
                    <span className="text-sidqly-navy font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-sidqly-green-deep text-white">
                 <h4 className="font-bold text-xl mb-4">Why fill the form first?</h4>
                 <p className="text-sidqly-green-soft text-sm leading-relaxed mb-8">
                    By sharing your details upfront, we can make our first conversation significantly more productive and focused on your real-world problems.
                 </p>
                 <Link to="/why-fill-the-form" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                    Learn more about our process <ArrowRight size={18} />
                 </Link>
              </div>
            </div>

            <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 min-h-[500px] flex flex-col">
               <div className="p-8 text-center flex-grow flex flex-col justify-center">
                  <div className="w-20 h-20 bg-sidqly-ivory rounded-3xl flex items-center justify-center text-sidqly-green-deep mx-auto mb-8">
                     <FileText size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-sidqly-navy mb-4">Ready to share details?</h3>
                  <p className="text-gray-500 mb-10 leading-relaxed max-w-sm mx-auto">
                    Our detailed inquiry form is hosted on Google Forms for secure and easy submission.
                  </p>
                  <a
                    href={brand.inquiryFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sidqly-green-emerald text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-xl transition-all inline-block w-full"
                  >
                    Open Google Inquiry Form
                  </a>
               </div>
               <div className="p-6 border-t border-gray-50 text-center flex justify-center gap-6">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div> SECURE SUBMISSION
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div> MANUAL REVIEW
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryForm;
