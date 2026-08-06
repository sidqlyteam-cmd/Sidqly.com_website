import React from 'react';
import SEO from '../components/SEO';
import { trackEvent } from '../lib/analytics';
import { generateBreadcrumbSchema } from '../lib/schema';
import { CheckCircle2, Shield, Globe, Award } from 'lucide-react';
import { tokens } from '../design/tokens';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';
import { LeadCaptureCTA } from '../components/LeadCaptureCTA';

const ContactSales: React.FC = () => {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Contact Sales", item: "/contact-sales" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Sidqly Enterprise Sales | Partnerships & Large Islamic Charities"
        description="Connect with our sales and partnerships team to discuss custom integrations, multiple branch operations, and enterprise-grade reporting."
        canonical="/contact-sales"
        schema={schema}
      />

      {/* Hero Header */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Enterprise & Partnerships Desk</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              Tailored solutions for large-scale NGOs, corporate Zakat distributors, international networks, and custom integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-sidqly-navy text-white flex items-center justify-center font-bold mb-6">
                <Globe size={tokens.iconSizes.sm} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2">Multi-Region Entities</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Coordinate cross-border campaigns and localized distribution proofs while maintaining strict regional tax or compliance logs.</p>
            </Card>

            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-sidqly-navy text-white flex items-center justify-center font-bold mb-6">
                <Award size={tokens.iconSizes.sm} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2">Shariah Board Advisory</h4>
              <p className="text-xs text-gray-600 leading-relaxed">We work alongside your Shariah scholars or audit board to configure custom rules that match your distribution guidelines precisely.</p>
            </Card>

            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-sidqly-navy text-white flex items-center justify-center font-bold mb-6">
                <Shield size={tokens.iconSizes.sm} />
              </div>
              <h4 className="font-bold text-sidqly-navy mb-2">SLA & Priority Support</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Dedicated account manager, custom data migration engineering, and guaranteed uptime agreements for major campaigns.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="white" className="p-8 md:p-12 shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-sidqly-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={tokens.iconSizes.xl} />
            </div>
            <h3 className="text-3xl font-bold text-sidqly-navy mb-4">Connect with Enterprise Sales</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              We have consolidated our sales and partnership workflows into our approved, single Sidqly Google Form to ensure secure, streamlined lead handling. Click below to submit your requirements.
            </p>
            <div className="bg-sidqly-ivory p-6 rounded-2xl text-left max-w-lg mx-auto border border-gray-100 mb-8">
              <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                <CheckCircle2 size={tokens.iconSizes.sm} className="text-sidqly-green-deep" /> Enterprise Onboarding:
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">1.</span>
                  <span>Fill out your scale and customized SLA/integration requirements on the Google Form.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">2.</span>
                  <span>An enterprise deployment consultant will review and prepare a custom proposal outline.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">3.</span>
                  <span>Introductory call to define project timelines and onboarding resources.</span>
                </li>
              </ul>
            </div>
            <LeadCaptureCTA
              label="Open Sales Inquiry Form"
              placement="contact_sales_page_bottom"
              inquiryContext="enterprise_sales"
              className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:shadow-lg transition-all inline-block w-full sm:w-auto focus:ring-2 focus:ring-sidqly-green-soft focus:outline-none"
            />
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactSales;
