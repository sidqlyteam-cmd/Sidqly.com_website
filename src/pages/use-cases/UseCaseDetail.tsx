import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, FileText } from 'lucide-react';
import SEO from '../../components/SEO';
import { useCases } from '../../data/useCases';
import { brand } from '../../config/brand';
import { generateServiceSchema } from '../../lib/schema';
import ManualPaymentReview from '../../components/diagrams/ManualPaymentReview';

const UseCaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const useCase = useMemo(() => useCases.find(uc => uc.slug === slug), [slug]);

  if (!useCase) {
    return <Navigate to="/use-cases" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(useCase.title, useCase.shortDescription, `/use-cases/${useCase.slug}`),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.sidqly.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Use Cases",
            "item": "https://www.sidqly.com/use-cases"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": useCase.title,
            "item": `https://www.sidqly.com/use-cases/${useCase.slug}`
          }
        ]
      },
      ...(useCase.faqs && useCase.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": useCase.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <>
      <SEO
        title={useCase.seo.title}
        description={useCase.seo.description}
        canonical={useCase.seo.canonical}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-sidqly-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <Link to="/use-cases" className="inline-flex items-center text-sidqly-green-soft hover:text-white font-bold text-sm mb-6 transition-colors">
                    &larr; Back to all use cases
                 </Link>
                 <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10 tracking-wider">
                    {useCase.audience}
                 </div>
                 <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                    {useCase.title}
                 </h1>
                 <p className="text-xl text-gray-300 mb-8 max-w-xl">
                    {useCase.heroSummary}
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                      Book Demo <ArrowRight size={18} />
                    </a>
                    <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                      Fill Inquiry Form
                    </a>
                 </div>
              </div>
              <div className="hidden lg:block">
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <ManualPaymentReview />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-3xl font-extrabold text-sidqly-navy mb-8">The Challenge</h2>
                  <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                     <ul className="space-y-4">
                        {useCase.problem.map((prob, i) => (
                           <li key={i} className="flex flex-col sm:flex-row gap-4">
                              <span className="text-red-500 font-bold mt-1">&times;</span>
                              <p className="text-gray-700">{prob}</p>
                           </li>
                        ))}
                        {useCase.manualWorkflowPain.map((pain, i) => (
                           <li key={`pain-${i}`} className="flex flex-col sm:flex-row gap-4">
                              <span className="text-red-500 font-bold mt-1">&times;</span>
                              <p className="text-gray-700">{pain}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-extrabold text-sidqly-navy mb-8">The Sidqly Workflow</h2>
                  <div className="bg-sidqly-ivory rounded-2xl p-8 border border-gray-100 h-full">
                     <ul className="space-y-4">
                        {useCase.sidqlyWorkflow.map((flow, i) => (
                           <li key={i} className="flex flex-col sm:flex-row gap-4">
                              <CheckCircle2 className="text-sidqly-green-emerald shrink-0 mt-1" size={20} />
                              <p className="text-gray-700 font-medium">{flow}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Scenario */}
      <section className="py-20 bg-sidqly-navy text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Activity className="mx-auto text-sidqly-gold mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Example Scenario</h2>
            <p className="text-xl text-gray-300 leading-relaxed italic">
               "{useCase.exampleScenario}"
            </p>
         </div>
      </section>

      {/* Privacy & Reporting */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-2xl font-bold text-sidqly-navy flex items-center gap-3 mb-6">
                     <ShieldCheck className="text-sidqly-green-emerald" /> Proof Privacy Boundary
                  </h2>
                  <ul className="space-y-4">
                     {useCase.proofPrivacyBoundary.map((bound, i) => (
                        <li key={i} className="flex gap-3 text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-soft mt-2 shrink-0"></div>
                           <span>{bound}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h2 className="text-2xl font-bold text-sidqly-navy flex items-center gap-3 mb-6">
                     <FileText className="text-sidqly-green-emerald" /> Reporting Outputs
                  </h2>
                  <ul className="space-y-4">
                     {useCase.reportingOutputs.map((out, i) => (
                        <li key={i} className="flex gap-3 text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-soft mt-2 shrink-0"></div>
                           <span>{out}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      {useCase.faqs && useCase.faqs.length > 0 && (
         <section className="py-20 bg-sidqly-ivory">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-extrabold text-sidqly-navy mb-12 text-center">Frequently Asked Questions</h2>
               <div className="space-y-8">
                  {useCase.faqs.map((faq, i) => (
                     <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg text-sidqly-navy mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* Related Resources CTA */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mb-8">Ready to see {useCase.title} in action?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
               <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
               <Link to="/modules" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Explore Modules</Link>
            </div>

            {(useCase.relatedResources.length > 0 || useCase.relatedIslamicTools.length > 0) && (
               <div className="pt-8 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Reading</p>
                  <div className="flex flex-wrap justify-center gap-3">
                     {useCase.relatedResources.map((res, i) => (
                        <Link key={i} to={res} className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100 transition-colors">
                           {res.split('/').pop()?.replace(/-/g, ' ')}
                        </Link>
                     ))}
                     {useCase.relatedIslamicTools.map((tool, i) => (
                        <Link key={i} to={tool} className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100 transition-colors">
                           {tool.split('/').pop()?.replace(/-/g, ' ')}
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </section>
    </>
  );
};

export default UseCaseDetail;
