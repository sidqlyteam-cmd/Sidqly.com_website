import React from 'react';

const FullGivingLifecycle: React.FC = () => {
  const steps = [
    { label: "Start point", text: "Campaign/service is created & donor contributes" },
    { label: "Review/action steps", text: "Payment is manually reviewed; Fund type/workflow classified; Staff/vendor assigned; Aid delivered" },
    { label: "Human approval gates", text: "Proof is uploaded internally & reviewed for privacy and dignity" },
    { label: "Output/result", text: "Donor-safe update approved; Receipt/certificate prepared" },
    { label: "Safe visibility boundary", text: "Leadership/corporate board report generated without private details" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h3 className="text-xl font-bold text-sidqly-navy mb-6 text-center">Full Giving Lifecycle</h3>
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

export default FullGivingLifecycle;
