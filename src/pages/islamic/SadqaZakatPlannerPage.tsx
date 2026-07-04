import React from 'react';
import SEO from '../../components/SEO';
import SadqaZakatPlanner from '../../components/islamic/SadqaZakatPlanner';
import { brand } from '../../config/brand';

const SadqaZakatPlannerPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sadqa & Zakat Operations Planner | Sidqly",
    "description": "Plan your charity workflows with our interactive Sadqa and Zakat separation checklist.",
    "url": `${brand.domain}/sadqa-zakat-planner`
  };

  return (
    <>
      <SEO
        title="Sadqa & Zakat Operations Planner | Sidqly"
        description="Plan your charity workflows with our interactive Sadqa and Zakat separation checklist. Ensure operational integrity for Islamic giving."
        canonical="/sadqa-zakat-planner"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Sadqa & Zakat <span className="text-sidqly-green-deep">Planner</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maintain operational integrity by separating Zakat cases from general Sadaqah campaigns.
            </p>
          </div>

          <div className="mb-12">
             <SadqaZakatPlanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default SadqaZakatPlannerPage;
