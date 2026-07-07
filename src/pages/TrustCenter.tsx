import React from 'react';
import SEO from '../components/SEO';
import { Shield, Eye, Lock, FileCheck, CheckCircle2 } from 'lucide-react';
import ProofTrustEngine from '../components/diagrams/ProofTrustEngine';
import ZakatSeparation from '../components/diagrams/ZakatSeparation';
import DignitySafeBoundary from '../components/diagrams/DignitySafeBoundary';
import { generateBreadcrumbSchema } from '../lib/schema';
import { seoData } from '../data/seo';

import TrustLinkStrip from '../components/TrustLinkStrip';

const TrustCenter: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Trust Center", item: "/trust-center" }
      ])
    ]
  };

  return (
    <>
      <SEO
        {...seoData.trust}
        schema={schema}
      />


      <TrustLinkStrip />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-8">Trust Center</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              At Sidqly, trust is not just a feature—it's the foundation of everything we build. We empower Islamic organizations to operate with complete integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100">
             <h2 className="text-xl font-bold text-sidqly-navy mb-4">Our Commitment to Amanah</h2>
             <p className="text-gray-600 mb-6">Sidqly is designed around:</p>
             <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {["Manual review", "Approval trails", "Recipient dignity", "Donor-safe updates", "Clear reporting", "Role-based operational workflows", "Honest proof handling"].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm font-medium text-sidqly-navy"><CheckCircle2 size={16} className="text-sidqly-green-emerald"/> {item}</li>
                ))}
             </ul>
             <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200 italic">Sidqly supports operational clarity and structured records. Organizations should confirm legal, accounting, tax, payment, and Shariah requirements with their own qualified advisors.</p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
             <ZakatSeparation />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Eye className="text-sidqly-green-emerald" size={32} />,
                title: "Privacy-First Data",
                desc: "Every piece of data is handled with a focus on privacy. We ensure that recipient information is only accessible to authorized personnel."
              },
              {
                icon: <Shield className="text-sidqly-green-emerald" size={32} />,
                title: "Donor-Safe Proof",
                desc: "Our Proof Trust Engine allows you to share impact verification without compromising the identity or dignity of those being helped."
              },
              {
                icon: <Lock className="text-sidqly-green-emerald" size={32} />,
                title: "Manual Approval Gates",
                desc: "No automatic approvals. Every critical step, from payment to Zakat disbursement, requires a human-in-the-loop review."
              },
              {
                icon: <CheckCircle2 className="text-sidqly-green-emerald" size={32} />,
                title: "Zakat Fund Separation",
                desc: "Strict logical and operational separation of Zakat and Sadaqah funds to maintain the highest religious and financial standards."
              },
              {
                icon: <FileCheck className="text-sidqly-green-emerald" size={32} />,
                title: "Audit-Ready Records",
                desc: "Every action is logged. Generate comprehensive audit trails and board-ready reports with a single click."
              },
              {
                icon: <Shield className="text-sidqly-green-emerald" size={32} />,
                title: "Role-Safe Visibility",
                desc: "Granular permissions ensure that team members, vendors, and volunteers only see what they need to perform their roles."
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-sidqly-green-soft transition-all shadow-sm">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
             <DignitySafeBoundary />
          </div>
          <div className="mb-20">
             <ProofTrustEngine />
          </div>
          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-xl">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">Our Commitment to Dignity</h2>
             <div className="prose prose-sidqly max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Sidqly was built on the principle that providing charity should never come at the cost of the recipient's dignity. Traditional proof methods often involve taking photos of recipients that are then shared broadly on social media.
                </p>
                <p className="mb-6 font-bold text-sidqly-navy">
                  Sidqly changes this.
                </p>
                <p className="mb-8">
                  Our platform enforces "Dignity-Safe" workflows. This means automated blurring of faces, secure impact links for donors that cannot be indexed by search engines, and a culture of respect integrated into the software itself.
                </p>
                <div className="bg-sidqly-ivory p-6 rounded-2xl border-l-4 border-sidqly-green-deep">
                   <p className="text-sm italic font-medium text-sidqly-navy">
                     "Charity is not about making people look small. It's about empowering them. Our technology reflects this belief."
                   </p>
                </div>
             </div>
          </div>
          <div className="mt-12 p-6 bg-sidqly-green-soft/20 border border-sidqly-green-soft/50 rounded-2xl text-center">
             <p className="text-sm font-bold text-sidqly-navy">
                Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustCenter;
