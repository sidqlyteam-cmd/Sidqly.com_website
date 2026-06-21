import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { MessageSquare, Copy, CheckCircle2 } from 'lucide-react';
import { generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schema';

const RequestOrganization: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const messageCopy = `Assalamu alaikum, I found Sidqly, a platform that helps organizations manage verified giving, manual payment review, proof approval, donor-safe updates, and audit-ready reports while protecting recipient dignity. It may help our organization make donation and delivery workflows clearer. Could we review it for future campaigns?`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestFaqs = [
    {
      question: "Who can request that an organization use Sidqly?",
      answer: "Any stakeholder—including donors, volunteers, vendors, corporate sponsors, mosque members, board members, or staff—can recommend Sidqly to their organization's leadership."
    },
    {
      question: "Why should I recommend Sidqly?",
      answer: "If you want clearer giving records, safer proof sharing, donor-safe updates without exposing private recipient details, and more transparent workflows, Sidqly provides the professional operating layer to achieve that."
    },
    {
      question: "What happens after I send the recommendation?",
      answer: "Your organization can book a demo with our team or fill out an inquiry form. We will guide them through how Sidqly can fit their specific operational needs."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Resources", item: "/resources" },
        { name: "Request Organization", item: "/request-organization" }
      ]),
      generateFAQSchema(requestFaqs)
    ]
  };

  return (
    <>
      <SEO
        title="Request Your Organization to Use Sidqly"
        description="Recommend Sidqly to your mosque, charity, or corporate sponsor network for clearer giving records and protected dignity."
        canonical="/request-organization"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Want your organization to manage giving more clearly?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Anyone can recommend Sidqly to an organization when they want clearer giving records, safer proof sharing, donor-safe updates, and more transparent workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Who should make a request?</h2>
              <ul className="space-y-4 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Donors and community members</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Mosque committee members</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Volunteers and vendors</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Corporate sponsors</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Board members and staff</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-sidqly-green-emerald" size={20} /> Fundraisers and coordinators</li>
              </ul>
            </div>

            <div className="bg-sidqly-navy p-8 md:p-12 rounded-[40px] text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-sidqly-green-soft" /> Suggested Message
              </h2>
              <p className="text-gray-400 mb-6 text-sm">Copy and paste this message to share with your organization's leadership via email or WhatsApp.</p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6 relative">
                <p className="text-gray-300 italic leading-relaxed text-sm">"{messageCopy}"</p>
              </div>

              <button
                onClick={handleCopy}
                className="w-full bg-sidqly-green-emerald text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-sidqly-navy transition-all"
              >
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                {copied ? "Copied to Clipboard" : "Copy Message"}
              </button>
            </div>
          </div>

          <div className="text-center mb-20">
             <h2 className="text-2xl font-bold text-sidqly-navy mb-8">Next Steps for Your Organization</h2>
             <div className="flex flex-wrap justify-center gap-4">
                <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Fill Inquiry Form</a>
                <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Book Demo</a>
                <a href={brand.links.emailInquiry} className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Email Sidqly</a>
             </div>
          </div>

          <div className="max-w-3xl mx-auto">
             <h2 className="text-2xl font-bold text-sidqly-navy mb-8 text-center">Frequently Asked Questions</h2>
             <div className="space-y-4">
               {requestFaqs.map((faq, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-sidqly-navy mb-3">{faq.question}</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestOrganization;
