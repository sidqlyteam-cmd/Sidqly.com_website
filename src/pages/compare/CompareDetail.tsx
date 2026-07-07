import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { CheckCircle2, XCircle, Shield, ChevronDown } from 'lucide-react';
import { generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schema';
import { comparisons } from '../../data/comparisons';

const CompareDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonData = comparisons.find(c => c.slug === slug);

  // Fallback for older legacy SEO routes
  const isMosque = slug === 'mosque-website';
  const displayTitle = comparisonData ? comparisonData.h1 : (isMosque ? "Mosque Website vs Donation Operations Platform" : `Sidqly vs ${slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Alternative'}`);
  const displayDescription = comparisonData ? comparisonData.metaDescription : (isMosque ? "See why mosques and Islamic charities need more than a basic website to manage verified giving, donor updates, proof approval, and reporting." : "Why professional organizations choose Sidqly for their giving operations.");
  const metaTitle = comparisonData ? comparisonData.metaTitle : `${displayTitle} | ${brand.name}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Compare", item: "/compare" },
        { name: displayTitle, item: `/compare/${slug}` }
      ]),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...(comparisonData && comparisonData.faqs.length > 0 ? [generateFAQSchema(comparisonData.faqs)] : [])
    ]
  };

  return (
    <>
      <SEO
        title={metaTitle}
        description={displayDescription}
        canonical={`/compare/${slug}`}
        schema={schema}
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6 leading-tight">{displayTitle}</h1>
            <p className="text-xl text-gray-600">
              {displayDescription}
            </p>
          </div>

          {comparisonData && (
             <div className="mb-20 max-w-4xl mx-auto bg-white p-8 rounded-[2rem] border border-sidqly-green-soft/30 flex gap-6 items-start shadow-sm">
                <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sidqly-navy mb-2">Quick Answer</h3>
                  <p className="text-gray-600 leading-relaxed">{comparisonData.quickAnswer}</p>
                </div>
             </div>
          )}

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold border border-red-200">
                Traditional Tool
              </div>
              <h2 className="text-2xl font-bold text-sidqly-navy mb-8">The Old Way</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-500 uppercase tracking-wider text-xs mb-2">Works fine for</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{comparisonData ? comparisonData.oldWorksFor : (isMosque ? "Publishing prayer times and accepting basic one-time card payments." : "Small teams manually tracking a few dozen transactions.")}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 uppercase tracking-wider text-xs mb-2">Breaks down when</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{comparisonData ? comparisonData.oldDifficultWhen : "You need to verify payment screenshots, track specific campaign fulfillment, review field proof, and generate board reports."}</p>
                </div>
              </div>
            </div>

            <div className="bg-sidqly-navy text-white p-10 rounded-[40px] shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-sidqly-green-emerald text-white px-4 py-1 rounded-full text-sm font-bold border border-sidqly-green-soft">
                Sidqly Platform
              </div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">The Sidqly Way</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {comparisonData ? comparisonData.sidqlyImproves : "A structured operating system that organizes Zakat logic, payment review, proof approval, and dignity-safe donor updates in one secure environment."}
                </p>

                {comparisonData && (
                  <div className="bg-white/10 p-5 rounded-2xl border border-white/10 mt-6">
                     <h4 className="font-bold text-sidqly-gold uppercase tracking-wider text-xs mb-3">When Sidqly may not be the right fit</h4>
                     <p className="text-gray-300 text-xs leading-relaxed">{comparisonData.notRightFit}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {comparisonData && (
        <section className="py-20 bg-white">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-sidqly-navy text-center mb-16">Feature & Workflow Comparison</h2>

              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm mb-16">
                 <div className="grid grid-cols-3 bg-gray-50 p-4 border-b border-gray-200">
                    <div className="font-bold text-gray-500 uppercase tracking-wider text-xs">Capability</div>
                    <div className="font-bold text-gray-500 uppercase tracking-wider text-xs">The Old Way</div>
                    <div className="font-bold text-sidqly-green-emerald uppercase tracking-wider text-xs">Sidqly</div>
                 </div>
                 {comparisonData.features.map((feat, i) => (
                    <div key={i} className="grid grid-cols-3 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors items-center text-sm">
                       <div className="font-bold text-sidqly-navy">{feat.name}</div>
                       <div className="text-gray-600 flex items-center gap-2"><XCircle size={14} className="text-red-400 flex-shrink-0" /> {feat.old}</div>
                       <div className="text-sidqly-green-deep font-medium flex items-center gap-2"><CheckCircle2 size={14} className="text-sidqly-green-emerald flex-shrink-0" /> {feat.sidqly}</div>
                    </div>
                 ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <h3 className="text-xl font-bold text-sidqly-navy mb-4">Trust & Dignity</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{comparisonData.trustConsiderations}</p>
                 </div>
                 <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <h3 className="text-xl font-bold text-sidqly-navy mb-4">Reporting Clarity</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{comparisonData.reportingConsiderations}</p>
                 </div>
              </div>
           </div>
        </section>
      )}

      {comparisonData && comparisonData.faqs.length > 0 && (
         <section className="py-20 bg-gray-50">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Frequently Asked Questions</h2>
             </div>
             <div className="space-y-4">
               {comparisonData.faqs.map((faq, index) => (
                   <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-sidqly-green-soft">
                     <button
                         onClick={() => setOpenFaq(openFaq === index ? null : index)}
                         className="w-full px-6 py-5 text-left font-bold text-sidqly-navy flex justify-between items-center focus:outline-none"
                     >
                         <span className="pr-8">{faq.question}</span>
                         <ChevronDown size={20} className={`text-sidqly-green-emerald transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                     </button>
                     <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="text-gray-600 pt-2 border-t border-gray-100">{faq.answer}</p>
                     </div>
                   </div>
               ))}
             </div>
           </div>
         </section>
      )}

      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Ready to professionalize your workflow?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {comparisonData ? comparisonData.cta : "Book a demo to see how Sidqly gives your board, donors, and volunteers a verified, secure platform."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Book a Demo
             </a>
             <Link to="/features" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Explore Platform
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareDetail;
