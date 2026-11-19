import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react';
import { generateCollectionSchema, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schema';
import { comparisons } from '../../data/comparisons';

const AlternativesIndex: React.FC = () => {
  const alternativeGuides = comparisons.filter(c => c.slug.endsWith('-alternatives'));

  const faqs = [
    {
      question: "Why do Islamic charities look for software alternatives?",
      answer: "Most traditional charity software tools were developed for Western fundraising models and lack native support for Islamic philanthropic requirements—such as mathematically isolating Zakat funds from overhead, protecting beneficiary modesty (Izzah) with automated face-blurring, and managing seasonal workflows like Ramadan ration packs and Qurbani animal shares."
    },
    {
      question: "How is Sidqly different from crowdfunding alternatives like LaunchGood?",
      answer: "LaunchGood is a public crowdfunding platform to attract donors and process credit cards. Sidqly is a backend operating system that steps in after the donation is made—managing manual bank reconciliations, field volunteer routing, modesty-safe proof review, and Shariah board audit packs."
    },
    {
      question: "Can we use front-end donation forms alongside an operations platform?",
      answer: "Yes, this is the most common industry best practice. Nonprofits use front-end checkout tools (such as Donorbox or Givebutter) on their public websites to accept card payments, and use Sidqly in the back office to handle fulfillment, volunteer tasks, and Zakat ledger isolation."
    },
    {
      question: "Does Sidqly replace accounting software like QuickBooks or Xero?",
      answer: "Sidqly works alongside accounting software. While QuickBooks tracks financial balances, Sidqly provides the operational proof: field delivery timestamps, volunteer task tracking, modesty-filtered photo evidence, and recipient eligibility records."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema(
        "Islamic Charity & Nonprofit Software Alternatives (2026 Directory)",
        "Objective operational breakdowns and buyer guides comparing software alternatives for Islamic charities, mosques, and Zakat organizations.",
        "/alternatives"
      ),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Alternatives", item: "/alternatives" }
      ]),
      generateFAQSchema(faqs)
    ]
  };

  return (
    <>
      <SEO
        title={`Islamic Charity Software Alternatives | 2026 Operational Buyer Guide`}
        description="Factual, objective comparisons of software alternatives for Islamic nonprofits, mosques, and Zakat committees. Compare features, workflows, and Shariah compliance."
        canonical="/alternatives"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidqly-green-soft/20 text-sidqly-green-deep text-sm font-semibold mb-6">
            <Scale size={16} /> 2026 Operational Software Directory
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-sidqly-navy mb-8">
            Islamic Charity Software Alternatives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Objective, factual evaluations of software alternatives for Islamic charities, mosques, and Zakat organizations. Understand when to use front-end fundraising vs backend verified giving operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {alternativeGuides.map((item) => (
              <Link
                key={item.slug}
                to={`/alternatives/${item.slug}`}
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-xl transition-all group text-left flex flex-col"
              >
                <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-2xl flex items-center justify-center text-sidqly-green-deep font-bold mb-6 group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">
                  {item.h1}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {item.metaDescription}
                </p>
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  Read Alternative Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm text-left max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Looking for Direct Head-to-Head Comparisons?</h2>
            <p className="text-gray-600 mb-6">
              Compare Sidqly directly against specific platforms including LaunchGood, Donorbox, Bloomerang, Givebutter, QurbanApp, Mosque Management Software, and Physical Atiyat Boxes.
            </p>
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sidqly-green-deep text-white rounded-xl font-bold hover:bg-sidqly-green-emerald transition-colors"
            >
              Browse Head-to-Head Comparisons <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture Guide */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy">Software Architectures in Islamic Giving</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Different tools solve different stages of the donation lifecycle. Here is how leading architectures compare:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Capability</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Crowdfunding (e.g. LaunchGood)</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Checkout Forms (e.g. Donorbox)</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-xs">Donor CRM (e.g. Bloomerang)</th>
                  <th className="p-4 border-b-2 border-sidqly-green-deep font-bold text-sidqly-green-deep uppercase tracking-wider text-xs bg-sidqly-green-soft/10 rounded-t-xl">Operations Engine (Sidqly)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Primary Purpose", "Attract retail donors online", "Accept cards on website", "Donor relationship retention", "Backend verification & logistics"],
                  ["Manual Bank Transfer Review", "Not supported", "Not supported", "Manual note entry", "Dedicated review queue with screenshot check"],
                  ["Atiyat Cash Box Tracking", "No", "No", "Basic offline entry", "Dual-custody witness & seal logs"],
                  ["Zakat Fund Separation", "Campaign text label only", "Basic form tag", "Custom field", "Mathematically enforced logical gates"],
                  ["Beneficiary Modesty (Izzah)", "Manual photo curation", "N/A", "N/A", "Automated computer-vision face-blurring"],
                  ["Volunteer Field Dispatch", "No", "No", "No", "Mobile driver routes & verification pins"],
                  ["Qurbani Portion Management", "Basic donation items", "Itemized form", "No", "Native 1/7 large animal & sheep shares"],
                  ["Shariah Audit Board Packs", "Standard CSV receipts", "Payment gateway reports", "Fundraising revenue reports", "One-click Shariah & Board audit PDFs"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors group border-b border-gray-100">
                    <td className="p-4 font-bold text-sidqly-navy">{row[0]}</td>
                    <td className="p-4 text-gray-500">{row[1]}</td>
                    <td className="p-4 text-gray-500">{row[2]}</td>
                    <td className="p-4 text-gray-500">{row[3]}</td>
                    <td className="p-4 font-bold text-sidqly-green-deep bg-sidqly-green-soft/10 group-hover:bg-sidqly-green-soft/20 transition-colors">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4">Common questions when evaluating software alternatives for Islamic charities.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-sidqly-navy mb-3 flex items-start gap-3">
                  <ShieldCheck className="text-sidqly-green-deep flex-shrink-0 mt-1" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlternativesIndex;
