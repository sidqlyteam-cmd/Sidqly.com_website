import React from 'react';
import SEO from '../../components/SEO';
import HajjCountdown from '../../components/islamic/HajjCountdown';
import { brand } from '../../config/brand';

const HajjCountdownPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hajj & Dhul Hijjah Operational Countdown | Sidqly",
    "description": "Plan your Qurbani and Dhul Hijjah charity workflows with our estimated countdown and timeline planner.",
    "url": `${brand.domain}/hajj-countdown`
  };

  return (
    <>
      <SEO
        title="Hajj & Dhul Hijjah Operational Countdown | Sidqly"
        description="Plan your Qurbani and Dhul Hijjah charity workflows with our estimated countdown and timeline planner."
        canonical="/hajj-countdown"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Hajj Season <span className="text-sidqly-green-deep">Planner</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prepare your organization for the high-volume Dhul Hijjah and Qurbani giving period.
            </p>
          </div>

          <div className="mb-12">
             <HajjCountdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default HajjCountdownPage;
