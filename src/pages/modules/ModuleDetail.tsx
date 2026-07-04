import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { modules } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import { Box, ChevronRight, CheckCircle2, ShieldCheck, Share2, FileText, ChevronDown, ArrowRight, Link as LinkIcon } from 'lucide-react';
import { generateServiceSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQSchema } from '../../lib/schema';

const ModuleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const moduleData = modules.find(m => m.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!moduleData) {
    return (
      <div className="py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-sidqly-navy">Module not found</h1>
        <p className="text-gray-600 mt-4 mb-8">The module you are looking for does not exist or has been moved.</p>
        <Link to="/modules" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">View all modules</Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(moduleData.title, moduleData.desc, `/modules/${moduleData.slug}`),
      ...(moduleData.workflow ? [generateHowToSchema(`How ${moduleData.title} Works`, moduleData.problem || moduleData.desc, moduleData.workflow)] : []),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...(moduleData.faqs && moduleData.faqs.length > 0 ? [generateFAQSchema(moduleData.faqs)] : []),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Modules", item: "/modules" },
        { name: moduleData.title, item: `/modules/${moduleData.slug}` }
      ])
    ]
  };

  return (
    <>
      <SEO
        title={`${moduleData.title} Module | Sidqly`}
        description={moduleData.desc}
        canonical={`/modules/${moduleData.slug}`}
        schema={schema}
      />





      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto relative">
        <div className="flex-1 w-full overflow-hidden">
          {/* Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-xs font-medium text-gray-500">
              <Link to="/" className="hover:text-sidqly-green-deep transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to="/modules" className="hover:text-sidqly-green-deep transition-colors">Modules</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-gray-800">{moduleData.title}</span>
            </div>
          </div>

          {/* Hero Section */}
          <section id="overview" className="py-20 bg-sidqly-ivory overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidqly-green-soft text-sidqly-green-deep text-xs font-bold uppercase tracking-widest mb-6 border border-sidqly-green-emerald/20">
                    <Box size={14} /> {"Core Module"}
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">
                    {moduleData.title}
                  </h1>
                  <p className="text-2xl font-medium text-sidqly-green-deep mb-8 leading-tight border-l-4 border-sidqly-gold pl-5 py-2 bg-white/50 rounded-r-xl">
                    {moduleData.desc}
                  </p>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                    {moduleData.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                      Book Demo
                    </a>
                    <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 text-center">
                      Fill Inquiry Form
                    </a>
                  </div>

                  <div className="mt-8 flex items-center gap-6 text-sm font-medium text-gray-500">
                    <Link to="/pricing" className="hover:text-sidqly-green-deep underline underline-offset-4 transition-colors">View Pricing</Link>
                    <Link to="/request-organization" className="hover:text-sidqly-green-deep underline underline-offset-4 transition-colors">Request Organization</Link>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-xl lg:max-w-none">
                  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl relative">
                      <div className="absolute top-0 right-10 -translate-y-1/2 bg-sidqly-gold text-white px-4 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-widest">
                        Primary Users
                      </div>
                      <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-sidqly-green-emerald" /> Who Uses It
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-8">
                        <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">{moduleData.who}</span>
                      </div>

                      <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-red-400" /> Problems Solved
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">×</div><span className="text-gray-700">{moduleData.problem}</span></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition Grid */}
          <section id="value-proposition" className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">

                  {/* What Team Gets */}
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sidqly-green-deep mb-6">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-sidqly-navy mb-4">What the Team Gets</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-sidqly-green-emerald shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{moduleData.benefit}</span></li>
                      </ul>
                  </div>

                  {/* What Donors See */}
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sidqly-green-deep mb-6">
                        <Share2 size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-sidqly-navy mb-4">What Donors See</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-sidqly-green-emerald shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{moduleData.output}</span></li>
                      </ul>
                  </div>

                  {/* Privacy & Dignity */}
                  <div className="bg-sidqly-navy p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
                      <div className="absolute -right-10 -bottom-10 opacity-10">
                        <ShieldCheck size={160} />
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sidqly-gold mb-6 relative z-10">
                        <ShieldCheck size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 relative z-10">Privacy & Dignity</h3>
                      <ul className="space-y-3 relative z-10">
                        <li className="flex items-start gap-2"><ShieldCheck size={18} className="text-sidqly-gold shrink-0 mt-0.5" /><span className="text-gray-300 text-sm">{moduleData.disclaimer || "Standard privacy boundary applies."}</span></li>
                      </ul>
                  </div>

                </div>
            </div>
          </section>

          {/* Contextual Graphic */}
        {(moduleData.slug === 'privacy-dignity-controls' || moduleData.slug === 'proof-trust-engine' || moduleData.slug === 'donor-safe-impact-updates') && (
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div />
           </div>
        )}
        {(moduleData.slug === 'manual-payment-review' || moduleData.slug === 'charity-request-intake' || moduleData.slug === 'zakat-fund-separation') && (
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div />
           </div>
        )}

        {/* Workflow Section */}
          <section id="workflow" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-6">Step-by-Step Workflow</h2>
                  <p className="text-lg text-gray-600">See exactly how data moves through this module. Every step is designed to replace manual communication and ensure accountability.</p>
              </div>

              <div className="max-w-4xl mx-auto">
                  <div />
              </div>
            </div>
          </section>

          {/* Outputs and Statuses */}
          <section id="outputs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                        <FileText className="text-sidqly-green-emerald" /> Outputs & Reports
                      </h3>
                      <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-500 uppercase tracking-wider text-xs mb-3">Direct Outputs</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-white border border-gray-200 text-sidqly-navy font-bold px-4 py-2 rounded-lg text-sm shadow-sm">{moduleData.output}</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-500 uppercase tracking-wider text-xs mb-3">Available Reports</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-white border border-gray-200 text-sidqly-green-deep font-medium px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2"><FileText size={14} /> Status Tracking</span>
                            </div>
                        </div>
                      </div>
                  </div>

                  (
                      <div>
                        <h3 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                            <CheckCircle2 className="text-sidqly-green-emerald" /> Statuses Used
                        </h3>
                        <div className="bg-sidqly-ivory p-8 rounded-[2rem] border border-sidqly-green-soft/30">
                            <p className="text-sm text-gray-600 mb-6">This module tracks state changes using the following strict statuses to ensure operational clarity:</p>
                            <div className="flex flex-col gap-3">
                              {["Pending", "Review", "Approved"].map((status, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-sidqly-green-emerald"></div>
                                    <span className="font-bold text-sidqly-navy">{status}</span>
                                  </div>
                              ))}
                            </div>
                        </div>
                      </div>
                </div>
            </div>
          </section>

          {/* FAQs */}
          {moduleData.faqs && moduleData.faqs.length > 0 && (
            <section id="faqs" className="py-20 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Frequently Asked Questions</h2>
                  <p className="text-gray-600">Common questions about the {moduleData.title} module.</p>
                </div>
                <div className="space-y-4">
                  {moduleData.faqs.map((faq: { question: string, answer: string }, index: number) => (
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

          {/* Disclaimer */}
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                  <p className="text-sm text-gray-500 italic font-medium">
                    Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
                  </p>
                </div>
            </div>
          </section>

          {/* Internal Links / Related */}
          <section id="next-steps" className="py-20 bg-sidqly-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-10 text-center">Explore Related Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-8">

                {/* Related Modules / Links */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 md:col-span-2">
                    <h3 className="font-bold text-lg mb-4 text-sidqly-gold flex items-center gap-2"><Box size={18} /> Related Areas</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {moduleData.internalLinks ? moduleData.internalLinks.map((link: { title: string, url: string }, i: number) => (
                         <li key={i}>
                           <Link to={link.url} className="text-white hover:text-sidqly-green-soft flex items-center gap-2 group">
                             <span className="group-hover:translate-x-1 transition-transform">{link.title}</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                         </li>
                      )) : (
                         <li>
                           <Link to="/modules" className="text-white hover:text-sidqly-green-soft flex items-center gap-2 group">
                             <span className="group-hover:translate-x-1 transition-transform">Explore All Modules</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                         </li>
                      )}
                    </ul>
                </div>

                {/* Helpful Links */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2"><LinkIcon size={18} /> Helpful Links</h3>
                    <ul className="space-y-3">
                      <li><Link to="/compare" className="text-gray-300 hover:text-white">Compare Sidqly</Link></li>
                      <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing Plans</Link></li>
                      <li><a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Request Organization</a></li>
                      <li><Link to="/modules" className="text-sidqly-gold hover:text-white font-bold mt-2 inline-block">← Back to All Modules</Link></li>
                    </ul>
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar Desktop */}
        <div className="hidden lg:block w-80 shrink-0 pt-20 pr-4 pb-20 border-l border-gray-100 bg-gray-50/50">
           <div />
        </div>
      </div>
    </>
  );
};

export default ModuleDetail;
