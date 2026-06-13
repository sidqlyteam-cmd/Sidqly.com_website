import React from 'react';

const OperatingJourney: React.FC = () => {
  const steps = [
    { title: "Intake", desc: "Donations & Requests", color: "bg-sidqly-ivory" },
    { title: "Verify", desc: "Manual Review Gate", color: "bg-sidqly-green-soft/20" },
    { title: "Fulfill", desc: "Vendor & Operations", color: "bg-sidqly-navy" },
    { title: "Proof", desc: "Dignity-Safe Impact", color: "bg-sidqly-green-emerald" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 text-center flex flex-col items-center">
             <div className={`w-24 h-24 ${step.color} rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-center mb-6 hover:-translate-y-1 transition-transform cursor-default group`}>
                <div className={`text-xl font-bold ${i === 2 || i === 3 ? 'text-white' : 'text-sidqly-navy'} group-hover:scale-110 transition-transform`}>0{i + 1}</div>
             </div>
             <h4 className="font-bold text-sidqly-navy mb-2">{step.title}</h4>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingJourney;
