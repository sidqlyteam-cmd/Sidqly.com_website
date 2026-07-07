import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Calendar, ShieldCheck, Mail, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

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

                <div className="p-8 rounded-3xl bg-sidqly-navy text-white">
                   <h2 className="font-bold text-xl mb-4">What to prepare before the demo</h2>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      To make our call productive, please fill out the detailed inquiry form. This helps the Sidqly team understand your organization type, current tools, and primary challenges before we meet.
                   </p>
                   <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sidqly-green-soft font-bold hover:gap-3 transition-all">
                      Fill Inquiry Form <ArrowRight size={18} />
                   </a>
                </div>
              </div>
            </div>

            <div className="sticky top-24">
              <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col mb-8">
                 <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div className="font-bold text-sidqly-navy">Sidqly Demo Scheduler</div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </div>
                 </div>
                 <div className="p-10 text-center">
                    <Calendar className="mx-auto text-gray-300 mb-6" size={64} />
                    <h3 className="text-xl font-bold text-sidqly-navy mb-4">Choose a time slot</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                       Click below to view available slots on Calendly and schedule your walkthrough.
                    </p>
                    <a
                       href={brand.calendlyUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block w-full mb-6"
                    >
                       Open Demo Calendar
                    </a>

                    <div className="bg-sidqly-ivory p-4 rounded-xl border border-gray-100 text-left">
                       <h4 className="text-sm font-bold text-sidqly-navy mb-2">What happens after you book?</h4>
                       <ul className="text-xs text-gray-600 space-y-2">
                         <li>• We review your current giving workflow.</li>
                         <li>• We identify where proof, approvals, and reporting are getting messy.</li>
                         <li>• We show how Sidqly can support your organization.</li>
                         <li>• We recommend a practical next step.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="p-6 text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold border-t border-gray-50 flex flex-col items-center gap-1">
                    <span>SECURE • PROFESSIONAL • TRUSTED</span>
                    <span className="text-[9px] text-gray-300 normal-case tracking-normal">Your information is handled strictly according to our privacy policy.</span>
                 </div>
              </div>
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