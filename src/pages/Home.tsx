import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Verified Giving & Protected Dignity"
        description="Sidqly is a premium Islamic operating platform for modern charities, mosques, and Zakat committees. Scale your impact with trusted workflows."
      />

      {/* Hero Section */}
      <section className="relative bg-sidqly-navy py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10">
              Run Islamic giving with trust, proof, and operational clarity.
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Verified giving. <span className="text-sidqly-green-soft">Protected dignity.</span> Clear impact.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Sidqly helps mosques, charities, Qurbani teams, Ramadan drives, Zakat committees, vendors, volunteers, and corporate sponsors manage donations, fulfillment, proof, reports, receipts, and donor updates from one premium operating platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-sidqly-green-deep transition-all shadow-lg hover:shadow-sidqly-green-emerald/20 text-center">
                Book Demo
              </a>
              <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                Fill Inquiry Form
              </a>
              <a href={brand.links.emailInquiry} className="bg-transparent text-sidqly-green-soft border border-sidqly-green-soft/30 px-8 py-4 rounded-xl text-lg font-bold hover:bg-sidqly-green-soft/10 transition-all text-center">
                Email Sidqly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-center font-bold text-gray-400 text-xl tracking-tighter italic">ZAKAT COMMITTEE</div>
            <div className="text-center font-bold text-gray-400 text-xl tracking-tighter italic">QURBANI NETWORK</div>
            <div className="text-center font-bold text-gray-400 text-xl tracking-tighter italic">MOSQUE TRUST</div>
            <div className="text-center font-bold text-gray-400 text-xl tracking-tighter italic">ISLAMIC CHARITY</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Visual Section */}
      <section className="py-20 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                Without Sidqly
              </h3>
              <ul className="space-y-4">
                {[
                  "Messy WhatsApp groups for proof",
                  "Scattered Excel sheets for payments",
                  "Manual certificate creation taking hours",
                  "No clear audit trail for Zakat separation",
                  "Dignity risks with un-blurred recipient photos",
                  "Board reporting is a week-long struggle"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-red-700 text-sm">
                    <span className="mt-1 text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sidqly-green-soft/20 p-8 rounded-3xl border border-sidqly-green-soft/50">
              <h3 className="text-xl font-bold text-sidqly-green-deep mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-sidqly-green-emerald text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                With Sidqly
              </h3>
              <ul className="space-y-4">
                {[
                  "Centralized Proof Trust Engine",
                  "Real-time manual payment review",
                  "Automated donor certificates & receipts",
                  "Strict, verified Zakat fund separation",
                  "Dignity-safe, approved proof workflows",
                  "Board-ready reports in seconds"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sidqly-green-deep text-sm">
                    <span className="mt-1 text-sidqly-green-emerald">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-4">Built for Trust and Professionalism</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Move beyond manual spreadsheets and disorganized communication. Sidqly brings clarity to every step of your giving journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sidqly-green-soft transition-all shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center text-sidqly-green-deep mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-3">Verified Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure every donation and distribution is manually reviewed and approved. Maintain an audit-ready trail for your board and donors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sidqly-green-soft transition-all shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center text-sidqly-green-deep mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-3">Protected Dignity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manage recipient data with the highest security standards. Share proof of impact with donors while strictly protecting recipient identities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sidqly-green-soft transition-all shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center text-sidqly-green-deep mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-3">Professional Reporting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generate real-time reports and donor certificates automatically. Save your team hundreds of hours of manual follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Section Upgrade */}
      <section className="py-20 bg-sidqly-green-deep text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to see how Sidqly can help your organization?</h2>
            <p className="text-sidqly-green-soft text-lg max-w-3xl mx-auto">
              Book a demo, fill the detailed inquiry form, or email the Sidqly team. We’ll review your organization type, current workflow, and main challenges so we can recommend the right Sidqly setup for your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CTA Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
              <h3 className="text-2xl font-bold mb-4">Book a Demo</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Book a Sidqly demo to discuss your giving operations, payment tracking, proof process, reporting needs, and how Sidqly can support your team.
              </p>
              <a
                href={brand.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sidqly-green-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft hover:text-sidqly-green-deep transition-all w-full justify-center"
              >
                Book Demo <ArrowRight size={18} />
              </a>
            </div>

            {/* CTA Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
              <h3 className="text-2xl font-bold mb-4">Fill Inquiry Form</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Fill the detailed inquiry form so the Sidqly team can understand your organization type, current tools, active services, and biggest operational challenges.
              </p>
              <a
                href={brand.links.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sidqly-green-deep px-6 py-3 rounded-xl font-bold hover:bg-sidqly-gold transition-all w-full justify-center"
              >
                Fill Inquiry Form <ArrowRight size={18} />
              </a>
            </div>

            {/* CTA Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
              <h3 className="text-2xl font-bold mb-4">Email Sidqly Team</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Have a direct question? Send your query to the Sidqly team and we’ll guide you toward the right plan, pilot, or setup.
              </p>
              <a
                href={brand.links.emailInquiry}
                className="inline-flex items-center gap-2 bg-sidqly-gold text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-white transition-all w-full justify-center"
              >
                Email team@sidqly.com <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-8 leading-tight">Everything you need to run a trusted organization.</h2>
              <ul className="space-y-4">
                {[
                  'Zakat, Sadaqah, and Qurbani fund separation',
                  'Manual payment review and verification',
                  'Proof collection and approval workflow',
                  'Dignity-safe donor updates and certificates',
                  'Vendor and volunteer management',
                  'Board-ready and audit-ready reporting'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-sidqly-green-emerald mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/features" className="text-sidqly-green-emerald font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  See all features <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-sidqly-ivory rounded-3xl overflow-hidden border border-gray-100 shadow-inner flex items-center justify-center">
                 <div className="p-8 text-center">
                    <p className="text-sidqly-green-deep font-bold text-2xl mb-2 italic">Professional Operations</p>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">Organized • Trusted • Secure</p>
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Latest Impact</p>
                <p className="text-sidqly-navy font-bold leading-tight">100% of proof approved and sent to donors today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
