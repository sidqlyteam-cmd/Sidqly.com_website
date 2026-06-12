import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Brand: React.FC = () => {
  const brandAssets = [
    { name: "Sidqly Logo (Full)", file: "sidqly-logo.svg" },
    { name: "Sidqly Logo (Horizontal)", file: "sidqly-logo-horizontal.svg" },
    { name: "Sidqly Mark", file: "sidqly-mark.svg" },
    { name: "App Icon", file: "sidqly-app-icon.svg" },
    { name: "Favicon", file: "sidqly-favicon.svg" },
    { name: "OG Image (Social)", file: "sidqly-og.svg" }
  ];

  return (
    <>
      <SEO
        title="Brand Guidelines & Assets"
        description="Official Sidqly brand assets, logos, and usage guidelines."
      />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Brand Identity</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Sidqly brand reflects our commitment to trust, operational clarity, and the dignity of every individual we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
              <img src="/brand/sidqly-logo.svg" alt="Sidqly Logo" className="h-16 w-16" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Tagline</p>
                <p className="text-sidqly-navy font-bold">{brand.tagline}</p>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-sidqly-navy mb-8">Official Assets</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {brandAssets.map((asset, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center group">
                  <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-sidqly-ivory rounded-2xl group-hover:bg-sidqly-green-soft/10 transition-colors">
                    <img src={`/brand/${asset.file}`} alt={asset.name} className="max-h-full max-w-full" />
                  </div>
                  <h3 className="font-bold text-sidqly-navy mb-4">{asset.name}</h3>
                  <a
                    href={`/brand/${asset.file}`}
                    download
                    className="text-sidqly-green-emerald text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Download SVG <Download size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Colors and Typography */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-sidqly-navy mb-8">Color Palette</h2>
              <div className="space-y-4">
                {Object.entries(brand.colors).slice(0, 6).map(([name, hex]) => (
                  <div key={name} className="flex items-center justify-between p-4 bg-sidqly-ivory rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl shadow-inner" style={{ backgroundColor: hex }}></div>
                      <div>
                        <p className="text-sm font-bold text-sidqly-navy capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-xs text-gray-500 font-mono uppercase">{hex}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sidqly-navy text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-8">Brand Voice</h2>
              <ul className="space-y-6">
                {[
                  { title: "Premium & Modern", desc: "Professional SaaS identity that feels elite yet accessible." },
                  { title: "Trustworthy & Audit-Ready", desc: "Clear, precise language focused on verification and proof." },
                  { title: "Dignity-First", desc: "Always protecting recipient privacy and avoiding 'poverty porn'." },
                  { title: "Islamic-Inspired", desc: "Modern aesthetic that respects Islamic geometric traditions." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-sidqly-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-sidqly-green-soft mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage Rules */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Logo Meaning</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              The Sidqly logo features a white middle "app icon" style representing modern clarity. The deep green Islamic geometric outline connects the platform to traditional values, while the subtle gold crescent and star-like accent symbolize growth, impact, and the premium nature of the service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${brand.links.email}`} className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                Brand Inquiry <Mail size={18} />
              </a>
              <Link to="/" className="bg-sidqly-ivory text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                Back to Home <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
