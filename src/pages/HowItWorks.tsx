import React from 'react';
import SEO from '../components/SEO';
import OperatingJourney from '../components/diagrams/OperatingJourney';
import ManualPaymentReview from '../components/diagrams/ManualPaymentReview';
import ProofTrustEngine from '../components/diagrams/ProofTrustEngine';
import ZakatSeparation from '../components/diagrams/ZakatSeparation';
import { brand } from '../config/brand';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Campaign Planning", desc: "Organization creates or plans a campaign (e.g. Ramadan Ration or Qurbani shares)." },
    { title: "Intake", desc: "Donors or sponsors submit payments; aid seekers submit requests via standardized forms." },
    { title: "Manual Review", desc: "Payments and cases are manually reviewed by your team to ensure data accuracy." },
    { title: "Classification", desc: "Funds are logically separated into Zakat, Sadaqah, or specific project pools." },
    { title: "Task Assignment", desc: "Operations are broken down into tasks and assigned to staff, vendors, or volunteers." },
    { title: "Field Execution", desc: "Teams on the ground complete distribution, animal slaughter, or aid delivery." },
    { title: "Proof Collection", desc: "Field teams upload verification evidence (photos, notes, QR scans) directly to the platform." },
    { title: "Approval Gate", desc: "Your management team reviews and approves field proof before it becomes donor-visible." },
    { title: "Dignified Updates", desc: "Sidqly automatically blurs faces and generates secure impact links for donors." },
    { title: "Donor Documents", desc: "Professional receipts and certificates are automatically prepared and sent." },
    { title: "Board Reporting", desc: "Real-time, board-ready impact reports and financial summaries are generated." },
    { title: "Optimization", desc: "Your organization uses data-driven insights to improve future campaigns." }
  ];

  return (
    <>
      <SEO
        title="How Sidqly Works"
        description="Explore the full 12-step operational lifecycle of Islamic giving on the Sidqly platform. From planning to board-ready reports."
        canonical="/how-it-works"
      />

      {/* Hero */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Professional Lifecycle</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto">
            Sidqly transforms fragmented manual work into a structured 12-step lifecycle that ensures trust, dignity, and clarity.
          </p>
        </div>
      </section>

      {/* Operating Journey Overview */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-sidqly-navy mb-16">The Core Operating Journey</h2>
           <OperatingJourney />
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-24 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start group">
                   <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-sidqly-green-deep font-bold flex-shrink-0 group-hover:bg-sidqly-green-deep group-hover:text-white transition-all">
                      {i + 1}
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Diagram Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div>
                 <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Manual Review Gates</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                    We maintain the human touch of Amanah. Every payment is human-verified before it appears in impact reports, preventing accounting errors and "phantom" donations.
                 </p>
                 <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100 flex items-center gap-4 text-sidqly-green-deep font-bold">
                    <CheckCircle2 /> Manual Verification Gate
                 </div>
              </div>
              <ManualPaymentReview />
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 lg:order-1">
                 <ProofTrustEngine />
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Proof Approval Workflow</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                    Field evidence is reviewed by your management team before it's shared with donors. This ensures that only high-quality, verified, and dignified updates are sent out.
                 </p>
                 <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100 flex items-center gap-4 text-sidqly-green-deep font-bold">
                    <CheckCircle2 /> Dignity-Safe Face Blurring
                 </div>
              </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Logical Fund Separation</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                    Sidqly enforces strict separation of Zakat and Sadaqah funds from the point of entry, providing a clear audit trail for religious and financial compliance.
                 </p>
                 <div className="bg-sidqly-ivory p-6 rounded-3xl border border-gray-100 flex items-center gap-4 text-sidqly-green-deep font-bold">
                    <CheckCircle2 /> Verified Zakat Audit Trail
                 </div>
              </div>
              <ZakatSeparation />
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to organize your lifecycle?</h2>
           <p className="text-sidqly-green-soft mb-12 max-w-2xl mx-auto text-lg">
              Book a Sidqly demo to discuss your specific giving operations and reporting needs.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all shadow-lg">Book Demo</a>
              <Link to="/pricing" className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">View Pricing</Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
