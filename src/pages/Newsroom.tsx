import React, { useState } from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { newsroomData } from '../data/newsroom';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Mic, ExternalLink, CalendarDays } from 'lucide-react';

const Newsroom: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Press Release', 'Sidqly Updates', 'Islamic Giving News', 'Makkah and Madinah Updates', 'Hajj and Umrah Operations', 'Ramadan and Qurbani Planning'];

  const filteredNews = activeCategory === 'All'
    ? newsroomData
    : newsroomData.filter(item => item.category === activeCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Newsroom | Sidqly",
    "description": "Latest updates, press releases, Islamic giving news, and operational announcements for Hajj, Ramadan, and Qurbani planning.",
    "url": `${brand.domain}/newsroom`,
  };

  return (
    <>
      <SEO
        title="Newsroom | Sidqly Updates, Islamic Giving News, Hajj, Ramadan, and Qurbani Planning"
        description="Latest updates, press releases, Islamic giving news, and operational announcements for Hajj, Ramadan, and Qurbani planning."
        canonical="https://www.sidqly.com/newsroom"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
             <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">
                  Sidqly <span className="text-sidqly-green-deep">Newsroom</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Product announcements, press releases, operational planning updates, and curated external references for giving organizations.
                </p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/press-releases" className="bg-white border border-gray-200 text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                   <Mic size={18} /> Press Releases
                </Link>
                <Link to="/media-kit" className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                   <Newspaper size={18} /> Media Kit
                </Link>
             </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                   activeCategory === cat
                   ? 'bg-sidqly-navy text-white border-sidqly-navy'
                   : 'bg-white text-gray-600 border-gray-200 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-6">
                {filteredNews.length > 0 ? (
                  filteredNews.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald transition-all group">
                       <div className="flex items-center gap-3 mb-3">
                         <span className="text-xs font-bold text-sidqly-green-deep uppercase tracking-wider bg-sidqly-green-soft/30 px-3 py-1 rounded-full">{item.category}</span>
                         <span className="text-sm text-gray-400 flex items-center gap-1">
                           <CalendarDays size={14} /> {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                         </span>
                       </div>
                       <h3 className="text-xl font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-deep transition-colors">
                          {item.title}
                       </h3>
                       <p className="text-gray-600 text-sm mb-4">
                          {item.summary}
                       </p>

                       {item.isExternal ? (
                          <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-sidqly-green-emerald hover:underline">
                            Read on {item.sourceName || 'Source'} <ExternalLink size={14} />
                          </a>
                       ) : (
                          // For this iteration, linking to press-releases hub for PRs, or just showing summary.
                          item.category === 'Press Release' ? (
                             <Link to="/press-releases" className="inline-flex items-center gap-2 text-sm font-bold text-sidqly-green-emerald hover:underline">
                               View Press Release <ArrowRight size={14} />
                             </Link>
                          ) : (
                             <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400">
                               Internal Update
                             </span>
                          )
                       )}
                    </div>
                  ))
                ) : (
                   <div className="bg-gray-50 p-12 text-center rounded-2xl border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-500 mb-2">Coming soon</h4>
                      <p className="text-gray-400">Curated updates and announcements related to {activeCategory} from reliable sources.</p>
                   </div>
                )}
             </div>

             {/* Sidebar Widgets */}
             <div className="space-y-6">
                <div className="bg-sidqly-navy text-white p-6 rounded-2xl">
                   <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Media & Press</h3>
                   <p className="text-sm text-gray-300 mb-4">For media inquiries, interview requests, or partnership discussions, please reach out to our team.</p>
                   <a href={`mailto:${brand.email}`} className="block text-center bg-sidqly-green-deep text-white px-4 py-3 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-colors">
                      Contact Press Team
                   </a>
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                   <h3 className="font-bold text-lg text-sidqly-navy mb-4 border-b border-gray-100 pb-2">Makkah & Madinah Updates</h3>
                   <p className="text-sm text-gray-500 mb-4 italic">
                     Coming soon: curated updates related to Makkah, Madinah, Hajj, Umrah, Ramadan, and Qurbani planning from reliable public sources.
                   </p>
                   <p className="text-xs text-gray-400">
                     Sidqly provides operational software. We do not provide final religious rulings or hardcode official dates until confirmed by authorities.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Newsroom;
