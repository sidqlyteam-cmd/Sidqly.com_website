import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { regionsData } from '../../data/locations/regions';
import { countriesData } from '../../data/locations/countries';
import { cityContentTier1 } from '../../data/locations/cityContentTier1';
import { generateFAQSchema, generateItemListSchema } from '../../lib/schema';
import { brand } from '../../config/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

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

const LocationsIndex: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Global Service Areas | Sidqly",
        "description": "Sidqly helps mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs manage verified giving, payment proof, donor-safe updates, and board-ready reporting across global service areas.",
        "url": `${brand.domain}/locations/`
      },
      generateFAQSchema(faqList),
      generateItemListSchema([
        ...regionsData.filter(r => r.indexStatus === 'index').map(r => ({ name: r.region, url: `/locations/${r.slug}/` })),
        ...countriesData.filter(c => c.indexStatus === 'index').map(c => ({ name: c.country, url: `/locations/${c.slug}/` })),
        ...cityContentTier1.filter(c => c.indexStatus === 'index').map(c => ({ name: c.cityName || c.slug, url: `/locations/${c.slug}/` }))
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Global Service Areas"
        description="Sidqly helps mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs manage verified giving, payment proof, donor-safe updates, and board-ready reporting across global service areas."
        canonical="/locations/"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-8">
            Islamic Charity Software for Global Giving Teams
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Sidqly helps Islamic organizations across regions manage verified giving, manual payment review, proof approval, recipient-safe updates, Zakat, Sadaqah, Qurbani, Ramadan campaigns, and board-ready reporting through a secure cloud platform.
          </p>

          <div className="bg-white p-8 rounded-[40px] shadow-sm max-w-4xl mx-auto border border-gray-100 text-left mb-16">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Quick Answer</h2>
            <p className="text-gray-600 leading-relaxed">
              Sidqly serves mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs across multiple regions. The platform helps teams review payment proof, approve field evidence, protect recipient dignity, update donors safely, and prepare clearer internal reports.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Main Regions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionsData.filter(r => r.indexStatus === 'index').map((region) => (
              <Link
                key={region.slug}
                to={`/locations/${region.slug}`}
                className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-xl transition-all group flex flex-col"
              >
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">{region.region}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {region.shortHero || region.metaDescription}
                </p>
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  View region <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Countries Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Priority Countries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {countriesData.filter(c => c.indexStatus === 'index').map((country) => (
              <Link
                key={country.slug}
                to={`/locations/${country.slug}`}
                className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all text-center font-bold text-sidqly-navy hover:text-sidqly-green-emerald"
              >
                {country.country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Popular Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cityContentTier1.filter(c => c.indexStatus === 'index' && c.priorityTier === 1).map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="bg-sidqly-ivory px-6 py-4 rounded-xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all text-center font-medium text-gray-700 hover:text-sidqly-navy"
              >
                {city.cityName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Sidqly Helps Manage Section */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">What Sidqly helps global organizations manage</h2>
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

      {/* Stakeholders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Stakeholders Sidqly Supports</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Mosque committees", desc: "Organize campaigns, proof, and reporting without messy spreadsheets." },
               { title: "Islamic charity teams", desc: "Keep giving workflows structured from donation to fulfillment proof." },
               { title: "Zakat committees", desc: "Support clearer records, review steps, and safe proof handling." },
               { title: "Qurbani organizers", desc: "Track shares, vendors, and donor-safe updates clearly." },
               { title: "Ramadan relief teams", desc: "Manage high-volume seasonal giving and communication." },
               { title: "Finance/admin teams", desc: "Review proof efficiently with audit-ready logs." },
               { title: "Donor relations teams", desc: "Provide donors with clear, safe updates on their impact." },
               { title: "Board members", desc: "Access clean, internal reports of approved workflows." },
               { title: "Volunteers and field teams", desc: "Submit field proof quickly and securely." },
               { title: "Donors", desc: "Receive transparent updates without exposing recipient dignity." }
             ].map((stakeholder, i) => (
                <div key={i} className="bg-sidqly-ivory p-6 rounded-2xl">
                   <h3 className="font-bold text-sidqly-navy mb-2">{stakeholder.title}</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">{stakeholder.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">From giving workflow problems to a clear Sidqly demo</h2>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12 text-left text-gray-300">
             <ul className="space-y-4 font-medium text-lg">
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span> Visitor identifies their city or region</li>
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span> Visitor sees how Sidqly supports their giving workflow</li>
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span> Visitor understands the relevant modules</li>
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span> Visitor checks FAQs and trust information</li>
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span> Visitor clicks Book Demo</li>
               <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">6</span> Sidqly reviews their organization’s payment proof, approval, donor update, and reporting needs</li>
             </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">Book a Demo</Link>
            <Link to="/product-tour" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">See How Sidqly Works</Link>
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
            Tell us how your team currently manages giving, payment proof, Zakat, Sadaqah, Qurbani, Ramadan campaigns, donor updates, or reporting. We will show how Sidqly can simplify the workflow.
          </p>
          <Link to="/demo" className="inline-block bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:text-white transition-all shadow-lg hover:shadow-xl">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default LocationsIndex;
