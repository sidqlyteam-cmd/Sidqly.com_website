import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { MessageCircle, FileText } from 'lucide-react';

const AskSidqly: React.FC = () => {
  return (
    <>
      <SEO title="Ask Sidqly" canonical="/ask-sidqly" noindex={true} />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Ask Sidqly</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct answers for organizations looking to professionalize their giving operations.
            </p>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                   <h3 className="text-2xl font-bold text-sidqly-navy">How do we get started?</h3>
                   <p>The best first step is to fill our <strong>detailed inquiry form</strong>. This allows us to understand your organization scale and specific challenges (like moving away from WhatsApp or managing Qurbani shares) before we recommend a plan.</p>
                </section>

                <section>
                   <h3 className="text-2xl font-bold text-sidqly-navy">Can we book a demo first?</h3>
                   <p>Absolutely. You can book a demo via our <strong>Calendly link</strong>. We'll walk you through the modules that matter most to your team, whether it's the Proof Trust Engine or Zakat Fund Separation.</p>
                </section>

                <section>
                   <h3 className="text-2xl font-bold text-sidqly-navy">What about data migration?</h3>
                   <p>We know that moving from years of Excel sheets and WhatsApp history can be daunting. The Sidqly team provides professional assistance to help you migrate your data safely and accurately.</p>
                </section>

                <section>
                   <h3 className="text-2xl font-bold text-sidqly-navy">Is our data secure?</h3>
                   <p>Amanah is our foundation. We use industry-standard security and strict logical isolation to ensure your donor and recipient data is protected and never publicly exposed.</p>
                </section>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-sidqly-navy text-white p-10 rounded-3xl text-center flex flex-col items-center">
                <MessageCircle className="text-sidqly-green-soft mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Direct Email</h4>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">For specific queries, partnerships, or billing questions.</p>
                <a href={`mailto:${brand.email}`} className="text-sidqly-green-soft font-bold hover:underline">{brand.email}</a>
             </div>
             <div className="bg-sidqly-green-emerald text-white p-10 rounded-3xl text-center flex flex-col items-center">
                <FileText className="mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Inquiry Form</h4>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">Share your organization's details for a tailored response.</p>
                <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-green-deep px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Open Form</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AskSidqly;
