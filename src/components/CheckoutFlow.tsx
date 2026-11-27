import React, { useState } from 'react';
import {
  CreditCard,
  CheckCircle2,
  Mail,
  Lock,
  AlertCircle,
  FileText,
  Sparkles,
  Check,
} from 'lucide-react';
import {
  PADDLE_PLANS,
  type BillingCycle,
  type PlanKey,
} from '../data/paddleCatalog';
import { trackEvent } from '../lib/analytics';

declare global {
  interface Window {
    Paddle?: {
      Initialize: (opts: { token: string }) => void;
      Checkout: {
        open: (opts: {
          items: Array<{ priceId: string; quantity: number }>;
          customer?: { email?: string };
          customData?: Record<string, string>;
          settings?: { displayMode?: string; theme?: string; successUrl?: string };
        }) => void;
      };
    };
  }
}

interface CheckoutFlowProps {
  initialPlan?: string;
  initialBilling?: BillingCycle;
  className?: string;
}

const normalizePlanKey = (raw?: string): PlanKey => {
  const lower = (raw || '').toLowerCase();
  if (lower.includes('growth')) return 'growth';
  if (lower.includes('premium')) return 'premium';
  return 'starter';
};

export const CheckoutFlow: React.FC<CheckoutFlowProps> = ({
  initialPlan = 'starter',
  initialBilling = 'monthly',
  className = '',
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(normalizePlanKey(initialPlan));
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialBilling);
  const [email, setEmail] = useState('');
  const [paymentMode, setPaymentMode] = useState<'paddle' | 'invoice'>('paddle');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'paddle_pending' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const plan = PADDLE_PLANS[selectedPlan];
  const totalAmount = billingCycle === 'annual' ? plan.annualAmount : plan.monthlyAmount;

  const dispatchOrderEmail = async (modeLabel: string) => {
    const payload = {
      _subject: `Sidqly Subscription (${plan.name} - ${billingCycle}): ${email}`,
      _template: 'table',
      _captcha: 'false',
      'Order Type': modeLabel,
      'Customer Email': email,
      'Selected Plan': `${plan.name} (${plan.staffLimit} staff, ${plan.workspaceLimit} orgs)`,
      'Billing Cycle': billingCycle === 'annual' ? 'Annual (2 months free)' : 'Monthly',
      'Total Due': `$${totalAmount}/${billingCycle === 'annual' ? 'yr' : 'mo'}`,
    };

    const res = await fetch('https://formsubmit.co/ajax/sidqly.team@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Submission failed');
    }
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const paddleToken = import.meta.env.VITE_PADDLE_CLIENT_TOKEN as string | undefined;

    if (paymentMode === 'paddle' && paddleToken && paddleToken.startsWith('live_') && window.Paddle) {
      try {
        window.Paddle.Initialize({ token: paddleToken });
        trackEvent('pricing_cta_click', {
          cta_source: `paddle_checkout_${plan.key}_${billingCycle}`,
        });

        window.Paddle.Checkout.open({
          items: [
            {
              priceId: billingCycle === 'annual' ? plan.annualPriceId : plan.monthlyPriceId,
              quantity: 1,
            },
          ],
          customer: email ? { email } : undefined,
          customData: {
            plan: plan.key,
            billingCycle,
          },
          settings: {
            displayMode: 'overlay',
            theme: 'light',
            successUrl: 'https://app.sidqly.com/?checkout=success',
          },
        });
        return;
      } catch {
        // Fall through if Paddle JS is not yet enabled
      }
    }

    setStatus('submitting');
    try {
      await dispatchOrderEmail(
        paymentMode === 'paddle'
          ? 'Online Subscription (Send Paddle Payment Link)'
          : 'Formal Bank Transfer Invoice Request'
      );
      trackEvent('inquiry_form_submit', {
        plan: plan.name,
        billing: billingCycle,
        payment_mode: paymentMode,
      });
      setStatus(paymentMode === 'paddle' ? 'paddle_pending' : 'success');
    } catch {
      setStatus('error');
      setErrorMsg('Could not submit your order automatically. Please email sidqly.team@gmail.com.');
    }
  };

  if (status === 'success' || status === 'paddle_pending') {
    return (
      <div id="inquiry" className={`bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-3">
          {status === 'paddle_pending' ? 'Subscription Link On Its Way!' : 'Invoice Request Received!'}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed text-sm">
          JazakAllah Khair! Your <strong>{plan.name} (${totalAmount}/{billingCycle === 'annual' ? 'yr' : 'mo'})</strong> subscription request has been received. We are sending your direct payment &amp; onboarding link for <strong>app.sidqly.com</strong> to <strong>{email}</strong>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-bold text-sidqly-green-deep hover:underline cursor-pointer"
        >
          ← Change plan or email
        </button>
      </div>
    );
  }

  return (
    <div id="inquiry" className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-xl text-left ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            <Sparkles size={12} /> Fast Checkout
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy">
            Subscribe to {plan.name}
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="bg-slate-100 p-1 rounded-xl inline-flex items-center text-xs font-bold">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
              billingCycle === 'monthly' ? 'bg-white text-sidqly-navy shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
              billingCycle === 'annual' ? 'bg-sidqly-green-deep text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Annual (2 mos free)
          </button>
        </div>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800 text-xs">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleCheckoutSubmit} className="space-y-6">
        {/* 1. Base Plan Selection */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2.5">
            1. Choose Your Base Plan
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {(['starter', 'growth', 'premium'] as PlanKey[]).map((key) => {
              const p = PADDLE_PLANS[key];
              const price = billingCycle === 'annual' ? `$${p.annualAmount}/yr` : `$${p.monthlyAmount}/mo`;
              const active = selectedPlan === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedPlan(key)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sidqly-navy text-sm">{p.name}</span>
                    <span className="text-xs font-extrabold text-emerald-800">{price}</span>
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {p.staffLimit} staff · {p.workspaceLimit} {p.workspaceLimit === 1 ? 'org' : 'orgs'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Email Only */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
            2. Your Account Email *
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@yourmosque.org"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
            />
          </div>
          <p className="mt-1.5 text-[11px] text-gray-500">
            You&apos;ll configure your organization details, subdomain, and optional add-ons inside <strong>app.sidqly.com</strong> right after subscribing.
          </p>
        </div>

        {/* 3. Summary & Subscribe Button */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {plan.name} Plan ({billingCycle === 'annual' ? 'Annual' : 'Monthly'})
              </div>
              <div className="text-2xl font-extrabold text-sidqly-navy">
                ${totalAmount}
                <span className="text-sm font-bold text-gray-500">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPaymentMode('paddle')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 cursor-pointer transition-all ${
                  paymentMode === 'paddle'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white text-sidqly-navy border-gray-200'
                }`}
              >
                <CreditCard size={14} /> Card / Paddle
              </button>
              <button
                type="button"
                onClick={() => setPaymentMode('invoice')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 cursor-pointer transition-all ${
                  paymentMode === 'invoice'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white text-sidqly-navy border-gray-200'
                }`}
              >
                <FileText size={14} /> Bank Invoice
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-sidqly-green-deep hover:bg-sidqly-green-emerald text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-60"
          >
            <Lock size={16} />
            <span>
              {status === 'submitting'
                ? 'Preparing Checkout...'
                : paymentMode === 'paddle'
                ? `Subscribe & Pay $${totalAmount}/${billingCycle === 'annual' ? 'yr' : 'mo'}`
                : `Request Formal Invoice ($${totalAmount}/${billingCycle === 'annual' ? 'yr' : 'mo'})`}
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-gray-500 pt-1">
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-emerald-600" /> Instant app.sidqly.com setup after payment</span>
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-emerald-600" /> Add modules &amp; extra branches inside the app</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutFlow;
