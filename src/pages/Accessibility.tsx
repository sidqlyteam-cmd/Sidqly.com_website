import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Accessibility: React.FC = () => {
  return (
    <>
      <SEO title="Accessibility" canonical="/accessibility" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-10">Accessibility</h1>
            <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">
              <p>Sidqly aims to provide clear, readable, mobile-friendly pages with accessible navigation, readable contrast, and simple content for organizations and donors.</p>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Our Commitment</h2>
                <p>We are committed to ensuring our platform is accessible to all users, regardless of their physical or cognitive abilities. We follow standard web accessibility practices to ensure a professional and inclusive experience.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Feedback</h2>
                <p>If you encounter any accessibility barriers on our website or platform, please let us know at {brand.email}.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accessibility;
