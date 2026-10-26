import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import QiblaDirectionTool from '../../components/islamic/QiblaDirectionTool';
import { brand } from '../../config/brand';
import { Compass, Sun, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const QiblaDirectionPage: React.FC = () => {
  const faqList = [
    {
      q: "What direction do Muslims face when praying?",
      a: "Muslims face the direction of the Kaaba, located inside the Masjid al-Haram in Makkah, Saudi Arabia. This sacred direction is known as the Qibla (Kiblah). Wherever you are on Earth, the shortest geodesic Great Circle path to the Kaaba represents your prayer direction."
    },
    {
      q: "How do I find the Qibla direction from my current location?",
      a: "You can find the Qibla direction using our browser-based compass tool, which calculates the exact heading degrees from True North based on your device coordinates. Alternatively, you can use the sun position at solar noon or consult local mosque prayer markers."
    },
    {
      q: "What direction is the Qibla in the United States, UK, and Europe?",
      a: "From North America (USA and Canada), the Qibla is generally towards the East-Northeast (around 50° to 65° from True North via the Great Circle route). From the UK and Western Europe, the Qibla is towards the Southeast (approximately 118° to 135°). From South Asia (Pakistan, India), the Qibla faces West-Northwest (around 260° to 275°)."
    },
    {
      q: "How can I find the prayer direction without a compass?",
      a: "If you do not have a compass or smartphone, you can use the sun: in the Northern Hemisphere outside the tropics, the sun is directly South at solar noon. In the morning, it rises in the East and sets in the West. Twice a year (May 27–28 and July 15–16), the sun passes directly above the Kaaba in Makkah; facing the sun at those exact moments aligns you directly with the Qibla."
    },
    {
      q: "Can I pray if I do not know the exact Qibla direction?",
      a: "According to Islamic jurisprudence, if you make a sincere effort (Ijtihad) to determine the Qibla using available indicators (sun, stars, map, or asking locals) and pray facing your best estimation, your prayer is valid and does not need to be repeated even if you later discover a minor deviation."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${brand.domain}/qibla-direction#app`,
        "name": "Qibla Direction Online Compass: Find What Direction to Pray | Sidqly",
        "description": "Free online Qibla direction finder and interactive Kaaba compass. Learn what direction to pray anywhere in the world using solar calculations, magnetic compass, and GPS.",
        "url": `${brand.domain}/qibla-direction`,
        "applicationCategory": "UtilitiesApplication"
      },
      {
        "@type": "FAQPage",
        "@id": `${brand.domain}/qibla-direction#faq`,
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
        title="Qibla Direction Online Compass: What Direction to Pray (Kaaba Direction) | Sidqly"
        description="Find the exact Qibla direction to the Kaaba in Makkah from anywhere in the world. Accurate prayer direction compass, solar alignment guides, and prayer FAQs."
        canonical="/qibla-direction"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-emerald-800 uppercase bg-emerald-100/70 rounded-full border border-emerald-200 tracking-wider">
              Accurate Kaaba Compass & Prayer Direction
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">
              Online Qibla Direction Compass
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Calculate the precise direction to the holy Kaaba in Makkah from anywhere on Earth with privacy-first local calculations.
            </p>
          </div>

          {/* Interactive Tool */}
          <div className="mb-14">
            <QiblaDirectionTool />
          </div>

          {/* 4 Methods to Determine Prayer Direction */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-sidqly-green-emerald" size={26} />
              <h2 className="text-2xl font-bold text-sidqly-navy">How to Find the Qibla (4 Verified Methods)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <h3 className="font-bold text-sidqly-navy text-base mb-2 flex items-center gap-2">
                  <Compass size={18} className="text-emerald-700" /> 1. Great Circle Compass Bearing
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  The Earth is spherical, so the shortest trajectory to Makkah follows a Great Circle (Orthodrome). Using your device's built-in magnetometer, our tool computes the precise bearing in degrees from True North.
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <h3 className="font-bold text-sidqly-navy text-base mb-2 flex items-center gap-2">
                  <Sun size={18} className="text-emerald-700" /> 2. Sun & Shadow Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  At solar noon, shadows point directly North (in northern latitudes outside tropics). Twice per year (May 28 at 09:18 UTC and July 16 at 09:27 UTC), the sun is directly overhead the Kaaba; your shadow points directly away from Makkah.
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <h3 className="font-bold text-sidqly-navy text-base mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-emerald-700" /> 3. Regional Landmark Bearings
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  In North America, face East-Northeast (~55°). In the UK and Europe, face Southeast (~120°–130°). In Pakistan and India, face West-Northwest (~265°). In Australia, face Northwest (~290°).
                </p>
              </div>

              <div className="p-5 bg-sidqly-ivory rounded-2xl border border-gray-100">
                <h3 className="font-bold text-sidqly-navy text-base mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-700" /> 4. Mosque Mihrab Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Every mosque architecture features a <em>Mihrab</em> (prayer niche) pointing towards Makkah. When visiting Islamic centers or hotels with Qibla arrow ceiling stickers, follow the official verified surveyor marker.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Operational Applications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" /> Zero Tracking Privacy Guarantee
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sidqly calculates prayer coordinates 100% locally in your client browser. We never transmit your GPS coordinates to our backend, store your coordinates, or sell your location telemetry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sidqly-navy mb-2 flex items-center gap-2">
                  <Compass size={18} className="text-emerald-600" /> Mosque Program & Event Layout
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Mosque committees and volunteer field camps use this tool to orient prayer halls, temporary tents, and volunteer rest stations accurately.
                </p>
              </div>
              <Link to="/namaz-timings" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold text-xs hover:underline">
                View Daily Namaz Timings & Schedules <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-6 text-center">Frequently Asked Questions About Prayer Direction</h2>
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

export default QiblaDirectionPage;
