import React from 'react';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { Database, Shield, AlertTriangle, ArrowRight, Lock } from 'lucide-react';
import { tokens } from '../design/tokens';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';

const DataMigration: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Data Migration", item: "/data-migration" }
      ])
    ]
  };

  const preparationSteps = [
    { title: "Export current lists", desc: "Download all donor, volunteer, and campaign records from Excel or WhatsApp contact backups." },
    { title: "De-duplicate contacts", desc: "Filter out duplicate names, emails, or phone numbers to maintain accurate operational files." },
    { title: "Clean transactional histories", desc: "Reconcile past manual receipts or bank entries to establish an accurate operational baseline." },
    { title: "Review with our migration desk", desc: "Our specialists will map your cleaned files directly to Sidqly's database structure safely." }
  ];

  return (
    <PageTransition>
      <SEO
        title="Sidqly Data Migration | Move Securely from Excel & WhatsApp"
        description="Learn how to safely migrate your donor lists, campaigns, and Zakat case files from spreadsheets and chat logs to Sidqly's secure platform."
        canonical="/data-migration"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Secure Data Migration</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed mb-10">
              Stop relying on scattered spreadsheets and WhatsApp groups. Learn how Sidqly securely transitions your team into standard, audit-ready database configurations with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="emerald" onClick={() => window.location.href = "/guided-pilot"}>
                Start a Guided Pilot
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = "/contact-sales"}>
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy">The Transition Process</h2>
            <p className="text-gray-600 mt-4 text-lg">Four steps to absolute clarity and professionalization.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {preparationSteps.map((step, i) => (
              <Card variant="ivory" key={i} className="flex flex-col items-start hoverable">
                <div className="w-10 h-10 rounded-xl bg-sidqly-navy text-white flex items-center justify-center font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-sidqly-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy Policy */}
      <section className="py-20 bg-sidqly-ivory border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="white" className="p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-4xl font-bold text-sidqly-navy mb-6 text-center flex items-center justify-center gap-2">
              <Shield className="text-sidqly-green-emerald" size={tokens.iconSizes.xl} /> Data Safety & Privacy Guaranteed
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              We understand that the information you hold is a trust (Amanah). Our platform enforces state-of-the-art security practices to ensure maximum protection.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-sidqly-ivory text-sidqly-green-deep flex items-center justify-center flex-shrink-0">
                  <Lock size={tokens.iconSizes.md} />
                </div>
                <div>
                  <h4 className="font-bold text-sidqly-navy mb-1">Row-Level Access Boundaries</h4>
                  <p className="text-xs text-gray-500">Only authorized members of your team can access sensitive files or distribution records. Field volunteers and vendors only see assigned tasks with zero donor-personal information exposed.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-sidqly-ivory text-sidqly-green-deep flex items-center justify-center flex-shrink-0">
                  <Database size={tokens.iconSizes.md} />
                </div>
                <div>
                  <h4 className="font-bold text-sidqly-navy mb-1">Encrypted In-Transit & At-Rest</h4>
                  <p className="text-xs text-gray-500">All uploaded data files and donor lists are encrypted using industry-standard SSL/TLS algorithms during transit and AES-256 standards at rest.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-sidqly-ivory text-sidqly-green-deep flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={tokens.iconSizes.md} />
                </div>
                <div>
                  <h4 className="font-bold text-sidqly-navy mb-1">Strict No-Sell Policy</h4>
                  <p className="text-xs text-gray-500">Sidqly never monitors, reviews, rents, or sells any donor histories or contact records to third parties. Your database is solely yours.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-6">Are you ready to migrate?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Begin with our Guided Pilot program to test migration on a single category, such as Zakat list management or a specific seasonal campaign.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="deep" className="flex items-center gap-2" onClick={() => window.location.href = "/guided-pilot"}>
              Apply for Pilot <ArrowRight size={tokens.iconSizes.sm} />
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default DataMigration;
