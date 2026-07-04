import React from 'react';
import SEO from '../../components/SEO';
import QiblaDirectionTool from '../../components/islamic/QiblaDirectionTool';
import { brand } from '../../config/brand';

const QiblaDirectionPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Qibla Direction Tool for Operational Planning | Sidqly",
    "description": "Calculate approximate Qibla direction for site layout, distribution logistics, and operational planning.",
    "url": `${brand.domain}/qibla-direction`,
    "applicationCategory": "UtilitiesApplication"
  };

  return (
    <>
      <SEO
        title="Qibla Direction Tool for Operational Planning | Sidqly"
        description="Calculate approximate Qibla direction for site layout, distribution logistics, and operational planning without tracking your location."
        canonical="/qibla-direction"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Qibla Direction <span className="text-sidqly-green-deep">Tool</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A privacy-first compass tool to help organizations plan site layouts, prayer areas for volunteers, and distribution logistics.
            </p>
          </div>

          <div className="mb-12">
             <QiblaDirectionTool />
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sidqly-navy mb-3">Privacy Guarantee</h3>
                <p className="text-gray-600">
                  Sidqly believes in strict data privacy. This tool calculates the direction locally in your browser. We do not store your coordinates, send them to our servers, or track them in our analytics.
                </p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sidqly-navy mb-3">Operational Use</h3>
                <p className="text-gray-600">
                  Use this tool to orient volunteer rest areas, temporary field camps, and distribution zones. For official religious rulings or mosque alignments, always consult a certified scholar or surveyor.
                </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QiblaDirectionPage;
