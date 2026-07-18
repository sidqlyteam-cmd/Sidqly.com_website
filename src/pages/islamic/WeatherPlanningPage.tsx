import React from 'react';
import SEO from '../../components/SEO';
import WeatherPlanningWidget from '../../components/islamic/WeatherPlanningWidget';
import { brand } from '../../config/brand';

const WeatherPlanningPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Weather-Aware Charity Distribution Planning | Sidqly",
    "description": "Get operational guidance based on weather forecasts to protect volunteers and ensure safe charity distribution.",
    "url": `${brand.domain}/weather-charity-distribution`,
    "applicationCategory": "BusinessApplication"
  };

  return (
    <>
      <SEO
        title="Weather-Aware Charity Distribution Planning | Sidqly"
        description="Get operational guidance based on weather forecasts to protect volunteers and ensure safe charity distribution. Plan logistics for rain, heat, and cold."
        canonical="https://www.sidqly.com/weather-charity-distribution"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              Weather-Aware <span className="text-sidqly-green-deep">Planning</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check weather impacts to adjust distribution logistics, protect volunteer health, and ensure food safety for rations and Iftars.
            </p>
          </div>

          <div className="mb-12">
             <WeatherPlanningWidget />
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
             <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Why weather matters for operations</h2>

             <div className="grid md:grid-cols-3 gap-6">
                <div>
                   <h4 className="font-bold text-sidqly-green-deep mb-2">Volunteer Safety</h4>
                   <p className="text-sm text-gray-600">Extreme heat or cold requires adjusted shift lengths, hydration stations, and proper gear to keep your field teams safe.</p>
                </div>
                <div>
                   <h4 className="font-bold text-sidqly-green-deep mb-2">Food Integrity</h4>
                   <p className="text-sm text-gray-600">Prepared Iftar meals and raw Qurbani meat must be temperature-controlled. Weather directly dictates packaging requirements.</p>
                </div>
                <div>
                   <h4 className="font-bold text-sidqly-green-deep mb-2">Recipient Dignity</h4>
                   <p className="text-sm text-gray-600">Avoid making beneficiaries wait in heavy rain or harsh sun. Adjust routing and use covered distribution points.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPlanningPage;
