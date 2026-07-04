import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Shield, FileText, ArrowRight } from 'lucide-react';

const Legal: React.FC = () => {
  const links = [
    { title: "Privacy Policy", desc: "How we protect donor and recipient data.", href: "/privacy" },
    { title: "Terms of Service", desc: "The rules for using the Sidqly platform.", href: "/terms" },
    { title: "Security Standards", desc: "Our commitment to data integrity.", href: "/security" },
    { title: "Billing & Payments", desc: "Official payment details and IBAN.", href: "/billing" },
    { title: "Accessibility", desc: "Our commitment to inclusive design.", href: "/accessibility" }
  ];

  return (
    <>
      <SEO title="Legal & Compliance" description="Index of Sidqly's legal, privacy, and security documents." canonical="/legal" />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Legal & Compliance</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Official documents and policies governing the Sidqly platform.</p>
          </div>

          <div className="grid gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-sidqly-ivory rounded-2xl flex items-center justify-center text-sidqly-green-deep">
                      <FileText size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors">{link.title}</h3>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                   </div>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-sidqly-green-emerald group-hover:translate-x-1 transition-all" size={24} />
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-sidqly-navy text-white p-10 rounded-[40px] text-center">
             <Shield className="mx-auto mb-6 text-sidqly-green-soft" size={40} />
             <h3 className="text-2xl font-bold mb-4">Amanah & Trust</h3>
             <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
                Legal compliance is only one part of our mission. We are committed to the highest standards of Islamic integrity and dignity in every line of code we write.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;
