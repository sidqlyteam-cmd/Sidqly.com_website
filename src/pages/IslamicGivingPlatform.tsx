import React, { useState } from 'react';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { ChevronDown, Shield, Users, Layers, FileText, Database, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';

const IslamicGivingPlatform: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Sidqly an online crowdfunding platform or payment gateway?",
      answer: "No. Sidqly is strictly an administrative operational backend platform. We do not provide public donation web pages, hold donor money in custody, or process credit card payments directly. Nonprofits receive manual bank wire transfers, cash, or check collections directly to their own institutions, and use Sidqly solely to reconcile, track, verify, and report those allocations."
    },
    {
      question: "How does the platform support regional tax compliance rules?",
      answer: "Sidqly offers standardized receipt modules capturing mandatory parameters (donor name, verified reference IDs, and timestamp tags). Treasurers can export these verified listings easily to back up local statutory or charity commissioner audit logs."
    },
    {
      question: "Can we configure different access limits for our field volunteers?",
      answer: "Yes. Sidqly implements strict row-level access permissions. Field teams and volunteers can only see the specific delivery routes, tasks, and blurred recipient guidelines assigned to them. Full financial details and general database files remain restricted to management and scholarly boards only."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Islamic Giving Operations Platform", item: "/islamic-giving-operations-platform" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Premium Islamic Giving Operations Platform | Sidqly"
        description="Streamline manual payment review, logical Zakat separation, field proof, and board-ready reporting with Sidqly's premium giving operations platform."
        canonical="/islamic-giving-operations-platform"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10 tracking-wider">
            Premium Operations Solution for Islamic NGOs & Mosques
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Islamic Giving Operations Platform
          </h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto mb-10">
            Professionalize backend coordination. Securely manage manual bank transfer verification, logical fund separation, volunteer routing, photo proof approvals, and audit-ready board reporting.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="emerald" onClick={() => window.location.href = "/guided-pilot"}>
              Apply for Guided Pilot
            </Button>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sidqly-navy mb-6">A Specialized Operating System for Amanah</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sidqly is a premium, remote SaaS (Software-as-a-Service) giving operations platform developed specifically to organize, verify, and audit backend workflows for Islamic charity institutions. We believe that good intentions must be matched by operational excellence, which is why we've designed an administrative structure to eradicate spreadsheet errors and un-auditable message logs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Rather than acting as a payment portal, Sidqly connects the dots after a donation is committed. We support treasurers with structured manual verification cues, manage logically separated ledgers to fulfill precise fund guidelines (e.g. Zakat versus Sadaqah), and ensure that proof of distribution on the ground remains completely compliant with Shariah-conscious modesty rules.
              </p>
            </div>
            <div className="space-y-6">
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-sidqly-green-emerald" size={20} /> Total Administrative Boundary
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We focus strictly on the backend logistics. Sidqly is not a crowdfunding portal, never handles or processes transaction funds, and holds no religious authority. Religious rulings and case screening guidelines remain with your authorized local scholars.
                </p>
              </Card>
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <Database className="text-sidqly-green-emerald" size={20} /> Verified, Audit-Ready Ledger Logs
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Avoid the chaos of unorganized screenshots. Reconcile transactions side-by-side with bank statements manually, creating concrete, timestamped, audit-ready data ledgers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Workflow) */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-navy">Our Standard Verification Flow</h2>
            <p className="text-gray-600 mt-2 text-sm">A multi-stage compliance loop bridging payments, volunteer logistics, and dignified donor communication.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1. Log & Tag", desc: "Transactions are registered and logically separated into isolated ledgers by fund type (Zakat, Sadaqah, Projects)." },
              { step: "2. Dispatch Tasks", desc: "Operations teams deploy tasks to field teams or third-party vendors with granular row-level data limits." },
              { step: "3. Audit Desk Gate", desc: "Auditors inspect raw completion receipts or photos. Face-blurring algorithms are applied to protect beneficiary modesty." },
              { step: "4. Secure Update", desc: "Donor updates are sent out using private, secure links that cannot be indexed by public search bots." }
            ].map((w, idx) => (
              <Card variant="white" key={idx} className="p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sidqly-navy mb-3 text-sm">{w.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Designed for Key Operational Initiatives</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Ramadan Distribution Coordination</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Ramadan campaigns involve high-volume meal preparation and family ration packing. Using Sidqly, operations coordinators organize deliveries into discrete driver routes, allowing volunteers to update progress on their mobile browsers while keeping family PII locked.
              </p>
            </Card>

            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Trust-First Qurbani Management</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                 Eid ul Adha requires extreme precision to execute livestock procurement and animal slaughter portions within Tashreeq time parameters. Sidqly logs verified shares, coordinates slaughterhouses, and generates personalized donor certificates easily.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-sidqly-ivory border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Centralized Operational Modules</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Layers size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Separated Ledgers</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Establish complete operational distinctions, preserving absolute Zakat ledger guidelines cleanly.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Users size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Role-Restricted Dashboards</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Limit field volunteers to their schedules, keeping full donor files and balances restricted to authorized staff.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <FileText size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Board Pack Generator</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Compile operational progress, verification checks, and budget divisions into formatted, board-ready packs in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security, Privacy & Recipient Dignity */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sidqly-navy text-white rounded-[40px] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sidqly-green-emerald rounded-full filter blur-[80px] opacity-15"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-3">
                <Shield className="text-sidqly-green-emerald" size={28} /> Advanced Dignity & Access Controls
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Protecting beneficiary modesty is a central focus of Islamic operations. Sidqly enforces rigid technical boundaries to keep raw, un-blurred photos uploaded from the field locked securely behind authorized roles.
              </p>
              <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Automatic Face-Blurring:</strong> Detects and blurs beneficiary features instantly before export.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>EXIF Metadata Scrubbing:</strong> Wipes camera identifiers, timestamp details, and precise GPS markers from files.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Private, Non-Crawlable links:</strong> Donor-safe updates are shared using secure, restricted URLs with `noindex` directives, blocking public search bots.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm">Factual information regarding the implementation and features of our platform.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-sidqly-green-soft">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left font-bold text-sidqly-navy flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8 text-sm">{faq.question}</span>
                  <ChevronDown size={20} className={`text-sidqly-green-emerald transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 pt-2 border-t border-gray-100 text-xs leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Organize Your Operations with Absolute Integrity</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ready to transition your mosque or charity to a professional operating standard? Begin today with our risk-free, 30-day Guided Pilot program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="emerald" className="px-10 py-4 text-base" onClick={() => window.location.href = "/guided-pilot"}>
              Apply for Guided Pilot
            </Button>
            <Button variant="outline" className="px-10 py-4 text-base text-white hover:text-sidqly-navy" onClick={() => window.location.href = "/contact-sales"}>
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default IslamicGivingPlatform;
