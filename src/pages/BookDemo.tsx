import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Calendar, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const BookDemo: React.FC = () => {
  return (
    <>
      <SEO
        title="Book a Demo"
        description="Schedule a direct conversation with the Sidqly team to discuss your giving operations, proof process, and reporting needs."
        canonical="/book-demo"
      />

      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-8 leading-tight">
                See how Sidqly can transform your operations.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Book a Sidqly demo to discuss your giving operations, payment tracking, proof process, reporting needs, and how Sidqly can support your team.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <ShieldCheck className="text-sidqly-green-emerald" />, title: "Operational Audit", desc: "We'll review your current manual processes and identify bottlenecks." },
                  { icon: <Calendar className="text-sidqly-green-emerald" />, title: "Tailored Walkthrough", desc: "See the specific modules that match your organization's services." },
                  { icon: <Mail className="text-sidqly-green-emerald" />, title: "Direct Q&A", desc: "Get answers to your team's specific questions about trust, dignity, and proof." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
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

              <div className="p-8 rounded-3xl bg-sidqly-navy text-white">
                 <h4 className="font-bold text-xl mb-4">Before the demo...</h4>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Fill the detailed inquiry form so the Sidqly team can understand your organization type, current tools, and biggest challenges before we meet.
                 </p>
                 <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sidqly-green-soft font-bold hover:gap-3 transition-all">
                    Fill Inquiry Form <ArrowRight size={18} />
                 </a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 min-h-[600px] flex flex-col">
               <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                  <div className="font-bold text-sidqly-navy">Sidqly Demo Scheduler</div>
                  <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                     <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                     <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                  </div>
               </div>
               <div className="flex-grow flex items-center justify-center p-8 bg-sidqly-ivory/50">
                  <div className="text-center max-w-sm">
                     <Calendar className="mx-auto text-gray-300 mb-6" size={64} />
                     <h3 className="text-xl font-bold text-sidqly-navy mb-4">Choose a time slot</h3>
                     <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        Our demo calendar is hosted on Calendly for your convenience. Click the button below to view available slots.
                     </p>
                     <a
                        href={brand.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block w-full"
                     >
                        Open Demo Calendar
                     </a>
                  </div>
               </div>
               <div className="p-6 text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  SECURE • PROFESSIONAL • TRUSTED
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDemo;
