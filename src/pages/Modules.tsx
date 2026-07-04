import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart3, ShieldCheck, Heart, Beef, ShoppingBag,
  MessageSquare, Layout, CheckCircle2, ArrowRight, Store, ClipboardCheck, QrCode, FileText, Shield, Zap
} from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { generateCollectionSchema, generateItemListSchema, generateBreadcrumbSchema } from '../lib/schema';
import { seoData } from '../data/seo';
import { modules } from '../data/solutions_modules';

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
  const { slug } = useParams();

  const currentModule = slug ? modules.find(m => m.slug === slug) : null;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Modular Operating System", seoData.modules.description, "/modules"),
      generateItemListSchema(modules.map(mod => ({ name: mod.title, url: `/modules/${mod.slug}` }))),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Modules", item: "/modules" }
      ])
    ]
  };

  if (currentModule) {
    return (
      <>
        <SEO
          title={`${currentModule.title} Module`}
          description={currentModule.desc}
          canonical={`/modules/${currentModule.slug}`}
        />
        <section className="py-20 bg-sidqly-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/modules" className="text-sidqly-green-emerald font-bold mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              ← Back to Modules
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
              <div>
                <div className="w-16 h-16 bg-white text-sidqly-green-emerald rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  {getModuleIcon(currentModule.slug)}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">{currentModule.title}</h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {currentModule.benefit}
                </p>
                <div className="mb-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Problem Solved</h3>
                  <p className="text-sm text-gray-700">{currentModule.problem}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                    Book Demo
                  </a>
                  <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-white text-sidqly-navy border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                    Fill Inquiry Form
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-sidqly-green-deep mb-6">Workflow Details</h2>
                <div className="space-y-4 mb-8">
                  {currentModule.workflow.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-sidqly-ivory text-sidqly-green-deep flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">{i + 1}</div>
                      <span className="capitalize">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-sidqly-navy text-xs uppercase tracking-wider mb-2">Result & Output</h3>
                  <p className="text-gray-700 text-sm font-medium">{currentModule.output}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-sidqly-navy text-white p-8 rounded-3xl">
                <Layout className="text-sidqly-gold mb-4" />
                <h3 className="font-bold mb-2">Book a Demo</h3>
                <p className="text-sm text-gray-400 mb-6">See the {currentModule.title.toLowerCase()} module in action.</p>
                <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="text-sidqly-gold font-bold flex items-center gap-2 text-sm">
                  Book on Calendly <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <ClipboardCheck className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Inquiry Form</h3>
                <p className="text-sm text-gray-500 mb-6">Request this module for your organization.</p>
                <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
                  Fill the Form <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <MessageSquare className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Ask a Question</h3>
                <p className="text-sm text-gray-500 mb-6">Have a query about how this module works?</p>
                <a href={brand.links.emailInquiry} className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
                  Email the Team <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Sidqly Modules | Verified Giving, Proof Approval and Reporting"
        description="Explore Sidqly modules for manual payment review, charity request intake, Zakat fund separation, donor communication, proof approval, and board-ready reports."
        canonical="/modules"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Sidqly Modules for Verified Islamic Giving Operations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sidqly is built from specialized operational modules that work together to simplify your organization's entire giving lifecycle, replacing spreadsheets with verified workflows.
            </p>
          </div>

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
             <h2 className="text-3xl font-bold text-sidqly-navy text-center mb-12">Explore the Modules</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {modules.map((mod, i) => (
                 <Link key={i} to={`/modules/${mod.slug}`} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group flex flex-col h-full">
                   <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-emerald rounded-xl flex items-center justify-center mb-6 group-hover:bg-sidqly-green-soft/30 transition-colors">
                     {getModuleIcon(mod.slug)}
                   </div>
                   <h3 className="text-lg font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-emerald transition-colors">{mod.title}</h3>
                   <p className="text-gray-600 text-xs leading-relaxed mb-3">{mod.benefit}</p>
                   <div className="flex-grow">
                     <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Who uses it</p>
                     <p className="text-sidqly-navy text-xs font-medium mb-6">{mod.who}</p>
                   </div>
                   <span className="text-sidqly-green-deep font-bold text-xs flex items-center gap-2 mt-auto">
                     View Module <span className="group-hover:translate-x-1 transition-transform">→</span>
                   </span>
                 </Link>
               ))}
             </div>
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Frequently Asked Questions</h2>
             <div className="text-left space-y-4">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sidqly-navy mb-2">Can we purchase just one module?</h3>
                    <p className="text-gray-600 text-sm">Yes, many organizations start with a single module pilot (like Manual Payment Review) before rolling out the full platform.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sidqly-navy mb-2">Are all modules included in every plan?</h3>
                    <p className="text-gray-600 text-sm">Access to specific modules depends on your tier (Starter, Growth, or Premium). Review our Pricing page or book a demo to learn more.</p>
                 </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Modules;
