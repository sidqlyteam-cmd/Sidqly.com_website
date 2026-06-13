import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Settings } from 'lucide-react';

const Implementation: React.FC = () => {
  const steps = [
    { title: "Discovery", desc: "We review your current manual workflows and identify organization-specific needs." },
    { title: "Module Selection", desc: "Choose the specific Sidqly modules (Zakat, Qurbani, etc.) that match your services." },
    { title: "Data & Workflow Mapping", desc: "Map your existing Excel data and WhatsApp processes to Sidqly's structured fields." },
    { title: "Team Setup", desc: "Configure roles and permissions for your team, vendors, and volunteers." },
    { title: "Payment & Proof Rules", desc: "Define your organization's internal standards for manual approval gates." },
    { title: "Pilot Launch", desc: "Go live with a single campaign to ensure team comfort and data accuracy." },
    { title: "Report Review", desc: "Generate and review your first board-ready impact reports." },
    { title: "Scale Up", desc: "Expand Sidqly to cover all service lines and long-term donor tracking." }
  ];

  return (
    <>
      <SEO title="Implementation Process" description="Learn how Sidqly handles the discovery, setup, and onboarding process for your organization." canonical="/implementation" />
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Guided Implementation</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              We don't just provide software; we provide a professional path to operational clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                   <div className="w-12 h-12 rounded-2xl bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep font-bold flex-shrink-0">
                      {i + 1}
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Settings className="mx-auto text-sidqly-green-deep mb-8" size={48} />
           <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Professional Onboarding</h2>
           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Our team assists with technical setup, data migration, and team training to ensure your organization starts on the right foot.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Setup Discussion</a>
           </div>
        </div>
      </section>
    </>
  );
};

export default Implementation;
