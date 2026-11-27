import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Mail, CreditCard, FileText, CheckCircle2, ShieldCheck, ChevronDown, Check, Globe } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Purchase: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  // Detect plan from query param (e.g. ?plan=starter)
  const searchParams = new URLSearchParams(location.search);
  const planParam = searchParams.get('plan');
  const initialPlan = planParam
    ? planParam.charAt(0).toUpperCase() + planParam.slice(1)
    : 'Starter';

  useEffect(() => {
    if (location.hash === '#inquiry') {
      const el = document.getElementById('inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const steps = [
    { title: "Select Plan & Submit Details", desc: "Choose your base plan (Starter, Growth, or Premium), extra branches, and any add-on modules below." },
    { title: "Verify Email & Pending Account", desc: "Confirm your official organization email and review your staff seat, workspace, and usage allowances." },
    { title: "Complete Subscription Checkout", desc: "Pay securely via Paddle hosted checkout (Cards, Apple Pay, Google Pay, PayPal) or formal bank invoice—with no separate deposit." },
    { title: "Webhook Payment Verification", desc: "Our backend verifies the signed payment notification and activates your organization workspace and subdomain." },
    { title: "Open Dashboard (app.sidqly.com)", desc: "Click \"Open your dashboard\" to enter app.sidqly.com with all purchased workspaces and add-ons ready." }
  ];

  const faqs = [
    {
      question: "Do we subscribe before entering app.sidqly.com?",
      answer: "Yes. Sidqly follows a subscribe-first workflow: select your plan on sidqly.com, verify your email, and complete checkout via Paddle (or formal bank transfer invoice). Access to app.sidqly.com is unlocked only after our backend verifies payment."
    },
    {
      question: "How do adding extra branches or separate organizations work?",
      answer: "Starter includes 1 workspace, Growth includes 3, and Premium includes 10. Each organization/branch gets its own isolated subdomain, bank/payout setup, and accounting ledger. You can add extra workspaces anytime for +$19/mo each and switch between them from one Master Admin account."
    },
    {
      question: "Are donor records limited on Starter or Growth?",
      answer: "No. Donor records and donation entries are unlimited on every plan. Plans only meter named staff accounts (3 / 10 / 30), organization workspaces (1 / 3 / 10), and storage, email, and AI usage allowances."
    },
    {
      question: "What is your refund and cancellation policy?",
      answer: "You can cancel anytime before your next renewal. New Paddle subscriptions are covered by a 14-day refund window. Email sidqly.team@gmail.com for any billing or invoice support."
    }
  ];

  return (
    <>
      <SEO
        title="Start Your Sidqly Setup | Verified Giving Operations Platform"
        description="Start your Sidqly setup for verified giving operations, including manual payment review, proof approval, donor communication, and reporting workflows."
        canonical="/purchase"
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">Start Your Sidqly Setup</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
               Sidqly is a comprehensive operations platform tailored for Islamic giving. Our setup process is designed to ensure a successful, professional rollout for your team.
            </p>
          </div>

          {/* Inquiry Form & Setup Guide */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
               <InquiryForm initialPlan={initialPlan} />
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-5 space-y-8">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Before you purchase</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    We want to ensure Sidqly is the right fit. Fill out the direct inquiry form on the left with your organization's services (Zakat, Qurbani, Matrimonial, Hifz, etc.) and volume.
                  </p>
                  <div className="space-y-3 border-t border-gray-50 pt-4 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                       <Check size={16} className="text-sidqly-green-emerald shrink-0" />
                       <span>Dedicated subdomain included on all plans</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Check size={16} className="text-sidqly-green-emerald shrink-0" />
                       <span>Direct inquiry sent to sidqly.team@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Check size={16} className="text-sidqly-green-emerald shrink-0" />
                       <span>Software-only subscription (Sidqly never holds or processes funds)</span>
                    </div>
                  </div>
               </div>

               <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl text-slate-900 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-sidqly-green-deep" /> Plan Allowances</h2>
                  <ul className="space-y-4 text-slate-700 text-sm">
                    <li><strong className="text-slate-900 block">Starter ($29/mo | $290/yr):</strong> 3 staff seats, 1 organization workspace, unlimited donor records, 5 GB storage, 1,000 emails/mo, 100 AI proof images/mo.</li>
                    <li><strong className="text-slate-900 block">Growth ($99/mo | $990/yr):</strong> 10 staff seats, up to 3 workspaces, custom domain, AAOIFI Zakat & Qurbani, 25 GB storage, 5,000 emails/mo, 500 AI images/mo.</li>
                    <li><strong className="text-slate-900 block">Premium ($199/mo | $1,990/yr):</strong> 30 staff seats, up to 10 workspaces, Master Admin switcher, white-label portal, 100 GB storage, 20,000 emails/mo.</li>
                    <li><strong className="text-slate-900 block">Add-ons & Extra Branches:</strong> Extra workspace (+$19/mo), Matrimonial (+$29/mo), Hifz Academy (+$39/mo), Janazah Fund (+$19/mo).</li>
                  </ul>
               </div>

               <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-3xl text-slate-900 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                     <Globe size={18} /> Dedicated Subdomain
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                     Every verified organization gets its own secure portal on <span className="font-mono text-emerald-900 font-bold bg-white/70 px-1.5 py-0.5 rounded">https://yourmosque.sidqly.com</span> with zero extra configuration.
                  </p>
               </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-20">
             <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">Implementation Timeline</h2>
                <div className="grid md:grid-cols-5 gap-6">
                  {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-2xl bg-sidqly-green-deep text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                          {i + 1}
                      </div>
                      <h3 className="text-base font-bold text-sidqly-navy mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Payment & Invoicing Overview */}
          <div className="bg-sidqly-green-deep text-white p-10 md:p-16 rounded-[40px] mb-20 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <CreditCard size={160} />
             </div>
             <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">Payment & Invoicing Options</h2>
                <p className="text-lg text-sidqly-green-soft mb-8 leading-relaxed">
                  We support both instant online card checkout powered by Paddle and formal invoices for manual bank transfers.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                       <CreditCard size={18} className="text-sidqly-gold" /> Online Paddle Checkout
                    </h4>
                    <p className="text-xs text-gray-200 leading-relaxed">
                       Instant card recurring subscriptions (Visa, Mastercard, Amex, Apple Pay, Google Pay). Invoices and tax receipts issued automatically.
                    </p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                       <FileText size={18} className="text-sidqly-gold" /> Bank Transfer & Invoicing
                    </h4>
                    <p className="text-xs text-gray-200 leading-relaxed">
                       Formal corporate invoices for board approval, payable via domestic or international bank wire transfer.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="text-sidqly-gold" /> Verified Security & Shariah Amanah Compliance
                </div>
             </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">Frequently Asked Questions</h2>
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

          {/* Contact Section */}
          <div className="text-center">
             <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Need Immediate Assistance?</h2>
             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
               If you have urgent questions or want a direct consultation, our operations team is available at <span className="font-semibold text-sidqly-navy">sidqly.team@gmail.com</span>.
             </p>
             <a href="mailto:sidqly.team@gmail.com" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all inline-flex items-center gap-2 shadow-sm">
                <Mail size={18} /> Email sidqly.team@gmail.com
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;