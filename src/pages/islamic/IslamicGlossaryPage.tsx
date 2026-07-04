import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { BookOpen, Search, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const terms = [
  { term: "Zakat / Zakaat", def: "Obligatory annual alms for eligible Muslims. Operations require strict fund separation and eligibility checks.", moduleLink: "/modules/zakat-fund-separation" },
  { term: "Sadaqah / Sadqa", def: "Voluntary charity given at any time. Can be used more flexibly than Zakat for operational needs or general welfare.", moduleLink: "/modules/sadaqah" },
  { term: "Sadqa Fitr / Fitrana", def: "Obligatory charity given before Eid ul Fitr prayers. Requires rapid, high-volume processing and distribution workflows.", moduleLink: "/modules/ramadan-donation-management" },
  { term: "Qurbani / Udhiya", def: "The annual animal sacrifice during Eid ul Adha. Requires complex share tracking, vendor coordination, and proof of slaughter.", moduleLink: "/modules/qurbani-management-software" },
  { term: "Ramadan / Ramzan", def: "The 9th month of the Islamic calendar. Operationally the highest volume period for donations, requiring robust payment review and reporting.", moduleLink: "/modules/ramadan-donation-management" },
  { term: "Iftar", def: "The meal to break the fast. Operationally requires vendor fulfillment, hygiene tracking, and daily proof capture.", moduleLink: "/modules/vendor-fulfillment-platform" },
  { term: "Suhoor / Sehri", def: "The pre-dawn meal before fasting. Often requires pre-dawn volunteer shifts and specialized distribution logistics.", moduleLink: "/modules/vendor-fulfillment-platform" },
  { term: "Eid ul Fitr", def: "The festival marking the end of Ramadan. Operationally requires all Sadqa Fitr to be disbursed and reported.", moduleLink: "/sadqa-zakat-planner" },
  { term: "Eid ul Adha / Bakra Eid", def: "The festival of sacrifice. Operationally centered around the Qurbani lifecycle and meat distribution.", moduleLink: "/eid-qurbani-planner" },
  { term: "Hajj / Dhul Hijjah", def: "The annual pilgrimage and 12th month. Operationally triggers the Qurbani planning season.", moduleLink: "/hajj-countdown" },
  { term: "Aqiqa / Aqiqah", def: "Sacrifice of an animal on the occasion of a child's birth. Uses similar workflow tracking to Qurbani.", moduleLink: "/modules/qurbani-management-software" },
  { term: "Amanah", def: "Trust. In operations, it refers to the responsibility to handle donor funds securely and deliver them exactly as promised.", moduleLink: "/trust-and-dignity" },
  { term: "Khairat", def: "General charitable deeds or funds.", moduleLink: "/modules/sadaqah" },
  { term: "Masjid / Mosque", def: "Place of worship. Needs specialized donation tracking for construction, operations, and community aid.", moduleLink: "/solutions/mosques" },
  { term: "Donor-safe proof", def: "Impact evidence that has been reviewed and scrubbed of private recipient data (like faces).", moduleLink: "/modules/proof-trust-engine" },
  { term: "Proof approval", def: "A hard operational gate requiring management to verify field evidence before donors see it.", moduleLink: "/modules/proof-trust-engine" },
  { term: "Recipient dignity", def: "The principle that receiving aid should not cost a person their privacy or dignity.", moduleLink: "/trust-and-dignity" },
  { term: "Audit-ready records", def: "Timestamped, immutable logs of every approval, status change, and payment verification.", moduleLink: "/modules/audit-ready-records" }
];

const IslamicGlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = terms.filter(t =>
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.def.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Islamic Charity Operations Glossary | Sidqly",
    "description": "Learn key operational terms for Islamic giving workflows, including Zakat, Qurbani, and Sadqa.",
    "url": `${brand.domain}/islamic-glossary`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredTerms.map((t, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": t.term,
        "description": t.def
      }))
    }
  };

  return (
    <>
      <SEO
        title="Islamic Charity Operations Glossary | Sidqly"
        description="Learn key operational terms for Islamic giving workflows, including Zakat, Qurbani, and Sadqa, defined in the context of Sidqly's management platform."
        canonical="/islamic-glossary"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Islamic Operations <span className="text-sidqly-green-deep">Glossary</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Definitions of common Islamic giving terms and how they translate into operational workflows within Sidqly.
            </p>

            <div className="max-w-xl mx-auto relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
               <input
                 type="text"
                 placeholder="Search terms (e.g., Zakat, Proof)..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sidqly-green-emerald outline-none shadow-sm"
               />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTerms.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-colors flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                   <div className="bg-sidqly-ivory p-2 rounded-lg text-sidqly-green-deep">
                      <BookOpen size={18} />
                   </div>
                   <h3 className="font-bold text-lg text-sidqly-navy">{item.term}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{item.def}</p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                   <Link to={item.moduleLink} className="text-xs font-bold text-sidqly-green-deep hover:underline">
                      View related module &rarr;
                   </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
             <div className="text-center text-gray-500 py-12 bg-white rounded-2xl border border-gray-100">
                No terms found for "{searchTerm}".
             </div>
          )}

          <div className="flex items-start gap-2 text-xs text-yellow-800 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
             <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
             <p><strong>Disclaimer:</strong> This glossary defines terms within the context of operational workflows on the Sidqly platform. It is not intended as religious interpretation or fatwa. Where religious interpretation may vary (e.g., specific Zakat calculation logic), organizations should defer to their authorized scholars.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamicGlossaryPage;
