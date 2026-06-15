import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { regions } from '../../data/regions';
import { Globe, ArrowRight } from 'lucide-react';

const RegionsIndex: React.FC = () => {
  return (
    <>
      <SEO
        title="Global Regions"
        description="Explore how Sidqly supports Islamic organizations across different global regions with professional giving operations."
        canonical="/regions"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sidqly-navy mb-8">Global Impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            Sidqly is designed to help Islamic organizations across different regions organize giving operations, payment review, proof approval, donor updates, and professional reporting.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <Link
                key={region.slug}
                to={`/regions/${region.slug}`}
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-xl transition-all group text-left flex flex-col"
              >
                <div className="w-14 h-14 bg-sidqly-ivory rounded-2xl flex items-center justify-center text-sidqly-green-deep mb-8 group-hover:bg-sidqly-green-soft/30 transition-colors">
                  <Globe size={28} />
                </div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">{region.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {region.description}
                </p>
                <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                  View Regional Support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Scale your impact globally.</h2>
            <p className="text-sidqly-green-soft mb-12 max-w-2xl mx-auto">
               Join organizations across the world using Sidqly to manage their giving with trust, dignity, and operational clarity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link to="/book-demo" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-sidqly-navy transition-all">Book Global Demo</Link>
               <Link to="/inquiry-form" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Fill Inquiry Form</Link>
            </div>
         </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-sidqly-navy mb-4">
                Sidqly supports operational tracking, proof review, reporting, and donor communication. Religious, legal, tax, and financial decisions remain with the organization's authorized reviewers, scholars, advisors, or policy team.
            </p>
            <p className="text-xs text-gray-500 italic">
                Sidqly is preparing clearer regional and language support for international teams. For now, public pages are written in simple English to support browser translation and AI summaries.
            </p>
        </div>
      </section>
    </>
  );
};

export default RegionsIndex;
