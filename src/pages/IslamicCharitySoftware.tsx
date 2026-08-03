import React, { useState } from 'react';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { ChevronDown, Shield, Users, Layers, FileText, Database, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';

const IslamicCharitySoftware: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Sidqly's Islamic charity software compare with generic CRMs?",
      answer: "Generic CRM databases focus on public fundraising lists and credit card processing, lacking the granular workflows required for Islamic accountability. Sidqly acts purely as a backend admin system specifically managing manual bank transfers, physical collections, logical Zakat separation ledgers, vendor fulfillments, and dignity-first photo approvals before update exports."
    },
    {
      question: "Does this software automate financial audit logs?",
      answer: "Yes. Sidqly automatically logs a permanent audit history tracking who uploaded a payment reference, who matched it to a bank statement, who assigned the field volunteers, and which managers blur-approved the resulting delivery photos."
    },
    {
      question: "Are there any automated Shariah compliance rulings?",
      answer: "No. Sidqly acts strictly as an administrative operational tool and makes no legal or religious rulings. Compliance gates, eligibility checks, and separation rules are configured by your authorized scholars, and tracked with full audit transparency."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Islamic Charity Software", item: "/islamic-charity-software" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Islamic Charity Management Software | Audit-Ready Operations | Sidqly"
        description="Transform manual nonprofit giving with premium Islamic charity software. Manage donation tracking, manual payment verify, proof approvals, and board reporting."
        canonical="/islamic-charity-software"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10 tracking-wider">
            Premium Operations Solution for Registered NGOs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Islamic Charity Management Software
          </h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto mb-10">
            Professionalize your organization's internal workflows. Replace scattered spreadsheets and messaging backups with one unified ledger built for absolute accountability, recipient modesty, and compliance.
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
              <h2 className="text-3xl font-bold text-sidqly-navy mb-6">What is Sidqly's Islamic Charity Software?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sidqly's Islamic Charity Management Software is a dedicated administrative platform constructed specifically for registered nonprofits, welfare groups, and international networks. Unlike generic cloud CRMs that focus purely on public online fundraising portals, Sidqly is designed for the backend operational complexities of Islamic giving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By focusing on the strict requirements of **Amanah** (Trust), we provide structured tools to log manual donations, match bank transfers manually to receipts, separate distinct ledgers (such as Zakat, Sadaqah, or Khairat), assign fulfillment run details to on-the-ground volunteer forces, and verify completion photos safely with privacy-first blur systems.
              </p>
            </div>
            <div className="space-y-6">
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-sidqly-green-emerald" size={20} /> Pure Administrative Scope
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sidqly remains strictly a backend software partner. We never hold client donor funds in escrow, process credit card receipts directly, or issue Shariah rulings. All financial accounts and eligibility controls are managed directly by your authorized trustees.
                </p>
              </Card>
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <Database className="text-sidqly-green-emerald" size={20} /> Clean Operational Migration
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We assist teams currently using scattered Excel archives or messaging back-ups to transition smoothly. Our migration desk maps, cleanses, and reformats lists before sandbox deployment.
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
            <h2 className="text-3xl font-bold text-sidqly-navy">The Verification Workflow</h2>
            <p className="text-gray-600 mt-2 text-sm">How information flows securely through the system from payment intake to audit exports.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1. Intake & Log", desc: "Staff enter manual cash receipts or bank transfer statements, matching them to specified campaigns." },
              { step: "2. Assign Runs", desc: "Field tasks (e.g. food delivery or water well sourcing) are created and assigned to volunteers with role-safe access." },
              { step: "3. Verify Proof", desc: "Volunteers upload photos or delivery signs directly, which enter a private review desk before donor sharing." },
              { step: "4. Sanitized Export", desc: "Dignity managers apply automatic blurring, wipe GPS metadata, and generate secure update links for donors." }
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
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Real-World Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Sponsor Trust on Emergency Appeals</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                When a charity coordinates emergency relief, sponsors require absolute clarity on where cash is being spent. Sidqly connects payment ledgers directly to active procurement lists and delivery locations, ensuring sponsors receive clean metrics of completed drop-offs.
              </p>
            </Card>

            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Transitioning Seasonal Campaigns</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Logistics directors use Sidqly to handle peak seasons such as Ramadan meals or Qurbani shares. By standardizing vendor SLA requirements and field volunteer tasks, they avoid the classic post-campaign reporting delays.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-sidqly-ivory border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Core Platform Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Layers size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Zakat Fund Separation</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Dedicated ledgers applying logical filters, preventing Zakat funds from ever co-mingling with Sadaqah or operational accounts.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Users size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Volunteer Dispatch Dashboard</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Assign routes and delivery schedules securely, restricting general access to private beneficiary address files.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <FileText size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">One-Click Board Packs</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Export fully summarized operational outcomes, completed verification logs, and financial ledger balances instantly for meetings.</p>
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
                <Shield className="text-sidqly-green-emerald" size={28} /> Dignity-Safe Privacy Controls
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Protecting beneficiary modesty is a central tenet of Sadaqah giving. Sidqly enforces rigid security boundaries so that raw, un-blurred photos uploaded from the field are strictly locked behind authorized roles.
              </p>
              <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Face Detection Filters:</strong> Automated face-blurring is applied instantly to shield beneficiary features.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>EXIF Sanitization:</strong> Automatically strips device identifiers, timestamps, and GPS telemetry from files.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Row-Restricted viewing:</strong> Field workers and general sponsors only view sanitized evidence packs, keeping PII secure.</span>
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
            <p className="text-gray-600 text-sm">Factual information regarding the implementation and use of Sidqly for charities.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transition Your Operations Safely</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ready to upgrade your organization's compliance, reporting, and transparency? Get started today with our risk-free, 30-day Guided Pilot.
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

export default IslamicCharitySoftware;
