import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Mail, CreditCard, Calendar, FileText, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';

const Purchase: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { title: "Review Setup Options", desc: "Decide whether you want to start with a single module pilot or a full organizational rollout." },
    { title: "Fill the Inquiry Form", desc: "Submit your details so we understand your specific services (Zakat, Qurbani, etc.) and volume." },
    { title: "Plan Confirmation", desc: "We will help you confirm the appropriate pricing tier based on your operational scale." },
    { title: "Receive Invoice", desc: "The Sidqly team will generate and send a formal invoice to your designated finance contact." },
    { title: "Manual Payment", desc: "Complete the payment via bank transfer using the secure details provided." },
    { title: "Payment Verification", desc: "Our team will manually review and verify the transaction to ensure security." },
    { title: "Implementation Begins", desc: "Once verified, your account is provisioned and your onboarding schedule begins." }
  ];

  const faqs = [
    {
      question: "Why can't I just buy Sidqly online with a credit card immediately?",
      answer: "Sidqly is a serious operations platform, not a simple one-click template. We require an initial review and manual payment to ensure we correctly map your workflows and that the platform is a perfect fit for your giving operations."
    },
    {
      question: "Do you offer custom enterprise pricing?",
      answer: "Yes, for large charities managing complex, multi-national workflows or corporate sponsors, we offer custom implementation plans."
    },
    {
      question: "Who should I contact if I have billing questions?",
      answer: "Please reach out to team@sidqly.com with any billing or invoice-related inquiries."
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">Start Your Sidqly Setup</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
               Sidqly is a comprehensive operations platform tailored for Islamic giving. Our setup process is designed to ensure a successful, professional rollout for your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 space-y-8">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Before you purchase</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We want to ensure Sidqly is the right fit. We highly encourage all new organizations to either book a demo or thoroughly fill out the inquiry form before initiating a purchase.
                  </p>
                  <div className="space-y-4">
                    <a href={brand.calendlyUrl} className="flex items-center gap-3 font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors">
                      <Calendar size={20} /> Book a Demo
                    </a>
                    <a href={brand.inquiryFormUrl} className="flex items-center gap-3 font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors">
                      <FileText size={20} /> Fill Inquiry Form
                    </a>
                  </div>
               </div>

               <div className="bg-sidqly-navy p-8 rounded-3xl text-white">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-sidqly-green-soft" /> Setup Options</h2>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li><strong className="text-white block">Single Module Pilot:</strong> Ideal for testing workflows like an upcoming Qurbani campaign.</li>
                    <li><strong className="text-white block">Full Rollout:</strong> Comprehensive onboarding across Zakat, Sadaqah, and general funds.</li>
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-8">
               <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Implementation Timeline</h2>
                  <div className="space-y-8">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start relative group">
                        {i < steps.length - 1 && (
                            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-50 group-hover:bg-sidqly-green-soft transition-colors hidden md:block"></div>
                        )}
                        <div className="w-12 h-12 rounded-2xl bg-sidqly-green-deep text-white flex items-center justify-center font-bold flex-shrink-0 z-10">
                            {i + 1}
                        </div>
                        <div className="pt-1.5">
                            <h3 className="text-xl font-bold text-sidqly-navy mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-sidqly-green-deep text-white p-10 md:p-16 rounded-[40px] mb-20 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <CreditCard size={160} />
             </div>
             <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">Manual Payment & Invoice Process</h2>
                <p className="text-lg text-sidqly-green-soft mb-8 leading-relaxed">
                  To maintain security and ensure accurate account provisioning, Sidqly does not use automated credit card checkout for organizational plans.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
                  <p className="text-white font-medium">All billing is handled via formal invoices and manual bank transfers. Exact payment details are shared securely by our team once your plan is confirmed.</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="text-sidqly-gold" /> Verified Manual Review
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
             <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Who should contact us first?</h2>
             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
               If you are a mosque committee member, charity trustee, or operations lead ready to transition away from spreadsheets, we are ready to speak with you.
             </p>
             <a href={`mailto:${brand.email}`} className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all inline-flex items-center gap-2">
                <Mail size={18} /> Email the Team
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;