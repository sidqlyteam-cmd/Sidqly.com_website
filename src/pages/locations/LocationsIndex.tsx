import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allLocations } from '../../data/locations/locations';
import { generateFAQSchema, generateItemListSchema } from '../../lib/schema';
import { brand } from '../../config/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Globe, MapPin } from 'lucide-react';

const faqList = [
  { question: "Does Sidqly serve Islamic organizations in multiple countries?", answer: "Yes, Sidqly serves mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs across multiple regions globally." },
  { question: "Can Sidqly support remote Islamic charity teams?", answer: "Yes, Sidqly is a cloud SaaS platform. Teams can coordinate remotely without relying only on spreadsheets, message threads, or scattered proof files." },
  { question: "Can Sidqly help with Zakat and Sadaqah operations?", answer: "Yes, Sidqly supports clearer Zakat workflow records, review steps, recipient-safe proof handling, and internal reporting." },
  { question: "Can Sidqly help Qurbani organizers?", answer: "Yes, Sidqly helps track shares, vendors, fulfillment proof, approval status, and donor-safe updates." },
  { question: "Does Sidqly have physical offices in every city listed?", answer: "No, Sidqly supports organizations serving these communities through a remote cloud platform." },
  { question: "How does Sidqly protect recipient dignity?", answer: "Sidqly offers a secure way to approve field evidence and prepare donor-safe updates without unnecessarily exposing sensitive recipient details." },
  { question: "Can donors receive proof updates safely?", answer: "Yes, Sidqly provides donor-safe updates that allow donors to see clear impact without violating recipient dignity." },
  { question: "Can teams use Sidqly for Ramadan campaigns?", answer: "Yes, Sidqly helps organize high-volume seasonal giving, ration pack workflows, proof review, and donor communication." },
  { question: "How can our organization book a Sidqly demo?", answer: "You can book a demo by clicking the 'Book Demo' links available on our site, choosing a convenient time to discuss your current workflows." }
];

interface HubDefinition {
  name: string;
  slug: string;
  type: 'country' | 'region';
  description: string;
  context: string;
}

const primaryHubs: HubDefinition[] = [
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    type: "country",
    description: "Supporting British mosques, welfare organizations, and registered charities.",
    context: "UK giving structures demand strict transparency, direct-debit management, Gift Aid operational tracking, and solid board reporting for diaspora collections."
  },
  {
    name: "United States",
    slug: "united-states",
    type: "country",
    description: "SaaS operational workflows for American mosques, community centers, and registered 501(c)(3) charities.",
    context: "Enabling remote teams to manage high-volume Ramadan appeals, Zakat fund isolation, and automated payment receipts side-by-side."
  },
  {
    name: "Canada",
    slug: "canada",
    type: "country",
    description: "SaaS infrastructure for Canadian Islamic centers, Zakat teams, and relief programs.",
    context: "Empowering multicultural teams to handle volunteer dispatching, on-site food package proof, and clean administrative audits."
  },
  {
    name: "Gulf Region",
    slug: "gulf",
    type: "region",
    description: "Operational tracking for community charities, Udhiyah teams, and Zakat programs in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
    context: "Custom-built for organizations tracking payment proof manually, logging verified recipient handovers, and managing seasonal campaigns securely."
  },
  {
    name: "Pakistan",
    slug: "pakistan",
    type: "country",
    description: "Backend administrative software for welfare foundations, masjid committees, and local ration drives.",
    context: "Replacing chaotic WhatsApp screen-sharing and spreadsheet tracking with secure, side-by-side transaction reviews."
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    type: "country",
    description: "Digital tools for Malaysian sedekah, wakaf, and korban campaign coordinators.",
    context: "Aligning local volunteer operations with clear mobile-friendly proof submissions and standardized reporting."
  },
  {
    name: "Australia",
    slug: "australia",
    type: "country",
    description: "Operational software for Australian diaspora mosques, relief committees, and seasonal appeals.",
    context: "Supporting scattered teams with audit-ready operational ledgers and recipient dignity protections."
  }
];

const LocationsIndex: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const activeCities = allLocations.filter(
    l => l.pageType === 'city' && l.indexStatus === 'index' && l.priorityTier === 1
  );

  // Group cities under their primary hub
  const getCitiesForHub = (hub: HubDefinition) => {
    if (hub.slug === 'gulf') {
      // Gulf covers several countries in Middle East
      return activeCities.filter(c =>
        ['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'bahrain', 'oman'].includes(c.countrySlug)
      );
    }
    return activeCities.filter(c => c.countrySlug === hub.slug);
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Global Service Areas | Sidqly",
        "description": "Explore Sidqly's global service areas. We help mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs manage giving operations.",
        "url": `${brand.domain}/locations`
      },
      generateFAQSchema(faqList),
      generateItemListSchema([
        ...primaryHubs.map(h => ({ name: h.name, url: `/locations/${h.slug}` })),
        ...activeCities.map(c => ({ name: c.cityName || c.slug, url: `/locations/${c.slug}` }))
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Global Service Areas"
        description="Sidqly helps mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs manage verified giving, payment proof, donor-safe updates, and board-ready reporting across global service areas."
        canonical="/locations"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-ivory border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-8">
            Islamic Charity Software for Global Giving Teams
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Sidqly is a premium, secure cloud SaaS platform. We support mosques, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs globally by streamlining payment reviews, proof approvals, donor updates, and board reporting.
          </p>

          <div className="bg-white p-8 rounded-[40px] shadow-sm max-w-4xl mx-auto border border-gray-100 text-left">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Service Area Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Sidqly operates as a remote cloud SaaS tool. We serve and support organizations across multiple international territories. This directory details how our operational solutions align with local giving needs, community structures, and volunteer workflows in each respective service area.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Regional Hubs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">
              Primary Regional Hubs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our 7 primary parent hubs combine local relevance context with structured service networks.
            </p>
          </div>

          <div className="space-y-16">
            {primaryHubs.map((hub) => {
              const cities = getCitiesForHub(hub);
              return (
                <div key={hub.slug} className="bg-sidqly-ivory rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Parent Hub Details */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 text-sidqly-green-emerald mb-4">
                        <Globe size={24} />
                        <span className="font-bold uppercase tracking-wider text-sm">{hub.type} hub</span>
                      </div>
                      <h3 className="text-3xl font-extrabold text-sidqly-navy mb-4">
                        {hub.name} Page
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                        {hub.description}
                      </p>
                      <div className="bg-white/60 p-5 rounded-2xl border border-white text-sm text-gray-600 leading-relaxed mb-6">
                        <strong className="text-sidqly-navy block mb-2">Relevance & Operational Context:</strong>
                        {hub.context}
                      </div>
                      <Link
                        to={`/locations/${hub.slug}`}
                        className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold hover:text-sidqly-green-emerald transition-colors"
                      >
                        Explore Parent Hub <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Associated Tier 1 Cities */}
                    <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100">
                      <h4 className="font-extrabold text-sidqly-navy text-lg mb-6 flex items-center gap-2">
                        <MapPin size={18} className="text-sidqly-green-emerald" />
                        Featured {hub.name} Service Areas ({cities.length})
                      </h4>
                      {cities.length > 0 ? (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {cities.map((city) => (
                            <Link
                              key={city.slug}
                              to={`/locations/${city.slug}`}
                              className="group p-4 rounded-xl border border-gray-100 bg-sidqly-ivory hover:bg-white hover:border-sidqly-green-emerald hover:shadow-sm transition-all flex items-center justify-between"
                            >
                              <div>
                                <span className="font-bold text-sidqly-navy block group-hover:text-sidqly-green-emerald transition-colors">
                                  {city.cityName}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {city.country}
                                </span>
                              </div>
                              <ArrowRight size={14} className="text-gray-400 group-hover:text-sidqly-green-emerald group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm italic">
                          Tier 1 city pages are currently being prepared for this hub.
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standard Operations block */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Global Islamic Giving, Verified and Dignified</h1>
          <p className="text-xl text-sidqly-green-soft mb-8 leading-relaxed">
            Sidqly is a premium Islamic SaaS operating platform helping organizations worldwide manage manual payment review, proof approval, donor-safe updates, and board-ready reporting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/demo" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">Book a Demo</Link>
             <Link to="/product-tour" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">See How Sidqly Works</Link>
          </div>
        </div>
      </section>

      {/* Browse by Workflow */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Browse by giving workflow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Manual payment review", link: "/modules/manual-payment-review" },
              { title: "Proof approval", link: "/modules/proof-trust-engine" },
              { title: "Donor-safe updates", link: "/modules/donor-safe-updates" },
              { title: "Recipient dignity protection", link: "/modules/privacy-dignity-controls" },
              { title: "Zakat operations", link: "/modules/zakat-fund-separation" },
              { title: "Sadaqah campaign tracking", link: "/modules/sadaqah-campaigns" },
              { title: "Qurbani fulfillment tracking", link: "/modules/qurbani-lifecycle" },
              { title: "Ramadan campaign management", link: "/modules/ramadan-meals-rations" },
              { title: "Board-ready reporting", link: "/modules/reports-board-packs" }
            ].map((module, i) => (
              <Link key={i} to={module.link} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <CheckCircle2 className="text-sidqly-green-emerald flex-shrink-0" size={24} />
                <span className="font-bold text-sidqly-navy">{module.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden bg-sidqly-ivory">
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

      {/* CTA Section */}
      <section className="py-20 bg-sidqly-green-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your giving operations?</h2>
          <p className="text-lg text-sidqly-green-soft mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us how your organization currently manages giving, payment proof, Zakat, Sadaqah, Qurbani, Ramadan campaigns, donor updates, or reporting. We will show how Sidqly can simplify the workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/demo" className="inline-block bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:text-white transition-all shadow-lg hover:shadow-xl">
                Book a Demo
             </Link>
             <Link to="/product-tour" className="inline-block bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                See How Sidqly Works
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsIndex;
