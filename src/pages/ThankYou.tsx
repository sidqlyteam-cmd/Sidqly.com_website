import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2, ArrowRight, MessageSquare, Calendar } from 'lucide-react';

const ThankYou: React.FC<{ type?: 'demo' | 'contact' | 'pricing' }> = ({ type }) => {
  const content = {
    demo: {
      title: "Demo Request Received",
      desc: "Thank you for booking a Sidqly demo. We look forward to discussing your giving operations.",
      next: "Check your email for the Calendly confirmation and meeting link."
    },
    contact: {
      title: "Message Received",
      desc: "Thank you for reaching out to the Sidqly team. We typically respond within 24 hours.",
      next: "While you wait, feel free to explore our implementation guide."
    },
    pricing: {
      title: "Inquiry Received",
      desc: "Thank you for your interest in Sidqly. Our team will review your organization details shortly.",
      next: "We will contact you via email to discuss the best plan for your needs."
    },
    default: {
      title: "Thank You",
      desc: "Your submission has been received by the Sidqly team.",
      next: "We appreciate your interest in professionalizing your giving operations."
    }
  };

  const active = content[type || 'default'];

  return (
    <>
      <SEO title="Thank You" canonical="/thank-you" noindex={true} />
      <section className="py-20 bg-sidqly-ivory min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-sidqly-green-soft/30 rounded-full flex items-center justify-center text-sidqly-green-deep mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">{active.title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{active.desc}</p>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-12">
             <p className="text-sidqly-green-deep font-bold italic">{active.next}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Go Home</Link>
             <Link to="/implementation" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Implementation Guide <ArrowRight size={18} />
             </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4">
             <a href={brand.calendlyUrl} className="p-6 bg-white rounded-2xl border border-gray-50 text-center group">
                <Calendar className="mx-auto mb-3 text-gray-300 group-hover:text-sidqly-green-emerald transition-colors" />
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Book Demo</div>
             </a>
             <a href={`mailto:${brand.email}`} className="p-6 bg-white rounded-2xl border border-gray-50 text-center group">
                <MessageSquare className="mx-auto mb-3 text-gray-300 group-hover:text-sidqly-green-emerald transition-colors" />
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</div>
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
