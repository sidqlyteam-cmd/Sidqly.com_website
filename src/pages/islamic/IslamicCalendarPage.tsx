import React from 'react';
import SEO from '../../components/SEO';
import IslamicDateWidget from '../../components/islamic/IslamicDateWidget';
import IslamicCalendarPanel from '../../components/islamic/IslamicCalendarPanel';
import { brand } from '../../config/brand';

const IslamicCalendarPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Islamic Calendar & Hijri Date Planning Tool | Sidqly",
    "description": "Plan your Islamic charity workflows with the current Hijri date and Islamic calendar. View estimated dates for Ramadan, Hajj, and Eid distributions.",
    "url": `${brand.domain}/islamic-calendar`,
    "publisher": {
      "@type": "Organization",
      "name": "Sidqly",
      "logo": `${brand.domain}/brand/sidqly-mark.svg`
    }
  };

  return (
    <>
      <SEO
        title="Islamic Calendar & Hijri Date Planning Tool | Sidqly"
        description="Plan your Islamic charity workflows with the current Hijri date and Islamic calendar. View estimated dates for Ramadan, Hajj, and Eid distributions."
        canonical="/islamic-calendar"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Islamic Calendar <span className="text-sidqly-green-deep">&</span> Date Planner
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Operationally align your giving workflows, payment reviews, and vendor fulfillments with key Hijri dates.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
               <IslamicDateWidget />

               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-sidqly-navy mb-3">Why plan with Sidqly?</h3>
                  <p className="text-sm text-gray-600 mb-4">Mosques and charities face operational spikes during specific Islamic months. Sidqly provides the workflow tools to handle these spikes securely.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                     <li>• <strong>Ramadan:</strong> High-volume Iftar and Sadqa processing.</li>
                     <li>• <strong>Dhul Hijjah:</strong> Qurbani vendor tracking and share allocation.</li>
                     <li>• <strong>Muharram:</strong> Annual reporting and new campaign setups.</li>
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-2">
               <IslamicCalendarPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamicCalendarPage;
