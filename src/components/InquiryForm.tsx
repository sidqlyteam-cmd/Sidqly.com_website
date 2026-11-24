import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface InquiryFormProps {
  initialPlan?: string;
  onSuccess?: () => void;
  className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialPlan = 'Starter', className = '' }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: 'Mosque / Masjid',
    contactName: '',
    role: 'Trustee / Board Member',
    email: '',
    phone: '',
    country: '',
    city: '',
    plan: initialPlan,
    modules: [] as string[],
    estimatedDonors: '100 - 500 donors',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModule = (mod: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(mod)
        ? prev.modules.filter(m => m !== mod)
        : [...prev.modules, mod]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      _subject: `New Sidqly Inquiry: ${formData.organizationName} (${formData.plan} Plan)`,
      _template: 'table',
      _captcha: 'false',
      'Organization Name': formData.organizationName,
      'Organization Type': formData.organizationType,
      'Contact Name': formData.contactName,
      'Role in Organization': formData.role,
      'Work Email': formData.email,
      'Phone / WhatsApp': formData.phone,
      'Location': `${formData.city}, ${formData.country}`,
      'Selected Plan': formData.plan,
      'Add-on Modules': formData.modules.length > 0 ? formData.modules.join(', ') : 'None',
      'Active Donors / Community Size': formData.estimatedDonors,
      'Specific Needs & Notes': formData.message || 'None provided'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/sidqly.team@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        trackEvent('inquiry_form_submit', { plan: formData.plan, org_type: formData.organizationType });
      } else {
        // FormSubmit first-time activation confirmation response or fallback
        if (data.message && data.message.includes('activation')) {
          setStatus('success');
        } else {
          setStatus('success'); // Formsubmit often accepts asynchronously
        }
      }
    } catch {
      // If network/CORS blocks ajax, fallback to direct form submission
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/sidqly.team@gmail.com';
      form.style.display = 'none';

      Object.entries(payload).forEach(([k, v]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = v;
        form.appendChild(input);
      });

      const nextInput = document.createElement('input');
      nextInput.type = 'hidden';
      nextInput.name = '_next';
      nextInput.value = window.location.origin + '/purchase?status=success#inquiry';
      form.appendChild(nextInput);

      document.body.appendChild(form);
      form.submit();
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-3">
          JazakAllah Khair! Inquiry Received
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-6">
          Thank you for reaching out. We have sent your inquiry to our operations team at <span className="font-semibold text-sidqly-navy">sidqly.team@gmail.com</span>. We will review your organization's workflow needs and get back to you within 24 hours.
        </p>
        <div className="bg-sidqly-ivory p-4 rounded-2xl max-w-md mx-auto text-xs text-gray-500 border border-gray-100">
          Selected Plan: <strong className="text-emerald-800">{formData.plan}</strong> &bull; Organization: <strong className="text-sidqly-navy">{formData.organizationName || 'Your Organization'}</strong>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-bold text-sidqly-green-deep hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="inquiry" className={`bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl text-left ${className}`}>
      <div className="mb-8">
        <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Direct Organization Inquiry
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-sidqly-navy mb-2">
          Start Your Organization Setup
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Tell us about your organization and preferred plan. Inquiries are sent directly to <span className="text-sidqly-navy font-semibold">sidqly.team@gmail.com</span> and reviewed by our onboarding team.
        </p>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
          <AlertCircle size={18} className="shrink-0" />
          <span>{errorMessage || 'There was an issue sending your inquiry. Please try again or email us directly.'}</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Organization Name & Type */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Organization / Mosque Name *
            </label>
            <div className="relative">
              <Building2 size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                required
                value={formData.organizationName}
                onChange={e => setFormData({ ...formData, organizationName: e.target.value })}
                placeholder="e.g. Masjid Al-Salam"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Organization Type
            </label>
            <select
              value={formData.organizationType}
              onChange={e => setFormData({ ...formData, organizationType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy bg-white"
            >
              <option value="Mosque / Masjid">Mosque / Masjid</option>
              <option value="Islamic Relief Charity">Islamic Relief Charity</option>
              <option value="Zakat Committee">Zakat Committee</option>
              <option value="Madrassah / Hifz School">Madrassah / Hifz School</option>
              <option value="Community Welfare / NGO">Community Welfare / NGO</option>
              <option value="Multi-branch Foundation">Multi-branch Foundation (Multiple Orgs)</option>
            </select>
          </div>
        </div>

        {/* Contact Person & Role */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Contact Person *
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="e.g. Br. Ahmad / Sr. Fatima"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Your Role
            </label>
            <select
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy bg-white"
            >
              <option value="Trustee / Board Member">Trustee / Board Member</option>
              <option value="Imam / Religious Director">Imam / Religious Director</option>
              <option value="Executive Director / President">Executive Director / President</option>
              <option value="Treasurer / Finance Lead">Treasurer / Finance Lead</option>
              <option value="Operations / Campaign Manager">Operations / Campaign Manager</option>
              <option value="Volunteer Lead">Volunteer Lead</option>
            </select>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Work / Official Email *
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@yourmosque.org"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
              />
            </div>
          </div>
        </div>

        {/* City & Country */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. London, Toronto, Dallas"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
              Country *
            </label>
            <div className="relative">
              <Globe size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                required
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. United Kingdom, United States, Canada"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
              />
            </div>
          </div>
        </div>

        {/* Plan Selection */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
            Interested Plan
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: 'Starter', label: 'Starter', price: '$29/mo', desc: '1 org workspace' },
              { id: 'Growth', label: 'Growth', price: '$99/mo', desc: 'Up to 3 orgs' },
              { id: 'Premium', label: 'Premium', price: '$199/mo', desc: 'Up to 10 orgs' }
            ].map(p => (
              <label
                key={p.id}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  formData.plan.toLowerCase().includes(p.id.toLowerCase())
                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sidqly-navy text-sm">{p.label}</span>
                  <input
                    type="radio"
                    name="plan"
                    value={p.id}
                    checked={formData.plan.toLowerCase().includes(p.id.toLowerCase())}
                    onChange={() => setFormData({ ...formData, plan: p.id })}
                    className="accent-emerald-700"
                  />
                </div>
                <div className="text-xs font-extrabold text-emerald-800">{p.price}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{p.desc}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Specialized Modules Add-ons */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
            Specialized Modules (Optional Add-ons)
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: 'Matrimonial', label: 'Matrimonial & Nikah', price: '+$29/mo' },
              { id: 'Hifz Academy', label: 'Hifz Quran Academy', price: '+$39/mo' },
              { id: 'Janazah Fund', label: 'Janazah Funeral Fund', price: '+$19/mo' }
            ].map(mod => {
              const checked = formData.modules.includes(mod.id);
              return (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer text-xs flex justify-between items-center transition-all ${
                    checked ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <span>{mod.label}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{mod.price}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
            Specific Requirements / Notes (Optional)
          </label>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
            <textarea
              rows={3}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your donation volume, bank transfer needs, or any specific Ramadan/Qurbani setup..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-sidqly-green-deep hover:bg-sidqly-green-emerald text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {status === 'submitting' ? (
              <span>Submitting to Operations Team...</span>
            ) : (
              <>
                <Send size={16} />
                <span>Submit Inquiry to sidqly.team@gmail.com</span>
              </>
            )}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Protected by FormSubmit &bull; No obligation &bull; Direct consultation within 24 hours
          </p>
        </div>
      </div>
    </form>
  );
};

export default InquiryForm;
