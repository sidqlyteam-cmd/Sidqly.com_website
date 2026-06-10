import React from 'react';
import { FileText, Calendar, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const WhyFillForm: React.FC = () => {
  return (
    <>
      <SEO
        title="Why Fill the Sidqly Inquiry Form"
        description="Understand why we ask for detailed information before recommending a Sidqly setup for your organization."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-8">Why We Ask You to Fill the Sidqly Inquiry Form</h1>
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>
                Sidqly is not a one-size-fits-all basic donation form. Every organization handles giving differently. Some manage Zakat cases, some run Qurbani operations, some coordinate Ramadan meals, some work with vendors, and some need corporate sponsor reports.
              </p>
              <p className="font-bold text-sidqly-navy">
                The inquiry form helps us understand your exact needs before we recommend a setup.
              </p>
            </div>

            <div className="space-y-4 mb-16">
              {[
                "It helps us understand your current operations",
                "It helps us recommend the right Sidqly plan",
                "It helps us identify the right starting modules",
                "It helps us prepare for your demo",
                "It helps us suggest a pilot if needed",
                "It helps us avoid giving generic advice",
                "It helps your team get a clearer next step"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-50 shadow-sm">
                  <CheckCircle2 className="text-sidqly-green-emerald mt-1" />
                  <span className="font-bold text-sidqly-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-2 bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-all shadow-lg"
              >
                <FileText size={20} />
                Fill the Sidqly Inquiry Form
              </a>
              <a
                href="https://calendly.com/d/dvzs-3zf-cgz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-sidqly-green-deep border border-sidqly-green-soft px-8 py-4 rounded-xl font-bold hover:shadow-md transition-all"
              >
                <Calendar size={20} />
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFillForm;
