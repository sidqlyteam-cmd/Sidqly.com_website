import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Terms: React.FC = () => {
  return (
    <>
      <SEO title="Terms of Service" canonical="/terms" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-10">Terms of Service</h1>
            <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">
              <p>Last updated: June 12, 2026</p>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">1. Acceptance of Terms</h2>
                <p>By using the Sidqly platform, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">2. Description of Service</h2>
                <p>Sidqly provides an operating platform for Islamic organizations to manage donations, fulfillment, and reporting. We do not provide religious rulings or automatic financial advice.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">3. Organization Responsibilities</h2>
                <p>Organizations are responsible for the accuracy of the data they input and the manual review of all payments and Zakat disbursements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">4. Manual Review Policy</h2>
                <p>Sidqly is a tool to assist manual processes. Organizations must maintain human review over all critical operations to ensure compliance with their own internal standards.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">5. Contact</h2>
                <p>Questions about our terms can be directed to {brand.email}.</p>
              </section>

              <div className="mt-12 p-6 bg-sidqly-green-soft/20 border border-sidqly-green-soft/50 rounded-2xl text-center not-prose">
                <p className="text-sm font-bold text-sidqly-navy">
                    Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
