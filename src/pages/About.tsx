import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { ShieldCheck, Heart, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEO title="About Sidqly" canonical="/about" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-8 leading-tight">Technology for Amanah.</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sidqly was founded to bridge the gap between traditional Islamic giving values and modern operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative">
                <div className="aspect-square bg-sidqly-navy rounded-[60px] flex items-center justify-center p-12 overflow-hidden">
                   <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sidqly-green-soft via-transparent to-transparent"></div>
                   </div>
                   <img src="/brand/sidqly-mark.svg" alt="Sidqly Mark" className="w-48 h-48 brightness-0 invert relative z-10" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-xs hidden lg:block">
                   <p className="text-sidqly-navy font-bold leading-tight mb-4 text-lg italic">
                     "Modernizing giving without losing the human touch of dignity."
                   </p>
                   <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Sidqly Vision</div>
                </div>
             </div>
             <div>
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Why we built Sidqly</h2>
                <div className="prose prose-sidqly text-gray-700 leading-relaxed space-y-6">
                   <p>
                      For years, we saw incredible organizations—mosques, Zakat committees, and charities—struggling with messy WhatsApp groups, scattered Excel sheets, and the manual burden of providing proof to donors.
                   </p>
                   <p>
                      This mess didn't just cause burnout; it created risks for the dignity of recipients and the transparency of the organization.
                   </p>
                   <p>
                      We built Sidqly to be the professional operating system for these teams. A platform where trust is built into the workflow, where data is secure by default, and where "Amanah" (the trust given by donors) is managed with the respect it deserves.
                   </p>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
             {[
                {
                  icon: <ShieldCheck className="text-sidqly-green-emerald" size={32} />,
                  title: "Amanah First",
                  desc: "We believe technology should support human trust, not replace it. Our platform enforces review, not just automation."
                },
                {
                  icon: <Heart className="text-sidqly-green-emerald" size={32} />,
                  title: "Dignity Always",
                  desc: "Providing help should never expose identity. Our 'Dignity-Safe' tools make privacy protection automatic."
                },
                {
                  icon: <BarChart className="text-sidqly-green-emerald" size={32} />,
                  title: "Operational Clarity",
                  desc: "Clear records lead to better decisions. We provide board-ready reporting for organizations of all sizes."
                }
             ].map((value, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm text-center">
                   <div className="mx-auto w-16 h-16 bg-sidqly-ivory rounded-2xl flex items-center justify-center mb-8">
                      {value.icon}
                   </div>
                   <h3 className="text-xl font-bold text-sidqly-navy mb-4">{value.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
             ))}
          </div>

          <div className="bg-sidqly-green-deep rounded-[60px] p-10 md:p-20 text-center text-white">
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the journey.</h2>
             <p className="text-sidqly-green-soft text-xl max-w-2xl mx-auto mb-12">
                We're helping organizations across the globe scale their impact with integrity. Ready to see how we can help yours?
             </p>
             <div className="flex flex-wrap justify-center gap-6">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Book a Demo</a>
                <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-navy px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Inquiry Form</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
