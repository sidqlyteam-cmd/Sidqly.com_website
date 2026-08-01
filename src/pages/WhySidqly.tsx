import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, BarChart, Lock } from 'lucide-react';
import { generateBreadcrumbSchema } from '../lib/schema';
import { Link } from 'react-router-dom';

const WhySidqly: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Why Sidqly", item: "/why-sidqly" }
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Why Sidqly | Software for Professional Giving Operations"
        description="Discover why mosques and Islamic charities choose Sidqly over spreadsheets and WhatsApp groups. Built for trust, Zakat separation, and dignity."
        canonical="/why-sidqly"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-8">Why Choose Sidqly?</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto">
             Sidqly is the first purpose-built, remote SaaS operating platform designed specifically to replace fragmented tools with verified, secure, and dignity-safe workflows.
          </p>
        </div>
      </section>

      {/* Core Reasons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-12 mb-20">
             <div className="p-8 bg-sidqly-ivory rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sidqly-green-deep mx-auto mb-6 shadow-sm">
                   <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">Amanah & Verification</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   We replace loose thumbs-up approvals with strict, immutable manual review gates for payment screens, delivery records, and audit logs.
                </p>
             </div>

             <div className="p-8 bg-sidqly-ivory rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sidqly-green-deep mx-auto mb-6 shadow-sm">
                   <Lock size={32} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">Recipient Dignity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   We enforce strict data privacy boundaries with built-in face-blurring and restricted link sharing, ensuring beneficiaries are never publicly exposed.
                </p>
             </div>

             <div className="p-8 bg-sidqly-ivory rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sidqly-green-deep mx-auto mb-6 shadow-sm">
                   <BarChart size={32} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">Board-Ready Reporting</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   No more compiling Excel sheets for days. Sidqly consolidates your verified workflows into professional, audit-ready summaries with a single click.
                </p>
             </div>
          </div>

          <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] mb-20">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Operational Clarity, Built Safely</h2>
                   <p className="text-gray-300 mb-6 leading-relaxed">
                      We understand that the trust (Amanah) given to you by your donors is your most valuable asset. Sidqly acts as your secure backend, organizing the operations around campaigns such as Zakat, Sadaqah, Qurbani, and Ramadan.
                   </p>
                   <div className="bg-white/10 p-5 border border-white/10 rounded-2xl">
                      <h4 className="font-bold text-sidqly-gold uppercase text-xs mb-2">Our Non-Authoritative Boundary</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                         Sidqly provides administrative and operational software. We are **not** a religious authority and do not issue Shariah rulings or Zakat eligibility decisions. The eligibility and fund allocation decisions remain entirely with your own scholars or trustees.
                      </p>
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="font-bold text-lg text-sidqly-green-soft mb-4">Supported Roles:</h3>
                   {[
                     { role: "Charities", desc: "Standardize approval logs, secure recipient data, and compile professional reports easily." },
                     { role: "Donors", desc: "Receive real-time, privacy-safe updates on the impact of their contributions." },
                     { role: "Volunteers", desc: "Manage tasks, coordinates routes, and upload verified proof directly from the field." },
                     { role: "Vendors", desc: "Collaborate via simplified portals to update fulfillment statuses and deliver proof." }
                   ].map((r, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-6 h-6 rounded-full bg-sidqly-green-soft/20 text-sidqly-green-soft flex items-center justify-center font-bold text-xs mt-0.5">{i + 1}</div>
                         <div>
                            <h4 className="font-bold text-sm text-white">{r.role}</h4>
                            <p className="text-xs text-gray-400">{r.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="text-center">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Ready to see the difference?</h2>
             <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-demo" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo Walkthrough</Link>
                <Link to="/what-is-sidqly" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">What is Sidqly?</Link>
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhySidqly;
