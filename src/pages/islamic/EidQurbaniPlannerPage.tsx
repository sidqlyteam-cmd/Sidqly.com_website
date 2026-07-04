import React from 'react';
import SEO from '../../components/SEO';
import EidQurbaniPlanner from '../../components/islamic/EidQurbaniPlanner';
import { brand } from '../../config/brand';

const EidQurbaniPlannerPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Eid & Qurbani Operations Planner | Sidqly",
    "description": "Interactive checklist to manage Qurbani vendors, verify manual payments, and send donor-safe updates.",
    "url": `${brand.domain}/eid-qurbani-planner`
  };

  return (
    <>
      <SEO
        title="Eid & Qurbani Operations Planner | Sidqly"
        description="Interactive checklist to manage Qurbani vendors, verify manual payments, and send donor-safe updates."
        canonical="/eid-qurbani-planner"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Eid & Qurbani <span className="text-sidqly-green-deep">Planner</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive checklist to track shares, review manual payments, and manage vendor slaughter proof.
            </p>
          </div>

          <div className="mb-12">
             <EidQurbaniPlanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default EidQurbaniPlannerPage;
