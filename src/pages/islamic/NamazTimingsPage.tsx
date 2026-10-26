import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import NamazTimingWidget from '../../components/islamic/NamazTimingWidget';
import { brand } from '../../config/brand';
import { Moon, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

const NamazTimingsPage: React.FC = () => {
  const faqList = [
    {
      q: "How is Jummah Namaz time determined?",
      a: "Jummah (Friday congregation) prayer takes place during the regular Dhuhr prayer window, beginning immediately after the sun passes its zenith (solar noon / Zawal). Mosques typically begin the Friday Khutbah (sermon) 15 to 30 minutes after Zawal, followed by the two-rak'ah congregational prayer."
    },
    {
      q: "How do you calculate the end time for Isha prayer (Islamic midnight)?",
      a: "According to authentic hadiths (Sahih Muslim), the preferred time for Isha prayer ends at the midpoint of the Islamic night (Nisf al-Layl). Islamic midnight is calculated by taking the exact total duration between Maghrib (sunset) and Fajr (true dawn), dividing it in half, and adding that duration to the Maghrib start time. This is different from 12:00 AM clock midnight."
    },
    {
      q: "What calculation conventions does Sidqly support?",
      a: "Sidqly calculates prayer schedules using recognized international Islamic calculation methods including the University of Islamic Sciences (Karachi), Islamic Society of North America (ISNA), Muslim World League (MWL), Umm al-Qura University (Makkah), and Egyptian General Authority of Survey."
    },
    {
      q: "When is the best time for Tahajjud (Night Prayer)?",
      a: "The best time for Tahajjud and Qiyam al-Layl is during the last third of the Islamic night (Thuluth al-Akhir), shortly before the start of Fajr prayer, when divine mercy and answered supplications are promised."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${brand.domain}/namaz-timings#webpage`,
        "url": `${brand.domain}/namaz-timings`,
        "name": "Namaz Timings, Jummah Prayer Times & Isha End Time Calculator | Sidqly",
        "description": "Accurate location-based Namaz timings, Jummah khutbah schedules, Qibla compass, and Isha end time (Islamic midnight) calculator for daily prayer planning.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": brand.domain },
            { "@type": "ListItem", "position": 2, "name": "Islamic Utilities", "item": `${brand.domain}/islamic-utilities` },
            { "@type": "ListItem", "position": 3, "name": "Namaz Timings", "item": `${brand.domain}/namaz-timings` }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${brand.domain}/namaz-timings#faq`,
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
        title="Namaz Timings, Jummah Prayer Times & Isha End Time Calculator | Sidqly"
        description="Accurate location-based Namaz timings, Jummah khutbah schedules, Qibla compass, and Isha end time (Islamic midnight) calculator for daily prayer planning."
        canonical="/namaz-timings"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-emerald-800 uppercase bg-emerald-100/70 rounded-full border border-emerald-200 tracking-wider">
              Daily Salah & Congregation Logistics
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">
              Namaz Timings & Prayer Planner
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Calculate verified local prayer times, Friday Jummah schedules, and Islamic midnight deadlines to plan your worship, mosque programs, and field operations.
            </p>
          </div>

          {/* Interactive Widget */}
          <div className="mb-14">
            <NamazTimingWidget />
          </div>

          {/* Jummah & Isha End Time Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-4">
                <Calendar size={22} />
              </div>
              <h2 className="text-xl font-bold text-sidqly-navy mb-3">Jummah Namaz Time & Khutbah Guide</h2>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Friday Jumu'ah replaces the ordinary Dhuhr prayer and begins immediately after the sun passes its highest point in the sky (Zawal).
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Khutbah Start:</strong> Most mosques schedule the English/local speech 15–30 minutes before the Arabic sermon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Sunnah Acts:</strong> Performing Ghusl, applying perfume (for men), reciting Surah Al-Kahf, and arriving early.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Mosque Scheduling:</strong> Sidqly helps mosques coordinate multi-shift Friday prayers during peak seasonal changes.</span>
                </li>
              </ul>
              <Link to="/modules/ai-khutbah-reader" className="text-xs font-bold text-sidqly-green-deep hover:underline inline-flex items-center gap-1">
                Explore Live AI Multilingual Khutbah Reader <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-4">
                <Moon size={22} />
              </div>
              <h2 className="text-xl font-bold text-sidqly-navy mb-3">Isha End Time & Islamic Midnight</h2>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Unlike clock midnight (12:00 AM), Islamic midnight (<em>Nisf al-Layl</em>) marks the halfway point of the night between sunset (Maghrib) and true dawn (Fajr).
              </p>
              <div className="bg-sidqly-ivory p-4 rounded-xl border border-gray-150 text-xs text-gray-700 mb-4 font-mono">
                Islamic Midnight = Maghrib Time + [(Fajr Time - Maghrib Time) ÷ 2]
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                According to the majority of scholars based on the hadith of Abdullah ibn Amr (Sahih Muslim), performing Isha before Islamic midnight is Sunnah. The final third of the night follows, ideal for Tahajjud prayers.
              </p>
              <Link to="/qibla-direction" className="text-xs font-bold text-sidqly-green-deep hover:underline inline-flex items-center gap-1">
                Check Qibla Compass Direction <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="text-sidqly-green-emerald" size={24} />
              <h2 className="text-2xl font-bold text-sidqly-navy">Frequently Asked Questions: Prayer Schedules</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {faqList.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <h3 className="font-bold text-sidqly-navy text-sm mb-1">{faq.q}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NamazTimingsPage;
