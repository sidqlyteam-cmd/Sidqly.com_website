import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { CheckCircle2, XCircle } from 'lucide-react';
import { generateBreadcrumbSchema } from '../../lib/schema';

const CompareDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Alternative';

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Compare", item: "/compare" },
        { name: `Sidqly vs ${title}`, item: `/compare/${slug}` }
      ])
    ]
  };

  return (
    <>
      <SEO
        title={`Sidqly vs ${title} | ${brand.name}`}
        canonical={`/compare/${slug}`}
        schema={schema}
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Sidqly vs {title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Why professional organizations choose Sidqly for their giving operations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="bg-white p-8 md:p-12 rounded-[40px] border border-red-50 shadow-sm">
                <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-2">
                   <XCircle className="text-red-500" /> With {title}
                </h3>
                <ul className="space-y-6">
                   <li className="text-gray-600 flex items-start gap-3">
                      <span className="mt-1">✕</span> Fragmented manual processes and data silos.
                   </li>
                   <li className="text-gray-600 flex items-start gap-3">
                      <span className="mt-1">✕</span> Significant dignity risks with shared recipient photos.
                   </li>
                   <li className="text-gray-600 flex items-start gap-3">
                      <span className="mt-1">✕</span> Hours of manual work for every donor update.
                   </li>
                   <li className="text-gray-600 flex items-start gap-3">
                      <span className="mt-1">✕</span> No clear audit trail for Zakat fund separation.
                   </li>
                </ul>
             </div>

             <div className="bg-white p-8 md:p-12 rounded-[40px] border border-sidqly-green-emerald shadow-xl ring-4 ring-sidqly-green-soft/20">
                <h3 className="text-2xl font-bold text-sidqly-green-deep mb-8 flex items-center gap-2">
                   <CheckCircle2 className="text-sidqly-green-emerald" /> With Sidqly
                </h3>
                <ul className="space-y-6">
                   <li className="text-sidqly-navy font-bold flex items-start gap-3">
                      <span className="mt-1 text-sidqly-green-emerald">✓</span> Unified, professional operating platform.
                   </li>
                   <li className="text-sidqly-navy font-bold flex items-start gap-3">
                      <span className="mt-1 text-sidqly-green-emerald">✓</span> Automated dignity-safe face blurring and secure links.
                   </li>
                   <li className="text-sidqly-navy font-bold flex items-start gap-3">
                      <span className="mt-1 text-sidqly-green-emerald">✓</span> Real-time board-ready reporting in seconds.
                   </li>
                   <li className="text-sidqly-navy font-bold flex items-start gap-3">
                      <span className="mt-1 text-sidqly-green-emerald">✓</span> Strict logical and operational fund separation.
                   </li>
                </ul>
             </div>
          </div>

          <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] text-center">
             <h2 className="text-3xl font-bold mb-8">Make the switch to professional operations.</h2>
             <div className="flex flex-wrap justify-center gap-4">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Migration Demo</a>
                <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Fill Inquiry Form</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareDetail;
