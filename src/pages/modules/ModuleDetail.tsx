import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { modules } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import {
  Box, ChevronRight, CheckCircle2, ShieldCheck, Share2,
  FileText, ChevronDown, ArrowRight, Link as LinkIcon, MapPin, LayoutTemplate
} from 'lucide-react';
import { generateServiceSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQSchema } from '../../lib/schema';
import ModuleWorkflowDiagram from '../../components/ModuleWorkflowDiagram';

const categoriesMap: Record<string, string> = {
  "donations-funds": "Donations & Funds",
  "programs-fulfillment": "Programs & Fulfillment",
  "proof-privacy-trust": "Proof, Privacy & Trust",
  "donor-communication": "Donor Communication",
  "reporting-management": "Reporting & Management",
  "launch-support": "Launch & Support"
};

// Explicit high-context mapping of each module slug to relevant Use Cases (from useCases.ts)
const moduleToUseCasesMap: Record<string, { title: string; url: string }[]> = {
  "manual-payment-review": [
    { title: "Mosques & Masjids", url: "/use-cases/mosques" },
    { title: "Sadaqah Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" },
    { title: "Qurbani Campaign Management", url: "/use-cases/qurbani-organizers" }
  ],
  "proof-trust-engine": [
    { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
    { title: "Organizations managing Volunteers", url: "/use-cases/volunteers" },
    { title: "Qurbani Campaign Management", url: "/use-cases/qurbani-organizers" }
  ],
  "donor-safe-updates": [
    { title: "Organizations serving Donors", url: "/use-cases/donors" },
    { title: "Islamic Charities", url: "/use-cases/islamic-charities" }
  ],
  "zakat-fund-separation": [
    { title: "Zakat Committees", url: "/use-cases/zakat-committees" },
    { title: "Mosques & Masjids", url: "/use-cases/mosques" }
  ],
  "sadaqah-campaigns": [
    { title: "Sadaqah Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" },
    { title: "Mosques & Masjids", url: "/use-cases/mosques" }
  ],
  "qurbani-lifecycle": [
    { title: "Qurbani Campaign Management", url: "/use-cases/qurbani-organizers" },
    { title: "Organizations managing Vendors", url: "/use-cases/vendors" }
  ],
  "ramadan-meals-rations": [
    { title: "Ramadan Ration Teams", url: "/use-cases/ramadan-ration-teams" },
    { title: "Organizations managing Volunteers", url: "/use-cases/volunteers" }
  ],
  "charity-request-intake": [
    { title: "Zakat Committees", url: "/use-cases/zakat-committees" },
    { title: "Sadaqah Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" }
  ],
  "vendor-fulfillment": [
    { title: "Organizations managing Vendors", url: "/use-cases/vendors" },
    { title: "Qurbani Campaign Management", url: "/use-cases/qurbani-organizers" }
  ],
  "volunteer-coordination": [
    { title: "Organizations managing Volunteers", url: "/use-cases/volunteers" },
    { title: "Ramadan Ration Teams", url: "/use-cases/ramadan-ration-teams" }
  ],
  "corporate-csr-zakat": [
    { title: "Corporate Sponsors (CSR)", url: "/use-cases/corporate-sponsors" },
    { title: "Board & Reporting Teams", url: "/use-cases/board-reporting-teams" }
  ],
  "receipts-certificates": [
    { title: "Organizations serving Donors", url: "/use-cases/donors" },
    { title: "Qurbani Campaign Management", url: "/use-cases/qurbani-organizers" }
  ],
  "qr-code-verification": [
    { title: "Organizations serving Donors", url: "/use-cases/donors" },
    { title: "Board & Reporting Teams", url: "/use-cases/board-reporting-teams" }
  ],
  "reports-board-packs": [
    { title: "Board & Reporting Teams", url: "/use-cases/board-reporting-teams" },
    { title: "Corporate Sponsors (CSR)", url: "/use-cases/corporate-sponsors" }
  ],
  "privacy-dignity-controls": [
    { title: "Islamic Charities", url: "/use-cases/islamic-charities" },
    { title: "Zakat Committees", url: "/use-cases/zakat-committees" }
  ],
  "audit-ready-records": [
    { title: "Board & Reporting Teams", url: "/use-cases/board-reporting-teams" },
    { title: "Zakat Committees", url: "/use-cases/zakat-committees" }
  ],
  "donor-communication": [
    { title: "Organizations serving Donors", url: "/use-cases/donors" },
    { title: "Sadaqah Campaign Teams", url: "/use-cases/sadaqah-campaign-teams" }
  ],
  "pilot-launch-support": [
    { title: "Community Members Requesting Organization", url: "/use-cases/community-request-organization" }
  ]
};

// Explicit mapping of each module slug to relevant Locations (from cityContentTier1)
const moduleToLocationsMap: Record<string, { title: string; url: string }[]> = {
  "manual-payment-review": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Toronto, Canada", url: "/locations/toronto-islamic-charity-software" },
    { title: "Karachi, Pakistan", url: "/locations/karachi-islamic-charity-software" }
  ],
  "proof-trust-engine": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "Manchester, UK", url: "/locations/manchester-islamic-charity-software" },
    { title: "Dubai, UAE", url: "/locations/dubai-islamic-charity-software" },
    { title: "Lahore, Pakistan", url: "/locations/lahore-islamic-charity-software" }
  ],
  "donor-safe-updates": [
    { title: "Birmingham, UK", url: "/locations/birmingham-islamic-charity-software" },
    { title: "Chicago, USA", url: "/locations/chicago-islamic-charity-software" },
    { title: "Toronto, Canada", url: "/locations/toronto-islamic-charity-software" },
    { title: "Sydney, Australia", url: "/locations/sydney-islamic-charity-software" }
  ],
  "zakat-fund-separation": [
    { title: "Birmingham, UK", url: "/locations/birmingham-islamic-charity-software" },
    { title: "Houston, USA", url: "/locations/houston-islamic-charity-software" },
    { title: "Mississauga, Canada", url: "/locations/mississauga-islamic-charity-software" },
    { title: "Riyadh, Saudi Arabia", url: "/locations/riyadh-islamic-charity-software" }
  ],
  "sadaqah-campaigns": [
    { title: "Manchester, UK", url: "/locations/manchester-islamic-charity-software" },
    { title: "Dallas, USA", url: "/locations/dallas-islamic-charity-software" },
    { title: "Dubai, UAE", url: "/locations/dubai-islamic-charity-software" },
    { title: "Kuala Lumpur, Malaysia", url: "/locations/kuala-lumpur-islamic-charity-software" }
  ],
  "qurbani-lifecycle": [
    { title: "Leicester, UK", url: "/locations/leicester-islamic-charity-software" },
    { title: "Chicago, USA", url: "/locations/chicago-islamic-charity-software" },
    { title: "Abu Dhabi, UAE", url: "/locations/abu-dhabi-islamic-charity-software" },
    { title: "Karachi, Pakistan", url: "/locations/karachi-islamic-charity-software" }
  ],
  "ramadan-meals-rations": [
    { title: "Leicester, UK", url: "/locations/leicester-islamic-charity-software" },
    { title: "Dallas, USA", url: "/locations/dallas-islamic-charity-software" },
    { title: "Sharjah, UAE", url: "/locations/sharjah-islamic-charity-software" },
    { title: "Karachi, Pakistan", url: "/locations/karachi-islamic-charity-software" }
  ],
  "charity-request-intake": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "Houston, USA", url: "/locations/houston-islamic-charity-software" },
    { title: "Kuala Lumpur, Malaysia", url: "/locations/kuala-lumpur-islamic-charity-software" }
  ],
  "vendor-fulfillment": [
    { title: "Manchester, UK", url: "/locations/manchester-islamic-charity-software" },
    { title: "Chicago, USA", url: "/locations/chicago-islamic-charity-software" },
    { title: "Doha, Qatar", url: "/locations/doha-islamic-charity-software" }
  ],
  "volunteer-coordination": [
    { title: "Leicester, UK", url: "/locations/leicester-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Toronto, Canada", url: "/locations/toronto-islamic-charity-software" }
  ],
  "corporate-csr-zakat": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Riyadh, Saudi Arabia", url: "/locations/riyadh-islamic-charity-software" }
  ],
  "receipts-certificates": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Toronto, Canada", url: "/locations/toronto-islamic-charity-software" }
  ],
  "qr-code-verification": [
    { title: "Birmingham, UK", url: "/locations/birmingham-islamic-charity-software" },
    { title: "Dallas, USA", url: "/locations/dallas-islamic-charity-software" },
    { title: "Dubai, UAE", url: "/locations/dubai-islamic-charity-software" }
  ],
  "reports-board-packs": [
    { title: "Birmingham, UK", url: "/locations/birmingham-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Mississauga, Canada", url: "/locations/mississauga-islamic-charity-software" }
  ],
  "privacy-dignity-controls": [
    { title: "Leicester, UK", url: "/locations/leicester-islamic-charity-software" },
    { title: "Dallas, USA", url: "/locations/dallas-islamic-charity-software" },
    { title: "Doha, Qatar", url: "/locations/doha-islamic-charity-software" }
  ],
  "audit-ready-records": [
    { title: "Manchester, UK", url: "/locations/manchester-islamic-charity-software" },
    { title: "New York, USA", url: "/locations/new-york-islamic-charity-software" },
    { title: "Abu Dhabi, UAE", url: "/locations/abu-dhabi-islamic-charity-software" }
  ],
  "donor-communication": [
    { title: "London, UK", url: "/locations/london-islamic-charity-software" },
    { title: "Houston, USA", url: "/locations/houston-islamic-charity-software" },
    { title: "Toronto, Canada", url: "/locations/toronto-islamic-charity-software" }
  ],
  "pilot-launch-support": [
    { title: "Birmingham, UK", url: "/locations/birmingham-islamic-charity-software" },
    { title: "Dallas, USA", url: "/locations/dallas-islamic-charity-software" },
    { title: "Mississauga, Canada", url: "/locations/mississauga-islamic-charity-software" }
  ]
};

const ModuleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const moduleData = modules.find(m => m.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categoryName = useMemo(() => {
    if (!moduleData) return "";
    return categoriesMap[moduleData.category] || "";
  }, [moduleData]);

  const relatedUseCases = useMemo(() => {
    if (!moduleData) return [];
    return moduleToUseCasesMap[moduleData.slug] || [];
  }, [moduleData]);

  const relevantLocations = useMemo(() => {
    if (!moduleData) return [];
    return moduleToLocationsMap[moduleData.slug] || [];
  }, [moduleData]);

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

      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto relative bg-white">
        <div className="flex-1 w-full overflow-hidden">

          {/* Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center text-xs font-semibold text-gray-500">
              <Link to="/" className="hover:text-sidqly-green-deep transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to="/modules" className="hover:text-sidqly-green-deep transition-colors">Modules</Link>
              {categoryName && (
                <>
                  <ChevronRight size={14} className="mx-2" />
                  <span className="text-gray-400 font-medium">{categoryName}</span>
                </>
              )}
              <ChevronRight size={14} className="mx-2" />
              <span className="text-gray-800 font-extrabold">{moduleData.title}</span>
            </div>
          </div>

          {/* Hero Section */}
          <section id="overview" className="py-20 bg-sidqly-ivory overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidqly-green-soft text-sidqly-green-deep text-xs font-bold uppercase tracking-widest mb-6 border border-sidqly-green-emerald/20">
                    <Box size={14} /> {categoryName || "Core Module"}
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">
                    {moduleData.title}
                  </h1>
                  <p className="text-xl font-bold text-sidqly-green-deep mb-8 leading-tight border-l-4 border-sidqly-gold pl-5 py-2 bg-white/50 rounded-r-xl">
                    {moduleData.desc}
                  </p>
                  <p className="text-md text-gray-600 mb-10 leading-relaxed max-w-2xl">
                    Sidqly's {moduleData.title.toLowerCase()} module is carefully built to assist Islamic charities, mosques, and Zakat teams coordinate tasks, review payment and fulfillment evidence, maintain transparency, and prepare structured reporting summaries securely.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href={brand.links?.calendly || "https://calendly.com/d/dvzs-3zf-cgz"} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                      Book Demo
                    </a>
                    <a href={brand.links?.inquiryForm || "/inquiry-form"} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 text-center">
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
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">×</div>
                          <span className="text-gray-700 text-sm leading-relaxed">{moduleData.problem}</span>
                        </li>
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
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-sidqly-green-emerald shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{moduleData.benefit}</span>
                        </li>
                      </ul>
                  </div>

                  {/* What Donors See */}
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sidqly-green-deep mb-6">
                        <Share2 size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-sidqly-navy mb-4">What Donors See</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-sidqly-green-emerald shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{moduleData.output}</span>
                        </li>
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
                        <li className="flex items-start gap-2">
                          <ShieldCheck size={18} className="text-sidqly-gold shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm leading-relaxed">{moduleData.disclaimer || "Standard privacy boundary applies. Beneficiary faces and sensitive information are redacted or blurred before sharing with external sponsors."}</span>
                        </li>
                      </ul>
                  </div>

                </div>
            </div>
          </section>

          {/* Quick Answer Block */}
          {moduleData.quickAnswer && (
            <section className="py-12 bg-white border-b border-gray-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-sidqly-ivory p-8 rounded-[2rem] border border-sidqly-green-soft/30 flex gap-6 items-start">
                   <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center flex-shrink-0">
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-sidqly-navy mb-2">Quick Answer</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">{moduleData.quickAnswer}</p>
                   </div>
                </div>
              </div>
            </section>
          )}

          {/* Workflow Section */}
          {moduleData.workflow && moduleData.workflow.length > 0 && (
            <section id="workflow" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-6">Step-by-Step Workflow</h2>
                    <p className="text-lg text-gray-600">See exactly how data moves through this module. Every step is designed to replace manual communication and ensure accountability.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <ModuleWorkflowDiagram steps={moduleData.workflow} />
                </div>
              </div>
            </section>
          )}

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
                              <span className="bg-white border border-gray-200 text-sidqly-green-deep font-medium px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2"><FileText size={14} /> Status Tracking Logs</span>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                        <CheckCircle2 className="text-sidqly-green-emerald" /> Statuses Used
                    </h3>
                    <div className="bg-sidqly-ivory p-8 rounded-[2rem] border border-sidqly-green-soft/30">
                        <p className="text-sm text-gray-600 mb-6">This module tracks state changes using the following strict statuses to ensure operational clarity:</p>
                        <div className="flex flex-col gap-3">
                          {["Pending Intention", "Under Human Review", "Verified & Approved"].map((status, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-sidqly-green-emerald"></div>
                                <span className="font-bold text-sidqly-navy text-sm">{status}</span>
                              </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          {/* Navigational Architecture Blocks: Related Use Cases & Relevant Locations */}
          <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">

                {/* 1. Related Use Cases block */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-6 flex items-center gap-2">
                    <LayoutTemplate className="text-sidqly-green-emerald" size={22} />
                    Related Use Cases
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    Discover how different organizational stakeholders utilize the {moduleData.title.toLowerCase()} module to streamline their charity management.
                  </p>
                  {relatedUseCases.length > 0 ? (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {relatedUseCases.map((uc, idx) => (
                        <Link
                          key={idx}
                          to={uc.url}
                          className="bg-gray-50 hover:bg-sidqly-green-soft/10 border border-gray-100 hover:border-sidqly-green-emerald/30 p-4 rounded-xl font-bold text-xs text-sidqly-navy transition-all flex items-center justify-between group"
                        >
                          <span className="truncate pr-2">{uc.title}</span>
                          <ArrowRight size={14} className="text-sidqly-green-deep opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link to="/use-cases" className="text-xs text-sidqly-green-deep font-bold hover:underline">
                      Explore all Sidqly Use Cases &rarr;
                    </Link>
                  )}
                </div>

                {/* 2. Relevant Locations block */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-6 flex items-center gap-2">
                    <MapPin className="text-sidqly-green-emerald" size={22} />
                    Relevant Service Areas
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    Sidqly serves communities globally via remote SaaS. See how this module provides critical operational support in these key geographic zones.
                  </p>
                  {relevantLocations.length > 0 ? (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {relevantLocations.map((loc, idx) => (
                        <Link
                          key={idx}
                          to={loc.url}
                          className="bg-gray-50 hover:bg-sidqly-green-soft/10 border border-gray-100 hover:border-sidqly-green-emerald/30 p-4 rounded-xl font-bold text-xs text-sidqly-navy transition-all flex items-center justify-between group"
                        >
                          <span className="truncate pr-2">{loc.title}</span>
                          <ArrowRight size={14} className="text-sidqly-green-deep opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link to="/locations" className="text-xs text-sidqly-green-deep font-bold hover:underline">
                      Explore all Global Service Locations &rarr;
                    </Link>
                  )}
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
                            <span className="pr-8 text-sm md:text-base">{faq.question}</span>
                            <ChevronDown size={20} className={`text-sidqly-green-emerald transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-gray-600 pt-2 border-t border-gray-100 text-sm leading-relaxed">{faq.answer}</p>
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
                  <p className="text-sm text-gray-500 italic font-medium leading-relaxed">
                    Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
                  </p>
                </div>
            </div>
          </section>

          {/* Next Steps CTA Grid */}
          <section id="next-steps" className="py-20 bg-sidqly-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-10 text-center">Explore Related Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-8">

                {/* Related Modules / Links */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 md:col-span-2">
                    <h3 className="font-bold text-lg mb-4 text-sidqly-gold flex items-center gap-2"><Box size={18} /> Related Modules</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {moduleData.internalLinks ? moduleData.internalLinks.map((link: { title: string, url: string }, i: number) => (
                         <li key={i}>
                           <Link to={link.url} className="text-white hover:text-sidqly-green-soft flex items-center gap-2 group text-sm font-semibold">
                             <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                         </li>
                      )) : (
                         <li>
                           <Link to="/modules" className="text-white hover:text-sidqly-green-soft flex items-center gap-2 group text-sm font-semibold">
                             <span className="group-hover:translate-x-1 transition-transform">Explore All Modules</span>
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                         </li>
                      )}
                    </ul>
                </div>

                {/* Helpful Links */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2"><LinkIcon size={18} /> Helpful Links</h3>
                    <ul className="space-y-3 text-sm font-semibold">
                      <li><Link to="/compare" className="text-gray-300 hover:text-white transition-colors">Compare Sidqly</Link></li>
                      <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing Plans</Link></li>
                      <li><a href={brand.links?.inquiryForm || "/inquiry-form"} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Request Organization</a></li>
                      <li><Link to="/modules" className="text-sidqly-gold hover:text-white font-bold mt-2 inline-block transition-colors">← Back to All Modules</Link></li>
                    </ul>
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar Desktop */}
        <div className="hidden lg:block w-80 shrink-0 pt-20 pr-4 pb-20 border-l border-gray-100 bg-gray-50/50">
           <div className="sticky top-24 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm ml-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">On This Page</h4>
              <ul className="space-y-3 text-xs font-semibold text-gray-600">
                <li><a href="#overview" className="hover:text-sidqly-green-deep">1. Overview</a></li>
                <li><a href="#value-proposition" className="hover:text-sidqly-green-deep">2. Value Proposition</a></li>
                {moduleData.workflow && <li><a href="#workflow" className="hover:text-sidqly-green-deep">3. Step-by-Step Workflow</a></li>}
                <li><a href="#outputs" className="hover:text-sidqly-green-deep">4. Outputs & Statuses</a></li>
                <li><a href="#faqs" className="hover:text-sidqly-green-deep">5. Frequently Asked Questions</a></li>
              </ul>
           </div>
        </div>
      </div>
    </>
  );
};

export default ModuleDetail;
