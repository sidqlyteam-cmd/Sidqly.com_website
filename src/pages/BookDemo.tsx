import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, UserPlus, FileSearch } from 'lucide-react';
import SEO from '../components/SEO';

const BookDemo: React.FC = () => {
  return (
    <>
      <SEO
        title="Book a Sidqly Demo"
        description="Book a demo with the Sidqly team to see how we can help your organization manage giving, proof, and reporting."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-8">Book a Sidqly Demo</h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              A Sidqly demo helps us understand your organization’s current process and show how Sidqly can make your giving, proof, delivery, reporting, receipts, vendors, volunteers, and donor updates easier to manage.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <a
                href="https://calendly.com/d/dvzs-3zf-cgz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 bg-sidqly-green-deep text-white rounded-3xl hover:bg-sidqly-green-emerald transition-all text-center shadow-lg group"
              >
                <Calendar size={32} className="mb-4 text-sidqly-gold group-hover:scale-110 transition-transform" />
                <span className="font-bold">Book Demo on Calendly</span>
              </a>

              <a
                href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 bg-white border border-sidqly-green-soft text-sidqly-green-deep rounded-3xl hover:shadow-md transition-all text-center group"
              >
                <FileSearch size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-bold">Fill Detailed Inquiry Form</span>
              </a>

              <a
                href="mailto:team@sidqly.com?subject=Sidqly Inquiry"
                className="flex flex-col items-center p-8 bg-sidqly-ivory border border-gray-200 text-sidqly-navy rounded-3xl hover:bg-gray-100 transition-all text-center group"
              >
                <UserPlus size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-bold">Email Us Directly</span>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-sidqly-navy mb-6">What we’ll cover in the demo</h2>
                <ul className="space-y-4">
                  {[
                    "Your current donation and payment process",
                    "How your team tracks Zakat, Sadaqah, Qurbani, Ramadan, or charity requests",
                    "How proof is collected and approved",
                    "How donors receive updates, receipts, and certificates",
                    "Where your team loses time in WhatsApp, spreadsheets, or manual follow-ups",
                    "Which Sidqly plan and modules fit your organization",
                    "Whether a small pilot or full setup is better"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 size={20} className="text-sidqly-green-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Who should book a demo?</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "mosques", "Islamic charities", "Qurbani providers",
                      "Ramadan food drive teams", "Zakat committees",
                      "Sadaqah campaigns", "corporate CSR/Zakat teams",
                      "vendors and fulfillment partners", "volunteer-led organizations",
                      "community welfare teams"
                    ].map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-sidqly-green-soft/20 text-sidqly-green-deep text-xs font-bold rounded-lg border border-sidqly-green-soft/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-sidqly-gold/10 p-8 rounded-3xl border border-sidqly-gold/20">
                  <h2 className="text-xl font-bold text-sidqly-navy mb-4">Before the call</h2>
                  <p className="text-gray-600 text-sm mb-4">Think about:</p>
                  <ul className="space-y-2">
                    {[
                      "What you currently manage manually",
                      "Where your team faces delays",
                      "What donors ask for repeatedly",
                      "What reports they need",
                      "What service they want to start with"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-sm text-sidqly-navy font-medium">
                        <ArrowRight size={14} className="text-sidqly-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDemo;
