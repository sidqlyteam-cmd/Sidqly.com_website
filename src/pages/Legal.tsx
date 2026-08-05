import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Shield, FileText, ArrowRight, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import TrustLinkStrip from '../components/TrustLinkStrip';

const Legal: React.FC = () => {
  const corePolicies = [
    { title: "Privacy Policy", desc: "How we collect, use, and protect donor and administrative data.", href: "/privacy" },
    { title: "Terms of Service", desc: "Official rules and parameters for using the Sidqly platform.", href: "/terms" },
    { title: "Security Overview", desc: "Detailed breakdown of cloud infrastructure and data transit encryption.", href: "/security" },
    { title: "Accessibility Statement", desc: "Our formal commitment to inclusive design and accessible interfaces.", href: "/accessibility" },
    { title: "Billing & IBAN Details", desc: "Official banking references and payment details.", href: "/billing" }
  ];

  const operationalPolicies = [
    { title: "Data Processing & Handling", desc: "Logical separation, photo blurring pipelines, and GPS stripping details.", href: "/legal/data-handling" },
    { title: "Data Retention Policy", desc: "Retention durations, backup rolling schedules, and contract shredding cycles.", href: "/legal/data-retention" },
    { title: "Backup & Recovery Policy", desc: "Snapshot frequencies, geo-redundancy, and recovery Point/Time Objectives.", href: "/legal/backup-recovery" },
    { title: "Incident Response Overview", desc: "Security disclosure pathways and standard incident isolation protocols.", href: "/legal/incident-response" },
    { title: "Role-Based Access Control (RBAC)", desc: "Row-restricted task lists and Super Admin/Coordinator permissions.", href: "/legal/rbac" },
    { title: "Responsible AI Statement", desc: "Our commitment to human-in-the-loop controls and assistive image blurring.", href: "/legal/responsible-ai" },
    { title: "Recipient Dignity Standards", desc: "Guidelines for preventing unmodest beneficiary photos in the field.", href: "/legal/recipient-dignity" },
    { title: "Support & Implementation Model", desc: "Structured 3-week onboarding pathways and SLA response metrics.", href: "/legal/support-implementation" },
    { title: "Service Boundaries & Limitations", desc: "Transparent limits outlining what is technically included vs. excluded.", href: "/legal/service-boundaries" }
  ];

  return (
    <>
      <SEO
        title="Legal & Compliance Directory"
        description="Official operational policies, service boundaries, data processing, and security disclosures governing the Sidqly platform."
        canonical="/legal"
      />

      <TrustLinkStrip />

      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-6">Legal & Compliance</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transparent, non-legal-jargon disclosures of Sidqly's actual operational policies.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Core Legal Documents */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-sidqly-green-deep mb-2">
                <ShieldCheck size={24} />
                <h2 className="text-2xl font-extrabold text-sidqly-navy">Core Legal Policies</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Standard platform agreements and security declarations defining user terms and data privacy constraints:
              </p>

              <div className="space-y-4">
                {corePolicies.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="block bg-white p-6 rounded-2xl border border-gray-100/60 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sidqly-ivory rounded-xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors">{link.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Operational Policies */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-sidqly-green-deep mb-2">
                <Layers size={24} />
                <h2 className="text-2xl font-extrabold text-sidqly-navy">Operational Policies</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Detailed declarations specifying actual software behaviors, support schedules, implementation pathways, and service limitations:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {operationalPolicies.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="block bg-white p-5 rounded-2xl border border-gray-100/60 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group"
                  >
                    <h3 className="text-sm font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors mb-2">{link.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{link.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-sidqly-green-deep opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Policy <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Commitment Box */}
          <div className="mt-20 bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px] text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-24 -translate-y-24" />
             <div className="relative z-10 max-w-2xl mx-auto">
               <HeartHandshake className="mx-auto mb-6 text-sidqly-green-soft" size={48} />
               <h3 className="text-2xl md:text-3xl font-extrabold mb-4">The Standard of Amanah & Trust</h3>
               <p className="text-gray-300 text-sm leading-relaxed mb-6">
                 Legal compliance is only one part of our mission. We are committed to the highest standards of Islamic integrity, recipient modesty, and software transparency in every line of code we write.
               </p>
               <div className="inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold text-gray-400">
                 <Shield size={14} className="text-sidqly-green-emerald" /> Remote SaaS Platform • 0 Fabricated Claims
               </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Legal;
