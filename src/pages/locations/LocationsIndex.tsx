import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { regionsData } from '../../data/locations/regions';
import { countriesData } from '../../data/locations/countries';
import { allLocations } from '../../data/locations/locations';
import { generateFAQSchema, generateItemListSchema } from '../../lib/schema';
import { brand } from '../../config/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Globe, Building2, MapPin } from 'lucide-react';

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

  const indexedRegions = regionsData.filter((r) => r.indexStatus === 'index');
  const indexedCountries = countriesData.filter((c) => c.indexStatus === 'index');
  const indexedCities = allLocations.filter((c) => c.pageType === 'city' && c.indexStatus === 'index');

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Global Service Areas | Sidqly",
        "description": "Sidqly helps mosques, Islamic charities, Zakat committees, Qurbani organizers, Ramadan teams, and donor-funded programs manage verified giving, payment proof, donor-safe updates, and board-ready reporting across global service areas.",
        "url": `${brand.domain}/locations`
      },
      generateFAQSchema(faqList),
      generateItemListSchema([
        ...indexedRegions.map((r) => ({ name: r.region, url: `/locations/${r.slug}` })),
        ...indexedCountries.map((c) => ({ name: c.country, url: `/locations/${c.slug}` })),
        ...indexedCities.filter((c) => c.priorityTier === 1).map((c) => ({ name: c.cityName || c.slug, url: `/locations/${c.slug}` }))
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Global Service Areas & Location Hierarchy"
        description="Explore Sidqly's global service area hierarchy across regions, countries, and city hubs. Managed verified giving, payment proof, and board-ready reporting."
        canonical="/locations"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold text-sidqly-green-soft mb-6 uppercase tracking-wider border border-white/10">
            <Globe size={14} /> Global Location Hierarchy
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Global Islamic Giving, Verified and Dignified
          </h1>
          <p className="text-xl text-sidqly-green-soft mb-10 max-w-3xl mx-auto leading-relaxed">
            Sidqly helps Islamic organizations across regions, countries, and city service hubs manage verified giving, manual payment reviews, proof approvals, donor-safe updates, and board-ready reporting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/book-demo" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all shadow-lg">
               Book a Demo
             </Link>
             <Link to="/product-tour" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
               See How Sidqly Works
             </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Banner */}
      <section className="py-10 bg-sidqly-ivory border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white p-6 sm:p-8 rounded-3xl border-l-4 border-sidqly-green-emerald shadow-sm">
             <h2 className="text-lg font-bold text-sidqly-navy mb-2 flex items-center gap-2">
               Quick Navigation Overview
             </h2>
             <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                Sidqly's service area hierarchy is structured logically: <strong className="text-sidqly-navy">Regions → Countries → Cities</strong>. Visitors can easily navigate back and forth between parent regions, national service areas, and local city hubs to explore relevant workflows.
             </p>
           </div>
        </div>
      </section>

      {/* HIERARCHY LEVEL 1: REGIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold text-xs uppercase tracking-widest mb-3 bg-sidqly-ivory px-3 py-1 rounded-md border border-gray-100">
              Level 1 Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sidqly-navy mb-4">
              1. Global Regions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore Sidqly's regional coverage and operational frameworks tailored to major global zones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indexedRegions.map((region) => {
              const regionCountries = indexedCountries.filter(
                (c) => c.regionSlug === region.slug || c.region.toLowerCase() === region.region.toLowerCase()
              );

              return (
                <div
                  key={region.slug}
                  className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:border-sidqly-green-emerald hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sidqly-green-emerald mb-6 shadow-sm border border-gray-100 group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-emerald transition-colors">
                      {region.region}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {region.shortHero || region.metaDescription}
                    </p>

                    {regionCountries.length > 0 && (
                      <div className="mb-6 pt-4 border-t border-gray-200/60">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                          Countries in {region.region}:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {regionCountries.map((c) => (
                            <Link
                              key={c.slug}
                              to={`/locations/${c.slug}`}
                              className="text-xs bg-white text-sidqly-navy hover:bg-sidqly-green-emerald hover:text-white px-2.5 py-1 rounded-lg border border-gray-200/80 font-semibold transition-colors"
                            >
                              {c.country}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/locations/${region.slug}`}
                    className="inline-flex items-center justify-between bg-white text-sidqly-navy px-5 py-3 rounded-xl border border-gray-200 text-sm font-bold group-hover:bg-sidqly-green-emerald group-hover:text-white group-hover:border-sidqly-green-emerald transition-all shadow-sm mt-4"
                  >
                    <span>View {region.region} Region</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIERARCHY LEVEL 2: COUNTRIES BY REGION */}
      <section className="py-20 bg-sidqly-ivory border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold text-xs uppercase tracking-widest mb-3 bg-white px-3 py-1 rounded-md border border-gray-100">
              Level 2 Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sidqly-navy mb-4">
              2. Countries Organized by Region
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find national giving operations and charity software guides organized under their respective parent regions.
            </p>
          </div>

          <div className="space-y-12">
            {indexedRegions.map((region) => {
              const countriesInRegion = indexedCountries.filter(
                (c) => c.regionSlug === region.slug || c.region.toLowerCase() === region.region.toLowerCase()
              );

              if (countriesInRegion.length === 0) return null;

              return (
                <div key={region.slug} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-sidqly-ivory rounded-xl text-sidqly-green-emerald border border-gray-100">
                        <Building2 size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sidqly-navy">{region.region} Countries</h3>
                        <p className="text-xs text-gray-500">{countriesInRegion.length} national service area pages</p>
                      </div>
                    </div>
                    <Link
                      to={`/locations/${region.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald hover:underline"
                    >
                      View {region.region} Region Hub <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {countriesInRegion.map((country) => {
                      const citiesInCountryCount = indexedCities.filter(
                        (ct) => ct.countrySlug === country.slug || ct.country.toLowerCase() === country.country.toLowerCase()
                      ).length;

                      return (
                        <Link
                          key={country.slug}
                          to={`/locations/${country.slug}`}
                          className="bg-sidqly-ivory p-5 rounded-2xl border border-gray-200/60 hover:border-sidqly-green-emerald hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors">
                                {country.country}
                              </span>
                              <Building2 size={16} className="text-gray-400 group-hover:text-sidqly-green-emerald transition-colors" />
                            </div>
                            <span className="text-xs text-gray-500 block">
                              {citiesInCountryCount > 0 ? `${citiesInCountryCount} featured cities` : 'National Service Area'}
                            </span>
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs font-bold text-sidqly-green-deep">
                            <span>View Country</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIERARCHY LEVEL 3: CITIES BY COUNTRY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold text-xs uppercase tracking-widest mb-3 bg-sidqly-ivory px-3 py-1 rounded-md border border-gray-100">
              Level 3 Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sidqly-navy mb-4">
              3. City Service Hubs by Country
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore local city pages categorized under their parent countries for local mosques, charities, and giving teams.
            </p>
          </div>

          <div className="space-y-12">
            {indexedCountries.map((country) => {
              const citiesInCountry = indexedCities.filter(
                (c) => c.countrySlug === country.slug || c.country.toLowerCase() === country.country.toLowerCase()
              );

              if (citiesInCountry.length === 0) return null;

              return (
                <div key={country.slug} className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-200/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200/60 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white rounded-xl text-sidqly-green-emerald border border-gray-100 shadow-sm">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sidqly-navy">{country.country} Cities</h3>
                        <p className="text-xs text-gray-500">
                          {citiesInCountry.length} city hubs in {country.country} ({country.region} region)
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/locations/${country.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald hover:underline"
                    >
                      View {country.country} Country Page <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {citiesInCountry.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/locations/${city.slug}`}
                        className="bg-white px-4 py-3 rounded-xl border border-gray-200/80 shadow-sm hover:border-sidqly-green-emerald hover:shadow-md transition-all text-center font-semibold text-sm text-sidqly-navy hover:text-sidqly-green-emerald truncate"
                        title={city.cityName || city.slug}
                      >
                        {city.cityName || city.slug}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse by Giving Workflow */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Browse by Giving Workflow</h2>
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

      {/* Related Islamic Utilities */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-12">Related Islamic Utilities</h2>
           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                 { title: "Zakat Calculator", link: "/zakat-calculator" },
                 { title: "Islamic Calendar", link: "/islamic-calendar" },
                 { title: "Namaz Timings", link: "/namaz-timings" },
                 { title: "Qibla Direction", link: "/qibla-direction" },
                 { title: "Ramadan Planner", link: "/ramadan-planner" }
              ].map((util, i) => (
                 <Link key={i} to={util.link} className="bg-white/10 px-6 py-4 rounded-xl border border-white/20 font-medium text-sm text-gray-200 hover:bg-white/20 transition-all">
                    {util.title}
                 </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-sidqly-green-deep text-white text-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-bold uppercase tracking-widest text-sidqly-green-soft">
               <Link to="/trust-center" className="hover:text-white transition-colors">Trust Center</Link>
               <span>|</span>
               <Link to="/security" className="hover:text-white transition-colors">Security</Link>
               <span>|</span>
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <span>|</span>
               <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
               <span>|</span>
               <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
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
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12 text-left text-gray-300 max-w-3xl mx-auto">
             <h3 className="font-bold text-white mb-4 text-xl">What happens after you book?</h3>
             <ul className="space-y-4 font-medium text-lg">
                <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span> We review your current giving workflow.</li>
                <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span> We identify where payment proof, approvals, donor updates, or reporting become difficult.</li>
                <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span> We show how Sidqly can support your team.</li>
                <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span> You decide the next step.</li>
             </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/book-demo" className="inline-block bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:text-white transition-all shadow-lg hover:shadow-xl">
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
