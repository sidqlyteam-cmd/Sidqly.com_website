import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LocationLink } from '../../data/locations/locationTypes';

interface LocationRelevantModulesProps {
  locationName: string;
  modules?: LocationLink[];
  className?: string;
}

const LocationRelevantModules: React.FC<LocationRelevantModulesProps> = ({
  locationName,
  modules,
  className = ''
}) => {
  if (!modules || modules.length === 0) return null;

  return (
    <section className={`py-20 bg-sidqly-ivory border-t border-b border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sidqly-green-soft/20 text-sidqly-green-deep text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <Layers size={14} /> Operational Modules
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mb-4">
            Relevant Sidqly Modules for {locationName}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover the specific Sidqly operational modules designed to support Islamic giving, payment review, proof verification, and reporting for teams serving {locationName}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {modules.map((moduleItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-sidqly-green-emerald transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-sidqly-green-soft/20 text-sidqly-green-deep rounded-xl flex items-center justify-center font-extrabold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-sidqly-green-emerald bg-sidqly-green-soft/10 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 size={12} /> Relevant to {locationName}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-emerald transition-colors">
                  {moduleItem.label}
                </h3>
                {moduleItem.description && (
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {moduleItem.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-gray-100/60">
                <Link
                  to={moduleItem.href}
                  className="inline-flex items-center gap-2 font-bold text-sm text-sidqly-navy hover:text-sidqly-green-emerald dark:hover:text-sidqly-green-soft transition-all group-hover:translate-x-1"
                >
                  Explore {moduleItem.label} Module
                  <ArrowRight size={16} className="text-sidqly-green-emerald" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Secondary CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 bg-white text-sidqly-navy border border-gray-200 px-8 py-3.5 rounded-xl font-bold hover:border-sidqly-green-emerald hover:text-sidqly-green-emerald dark:hover:text-sidqly-green-soft focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald transition-all shadow-sm"
          >
            <span>Explore All Sidqly Modules</span>
            <ArrowRight size={16} className="text-sidqly-green-emerald" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationRelevantModules;
