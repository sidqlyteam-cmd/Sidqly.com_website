import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { legalPolicies } from '../data/legalPolicies';
import TrustLinkStrip from '../components/TrustLinkStrip';
import { ArrowLeft, Calendar, FileText, HelpCircle, ShieldAlert } from 'lucide-react';

const LegalDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = legalPolicies.find(p => p.slug === slug);

  if (!policy) {
    return (
      <div className="py-20 text-center bg-sidqly-ivory min-h-screen flex flex-col justify-center items-center">
        <ShieldAlert className="text-red-500 mb-6" size={48} />
        <h1 className="text-3xl font-bold text-sidqly-navy">Policy Not Found</h1>
        <p className="mt-4 text-gray-600 mb-8 max-w-md">The policy document you are looking for does not exist or has been moved.</p>
        <Link to="/legal" className="text-white bg-sidqly-green-emerald px-6 py-3 rounded-xl font-bold hover:bg-sidqly-green-deep transition-all">Back to Legal Overview</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${policy.title} | Legal & Compliance`}
        description={policy.description}
        canonical={`/legal/${policy.slug}`}
      />

      <TrustLinkStrip />

      <section className="py-12 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link to="/legal" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold mb-8 hover:text-sidqly-green-emerald transition-colors">
            <ArrowLeft size={16} /> Back to Legal Overview
          </Link>

          {/* Policy Card */}
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">

            {/* Header */}
            <div className="border-b border-gray-100 pb-8 mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mb-4">
                {policy.h1}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} /> Last updated: {policy.lastUpdated}
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText size={16} /> Official Operational Statement
                </span>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              {policy.sections.map((section, idx) => {
                if (section.isAlert) {
                  return (
                    <div key={idx} className="bg-sidqly-navy text-white p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
                      <h3 className="text-xl font-bold text-sidqly-green-soft mb-3 flex items-center gap-2">
                        <ShieldAlert size={20} /> {section.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">
                        {section.content}
                      </p>
                    </div>
                  );
                }

                return (
                  <section key={idx} className="prose prose-sidqly max-w-none text-gray-700">
                    <h2 className="text-2xl font-bold text-sidqly-navy mb-4 flex items-center gap-2">
                      {section.isList ? <HelpCircle size={20} className="text-sidqly-green-emerald" /> : null}
                      {section.title}
                    </h2>

                    {section.isList && Array.isArray(section.content) ? (
                      <ul className="space-y-4 list-none pl-0">
                        {section.content.map((item, itemIdx) => {
                          const [boldText, ...rest] = item.split(': ');
                          return (
                            <li key={itemIdx} className="bg-sidqly-ivory p-5 rounded-2xl border border-gray-100/60 leading-relaxed text-sm">
                              <strong className="text-sidqly-navy block mb-1">{boldText}</strong>
                              <span className="text-gray-600">{rest.join(': ')}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{section.content}</p>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-16 p-6 bg-sidqly-green-soft/20 border border-sidqly-green-soft/50 rounded-2xl text-center">
              <p className="text-sm font-bold text-sidqly-navy">
                Sidqly is an administrative SaaS operating platform. All legal, tax, religious, accounting, and cash-management compliance remain the responsibility of the utilizing organization.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LegalDetail;
