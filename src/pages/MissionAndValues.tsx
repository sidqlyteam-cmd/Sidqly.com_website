import React from 'react';
import SEO from '../components/SEO';
import { Heart, ShieldCheck, Scale, EyeOff, ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '../lib/schema';
import { Link } from 'react-router-dom';

const MissionAndValues: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Mission & Values", item: "/mission-and-values" }
      ])
    ]
  };

  const values = [
    {
      icon: <ShieldCheck size={32} className="text-sidqly-green-deep" />,
      title: "Operational Integrity (Amanah)",
      desc: "Every record, donation, and fulfillment action represents a trust. We enforce strict, verified, and transparent review gates to protect that trust."
    },
    {
      icon: <EyeOff size={32} className="text-sidqly-green-deep" />,
      title: "Recipient Dignity",
      desc: "Providing aid must never compromise the respect of the beneficiary. Our 'Dignity-Safe' tools enforce privacy and anonymization by default."
    },
    {
      icon: <Scale size={32} className="text-sidqly-green-deep" />,
      title: "Factual Transparency",
      desc: "We promote clear, data-backed reports for boards, donors, and auditors. We avoid inflated claims, placeholders, or unverifiable numbers."
    }
  ];

  return (
    <>
      <SEO
        title="Mission, Core Values & Ethical Boundaries | Sidqly"
        description="Learn about Sidqly's Sadaqah-inspired operational values, recipient dignity focus, and our strict non-authoritative boundaries."
        canonical="/mission-and-values"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-8">Mission & Values</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto">
             A Sadaqah-inspired model built to organize modern giving operations with trust, dignity, and professional accountability.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-sidqly-navy">The Principles Guiding Our Code</h2>
              <p className="text-gray-600 mt-4">Sidqly merges the highest standards of Islamic integrity with professional cloud operations.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 mb-20">
              {values.map((v, i) => (
                 <div key={i} className="p-8 bg-sidqly-ivory rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                       {v.icon}
                    </div>
                    <h3 className="text-xl font-bold text-sidqly-navy mb-4">{v.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                 </div>
              ))}
           </div>

           {/* Non-Authoritative Boundary Block */}
           <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] max-w-4xl mx-auto mb-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
              <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Heart className="text-sidqly-gold" /> Strict Operational Boundaries
                 </h2>
                 <p className="text-gray-300 leading-relaxed mb-6 text-sm max-w-2xl mx-auto">
                    Sidqly provides cloud-based administrative software. We do not issue religious rulings, Shariah fatwas, or legal/tax advisory opinions. All eligibility reviews, Shariah compliance standards, and local tax reporting remain strictly under the purview of your organization's appointed scholars and legal advisors.
                 </p>
                 <div className="inline-block px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-sidqly-green-soft uppercase tracking-widest border border-white/10">
                    SaaS Platform • Non-Authoritative
                 </div>
              </div>
           </div>

           <div className="text-center">
              <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Want to explore our platform?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 <Link to="/what-is-sidqly" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                    What is Sidqly <ArrowRight size={18} />
                 </Link>
                 <Link to="/trust-center" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                    Trust Center
                 </Link>
              </div>
           </div>

        </div>
      </section>
    </>
  );
};

export default MissionAndValues;
