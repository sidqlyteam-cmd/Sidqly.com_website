import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: "Starter",
      desc: "For small mosques, small charities, and early pilot teams.",
      monthlyPrice: "19,000",
      annualPrice: "190,000",
      features: [
        "Core Donation Module",
        "Manual Payment Review",
        "Basic Reporting",
        "Up to 2 User Accounts",
        "Standard Support"
      ]
    },
    {
      name: "Growth",
      desc: "For active charities, Ramadan drives, Qurbani teams, and growing organizations.",
      monthlyPrice: "49,000",
      annualPrice: "490,000",
      popular: true,
      features: [
        "All Starter Features",
        "Zakat & Sadaqah Modules",
        "Proof Trust Engine",
        "Up to 5 User Accounts",
        "Priority Email Support"
      ]
    },
    {
      name: "Premium",
      desc: "For serious organizations that need stronger operations, reporting, and donor trust.",
      monthlyPrice: "99,000",
      annualPrice: "990,000",
      features: [
        "All Growth Features",
        "Qurbani & Ramadan Modules",
        "Vendor & Volunteer Portals",
        "Unlimited User Accounts",
        "Dedicated Account Manager"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the right Sidqly plan for your organization's giving operations."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Simple, Professional Pricing</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Sidqly is designed as a premium operating platform, not a basic donation form. Choose a plan that fits your current operational needs.
            </p>

            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-sidqly-green-deep text-white shadow-md' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'annual' ? 'bg-sidqly-green-deep text-white shadow-md' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
              >
                Annual <span className="text-[10px] ml-1 opacity-80">(Save 2 Months)</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 border ${plan.popular ? 'border-sidqly-green-emerald ring-2 ring-sidqly-green-soft/50' : 'border-gray-100'} relative flex flex-col shadow-sm`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sidqly-green-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-sm font-bold text-gray-400">PKR</span>
                  <span className="text-4xl font-extrabold text-sidqly-navy ml-1">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-sidqly-green-emerald flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? 'bg-sidqly-green-emerald text-white hover:bg-sidqly-green-deep shadow-lg hover:shadow-sidqly-green-emerald/20' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-gray-200'}`}>
                  Select {plan.name}
                </a>
              </div>
            ))}

            <div className="bg-sidqly-navy text-white rounded-3xl p-8 flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  For large charities, multi-city operations, corporate CSR/Zakat programs, and partner networks.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Whitelabel Options",
                    "Custom Workflows",
                    "Dedicated Server",
                    "On-site Training",
                    "SLA Support"
                  ].map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={18} className="text-sidqly-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl font-bold text-center bg-sidqly-gold text-sidqly-navy hover:bg-white transition-all">
                Contact for Quote
              </a>
            </div>
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-sidqly-navy mb-8">Payment Details</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For onboarding, subscription, or setup payments, please use the official Sidqly payment details below and email payment confirmation to the Sidqly team.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Payment Method</span>
                  <span className="text-lg font-bold text-sidqly-navy">{brand.payment.method}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">IBAN</span>
                  <span className="text-lg font-mono font-bold text-sidqly-navy">{brand.payment.iban}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-sidqly-ivory rounded-2xl border border-gray-100">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Confirmation Email</span>
                  <span className="text-lg font-bold text-sidqly-navy">{brand.payment.confirmationEmail}</span>
                </div>
              </div>

              <div className="mt-10 p-6 bg-sidqly-green-soft/20 rounded-2xl border border-sidqly-green-soft/30 text-sm text-gray-700 leading-relaxed">
                <p className="font-bold mb-2">Important Instructions:</p>
                <p>After payment, please email your payment screenshot, organization name, selected plan, and contact person details to <span className="font-bold">{brand.payment.confirmationEmail}</span>.</p>
                <p className="mt-2">Sidqly payments are manually reviewed. Your subscription or onboarding will be confirmed after payment verification.</p>
              </div>

              <p className="mt-8 text-xs text-gray-400 text-center">
                Pricing may vary based on organization size, active modules, number of users, implementation needs, and support requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
