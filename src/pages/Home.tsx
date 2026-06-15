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

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Global Operating Platform for Islamic Giving"
        description="Run verified Islamic giving with proof, dignity, and global operational clarity. Trusted by mosques, charities, and Zakat teams worldwide."
      />

      {/* Hero Section */}
      <section className="relative bg-sidqly-navy py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10">
              International Operating Standard for Amanah
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Verified giving. <span className="text-sidqly-green-soft">Protected dignity. Clear impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium">
              Sidqly helps mosques, charities, and giving teams manage workflows, manual review, proof approval, and board-ready reporting from one premium global platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-sidqly-green-deep transition-all shadow-xl hover:shadow-sidqly-green-emerald/20 text-center">
                Book Demo
              </a>
              <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                Fill Inquiry Form
              </a>
              <Link to="/pricing" className="bg-transparent text-sidqly-green-soft border border-sidqly-green-soft/30 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-sidqly-green-soft/10 transition-all text-center">
                View Pricing
              </Link>
            </div>
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
              <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                 Learn how it works <ArrowRight size={20} />
              </Link>
           </div>
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
        </div>
      </section>
    </>
  );
};

export default Home;
