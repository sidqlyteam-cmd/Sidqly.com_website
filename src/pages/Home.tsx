import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

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
              Pakistan's First Premium Charity Operating System
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Verified giving. <span className="text-sidqly-green-soft">Protected dignity.</span> Clear impact.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Sidqly provides organizations with professional workflows for manual review, proof approval, and board-ready reporting. Trusted by Islamic charities, mosques, and corporate teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-demo" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-sidqly-green-deep transition-all shadow-lg hover:shadow-sidqly-green-emerald/20">
                Book a Demo
              </Link>
              <Link to="/how-it-works" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                How it Works
              </Link>
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
                Choose a time to speak with the Sidqly team and see how the platform can support your giving, proof, reporting, and operations.
              </p>
              <a
                href="https://calendly.com/d/dvzs-3zf-cgz"
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
                Share your organization details, current tools, interested modules, and operational challenges so we can understand your needs before the call.
              </p>
              <a
                href="https://forms.gle/bvSMog9pw2Ri4kMt9"
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
                href="mailto:team@sidqly.com?subject=Sidqly%20Inquiry"
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
