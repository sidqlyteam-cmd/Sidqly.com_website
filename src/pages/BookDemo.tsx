import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Calendar, ShieldCheck, Mail, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import InquiryForm from '../components/InquiryForm';

const BookDemo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a typical demo take?",
      answer: "A standard demo takes 30-45 minutes. This gives us enough time to walk through the modules that match your organization's specific needs, and leaves time for any operational questions your team might have."
    },
    {
      question: "Do I need to prepare any data before the call?",
      answer: "No data is required, but it is helpful if you know your current operational pain points (e.g., 'We struggle tracking WhatsApp payment screenshots' or 'Our Zakat fund reporting takes too long')."
    },
    {
      question: "Who from our team should attend?",
      answer: "We recommend bringing the operational leaders who handle the day-to-day workflow, as well as any finance or board members interested in reporting and transparency."
    },
    {
      question: "Can we see a specific module like Qurbani or Zakat?",
      answer: "Yes, our demos are tailored. By filling out the inquiry form before booking, you help us understand exactly which modules to focus on during our call."
    }
  ];

  return (
    <>
      <SEO
        title="Book a Sidqly Demo for Islamic Giving Operations"
        description="Book a Sidqly demo to see how Islamic charities and mosques can manage verified donations, proof approval, donor updates, fund separation, and reporting."
        canonical="/book-demo"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-8 leading-tight">
                Book a Sidqly Demo for Your Islamic Giving Team
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                See firsthand how Sidqly helps you move away from manual spreadsheets and scattered WhatsApp messages to a professional, verified operations platform.
              </p>

              <div className="space-y-12 mb-12">
                <div>
                   <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Who this demo is for</h2>
                   <p className="text-gray-600 mb-4">
                     Sidqly is an operations platform, not a simple donation website. This demo is designed for teams looking to professionalize their giving management, including:
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Mosques & Masjids", "Islamic Charities", "Qurbani Organizers", "Zakat Committees", "Sadaqah Campaign Teams", "Ramadan Ration Teams", "Volunteer-led groups"].map((audience, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                           <CheckCircle2 className="text-sidqly-green-emerald" size={18} /> {audience}
                        </li>
                      ))}
                   </ul>
                </div>

                <div>
                   <h2 className="text-2xl font-bold text-sidqly-navy mb-6">What we review during the demo</h2>
                   <div className="space-y-6">
                      {[
                        { icon: <ShieldCheck className="text-sidqly-green-emerald" />, title: "Your Operational Challenges", desc: "We discuss your current bottlenecks with manual payment review, beneficiary intake, or volunteer coordination." },
                        { icon: <Calendar className="text-sidqly-green-emerald" />, title: "What you will see inside Sidqly", desc: "A tailored walkthrough of the platform, focusing on dignity-safe proof approval, fund separation tracking, and automated donor communications." },
                        { icon: <Mail className="text-sidqly-green-emerald" />, title: "Implementation & Reporting", desc: "How to generate board-ready reports and what a successful pilot rollout looks like for your team." }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-4 items-start">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-sidqly-navy mb-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 text-slate-900 shadow-sm">
                   <h2 className="font-bold text-xl mb-4 text-slate-900">What to prepare before the demo</h2>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      To make our call productive, please fill out the detailed inquiry form. This helps the Sidqly team understand your organization type, current tools, and primary challenges before we meet.
                   </p>
                   <a
                     href={brand.inquiryFormUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={() => trackEvent('guided_pilot_apply', { cta_source: 'book_demo_inquiry_card' })}
                     className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 hover:gap-3 transition-all"
                   >
                      Fill Inquiry Form <ArrowRight size={18} />
                   </a>
                </div>
              </div>
            </div>

            <div className="sticky top-24">
               <InquiryForm initialPlan="Starter" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Demo FAQs</h2>
            <p className="text-gray-600">Common questions about the demo process.</p>
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

export default BookDemo;