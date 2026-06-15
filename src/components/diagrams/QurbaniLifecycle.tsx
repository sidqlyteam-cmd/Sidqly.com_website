import React from 'react';

const QurbaniLifecycle: React.FC = () => {
  const steps = [
    "Qurbani campaign parameters set",
    "Donor reserves a share",
    "Payment is verified manually",
    "Share is allocated to a specific animal/location",
    "Vendor receives slaughter instructions",
    "Slaughter is completed and logged",
    "Meat distribution proof is uploaded",
    "Proof is verified by management",
    "Donor-safe update and Qurbani certificate is sent"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h3 className="text-xl font-bold text-sidqly-navy mb-6 text-center">Qurbani/Udhiya Lifecycle</h3>
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4 bg-sidqly-ivory p-4 rounded-xl border border-gray-100 hover:border-sidqly-green-soft transition-colors">
            <div className="w-8 h-8 rounded-full bg-sidqly-green-deep text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {i + 1}
            </div>
            <p className="text-sm font-medium text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QurbaniLifecycle;
