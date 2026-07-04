import React from 'react';
import SEO from '../../components/SEO';
import NamazTimingWidget from '../../components/islamic/NamazTimingWidget';

const NamazTimingsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Namaz Timings and Prayer Time Planner | Sidqly"
        description="Calculate approximate Namaz timings using standard methods to support operational planning for Islamic charities, mosques, and giving organizations."
        canonical="https://sidqly.com/namaz-timings"
      />
      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy tracking-tight mb-4">
              Namaz Timings
            </h1>
            <p className="text-lg text-gray-600">
              Calculate approximate prayer times to help plan operational activities, charity distribution events, and mosque programs.
            </p>
          </div>

          <NamazTimingWidget />
        </div>
      </div>
    </>
  );
};

export default NamazTimingsPage;
