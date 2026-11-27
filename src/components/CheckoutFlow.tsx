import React, { useState, useMemo } from 'react';
import {
  CreditCard,
  CheckCircle2,
  Building2,
  Mail,
  User,
  Phone,
  Globe,
  Lock,
  AlertCircle,
  FileText,
  Sparkles,
} from 'lucide-react';
import {
  PADDLE_PLANS,
  PADDLE_MODULES,
  type BillingCycle,
  type PlanKey,
  type ModuleKey,
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
  const [selectedModules, setSelectedModules] = useState<ModuleKey[]>([]);
  const [extraOrgs, setExtraOrgs] = useState<number>(0);

  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMode, setPaymentMode] = useState<'paddle' | 'invoice'>('paddle');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'paddle_pending' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const plan = PADDLE_PLANS[selectedPlan];

  const subdomainSlug = useMemo(() => {
    const cleaned = orgName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return cleaned || 'yourorg';
  }, [orgName]);

  const totalAmount = useMemo(() => {
    const base = billingCycle === 'annual' ? plan.annualAmount : plan.monthlyAmount;
    const mods = selectedModules.reduce((acc, modKey) => {
      const m = PADDLE_MODULES.find((x) => x.key === modKey);
      if (!m) return acc;
      return acc + (billingCycle === 'annual' ? m.annualAmount : m.monthlyAmount);
    }, 0);
    const extraWorkspaceCost = extraOrgs * (billingCycle === 'annual' ? 190 : 19);
    return base + mods + extraWorkspaceCost;
  }, [plan, billingCycle, selectedModules, extraOrgs]);

  const toggleModule = (key: ModuleKey) => {
    setSelectedModules((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const dispatchOrderEmail = async (modeLabel: string) => {
    const modNames = selectedModules
      .map((k) => PADDLE_MODULES.find((m) => m.key === k)?.name)
      .filter(Boolean);

    const payload = {
      _subject: `Sidqly Subscription Order (${plan.name} - ${billingCycle}): ${orgName}`,
      _template: 'table',
      _captcha: 'false',
      'Order Type': modeLabel,
      'Organization Name': orgName,
      'Requested Subdomain': `https://${subdomainSlug}.sidqly.com`,
      'Contact Person': contactName,
      'Official Email': email,
      'Phone / WhatsApp': phone || 'Not provided',
      'Country': country || 'Not provided',
      'Selected Plan': `${plan.name} (${plan.staffLimit} staff, ${plan.workspaceLimit} orgs)`,
      'Billing Cycle': billingCycle === 'annual' ? 'Annual (2 months free)' : 'Monthly',
      'Add-on Modules': modNames.length > 0 ? modNames.join(', ') : 'None',
      'Extra Workspaces': extraOrgs > 0 ? `${extraOrgs} (+$${extraOrgs * 19}/mo)` : '0',
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

    // 1. If Paddle live client token is configured AND user chose Paddle checkout, open Paddle Checkout Overlay
    if (paymentMode === 'paddle' && paddleToken && paddleToken.startsWith('live_') && window.Paddle) {
      try {
        window.Paddle.Initialize({ token: paddleToken });
        const items: Array<{ priceId: string; quantity: number }> = [
          {
            priceId: billingCycle === 'annual' ? plan.annualPriceId : plan.monthlyPriceId,
            quantity: 1,
          },
        ];
        for (const modKey of selectedModules) {
          const mod = PADDLE_MODULES.find((m) => m.key === modKey);
          if (mod) {
            items.push({
              priceId: billingCycle === 'annual' ? mod.annualPriceId : mod.monthlyPriceId,
              quantity: 1,
            });
          }
        }

        trackEvent('pricing_cta_click', {
          cta_source: `paddle_checkout_${plan.key}_${billingCycle}`,
        });

        window.Paddle.Checkout.open({
          items,
          customer: email ? { email } : undefined,
          customData: {
            organizationName: orgName,
            subdomain: subdomainSlug,
            plan: plan.key,
            billingCycle,
            extraOrgs: String(extraOrgs),
          },
          settings: {
            displayMode: 'overlay',
            theme: 'light',
            successUrl: 'https://app.sidqly.com/?checkout=success',
          },
        });
        return;
      } catch {
        // Fall through to order dispatch if Paddle JS fails to open
      }
    }

    // 2. Submit order / invoice activation request directly to sidqly.team@gmail.com
    setStatus('submitting');
    try {
      await dispatchOrderEmail(
        paymentMode === 'paddle'
          ? 'Online Subscription Order (Send Paddle Payment Link)'
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
          {status === 'paddle_pending' ? 'Subscription Order Received!' : 'Invoice Request Received!'}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed text-sm">
          JazakAllah Khair, <strong>{contactName}</strong>. Your order for <strong>{orgName}</strong> (
          <span className="font-mono text-emerald-800 font-semibold">https://{subdomainSlug}.sidqly.com</span>) on the{' '}
          <strong>
            {plan.name} (${totalAmount}/{billingCycle === 'annual' ? 'yr' : 'mo'})
          </strong>{' '}
          plan has been logged. We are sending your direct payment link &amp; activation details to{' '}
          <strong>{email}</strong>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-bold text-sidqly-green-deep hover:underline cursor-pointer"
        >
          ← Modify plan or add another organization
        </button>
      </div>
    );
  }

  return (
    <div id="inquiry" className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-xl text-left ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            <Sparkles size={12} /> Subscribe &amp; Provision Workspace
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy">
            Complete Your Sidqly Subscription
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
        {/* 1. Plan Cards */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2.5">
            1. Selected Software Plan
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

        {/* 2. Add-ons & Extra Branches */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2.5">
            2. Optional Software Modules &amp; Extra Branches
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {PADDLE_MODULES.map((mod) => {
              const active = selectedModules.includes(mod.key);
              const price = billingCycle === 'annual' ? `+$${mod.annualAmount}/yr` : `+$${mod.monthlyAmount}/mo`;
              return (
                <button
                  key={mod.key}
                  type="button"
                  onClick={() => toggleModule(mod.key)}
                  className={`p-3.5 rounded-xl border text-left text-xs flex justify-between items-center transition-all cursor-pointer ${
                    active
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{mod.name}</span>
                  <span className="text-[11px] text-emerald-800 font-bold shrink-0 ml-2">{price}</span>
                </button>
              );
            })}

            <div className="p-3.5 rounded-xl border border-gray-200 text-xs flex justify-between items-center bg-slate-50/70">
              <div>
                <span className="font-semibold text-sidqly-navy block">Extra Branch Workspaces</span>
                <span className="text-[10px] text-gray-500">
                  +{billingCycle === 'annual' ? '$190/yr' : '$19/mo'} each
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExtraOrgs(Math.max(0, extraOrgs - 1))}
                  className="w-7 h-7 rounded-lg border border-gray-300 bg-white font-bold text-sidqly-navy cursor-pointer"
                >
                  -
                </button>
                <span className="w-4 text-center font-bold text-sidqly-navy">{extraOrgs}</span>
                <button
                  type="button"
                  onClick={() => setExtraOrgs(extraOrgs + 1)}
                  className="w-7 h-7 rounded-lg border border-gray-300 bg-white font-bold text-sidqly-navy cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Account & Workspace Details */}
        <div className="space-y-4 pt-2 border-t border-gray-100">
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider">
            3. Organization &amp; Account Details
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Organization / Mosque Name *</label>
              <div className="relative">
                <Building2 size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. Masjid Al-Noor"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                />
              </div>
              <div className="mt-1.5 text-[11px] text-gray-500">
                Subdomain: <span className="font-mono text-emerald-800 font-semibold">https://{subdomainSlug}.sidqly.com</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Admin Full Name *</label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Br. Ahmad / Sr. Fatima"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Official Email *</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@yourmosque.org"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Phone / WhatsApp</label>
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555 000 0000"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Country *</label>
              <div className="relative">
                <Globe size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="UK, USA, Canada..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Payment Method & Order Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Order Total</div>
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
                ? 'Preparing Your Order...'
                : paymentMode === 'paddle'
                ? `Subscribe & Pay $${totalAmount}/${billingCycle === 'annual' ? 'yr' : 'mo'}`
                : `Request Formal Invoice ($${totalAmount}/${billingCycle === 'annual' ? 'yr' : 'mo'})`}
            </span>
          </button>

          <p className="text-[11px] text-center text-gray-500">
            100% digital B2B SaaS subscription delivered at <span className="font-mono font-semibold">app.sidqly.com</span> · 14-day refund policy · Cancel anytime.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutFlow;
