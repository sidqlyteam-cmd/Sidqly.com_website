import React from 'react';

const VendorLifecycle: React.FC = () => {
  const steps = [
    "Organization creates fulfillment tasks",
    "Vendor receives task notification",
    "Vendor accepts and prepares delivery",
    "Vendor completes delivery/service",
    "Vendor uploads proof (photos/documents)",
    "Organization reviews and approves proof",
    "Vendor payment is reconciled and authorized"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h3 className="text-xl font-bold text-sidqly-navy mb-6 text-center">Vendor Fulfillment Lifecycle</h3>
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

export default VendorLifecycle;
