import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HajjCountdown from '../../components/islamic/HajjCountdown';
import { brand } from '../../config/brand';
import { Calendar, CheckCircle2, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

const HajjCountdownPage: React.FC = () => {
  const faqList = [
    {
      q: "When does Hajj begin and end in the Islamic calendar?",
      a: "Hajj takes place annually during the 12th Islamic lunar month, Dhul Hijjah, specifically from the 8th of Dhul Hijjah (Day of Tarwiyah) through the 12th or 13th of Dhul Hijjah (Days of Tashreeq). The exact dates in the Gregorian calendar shift forward by approximately 10 to 11 days each year based on moon sighting."
    },
    {
      q: "Why are the first 10 days of Dhul Hijjah significant for charitable giving?",
      a: "According to the Prophet Muhammad (peace be upon him), there are no days in which righteous deeds are more beloved to Allah than the first ten days of Dhul Hijjah (Sahih Bukhari). Mosques and Islamic charities experience their second-highest donation volume of the year during this period, with worshippers giving Sadaqah, fulfilling annual Zakat, and booking Qurbani / Udhiya shares."
    },
    {
      q: "What is the deadline for booking Qurbani / Udhiya sacrifices?",
      a: "Qurbani orders should ideally be placed prior to the 10th of Dhul Hijjah (Eid-ul-Adha morning) so charity teams and partner farms can assign animal shares (1 sheep/goat per individual or 1/7 of a cow/camel). The ritual slaughter must strictly occur after the Eid prayer on the 10th and before sunset on the 13th of Dhul Hijjah."
    },
    {
      q: "How can charities and mosques prepare for high-volume Dhul Hijjah operations?",
      a: "Organizations should set up structured digital share tracking, automated donor confirmation receipts, vendor slaughter checklists, and dignity-safe photo proof workflows in advance using platforms like Sidqly to eliminate post-Eid spreadsheet confusion."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${brand.domain}/hajj-countdown#webpage`,
        "url": `${brand.domain}/hajj-countdown`,
        "name": "Hajj Countdown & Dhul Hijjah Giving Calendar: Key Dates, Qurbani & Virtues | Sidqly",
        "description": "Live countdown to Hajj and the blessed 10 days of Dhul Hijjah. Explore key dates, Day of Arafah, Eid-ul-Adha charity deadlines, and Qurbani operational planning.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": brand.domain },
            { "@type": "ListItem", "position": 2, "name": "Islamic Utilities", "item": `${brand.domain}/islamic-utilities` },
            { "@type": "ListItem", "position": 3, "name": "Hajj Countdown", "item": `${brand.domain}/hajj-countdown` }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${brand.domain}/hajj-countdown#faq`,
        "mainEntity": faqList.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="Hajj Countdown & Dhul Hijjah Giving Calendar: Key Dates, Qurbani & Virtues | Sidqly"
        description="Live countdown to Hajj and the blessed 10 days of Dhul Hijjah. Explore key dates, Day of Arafah, Eid-ul-Adha charity deadlines, and Qurbani operational planning."
        canonical="/hajj-countdown"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-emerald-800 uppercase bg-emerald-100/70 rounded-full border border-emerald-200 tracking-wider">
              Dhul Hijjah & Hajj Season Hub
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">
              Hajj Countdown & Season Planner
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan your spiritual readiness and operational workflows for the sacred first ten days of Dhul Hijjah, the Day of Arafah, and Eid-ul-Adha Qurbani distributions.
            </p>
          </div>

          {/* Interactive Countdown Widget */}
          <div className="mb-16">
            <HajjCountdown />
          </div>

          {/* Dhul Hijjah Milestones Calendar */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-sidqly-green-emerald" size={24} />
              <h2 className="text-2xl font-bold text-sidqly-navy">Key Dates of Hajj & Dhul Hijjah</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">1st of Dhul Hijjah</span>
                <h3 className="font-bold text-sidqly-navy text-lg mb-2">The Blessed 10 Days Begin</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Start of intense daily devotion, increased Sadaqah, voluntary fasting, and dhikr (Takbeerat: Allahu Akbar, Alhamdulillah, La ilaha illallah).
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">8th of Dhul Hijjah</span>
                <h3 className="font-bold text-sidqly-navy text-lg mb-2">Yawm al-Tarwiyah</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pilgrims enter Ihram and depart from Makkah to the tent city of Mina in preparation for standing at Mount Arafat.
                </p>
              </div>

              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">9th of Dhul Hijjah</span>
                <h3 className="font-bold text-sidqly-navy text-lg mb-2">Day of Arafah (Yawm Arafah)</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  The pinnacle of Hajj. For non-pilgrims, fasting on this day expiates sins of the previous year and the coming year.
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">10th of Dhul Hijjah</span>
                <h3 className="font-bold text-sidqly-navy text-lg mb-2">Eid-ul-Adha (Nahr)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Eid prayer in the morning, followed by Qurbani / Udhiya ritual sacrifice, stoning Jamarat al-Aqaba, shaving hair, and Tawaf al-Ifadah.
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100 md:col-span-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">11th – 13th of Dhul Hijjah</span>
                <h3 className="font-bold text-sidqly-navy text-lg mb-2">Ayyam al-Tashreeq</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Days of eating, drinking, and remembrance of Allah. Permissible days to complete ongoing Qurbani sacrifices and distribute meat packs to needy families.
                </p>
              </div>
            </div>
          </div>

          {/* Operational Playbook for Mosques & Charities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6 font-bold">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3">Qurbani / Udhiya Campaign Teams</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Eliminate post-Eid spreadsheet confusion. Sidqly’s Qurbani module assigns unique donor share codes, connects with partner abattoirs, and delivers automated verified certificates.
                </p>
                <ul className="text-xs text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Real-time 1/7 cow and sheep share allocation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Field slaughter photo logs with dignity face blurring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> One-click branded donor impact certificates</li>
                </ul>
              </div>
              <Link to="/use-cases/qurbani-organizers" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold text-sm hover:underline">
                Explore Qurbani Organizer Workflows <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6 font-bold">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3">Dhul Hijjah Zakat & Sadaqah Campaigns</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Capture high-volume donations during the best 10 days of the year with instant manual payment review, bank slip matching, and AAOIFI-compliant fund separation.
                </p>
                <ul className="text-xs text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Isolate restricted Zakat from general Eid gifts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Manual bank slip review queue with 4-eyes approval</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Automated Gift Aid & tax receipt exports</li>
                </ul>
              </div>
              <Link to="/resources/eid-giving" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold text-sm hover:underline">
                View Eid Giving Resource Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-6 text-center">Frequently Asked Questions: Hajj & Dhul Hijjah</h2>
            <div className="divide-y divide-gray-100">
              {faqList.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <h3 className="font-bold text-sidqly-navy text-base mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HajjCountdownPage;
