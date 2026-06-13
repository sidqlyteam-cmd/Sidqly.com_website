import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { pricing } from '../data/pricing';
import { Check, Info, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const activePlans = currency === 'USD' ? pricing.international : pricing.local;

  return (
    <>
      <SEO
        title="International Pricing & Plans"
        description="Choose the right Sidqly plan for your organization. Professional tools for mosques, charities, and Zakat teams with global USD and PKR pricing."
        canonical="/pricing"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
               Invest in your organization's trust, dignity, and operational clarity with a plan tailored to your scale.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex justify-center mb-16">
             <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex gap-1">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${currency === 'USD' ? 'bg-sidqly-green-deep text-white shadow-lg' : 'text-gray-400 hover:text-sidqly-navy'}`}
                >
                  Global (USD)
                </button>
                <button
                  onClick={() => setCurrency('PKR')}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${currency === 'PKR' ? 'bg-sidqly-green-deep text-white shadow-lg' : 'text-gray-400 hover:text-sidqly-navy'}`}
                >
                  Pakistan (PKR)
                </button>
             </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {activePlans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-[40px] p-10 shadow-sm border transition-all hover:shadow-xl ${plan.popular ? 'border-sidqly-green-emerald ring-4 ring-sidqly-green-soft/20 relative' : 'border-gray-100'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sidqly-green-emerald text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed min-h-[40px]">{plan.description}</p>
                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-sidqly-navy tracking-tight">{plan.monthly}</span>
                    <span className="text-gray-400 font-bold">/mo</span>
                  </div>
                  <div className="text-sidqly-green-emerald text-sm font-bold mt-2">
                    or {plan.annual} / year
                  </div>
                </div>
                <div className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <Check size={18} className="text-sidqly-green-emerald mt-0.5 flex-shrink-0" /> {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={plan.name === 'Premium' ? brand.calendlyUrl : brand.inquiryFormUrl}
                  className={`block w-full text-center py-5 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald shadow-lg' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Globe size={200} />
             </div>
             <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                   <h3 className="text-3xl font-bold text-sidqly-navy mb-6">Enterprise & Global Scale</h3>
                   <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      For international organizations requiring multi-country management, custom modules, or deep integration with existing systems.
                   </p>
                   <a href={brand.calendlyUrl} className="inline-flex items-center gap-2 text-sidqly-green-emerald text-xl font-bold hover:gap-4 transition-all">
                      Contact for custom quote <ArrowRight size={24} />
                   </a>
                </div>
                <div className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100">
                   <div className="flex items-start gap-4 mb-6">
                      <Info className="text-sidqly-green-deep mt-1 flex-shrink-0" size={24} />
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {pricing.disclaimer}
                      </p>
                   </div>
                   <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                      Professional Operations • International Standard
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-12">Start your journey today</h2>
           <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Move away from messy spreadsheets and disorganized communication. Choose the Sidqly plan that matches your mission.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/purchase" className="bg-sidqly-green-deep text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all">How to Purchase</Link>
              <Link to="/start-pilot" className="bg-white border border-gray-200 text-sidqly-navy px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all">Start a Pilot</Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
