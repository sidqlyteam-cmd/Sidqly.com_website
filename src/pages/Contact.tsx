import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Mail, Calendar, MessageSquare, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        canonical="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Sidqly",
          "url": `${brand.domain}/contact`,
          "description": "Contact the Sidqly Team for platform questions, demo bookings, or support."
        }}
      />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Contact the Sidqly Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions about our platform or need support for your organization? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="space-y-8">
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-2xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                         <Calendar size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-sidqly-navy mb-2">Book a Demo</h3>
                         <p className="text-gray-600 text-sm mb-6">Schedule a direct conversation with our team to explore how Sidqly fits your operations.</p>
                         <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-sidqly-green-emerald font-bold hover:underline">Choose a time slot →</a>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-2xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                         <MessageSquare size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-sidqly-navy mb-2">Fill Inquiry Form</h3>
                         <p className="text-gray-600 text-sm mb-6">Tell us about your organization and specific needs so we can prepare a tailored recommendation.</p>
                         <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="text-sidqly-green-emerald font-bold hover:underline">Open form →</a>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-2xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                         <Mail size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-sidqly-navy mb-2">Email Us</h3>
                         <p className="text-gray-600 text-sm mb-6">For general queries, partnership discussions, or billing support.</p>
                         <a href={`mailto:${brand.email}`} className="text-sidqly-green-emerald font-bold hover:underline">{brand.email} →</a>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px]">
                <h3 className="text-3xl font-bold mb-8">Our Focus</h3>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Sidqly is dedicated to supporting organizations that prioritize Amanah and dignity. Our team is available to assist with onboarding, data migration from Excel/WhatsApp, and custom reporting setup.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-sidqly-green-soft">
                      <MapPin size={20} />
                      <span className="font-bold">Operating globally, based in Pakistan</span>
                   </div>
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 italic text-sm text-gray-300">
                   "We typically respond to emails within 24 hours. For the fastest response, please fill the inquiry form with as much detail as possible."
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
