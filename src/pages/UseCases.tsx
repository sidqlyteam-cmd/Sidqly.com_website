import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Layout, Users, FileText, Database, ShieldCheck, PieChart, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { useCases } from '../data/useCases';
import { brand } from '../config/brand';
import { generateCollectionSchema } from '../lib/schema';
import ProofTrustEngine from '../components/diagrams/ProofTrustEngine';
import ManualPaymentReview from '../components/diagrams/ManualPaymentReview';

const UseCases: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Use Cases | Sidqly", "Explore how Sidqly supports mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan ration teams, donors, volunteers, vendors, and corporate sponsors with verified giving workflows.", "/use-cases"),
      {
        "@type": "FAQPage",
        "mainEntity": useCases.flatMap(uc => uc.faqs).slice(0, 5).map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="Use Cases | Sidqly for Mosques, Islamic Charities, Donors, Volunteers, and Sponsors"
        description="Explore how Sidqly supports mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan ration teams, donors, volunteers, vendors, and corporate sponsors with verified giving workflows."
        canonical="https://www.sidqly.com/use-cases"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-sidqly-navy py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6">
            Built for Every Role in <span className="text-sidqly-gold">Islamic Giving</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            From mosque admins and charity directors to volunteers, vendors, and corporate sponsors—see how Sidqly’s verified workflows solve your specific operational challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
               Book Demo <ArrowRight size={18} />
             </a>
             <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
               Fill Inquiry Form
             </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-sidqly-ivory border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold text-gray-500">
               <div className="flex items-center gap-2"><Shield size={16} className="text-sidqly-green-emerald"/> Verified Workflows</div>
               <div className="flex items-center gap-2"><Database size={16} className="text-sidqly-green-emerald"/> Zakat Fund Separation</div>
               <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sidqly-green-emerald"/> Dignity-Safe Proof</div>
               <div className="flex items-center gap-2"><FileText size={16} className="text-sidqly-green-emerald"/> Audit-Ready Records</div>
            </div>
         </div>
      </section>

      {/* Start with your role / Role-based use-case cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">Start With Your Role</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select your role to see how Sidqly’s platform solves your specific operational challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                to={`/use-cases/${useCase.slug}`}
                className="group p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all block relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sidqly-green-soft/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-extrabold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep transition-colors">{useCase.title}</h3>
                <p className="text-sm font-bold text-sidqly-green-emerald mb-4">{useCase.audience}</p>
                <p className="text-gray-600 mb-6 line-clamp-3">{useCase.shortDescription}</p>
                <div className="flex items-center text-sidqly-green-deep font-bold text-sm">
                  Explore Use Case <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stakeholder Map & Workflows */}
      <section className="py-24 bg-sidqly-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
             <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Connecting Every Stakeholder</h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">Sidqly provides a secure, unified platform where every role interacts with the same source of truth, protected by strict privacy boundaries.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-12">
               <div>
                 <h3 className="text-2xl font-bold text-sidqly-navy mb-4 flex items-center gap-3"><ShieldCheck className="text-sidqly-green-emerald"/> The Proof Privacy Boundary</h3>
                 <p className="text-gray-600 mb-4">Sidqly enforces a strict separation between field operations and donor visibility. Volunteers and vendors upload proof; internal teams review and approve it; only then do donors receive dignified, sanitized updates.</p>
                 <Link to="/trust-center" className="text-sidqly-green-deep font-bold text-sm flex items-center gap-2 hover:underline">Learn about our privacy boundaries <ArrowRight size={14} /></Link>
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-sidqly-navy mb-4 flex items-center gap-3"><Activity className="text-sidqly-green-emerald"/> Manual vs Sidqly Workflow</h3>
                 <p className="text-gray-600 mb-4">Replace scattered WhatsApp groups and vulnerable spreadsheets with structured gates. Every payment is manually reviewed. Every distribution is verified.</p>
                 <Link to="/how-it-works" className="text-sidqly-green-deep font-bold text-sm flex items-center gap-2 hover:underline">See how it works <ArrowRight size={14} /></Link>
               </div>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
               {/* Visual placeholder for animated map, leveraging existing diagram */}
               <h4 className="font-bold text-center text-sidqly-navy mb-6">Core Review Gates</h4>
               <ManualPaymentReview />
               <div className="mt-8 border-t border-gray-100 pt-8">
                 <ProofTrustEngine />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Module Bundles by Use Case & Reporting */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Audit-Ready Reporting Outputs</h2>
                <p className="text-lg text-gray-600 mb-8">
                  No more scrambling to compile data for board meetings or sponsors. Sidqly automatically generates structured reports from your verified workflows.
                </p>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row gap-4 items-start">
                     <CheckCircle2 className="text-sidqly-green-emerald shrink-0 mt-1" />
                     <div>
                       <strong className="block text-sidqly-navy">Zakat vs. Sadaqah Separation</strong>
                       <span className="text-gray-600 text-sm">Automated ledgers keeping restricted funds logically separate.</span>
                     </div>
                  </li>
                  <li className="flex flex-col sm:flex-row gap-4 items-start">
                     <CheckCircle2 className="text-sidqly-green-emerald shrink-0 mt-1" />
                     <div>
                       <strong className="block text-sidqly-navy">Board & CSR Sponsor Packs</strong>
                       <span className="text-gray-600 text-sm">Aggregated, privacy-compliant impact reports ready for presentation.</span>
                     </div>
                  </li>
                  <li className="flex flex-col sm:flex-row gap-4 items-start">
                     <CheckCircle2 className="text-sidqly-green-emerald shrink-0 mt-1" />
                     <div>
                       <strong className="block text-sidqly-navy">Vendor Reconciliation</strong>
                       <span className="text-gray-600 text-sm">Clear logs of assigned vs. fulfilled Qurbani shares or ration packs.</span>
                     </div>
                  </li>
                </ul>
              </div>
              <div className="bg-sidqly-navy p-10 rounded-3xl text-white">
                 <h3 className="text-2xl font-bold mb-8">Essential Modules</h3>
                 <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Layout size={24} className="text-sidqly-gold" /></div>
                       <div>
                          <h4 className="font-bold">Campaigns & Zakat Module</h4>
                          <p className="text-sm text-gray-400">Core fund separation and campaign tracking.</p>
                       </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Users size={24} className="text-sidqly-gold" /></div>
                       <div>
                          <h4 className="font-bold">Volunteer & Vendor Modules</h4>
                          <p className="text-sm text-gray-400">External coordination and task assignment.</p>
                       </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><PieChart size={24} className="text-sidqly-gold" /></div>
                       <div>
                          <h4 className="font-bold">Reporting & Proof Modules</h4>
                          <p className="text-sm text-gray-400">Internal review gates and output generation.</p>
                       </div>
                    </div>
                 </div>
                 <Link to="/modules" className="mt-8 inline-block text-sidqly-green-soft font-bold text-sm hover:text-white transition-colors">View all 18 modules &rarr;</Link>
              </div>
           </div>
        </div>
      </section>

      {/* Connection Sections */}
      <section className="py-16 bg-sidqly-ivory">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-4">Islamic Planning Tools</h3>
                  <p className="text-gray-600 mb-6">Plan your operations effectively with our suite of free operational tools.</p>
                  <div className="flex flex-wrap gap-3">
                     <Link to="/islamic-calendar" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Islamic Calendar</Link>
                     <Link to="/ramadan-planner" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Ramadan Planner</Link>
                     <Link to="/eid-qurbani-planner" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Qurbani Planner</Link>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-4">Seasonal Giving Guides</h3>
                  <p className="text-gray-600 mb-6">Explore detailed operational guides for peak giving seasons.</p>
                  <div className="flex flex-wrap gap-3">
                     <Link to="/resources/eid-giving" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Eid Giving</Link>
                     <Link to="/resources/ramadan-giving" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Ramadan Giving</Link>
                     <Link to="/resources/qurbani-operations" className="text-sm bg-sidqly-ivory px-4 py-2 rounded-lg font-bold text-sidqly-navy hover:bg-gray-100">Qurbani Operations</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sidqly-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to professionalize your operations?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join the organizations that trust Sidqly to handle their manual review, proof approval, and reporting workflows.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
               Book a Demo <ArrowRight size={18} />
             </a>
             <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-center">
               Fill Inquiry Form
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCases;
