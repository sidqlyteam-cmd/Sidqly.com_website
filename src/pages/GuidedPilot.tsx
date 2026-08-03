import React, { useState } from 'react';
import SEO from '../components/SEO';
import { trackEvent } from '../lib/analytics';
import { generateBreadcrumbSchema } from '../lib/schema';
import { CheckCircle2, Shield, Heart, HelpCircle, FileText, Users, Settings, Database } from 'lucide-react';
import { tokens } from '../design/tokens';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { PageTransition } from '../components/ui/PageTransition';

const GuidedPilot: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    country: '',
    organizationType: '',
    teamSize: '',
    currentTools: '',
    mainProblem: '',
    donationVolume: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.organizationType) newErrors.organizationType = 'Please select your organization type';
    if (!formData.teamSize) newErrors.teamSize = 'Please select your team size';
    if (!formData.currentTools.trim()) newErrors.currentTools = 'Please describe your current tools';
    if (!formData.mainProblem.trim()) newErrors.mainProblem = 'Please describe your main operational problem';
    if (!formData.donationVolume) newErrors.donationVolume = 'Please select monthly donation volume';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Track application event
    trackEvent('guided_pilot_apply', {
      organization_type: formData.organizationType,
      team_size: formData.teamSize,
      donation_volume: formData.donationVolume,
      country: formData.country,
      cta_source: 'guided_pilot_page_form'
    });

    setSubmitted(true);
  };

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
            <a href="#apply-form" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block">
              Apply for Guided Pilot
            </a>
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
          <Card variant="white" className="p-8 md:p-12 shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-sidqly-green-soft/30 text-sidqly-green-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={tokens.iconSizes.xxl} />
                </div>
                <h3 className="text-3xl font-bold text-sidqly-navy mb-4">Pilot Application Submitted!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for applying. A Sidqly representative will review your organization details within 24-48 business hours.
                </p>
                <div className="bg-sidqly-ivory p-6 rounded-2xl text-left max-w-lg mx-auto border border-gray-100 mb-8">
                  <h4 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                    <Database size={tokens.iconSizes.sm} className="text-sidqly-green-deep" /> Next Steps:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2 items-start">
                      <span className="font-bold text-sidqly-navy">1.</span>
                      <span>Review of your operational challenges & current tools by our team.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-bold text-sidqly-navy">2.</span>
                      <span>A schedule link will be sent to your email to set up your pilot kick-off call.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-bold text-sidqly-navy">3.</span>
                      <span>Guided migration of your initial list into your custom sandbox.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="deep"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-sidqly-navy mb-2">Apply for Guided Pilot</h3>
                  <p className="text-gray-500 text-sm">Fill out the fields below and we'll design a customized roadmap for your organization.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Organization Name"
                    required
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    error={errors.organizationName}
                    placeholder="e.g. Al-Noor Mosque"
                  />

                  <Input
                    label="Country"
                    required
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    error={errors.country}
                    placeholder="e.g. Pakistan, United Kingdom"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Select
                    label="Organization Type"
                    required
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    error={errors.organizationType}
                    options={[
                      { value: 'mosque', label: 'Mosque' },
                      { value: 'charity', label: 'Islamic Charity' },
                      { value: 'zakat_committee', label: 'Zakat Committee' },
                      { value: 'campaign_group', label: 'Seasonal Campaign Group' },
                      { value: 'other', label: 'Other' }
                    ]}
                  />

                  <Select
                    label="Team Size"
                    required
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    error={errors.teamSize}
                    options={[
                      { value: '1-5', label: '1 - 5 members' },
                      { value: '6-15', label: '6 - 15 members' },
                      { value: '16-50', label: '16 - 50 members' },
                      { value: '50+', label: '50+ members' }
                    ]}
                  />
                </div>

                <Input
                  label="What tools do you currently use?"
                  required
                  id="currentTools"
                  name="currentTools"
                  value={formData.currentTools}
                  onChange={handleInputChange}
                  error={errors.currentTools}
                  placeholder="e.g. WhatsApp, Excel, paper folders"
                />

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-sidqly-navy" htmlFor="mainProblem">
                    What is your main operational problem? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mainProblem"
                    name="mainProblem"
                    rows={3}
                    value={formData.mainProblem}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sidqly-green-soft text-sm ${
                      errors.mainProblem ? 'border-red-500 focus:ring-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Please explain the primary bottleneck (e.g., matching screenshots manually, chasing vendors for proof)."
                  />
                  {errors.mainProblem && <p className="text-xs text-red-500 font-medium">{errors.mainProblem}</p>}
                </div>

                <Select
                  label="Monthly Donation Volume Range"
                  required
                  id="donationVolume"
                  name="donationVolume"
                  value={formData.donationVolume}
                  onChange={handleInputChange}
                  error={errors.donationVolume}
                  options={[
                    { value: 'under_5k', label: 'Under $5,000' },
                    { value: '5k_20k', label: '$5,000 - $20,000' },
                    { value: '20k_100k', label: '$20,000 - $100,000' },
                    { value: 'above_100k', label: 'Above $100,000' }
                  ]}
                />

                <Button
                  type="submit"
                  variant="deep"
                  className="w-full mt-4"
                >
                  Apply for Guided Pilot
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

export default GuidedPilot;
