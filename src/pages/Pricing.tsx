import React, { useState } from 'react';
import SEO from '../components/SEO';
import { pricing } from '../data/pricing';
import { Check, Info, XCircle, Plus, Layout, PieChart, CheckCircle2, FileText, Globe, Heart, BookOpen, ShieldCheck, Users, Building2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { generateSoftwareAppSchema, generateBreadcrumbSchema, generateFAQSchema } from '../lib/schema';
import { seoData } from '../data/seo';
import { trackEvent } from '../lib/analytics';

const customPricingFaqs = [
  { question: "How does purchasing and entering app.sidqly.com work?", answer: "Sidqly uses a subscribe-first workflow. Choose your plan on sidqly.com, verify your email, and complete subscription checkout via Paddle (or formal bank invoice). Once our backend verifies the signed payment notification, your organization workspace and allowances activate automatically and you can open app.sidqly.com." },
  { question: "Do you limit how many donors or community members we have?", answer: "Never. Donor records and donation entries stay unlimited on every plan. Pricing depends only on what your team uses inside Sidqly: features, named staff accounts (3 / 10 / 30), organization workspaces (1 / 3 / 10), and published storage, email, and AI allowances." },
  { question: "How does adding a new branch or a second organization work?", answer: "Each branch or separate entity gets its own isolated workspace with its own subdomain (e.g. branch2.sidqly.com), separate bank/payout settings, separate accounting ledger, and separate staff roles. You can include up to 3 workspaces on Growth, up to 10 on Premium, or add an Extra Workspace (+$19/mo) at any time—all managed from one Master Admin Org Switcher." },
  { question: "Who counts toward the staff account limit (3 / 10 / 30)?", answer: "Any named account granted staff or administrator permissions counts toward your plan's seat allowance, regardless of whether their title is staff or volunteer. Donors, families, and students do not count as staff seats." },
  { question: "Can we subscribe to Matrimonial, Hifz Academy, or Janazah separately?", answer: "Yes! Any organization on Sidqly can add modular subscriptions—Matrimonial ($29/mo), Hifz Quran Academy ($39/mo), or Janazah Fund ($19/mo)—to any workspace. Community members use one login while committees keep separate accounting ledgers." },
  { question: "What happens if we need more AI proof images, emails, or storage?", answer: "Each plan includes generous monthly allowances (published before checkout). If your team exceeds them during peak seasons like Ramadan or Qurbani, you can add prepaid usage packs without migrating plans." },
  { question: "What is your refund and cancellation policy?", answer: "You can cancel anytime before your next renewal and keep access through the end of your paid period. New Paddle subscriptions are eligible for a full refund within 14 days under our Refund & Cancellation Policy." }
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activePlans = pricing.plans;

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateSoftwareAppSchema(),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Pricing", item: "/pricing" }
      ]),
      generateFAQSchema(customPricingFaqs)
    ]
  };

  return (
    <>
      <SEO
        title="Sidqly Pricing | Software for Islamic Charities"
        description="View launch pricing for Sidqly's modular Islamic charity software. Find the right plan for Zakat, Qurbani, and verified giving operations."
        {...seoData.pricing}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight">Professional operations, priced for your scale.</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
               Invest in your organization's trust, dignity, and operational clarity. Small teams can start affordably, while scaling teams get complete control.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 rounded-2xl px-5 py-3 max-w-2xl mx-auto mb-10 font-medium shadow-xs">
              <strong className="text-sidqly-navy">100% Digital B2B SaaS Subscriptions:</strong> Plans grant cloud software access on <span className="font-mono text-emerald-800 font-semibold">app.sidqly.com</span>. Sidqly never collects, holds, or processes charitable donations.
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

          {/* Subscribe First Purchase Banner */}
          <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-r from-emerald-50 via-teal-50 to-white text-slate-900 rounded-[32px] p-8 md:p-12 border border-emerald-200/80 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
             <div className="text-left flex-1">
                <span className="inline-block bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Subscribe First · Instant Provisioning</span>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Subscribe on sidqly.com, then open your dashboard</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                   Select your plan, verify your email, and complete checkout via Paddle (or formal bank invoice). Once payment is verified by our backend, your organization workspace and allowances activate on <span className="font-mono font-semibold text-emerald-800">app.sidqly.com</span>—with no separate setup deposit.
                </p>
             </div>
             <div className="shrink-0">
                <Link to="/purchase#inquiry" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all text-sm inline-block shadow-md">
                   Start Subscription Setup
                </Link>
             </div>
          </div>

          {/* Subdomain Feature Callout */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-left">
             <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Globe size={24} />
             </div>
             <div className="flex-1">
                <h4 className="font-bold text-sidqly-navy text-base">Every organization gets its own dedicated subdomain</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                   Instantly launch on <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">https://yourmosque.sidqly.com</span> with free automated SSL, isolated donor tax receipts, and direct bank payouts. Growth & Premium also support your custom domain (e.g. <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">donate.yourcharity.org</span>).
                </p>
             </div>
          </div>

          {/* Pricing Cards */}
          <div className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-sidqly-navy text-center">What plan is best for whom?</h2>
  <div className="grid md:grid-cols-2 gap-4 mb-12">
    {activePlans.map(p => (
      <div key={p.name} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-left">
        <h4 className="font-bold text-sidqly-navy mb-2">{p.name}</h4>
        <p className="text-sm text-gray-600">{p.idealFor.join(', ')}</p>
      </div>
    ))}
  </div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mb-16 pt-4 items-stretch">
            {activePlans.map((plan) => {
              const priceData = isAnnual ? plan.annual : plan.monthly;
              const isCustom = priceData.launch === "Custom";
              const shortStaff = plan.name === 'Starter' ? '3 Staff' : plan.name === 'Growth' ? '10 Staff' : plan.name === 'Premium' ? '30 Staff' : 'Custom';
              const shortWorkspaces = plan.name === 'Starter' ? '1 Workspace' : plan.name === 'Growth' ? 'Up to 3 Orgs' : plan.name === 'Premium' ? 'Up to 10 Orgs' : 'Unlimited';

              return (
                <div key={plan.name} className={`relative bg-white rounded-[32px] p-7 pt-10 shadow-sm border transition-all hover:shadow-xl flex flex-col ${plan.popular ? 'border-sidqly-green-emerald ring-2 ring-sidqly-green-soft/30 shadow-lg z-10' : 'border-gray-100'}`}>
                  {plan.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] whitespace-nowrap shadow-sm ${plan.popular ? 'bg-sidqly-green-emerald text-white' : 'bg-sidqly-ivory text-sidqly-green-deep border border-gray-200'}`}>
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-6 leading-relaxed min-h-[48px]">{plan.description}</p>

                  <div className="mb-8">
                    {!isCustom ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <span className="text-gray-400 font-medium line-through text-lg">{priceData.standard}</span>
                           <span className="text-xs font-bold text-sidqly-gold uppercase tracking-wider">Standard</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl md:text-4xl font-extrabold text-sidqly-navy tracking-tight">{priceData.launch}</span>
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
                    onClick={() => trackEvent('pricing_cta_click', { cta_source: `pricing_card_${plan.name.toLowerCase()}` })}
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all text-sm mb-6 ${plan.popular ? 'bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald shadow-lg' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between gap-3 font-bold text-sidqly-navy">
                      <span className="flex items-center gap-1.5 text-slate-600 font-semibold shrink-0"><Users size={13} className="text-sidqly-green-emerald" /> Staff</span>
                      <span className="text-right">{shortStaff}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 font-bold text-sidqly-navy">
                      <span className="flex items-center gap-1.5 text-slate-600 font-semibold shrink-0"><Building2 size={13} className="text-sidqly-green-emerald" /> Orgs</span>
                      <span className="text-right">{shortWorkspaces}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 font-bold text-sidqly-navy">
                      <span className="flex items-center gap-1.5 text-slate-600 font-semibold shrink-0"><Database size={13} className="text-sidqly-green-emerald" /> Donors</span>
                      <span className="text-emerald-700 text-right">Unlimited</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium leading-relaxed">
                      {plan.allowanceSummary}
                    </div>
                  </div>

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
               <div className="bg-slate-50 text-slate-900 border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                     <PieChart size={200} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-8">What Sidqly can replace</h3>
                     <p className="text-emerald-700 mb-8 leading-relaxed font-medium">
                        Sidqly is not just another donation form. It is designed to organize the full giving workflow from intention to payment review, delivery, proof approval, donor-safe update, and reporting.
                     </p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           "WhatsApp coordination", "Excel/Google Sheets", "Google Forms intake",
                           "Manual payment screenshots", "Manual proof chasing", "Paper folders",
                           "Manual receipt creation", "Scattered donor updates", "Vendor follow-up messages",
                           "Volunteer confusion", "Manual report preparation"
                        ].map((item, i) => (
                           <div key={i} className="flex gap-2 items-center text-sm text-slate-600">
                              <XCircle size={14} className="text-red-500 opacity-80" /> {item}
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

            {/* Modular Community Apps Section */}
            <div className="mb-24">
               <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="inline-block bg-sidqly-green-soft/30 text-sidqly-green-deep text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                     Modular App Ecosystem
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-sidqly-navy mb-4">
                     Specialized modules for your community needs
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     Need a Matrimonial service, a Hifz Quran Academy, or a Janazah funeral fund? Add them to any base plan as modular subscriptions. They connect directly to your master admin dashboard with unified community logins.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-6">
                  {pricing.modules.map((mod, i) => {
                     const Icon = mod.name.includes('Matrimonial') ? Heart : mod.name.includes('Hifz') ? BookOpen : ShieldCheck;
                     const iconColor = mod.name.includes('Matrimonial') ? 'text-rose-500 bg-rose-50' : mod.name.includes('Hifz') ? 'text-emerald-700 bg-emerald-50' : 'text-teal-700 bg-teal-50';

                     return (
                        <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-lg transition-all">
                           <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-2">
                                 <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconColor}`}>
                                    <Icon size={18} />
                                 </div>
                                 <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {mod.badge}
                                 </span>
                              </div>
                              <div className="text-right">
                                 <span className="text-2xl font-extrabold text-sidqly-navy">{mod.price}</span>
                                 <span className="text-xs text-gray-400 block">or {mod.annualPrice}</span>
                              </div>
                           </div>
                           <h4 className="text-lg font-bold text-sidqly-navy mb-2">{mod.name}</h4>
                           <p className="text-gray-500 text-xs mb-6 leading-relaxed flex-grow">{mod.description}</p>

                           <div className="space-y-2.5 border-t border-gray-50 pt-6">
                              {mod.features.map((feat, fIdx) => (
                                 <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-600">
                                    <Check size={14} className="text-sidqly-green-emerald mt-0.5 shrink-0" />
                                    <span>{feat}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm text-center max-w-4xl mx-auto mb-16">
               <h3 className="text-2xl font-bold text-sidqly-navy mb-4">Optional Add-ons</h3>
               <p className="text-gray-500 mb-8">Attach extra branches, specialized modules, or usage packs to any base plan.</p>
               <div className="flex flex-wrap justify-center gap-3">
                  {pricing.addons.map((addon, i) => (
                     <div key={i} className="px-4 py-2 bg-sidqly-ivory border border-gray-100 rounded-lg text-sm text-sidqly-navy font-medium flex items-center gap-2">
                        <Plus size={14} className="text-sidqly-green-emerald" /> {addon}
                     </div>
                  ))}
               </div>
            </div>

            {/* How New Branches & Multiple Organizations Work */}
            <div className="bg-white p-8 md:p-14 rounded-[40px] border border-emerald-100 shadow-sm max-w-6xl mx-auto">
               <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                     Multi-Branch & Multi-Org Architecture
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-3">
                     How adding a new branch or different organization works
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                     Whether you run one mosque with a school wing or a foundation managing multiple regional charities, Sidqly separates each entity cleanly while keeping your admin login unified.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100">
                     <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                        <Building2 size={20} />
                     </div>
                     <h4 className="font-bold text-sidqly-navy mb-2">1. Isolated Workspaces Per Org</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">
                        Every new branch or organization gets its own dedicated workspace: separate subdomain (<span className="font-mono text-emerald-800">branch2.sidqly.com</span>), separate bank/payout settings, separate Zakat/Sadaqah ledgers, and separate donor receipts. Add extra workspaces for <strong>+$19/mo</strong> each, or choose <strong>Growth (3 orgs)</strong> / <strong>Premium (10 orgs)</strong>.
                     </p>
                  </div>

                  <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100">
                     <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                        <Users size={20} />
                     </div>
                     <h4 className="font-bold text-sidqly-navy mb-2">2. Fair Seat & Usage Allowances</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">
                        Donor records and donation entries are always <strong>unlimited</strong>—even a large mosque can start on Starter if it only needs basic features. Plans enforce named staff seats (<strong>3 / 10 / 30</strong>) across admin/staff permissions and meter storage, emails, and AI proof credits with optional prepaid top-ups.
                     </p>
                  </div>

                  <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100">
                     <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                        <Globe size={20} />
                     </div>
                     <h4 className="font-bold text-sidqly-navy mb-2">3. One Master Admin Switcher</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">
                        Log in once to <span className="font-mono text-emerald-800">app.sidqly.com</span> and switch between your mosque, Matrimonial portal, Hifz Academy, Janazah fund, or regional branches from one dashboard—without exposing data across teams that shouldn't see it.
                     </p>
                  </div>
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
            {customPricingFaqs.map((faq, index) => (
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

      {/* Post Purchase Process & Internal Links */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-sidqly-navy">What happens after choosing a plan?</h2>
          <p className="text-gray-600 mb-12">You will meet with our team to map out your modules and workflows. Payment and onboarding instructions are shared after plan confirmation.</p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
             <Link to="/modules" className="text-sidqly-green-deep font-bold underline">Explore Modules</Link>
             <Link to="/use-cases" className="text-sidqly-green-deep font-bold underline">View Use Cases</Link>
             <Link to="/purchase#inquiry" className="text-sidqly-green-deep font-bold underline">Organization Inquiry</Link>
             <Link to="/contact" className="text-sidqly-green-deep font-bold underline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Purchase Process CTA */}
      <section className="py-24 bg-gradient-to-b from-emerald-50/40 via-white to-white border-t border-slate-200 text-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-slate-900">Ready to upgrade your operations?</h2>
           <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Review our plans, fill the inquiry form, and our team will guide you through the manual review and onboarding process to ensure Sidqly is the perfect fit.
           </p>
           <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <Link to="/purchase" className="bg-emerald-600 text-white p-6 rounded-2xl font-bold hover:bg-emerald-700 transition-all flex flex-col items-center gap-3 shadow-md">
                 <Layout size={24} /> <span>How to Purchase</span>
              </Link>
              <Link to="/purchase#inquiry" className="bg-white border border-slate-200 text-slate-800 p-6 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col items-center gap-3 shadow-sm">
                 <FileText size={24} /> <span>Submit Organization Inquiry</span>
              </Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
