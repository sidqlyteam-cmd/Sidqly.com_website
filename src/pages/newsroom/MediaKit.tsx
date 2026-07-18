import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { mediaKitData } from '../../data/newsroom';
import { ArrowLeft, Download, Newspaper, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaKit: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Media Kit | Sidqly",
    "description": "Brand assets, boilerplates, and guidelines for press and media coverage of Sidqly.",
    "url": `${brand.domain}/media-kit`,
  };

  return (
    <>
      <SEO
        title="Media Kit | Sidqly Brand, Boilerplate, and Press Information"
        description="Access Sidqly's brand assets, boilerplates, and guidelines for press and media coverage."
        canonical="https://www.sidqly.com/media-kit"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link to="/newsroom" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-sidqly-green-deep mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Newsroom
          </Link>

          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4 mb-4">
               <div className="bg-sidqly-green-deep text-white p-3 rounded-xl inline-block">
                 <Newspaper size={24} />
               </div>
               <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy">
                 Media Kit
               </h1>
            </div>
            <p className="text-lg text-gray-600">
              Brand assets, company boilerplates, and guidelines for press and media coverage.
            </p>
          </div>

          <div className="space-y-12">

             {/* Boilerplates */}
             <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Company Information</h2>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                   <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Tagline</h3>
                      <p className="text-lg font-medium text-sidqly-navy">{mediaKitData.tagline}</p>
                   </div>
                   <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Short Boilerplate</h3>
                      <p className="text-gray-700">
                         Sidqly is an Islamic operating platform built to manage verified giving, manual payment reviews, and proof approvals for global charities and mosques.
                      </p>
                   </div>
                   <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Long Boilerplate</h3>
                      <p className="text-gray-700 leading-relaxed">
                         {mediaKitData.description}
                      </p>
                   </div>
                   <div className="border-t border-gray-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                         <strong className="block text-sidqly-navy mb-1">Website</strong>
                         <a href={mediaKitData.website} className="text-sidqly-green-emerald hover:underline">{mediaKitData.website}</a>
                      </div>
                      <div>
                         <strong className="block text-sidqly-navy mb-1">Press Contact</strong>
                         <a href={`mailto:${mediaKitData.contactEmail}`} className="text-sidqly-green-emerald hover:underline">{mediaKitData.contactEmail}</a>
                      </div>
                   </div>
                </div>
             </section>

             {/* Brand Colors */}
             <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Brand Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                   {mediaKitData.brandColors.map((color) => (
                      <div key={color.hex} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                         <div className="h-24 rounded-xl w-full mb-3 shadow-inner" style={{ backgroundColor: color.hex }}></div>
                         <p className="text-sm font-bold text-sidqly-navy">{color.name}</p>
                         <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
                      </div>
                   ))}
                </div>
             </section>

             {/* Logo & Usage Guidelines */}
             <section>
                <h2 className="text-2xl font-bold text-sidqly-navy mb-6">Logo & Usage Guidelines</h2>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

                   <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                       <div className="text-3xl md:text-4xl font-extrabold text-sidqly-navy">Sidqly</div>
                       <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                       <div className="text-3xl md:text-4xl font-extrabold text-white bg-sidqly-navy px-4 py-1 rounded">Sidqly</div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8">
                      <div>
                         <h3 className="font-bold text-sidqly-navy mb-3 flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-sidqly-green-emerald" /> Do
                         </h3>
                         <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Use the logo in high contrast</li>
                            <li>• Leave clear space around the logo</li>
                            <li>• Use our exact brand colors</li>
                         </ul>
                      </div>
                      <div>
                         <h3 className="font-bold text-sidqly-navy mb-3 flex items-center gap-2">
                            <AlertCircle size={18} className="text-red-500" /> Don't
                         </h3>
                         <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Do not stretch or distort the logo</li>
                            <li>• Do not change logo colors</li>
                            <li>• Do not place on busy backgrounds</li>
                         </ul>
                      </div>
                   </div>

                   <div className="mt-8 border-t border-gray-100 pt-6">
                      <p className="text-sm text-gray-500 mb-4 italic">Logo files and product screenshots placeholder.</p>
                      <button className="bg-sidqly-ivory text-sidqly-navy border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center gap-2" disabled>
                         <Download size={18} /> Request High-Res Assets
                      </button>
                   </div>
                </div>
             </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default MediaKit;
