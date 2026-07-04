import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { LayoutGrid, Target, ChevronRight, Search, Zap, Shield, HelpCircle, MapPin, Newspaper, Settings, Users, CreditCard, Star } from 'lucide-react';
import { resources } from '../data/resources';
import { blogPosts } from '../data/blogs';
import { generateCollectionSchema } from '../lib/schema';
import { seoData } from '../data/seo';

const SitemapPage: React.FC = () => {
  const corePages = [
    { name: 'Home', path: '/', icon: LayoutGrid },
    { name: 'Features', path: '/features', icon: Star },
    { name: 'How It Works', path: '/how-it-works', icon: Zap },
    { name: 'Modules', path: '/modules', icon: Settings },
    { name: 'Use Cases', path: '/use-cases', icon: Target },
    { name: 'Pricing', path: '/pricing', icon: CreditCard },
    { name: 'Book Demo', path: '/book-demo', icon: Users },
    { name: 'Trust Center', path: '/trust-center', icon: Shield },
    { name: 'Security', path: '/security', icon: Shield },
    { name: 'Ask Sidqly (AI)', path: '/ask-sidqly', icon: Search },
    { name: 'FAQ', path: '/faqs', icon: HelpCircle },
    { name: 'Help Center', path: '/help', icon: HelpCircle },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Users },
    { name: 'Brand Kit', path: '/brand', icon: Settings },
    { name: 'AI Search Readiness', path: '/ai-search-readiness', icon: Search },
  ];

  const regionPages = [
    { name: 'Global Regions', path: '/regions' },
    { name: 'United Kingdom', path: '/regions/united-kingdom' },
    { name: 'North America', path: '/regions/north-america' },
    { name: 'Europe', path: '/regions/europe' },
    { name: 'Middle East', path: '/regions/middle-east' },
    { name: 'South Asia', path: '/regions/south-asia' },
    { name: 'Africa', path: '/regions/africa' },
  ];

  const useCasePages = [
    { name: 'All Use Cases', path: '/use-cases' },
    { name: 'Mosques', path: '/use-cases/mosques' },
    { name: 'Islamic Charities', path: '/use-cases/islamic-charities' },
    { name: 'Zakat Committees', path: '/use-cases/zakat-committees' },
    { name: 'Qurbani Organizers', path: '/use-cases/qurbani-organizers' },
    { name: 'Ramadan Ration Teams', path: '/use-cases/ramadan-ration-teams' },
    { name: 'Sadaqah Campaign Teams', path: '/use-cases/sadaqah-campaign-teams' },
    { name: 'Corporate Sponsors', path: '/use-cases/corporate-sponsors' },
    { name: 'Donors', path: '/use-cases/donors' },
    { name: 'Volunteers', path: '/use-cases/volunteers' },
    { name: 'Vendors', path: '/use-cases/vendors' },
    { name: 'Board & Reporting Teams', path: '/use-cases/board-reporting-teams' },
    { name: 'Request Organization', path: '/use-cases/community-request-organization' }
  ];

  const solutionPages = [
    { name: 'All Solutions', path: '/solutions' },
    { name: 'Mosques', path: '/solutions/mosques' },
    { name: 'Islamic Charities', path: '/solutions/islamic-charities' },
    { name: 'Qurbani Providers', path: '/solutions/qurbani-providers' },
    { name: 'Ramadan Food Drives', path: '/solutions/ramadan-food-drives' },
    { name: 'Zakat Teams', path: '/solutions/zakat-teams' },
    { name: 'Corporate CSR/Zakat', path: '/solutions/corporate-csr-zakat' },
    { name: 'Vendors', path: '/solutions/vendors' },
    { name: 'Volunteers', path: '/solutions/volunteers' },
    { name: 'Community Welfare', path: '/solutions/community-welfare-teams' },
    { name: 'Donors', path: '/solutions/donors' },
  ];

  const islamicToolsPages = [
    { name: 'Islamic Utilities', path: '/islamic-utilities' },
    { name: 'Islamic Calendar', path: '/islamic-calendar' },
    { name: 'Qibla Direction', path: '/qibla-direction' },
    { name: 'Moon Phase', path: '/moon-phase-islamic-calendar' },
    { name: 'Weather-Aware Distribution', path: '/weather-charity-distribution' },
    { name: 'Hajj Countdown', path: '/hajj-countdown' },
    { name: 'Ramadan Planner', path: '/ramadan-planner' },
    { name: 'Eid/Qurbani Planner', path: '/eid-qurbani-planner' },
    { name: 'Sadqa/Zakat Planner', path: '/sadqa-zakat-planner' },
    { name: 'Islamic Glossary', path: '/islamic-glossary' }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema("Sitemap", seoData.sitemap.description, "/sitemap")
    ]
  };

  return (
    <>
      <SEO
        {...seoData.sitemap}
        schema={schema}
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600">Navigate every corner of the Sidqly platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sidqly-navy">
            {/* Core Pages */}
            <div>
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                <LayoutGrid size={20} className="text-sidqly-green-emerald" /> Core Pages
              </h2>
              <ul className="space-y-3">
                {corePages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product & Solutions */}
            <div>
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                <MapPin size={20} className="text-sidqly-green-emerald" /> Product & Solutions
              </h2>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Use Cases</h3>
              <ul className="space-y-3 mb-8">
                {useCasePages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Stakeholder Solutions</h3>
              <ul className="space-y-3 mb-8">
                {solutionPages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Islamic Tools</h3>
              <ul className="space-y-3 mb-8">
                {islamicToolsPages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Global Regions</h3>
              <ul className="space-y-3">
                {regionPages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Strategy */}
            <div>
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                <Target size={20} className="text-sidqly-green-emerald" /> Resources & Strategy
              </h2>
              <ul className="space-y-3">
                <li>
                   <Link to="/resources" className="text-sidqly-green-deep font-bold hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> All Resources
                   </Link>
                </li>
                {resources.map(resource => (
                  <li key={resource.slug}>
                    <Link to={`/resources/${resource.slug}`} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {resource.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Articles */}
            <div>
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                <Newspaper size={20} className="text-sidqly-green-emerald" /> Latest Articles
              </h2>
              <ul className="space-y-3">
                <li>
                   <Link to="/blog" className="text-sidqly-green-deep font-bold hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> All Blog Posts
                   </Link>
                </li>
                {blogPosts.slice(0, 15).map(article => (
                  <li key={article.slug}>
                    <Link to={`/blog/${article.slug}`} className="text-gray-600 hover:text-sidqly-green-emerald transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {article.title}
                    </Link>
                  </li>
                ))}
                {blogPosts.length > 15 && (
                  <li>
                    <Link to="/blog" className="text-sidqly-green-emerald italic text-xs hover:underline">
                      + {blogPosts.length - 15} more articles
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-200">
             <h2 className="text-lg font-bold text-sidqly-navy mb-6">Machine Readable Content</h2>
             <div className="flex flex-wrap gap-4">
                {['llms.txt', 'ai-summary.md', 'product-overview.md', 'pricing-summary.md', 'faqs-summary.md', 'trust-and-safety.md', 'blog-index.md', 'schema-map.md'].map(file => (
                   <a key={file} href={`/${file}`} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-mono text-gray-500 hover:text-sidqly-green-emerald transition-colors">
                      /{file}
                   </a>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SitemapPage;
