import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allLocations } from '../../data/locations/locations';
import { generateFAQSchema, generateWebPageSchema } from '../../lib/schema';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp, BookOpen, Layers, Sparkles } from 'lucide-react';
import { brand } from '../../config/brand';
import LocationCtaBlock from '../../components/locations/LocationCtaBlock';
import LocationQuickAnswer from '../../components/locations/LocationQuickAnswer';
import LocationWorkflow from '../../components/locations/LocationWorkflow';
import RelatedSidqlyModules from '../../components/RelatedSidqlyModules';
import RelatedUseCases from '../../components/RelatedUseCases';

const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const location = allLocations.find(l => l.slug === slug || l.canonicalPath === `/locations/${slug}`);

  if (!location) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-sidqly-navy">Location Not Found</h1>
        <p className="mt-4 text-gray-600 mb-8">The location page you are looking for does not exist or has been moved.</p>
        <Link to="/locations" className="text-white bg-sidqly-green-emerald px-6 py-3 rounded-xl font-bold">View Global Service Areas</Link>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(location.metaTitle, location.metaDescription, location.canonicalPath || `/locations/${location.slug}`),
      ...(location.faqs && location.faqs.length > 0 ? [generateFAQSchema(location.faqs)] : [])
    ]
  };

  // Safe Fallback Content based on pageType
  const getFallbackContext = () => {
    if (location.pageType === 'city') {
       return `Many Islamic organizations serving ${location.cityName || location.slug} need clearer ways to manage giving campaigns, payment proof, volunteer coordination, donor updates, and internal reporting. Sidqly supports these workflows through structured review, approval, proof, and reporting tools.`;
    } else if (location.pageType === 'country') {
       return `Islamic organizations across ${location.country} require transparent giving workflows. Operational clarity is key for mosques, charities, and Zakat teams to maintain trust.`;
    }
    return `Islamic organizations across ${location.region} rely on clear workflows. Operational clarity is key to maintaining trust and managing impact effectively.`;
  };

  const getParentSlug = (loc: any) => {
    if (['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'bahrain', 'oman'].includes(loc.countrySlug)) {
      return 'gulf';
    }
    return loc.countrySlug || 'global';
  };

  const getParentName = (loc: any) => {
    if (['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'bahrain', 'oman'].includes(loc.countrySlug)) {
      return 'Gulf';
    }
    return loc.country || 'Global';
  };

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={location.canonicalPath || `/locations/${location.slug}`}
        noindex={location.indexStatus === 'noindex' || location.priorityTier > 1}
        schema={location.priorityTier === 1 ? schema : { "@context": "https://schema.org", "@graph": [ { "@type": "WebPage", "name": location.metaTitle, "description": location.metaDescription, "url": `${brand.domain}${location.canonicalPath || `/locations/${location.slug}`}` } ] }}
      />

      {/* Breadcrumbs Navigation */}
      <div className="bg-sidqly-ivory py-4 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm font-medium text-gray-500">
          <Link to="/" className="hover:text-sidqly-navy transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/locations" className="hover:text-sidqly-navy transition-colors">Locations</Link>
          {location.pageType === 'city' && (
            <>
              <span className="mx-2">›</span>
              <Link to={`/locations/${getParentSlug(location)}`} className="hover:text-sidqly-navy transition-colors">
                {getParentName(location)}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-800 font-semibold">{location.cityName}</span>
            </>
          )}
          {location.pageType === 'country' && (
            <>
              <span className="mx-2">›</span>
              <span className="text-gray-800 font-semibold">{location.country}</span>
            </>
          )}
          {location.pageType === 'region' && (
            <>
              <span className="mx-2">›</span>
              <span className="text-gray-800 font-semibold">{location.region}</span>
            </>
          )}
        </div>
      </div>

      {/* City Disclaimer */}
      {location.pageType === 'city' && (
        <div className="bg-sidqly-ivory py-3 text-center border-b border-gray-200 text-xs font-medium text-gray-500 px-4">
           Sidqly supports organizations serving {location.cityName || 'this region'} and nearby communities through a remote SaaS platform. This page does not claim a physical Sidqly office in {location.cityName || 'this region'} unless confirmed elsewhere on the website.
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 text-center items-center">
             <Link to="/locations" className="inline-flex items-center gap-2 text-sidqly-green-soft font-bold mb-4 hover:gap-3 transition-all">
                <ArrowRight className="rotate-180" size={16} /> Back to Global Service Areas
             </Link>
             <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">{location.h1}</h1>
             <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
               {location.shortHero}
             </p>
             {location.pageType === 'city' && (
                <p className="text-xs text-gray-400 mt-4 max-w-2xl bg-white/5 p-4 rounded-xl border border-white/10">
                   {location.priorityTier > 1 ? (
                       `Sidqly can support Islamic organizations serving ${location.cityName || location.slug} through a cloud SaaS workflow for payment proof review, approvals, donor-safe updates, and reporting. This page is part of Sidqly’s service-area content and does not claim a physical office in ${location.cityName || location.slug}.`
                   ) : (
                       `Sidqly supports organizations serving ${location.cityName || location.slug} and nearby communities through a remote SaaS platform. This page does not claim a physical office in ${location.cityName || location.slug} unless confirmed elsewhere on the website.`
                   )}
                </p>
             )}
             {location.pageType === 'country' && (
                <p className="text-xs text-gray-400 mt-4 max-w-2xl bg-white/5 p-4 rounded-xl border border-white/10">
                   Sidqly supports operational clarity, proof workflows, donor updates, and internal reporting. Organizations should confirm Shariah, tax, accounting, and legal requirements with their own advisors.
                </p>
             )}
          </div>
        </div>
      </section>

      {/* Quick Answer & Simple Explanation */}
      <LocationQuickAnswer answer={location.quickAnswer || `Sidqly is a cloud platform supporting verified Islamic giving operations.`} />

      {/* Interactive Links System (Standardized + Dynamic hybrid) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-sidqly-navy mb-4">
              Integrated Giving Modules & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strengthening localized operations with robust platform modules and educational guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Standardized Core Products & Dynamic Module Links */}
            <div className="bg-sidqly-ivory p-8 md:p-12 rounded-[40px] border border-gray-100">
              <div className="flex items-center gap-3 mb-6 text-sidqly-green-deep">
                <Layers size={24} />
                <h3 className="text-2xl font-bold text-sidqly-navy">Platform Modules</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Sidqly equips mosques and charities with standard automated administrative modules:
              </p>

              {/* Standardized module block */}
              <div className="space-y-4 mb-8">
                {[
                  { label: "Manual Payment Review", href: "/modules/manual-payment-review", desc: "Compare uploaded screenshot proofs against actual bank records." },
                  { label: "Proof Approval", href: "/modules/proof-trust-engine", desc: "Collect, approve, and anonymize delivery photos automatically." },
                  { label: "Donor-Safe Updates", href: "/modules/donor-safe-updates", desc: "Send impact reports to donors without violating recipient dignity." },
                  { label: "Zakat Separation", href: "/modules/zakat-fund-separation", desc: "Enforce logically isolated ledgers for obligational funds." }
                ].map((mod, i) => (
                  <Link key={i} to={mod.href} className="block bg-white p-4 rounded-xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-sm transition-all">
                    <span className="font-bold text-sidqly-navy block text-sm group-hover:text-sidqly-green-emerald">{mod.label}</span>
                    <span className="text-xs text-gray-500">{mod.desc}</span>
                  </Link>
                ))}
              </div>

              {/* Dynamic products based on location metadata */}
              {location.relatedProducts && location.relatedProducts.length > 0 && (
                <div className="border-t border-gray-200/60 pt-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Location-Specific Recommended Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.relatedProducts.map((p, idx) => (
                      <Link key={idx} to={p.href} className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-sidqly-navy border border-gray-200/80 hover:border-sidqly-green-emerald hover:text-sidqly-green-emerald transition-colors">
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Standardized Knowledge Hub & Dynamic Articles */}
            <div className="bg-sidqly-ivory p-8 md:p-12 rounded-[40px] border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 text-sidqly-green-deep">
                  <BookOpen size={24} />
                  <h3 className="text-2xl font-bold text-sidqly-navy">Knowledge Hub Guides</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Access deep compliance material and answer-first operational guides:
                </p>

                {/* Standardized links */}
                <div className="space-y-4 mb-8">
                  <Link to="/knowledge-hub" className="block bg-white p-4 rounded-xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-sm transition-all">
                    <span className="font-bold text-sidqly-navy block text-sm">Central Knowledge Hub Directory</span>
                    <span className="text-xs text-gray-500">Explore all compliance methodologies, definitions, and workflows.</span>
                  </Link>
                </div>

                {/* Dynamic Knowledge Hub guides */}
                {location.relatedKnowledgeHubArticles && location.relatedKnowledgeHubArticles.length > 0 && (
                  <div className="border-t border-gray-200/60 pt-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Dynamic Guides for this Region</h4>
                    <div className="space-y-3">
                      {location.relatedKnowledgeHubArticles.map((art, idx) => (
                        <Link key={idx} to={art.href} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-sm transition-all group">
                          <span className="text-sm font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors">{art.label}</span>
                          <ArrowRight size={14} className="text-gray-400 group-hover:text-sidqly-green-emerald transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Guided Pilot Conversion CTA block */}
              <div className="bg-sidqly-green-deep text-white p-6 rounded-2xl border border-white/10 mt-8">
                <div className="flex items-center gap-2 text-sidqly-green-soft mb-2">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Conversion System</span>
                </div>
                <h4 className="font-bold mb-2">Optimize Your Giving Workflows</h4>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Join our Guided Pilot program. We will help map your current WhatsApp or spreadsheet routines to secure compliance databases.
                </p>
                <Link to="/guided-pilot" className="inline-block w-full text-center bg-sidqly-green-emerald text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-white hover:text-sidqly-navy transition-colors">
                  Apply for Guided Pilot
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-sidqly-navy mb-4">What Sidqly means in simple words</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                 Sidqly is software for Islamic giving teams. It helps organizations review payment proof, approve donation and fulfillment records, manage Zakat, Sadaqah, Qurbani, and Ramadan campaigns, protect recipient dignity, update donors safely, and prepare clearer internal reports.
              </p>
              <p className="text-gray-500 text-sm italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                 Sidqly does not replace scholars, accountants, payment processors, or legal advisors. It helps organize the operational workflow around giving, proof, approvals, updates, and reporting.
              </p>
           </div>
        </div>
      </section>

      {/* Local Context & Workflow Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12">
              <div>
                 <h2 className="text-3xl font-bold text-sidqly-navy mb-6">
                    Local Islamic giving context
                 </h2>
                 <p className="text-gray-600 leading-relaxed mb-6">
                    {location.localNeeds || getFallbackContext()}
                 </p>
                 {location.culturalNote && (
                    <p className="text-gray-600 leading-relaxed mb-6">{location.culturalNote}</p>
                 )}
                 {location.localLanguageNote && (
                    <p className="text-gray-600 leading-relaxed">{location.localLanguageNote}</p>
                 )}
              </div>
              <div className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100">
                 <h3 className="text-2xl font-bold text-sidqly-navy mb-6">Common workflow problems Sidqly solves</h3>
                 <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Payment screenshots arriving in different chats</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Admins manually checking proof</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Proof files stored without approval status</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Sensitive recipient images shared too widely</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Qurbani updates handled manually</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Zakat/Sadaqah notes scattered across teams</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Ramadan campaign reporting created late</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Board reports built from messy records</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0 mt-1" size={18} /> Donors asking for clearer proof and updates</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Sidqly Workflow Visual */}
      <LocationWorkflow />

      {/* Stakeholders Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Who Sidqly helps</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Mosque committees", desc: "Organize campaigns, payment proof, approvals, donor updates, and internal records without relying only on scattered messages or spreadsheets." },
               { title: "Islamic charity teams", desc: "Keep giving workflows structured from donation proof to fulfillment proof and reporting." },
               { title: "Zakat committees", desc: "Support clearer Zakat workflow records, review steps, recipient-safe proof handling, and internal reporting." },
               { title: "Qurbani organizers", desc: "Track shares, vendors, fulfillment proof, approval status, and donor-safe updates." },
               { title: "Ramadan teams", desc: "Support high-volume seasonal giving, ration pack workflows, proof review, and donor communication." },
               { title: "Donors", desc: "Help donors receive clearer updates without exposing sensitive recipient information unnecessarily." }
             ].map((stakeholder, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <h3 className="font-bold text-sidqly-navy mb-3">{stakeholder.title}</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">{stakeholder.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Related Components */}
      <RelatedUseCases className="bg-white" />
      <RelatedSidqlyModules className="bg-sidqly-ivory" />

      {/* FAQs */}
      {location.faqs && location.faqs.length > 0 && (
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {location.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
                <button
                  className="w-full text-left px-6 py-5 font-bold text-sidqly-navy flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <LocationCtaBlock />
    </>
  );
};

export default LocationDetail;
