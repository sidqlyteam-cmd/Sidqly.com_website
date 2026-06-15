import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { modules } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import { Box } from 'lucide-react';

const ModuleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = modules.find(m => m.slug === slug);

  if (!module) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Module not found</h1>
        <Link to="/modules" className="text-sidqly-green-emerald mt-4 inline-block">View all modules</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${module.title}`}
        description={module.desc}
        canonical={`/modules/${module.slug}`}
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidqly-green-soft text-sidqly-green-deep text-xs font-bold uppercase tracking-widest mb-6">
                <Box size={14} /> Core Module
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-4">{module.title}</h1>
              <p className="text-xl font-medium text-sidqly-green-deep mb-8 border-l-4 border-sidqly-gold pl-4 py-1">
                {module.benefit}
              </p>
              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Who Uses It</h3>
                   <p className="text-sm font-bold text-sidqly-navy">{module.who}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-red-50/50 shadow-sm border-l-4 border-l-red-400">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Problem Solved</h3>
                   <p className="text-sm text-gray-600">{module.problem}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1">Book Demo</a>
                <Link to="/pricing" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all hover:-translate-y-1">View Pricing</Link>
              </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 hidden md:block">
              <div className="bg-sidqly-navy rounded-[32px] p-12">
                 <div className="mb-8 border-b border-white/10 pb-6">
                    <div className="w-16 h-16 bg-sidqly-green-soft/20 rounded-2xl flex items-center justify-center text-sidqly-green-soft mb-6">
                       <Box size={32} />
                    </div>
                    <div className="text-white font-bold text-2xl mb-2">Workflow Steps</div>
                 </div>
                 <div className="space-y-4 relative">
                    <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-white/10"></div>
                    {module.workflow?.map((step: string, i: number) => (
                       <div key={i} className="flex items-center gap-4 relative z-10">
                          <div className="w-6 h-6 rounded-full bg-sidqly-green-deep text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 border-2 border-sidqly-navy">
                             {i + 1}
                          </div>
                          <span className="text-sm font-medium text-gray-300 capitalize">{step}</span>
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sidqly-green-soft/20 text-sidqly-green-deep inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
             Output & Result
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-6">{module.output}</h2>
          {module.disclaimer && (
             <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-500 font-medium italic">
                   {module.disclaimer}
                </p>
             </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ModuleDetail;
