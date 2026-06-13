import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy" canonical="/privacy" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
            <h1 className="text-4xl font-bold text-sidqly-navy mb-10">Privacy Policy</h1>
            <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">
              <p>Last updated: June 12, 2024</p>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">1. Our Commitment to Privacy</h2>
                <p>Sidqly is built with privacy at its core. We understand the sensitivity of the data managed by Islamic organizations and the importance of protecting donor and recipient identities.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">2. Data We Collect</h2>
                <p>We only collect data that is strictly necessary for the operation of the Sidqly platform. This includes organization details, user accounts for your team, and transaction records needed for audit purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">3. How We Use Data</h2>
                <p>Data is used exclusively to provide the services offered by Sidqly, such as generating reports, managing workflows, and verifying impact. We do not sell data to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">4. Dignity-Safe Data Handling</h2>
                <p>Recipient data is treated with the highest level of care. Our system enforces blurring and encryption for recipient identifiers when sharing proof of impact with donors.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-4">5. Contact Us</h2>
                <p>If you have any questions about our privacy practices, please contact us at {brand.email}.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
