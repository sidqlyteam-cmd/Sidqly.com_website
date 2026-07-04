import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { solutions } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import { CheckCircle2, ArrowRight, Globe } from 'lucide-react';

import QurbaniLifecycle from '../../components/diagrams/QurbaniLifecycle';
import RamadanLifecycle from '../../components/diagrams/RamadanLifecycle';
import VendorLifecycle from '../../components/diagrams/VendorLifecycle';
import VolunteerLifecycle from '../../components/diagrams/VolunteerLifecycle';
import CorporateLifecycle from '../../components/diagrams/CorporateLifecycle';
import SadaqahLifecycle from '../../components/diagrams/SadaqahLifecycle';
import ZakatLifecycle from '../../components/diagrams/ZakatLifecycle';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '../../lib/schema';
import { faqs } from '../../data/faqs';


interface NormalizedSolution {
  slug: string;
  title: string;
  desc: string;
  who?: string[];
  problem?: string[];
  benefit?: string[];
  workflow?: string[];
  output?: string[];
  relevantModules?: string[];
  privacyNotes?: string[];
  faqs?: { question: string; answer: string }[];
  seo?: Record<string, string | string[]>;
}

const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Solution not found</h1>
        <Link to="/solutions" className="text-sidqly-green-emerald mt-4 inline-block">View all solutions</Link>
      </div>
    );
  }

  // Find relevant FAQs for this solution based on title or slug
  // The actual category string in faqs.ts needs to match, so we use a loose check
  const solutionFaqs = faqs.filter(faq =>
    faq.category.toLowerCase().includes(solution.title.toLowerCase()) ||
    solution.title.toLowerCase().includes(faq.category.toLowerCase()) ||
    (solution.slug === 'zakat-teams' && faq.category === 'Zakat') ||
    (solution.slug === 'sadaqah-campaigns' && faq.category === 'Sadaqah') ||
    (solution.slug === 'ramadan-food-drives' && faq.category === 'Ramadan') ||
    (solution.slug === 'qurbani-providers' && faq.category === 'Qurbani') ||
    (solution.slug === 'mosques' && faq.category === 'Mosques') ||
    (solution.slug === 'islamic-charities' && faq.category === 'Charities')
  ).slice(0, 5);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(`${solution.title} Software`, solution.desc, `/solutions/${solution.slug}`),
      ...(solutionFaqs.length > 0 ? [generateFAQSchema(solutionFaqs)] : []),
      // If we had workflow steps in the solutions object, we'd add HowTo here.
      // Using generic steps based on the general Sidqly workflow.
      generateHowToSchema(`How ${solution.title} Works with Sidqly`, solution.desc, [
        "Create specific campaigns or funds.",
        "Record and verify contributions manually.",
        "Assign tasks to relevant teams or vendors.",
        "Upload and review proof of delivery.",
        "Share donor-safe updates and generate reports."
      ]),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Solutions", item: "/solutions" },
        { name: solution.title, item: `/solutions/${solution.slug}` }
      ])
    ]
  };

  return (
    <>
      <SEO
        title={`${solution.title} Software | Sidqly`}
        description={solution.desc}
        canonical={`/solutions/${solution.slug}`}
        schema={schema}
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-8">{solution.title}</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              {solution.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Professional operations for your {solution.title.toLowerCase()} team.</h2>
              <div className="space-y-6">
                {(solution as NormalizedSolution).benefit?.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-sidqly-green-soft/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-sidqly-green-deep" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {(solution as NormalizedSolution).problem?.join(' ')} Sidqly provides the specific tools needed to manage {solution.title.toLowerCase()} operations with integrity and clarity. From intake to reporting, every step is optimized for the needs of Islamic organizations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz'} className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
                  <Link to="/pricing" className="bg-sidqly-ivory text-sidqly-navy px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-100">View Pricing</Link>
                </div>
              </div>
            </div>
            <div className="bg-sidqly-ivory aspect-video rounded-3xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-sidqly-green-soft/10 to-transparent"></div>
               <div className="relative text-center p-8 w-full">
                  {slug === 'qurbani-providers' && <QurbaniLifecycle />}
                  {slug === 'ramadan-food-drives' && <RamadanLifecycle />}
                  {slug === 'vendors' && <VendorLifecycle />}
                  {slug === 'volunteers' && <VolunteerLifecycle />}
                  {slug === 'corporate-csr-zakat' && <CorporateLifecycle />}
                  {slug === 'zakat-teams' && <ZakatLifecycle />}
                  {slug === 'islamic-charities' && <SadaqahLifecycle />}
                  {(!['qurbani-providers', 'ramadan-food-drives', 'vendors', 'volunteers', 'corporate-csr-zakat', 'zakat-teams', 'islamic-charities'].includes(slug || '')) && (
                    <>
                      <div className="text-sidqly-navy font-bold text-lg mb-2">Sidqly Operating Platform</div>
                      <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Dashboard Preview</div>
                    </>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-8 text-center">What you get with Sidqly</h2>
          <div className="max-w-3xl mx-auto space-y-4">
             {slug === 'mosques' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Organized donations</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Clearer receipts</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Ramadan and Zakat campaign visibility</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Donor trust</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Less manual follow-up</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Board-ready summaries</span></div>
                </>
             )}
             {slug === 'islamic-charities' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Charity request workflows</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Privacy-safe case handling</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Proof approval</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Donor-ready reports</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Vendor/volunteer coordination</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Audit-ready records</span></div>
                </>
             )}
             {slug === 'donors' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Clearer updates</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Safe proof</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Receipts/certificates where available</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Confidence that private recipient data is protected</span></div>
                </>
             )}
             {slug === 'vendors' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Clear tasks</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Proof upload path</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Fewer scattered messages</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Issue reporting</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Organized fulfillment history</span></div>
                </>
             )}
             {slug === 'volunteers' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Assignments</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Clear delivery steps</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Proof instructions</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Contribution visibility</span></div>
                </>
             )}
             {slug === 'corporate-csr-zakat' && (
                <>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Board-ready reports</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Safe impact summaries</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Sponsor-level visibility</span></div>
                  <div className="flex items-start gap-4 bg-sidqly-ivory p-6 rounded-2xl border border-gray-50"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" /><span className="text-gray-700">Proof without exposing private recipient data</span></div>
                </>
             )}
             {(!['mosques', 'islamic-charities', 'donors', 'vendors', 'volunteers', 'corporate-csr-zakat'].includes(slug || '')) && (
                <div className="flex items-center justify-center p-6 bg-sidqly-ivory rounded-2xl border border-gray-50">
                    <span className="text-gray-600 font-medium">Clear workflows, donor-safe proof, and audit-ready records.</span>
                </div>
             )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Regional Support</h2>
             <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Sidqly supports {solution.title.toLowerCase()} across multiple global regions with tailored workflows.</p>
             <div className="flex flex-wrap justify-center gap-4">
                {['united-kingdom', 'europe', 'north-america', 'canada', 'gulf-mena'].map((r) => (
                   <Link key={r} to={`/regions/${r}`} className="bg-white px-6 py-3 rounded-full border border-gray-100 text-sidqly-navy font-bold text-sm hover:border-sidqly-green-soft transition-all flex items-center gap-2">
                      <Globe size={16} className="text-sidqly-green-emerald" /> {r.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                   </Link>
                ))}
             </div>
          </div>

          <h2 className="text-3xl font-bold text-sidqly-navy mb-12">More for {solution.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Manual Payment Review', 'Proof Trust Engine', 'Donor Certificates'].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-left">
                <h4 className="font-bold text-sidqly-navy mb-4">{item}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Learn how Sidqly's {item.toLowerCase()} can transform your {solution.title.toLowerCase()} operations.</p>
                <Link to="/features" className="text-sidqly-green-emerald font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionDetail;
