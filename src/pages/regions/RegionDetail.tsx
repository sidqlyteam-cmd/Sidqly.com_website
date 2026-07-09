import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { regions } from '../../data/regions';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import LocationCtaBlock from '../../components/locations/LocationCtaBlock';

const RegionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const region = regions.find(r => r.slug === slug);

  if (!region) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Region not found</h1>
        <Link to="/regions" className="text-sidqly-green-emerald mt-4 inline-block">View all regions</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Sidqly in ${region.name}`}
        description={region.description}
        canonical={`/regions/${region.slug}`}
        noindex={!region.description || region.problems.length === 0}
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
                <Link to="/regions" className="inline-flex items-center gap-2 text-sidqly-green-soft font-bold mb-8 hover:gap-3 transition-all">
                   <ArrowRight className="rotate-180" size={16} /> Back to Regions
                </Link>
                <h1 className="text-3xl md:text-6xl font-extrabold mb-8">{region.name}</h1>
                <p className="text-xl text-sidqly-green-soft leading-relaxed">
                  {region.description}
                </p>
             </div>
             <div className="flex-1 bg-white/5 p-8 rounded-[40px] border border-white/10">
                <h3 className="text-lg font-bold mb-6 text-sidqly-green-soft">Coverage Includes:</h3>
                <div className="flex flex-wrap gap-2">
                   {region.countries.slice(0, 10).map((c, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{c}</span>
                   ))}
                   {region.countries.length > 10 && <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">+{region.countries.length - 10} more</span>}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Popular Cities</h3>
                   <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
                      {region.cities.slice(0, 8).map((city, i) => (
                         <span key={i}>{city}</span>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
             <div>
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Common Operational Challenges</h2>
                <div className="space-y-4">
                   {region.problems.map((prob, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 bg-sidqly-ivory rounded-2xl border border-gray-50">
                         <div className="mt-1 text-red-400">✕</div>
                         <p className="text-gray-600 text-sm leading-relaxed">{prob}</p>
                      </div>
                   ))}
                </div>
             </div>
             <div>
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8">How Sidqly Helps</h2>
                <div className="space-y-6">
                   <p className="text-gray-600 leading-relaxed">
                      Sidqly is designed for organizations that want to move beyond the limitations of generic tools. We provide structured workflows that support:
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {region.modules.map((mod, i) => (
                         <li key={i} className="flex items-center gap-3 font-bold text-sidqly-navy text-sm">
                            <CheckCircle2 className="text-sidqly-green-emerald" size={18} /> {mod}
                         </li>
                      ))}
                   </ul>
                   <div className="bg-sidqly-green-soft/20 p-6 rounded-3xl border border-sidqly-green-soft/50 mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                         <ShieldCheck className="text-sidqly-green-deep flex-shrink-0" />
                         <div>
                            <h4 className="font-bold text-sidqly-green-deep mb-1">Dignity-Safe Operations</h4>
                            <p className="text-xs text-sidqly-green-deep/70 leading-relaxed">
                               Sidqly enforces recipient privacy with automated face-blurring and secure links, ensuring your organization meets the highest standards of respect.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {region.faqs.length > 0 && (
         <section className="py-20 bg-sidqly-ivory">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">Frequently Asked Questions</h2>
               <div className="space-y-4">
                  {region.faqs.map((faq, i) => (
                     <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-sidqly-navy mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      <LocationCtaBlock />

      <section className="py-8 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <p className="text-xs text-gray-500">
              Sidqly supports operational clarity, proof workflows, donor updates, and internal reporting. Organizations should confirm legal, accounting, tax, payment, and Shariah requirements with their own qualified advisors.
           </p>
        </div>
      </section>
    </>
  );
};

export default RegionDetail;
