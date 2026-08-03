import React from 'react';
import SEO from '../../components/SEO';
import ZakatCalculator from '../../components/islamic/ZakatCalculator';
import { WorkflowVisualizer } from '../../components/ui/WorkflowVisualizer';

const ZakatCalculatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Zakat Planning Calculator | Sidqly"
        description="Estimate your Zakat obligations with our planning calculator. Supports manual Nisab input for accurate, localized planning."
        canonical="https://www.sidqly.com/zakat-calculator"
      />
      <div className="bg-sidqly-ivory min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy tracking-tight mb-4">
              Zakat Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Calculate an estimate for your Zakat planning based on current assets and liabilities.
            </p>
          </div>

          <ZakatCalculator />

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">Shariah-Conscious Zakat Lifecycle</h2>
               <p className="text-gray-600 text-sm max-w-xl mx-auto">See how Sidqly secures the Zakat process, separating ledgers, screening cases, and compiling reports securely.</p>
            </div>
            <WorkflowVisualizer initialWorkflowId="zakat-lifecycle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ZakatCalculatorPage;
