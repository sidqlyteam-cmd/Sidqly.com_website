import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2, Info } from 'lucide-react';

const Billing: React.FC = () => {
  return (
    <>
      <SEO title="Billing & Payments" canonical="/billing" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
            <h1 className="text-4xl font-bold text-sidqly-navy mb-6 text-center">Billing & Payments</h1>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Sidqly uses manual payment review to ensure professional onboarding for every organization.</p>

            <div className="space-y-12 mb-20">
               <div>
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                     <CheckCircle2 className="text-sidqly-green-emerald" /> Official Payment Details
                  </h2>
                  <div className="bg-sidqly-ivory p-8 rounded-3xl space-y-6">
                     <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-4">
                        <span className="text-gray-500 font-medium">Payment Method</span>
                        <span className="font-bold text-sidqly-navy">Shared after plan confirmation</span>
                     </div>
                     <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-4">
                        <span className="text-gray-500 font-medium">Confirmation Email</span>
                        <span className="font-bold text-sidqly-navy">{brand.payment.confirmationEmail}</span>
                     </div>
                  </div>
               </div>

               <div>
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                     <Info className="text-sidqly-green-emerald" /> Billing Process
                  </h2>
                  <div className="space-y-6">
                     {[
                        { title: "Choose a plan", desc: "Select the plan that matches your current organization scale." },
                        { title: "Make payment", desc: "After your plan is confirmed, the Sidqly team will share the correct payment and onboarding instructions." },
                        { title: "Email proof", desc: "Send your payment confirmation to team@sidqly.com." },
                        { title: "Verification", desc: "Our team will manually review and verify your payment within 24 hours." },
                        { title: "Setup", desc: "Access is granted and your custom onboarding process begins." }
                     ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="w-8 h-8 rounded-full bg-sidqly-green-deep text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">
                              {i + 1}
                           </div>
                           <div>
                              <h4 className="font-bold text-sidqly-navy mb-1">{step.title}</h4>
                              <p className="text-sm text-gray-600">{step.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="p-8 rounded-3xl bg-sidqly-navy text-white text-center">
               <h3 className="text-2xl font-bold mb-6">Need help with billing?</h3>
               <p className="text-gray-400 mb-8 leading-relaxed max-w-sm mx-auto">
                  If you have questions about custom plans or corporate sponsorship billing, please contact our team.
               </p>
               <a href={`mailto:${brand.email}`} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block">
                  Email Billing Support
               </a>
            </div>

            <div className="mt-12 p-6 bg-sidqly-green-soft/20 border border-sidqly-green-soft/50 rounded-2xl text-center not-prose">
               <p className="text-sm font-bold text-sidqly-navy">
                  Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
