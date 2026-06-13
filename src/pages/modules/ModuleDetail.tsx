import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { modules } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import { CheckCircle2, Box } from 'lucide-react';

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
              <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-8">{module.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {module.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Manual Review', 'Verified Proof', 'Audit Trail', 'Reporting'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 size={18} className="text-sidqly-green-emerald" />
                    <span className="text-sm font-bold text-sidqly-navy">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
                <Link to="/contact" className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Contact Sales</Link>
              </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 rotate-1 hidden md:block">
              <div className="bg-sidqly-navy rounded-[32px] aspect-square flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-sidqly-green-soft/20 rounded-3xl flex items-center justify-center text-sidqly-green-soft mx-auto mb-6">
                       <Box size={48} />
                    </div>
                    <div className="text-white font-bold text-2xl">{module.title}</div>
                    <div className="text-sidqly-green-soft/60 text-sm mt-2">Operational Workflow</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Built for precision and integrity.</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            The {module.title} is designed to eliminate manual overhead and human error. By automating repetitive tasks while maintaining manual approval gates, your team can focus on what matters: the impact.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
             <div className="bg-sidqly-ivory p-8 rounded-3xl">
                <h4 className="font-bold text-sidqly-navy mb-4">Board Ready</h4>
                <p className="text-sm text-gray-600">Every action within this module is logged and available for reporting. Keep your leadership informed with zero extra effort.</p>
             </div>
             <div className="bg-sidqly-ivory p-8 rounded-3xl">
                <h4 className="font-bold text-sidqly-navy mb-4">Audit Ready</h4>
                <p className="text-sm text-gray-600">Maintain a complete audit trail of Zakat fund separation and disbursement review processes for complete peace of mind.</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModuleDetail;
