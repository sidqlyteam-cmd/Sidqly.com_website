import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Download, Code, Palette, CheckCircle2 } from 'lucide-react';

const BrandPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Brand Assets"
        description="Official Sidqly brand assets, logos, and style guide for partners and the media."
        canonical="/brand"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Brand Assets</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Official logos, colors, and guidelines for the Sidqly brand identity.</p>
          </div>

          {/* Logo Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-2">
              <Palette className="text-sidqly-green-emerald" /> Core Logo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center">
                  <div className="h-48 flex items-center justify-center mb-8">
                     <img src="/brand/sidqly-logo.svg" alt="Sidqly Logo" className="max-h-full" />
                  </div>
                  <h4 className="font-bold text-sidqly-navy mb-2">Vertical Logo</h4>
                  <p className="text-xs text-gray-500 mb-6">Primary logo for documents and reports.</p>
                  <a href="/brand/sidqly-logo.svg" download className="text-sidqly-green-emerald font-bold text-sm flex items-center gap-1">
                     <Download size={16} /> SVG
                  </a>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center">
                  <div className="h-48 flex items-center justify-center mb-8">
                     <img src="/brand/sidqly-logo-horizontal.svg" alt="Sidqly Horizontal Logo" className="max-h-full" />
                  </div>
                  <h4 className="font-bold text-sidqly-navy mb-2">Horizontal Logo</h4>
                  <p className="text-xs text-gray-500 mb-6">Best for website navbars and footers.</p>
                  <a href="/brand/sidqly-logo-horizontal.svg" download className="text-sidqly-green-emerald font-bold text-sm flex items-center gap-1">
                     <Download size={16} /> SVG
                  </a>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center">
                  <div className="h-48 flex items-center justify-center mb-8">
                     <img src="/brand/sidqly-mark.svg" alt="Sidqly Mark" className="h-24 w-24" />
                  </div>
                  <h4 className="font-bold text-sidqly-navy mb-2">The Mark</h4>
                  <p className="text-xs text-gray-500 mb-6">Subtle icon for profile pictures and apps.</p>
                  <a href="/brand/sidqly-mark.svg" download className="text-sidqly-green-emerald font-bold text-sm flex items-center gap-1">
                     <Download size={16} /> SVG
                  </a>
               </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-8 flex items-center gap-2">
              <Palette className="text-sidqly-green-emerald" /> Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.entries(brand.colors).map(([name, hex]) => (
                <div key={name} className="bg-white p-4 rounded-2xl border border-gray-100">
                  <div className="aspect-square rounded-xl mb-4" style={{ backgroundColor: hex }}></div>
                  <div className="font-bold text-xs text-sidqly-navy mb-1 capitalize">{name.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-[10px] text-gray-400 font-mono uppercase">{hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Voice */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
             <div className="bg-sidqly-navy text-white p-10 md:p-16 rounded-[40px]">
                <h2 className="text-3xl font-bold mb-8">Brand Voice</h2>
                <ul className="space-y-4">
                  {['Premium', 'Calm', 'Trustworthy', 'Human', 'Board-ready'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sidqly-green-soft">
                      <CheckCircle2 size={20} /> {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-gray-400 leading-relaxed text-sm">
                  We speak with clarity and respect. We avoid technical jargon in customer-facing copy and focus on the human impact and operational integrity of our platform.
                </p>
             </div>
             <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Tagline</h2>
                <div className="text-2xl font-extrabold text-sidqly-green-deep leading-tight mb-6">
                  "{brand.tagline}"
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  This tagline represents our three core pillars: Verified Giving (Operational Trust), Protected Dignity (Recipient Safety), and Clear Impact (Professional Reporting).
                </p>
             </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
             <h2 className="text-2xl font-bold text-sidqly-navy mb-6 flex items-center gap-2">
               <Code className="text-sidqly-green-emerald" /> Brand Config JSON
             </h2>
             <pre className="bg-sidqly-ivory p-6 rounded-2xl overflow-x-auto text-xs text-gray-600 font-mono leading-relaxed">
               {JSON.stringify(brand, null, 2)}
             </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandPage;
