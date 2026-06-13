import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { HelpCircle, Book, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help: React.FC = () => {
  const sections = [
    {
      title: "For Organizations",
      icon: <Book className="text-sidqly-green-emerald" />,
      links: [
        { label: "Getting started guide", href: "/blog/how-to-run-a-charity-pilot-project" },
        { label: "Managing Zakat funds", href: "/blog/how-to-track-zakat-donations" },
        { label: "Qurbani setup", href: "/blog/how-to-manage-qurbani-orders" },
        { label: "Reporting basics", href: "/blog/how-to-prepare-charity-impact-reports" }
      ]
    },
    {
      title: "For Donors",
      icon: <HeartIcon />,
      links: [
        { label: "How to view proof", href: "/blog/what-is-donor-safe-proof" },
        { label: "Understanding dignity-safe", href: "/blog/dignity-safe-charity-support-explained" },
        { label: "Downloading receipts", href: "/blog/how-to-issue-donation-receipts" }
      ]
    },
    {
      title: "Platform & Access",
      icon: <ShieldIcon />,
      links: [
        { label: "Security standards", href: "/security" },
        { label: "Trust and Privacy", href: "/trust-center" },
        { label: "Brand guidelines", href: "/brand" }
      ]
    }
  ];

  return (
    <>
      <SEO title="Help Center" canonical="/help" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Help & Resources</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find the guides, FAQs, and support you need to manage your giving operations effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
             {sections.map((section, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                   <div className="w-12 h-12 bg-sidqly-ivory rounded-2xl flex items-center justify-center text-sidqly-green-deep mb-6">
                      {section.icon}
                   </div>
                   <h3 className="text-xl font-bold text-sidqly-navy mb-6">{section.title}</h3>
                   <ul className="space-y-4">
                      {section.links.map((link, j) => (
                         <li key={j}>
                            <Link to={link.href} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center justify-between group">
                               <span className="text-sm font-medium">{link.label}</span>
                               <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                         </li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>

          <div className="bg-sidqly-navy text-white rounded-[40px] p-10 md:p-16">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
                   <p className="text-gray-400 mb-10 leading-relaxed">
                      Our support team is available to help organizations with specific implementation questions, data migration, and training.
                   </p>
                   <div className="space-y-4">
                      <a href={`mailto:${brand.email}`} className="flex items-center gap-3 font-bold text-sidqly-green-soft hover:underline">
                         <MessageCircle size={20} /> Email Support: {brand.email}
                      </a>
                      <a href={brand.calendlyUrl} className="flex items-center gap-3 font-bold text-sidqly-green-soft hover:underline">
                         <HelpCircle size={20} /> Book Support Call
                      </a>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                   <h4 className="font-bold mb-4 text-xl">Top FAQ</h4>
                   <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      "How do we migrate from WhatsApp groups and Excel sheets to Sidqly?"
                   </p>
                   <Link to="/blog/how-to-move-from-manual-charity-processes" className="bg-white text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-sidqly-gold transition-all inline-block">
                      Read Migration Guide
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

const HeartIcon = () => <div className="text-sidqly-green-emerald"><FileText size={24} /></div>;
const ShieldIcon = () => <div className="text-sidqly-green-emerald"><FileText size={24} /></div>;

export default Help;
