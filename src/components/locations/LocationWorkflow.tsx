import React from 'react';

const LocationWorkflow: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white text-slate-900 text-center overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-12 text-slate-900">The Sidqly Workflow</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Create campaign", "Receive payment proof", "Review proof manually", "Approve or reject",
            "Assign fulfillment", "Collect field proof", "Review for dignity", "Prepare donor update", "Share update", "Generate board report"
          ].map((step, i) => (
            <div key={i} className="bg-white px-6 py-4 rounded-xl border border-slate-200 font-medium text-sm text-slate-700 shadow-sm hover:border-emerald-300 transition-colors">
              <span className="text-emerald-600 font-bold mr-2">{i + 1}.</span> {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationWorkflow;
