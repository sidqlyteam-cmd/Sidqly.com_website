import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { solutions } from '../../data/solutions_modules';
import { brand } from '../../config/brand';
import { CheckCircle2, ArrowRight, Globe } from 'lucide-react';

const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Solution not found</h1>
        <Link to="/solutions" className="text-sidqly-green-emerald mt-4 inline-block">View all solutions</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${solution.title} Solutions`}
        description={solution.description}
        canonical={`/solutions/${solution.slug}`}
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">{solution.title}</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Professional operations for your {solution.title.toLowerCase()} team.</h2>
              <div className="space-y-6">
                {solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-sidqly-green-soft/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-sidqly-green-deep" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Sidqly provides the specific tools needed to manage {solution.title.toLowerCase()} operations with integrity and clarity. From intake to reporting, every step is optimized for the needs of Islamic organizations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
                  <Link to="/pricing" className="bg-sidqly-ivory text-sidqly-navy px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-100">View Pricing</Link>
                </div>
              </div>
            </div>
            <div className="bg-sidqly-ivory aspect-video rounded-3xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-sidqly-green-soft/10 to-transparent"></div>
               <div className="relative text-center p-8">
                  <div className="text-sidqly-navy font-bold text-lg mb-2">Sidqly Operating Platform</div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Dashboard Preview</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
             <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Regional Support</h2>
             <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Sidqly supports {solution.title.toLowerCase()} across multiple global regions with tailored workflows.</p>
             <div className="flex flex-wrap justify-center gap-4">
                {['united-kingdom', 'europe', 'north-america', 'canada', 'gulf-mena'].map((r) => (
                   <Link key={r} to={`/regions/${r}`} className="bg-white px-6 py-3 rounded-full border border-gray-100 text-sidqly-navy font-bold text-sm hover:border-sidqly-green-soft transition-all flex items-center gap-2">
                      <Globe size={16} className="text-sidqly-green-emerald" /> {r.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                   </Link>
                ))}
             </div>
          </div>

          <h2 className="text-3xl font-bold text-sidqly-navy mb-12">More for {solution.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Manual Payment Review', 'Proof Trust Engine', 'Donor Certificates'].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-left">
                <h4 className="font-bold text-sidqly-navy mb-4">{item}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Learn how Sidqly's {item.toLowerCase()} can transform your {solution.title.toLowerCase()} operations.</p>
                <Link to="/features" className="text-sidqly-green-emerald font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionDetail;
