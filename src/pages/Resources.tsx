import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BookOpen, Target, ArrowRight, FileText, Shield } from 'lucide-react';
import { brand } from '../config/brand';
import { generateCollectionSchema, generateBreadcrumbSchema } from '../lib/schema';
import { seoData } from '../data/seo';

const Resources: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Resources & Guides", seoData.resources.description, "/resources"),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Resources", item: "/resources" }
      ])
    ]
  };

  return (
    <>
      <SEO
        {...seoData.resources}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Resources for verified giving, donor trust, and dignity-safe operations</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-2xl mx-auto mb-10">
              Operational guides, use cases, and best practices to help you transition from scattered tools to a professional SaaS platform.
            </p>
          </div>
        </div>
      </section>

      {/* Islamic Utilities and Planning Tools */}
      <section className="py-20 bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Islamic Utilities & Planning Tools</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
               {[
                  { name: "Islamic Calendar", link: "/islamic-calendar" },
                  { name: "Qibla Direction", link: "/qibla-direction" },
                  { name: "Moon Phase Planning", link: "/moon-phase-islamic-calendar" },
                  { name: "Weather-Aware Distribution", link: "/weather-charity-distribution" },
                  { name: "Ramadan Planner", link: "/ramadan-planner" },
                  { name: "Eid/Qurbani Planner", link: "/eid-qurbani-planner" },
                  { name: "Hajj Countdown", link: "/hajj-countdown" },
                  { name: "Sadqa/Zakat Planner", link: "/sadqa-zakat-planner" },
                  { name: "Islamic Glossary", link: "/islamic-glossary" }
               ].map((tool, i) => (
                  <Link key={i} to={tool.link} className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center group">
                     <span className="text-sm font-bold text-sidqly-navy group-hover:text-sidqly-green-deep transition-colors leading-tight block">{tool.name}</span>
                  </Link>
               ))}
            </div>
         </div>
      </section>

            {/* Seasonal Guides Section */}
      <section className="py-24 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy tracking-tight mb-4 flex items-center gap-3">
              <BookOpen className="text-sidqly-green-emerald" /> Seasonal Islamic Giving Guides
            </h2>
            <p className="text-xl text-gray-600">Operational guides for peak giving seasons like Ramadan and Qurbani.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/resources/eid-giving" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Eid Giving Guide</h3>
                <p className="text-gray-600 line-clamp-3">Learn how to manage Eid giving, sponsor interest, food support, and community campaigns with donor-safe proof and dignity-first workflows.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/eid-ul-adha-qurbani" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Eid ul Adha and Qurbani Operations</h3>
                <p className="text-gray-600 line-clamp-3">Explore how Sidqly helps organizations manage Qurbani operations with manual payment review, vendor assignment, proof approval, and certificates.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/qurbani-operations" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Qurbani Workflow Guide</h3>
                <p className="text-gray-600 line-clamp-3">Learn how Sidqly helps organizations manage Qurbani operations with manual payment review, vendor assignment, proof approval, donor-safe updates, certificates, and reports while protecting dignity.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/sadqa-fitr" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Sadqa Fitr and Sadaqah Campaigns</h3>
                <p className="text-gray-600 line-clamp-3">Learn how organizations can manage Sadqa, Sadaqah, Sadqa Fitr, payment review, family support, proof approval, donor-safe updates, and audit-ready reports with Sidqly.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/ramadan-giving" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Ramadan Giving Guide</h3>
                <p className="text-gray-600 line-clamp-3">Explore how Sidqly helps organizations organize Ramadan meals, Iftar support, ration packs, volunteer tasks, proof approval, donor-safe updates, and campaign reports.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/iftar-ration-workflow" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Iftar and Ration Pack Workflow</h3>
                <p className="text-gray-600 line-clamp-3">A comprehensive guide on managing Iftar and ration pack distributions, from batch planning to daily reports.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link to="/resources/aqiqa-charity-workflow" className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full hover:border-sidqly-green-soft">
              <div className="mb-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-4">Guide</span>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors">Aqiqa / Aqiqah Charity Workflow</h3>
                <p className="text-gray-600 line-clamp-3">Learn how to handle Aqiqa charity requests operationally with vendor fulfillment, proof approval, and reporting.</p>
              </div>
              <div className="flex items-center text-sidqly-green-emerald font-bold gap-2">Read guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 border-b border-gray-100 pb-4 flex items-center gap-3">
             <BookOpen className="text-sidqly-green-emerald" /> Featured Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { title: "How to move from WhatsApp and spreadsheets to organized giving workflows", url: "/blog/how-to-replace-whatsapp-for-charity-work" },
               { title: "How donor-safe proof protects recipient dignity", url: "/blog/how-to-share-proof-without-exposing-private-data" },
               { title: "How manual payment review improves trust", url: "/blog/manual-payment-review-for-donations" },
               { title: "How to prepare a Zakat workflow without exposing private requester data", url: "/blog/how-zakat-teams-can-protect-private-data" },
               { title: "How to organize Qurbani operations from order to proof", url: "/blog/how-to-manage-qurbani-orders" },
               { title: "How to manage Ramadan meals and ration packs with clear reporting", url: "/blog/how-to-manage-ramadan-food-drives" }
             ].map((guide, i) => (
                <Link key={i} to={guide.url} className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-lg transition-all group flex flex-col justify-between">
                   <h3 className="font-bold text-lg text-sidqly-navy mb-6 group-hover:text-sidqly-green-deep transition-colors leading-snug">{guide.title}</h3>
                   <div className="flex items-center gap-2 text-sm font-bold text-sidqly-green-emerald">
                      Read Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 border-b border-gray-200 pb-4 flex items-center gap-3">
             <Target className="text-sidqly-green-emerald" /> Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               { name: "Mosque donation workflows", slug: "mosques" },
               { name: "Islamic charity operations", slug: "islamic-charities" },
               { name: "Zakat committee review", slug: "zakat-teams" },
               { name: "Sadaqah/Sadqa campaigns", slug: "islamic-charities" },
               { name: "Qurbani/Udhiya lifecycle", slug: "qurbani-providers" },
               { name: "Ramadan/Ramzan ration and meal distribution", slug: "ramadan-food-drives" },
               { name: "Vendor fulfillment", slug: "vendors" },
               { name: "Volunteer coordination", slug: "volunteers" },
               { name: "Corporate CSR/Zakat reporting", slug: "corporate-csr-zakat" },
               { name: "Donor-safe impact updates", slug: "donors" }
             ].map((uc, i) => (
                <Link key={i} to={`/solutions/${uc.slug}`} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                   <span className="text-sm font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors leading-tight block">{uc.name}</span>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Buyer & Trust Resources */}
      {/* Tools & Core Resources */}
      <section className="py-16 bg-sidqly-ivory">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-6">Islamic Utilities</h3>
                  <ul className="space-y-4">
                     <li><Link to="/islamic-utilities" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> All Utilities</Link></li>
                     <li><Link to="/islamic-calendar" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Islamic Calendar</Link></li>
                     <li><Link to="/qibla-direction" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Qibla Direction</Link></li>
                     <li><Link to="/moon-phase-islamic-calendar" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Moon Phase</Link></li>
                     <li><Link to="/weather-charity-distribution" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Weather Planning</Link></li>
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-6">Planning Tools</h3>
                  <ul className="space-y-4">
                     <li><Link to="/ramadan-planner" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Ramadan Planner</Link></li>
                     <li><Link to="/eid-qurbani-planner" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Eid/Qurbani Planner</Link></li>
                     <li><Link to="/hajj-countdown" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Hajj Countdown</Link></li>
                     <li><Link to="/sadqa-zakat-planner" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Sadqa/Zakat Planner</Link></li>
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-6">Use Case Hubs</h3>
                  <ul className="space-y-4">
                     <li><Link to="/use-cases" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> All Use Cases</Link></li>
                     <li><Link to="/use-cases/mosques" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Mosques</Link></li>
                     <li><Link to="/use-cases/islamic-charities" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Islamic Charities</Link></li>
                     <li><Link to="/use-cases/qurbani-organizers" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Qurbani Organizers</Link></li>
                     <li><Link to="/use-cases/ramadan-ration-teams" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Ramadan Ration Teams</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Buyer & Trust Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-2xl font-bold text-sidqly-navy mb-8 border-b border-gray-100 pb-4 flex items-center gap-3">
                    <FileText className="text-sidqly-green-emerald" /> Featured Guides & Resources
                 </h2>
                 <ul className="space-y-4">
                    <li><Link to="/resources/eid-giving" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Seasonal Islamic Giving Guides</Link></li>
                    <li><Link to="/use-cases" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Use Case Guides</Link></li>
                    <li><Link to="/modules" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Module Guides</Link></li>
                    <li><Link to="/resources/workflow-playbooks" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Workflow Playbooks</Link></li>
                    <li><Link to="/resources/stakeholder-resources" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Stakeholder Resources</Link></li>
                    <li><Link to="/compare" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Comparison Guides</Link></li>
                    <li><Link to="/islamic-glossary" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Glossary</Link></li>
                    <li><Link to="/request-organization" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Request Your Organization</Link></li>
                 </ul>
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-sidqly-navy mb-8 border-b border-gray-100 pb-4 flex items-center gap-3">
                    <Shield className="text-sidqly-green-emerald" /> Trust Resources
                 </h2>
                 <ul className="space-y-4">
                    <li><Link to="/trust-center" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Trust Center</Link></li>
                    <li><Link to="/security" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Security</Link></li>
                    <li><Link to="/privacy" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Privacy</Link></li>
                    <li><Link to="/terms" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Terms</Link></li>
                    <li><Link to="/billing" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Billing</Link></li>
                    <li><Link to="/accessibility" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> Accessibility</Link></li>
                    <li><a href="/ai-crawlers-policy.md" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sidqly-green-deep font-medium flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-sidqly-green-emerald" /> AI/Crawler policy</a></li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Request Organization */}
      <section className="py-20 bg-sidqly-green-deep text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want your organization to manage giving more clearly?</h2>
            <p className="text-sidqly-green-soft text-lg mb-10 max-w-2xl mx-auto">
               Donors, volunteers, vendors, and community members can recommend Sidqly to their mosque, charity, or corporate sponsor network.
            </p>
            <Link to="/request-organization" className="inline-flex items-center gap-2 bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">
               Request Your Organization <ArrowRight size={18} />
            </Link>
         </div>
      </section>

      {/* Glossary */}
      <section className="py-20 bg-sidqly-navy text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">Glossary of Operational Terms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { term: "Verified giving", def: "A structured process where every payment and delivery is manually confirmed." },
                  { term: "Donor-safe proof", def: "Impact evidence that has been reviewed and scrubbed of private recipient data." },
                  { term: "Recipient dignity", def: "The principle that receiving aid should not cost a person their privacy or face." },
                  { term: "Manual payment review", def: "A hard gate requiring human verification of bank transfers before proceeding." },
                  { term: "Proof approval", def: "A hard gate requiring management to verify field evidence before donors see it." },
                  { term: "Zakat fund separation", def: "Operational logic preventing the mixing of restricted Zakat funds with general Sadaqah." },
                  { term: "Sadaqah/Sadqa", def: "Voluntary charity." },
                  { term: "Qurbani/Udhiya", def: "The annual animal sacrifice, requiring complex share and slaughter tracking." },
                  { term: "Ramadan/Ramzan distribution", def: "High-volume seasonal workflows for meals, Iftar, and ration packs." },
                  { term: "Board-ready report", def: "Automated impact and financial summaries generated instantly for leadership." },
                  { term: "Corporate-safe report", def: "Aggregated impact data suitable for CSR sponsors without PII exposure." },
                  { term: "Audit-ready record", def: "Timestamped logs of every approval, status change, and payment verification." },
                  { term: "QR/code verification", def: "Instant validation of issued receipts and certificates." },
                  { term: "Vendor fulfillment", def: "External partners assigned specific delivery tasks and required to upload proof." },
                  { term: "Volunteer assignment", def: "Field workers assigned shifts and tasks with specific proof requirements." }
               ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-sidqly-green-soft transition-colors">
                     <h4 className="font-bold text-sidqly-green-soft mb-2">{item.term}</h4>
                     <p className="text-sm text-gray-300 leading-relaxed">{item.def}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* Islamic Utilities Section */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-sidqly-navy mb-4">Islamic Utilities and Planning Tools</h2>
            <p className="text-xl text-gray-600">Practical tools built for Islamic charity operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Link to="/islamic-utilities" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Islamic Utilities</h3>
              <p className="text-sm text-gray-500">View all planning tools.</p>
            </Link>
            <Link to="/islamic-calendar" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Islamic Calendar</h3>
              <p className="text-sm text-gray-500">Hijri dates for operations.</p>
            </Link>
            <Link to="/namaz-timings" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Namaz Timings</h3>
              <p className="text-sm text-gray-500">Prayer times for planning.</p>
            </Link>
            <Link to="/qibla-direction" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Qibla Direction</h3>
              <p className="text-sm text-gray-500">Logistics compass.</p>
            </Link>
            <Link to="/zakat-calculator" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Zakat Calculator</h3>
              <p className="text-sm text-gray-500">Manual nisab planning tool.</p>
            </Link>
            <Link to="/moon-phase-islamic-calendar" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Moon Phase Planning</h3>
              <p className="text-sm text-gray-500">Approximate lunar phase.</p>
            </Link>
            <Link to="/weather-charity-distribution" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Weather-Aware Distribution</h3>
              <p className="text-sm text-gray-500">Open-air distribution tool.</p>
            </Link>
            <Link to="/hajj-countdown" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Hajj Countdown</h3>
              <p className="text-sm text-gray-500">Dhul Hijjah prep.</p>
            </Link>
            <Link to="/ramadan-planner" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Ramadan Planner</h3>
              <p className="text-sm text-gray-500">Iftar tracking checklists.</p>
            </Link>
            <Link to="/eid-qurbani-planner" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Eid/Qurbani Planner</h3>
              <p className="text-sm text-gray-500">Share and slaughter guides.</p>
            </Link>
            <Link to="/sadqa-zakat-planner" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Sadqa/Zakat Planner</h3>
              <p className="text-sm text-gray-500">Fund separation guides.</p>
            </Link>
            <Link to="/islamic-glossary" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Islamic Glossary</h3>
              <p className="text-sm text-gray-500">Key operational terms.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsroom and Press */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-sidqly-navy mb-4">Newsroom and Press</h2>
            <p className="text-xl text-gray-600">Company updates, product announcements, and media assets.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/newsroom" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Newsroom Hub</h3>
              <p className="text-sm text-gray-500">Latest updates and curated news.</p>
            </Link>
            <Link to="/press-releases" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Press Releases</h3>
              <p className="text-sm text-gray-500">Official company announcements.</p>
            </Link>
            <Link to="/media-kit" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
              <h3 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep mb-2">Media Kit</h3>
              <p className="text-sm text-gray-500">Brand assets and boilerplates.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sidqly-ivory text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-10">Ready to see how Sidqly fits your organization?</h2>
            <div className="flex flex-wrap justify-center gap-4">
               <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
               <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Fill Inquiry Form</a>
               <Link to="/pricing" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">View Pricing</Link>
               <Link to="/contact" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Contact Sidqly</Link>
            </div>
         </div>
      </section>
    </>
  );
};

export default Resources;
