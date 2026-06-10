import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for mosques and small Zakat committees.',
      monthlyPrice: '19,000',
      annualPrice: '190,000',
      features: [
        'Zakat & Sadaqah Management',
        'Manual Payment Review',
        'Basic Proof Collection',
        'Email Support',
        'Standard Reporting'
      ]
    },
    {
      name: 'Growth',
      description: 'Perfect for established charities and providers.',
      monthlyPrice: '49,000',
      annualPrice: '490,000',
      features: [
        'Everything in Starter',
        'Qurbani & Ramadan Modules',
        'Vendor Management',
        'Volunteer Portal',
        'Priority Support',
        'Advanced Analytics'
      ],
      popular: true
    },
    {
      name: 'Premium',
      description: 'For organizations with complex operations.',
      monthlyPrice: '99,000',
      annualPrice: '990,000',
      features: [
        'Everything in Growth',
        'Corporate CSR/Zakat Reports',
        'Multiple Branch Support',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Audit-Ready Export'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom setups for very large networks.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        'Custom Module Development',
        'Unlimited Operations',
        'White-label Experience',
        'On-site Training',
        'SLA Support'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the right Sidqly plan for your organization. From Starter to Enterprise, we support your giving with verified workflows."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Simple, Transparent Pricing</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Sidqly is built to support organizations of all sizes. Choose the plan that fits your current needs and scale when you're ready.
            </p>

            <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${billingPeriod === 'monthly' ? 'bg-sidqly-green-deep text-white shadow-md' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${billingPeriod === 'annual' ? 'bg-sidqly-green-deep text-white shadow-md' : 'text-gray-500 hover:text-sidqly-green-deep'}`}
              >
                Annual <span className="text-xs font-normal text-sidqly-gold ml-1">(2 Months Free)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white rounded-3xl border ${plan.popular ? 'border-sidqly-green-emerald shadow-xl ring-4 ring-sidqly-green-emerald/5' : 'border-gray-100 shadow-sm'} p-8 relative flex flex-col`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sidqly-green-emerald text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-4xl font-extrabold text-sidqly-navy">
                    {plan.monthlyPrice === 'Custom' ? 'Custom' : (
                      <span className="flex items-baseline">
                        <span className="text-sm font-bold text-gray-400 mr-1">PKR</span>
                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        <span className="text-sm font-medium text-gray-400 ml-1">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                      </span>
                    )}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="text-sidqly-green-emerald mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                  className={`w-full text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald shadow-lg' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-sidqly-green-soft shadow-sm'}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Payment Details */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Payment and Verification</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-sidqly-green-soft/30 rounded-lg flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                      <Info size={20} />
                    </div>
                    <p className="text-gray-600 text-sm">
                      <span className="font-bold block text-sidqly-navy mb-1">Manual Review Process</span>
                      Sidqly payments are manually reviewed. Subscription or onboarding is confirmed after verification.
                    </p>
                  </div>

                  <div className="bg-sidqly-ivory p-6 rounded-2xl border border-sidqly-green-soft">
                    <p className="text-xs text-sidqly-green-deep font-bold uppercase tracking-widest mb-3">Official Payment Method</p>
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-sidqly-navy">Easypaisa Pakistan</p>
                      <p className="text-sm font-mono text-sidqly-green-deep bg-white p-3 rounded-lg border border-gray-100 select-all">PK19TMFB0000000060685814</p>
                      <p className="text-xs text-gray-500">Send confirmation to: <span className="font-bold">team@sidqly.com</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-sidqly-navy text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Start with a Pilot</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Not sure which plan is right? We recommend starting with a pilot for a single campaign or workflow. See the value of Sidqly before committing to a full setup.
                </p>
                <a
                  href="mailto:team@sidqly.com?subject=Sidqly Pilot Inquiry"
                  className="inline-block bg-sidqly-gold text-sidqly-navy px-8 py-3 rounded-xl font-bold hover:bg-white transition-all"
                >
                  Discuss a Pilot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
