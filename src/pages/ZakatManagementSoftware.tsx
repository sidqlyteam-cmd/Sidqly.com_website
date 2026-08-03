import React, { useState } from 'react';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { ChevronDown, Shield, Users, Layers, FileText, Database, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';

const ZakatManagementSoftware: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does Sidqly make Zakat eligibility or Shariah rulings automatically?",
      answer: "No. Sidqly acts strictly as an administrative operational platform. All eligibility benchmarks, calculation formulas, and Masarif-e-Zakat screening rules are configured directly by your organization's authorized religious board or scholars. Sidqly provides the workflow and audit logs to track and enforce those rules with complete transparency."
    },
    {
      question: "How does the system ensure direct ownership (Tamleek)?",
      answer: "Sidqly incorporates explicit handover tasks for field coordinators. Disbursing officers log direct recipients with verification codes or physical signatures to document that ownership (Tamleek) has occurred safely, creating a clear audit record for your scholars."
    },
    {
      question: "Can we migrate our current Zakat registry from Excel?",
      answer: "Yes. Our data migration desk assists teams with cleaning, de-duplicating, and mapping their legacy spreadsheets securely into formatted database environments with full role-based access before launching."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Zakat Management Software", item: "/zakat-management-software" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Premium Zakat Management Software | Shariah-Conscious | Sidqly"
        description="Establish strict Zakat fund separation, track applicant eligibility, manage direct recipient ownership (Tamleek), and compile audit-ready reports with Sidqly."
        canonical="/zakat-management-software"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10 tracking-wider">
            Shariah-Conscious Operations Solution for Zakat Committees
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Zakat Management Software
          </h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto mb-10">
            Securely separate Zakat funds from general Sadaqah, log eligibility audits, verify direct beneficiary receipt (Tamleek), and compile row-restricted reports for Shariah compliance boards.
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
              <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Operational Clarity for Zakat Administration</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Zakat is one of the pillars of Islam, carrying precise religious and administrative guidelines. Sidqly’s Zakat Management Software is a specialized backend operating ledger built to help committees, mosques, and NGOs manage Zakat assets and distributions with uncompromising integrity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We replace chaotic, manual spreadsheet tracking with structured, Shariah-conscious administrative workflows. By establishing clear logical fund boundaries, tracking applicant screening details, and logging physical handovers, Sidqly ensures that your operations remain fully accountable to donors, trustees, and scholars alike.
              </p>
            </div>
            <div className="space-y-6">
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-sidqly-green-emerald" size={20} /> Precise Fund Separation
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Apply strict logical gates to keep Zakat ledgers completely separated from general charity or operations budgets. Track allocations to specific categories with absolute precision.
                </p>
              </Card>
              <Card variant="ivory" className="p-6">
                <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <Database className="text-sidqly-green-emerald" size={20} /> Secure Case Review Records
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Keep delicate beneficiary applications, asset checklists, and medical records locked securely behind authorized caseworker roles, ensuring beneficiary privacy and respect.
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
            <h2 className="text-3xl font-bold text-sidqly-navy">The Zakat Management Lifecycle</h2>
            <p className="text-gray-600 mt-2 text-sm">A structured operational loop mapping scholar parameters, payment verifications, and Tamleek receipts.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1. Intake & Screen", desc: "Zakat applications are received and screened against wealth, debt, and Nisab criteria specified by your scholars." },
              { step: "2. Verify Assets", desc: "Caseworkers manually verify bank balances and asset holdings to confirm eligibility before allocation." },
              { step: "3. Direct Handover", desc: "Disbursement officers coordinate the direct transfer of assets to the recipient, satisfying ownership (Tamleek) rules." },
              { step: "4. Scholar Audit", desc: "Export full operational summaries and timestamped approval logs for Shariah compliance reviews." }
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
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Real-World Administration Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Mosque Zakat Committee Tracking</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Local mosque committees use Sidqly to handle recurring community aid requests. By documenting each manual case review and maintaining strict logical separation of Zakat bank transfers, they satisfy the board's auditing demands while protecting the dignity of local families.
              </p>
            </Card>

            <Card variant="border" className="p-8">
              <h4 className="text-lg font-bold text-sidqly-navy mb-4">Corporate Zakat CSR Allocations</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                 Institutional sponsors demand board-ready reports tracking where their corporate Zakat is channeled. Sidqly compiles complete transaction audit logs and verified anonymized distribution summaries, proving impact securely without exposing sensitive recipient PII.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-sidqly-ivory border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Centralized Operational Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Layers size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Automated Fund Separation</h4>
              <p className="text-xs text-gray-500 leading-relaxed">System-enforced logical boundaries prevent Zakat funds from ever being co-mingled with general operations or Sadaqah ledgers.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <Users size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Role-Restricted Portals</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Limit access to delicate applicant files solely to designated caseworkers, keeping general volunteers completely isolated.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center mb-4 font-bold">
                <FileText size={18} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Shariah Board Reporting</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Compile full ledger transaction details and approval audit logs instantly, presenting a complete, compliant paper trail to your scholars.</p>
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
                <Shield className="text-sidqly-green-emerald" size={28} /> Rigorous Modesty & Data Protection
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Maintaining the dignity of Zakat beneficiaries is a religious obligation. Sidqly secures applicant privacy by locking files and automatically scrubbing sensitive image metadata.
              </p>
              <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Automatic Image Sanitization:</strong> Face-blurring tools prevent beneficiary exposure before any update is shared.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Wipe Location Metadata:</strong> Automatically strips device EXIF and precise GPS coordinates from uploaded records.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sidqly-green-emerald"></div>
                  <span><strong>Non-Indexable Updates:</strong> Share reports via secure, private links with `noindex` directives, blocking public search crawlers.</span>
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
            <p className="text-gray-600 text-sm">Factual information regarding the implementation and use of Sidqly for Zakat committees.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Enforce Absolute Zakat Accountability</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ready to transition your mosque or committee to a structured, Shariah-conscious standard? Begin today with our risk-free, 30-day Guided Pilot program.
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

export default ZakatManagementSoftware;
