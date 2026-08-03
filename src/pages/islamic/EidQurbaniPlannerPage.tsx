import React from 'react';
import SEO from '../../components/SEO';
import EidQurbaniPlanner from '../../components/islamic/EidQurbaniPlanner';
import { brand } from '../../config/brand';
import { WorkflowVisualizer } from '../../components/ui/WorkflowVisualizer';

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

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">Qurbani Fulfillment Lifecycle</h2>
               <p className="text-gray-600 text-sm max-w-xl mx-auto">See how Sidqly tracks livestock orders, assigns vendor SLA tasks, checks slaughter proof, and archives certificates.</p>
            </div>
            <WorkflowVisualizer initialWorkflowId="qurbani-fulfillment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EidQurbaniPlannerPage;
