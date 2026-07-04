import React from 'react';
import SEO from '../../components/SEO';
import RamadanCountdown from '../../components/islamic/RamadanCountdown';
import PrayerTimePlanningCard from '../../components/islamic/PrayerTimePlanningCard';
import { brand } from '../../config/brand';

const RamadanPlannerPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ramadan Planner & Countdown | Sidqly",
    "description": "Prepare your mosque or charity for Ramadan distributions with our countdown and operational checklist.",
    "url": `${brand.domain}/ramadan-planner`
  };

  return (
    <>
      <SEO
        title="Ramadan Planner & Countdown | Sidqly"
        description="Prepare your mosque or charity for Ramadan distributions with our countdown and operational checklist."
        canonical="/ramadan-planner"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Ramadan <span className="text-sidqly-green-deep">Planner</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track the estimated days until Ramadan and organize your Iftar, Suhoor, and ration pack distributions securely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-2">
                <RamadanCountdown />
             </div>
             <div className="md:col-span-1">
                <PrayerTimePlanningCard />
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RamadanPlannerPage;
