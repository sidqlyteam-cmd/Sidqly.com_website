import React from 'react';

const LocationWorkflow: React.FC = () => {
  return (
    <section className="py-20 bg-sidqly-navy text-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">The Sidqly Workflow</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Create campaign", "Receive payment proof", "Review proof manually", "Approve or reject",
            "Assign fulfillment", "Collect field proof", "Review for dignity", "Prepare donor update", "Share update", "Generate board report"
          ].map((step, i) => (
            <div key={i} className="bg-white/10 px-6 py-4 rounded-xl border border-white/20 font-medium text-sm text-gray-200">
              <span className="text-sidqly-green-emerald font-bold mr-2">{i + 1}.</span> {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationWorkflow;
