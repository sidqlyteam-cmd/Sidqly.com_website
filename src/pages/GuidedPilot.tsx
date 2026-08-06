import React from 'react';
import SEO from '../components/SEO';
import { trackEvent } from '../lib/analytics';
import { generateBreadcrumbSchema } from '../lib/schema';
import { CheckCircle2, Shield, Heart, HelpCircle, FileText, Users, Settings, Database } from 'lucide-react';
import { tokens } from '../design/tokens';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';
import { LeadCaptureCTA } from '../components/LeadCaptureCTA';

const GuidedPilot: React.FC = () => {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Guided Pilot", item: "/guided-pilot" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Sidqly Guided Pilot Program | Onboarding & Setup for SME Islamic Charities"
        description="Launch a risk-free 30-day guided pilot of Sidqly. Designed specifically for SME mosques, Zakat committees, and Ramadan/Qurbani campaign teams."
        canonical="/guided-pilot"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Sidqly Guided Pilot Program</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed mb-10">
              Transform your manual workflows (WhatsApp, spreadsheets, paper receipts) into a structured, audit-ready giving process. Experience absolute operational clarity with dedicated support.
            </p>
            <LeadCaptureCTA
              label="Apply for Guided Pilot"
              placement="guided_pilot_page_hero"
              inquiryContext="guided_pilot_program"
              className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block focus:ring-2 focus:ring-sidqly-green-soft focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy">What is the Guided Pilot?</h2>
            <p className="text-gray-600 mt-4 text-lg">A structured, low-risk way for growing organizations to adopt Sidqly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Users size={tokens.iconSizes.lg} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">Who It Is For</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specifically built for Small to Medium (SME) Islamic charities, local mosques, volunteer-led Zakat committees, and seasonal campaign groups who are currently using manual or scattered methods.
              </p>
            </Card>

            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Settings size={tokens.iconSizes.lg} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">What's Included</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Includes full core module access, custom setup of your initial giving workflow (e.g. Zakat review, manual bank reconciliation, or Sadaqah collection), live team training, and weekly operations support.
              </p>
            </Card>

            <Card variant="ivory" className="flex flex-col items-start">
              <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <FileText size={tokens.iconSizes.lg} />
              </div>
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">What Happens After</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After the 30-day pilot, we prepare a complete board-ready impact report. If you choose to continue, we seamlessly transition your account into one of our standard annual plans with zero data loss.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy">Transparent Pilot Pricing</h2>
            <p className="text-gray-600 mt-4 text-lg">Simple, fair tiers with no hidden fees or automatic renewals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="white" className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-2">Standard Pilot</h3>
                <p className="text-gray-500 text-sm mb-6">Perfect for single campaigns or focused community initiatives.</p>
                <div className="text-3xl font-extrabold text-sidqly-navy mb-6">$150 - $300 <span className="text-sm font-normal text-gray-500">flat fee for 30 days</span></div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Setup of 1 custom giving category</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Upload of up to 500 active contacts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> 1 live team training session</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Standard email support</li>
                </ul>
              </div>
            </Card>

            <Card variant="white" className="border-sidqly-green-emerald shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sidqly-green-emerald text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
              <div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-2">Comprehensive Pilot</h3>
                <p className="text-gray-500 text-sm mb-6">Designed for organizations managing multiple funds or campaigns.</p>
                <div className="text-3xl font-extrabold text-sidqly-navy mb-6">$300 - $600 <span className="text-sm font-normal text-gray-500">flat fee for 30 days</span></div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Setup of up to 3 giving categories</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Custom data migration assistance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> 2 interactive training sessions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={16} /> Priority support & board-ready analysis</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield size={tokens.iconSizes.md} />
              </div>
              <div>
                <h4 className="font-bold text-sidqly-navy mb-1">Absolute Privacy</h4>
                <p className="text-sm text-gray-600">Your data belongs to you. We strictly limit operational information visibility, ensuring complete data ownership and safety.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart size={tokens.iconSizes.md} />
              </div>
              <div>
                <h4 className="font-bold text-sidqly-navy mb-1">Shariah-Conscious</h4>
                <p className="text-sm text-gray-600">Our features respect the separation of funds, preserving Zakat eligibility rules and protecting the absolute dignity of recipients.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-sidqly-ivory text-sidqly-green-deep rounded-xl flex items-center justify-center flex-shrink-0">
                <HelpCircle size={tokens.iconSizes.md} />
              </div>
              <div>
                <h4 className="font-bold text-sidqly-navy mb-1">Uncompromising Amanah</h4>
                <p className="text-sm text-gray-600">We do not construct fake reviews, testimonials, or numbers. Sidqly acts purely as a technical partner built on accountability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="py-20 bg-sidqly-ivory scroll-mt-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="white" className="p-8 md:p-12 shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-sidqly-green-soft/30 text-sidqly-green-emerald rounded-full flex items-center justify-center mx-auto mb-6">
              <Database size={tokens.iconSizes.xl} />
            </div>
            <h3 className="text-3xl font-bold text-sidqly-navy mb-4">Start Your Guided Pilot Transition</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              We have consolidated our onboarding and application workflows into our approved, single Sidqly Google Form to ensure secure, streamlined lead handling. Click below to submit your details securely.
            </p>
            <div className="bg-sidqly-ivory p-6 rounded-2xl text-left max-w-lg mx-auto border border-gray-100 mb-8">
              <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                <Database size={tokens.iconSizes.sm} className="text-sidqly-green-deep" /> What Happens Next:
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">1.</span>
                  <span>Submission of your organization metrics through our secure Google Form.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">2.</span>
                  <span>Direct team review of your current spreadsheets and WhatsApp workflows.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-sidqly-navy">3.</span>
                  <span>Custom roadmap preparation and sandbox setup for your 30-day pilot.</span>
                </li>
              </ul>
            </div>
            <LeadCaptureCTA
              label="Open Pilot Application Form"
              placement="guided_pilot_page_bottom"
              inquiryContext="guided_pilot_program"
              className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:shadow-lg transition-all inline-block w-full sm:w-auto focus:ring-2 focus:ring-sidqly-green-soft focus:outline-none"
            />
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

export default GuidedPilot;
