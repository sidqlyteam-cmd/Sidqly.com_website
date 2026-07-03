import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import TrustPillars from '../components/diagrams/TrustPillars';
import OperatingJourney from '../components/diagrams/OperatingJourney';
import ManualPaymentReview from '../components/diagrams/ManualPaymentReview';
import ProofTrustEngine from '../components/diagrams/ProofTrustEngine';
import { modules, solutions } from '../data/solutions_modules';
import { generateOrganizationSchema, generateWebSiteSchema, generateSoftwareAppSchema, generateServiceSchema } from '../lib/schema';
import { seoData } from '../data/seo';
import { Search, MapPin, Clock, Calculator, BookOpen } from 'lucide-react';
import { newsroomData } from '../data/newsroom';

const Home: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      generateSoftwareAppSchema(),
      generateServiceSchema("Sidqly Operating Platform", "Verified giving, manual payment review, and proof approval for Islamic organizations.", "/")
    ]
  };

  return (
    <>
      <SEO
        {...seoData.home}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-sidqly-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10">
              International Operating Standard for Amanah
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Verified giving. <span className="text-sidqly-green-soft">Protected dignity. Clear impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
              The premium operating platform for Islamic charities. We help organizations manage verified donations, manual payment review, proof approval, donor updates, and board-ready reporting.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-white font-bold mb-4 text-center">What are you looking for?</h2>
                <div className="relative">
                   <button
                     onClick={() => {
                       const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
                       window.dispatchEvent(event);
                     }}
                     className="w-full bg-white/90 hover:bg-white text-gray-600 border-none rounded-2xl pl-14 pr-4 py-4 text-lg focus:ring-2 focus:ring-sidqly-green-emerald transition-all text-left flex items-center truncate shadow-sm"
                   >
                     <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 shrink-0" size={24} />
                     <span className="truncate text-gray-500 font-medium">Search Qibla, Namaz timings, Qurbani, Zakat...</span>
                   </button>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                   {[
                     {name: 'Qibla', path: '/qibla-direction'},
                     {name: 'Namaz Timings', path: '/namaz-timings'},
                     {name: 'Zakat Calculator', path: '/zakat-calculator'},
                     {name: 'Ramadan Planner', path: '/ramadan-planner'},
                     {name: 'Qurbani', path: '/modules/qurbani-management-software'},
                     {name: 'Newsroom', path: '/newsroom'}
                   ].map(chip => (
                      <Link key={chip.name} to={chip.path} className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs font-medium text-white transition-colors">
                        {chip.name}
                      </Link>
                   ))}
                </div>
             </div>
          </div>

          <div className="text-center">
             <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
               <a href={brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz'} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-sidqly-green-deep transition-all shadow-xl hover:shadow-sidqly-green-emerald/20 text-center">
                 Book Demo
               </a>
               <a href={brand.links?.inquiryForm || 'https://forms.gle/bvSMog9pw2Ri4kMt9'} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                 Fill Inquiry Form
               </a>
               <Link to="/request-organization" className="bg-transparent text-sidqly-gold border border-sidqly-gold/30 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-sidqly-gold/10 transition-all text-center">
                 Request Your Organization
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Latest from Sidqly / Newsroom Teaser */}
      <section className="py-24 bg-sidqly-ivory">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
               <div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy">Latest from Sidqly</h2>
                 <p className="text-gray-600 mt-2">Updates, operational guides, and press releases.</p>
               </div>
               <Link to="/newsroom" className="font-bold text-sidqly-green-deep flex items-center gap-2 hover:underline">
                 View all news <ArrowRight size={16} />
               </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {newsroomData.slice(0, 3).map((item) => (
                  <Link key={item.id} to={item.category === 'Press Release' ? '/press-releases' : '/newsroom'} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
                     <span className="text-xs font-bold text-sidqly-green-deep uppercase tracking-wider bg-sidqly-green-soft/30 px-3 py-1 rounded-full mb-4 inline-block">{item.category}</span>
                     <h3 className="text-lg font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep transition-colors line-clamp-2">{item.title}</h3>
                     <p className="text-sm text-gray-500 line-clamp-3 mb-4">{item.summary}</p>
                     <span className="text-sm font-bold text-gray-400 group-hover:text-sidqly-green-emerald transition-colors flex items-center gap-1">Read more <ArrowRight size={14} /></span>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Islamic Tools for Giving Teams */}
      <section className="py-24 bg-white border-y border-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mb-4">Islamic Tools for Giving Teams</h2>
               <p className="text-gray-600 text-lg">Integrated utilities to help mosques and charities plan distributions, coordinate with local times, and manage Zakat planning securely.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <Link to="/namaz-timings" className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shadow-sm">
                     <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-sidqly-navy mb-2">Namaz Timings</h3>
                  <p className="text-xs text-gray-500">Calculate local prayer times for operational planning.</p>
               </Link>
               <Link to="/qibla-direction" className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shadow-sm">
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-sidqly-navy mb-2">Qibla Compass</h3>
                  <p className="text-xs text-gray-500">Determine direction for site logistics and prayer areas.</p>
               </Link>
               <Link to="/zakat-calculator" className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shadow-sm">
                     <Calculator size={24} />
                  </div>
                  <h3 className="font-bold text-sidqly-navy mb-2">Zakat Calculator</h3>
                  <p className="text-xs text-gray-500">Plan Zakat estimates with manual nisab controls.</p>
               </Link>
               <Link to="/resources/eid-giving" className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shadow-sm">
                     <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-sidqly-navy mb-2">Seasonal Guides</h3>
                  <p className="text-xs text-gray-500">Checklists for Ramadan, Qurbani, and Eid workflows.</p>
               </Link>
            </div>

            <div className="mt-12 text-center">
               <Link to="/islamic-utilities" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold hover:underline">
                 View all Islamic Utilities <ArrowRight size={16} />
               </Link>
            </div>
         </div>
      </section>

      {/* What Sidqly Replaces */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-10 rounded-[40px] border border-red-100">
              <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-lg font-bold">✕</span>
                What Sidqly Replaces
              </h3>
              <ul className="space-y-6">
                {[
                  "Messy WhatsApp groups for field coordination",
                  "Scattered Excel sheets for donation tracking",
                  "Manual certificate creation taking hours of staff time",
                  "Lack of clear audit trails for Zakat fund separation",
                  "Dignity risks with un-blurred recipient photos",
                  "Stressful, week-long manual board reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-red-700 font-medium">
                    <span className="mt-1 text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sidqly-green-soft/20 p-10 rounded-[40px] border border-sidqly-green-soft/50 shadow-xl ring-8 ring-white">
              <h3 className="text-2xl font-bold text-sidqly-green-deep mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-sidqly-green-emerald text-white rounded-full flex items-center justify-center text-lg font-bold">✓</span>
                With Sidqly
              </h3>
              <ul className="space-y-6">
                {[
                  "Centralized Field Proof & Verification Engine",
                  "Real-time Manual Payment Review Workflow",
                  "Automated, Branded Donor Documents",
                  "Strict, Logical Zakat Fund Separation",
                  "Dignity-Safe, Approved Proof Controls",
                  "Professional Board-Ready Reports in Seconds"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sidqly-green-deep font-bold">
                    <span className="mt-1 text-sidqly-green-emerald">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-4">Who Sidqly is For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic">A premium platform built for organizations that value operational integrity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {solutions.slice(0, 10).map((sol) => (
              <Link key={sol.slug} to={`/solutions/${sol.slug}`} className="p-6 bg-sidqly-ivory rounded-3xl border border-gray-100 hover:border-sidqly-green-soft transition-all text-center group">
                 <div className="text-sidqly-navy font-bold text-sm group-hover:text-sidqly-green-emerald transition-colors">{sol.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Journey */}
      <section className="py-24 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-6">The Operating Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 Sidqly transforms fragmented manual processes into a professional end-to-end giving lifecycle.
              </p>
           </div>
           <OperatingJourney />
           <div className="mt-20 text-center">
              <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1">
                 Learn how it works <ArrowRight size={20} />
              </Link>
           </div>
        </div>
      </section>

      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-sidqly-green-emerald mb-4">A Better Approach</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
               Giving often starts with good intention, but the work after that can become scattered. A donor may ask, "Was my contribution received?" while a team member is still searching payment screenshots. Sidqly helps teams connect these steps into one clearer operating flow.
            </p>
         </div>
      </section>

      {/* 18 Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-4">18 Sidqly Operating Modules</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized tools that work together to professionalize your entire mission.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {modules.map((mod) => (
                <Link key={mod.slug} to={`/modules/${mod.slug}`} className="p-6 bg-sidqly-ivory rounded-2xl border border-gray-50 hover:border-sidqly-green-soft hover:shadow-lg transition-all group hover:-translate-y-1">
                   <h4 className="font-bold text-sidqly-navy text-sm mb-2 group-hover:text-sidqly-green-emerald transition-colors">{mod.title}</h4>
                   <p className="text-[10px] text-gray-500 leading-relaxed">{mod.desc}</p>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Human review is built into the workflow.</h2>
                 <p className="text-xl text-sidqly-green-soft mb-12 leading-relaxed">
                    We don't believe in automatic financial or religious rulings. Sidqly provides the gates for your team to verify every payment and distribution manually.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                       <ShieldCheck className="text-sidqly-green-emerald flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-lg mb-1">Payment Verification</h4>
                          <p className="text-sm text-gray-400">Manual review of bank transfers and screenshots to prevent reporting errors.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <ShieldCheck className="text-sidqly-green-emerald flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-lg mb-1">Proof Approval</h4>
                          <p className="text-sm text-gray-400">Multi-stage field evidence verification before any update is shared with donors.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="space-y-8">
                 <ManualPaymentReview />
                 <ProofTrustEngine />
              </div>
           </div>
        </div>
      </section>

      {/* Start with your role */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Start with your role</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how Sidqly’s verified workflows solve your specific operational challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/use-cases/mosques" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I manage a mosque</h3>
               <p className="text-gray-600 text-sm">Donation management and Zakat tracking.</p>
            </Link>
            <Link to="/use-cases/islamic-charities" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I run an Islamic charity</h3>
               <p className="text-gray-600 text-sm">Professional charity operations and donor-safe proof.</p>
            </Link>
            <Link to="/use-cases/qurbani-organizers" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I organize Qurbani</h3>
               <p className="text-gray-600 text-sm">Share tracking, vendor assignment, and certificates.</p>
            </Link>
            <Link to="/use-cases/ramadan-ration-teams" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I manage Ramadan rations</h3>
               <p className="text-gray-600 text-sm">Distribution tracking and donor-safe updates.</p>
            </Link>
            <Link to="/use-cases/sadaqah-campaign-teams" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I handle Zakat/Sadqa campaigns</h3>
               <p className="text-gray-600 text-sm">Campaign tracking and fund separation.</p>
            </Link>
            <Link to="/use-cases/donors" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I am a donor</h3>
               <p className="text-gray-600 text-sm">Verified giving updates and receipts.</p>
            </Link>
            <Link to="/use-cases/volunteers" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I am a volunteer</h3>
               <p className="text-gray-600 text-sm">Task assignment and field proof upload.</p>
            </Link>
            <Link to="/use-cases/vendors" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I am a vendor</h3>
               <p className="text-gray-600 text-sm">Fulfillment tracking and proof upload.</p>
            </Link>
            <Link to="/use-cases/corporate-sponsors" className="p-8 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all group">
               <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep">I am a corporate sponsor</h3>
               <p className="text-gray-600 text-sm">Board-ready, audit-compliant charity reports.</p>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link to="/use-cases" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold hover:underline">
              View all use cases <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Sidqly searches */}
      <section className="py-12 bg-sidqly-ivory border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
               <span className="font-bold text-gray-500 mr-2">Popular searches:</span>
               <Link to="/resources/qurbani-operations" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Qurbani</Link>
               <Link to="/resources/ramadan-giving" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Ramadan</Link>
               <Link to="/use-cases/zakat-committees" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Zakat</Link>
               <Link to="/resources/sadqa-fitr" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Sadqa Fitr</Link>
               <Link to="/qibla-direction" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Qibla</Link>
               <Link to="/islamic-calendar" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Islamic Calendar</Link>
               <Link to="/compare/verified-giving" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Donor-Safe Proof</Link>
               <Link to="/compare/manual-payment-review" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Manual Payment Review</Link>
               <Link to="/compare/corporate-reporting" className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sidqly-navy hover:border-sidqly-green-soft transition-colors">Corporate Reports</Link>
            </div>
         </div>
      </section>

      {/* Islamic tools for giving teams & Seasonal guides */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-3xl font-extrabold text-sidqly-navy mb-4">Islamic tools for giving teams</h2>
                  <p className="text-gray-600 mb-8">Plan Ramadan, Qurbani, Sadqa, Zakat, Hajj-linked giving, Qibla direction, Hijri date awareness, and weather-aware distribution with practical tools built for Islamic charity operations.</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                     <Link to="/islamic-calendar" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Islamic Calendar</h4>
                        <p className="text-sm text-gray-500 mt-2">Hijri dates for operations.</p>
                     </Link>
                     <Link to="/qibla-direction" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Qibla Direction</h4>
                        <p className="text-sm text-gray-500 mt-2">Logistics compass.</p>
                     </Link>
                     <Link to="/hajj-countdown" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Hajj Countdown</h4>
                        <p className="text-sm text-gray-500 mt-2">Dhul Hijjah prep.</p>
                     </Link>
                     <Link to="/ramadan-planner" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Ramadan Planner</h4>
                        <p className="text-sm text-gray-500 mt-2">Iftar tracking checklists.</p>
                     </Link>
                     <Link to="/eid-qurbani-planner" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Eid/Qurbani Planner</h4>
                        <p className="text-sm text-gray-500 mt-2">Share and slaughter guides.</p>
                     </Link>
                     <Link to="/sadqa-zakat-planner" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Sadqa/Zakat Planner</h4>
                        <p className="text-sm text-gray-500 mt-2">Fund separation guides.</p>
                     </Link>
                     <Link to="/islamic-glossary" className="p-6 rounded-2xl bg-sidqly-ivory border border-gray-100 hover:border-sidqly-green-soft transition-colors group sm:col-span-2">
                        <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Islamic Glossary</h4>
                        <p className="text-sm text-gray-500 mt-2">Key operational terms defined.</p>
                     </Link>
                  </div>
                  <div className="flex gap-4">
                     <Link to="/islamic-utilities" className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Explore Islamic Tools</Link>
                     <Link to="/resources" className="bg-sidqly-ivory text-sidqly-navy border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all">View Resources</Link>
                  </div>

               </div>

               <div>
                  <h2 className="text-3xl font-extrabold text-sidqly-navy mb-8">Seasonal giving guides</h2>
                  <div className="space-y-4">
                     <Link to="/resources/eid-giving" className="block p-6 rounded-2xl bg-sidqly-navy text-white hover:bg-sidqly-green-deep transition-colors">
                        <div className="flex justify-between items-center">
                           <h4 className="font-bold text-lg">Eid Giving Guide</h4>
                           <ArrowRight size={20} className="text-sidqly-gold" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Manage Eid giving and community campaigns.</p>
                     </Link>
                     <Link to="/resources/qurbani-operations" className="block p-6 rounded-2xl bg-sidqly-navy text-white hover:bg-sidqly-green-deep transition-colors">
                        <div className="flex justify-between items-center">
                           <h4 className="font-bold text-lg">Qurbani Operations Guide</h4>
                           <ArrowRight size={20} className="text-sidqly-gold" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Vendor assignments, proof, and certificates.</p>
                     </Link>
                     <Link to="/resources/ramadan-giving" className="block p-6 rounded-2xl bg-sidqly-navy text-white hover:bg-sidqly-green-deep transition-colors">
                        <div className="flex justify-between items-center">
                           <h4 className="font-bold text-lg">Ramadan Giving Guide</h4>
                           <ArrowRight size={20} className="text-sidqly-gold" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Iftar support and ration pack workflows.</p>
                     </Link>
                     <Link to="/resources/sadqa-fitr" className="block p-6 rounded-2xl bg-sidqly-navy text-white hover:bg-sidqly-green-deep transition-colors">
                        <div className="flex justify-between items-center">
                           <h4 className="font-bold text-lg">Sadqa Fitr & Sadaqah</h4>
                           <ArrowRight size={20} className="text-sidqly-gold" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Manage campaigns and family support.</p>
                     </Link>
                     <Link to="/resources/aqiqa-charity-workflow" className="block p-6 rounded-2xl bg-sidqly-navy text-white hover:bg-sidqly-green-deep transition-colors">
                        <div className="flex justify-between items-center">
                           <h4 className="font-bold text-lg">Aqiqa Workflow</h4>
                           <ArrowRight size={20} className="text-sidqly-gold" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Charity requests and vendor fulfillment.</p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 bg-sidqly-ivory border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Foundation of Trust</h2>
              <p className="text-gray-600 italic">Built on Amanah, Protected with Technology.</p>
           </div>
           <TrustPillars />
        </div>
      </section>

      {/* International Readiness */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidqly-green-soft/30 text-sidqly-green-deep text-xs font-bold uppercase tracking-widest mb-8">
              <Globe size={14} /> Global Operations
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-8">International Islamic Operations</h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              Sidqly is designed for Islamic organizations across different regions that need structured workflows, clear reports, donor-safe proof, and dignity-first operations.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              {['united-kingdom', 'europe', 'north-america', 'canada', 'gulf-mena', 'south-asia'].map((r) => (
                <Link key={r} to={`/regions/${r}`} className="bg-sidqly-ivory px-6 py-3 rounded-full border border-gray-100 text-sidqly-navy font-bold text-sm hover:border-sidqly-green-soft transition-all">
                   {r.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
           </div>
        </div>
      </section>

            {/* Seasonal Guides Section */}
      <section className="py-24 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy tracking-tight mb-6">Prepare for Peak Giving Seasons</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Explore our operational guides for Ramadan, Qurbani, and Zakat to ensure your organization is ready to handle high-volume giving with dignity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/resources/ramadan-giving" className="bg-white border-2 border-sidqly-green-soft text-sidqly-green-deep px-8 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft transition-all">Ramadan Operations Guide</Link>
            <Link to="/resources/qurbani-operations" className="bg-white border-2 border-sidqly-green-soft text-sidqly-green-deep px-8 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft transition-all">Qurbani Workflow Guide</Link>
            <Link to="/resources/sadqa-fitr" className="bg-white border-2 border-sidqly-green-soft text-sidqly-green-deep px-8 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft transition-all">Sadqa Fitr Workflows</Link>
            <Link to="/resources/eid-giving" className="bg-white border-2 border-sidqly-green-soft text-sidqly-green-deep px-8 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft transition-all">Eid Giving Guide</Link>
            <Link to="/modules" className="bg-sidqly-green-emerald text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">View All Modules</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sidqly-green-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to organize your mission?</h2>
           <p className="text-sidqly-green-soft text-xl max-w-2xl mx-auto mb-16">
              Join leading organizations using Sidqly to manage their giving with trust, proof, and global clarity.
           </p>
           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald p-8 rounded-3xl font-bold hover:shadow-2xl transition-all flex flex-col items-center gap-4 group">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layout size={24} />
                 </div>
                 <span>Book Demo</span>
              </a>
              <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-navy p-8 rounded-3xl font-bold hover:shadow-2xl transition-all flex flex-col items-center gap-4 group">
                 <div className="w-12 h-12 bg-sidqly-ivory rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                 </div>
                 <span>Fill Inquiry Form</span>
              </a>
              <Link to="/pricing" className="bg-sidqly-navy p-8 rounded-3xl font-bold hover:shadow-2xl transition-all flex flex-col items-center gap-4 group border border-white/10">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe size={24} />
                 </div>
                 <span>View Pricing</span>
              </Link>
           </div>

           <div className="mt-16 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-6">Want your organization to manage giving more clearly?</h3>
             <Link to="/request-organization" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Recommend Sidqly to your organization <ArrowRight size={18} />
             </Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default Home;
