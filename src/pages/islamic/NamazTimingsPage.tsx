import React from 'react';
import SEO from '../../components/SEO';
import NamazTimingWidget from '../../components/islamic/NamazTimingWidget';

const NamazTimingsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Namaz Timings and Qibla Direction Planner | Sidqly"
        description="Calculate location-based Namaz timings and Qibla direction using standard calculation methods for operational planning."
        canonical="https://www.sidqly.com/namaz-timings"
      />
      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy tracking-tight mb-4">
              Namaz Timings & Qibla Direction
            </h1>
            <p className="text-lg text-gray-600">
              Calculate accurate local prayer times and Qibla direction to help plan operational activities, field distributions, and mosque programs.
            </p>
          </div>

          <NamazTimingWidget />
        </div>
      </div>
    </>
  );
};

export default NamazTimingsPage;
