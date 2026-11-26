import React, { useState } from 'react';
import SEO from '../components/SEO';
import { CheckCircle2, ShieldAlert, FileText, ChevronDown, Lock } from 'lucide-react';

const Billing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { title: "Select Plan & Verify Email", desc: "Choose your plan on sidqly.com (Starter, Growth, Premium, or add-on modules) and verify your organization email." },
    { title: "Checkout via Paddle or Invoice", desc: "Pay online via Paddle hosted checkout (Cards, Apple Pay, Google Pay, PayPal) or request a formal bank transfer invoice." },
    { title: "Signed Payment Verification", desc: "For Paddle, our backend verifies the signed webhook notification immediately; bank transfers are verified within 24–48 hours." },
    { title: "Workspace & Seat Provisioning", desc: "Your organization workspace, subdomain, staff seats (3 / 10 / 30), and usage allowances are activated automatically." },
    { title: "Open app.sidqly.com", desc: "Sign in to app.sidqly.com with your verified account and start managing donations, receipts, and modules." }
  ];

  const faqs = [
    {
      question: "Are credit cards, Apple Pay, and PayPal accepted?",
      answer: "Yes! Online subscriptions are processed securely via Paddle (supporting Visa, Mastercard, American Express, Apple Pay, Google Pay, and PayPal), with automatic tax receipts and webhook-verified access to app.sidqly.com."
    },
    {
      question: "Can our mosque board still pay by bank transfer invoice?",
      answer: "Yes. Organizations that require trustee sign-off before payment can request a formal bank transfer invoice via /purchase#inquiry. Access is unlocked once our finance team verifies the transfer."
    },
    {
      question: "How long does activation take?",
      answer: "Paddle card/wallet subscriptions activate automatically as soon as the signed webhook confirms payment. Manual bank transfer verification typically takes 24 to 48 business hours."
    }
  ];

  return (
    <>
      <SEO
        title="Billing and Payment Verification | Sidqly"
        description="Learn how Sidqly handles billing, manual payment verification, invoices, payment proof review, and secure setup for Islamic giving teams."
        canonical="/billing"
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Billing and Payment Verification</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sidqly enforces strict manual payment verification to ensure the security and integrity of every organizational account.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
             <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                   <Lock className="text-sidqly-green-emerald" /> Secure Invoice Process
                </h2>
                <div className="space-y-8">
                   {steps.map((step, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-sidqly-green-soft text-sidqly-green-deep flex items-center justify-center font-bold flex-shrink-0 mt-1">
                            {i + 1}
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-sidqly-navy mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="space-y-8">
                <div className="bg-slate-50 border border-slate-200 p-10 rounded-[40px] text-slate-900 shadow-sm">
                   <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <FileText className="text-sidqly-gold" /> Payment Proof Requirements
                   </h2>
                   <p className="text-slate-600 mb-6 leading-relaxed">
                      To avoid delays in your account setup, ensure your payment proof includes:
                   </p>
                   <ul className="space-y-4">
                      {["Sender organization name", "Exact payment amount", "Transaction reference number", "Date of transfer"].map((req, i) => (
                         <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                            <CheckCircle2 className="text-sidqly-green-emerald" size={20} /> {req}
                         </li>
                      ))}
                   </ul>
                </div>

                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                   <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                      <ShieldAlert className="text-red-600" size={20} /> Failed or Unclear Proof
                   </h3>
                   <p className="text-red-800 text-sm leading-relaxed">
                      If payment proof is rejected due to illegibility or mismatch, our finance team will pause the onboarding process until valid proof is supplied. This protects both your organization and the Sidqly platform from unauthorized access.
                   </p>
                </div>
             </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
             <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
                <h3 className="text-xl font-bold text-sidqly-navy mb-4">Donor and Admin Trust</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                   Our manual billing process reflects the exact same rigorous standards we build into the Sidqly software. We believe in verification at every step to protect Amanah.
                </p>
                <div className="inline-block px-4 py-2 bg-sidqly-ivory rounded-lg text-sm text-gray-500 font-bold uppercase tracking-widest border border-gray-200">
                   Privacy & Dignity Protected
                </div>
             </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">Billing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-sidqly-green-soft">
                    <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-5 text-left font-bold text-sidqly-navy flex justify-between items-center focus:outline-none"
                    >
                        <span className="pr-8">{faq.question}</span>
                        <ChevronDown size={20} className={`text-sidqly-green-emerald transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-600 pt-2 border-t border-gray-100">{faq.answer}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Billing;