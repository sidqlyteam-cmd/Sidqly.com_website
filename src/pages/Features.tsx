import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2, Shield, Users, BarChart, Zap, Globe } from 'lucide-react';
import OperatingJourney from '../components/diagrams/OperatingJourney';
import ManualPaymentReview from '../components/diagrams/ManualPaymentReview';
import { generateWebPageSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/schema';

const Features: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Sidqly Features | Donation Verification, Proof Approval & Reporting",
        "Explore Sidqly features for Islamic giving teams, including manual payment review, proof approval workflows, donor updates, fund separation, and reporting.",
        "/features"
      ),
      generateServiceSchema("Sidqly Platform Features", "Manual payment review, proof approval workflows, and reporting.", "/features"),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Features", item: "/features" }
      ])
    ]
  };

  const featureGroups = [
    {
      title: "Trust & Verification",
      icon: <Shield className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Manual payment review for all donations",
        "Zakat and Sadaqah fund separation",
        "Verified audit trails for every transaction",
        "Role-based access control for team safety"
      ]
    },
    {
      title: "Impact & Dignity",
      icon: <Users className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Proof Trust Engine for impact verification",
        "Automated face-blurring for recipient privacy",
        "Secure donor-safe impact links",
        "Professional certificates and receipts"
      ]
    },
    {
      title: "Operations & Efficiency",
      icon: <Zap className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Dedicated Qurbani share tracking",
        "Ramadan meal distribution management",
        "Vendor fulfillment portal and tasking",
        "Volunteer shift and hours tracking"
      ]
    },
    {
      title: "Reporting & Insights",
      icon: <BarChart className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Board-ready impact dashboards",
        "Real-time donor update system",
        "Customizable reporting exports",
        "Case screening and eligibility review"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Sidqly Features | Donation Verification, Proof Approval & Reporting"
        description="Explore Sidqly features for Islamic giving teams, including manual payment review, proof approval workflows, donor updates, fund separation, and reporting."
        canonical="/features"
        schema={schema}
      />
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">Powerful features for professional teams.</h1>
          <p className="text-xl text-sidqly-green-soft text-center max-w-3xl mx-auto mb-16">
            From donor-safe proof to audit-ready records for leadership. Build trust with a clearer operating flow.
          </p>
          <OperatingJourney />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
             <ManualPaymentReview />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {featureGroups.map((group, i) => (
              <div key={i} className="bg-sidqly-ivory p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-6">{group.title}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-sidqly-green-emerald mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Global Coverage</h2>
             <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Sidqly features are designed to scale across different regions and regulatory environments.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {['United Kingdom', 'Europe', 'United States', 'Canada', 'Gulf / MENA'].map((name) => (
                   <div key={name} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center gap-2">
                      <Globe size={14} className="text-sidqly-green-emerald" />
                      <span className="text-xs font-bold text-sidqly-navy">{name}</span>
                   </div>
                ))}
             </div>
             <div className="mt-8">
                <Link to="/regions" className="text-sidqly-green-deep font-bold text-sm hover:underline">View all regions →</Link>
             </div>
          </div>

          <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Save hundreds of hours every month.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">90%</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Reduction in manual proof tasks</div>
             </div>
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">100%</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Zakat fund separation audit trail</div>
             </div>
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">Seconds</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">To generate board reports</div>
             </div>
          </div>
          <div className="mt-16">
             <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-block">
                See it in action
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
