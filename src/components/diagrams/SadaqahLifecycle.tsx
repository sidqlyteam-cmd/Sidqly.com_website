import React from 'react';

const SadaqahLifecycle: React.FC = () => {
  const steps = [
    { label: "Start point", text: "Sadaqah/Sadqa campaign setup & contribution received" },
    { label: "Review/action steps", text: "Donation/payment review; Assignment to team; Aid delivered" },
    { label: "Human approval gates", text: "Proof uploaded; Approved by management" },
    { label: "Output/result", text: "Verified Sadaqah delivery record" },
    { label: "Safe visibility boundary", text: "Donor update shared without exposing recipient identity" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h3 className="text-xl font-bold text-sidqly-navy mb-6 text-center">Sadaqah/Sadqa Lifecycle</h3>
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 bg-sidqly-ivory p-4 rounded-xl border border-gray-100 hover:border-sidqly-green-soft transition-colors">
            <div className="flex items-center gap-3 md:w-1/3">
              <div className="w-8 h-8 rounded-full bg-sidqly-green-deep text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <span className="font-bold text-sidqly-navy text-sm uppercase tracking-wider">{step.label}</span>
            </div>
            <p className="text-sm font-medium text-gray-600 md:w-2/3">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SadaqahLifecycle;
