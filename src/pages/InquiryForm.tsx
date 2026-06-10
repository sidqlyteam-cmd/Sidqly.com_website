import React from 'react';
import { FileText, Calendar, Mail, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const InquiryForm: React.FC = () => {
  return (
    <>
      <SEO
        title="Tell Us About Your Organization"
        description="Fill the detailed Sidqly inquiry form so we can recommend the right plan, pilot, or setup for your team."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-8">Tell Us About Your Organization</h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              The detailed Sidqly inquiry form helps us understand your organization before we recommend a plan, pilot, or full setup. The more clearly you explain your current process and challenges, the better we can guide you.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-16">
              <a
                href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-3 p-5 bg-sidqly-green-emerald text-white rounded-2xl font-bold hover:bg-sidqly-green-deep transition-all shadow-lg"
              >
                <FileText size={24} />
                Fill Detailed Inquiry Form
              </a>
              <a
                href="https://calendly.com/d/dvzs-3zf-cgz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-5 bg-white border border-sidqly-green-soft text-sidqly-green-deep rounded-2xl font-bold hover:shadow-md transition-all"
              >
                <Calendar size={20} />
                Book Demo
              </a>
              <a
                href="mailto:team@sidqly.com?subject=Sidqly Inquiry"
                className="flex items-center justify-center gap-3 p-5 bg-sidqly-ivory border border-gray-200 text-sidqly-navy rounded-2xl font-bold hover:bg-gray-100 transition-all"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <h2 className="text-xl font-bold text-sidqly-navy mb-6">Why fill the form?</h2>
                <ul className="space-y-4">
                  {[
                    "So we understand your organization type",
                    "So we know which Sidqly modules you need",
                    "So we can recommend the right plan",
                    "So we can prepare better before the demo",
                    "So we can understand your current pain points",
                    "So we can guide you on pilot or full setup",
                    "So we can avoid wasting your time on irrelevant features"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle size={18} className="text-sidqly-green-emerald flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <h2 className="text-xl font-bold text-sidqly-navy mb-6">What you can tell us</h2>
                <ul className="space-y-4">
                  {[
                    "Your organization name",
                    "Your country and city",
                    "Your services (Zakat, Qurbani, etc.)",
                    "Your current tools (WhatsApp, Excel, etc.)",
                    "Your biggest operational challenge",
                    "Your preferred Sidqly plan",
                    "Whether you want a demo, pilot, or full setup"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle size={18} className="text-sidqly-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-sidqly-navy text-white p-8 md:p-12 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8">What happens after you submit?</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "The Sidqly team reviews your form",
                  "We understand your organization's needs",
                  "We may suggest the best plan or pilot",
                  "We may guide you to book a demo",
                  "We may email you for clarification",
                  "We help you decide the next step"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sidqly-gold font-bold text-xs">{i+1}</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryForm;
