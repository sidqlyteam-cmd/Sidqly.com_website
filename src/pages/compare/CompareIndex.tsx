import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { ArrowRight } from 'lucide-react';

const CompareIndex: React.FC = () => {
  const comparisons = [
    { slug: "manual-spreadsheets", name: "Manual Spreadsheets", desc: "Why Excel is not an operating system for charity." },
    { slug: "whatsapp-coordination", name: "WhatsApp Groups", desc: "The hidden risks of managing impact in chat apps." },
    { slug: "basic-donation-form", name: "Basic Donation Forms", desc: "Sidqly vs simple payment buttons." },
    { slug: "mosque-website", name: "Simple Mosque Websites", desc: "Professional operations vs basic digital presence." },
    { slug: "generic-crm", name: "Generic CRMs", desc: "Why Islamic giving needs specialized workflows." },
    { slug: "google-forms", name: "Google Forms", desc: "Moving from simple intake to verified workflows." }
  ];

  return (
    <>
      <SEO
        title="Compare Sidqly"
        description="See how Sidqly compares to manual spreadsheets, WhatsApp coordination, and generic CRM tools for Islamic giving."
        canonical="/compare"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-8">Compare Sidqly</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Understand why leading organizations choose a professional operating platform over fragmented manual tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {comparisons.map((item) => (
              <Link
                key={item.slug}
                to={`/compare/${item.slug}`}
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-xl transition-all group text-left flex flex-col"
              >
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">vs {item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  View Comparison <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-sidqly-navy text-white rounded-[60px] p-10 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-8">Ready for professional operations?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">Book Comparison Demo</a>
                 <Link to="/pricing" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">View Pricing</Link>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default CompareIndex;
