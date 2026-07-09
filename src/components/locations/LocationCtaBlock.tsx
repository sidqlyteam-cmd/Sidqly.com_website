import React from 'react';
import { Link } from 'react-router-dom';

const LocationCtaBlock: React.FC = () => {
  return (
    <section className="py-20 bg-sidqly-green-deep text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Ready to improve your giving operations?</h2>
        <p className="text-lg text-sidqly-green-soft mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell us how your organization currently manages giving, payment proof, Zakat, Sadaqah, Qurbani, Ramadan campaigns, donor updates, or reporting. We will show how Sidqly can simplify the workflow.
        </p>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12 text-left text-gray-300 max-w-3xl mx-auto">
          <h3 className="font-bold text-white mb-4 text-xl">What happens after you book?</h3>
          <ul className="space-y-4 font-medium text-lg">
            <li className="flex gap-4 items-center">
              <span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
              We review your current giving workflow.
            </li>
            <li className="flex gap-4 items-center">
              <span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
              We identify where payment proof, approvals, donor updates, or reporting become difficult.
            </li>
            <li className="flex gap-4 items-center">
              <span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
              We show how Sidqly can support your team.
            </li>
            <li className="flex gap-4 items-center">
              <span className="w-8 h-8 rounded-full bg-sidqly-green-emerald text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
              You decide the next step.
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/demo" className="inline-block bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:text-white transition-all shadow-lg hover:shadow-xl">
            Book a Demo
          </Link>
          <Link to="/product-tour" className="inline-block bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
            See How Sidqly Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationCtaBlock;
