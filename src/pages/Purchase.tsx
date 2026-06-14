import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Mail, CreditCard, Calendar, FileText } from 'lucide-react';

const Purchase: React.FC = () => {
  const steps = [
    { title: "Review plans", desc: "Visit our pricing page to choose the right scale for your organization." },
    { title: "Fill inquiry form", desc: "Provide details about your service lines, organization type, and operational goals." },
    { title: "Book demo", desc: "An optional but highly recommended step to see Sidqly's specialized modules in action." },
    { title: "Select plan", desc: "Confirm the right tier and rollout scope (e.g. pilot or full organization) with our team." },
    { title: "Confirm rollout scope", desc: "Finalize which modules and branches will be included in your initial setup." },
    { title: "Make payment", desc: "After your plan is confirmed, the Sidqly team will share the correct payment and onboarding instructions." },
    { title: "Email confirmation", desc: "Send your payment screenshot and organization details to team@sidqly.com." },
    { title: "Manual verification", desc: "The Sidqly team manually reviews and verifies your payment within 24 hours." },
    { title: "Onboarding begins", desc: "Access is granted and your professional onboarding and training journey starts." }
  ];

  return (
    <>
      <SEO title="How to Purchase Sidqly" description="Simple steps to purchase a Sidqly subscription and begin your professional onboarding process." canonical="/purchase" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">How to Purchase</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
               Sidqly uses a manual, professional onboarding process to ensure every organization is set up for long-term operational success.
            </p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 items-start relative group">
                     {i < steps.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-50 group-hover:bg-sidqly-green-soft transition-colors hidden md:block"></div>
                     )}
                     <div className="w-12 h-12 rounded-2xl bg-sidqly-green-deep text-white flex items-center justify-center font-bold flex-shrink-0 z-10 group-hover:scale-110 transition-transform">
                        {i + 1}
                     </div>
                     <div className="pt-1.5">
                        <h4 className="text-2xl font-bold text-sidqly-navy mb-2">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Payment Card */}
          <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] mb-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <CreditCard size={160} />
             </div>
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                   <div className="w-12 h-12 bg-sidqly-gold/20 rounded-2xl flex items-center justify-center text-sidqly-gold">
                      <CreditCard size={28} />
                   </div>
                   Official Payment Details
                </h2>
                <div className="grid md:grid-cols-2 gap-12 mb-10">
                   <div className="space-y-6">
                      <div className="flex flex-col border-b border-white/10 pb-6">
                         <span className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Payment Method</span>
                         <span className="text-lg font-bold leading-relaxed text-sidqly-green-soft">Payment details and onboarding instructions are shared after plan confirmation.</span>
                      </div>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-sidqly-green-emerald/20 rounded-full flex items-center justify-center text-sidqly-green-soft mb-6">
                         <Mail size={32} />
                      </div>
                      <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Confirmation Email</div>
                      <div className="text-xl font-bold text-sidqly-green-soft">{brand.payment.confirmationEmail}</div>
                      <p className="mt-4 text-xs text-gray-500 leading-relaxed italic">
                         Email your payment screenshot, organization name, and selected plan for manual verification.
                      </p>
                   </div>
                </div>
                <div className="p-6 bg-sidqly-green-soft/10 rounded-2xl border border-sidqly-green-soft/20">
                   <p className="text-sm text-sidqly-green-soft italic text-center">
                     "Sidqly payments are manually reviewed. Subscription, onboarding, or setup is confirmed only after our team verifies the funds."
                   </p>
                </div>
             </div>
          </div>

          {/* CTAs */}
          <div className="grid md:grid-cols-3 gap-6">
             <a href={brand.calendlyUrl} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-sidqly-green-soft transition-all group">
                <Calendar className="mx-auto mb-4 text-sidqly-green-deep group-hover:scale-110 transition-transform" />
                <span className="block font-bold text-sidqly-navy">Book Demo</span>
             </a>
             <a href={brand.inquiryFormUrl} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-sidqly-green-soft transition-all group">
                <FileText className="mx-auto mb-4 text-sidqly-green-deep group-hover:scale-110 transition-transform" />
                <span className="block font-bold text-sidqly-navy">Fill Inquiry Form</span>
             </a>
             <a href={`mailto:${brand.email}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-sidqly-green-soft transition-all group">
                <Mail className="mx-auto mb-4 text-sidqly-green-deep group-hover:scale-110 transition-transform" />
                <span className="block font-bold text-sidqly-navy">Email Sidqly</span>
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
