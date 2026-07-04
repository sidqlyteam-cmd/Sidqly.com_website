import React, { useState } from 'react';
import SEO from '../components/SEO';
import { faqs } from '../data/faqs';
import { brand } from '../config/brand';
import { Plus, Minus, Search, MessageSquare } from 'lucide-react';
import { generateFAQSchema } from '../lib/schema';

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const schema = generateFAQSchema(filteredFaqs.slice(0, 10));

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Sidqly, Zakat tracking, Qurbani management, and donor trust."
        canonical="/faqs"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about professionalizing your giving operations with Sidqly.
            </p>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for questions (e.g. 'Zakat', 'WhatsApp', 'Proof')..."
              className="block w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-sidqly-green-emerald focus:border-transparent transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4 mb-20">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all hover:border-sidqly-green-soft">
                  <button
                    className="w-full px-6 py-6 text-left flex justify-between items-center"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-bold text-sidqly-navy pr-8">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-sidqly-green-deep text-white' : 'bg-sidqly-ivory text-gray-400'}`}>
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <div className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                       {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 italic text-gray-400">
                 No questions found matching your search.
              </div>
            )}
          </div>

          <div className="bg-sidqly-green-deep rounded-[40px] p-10 md:p-16 text-center text-white">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="text-sidqly-green-soft" size={32} />
             </div>
             <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
             <p className="text-sidqly-green-soft text-lg max-w-2xl mx-auto mb-12">
                Our team is happy to help you understand how Sidqly can support your organization's unique requirements.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book a Call</a>
                <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Fill Inquiry Form</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
