import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const groups = [
    {
      title: "Core Pages",
      links: [
        { name: "Homepage", href: "/" },
        { name: "About Sidqly", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Modules", href: "/modules" },
        { name: "Solutions", href: "/solutions" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Regional Support",
      links: [
        { name: "Global Regions", href: "/regions" },
        { name: "United Kingdom", href: "/regions/united-kingdom" },
        { name: "Europe", href: "/regions/europe" },
        { name: "North America", href: "/regions/north-america" },
        { name: "United States", href: "/regions/united-states" },
        { name: "Canada", href: "/regions/canada" },
        { name: "Gulf / MENA", href: "/regions/gulf-mena" },
        { name: "South Asia", href: "/regions/south-asia" },
        { name: "Africa", href: "/regions/africa" },
        { name: "Asia-Pacific", href: "/regions/asia-pacific" }
      ]
    },
    {
      title: "Onboarding & Purchase",
      links: [
        { name: "How to Purchase", href: "/purchase" },
        { name: "Start a Pilot", href: "/start-pilot" },
        { name: "Implementation Guide", href: "/implementation" },
        { name: "Migration Guide", href: "/migration" },
        { name: "Platform Status", href: "/status" }
      ]
    },
    {
      title: "Trust & Legal",
      links: [
        { name: "Trust Center", href: "/trust-center" },
        { name: "Security Standards", href: "/security" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Legal & Compliance", href: "/legal" },
        { name: "Billing & Payments", href: "/billing" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Brand Assets", href: "/brand" }
      ]
    },
    {
      title: "Resources & Help",
      links: [
        { name: "Blog & Guides", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Frequently Asked Questions", href: "/faqs" },
        { name: "Compare Sidqly", href: "/compare" }
      ]
    },
    {
      title: "Contact & Demo",
      links: [
        { name: "Book a Demo", href: "/book-demo" },
        { name: "Inquiry Form", href: "/inquiry-form" },
        { name: "Ask Sidqly", href: "/ask-sidqly" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ];

  return (
    <>
      <SEO title="Sitemap" description="Explore all pages and resources on the Sidqly global operating platform." canonical="/sitemap" />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Website Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A complete directory of the Sidqly public marketing website.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {groups.map((group) => (
              <div key={group.title} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-sidqly-navy mb-8 flex items-center gap-3">
                   <div className="w-1.5 h-6 bg-sidqly-green-emerald rounded-full"></div>
                   {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-gray-500 hover:text-sidqly-green-deep font-medium text-sm flex items-center justify-between group">
                         {link.name}
                         <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-sidqly-navy text-white rounded-[40px] p-10 md:p-16 text-center">
             <h2 className="text-3xl font-bold mb-8">Can't find what you're looking for?</h2>
             <div className="flex flex-wrap justify-center gap-4">
                <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Support Call</a>
                <a href={`mailto:${brand.email}`} className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Email {brand.email}</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SitemapPage;
