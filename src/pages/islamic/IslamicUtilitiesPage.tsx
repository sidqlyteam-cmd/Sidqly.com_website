import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { Link } from 'react-router-dom';
import { Calendar, Compass, CloudSun, Moon, Gift, Heart, BookOpen, Clock, Activity, Calculator } from 'lucide-react';
import MainLayout from '../../layout/MainLayout';

const utilities = [
  { title: "Namaz Timings", path: "/namaz-timings", desc: "Calculate approximate prayer times for operational planning.", icon: <Clock size={24} /> },
  { title: "Zakat Calculator", path: "/zakat-calculator", desc: "Estimate your Zakat for operational and personal planning.", icon: <Calculator size={24} /> },
  { title: "Qibla Direction", path: "/qibla-direction", desc: "Compass for site logistics and prayer area setup.", icon: <Compass size={24} /> },
  { title: "Islamic Calendar", path: "/islamic-calendar", desc: "Plan your charity workflows with current Hijri date awareness.", icon: <Calendar size={24} /> },
  { title: "Moon Phase", path: "/moon-phase-islamic-calendar", desc: "Approximate lunar phase planning tool.", icon: <Moon size={24} /> },
  { title: "Weather-Aware Distribution", path: "/weather-charity-distribution", desc: "Plan open-air distributions with local weather in mind.", icon: <CloudSun size={24} /> },
  { title: "Ramadan Planner", path: "/ramadan-planner", desc: "Timeline checklist for Iftar and Sadqa processing.", icon: <Heart size={24} /> },
  { title: "Eid/Qurbani Planner", path: "/eid-qurbani-planner", desc: "Qurbani workflow management and share allocation checklist.", icon: <Gift size={24} /> },
  { title: "Hajj Countdown", path: "/hajj-countdown", desc: "Estimated timeline to align Qurbani planning seasons.", icon: <Clock size={24} /> },
  { title: "Sadqa/Zakat Planner", path: "/sadqa-zakat-planner", desc: "Zakat separation and Sadqa flexibility checklists.", icon: <Activity size={24} /> },
  { title: "Islamic Glossary", path: "/islamic-glossary", desc: "Definitions of Islamic giving terms and operational contexts.", icon: <BookOpen size={24} /> },
];

const IslamicUtilitiesPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Islamic Utilities Hub | Sidqly",
    "description": "Practical tools built for Islamic charity operations. Plan Ramadan, Qurbani, Sadqa, and Zakat with Qibla direction, Namaz timings, Hijri dates, and weather-aware tools.",
    "url": `${brand.domain}/islamic-utilities`,
  };

  return (
    <MainLayout>
      <SEO
        title="Islamic Utilities & Planning Tools | Sidqly"
        description="Plan Ramadan, Qurbani, Sadqa, Zakat, Qibla direction, Namaz timings and weather-aware distributions with practical tools for Islamic charity operations."
        canonical="https://sidqly.com/islamic-utilities"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Islamic <span className="text-sidqly-green-deep">Utilities</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Practical planning tools and utilities built to support giving teams, mosques, and charities globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((util, idx) => (
              <Link key={idx} to={util.path} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald hover:shadow-md transition-all flex flex-col group">
                <div className="flex items-center gap-3 mb-4">
                   <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                      {util.icon}
                   </div>
                   <h3 className="font-bold text-lg text-sidqly-navy">{util.title}</h3>
                </div>
                <p className="text-sm text-gray-600 flex-grow">{util.desc}</p>
                <div className="mt-6 font-bold text-sm text-sidqly-green-deep flex items-center gap-1 group-hover:gap-2 transition-all">
                  Use Tool <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IslamicUtilitiesPage;
