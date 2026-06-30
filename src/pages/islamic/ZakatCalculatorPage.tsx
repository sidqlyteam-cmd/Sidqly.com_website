import React from 'react';
import SEO from '../../components/SEO';
import ZakatCalculator from '../../components/islamic/ZakatCalculator';

const ZakatCalculatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Zakat Planning Calculator | Sidqly"
        description="Estimate your Zakat obligations with our planning calculator. Supports manual Nisab input for accurate, localized planning."
        canonical="https://sidqly.com/zakat-calculator"
      />
      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-sidqly-navy tracking-tight mb-4">
              Zakat Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Calculate an estimate for your Zakat planning based on current assets and liabilities.
            </p>
          </div>

          <ZakatCalculator />
        </div>
      </div>
    </>
  );
};

export default ZakatCalculatorPage;
