import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3, ShieldCheck, Heart, Beef, ShoppingBag,
  MessageSquare, Layout, CheckCircle2, Store, ClipboardCheck, QrCode, FileText, Shield, Zap, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import { generateCollectionSchema, generateItemListSchema, generateBreadcrumbSchema, generateFAQSchema } from '../lib/schema';
import { seoData } from '../data/seo';
import { modules } from '../data/solutions_modules';

const modulesFaqs = [
  { question: "Can we purchase just one module?", answer: "Yes, many organizations start with a single module pilot (like Manual Payment Review) before rolling out the full platform." },
  { question: "Are all modules included in every plan?", answer: "Access to specific modules depends on your tier (Starter, Growth, or Premium). Review our Pricing page or book a demo to learn more." }
];

const categories = [
  { id: "all", name: "All Modules", desc: "View every single operational module built for verified giving." },
  { id: "donations-funds", name: "Donations & Funds", desc: "Process payments, secure bank validations, and separate fund categories seamlessly." },
  { id: "programs-fulfillment", name: "Programs & Fulfillment", desc: "Coordinate distributions, schedule seasonal workflows, and capture field records." },
  { id: "proof-privacy-trust", name: "Proof, Privacy & Trust", desc: "Verify impact, anonymize sensitive details, and secure public-facing transparency records." },
  { id: "donor-communication", name: "Donor Communication", desc: "Engage contributors with secure notifications, certificates, and automated receipts." },
  { id: "reporting-management", name: "Reporting & Management", desc: "Provide trustees, compliance boards, and managers with immutable audits and packs." },
  { id: "launch-support", name: "Launch & Support", desc: "Adopt digital workflows easily with our expert pilot onboarding assistance." }
];

const getModuleIcon = (slug: string) => {
  const icons: Record<string, React.ReactNode> = {
    "manual-payment-review": <Layout />,
    "proof-trust-engine": <CheckCircle2 />,
    "donor-safe-updates": <MessageSquare />,
    "zakat-fund-separation": <ShieldCheck />,
    "sadaqah-campaigns": <Heart />,
    "qurbani-lifecycle": <Beef />,
    "ramadan-meals-rations": <ShoppingBag />,
    "charity-request-intake": <ClipboardCheck />,
    "vendor-fulfillment": <Store />,
    "volunteer-coordination": <ClipboardCheck />,
    "corporate-csr-zakat": <FileText />,
    "receipts-certificates": <FileText />,
    "qr-code-verification": <QrCode />,
    "reports-board-packs": <BarChart3 />,
    "privacy-dignity-controls": <Shield />,
    "audit-ready-records": <CheckCircle2 />,
    "donor-communication": <MessageSquare />,
    "pilot-launch-support": <Zap />,
  };
  return icons[slug] || <Layout />;
};

const Modules: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredModules = useMemo(() => {
    if (selectedCategory === "all") return modules;
    return modules.filter(mod => mod.category === selectedCategory);
  }, [selectedCategory]);

  const activeCategoryInfo = useMemo(() => {
    return categories.find(c => c.id === selectedCategory) || categories[0];
  }, [selectedCategory]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Modular Operating System", seoData.modules.description, "/modules"),
      generateItemListSchema(modules.map(mod => ({ name: mod.title, url: `/modules/${mod.slug}` }))),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Modules", item: "/modules" }
      ]),
      generateFAQSchema(modulesFaqs)
    ]
  };

  return (
    <>
      <SEO
        title="Sidqly Modules | Verified Giving, Proof and Reports"
        description="Explore Sidqly modules for payment review, proof approval, Zakat separation, Qurbani tracking, volunteer coordination, and reports."
        canonical="/modules"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Sidqly Modules for Verified Islamic Giving Operations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sidqly is built from specialized operational modules that work together to simplify your organization's entire giving lifecycle, replacing spreadsheets with verified workflows.
            </p>
          </div>

          {/* Value Prop Columns */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6 text-xl">
                   1
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">Why modules matter</h3>
                <p className="text-gray-600 leading-relaxed">
                   Every Islamic charity operates differently. Modules allow you to start small—such as fixing your manual payment reviews—and scale up to full Qurbani or Zakat operations when your team is ready, without paying for tools you don't need.
                </p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6 text-xl">
                   2
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">How they work together</h3>
                <p className="text-gray-600 leading-relaxed">
                   Data flows securely between modules. A donation reviewed in the <span className="font-medium text-sidqly-navy">Manual Payment Review</span> module automatically updates the <span className="font-medium text-sidqly-navy">Zakat Fund Separation</span> tracking, and later ties into <span className="font-medium text-sidqly-navy">Board-Ready Reports</span>.
                </p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6 text-xl">
                   3
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">From request to report</h3>
                <p className="text-gray-600 leading-relaxed">
                   Sidqly handles the entire lifecycle: Intake requests securely, verify donations manually, approve dignity-safe proof from the field, and generate transparent reports for your board and donors.
                </p>
             </div>
          </div>

          <div className="mb-16">
             <h2 className="text-3xl font-extrabold text-sidqly-navy text-center mb-12">Explore the Modules</h2>

             {/* Main Layout containing Sidebar and Module Grid */}
             <div className="grid lg:grid-cols-4 gap-10 items-start w-full min-w-0">

               {/* 1. Category Navigation (Sidebar for Desktop, Pill Row for Mobile/Tablet) */}
               <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 w-full min-w-0 overflow-hidden lg:overflow-visible">

                 {/* Mobile Selector Dropdown/Scroller */}
                 <div className="block lg:hidden w-full overflow-hidden">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category Filter</label>
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin snap-x max-w-full">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`snap-center shrink-0 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-sidqly-green-deep text-white shadow-md'
                              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                 </div>

                 {/* Desktop Sidebar Selector */}
                 <div className="hidden lg:block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-1">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-4">Categories</h3>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? 'bg-sidqly-green-soft/20 text-sidqly-green-deep'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        {selectedCategory === cat.id && <Check size={16} className="text-sidqly-green-deep" />}
                      </button>
                    ))}
                 </div>

                 {/* Selected Category Header (Visual context) */}
                 <div className="bg-white/80 border border-gray-100 p-6 rounded-2xl shadow-sm hidden lg:block">
                   <h4 className="text-xs font-bold text-sidqly-green-deep uppercase tracking-widest mb-2">Currently Viewing</h4>
                   <p className="font-extrabold text-sidqly-navy text-lg mb-2">{activeCategoryInfo.name}</p>
                   <p className="text-xs text-gray-500 leading-relaxed">{activeCategoryInfo.desc}</p>
                 </div>
               </div>

               {/* 2. Grid displaying grouped/filtered modules */}
               <div className="lg:col-span-3 space-y-8 w-full min-w-0">
                 {/* Header for dynamic display */}
                 <div className="border-b border-gray-200/60 pb-4 block lg:hidden w-full">
                   <p className="text-sm text-sidqly-green-deep font-bold mb-1">{activeCategoryInfo.name}</p>
                   <p className="text-xs text-gray-500 leading-relaxed">{activeCategoryInfo.desc}</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6 w-full min-w-0">
                   {filteredModules.map((mod, i) => {
                     const catObj = categories.find(c => c.id === mod.category);
                     return (
                       <Link
                         key={i}
                         to={`/modules/${mod.slug}`}
                         className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group flex flex-col h-full min-w-0"
                       >
                         {/* Icon + Category Capsule */}
                         <div className="flex justify-between items-start mb-6 gap-2">
                           <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-emerald rounded-xl flex items-center justify-center group-hover:bg-sidqly-green-soft/30 transition-colors shrink-0">
                             {getModuleIcon(mod.slug)}
                           </div>
                           {catObj && (
                             <span className="text-[10px] uppercase font-extrabold tracking-wider bg-sidqly-ivory text-sidqly-navy/80 px-2.5 py-1 rounded-full border border-gray-100 truncate shrink-0">
                               {catObj.name}
                             </span>
                           )}
                         </div>

                         <h3 className="text-lg font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-emerald transition-colors truncate">
                           {mod.title}
                         </h3>

                         <p className="text-gray-600 text-xs leading-relaxed mb-4">
                           {mod.benefit}
                         </p>

                         {/* Problems Solved block */}
                         <div className="mb-4 bg-gray-50 p-4 rounded-xl text-xs flex-grow min-w-0">
                           <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] mb-1">Problem Solved</p>
                           <p className="text-gray-700 font-medium line-clamp-2">{mod.problem}</p>
                         </div>

                         {/* Who Uses It */}
                         <div className="mb-6">
                           <p className="text-gray-400 text-[9px] uppercase font-bold tracking-widest mb-1">Who uses it</p>
                           <p className="text-sidqly-navy text-xs font-semibold">{mod.who}</p>
                         </div>

                         <span className="text-sidqly-green-deep font-bold text-xs flex items-center gap-2 mt-auto">
                           View Module <span className="group-hover:translate-x-1 transition-transform">→</span>
                         </span>
                       </Link>
                     );
                   })}
                 </div>

                 {filteredModules.length === 0 && (
                   <div className="bg-white text-center p-12 rounded-2xl border border-gray-100">
                     <p className="text-gray-500 font-medium">No modules found in this category.</p>
                   </div>
                 )}
               </div>

             </div>
          </div>

          {/* FAQ Block */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Frequently Asked Questions</h2>
             <div className="text-left space-y-4">
                 {modulesFaqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                       <h3 className="font-bold text-sidqly-navy mb-2">{faq.question}</h3>
                       <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                 ))}
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Modules;
