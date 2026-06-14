import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Shield, Eye, Lock, FileCheck, AlertTriangle, Users } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <>
      <SEO
        title="Security & Data Integrity"
        description="Learn how Sidqly protects organization data, donor privacy, and recipient dignity through secure, manual approval workflows."
        canonical="/security"
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Security & Integrity</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              We provide professional-grade security for the most sensitive aspect of your mission: the data of your donors and those you serve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Shield className="text-sidqly-green-emerald" size={32} />,
                title: "Secure Access Principles",
                desc: "Granular roles and permissions ensure your team only sees the data necessary for their specific tasks."
              },
              {
                icon: <Eye className="text-sidqly-green-emerald" size={32} />,
                title: "Privacy-by-Default",
                desc: "Data minimization is built into our core workflows. We never collect or expose data without a clear operational need."
              },
              {
                icon: <Lock className="text-sidqly-green-emerald" size={32} />,
                title: "Manual Approval Gates",
                desc: "Our platform enforces human review. No automated payment or disbursement can happen without manual verification."
              },
              {
                icon: <FileCheck className="text-sidqly-green-emerald" size={32} />,
                title: "Audit-Ready Logs",
                desc: "Every status change and approval is logged with a timestamp and user ID for complete transparency."
              },
              {
                icon: <Users className="text-sidqly-green-emerald" size={32} />,
                title: "Dignity-Safe Sharing",
                desc: "Automated face-blurring ensures that impact proof shared with donors respects recipient privacy."
              },
              {
                icon: <AlertTriangle className="text-sidqly-green-emerald" size={32} />,
                title: "No Automatic Rulings",
                desc: "Sidqly supports your team's decision-making but never replaces human religious or operational review."
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-sidqly-green-soft transition-all shadow-sm">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-sidqly-ivory p-8 md:p-16 rounded-[40px] border border-gray-100">
             <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">Data Integrity Policy</h2>
                <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-6">
                   <p>
                      Sidqly operates with a strict focus on data integrity. We understand that for an Islamic organization, your data is your Amanah (trust).
                   </p>
                   <ul className="list-disc pl-6 space-y-4">
                      <li><strong>Encrypted in Transit:</strong> All communications between your team and our servers are protected using industry-standard encryption.</li>
                      <li><strong>Strict Logical Separation:</strong> Data between different organizations using Sidqly is logically isolated at the software level.</li>
                      <li><strong>Human-in-the-Loop:</strong> We do not use automated bots to detect fraud or approve Zakat. We empower your team with tools to do this better.</li>
                      <li><strong>No Public Exposure:</strong> Private recipient data is never indexed by search engines or shared publicly.</li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="mt-12 p-6 bg-sidqly-green-soft/20 border border-sidqly-green-soft/50 rounded-2xl text-center max-w-4xl mx-auto">
             <p className="text-sm font-bold text-sidqly-navy">
                Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
             </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Have security questions?</h2>
            <p className="text-sidqly-green-soft mb-12 max-w-2xl mx-auto">
               Our team is ready to discuss our security architecture, data handling policies, and how we protect your organization's integrity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">Book Security Briefing</a>
               <a href={`mailto:${brand.email}`} className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Email the team</a>
            </div>
         </div>
      </section>
    </>
  );
};

export default Security;
