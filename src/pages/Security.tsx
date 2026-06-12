import React from 'react';
import { Shield, EyeOff, ClipboardCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Security: React.FC = () => {
  return (
    <>
      <SEO
        title="Security & Trust Center"
        description="Learn how Sidqly protects your data, ensures recipient dignity, and maintains audit-ready records."
      />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Trust & Security Center</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sidqly is built on the foundation of trust. We protect your organization, your donors, and most importantly, the dignity of those receiving aid.
            </p>
          </div>

          {/* Core Trust Pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">Privacy-First Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use bank-grade security and encryption to protect all organizational and financial data. Access is strictly controlled via role-based permissions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6">
                <EyeOff size={24} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">Dignity-Safe Protection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recipient privacy is our highest priority. Private information like full names and exact addresses are never exposed in donor-facing or public views.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">Manual Approval Gates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nothing goes to a donor without review. Our Proof Trust Engine ensures every piece of evidence is vetted by your management team first.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-sidqly-green-soft/30 text-sidqly-green-deep rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">Audit-Ready Records</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every action in Sidqly creates a clear audit trail. From payment verification to Zakat distribution, your board is always ready for review.
              </p>
            </div>
          </div>

          {/* Operational Clarity Section */}
          <div className="bg-sidqly-navy text-white rounded-[3rem] p-10 md:p-16 mb-16 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-10">Operational Safety Principles</h2>
               <div className="grid md:grid-cols-2 gap-12">
                 <div className="flex gap-4">
                   <AlertCircle className="text-sidqly-gold flex-shrink-0" />
                   <div>
                     <h4 className="font-bold mb-2">No Automatic Zakat Rulings</h4>
                     <p className="text-gray-400 text-sm leading-relaxed">Sidqly provides the workflow, but religious eligibility is always determined by your authorized human reviewers.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <AlertCircle className="text-sidqly-gold flex-shrink-0" />
                   <div>
                     <h4 className="font-bold mb-2">No Automatic Payment Verification</h4>
                     <p className="text-gray-400 text-sm leading-relaxed">We don't guess if a bank transfer happened. Your team manually confirms every PKR before it enters the verified pool.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <AlertCircle className="text-sidqly-gold flex-shrink-0" />
                   <div>
                     <h4 className="font-bold mb-2">Whitelabel Data Sovereignty</h4>
                     <p className="text-gray-400 text-sm leading-relaxed">Your data belongs to your organization. We provide the platform to manage it securely, not to own or sell it.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <AlertCircle className="text-sidqly-gold flex-shrink-0" />
                   <div>
                     <h4 className="font-bold mb-2">Verified Proof Lifecycle</h4>
                     <p className="text-gray-600 text-sm leading-relaxed">Evidence moves through: Field Upload → Staff Review → Manager Approval → Donor Visibility.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-8">Have specific security or compliance questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.links.calendly} className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Book Security Review</a>
              <a href={brand.links.emailInquiry} className="bg-white border border-gray-200 px-8 py-3 rounded-xl font-bold text-sidqly-navy hover:bg-gray-50 transition-all">Email Team</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
