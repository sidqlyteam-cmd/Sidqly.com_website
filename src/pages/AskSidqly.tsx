import React from 'react';
import { HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const AskSidqly: React.FC = () => {
  return (
    <>
      <SEO
        title="Ask Sidqly Before You Decide"
        description="Not sure which Sidqly plan or module fits your organization? Send us your query and we'll guide you."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-8">Ask Sidqly Before You Decide</h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Not sure which plan, module, or setup fits your organization? Send us your query. Sidqly is built for organizations with different needs, from small mosques and charity teams to Qurbani providers, Ramadan drives, Zakat committees, vendors, and corporate CSR/Zakat programs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <a
                href="mailto:team@sidqly.com?subject=Sidqly Question"
                className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-all shadow-lg"
              >
                Send Your Query
              </a>
              <a
                href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sidqly-green-deep border border-sidqly-green-soft px-10 py-4 rounded-xl font-bold hover:shadow-md transition-all"
              >
                Fill Inquiry Form
              </a>
              <a
                href="https://calendly.com/d/dvzs-3zf-cgz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sidqly-ivory text-sidqly-navy border border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
              >
                Book Demo
              </a>
            </div>

            <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm text-left">
              <h2 className="text-3xl font-bold text-sidqly-navy mb-10 flex items-center gap-3">
                <HelpCircle className="text-sidqly-gold" size={32} />
                Questions we can help answer
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Which Sidqly plan is right for us?",
                  "Should we start with a pilot?",
                  "Can Sidqly manage our Qurbani campaign?",
                  "Can Sidqly manage Ramadan ration or Iftar drives?",
                  "Can Sidqly help separate Zakat and Sadaqah funds?",
                  "Can Sidqly help with donor receipts and certificates?",
                  "Can Sidqly help our vendors or volunteers?",
                  "Can corporate sponsors get board-ready reports?",
                  "How does Sidqly protect recipient dignity?",
                  "How do we move from WhatsApp and Excel to Sidqly?"
                ].map((item, i) => (
                  <div key={i} className="pb-6 border-b border-gray-50 last:border-0">
                    <p className="text-sidqly-navy font-bold leading-relaxed">{item}</p>
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

export default AskSidqly;
