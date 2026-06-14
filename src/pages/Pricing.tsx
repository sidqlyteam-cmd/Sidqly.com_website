import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { pricing } from '../data/pricing';
import { Check, Info, XCircle, Plus, Layout, PieChart, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activePlans = pricing.plans;
  const pricingFaqs = faqs.filter(f => f.category === "Pricing & Purchase");

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <>
      <SEO
        title="Pricing & Plans"
        description="Choose the right Sidqly plan for your organization. Professional tools for mosques, charities, and Zakat teams."
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">Professional operations, priced for your scale.</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
               Invest in your organization's trust, dignity, and operational clarity. Small teams can start affordably, while scaling teams get complete control.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="flex justify-center mb-4">
               <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm flex items-center relative overflow-hidden">
                  <div className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-sidqly-green-deep rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`}></div>
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500 hover:text-sidqly-navy'}`}
                  >
                    Monthly billing
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors ${isAnnual ? 'text-white' : 'text-gray-500 hover:text-sidqly-navy'}`}
                  >
                    Annual billing
                  </button>
               </div>
            </div>
            {isAnnual && <p className="text-sm font-bold text-sidqly-green-emerald transition-opacity duration-300">Annual plans help organizations plan ahead and reduce monthly admin decisions.</p>}
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            {activePlans.map((plan) => {
              const priceData = isAnnual ? plan.annual : plan.monthly;
              const isCustom = priceData.launch === "Custom";

              return (
                <div key={plan.name} className={`bg-white rounded-[32px] p-8 shadow-sm border transition-all hover:shadow-xl flex flex-col ${plan.popular ? 'border-sidqly-green-emerald ring-4 ring-sidqly-green-soft/20 relative scale-105 z-10' : 'border-gray-100'}`}>
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap shadow-sm ${plan.popular ? 'bg-sidqly-green-emerald text-white' : 'bg-sidqly-ivory text-sidqly-green-deep border border-gray-100'}`}>
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-8 leading-relaxed min-h-[48px]">{plan.description}</p>

                  <div className="mb-8">
                    {!isCustom ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <span className="text-gray-400 font-medium line-through text-lg">{priceData.standard}</span>
                           <span className="text-xs font-bold text-sidqly-gold uppercase tracking-wider">Standard</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-sidqly-navy tracking-tight">{priceData.launch}</span>
                          <span className="text-gray-400 font-bold text-sm">/{isAnnual ? 'year' : 'mo'}</span>
                        </div>
                        {isAnnual && ('savings' in priceData) && priceData.savings && (
                           <div className="text-sidqly-green-emerald text-xs font-bold mt-2 bg-sidqly-green-soft/20 inline-block px-2 py-1 rounded">
                             {plan.savingsCopy}: Save {priceData.savings as string}/year
                           </div>
                        )}
                        {!isAnnual && plan.name !== "Starter" && (
                           <div className="h-6"></div> /* Spacer to match annual badge height roughly */
                        )}
                        {!isAnnual && plan.name === "Starter" && (
                           <div className="h-6"></div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1 py-4">
                        <span className="text-3xl font-extrabold text-sidqly-navy tracking-tight">Custom</span>
                      </div>
                    )}
                  </div>

                  <Link
                    to={plan.href}
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all text-sm mb-8 ${plan.popular ? 'bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald shadow-lg' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4 mb-8 flex-grow border-t border-gray-50 pt-8">
                    <h4 className="text-xs font-bold text-sidqly-navy uppercase tracking-widest mb-4">Includes:</h4>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs font-medium text-gray-600">
                        <Check size={16} className="text-sidqly-green-emerald mt-0.5 flex-shrink-0" /> <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mb-24">
             <div className="bg-white/50 backdrop-blur border border-gray-200 py-3 px-6 rounded-full inline-flex items-center gap-3 text-sm text-gray-500 font-medium max-w-3xl text-center shadow-sm">
                <Info size={16} className="text-sidqly-green-deep flex-shrink-0" />
                {pricing.disclaimer}
             </div>
          </div>
        </div>
      </section>

      {/* Value Money Section */}
      <section className="py-24 bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-6">Why even the Starter plan gives strong value.</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                     Sidqly can help organizations look more organized and donor-ready from the very first campaign.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Helps move teams away from scattered messages and spreadsheets.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Gives a cleaner, more professional workflow.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Improves donor confidence with clear receipts.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Keeps proof review organized and safe.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Supports dignity-safe updates automatically.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Helps leadership see clearer records immediately.</span></li>
                     <li className="flex gap-3 items-start"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /> <span>Creates a professional first impression before scaling further.</span></li>
                  </ul>
               </div>
               <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                     <PieChart size={200} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-8">What Sidqly can replace</h3>
                     <p className="text-sidqly-green-soft mb-8 leading-relaxed italic">
                        Sidqly is not just another donation form. It is designed to organize the full giving workflow from intention to payment review, delivery, proof approval, donor-safe update, and reporting.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                           "WhatsApp coordination", "Excel/Google Sheets", "Google Forms intake",
                           "Manual payment screenshots", "Manual proof chasing", "Paper folders",
                           "Manual receipt creation", "Scattered donor updates", "Vendor follow-up messages",
                           "Volunteer confusion", "Manual report preparation"
                        ].map((item, i) => (
                           <div key={i} className="flex gap-2 items-center text-sm text-gray-300">
                              <XCircle size={14} className="text-red-400 opacity-50" /> {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Add-ons & Ideal For */}
      <section className="py-24 bg-sidqly-ivory">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Who should choose each plan?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
               {activePlans.map(plan => (
                  <div key={plan.name} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                     <h4 className="font-bold text-sidqly-navy mb-4 border-b border-gray-50 pb-2">{plan.name}</h4>
                     <ul className="space-y-3">
                        {plan.idealFor.map((ideal, i) => (
                           <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-sidqly-green-emerald"></div> {ideal}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm text-center max-w-4xl mx-auto">
               <h3 className="text-2xl font-bold text-sidqly-navy mb-4">Optional Add-ons</h3>
               <p className="text-gray-500 mb-8">Available after review during your onboarding process.</p>
               <div className="flex flex-wrap justify-center gap-3">
                  {pricing.addons.map((addon, i) => (
                     <div key={i} className="px-4 py-2 bg-sidqly-ivory border border-gray-100 rounded-lg text-sm text-sidqly-navy font-medium flex items-center gap-2">
                        <Plus size={14} className="text-sidqly-green-emerald" /> {addon}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Pricing FAQs</h2>
            <p className="text-gray-600">Answers to common questions about Sidqly pricing and billing.</p>
          </div>
          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <div key={index} className="bg-sidqly-ivory rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-sidqly-navy pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-sidqly-green-emerald flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Process CTA */}
      <section className="py-24 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to upgrade your operations?</h2>
           <p className="text-lg text-sidqly-green-soft mb-12 leading-relaxed">
              Review our plans, fill the inquiry form, and our team will guide you through the manual review and onboarding process to ensure Sidqly is the perfect fit.
           </p>
           <div className="grid md:grid-cols-3 gap-6">
              <Link to="/purchase" className="bg-sidqly-green-emerald p-6 rounded-2xl font-bold hover:bg-white hover:text-sidqly-navy transition-all flex flex-col items-center gap-3">
                 <Layout size={24} /> <span>How to Purchase</span>
              </Link>
              <a href={brand.calendlyUrl} className="bg-white/10 border border-white/20 p-6 rounded-2xl font-bold hover:bg-white/20 transition-all flex flex-col items-center gap-3">
                 <Calendar size={24} /> <span>Book Demo</span>
              </a>
              <a href={brand.inquiryFormUrl} className="bg-white/10 border border-white/20 p-6 rounded-2xl font-bold hover:bg-white/20 transition-all flex flex-col items-center gap-3">
                 <FileText size={24} /> <span>Fill Inquiry Form</span>
              </a>
           </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
