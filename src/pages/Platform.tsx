import React from 'react';
import SEO from '../components/SEO';
import { Code, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '../lib/schema';
import { Link } from 'react-router-dom';

const PlatformPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Platform", item: "/platform" }
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Modular SaaS Operating Platform | Sidqly"
        description="Learn how Sidqly's modular operating system organizes payment review, proof approval, and dignity-safe updates in one secure cloud workspace."
        canonical="/platform"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-8">The Giving Operations Platform</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto">
             Replace fragmented workflows with a secure, modular, and verified SaaS operating system built for modern Islamic charities.
          </p>
        </div>
      </section>

      {/* Core Platform Workspaces */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                 <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Unifying All Giving Stakeholders</h2>
                 <p className="text-gray-600 leading-relaxed mb-6">
                    Sidqly provides role-based digital workspaces so that everyone involved in your campaigns works inside the same secure environment, matching your exact permissions.
                 </p>
                 <div className="space-y-4">
                    {[
                      { role: "Mosque Admins & Trustees", desc: "Access the complete high-level dashboard, configure campaigns, and review final impact reports." },
                      { role: "Finance Reviewers", desc: "Audit and verify incoming screenshots, manual bank transfers, and cash ledger entries." },
                      { role: "Field Volunteers & Vendors", desc: "Receive task details and submit verified delivery proof with automated face-blurring." },
                      { role: "Sponsors & Donors", desc: "Access secure, non-indexed donor update portals to verify their direct giving impact." }
                    ].map((stakeholder, i) => (
                       <div key={i} className="flex gap-3">
                          <CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} />
                          <div>
                             <h4 className="font-bold text-sidqly-navy text-sm">{stakeholder.role}</h4>
                             <p className="text-xs text-gray-500 leading-relaxed">{stakeholder.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-sidqly-ivory p-8 rounded-[40px] border border-gray-100 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-sidqly-navy mb-4 flex items-center gap-2">
                    <Code className="text-sidqly-green-deep" /> Pure SaaS Architecture
                 </h3>
                 <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Because Sidqly is a specialized, remote software-as-a-service (SaaS) platform, you don't need to install any hardware or maintain database servers. Your team can securely access the workspace from any desktop or mobile browser.
                 </p>
                 <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-500 leading-relaxed">
                    <strong>Note on Payment Isolation:</strong> Sidqly is purely an administrative tracker. We do not hold giving funds, process transactions directly, or maintain cash custody.
                 </div>
              </div>
           </div>

           <div className="text-center">
              <h2 className="text-2xl font-bold text-sidqly-navy mb-8">Ready to see our modular operating system?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 <Link to="/modules" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                    Explore Modules <ArrowRight size={18} />
                 </Link>
                 <Link to="/what-is-sidqly" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                    What is Sidqly?
                 </Link>
              </div>
           </div>

        </div>
      </section>
    </>
  );
};

export default PlatformPage;
