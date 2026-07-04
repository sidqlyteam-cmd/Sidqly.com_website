import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Settings, ChevronDown } from 'lucide-react';

const Implementation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { title: "Discovery & Workflow Mapping", desc: "We map your existing Excel sheets, WhatsApp processes, and manual forms to Sidqly’s verified workflows." },
    { title: "Campaign & Fund Setup", desc: "Configuration of Zakat, Sadaqah, and general funds to ensure accurate separation from day one." },
    { title: "Team Roles & Permissions", desc: "Assign specific roles (reviewers, submitters, board members) to volunteers, staff, and vendors." },
    { title: "Payment Proof & Approval Flow", desc: "Define your organization's internal standards for reviewing manual bank transfers and expense receipts." },
    { title: "Donor Communication Setup", desc: "Establish the dignity-safe templates and rules for sharing field updates with your donors." },
    { title: "Reporting & Board Pack Setup", desc: "Configure your dashboard so you can generate audit-ready leadership packs instantly." },
    { title: "Training & Launch Support", desc: "Live training for your team followed by a pilot launch on a single campaign to ensure confidence." }
  ];

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "A standard implementation takes 2-4 weeks. This depends on how quickly your team can provide existing donor lists and finalize your internal approval workflows."
    },
    {
      question: "Do you import our old spreadsheet data?",
      answer: "Yes, during the discovery phase, we will provide a template for you to map your existing Excel data, which our team will help import securely."
    },
    {
      question: "Who is responsible for training our volunteers?",
      answer: "We provide recorded training materials and live onboarding for your core leadership team, who can then easily train field volunteers using Sidqly's intuitive interface."
    }
  ];

  return (
    <>
      <SEO
        title="Sidqly Implementation Process for Mosques and Charities"
        description="See how Sidqly is implemented for Islamic charities, mosques, Qurbani organizers, and giving teams through workflow mapping, setup, training, and launch support."
        canonical="/implementation"
      />
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-8">Sidqly Implementation for Mosques and Charities</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              We don't just hand you software. We provide a structured path to operational clarity, moving your team from spreadsheets to verified workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">The 7-Step Onboarding Process</h2>
           <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start relative group">
                   {i < steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-100 group-hover:bg-sidqly-green-soft transition-colors hidden md:block"></div>
                   )}
                   <div className="w-12 h-12 rounded-full bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep font-bold flex-shrink-0 z-10 border-4 border-white shadow-sm group-hover:scale-110 transition-transform">
                      {i + 1}
                   </div>
                   <div className="pt-2 pb-6">
                      <h3 className="text-2xl font-bold text-sidqly-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Settings className="mx-auto text-sidqly-green-deep mb-8" size={48} />
           <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Ready to start your rollout?</h2>
           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Our team assists with technical setup, data migration, and team training to ensure your organization starts on the right foot.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Setup Discussion</a>
           </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Implementation FAQs</h2>
            <p className="text-gray-600">Common questions about getting started with Sidqly.</p>
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
                      <p className="text-gray-600 pt-2 border-t border-gray-100">{faq.answer}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Implementation;