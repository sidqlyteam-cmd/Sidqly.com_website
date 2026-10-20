import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { ArrowRight } from 'lucide-react';
import { generateCollectionSchema, generateBreadcrumbSchema } from '../../lib/schema';
import { seoData } from '../../data/seo';

import { comparisons } from '../../data/comparisons';

const CompareIndex: React.FC = () => {


  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Compare Sidqly", seoData.compare.description, "/compare"),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Compare", item: "/compare" }
      ])
    ]
  };

  return (
    <>
      <SEO
        {...seoData.compare}
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-sidqly-navy mb-8">Compare Sidqly</h1>
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
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">vs {item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {item.metaDescription}
                </p>
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  View Comparison <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy">Feature Comparison</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Why Sidqly is the purpose-built choice over generic tools.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Workflow Need</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">WhatsApp/Spreadsheets</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Basic Donation Form</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Generic CRM</th>
                  <th className="p-4 border-b-2 border-sidqly-green-deep font-bold text-sidqly-green-deep uppercase tracking-wider text-xs bg-sidqly-green-soft/10 rounded-t-xl">Sidqly</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Payment Review", "Manual checking, prone to errors", "Collects payment, skips verification", "Not native", "Hard gate manual review"],
                  ["Proof Approval", "Scattered images in chat", "Not available", "File attachments, no workflow", "Multi-stage verification engine"],
                  ["Donor-Safe Updates", "High risk of exposing faces", "Automated generic thank you", "Requires manual scrubbing", "Automated face-blurring"],
                  ["Recipient Privacy", "No boundaries", "N/A", "Basic permissions", "Strict role-based access"],
                  ["Zakat Fund Separation", "Manual color coding", "Single fund bucket", "Custom fields needed", "Native operational logic"],
                  ["Qurbani Lifecycle", "Chaotic Excel matching", "Just collects orders", "Not supported", "End-to-end share tracking"],
                  ["Ramadan Distribution", "Overwhelming chat updates", "N/A", "Hard to manage daily volume", "Scalable batch tracking"],
                  ["Vendor Tasks", "External chasing", "N/A", "Not built for fulfillment", "Dedicated vendor portals"],
                  ["Volunteer Tasks", "Unclear assignments", "N/A", "Basic task lists", "Field-ready task tracking"],
                  ["Corporate Reports", "Days of manual compilation", "Basic totals only", "Requires custom dashboards", "One-click board-ready PDFs"],
                  ["Receipts/Certificates", "Manual PDF generation", "Basic email receipt", "Requires integrations", "Automated, verifiable documents"],
                  ["Audit-Ready Records", "No clear history", "Payment history only", "General logs", "Timestamped compliance trails"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors group border-b border-gray-100">
                    <td className="p-4 font-bold text-sidqly-navy">{row[0]}</td>
                    <td className="p-4 text-gray-500">{row[1]}</td>
                    <td className="p-4 text-gray-500">{row[2]}</td>
                    <td className="p-4 text-gray-500">{row[3]}</td>
                    <td className="p-4 font-bold text-sidqly-green-deep bg-sidqly-green-soft/10 group-hover:bg-sidqly-green-soft/20 transition-colors">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/60 border border-emerald-200/80 text-slate-900 rounded-[40px] p-10 md:p-16 text-center shadow-sm">
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Ready for professional operations?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 <a href={brand.calendlyUrl} className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-md">Book Comparison Demo</a>
                 <Link to="/pricing" className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">View Pricing</Link>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default CompareIndex;
