import React from 'react';
import SEO from '../../components/SEO';
import MoonPhaseCard from '../../components/islamic/MoonPhaseCard';
import { brand } from '../../config/brand';
import { Link } from 'react-router-dom';

const MoonPhasePage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Moon Phase & Lunar Planning | Sidqly",
    "description": "View approximate lunar phases to plan upcoming Islamic charity campaigns and operational workflows.",
    "url": `${brand.domain}/moon-phase-islamic-calendar`
  };

  return (
    <>
      <SEO
        title="Moon Phase & Lunar Planning | Sidqly"
        description="View approximate lunar phases to plan upcoming Islamic charity campaigns and operational workflows."
        canonical="/moon-phase-islamic-calendar"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Lunar Phase <span className="text-sidqly-green-deep">Planning</span>
            </h1>
            <p className="text-lg text-gray-600">
              Align your organizational readiness with the lunar cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
               <MoonPhaseCard />
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
               <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Operational Readiness</h2>
               <p className="text-gray-600 mb-6">As the lunar month progresses, charities must prepare for month-end reconciliation and new month campaign launches.</p>

               <h3 className="font-bold text-sm text-sidqly-green-deep mb-3 uppercase tracking-wider">How to prepare</h3>
               <ul className="space-y-4 text-sm text-gray-700 mb-8">
                  <li className="flex gap-3">
                     <span className="font-bold text-gray-400">01</span>
                     <span><strong>New Moon:</strong> Launch new monthly giving appeals and Sadaqah campaigns.</span>
                  </li>
                  <li className="flex gap-3">
                     <span className="font-bold text-gray-400">02</span>
                     <span><strong>Full Moon:</strong> Mid-month check on vendor fulfillment and volunteer availability.</span>
                  </li>
                  <li className="flex gap-3">
                     <span className="font-bold text-gray-400">03</span>
                     <span><strong>Waning Crescent:</strong> Generate board-ready reports for the closing month and prepare receipts.</span>
                  </li>
               </ul>

               <Link to="/islamic-calendar" className="text-sidqly-green-deep font-bold hover:underline">
                  View Full Islamic Calendar →
               </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoonPhasePage;
