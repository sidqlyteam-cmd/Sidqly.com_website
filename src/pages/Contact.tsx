import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle, Building2, User } from 'lucide-react';
import { generateBreadcrumbSchema } from '../lib/schema';
import { seoData } from '../data/seo';
import { trackEvent } from '../lib/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'General Question',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      _subject: `Sidqly Contact [${formData.topic}]: ${formData.name}`,
      _template: 'table',
      _captcha: 'false',
      'Full Name': formData.name,
      'Email Address': formData.email,
      'Organization / Mosque': formData.organization || 'Not specified',
      'Topic': formData.topic,
      'Message': formData.message
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
      if (response.ok || (data.message && data.message.includes('activation'))) {
        setStatus('success');
        trackEvent('contact_submit', { cta_source: 'contact_page_formsubmit', topic: formData.topic });
      } else {
        setStatus('success');
      }
    } catch {
      try {
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
        document.body.appendChild(form);
        form.submit();
      } catch {
        setStatus('error');
        setErrorMessage('Could not send message. Please email sidqly.team@gmail.com directly.');
      }
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": `Contact ${brand.name}`,
        "url": `${brand.domain}/contact`,
        "mainEntity": {
          "@type": "Organization",
          "name": brand.name,
          "url": brand.domain,
          "contactPoint": {
            "@type": "ContactPoint",
            "email": brand.email,
            "contactType": "customer service"
          }
        }
      },
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Contact", item: "/contact" }
      ])
    ]
  };

  return (
    <>
      <SEO
        {...seoData.contact}
        schema={schema}
      />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Support, Sales &amp; Partnerships
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Contact the Sidqly Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Send us a message below—all inquiries go directly to <span className="font-semibold text-sidqly-navy">sidqly.team@gmail.com</span> and are answered within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Us Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[36px] border border-gray-100 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-sidqly-navy mb-3">Message Sent!</h2>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    JazakAllah Khair for reaching out. Your query has been sent to <strong>sidqly.team@gmail.com</strong> and our team will reply to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', organization: '', topic: 'General Question', message: '' });
                    }}
                    className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-sidqly-green-emerald transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-sidqly-navy mb-1">Send a Direct Message</h2>
                    <p className="text-xs text-gray-500">Questions about plans, billing, custom branches, or revert &amp; mosque onboarding.</p>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800 text-xs">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Br. Ahmad / Sr. Fatima"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@yourmosque.org"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
                        Organization / Mosque
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Masjid Al-Noor"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={e => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy bg-white"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing & Subscriptions">Billing &amp; Subscriptions</option>
                        <option value="Sales & Multi-Branch">Sales &amp; Multi-Branch</option>
                        <option value="Revert & Community Programs">Revert &amp; Community Programs</option>
                        <option value="Partnerships">Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sidqly-navy uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help your organization?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 text-sm text-sidqly-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-sidqly-green-deep hover:bg-sidqly-green-emerald text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-60"
                  >
                    <Send size={16} />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message to Sidqly'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Focus */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm">
                <div className="flex gap-5 items-start">
                  <div className="w-11 h-11 bg-emerald-50 rounded-2xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sidqly-navy mb-1">Start Organization Setup</h3>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">Ready to subscribe, pick your plan, and configure add-ons or branches?</p>
                    <Link
                      to="/purchase#inquiry"
                      onClick={() => trackEvent('inquiry_click', { cta_source: 'contact_page_setup' })}
                      className="text-sidqly-green-emerald font-bold text-sm hover:underline"
                    >
                      Go to Plan Setup →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm">
                <div className="flex gap-5 items-start">
                  <div className="w-11 h-11 bg-emerald-50 rounded-2xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sidqly-navy mb-1">Direct Email</h3>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">For support, billing, refunds, or partnership discussions.</p>
                    <a
                      href={`mailto:${brand.email}`}
                      onClick={() => trackEvent('contact_submit', { cta_source: 'contact_page_email' })}
                      className="text-sidqly-green-emerald font-bold text-sm hover:underline"
                    >
                      {brand.email} →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 text-slate-900 p-8 rounded-[28px] shadow-sm">
                <h3 className="text-xl font-bold mb-3">Our Focus</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Sidqly supports Islamic organizations prioritizing Amanah and dignity—with onboarding, Excel/WhatsApp migration, and custom multi-branch reporting.
                </p>
                <div className="flex items-center gap-3 text-sidqly-green-deep text-sm mb-6">
                  <MapPin size={18} />
                  <span className="font-bold">Operating globally, based in Pakistan</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  We respond to all messages within 24 business hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
