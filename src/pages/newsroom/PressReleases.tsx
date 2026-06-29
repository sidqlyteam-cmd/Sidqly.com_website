import React from 'react';
import SEO from '../../components/SEO';
import MainLayout from '../../layout/MainLayout';
import { brand } from '../../config/brand';
import { newsroomData } from '../../data/newsroom';
import { CalendarDays, ArrowLeft, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const PressReleases: React.FC = () => {
  const prItems = newsroomData.filter(item => item.category === 'Press Release');

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Press Releases | Sidqly",
    "description": "Official press releases, product updates, and company announcements from Sidqly.",
    "url": `${brand.domain}/press-releases`,
  };

  return (
    <MainLayout>
      <SEO
        title="Press Releases | Sidqly News and Product Updates"
        description="Official press releases, product updates, and company announcements from Sidqly."
        canonical="https://sidqly.com/press-releases"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link to="/newsroom" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-sidqly-green-deep mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Newsroom
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
               <div className="bg-sidqly-navy text-white p-3 rounded-xl inline-block">
                 <Mic size={24} />
               </div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy">
                 Press Releases
               </h1>
            </div>
            <p className="text-lg text-gray-600">
              Official company announcements, platform feature rollouts, and operational expansions.
            </p>
          </div>

          <div className="space-y-8">
             {prItems.map((pr) => (
                <div key={pr.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-sidqly-green-deep"></div>

                   <div className="flex items-center gap-3 mb-4">
                     <span className="text-sm font-bold text-gray-500 flex items-center gap-1">
                       <CalendarDays size={16} /> {new Date(pr.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                     </span>
                     <span className="bg-sidqly-green-soft/30 text-sidqly-green-deep text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        Official Release
                     </span>
                   </div>

                   <h2 className="text-2xl font-bold text-sidqly-navy mb-4">
                      {pr.title}
                   </h2>

                   <div className="prose prose-sm md:prose-base text-gray-600">
                      <p>{pr.summary}</p>
                      <p className="italic text-gray-400 mt-4 text-xs">For this planning phase, full detailed articles are in draft. Please refer to the summary above for the announcement context.</p>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 bg-sidqly-navy text-white p-8 rounded-3xl text-center">
             <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
             <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                For press inquiries, quotes, or to request access to the Sidqly platform for review purposes, please contact our communications team.
             </p>
             <a href={`mailto:${brand.email}`} className="inline-block bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Email {brand.email}
             </a>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default PressReleases;
