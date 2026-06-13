import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { FileText } from 'lucide-react';

const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Resource';

  return (
    <>
      <SEO title={title} canonical={`/resources/${slug}`} />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/help" className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold mb-12 hover:gap-3 transition-all">
            ← Back to Help
          </Link>

          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
             <div className="w-16 h-16 bg-sidqly-ivory rounded-2xl flex items-center justify-center text-sidqly-green-deep mb-8">
                <FileText size={32} />
             </div>
             <h1 className="text-4xl font-extrabold text-sidqly-navy mb-8">{title}</h1>
             <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                   This professional resource provides guidance on {title.toLowerCase()} for modern Islamic organizations. Implementing these standards helps ensure operational trust and recipient dignity.
                </p>
                <h3 className="text-2xl font-bold text-sidqly-navy mt-12 mb-6">Key Considerations</h3>
                <ul className="list-disc pl-6 space-y-4">
                   <li>Standardizing data collection across all service lines.</li>
                   <li>Maintaining strict manual review gates for financial integrity.</li>
                   <li>Prioritizing dignity-safe proof in all donor communications.</li>
                   <li>Generating board-ready reports to maintain leadership transparency.</li>
                </ul>
             </div>

             <div className="mt-16 pt-16 border-t border-gray-100">
                <div className="bg-sidqly-navy rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                   <div>
                      <h4 className="font-bold text-xl mb-2">Need a custom guide?</h4>
                      <p className="text-gray-400 text-sm">Our team can help your organization set up custom workflows.</p>
                   </div>
                   <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex-shrink-0">
                      Book Strategy Call
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceDetail;
