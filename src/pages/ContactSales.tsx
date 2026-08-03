import React, { useState } from 'react';
import SEO from '../components/SEO';
import { trackEvent } from '../lib/analytics';
import { generateBreadcrumbSchema } from '../lib/schema';
import { CheckCircle2, Shield, Globe, Award } from 'lucide-react';
import { tokens } from '../design/tokens';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { PageTransition } from '../components/ui/PageTransition';

const ContactSales: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organizationName: '',
    requirements: '',
    useCase: '',
    estimatedVolume: ''
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

    // Basic validations
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) newErrors.email = 'Work email is required';
    if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData.requirements.trim()) newErrors.requirements = 'Requirements details are required';
    if (!formData.useCase) newErrors.useCase = 'Please select a primary use case';
    if (!formData.estimatedVolume) newErrors.estimatedVolume = 'Please select estimated annual volume';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Track Sales Submission
    trackEvent('contact_submit', {
      use_case: formData.useCase,
      estimated_volume: formData.estimatedVolume,
      cta_source: 'contact_sales_page'
    });

    setSubmitted(true);
  };

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
          <Card variant="white" className="p-8 md:p-12 shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-sidqly-green-soft/30 text-sidqly-green-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={tokens.iconSizes.xxl} />
                </div>
                <h3 className="text-3xl font-bold text-sidqly-navy mb-4">Inquiry Received!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for contacting Enterprise Sales. An enterprise consultant will reach out via your work email address within 24 business hours to set up an introductory consultation.
                </p>
                <Button
                  variant="deep"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-sidqly-navy mb-2">Connect with Enterprise Sales</h3>
                  <p className="text-gray-500 text-sm">Please share your business requirements below to help us prepare our response.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    required
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    placeholder="e.g. Ibrahim Qadir"
                  />

                  <Input
                    label="Work Email"
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    placeholder="e.g. ibrahim@ngo-global.org"
                  />
                </div>

                <Input
                  label="Organization Name"
                  required
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  error={errors.organizationName}
                  placeholder="e.g. Global Compassion Network"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <Select
                    label="Primary Use Case"
                    required
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    error={errors.useCase}
                    options={[
                      { value: 'enterprise_ngo', label: 'Large-Scale NGO' },
                      { value: 'shariah_advisory', label: 'Scholarly Audit / Shariah Board' },
                      { value: 'corporate_zakat', label: 'Corporate CSR / Zakat Separation' },
                      { value: 'partnership', label: 'Custom Integration Partnership' }
                    ]}
                  />

                  <Select
                    label="Estimated Annual Volume"
                    required
                    id="estimatedVolume"
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleInputChange}
                    error={errors.estimatedVolume}
                    options={[
                      { value: 'under_500k', label: 'Under $500k' },
                      { value: '500k_2m', label: '$500k - $2M' },
                      { value: '2m_10m', label: '$2M - $10M' },
                      { value: 'above_10m', label: 'Above $10M' }
                    ]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-sidqly-navy" htmlFor="requirements">
                    Describe Your Requirements & Complex Needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sidqly-green-soft text-sm ${
                      errors.requirements ? 'border-red-500 focus:ring-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about custom dashboard limits, scholar board alignment, specific ERP system integrations, or campaign timelines."
                  />
                  {errors.requirements && <p className="text-xs text-red-500 font-medium">{errors.requirements}</p>}
                </div>

                <Button
                  type="submit"
                  variant="deep"
                  className="w-full mt-4"
                >
                  Contact Sales Team
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactSales;
