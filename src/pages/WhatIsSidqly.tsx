import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { ShieldCheck, AlertCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { generateBreadcrumbSchema, generateFAQSchema } from '../lib/schema';
import { Link } from 'react-router-dom';
import { WorkflowVisualizer } from '../components/ui/WorkflowVisualizer';

const WhatIsSidqly: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Sidqly?",
      answer: "Sidqly is a remote SaaS (Software-as-a-Service) operating platform designed specifically for Islamic giving organizations, including mosques, charities, Zakat committees, and seasonal campaign teams. It provides administrative tools to verify manual donations, manage workflows, track field evidence, and generate board-ready reports."
    },
    {
      question: "Is Sidqly a payment processor or crowdfunding website?",
      answer: "No. Sidqly is an administrative backend tool. We do not process payments directly, hold donor funds, or act as a public crowdfunding platform. Organizations use Sidqly to record and manually verify their own direct bank transfers, cash collections, and fulfillment records."
    },
    {
      question: "Does Sidqly make Shariah rulings or Zakat eligibility decisions?",
      answer: "No. Sidqly does not act as a religious authority and does not issue Shariah rulings, fatwas, or Zakat eligibility decisions. The platform provides logical filters and structured workflows to help organizations separate Zakat and Sadaqah funds according to their own internal policies and religious advisors."
    },
    {
      question: "How does Sidqly protect recipient dignity?",
      answer: "Sidqly enforces 'Dignity-Safe' data workflows. This includes built-in tools for automated face-blurring and anonymization of recipient identifiers in field proof, and private restricted donor update links that cannot be indexed by search engines, preventing vulnerable beneficiaries from being publicly exposed."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${brand.domain}/what-is-sidqly#webpage`,
        "url": `${brand.domain}/what-is-sidqly`,
        "name": `What is Sidqly? | Clear Definition & Operational Boundaries | ${brand.name}`,
        "description": "Learn what Sidqly is, who it is for, the problems it solves, and our strict operational and religious boundaries.",
        "breadcrumb": { "@id": `${brand.domain}/what-is-sidqly#breadcrumb` }
      },
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "What is Sidqly", item: "/what-is-sidqly" }
      ]),
      generateFAQSchema(faqs)
    ]
  };

  return (
    <>
      <SEO
        title="What is Sidqly? | Clear Definition & Operational Boundaries"
        description="Learn what Sidqly is, who it is for, the problems it solves, and our strict operational and religious boundaries."
        canonical="/what-is-sidqly"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
             <h1 className="text-3xl md:text-6xl font-extrabold mb-8">What is Sidqly?</h1>
             <p className="text-xl text-sidqly-green-soft leading-relaxed">
                Sidqly is a specialized, remote SaaS operating platform built to help Islamic giving organizations manage verified operations, manual payment reviews, and proof approvals while strictly protecting recipient dignity.
             </p>
          </div>
        </div>
      </section>

      {/* Core Entity Definition */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="prose prose-lg prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">

              {/* Quick Definition Block */}
              <div className="bg-sidqly-ivory p-8 rounded-[2rem] border border-gray-100 flex gap-6 items-start shadow-sm not-prose mb-12">
                 <div className="w-12 h-12 bg-sidqly-green-deep text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-sidqly-navy mb-2">Entity Definition</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                       Sidqly is an administrative backend software. We provide the digital tools for mosques, Zakat committees, and charities to track their donations, verify proof, separate funds, and prepare board reports. We are **not** a crowdfunding website, a payment processor, or a religious authority.
                    </p>
                 </div>
              </div>

              <h2 className="text-3xl font-bold text-sidqly-navy">Who Sidqly is For</h2>
              <p>
                 Sidqly is built specifically for modern Islamic giving organizations that value operational integrity, professional reporting, and recipient dignity:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Mosques & Masjids</strong></li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Islamic Charities</strong></li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Zakat Committees</strong></li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Qurbani Organizers</strong></li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Ramadan Relief Teams</strong></li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={20} /> <strong>Sadaqah Campaign Teams</strong></li>
              </ul>

              <h2 className="text-3xl font-bold text-sidqly-navy mt-12">The Problems We Solve</h2>
              <p>
                 Giving operations are often scattered across messy spreadsheets, WhatsApp threads, and unorganized email confirmations. This creates several operational risks:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="p-6 bg-sidqly-ivory rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-sidqly-navy mb-2">Operational Bottlenecks</h4>
                    <p className="text-sm text-gray-600">Checking manual bank transfer confirmations against bank statements, chasing volunteers for delivery proof, and spending days compiling reporting metrics for the board.</p>
                 </div>
                 <div className="p-6 bg-sidqly-ivory rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-sidqly-navy mb-2">Recipient Privacy Violations</h4>
                    <p className="text-sm text-gray-600">Accidentally sharing unblurred photos of vulnerable beneficiaries on social media or in direct messages to satisfy donor proof demands.</p>
                 </div>
              </div>

              <h2 className="text-3xl font-bold text-sidqly-navy mt-12">How It Works (High-Level)</h2>
              <div className="space-y-6 mt-6">
                 {[
                   { step: "Intake", desc: "Organizations record internal donation entries or collect applicant hardcopy requests in one secure queue." },
                   { step: "Verify", desc: "Finance reviewers manually check submitted bank screenshots or transaction references before marking them confirmed." },
                   { step: "Fulfill", desc: "Tasks are assigned to volunteers or external vendors (such as slaughterhouses for Qurbani or caterers for Ramadan) who upload proof from the field." },
                   { step: "Review Proof", desc: "Reviewers inspect and sanitize the proof using built-in face-blurring tools to ensure dignity." },
                   { step: "Report & Update", desc: "Generate board-ready financial summaries and send restricted, privacy-safe update links to donors." }
                 ].map((w, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-sidqly-green-soft text-sidqly-green-deep flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                       </div>
                       <div>
                          <h4 className="font-bold text-sidqly-navy mb-1">{w.step}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Interactive Privacy Workflow */}
              <h2 className="text-3xl font-bold text-sidqly-navy mt-12">Dignity-First Privacy Controls</h2>
              <p>Explore the visual workflow of how Sidqly automatically ensures recipient dignity and removes sensitive EXIF metrics before updates reach donors:</p>
              <div className="not-prose my-8">
                 <WorkflowVisualizer initialWorkflowId="recipient-privacy" />
              </div>

              {/* Strict Boundaries Section */}
              <h2 className="text-3xl font-bold text-sidqly-navy mt-12">What Sidqly Does NOT Do (Boundaries)</h2>
              <div className="bg-red-50 border border-red-100 p-8 rounded-3xl space-y-4 not-prose">
                 <div className="flex gap-3 text-red-700">
                    <AlertCircle className="flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold mb-1">No Religious Authority</h4>
                       <p className="text-sm text-red-800 leading-relaxed">
                          Sidqly does not provide Shariah rulings, fatwas, or religious decisions regarding eligibility. All fund separation and recipient screening rules remain completely under the control of your organization’s authorized religious advisors.
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-3 text-red-700">
                    <AlertCircle className="flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold mb-1">No Payment Processing or Funds Custody</h4>
                       <p className="text-sm text-red-800 leading-relaxed">
                          We do not process credit cards directly, hold donor funds in custody, or act as an escrow agent. Your organization receives direct bank transfers or cash, and uses Sidqly simply to verify and record those operations.
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-3 text-red-700">
                    <AlertCircle className="flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold mb-1">No Legal or Tax Claims</h4>
                       <p className="text-sm text-red-800 leading-relaxed">
                          We do not provide legal, tax, accounting, or audit services. Organizations must ensure compliance with local nonprofit regulations, financial accounting rules, and tax reporting requirements with their qualified local advisors.
                       </p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Clear, factual information about the Sidqly platform.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-sidqly-green-soft">
                  <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left font-bold text-sidqly-navy flex justify-between items-center focus:outline-none"
                  >
                      <span className="pr-8">{faq.question}</span>
                      <ChevronDown size={20} className={`text-sidqly-green-emerald transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-600 pt-2 border-t border-gray-100 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to learn more?</h2>
            <p className="text-lg text-gray-300 mb-10">Schedule a demo with our team to discuss your current workflows.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link to="/book-demo" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</Link>
               <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Fill Inquiry Form</a>
            </div>
         </div>
      </section>
    </>
  );
};

export default WhatIsSidqly;
