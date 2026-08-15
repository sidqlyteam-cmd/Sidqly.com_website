import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, CheckCircle2, AlertCircle, ArrowDown, ExternalLink, Calendar } from 'lucide-react';
import type { LocationUseCase } from '../../data/locations/locationTypes';

interface LocationUseCaseBlockProps {
  locationName: string;
  useCase: LocationUseCase;
  className?: string;
}

const LocationUseCaseBlock: React.FC<LocationUseCaseBlockProps> = ({
  locationName,
  useCase,
  className = ''
}) => {
  if (!useCase) return null;

  return (
    <section className={`py-20 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-sidqly-green-soft/20 text-sidqly-green-deep dark:text-sidqly-green-soft text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Layers size={14} /> Real-World Use Case Scenario
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy dark:text-white mb-4 leading-tight">
            {useCase.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {useCase.description}
          </p>
        </div>

        {/* Problem Statement Card */}
        {useCase.problemStatement && (
          <div className="mb-12 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 p-6 md:p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-300 mb-2">
                  The Operational Challenge Before Sidqly
                </h3>
                <p className="text-amber-950/80 dark:text-amber-200/90 text-base leading-relaxed">
                  {useCase.problemStatement}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Workflow Steps Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-sidqly-navy dark:text-white">
              Connected Operational Workflow
            </h3>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {useCase.steps.length} Steps Sequence
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-sidqly-ivory dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-all duration-200 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-sidqly-green-emerald uppercase tracking-wider bg-sidqly-green-soft/20 px-2.5 py-1 rounded-lg">
                      Step 0{step.stepNumber}
                    </span>
                    {idx < useCase.steps.length - 1 && (
                      <ArrowDown className="md:hidden text-gray-300 dark:text-gray-600" size={16} />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-sidqly-navy dark:text-white mb-2 group-hover:text-sidqly-green-emerald dark:group-hover:text-sidqly-green-soft transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {step.detail}
                  </p>
                </div>

                {step.moduleSlug && (
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800">
                    <Link
                      to={`/modules/${step.moduleSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sidqly-green-deep dark:text-sidqly-green-soft hover:underline group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Module: {step.moduleName || step.moduleSlug}</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Statement Card */}
        {useCase.outcome && (
          <div className="mb-16 bg-sidqly-green-soft/15 dark:bg-sidqly-green-deep/20 border border-sidqly-green-soft/50 dark:border-sidqly-green-soft/30 p-6 md:p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sidqly-navy dark:text-white mb-2">
                  Expected Operational Outcome
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                  {useCase.outcome}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Relevant Modules Grid */}
        {useCase.relevantModules && useCase.relevantModules.length > 0 && (
          <div className="mb-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-sidqly-navy dark:text-white mb-6">
              Relevant Sidqly Modules
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCase.relevantModules.map((mod, i) => (
                <Link
                  key={i}
                  to={mod.href}
                  className="bg-sidqly-ivory dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-sidqly-green-emerald hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sidqly-navy dark:text-white text-sm group-hover:text-sidqly-green-emerald dark:group-hover:text-sidqly-green-soft transition-colors mb-2">
                      {mod.label}
                    </h4>
                    {mod.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2">
                        {mod.description}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-sidqly-green-emerald dark:text-sidqly-green-soft">
                    View Module <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Use Case CTA Card */}
        <div className="bg-sidqly-navy dark:bg-gray-900 text-white p-8 md:p-10 rounded-3xl shadow-md text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border border-sidqly-navy dark:border-gray-800">
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Want to see how this workflow could work for your organization in {locationName}?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Book a live demo with the Sidqly team to walk through payment verification, proof review, and reporting for your local giving operations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-sidqly-green-emerald hover:bg-sidqly-green-soft hover:text-sidqly-navy text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm text-center"
            >
              <Calendar size={18} /> Book a Demo
            </Link>
            <Link
              to="/product-tour"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl transition-all border border-white/20 text-sm text-center"
            >
              See Product Tour
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationUseCaseBlock;
