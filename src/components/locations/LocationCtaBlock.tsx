import React from 'react';
import { Link } from 'react-router-dom';

interface LocationCtaBlockProps {
  locationName?: string;
  pageType?: 'region' | 'country' | 'city' | string;
  customHeading?: string;
  customSubtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const LocationCtaBlock: React.FC<LocationCtaBlockProps> = ({
  locationName,
  pageType,
  customHeading,
  customSubtitle,
  primaryCtaText = 'Book a Demo',
  primaryCtaHref = '/book-demo',
  secondaryCtaText = 'See How Sidqly Works',
  secondaryCtaHref = '/product-tour'
}) => {
  const getHeading = () => {
    if (customHeading) return customHeading;
    if (locationName) {
      if (pageType === 'city') {
        return `Ready to improve your charity operations in ${locationName}?`;
      }
      if (pageType === 'country') {
        return `See how Sidqly can support organizations across ${locationName}`;
      }
      return `Explore Sidqly modules for organizations in ${locationName}`;
    }
    return 'Ready to improve your giving operations?';
  };

  const getSubtitle = () => {
    if (customSubtitle) return customSubtitle;
    if (locationName) {
      return `Tell us how your organization in ${locationName} currently manages giving, payment proof, Zakat, Sadaqah, Qurbani, or Ramadan campaigns. We will show how Sidqly can simplify the workflow.`;
    }
    return 'Tell us how your organization currently manages giving, payment proof, Zakat, Sadaqah, Qurbani, Ramadan campaigns, donor updates, or reporting. We will show how Sidqly can simplify the workflow.';
  };

  return (
    <section className="py-20 bg-sidqly-green-deep text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          {getHeading()}
        </h2>
        <p className="text-lg text-sidqly-green-soft mb-10 max-w-2xl mx-auto leading-relaxed">
          {getSubtitle()}
        </p>

        <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 mb-12 text-left text-gray-300 max-w-3xl mx-auto">
          <h3 className="font-bold text-white mb-4 text-xl">What happens after you book?</h3>
          <ul className="space-y-4 font-medium text-base sm:text-lg">
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

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link
            to={primaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-sidqly-green-emerald hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sidqly-green-deep transition-all shadow-lg hover:shadow-xl text-center"
            aria-label={`${primaryCtaText}${locationName ? ` for ${locationName}` : ''}`}
          >
            {primaryCtaText}
          </Link>
          <Link
            to={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sidqly-green-deep transition-all text-center"
            aria-label={`${secondaryCtaText}${locationName ? ` for ${locationName}` : ''}`}
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationCtaBlock;
