import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { knowledgeHub } from '../data/knowledgeHub';
import { Search, HelpCircle, User, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/ui/PageTransition';

const KnowledgeHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState<'all' | 'pillar' | 'article' | 'glossary'>('all');

  const filteredItems = knowledgeHub.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.directAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.focusKeyword.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'all' || item.type === activeType;
    return matchesSearch && matchesType;
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Knowledge Hub", item: "/knowledge-hub" }
      ])
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Sidqly Islamic Operations Knowledge Hub & Guides"
        description="Access authoritative, Shariah-conscious pillar guides, operational workflows, and glossaries on Islamic charity operations, Zakat, and Qurbani."
        canonical="/knowledge-hub"
        schema={schema}
      />

      {/* Hero Header */}
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-sidqly-gold uppercase bg-white/5 rounded-full border border-white/10 tracking-wider">
            Authoritative Sourcing & AI-Overview Optimized Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Operations Knowledge Hub
          </h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed max-w-3xl mx-auto">
            The premium reference directory for Islamic giving operations, fund separations, beneficiary modesty controls, and compliance standards.
          </p>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section className="py-12 bg-sidqly-ivory border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Search guides, definitions, and workflows..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sidqly-green-emerald bg-white outline-none text-sm shadow-sm"
              />
            </div>

            <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm w-full md:w-auto overflow-x-auto gap-1">
              {(['all', 'pillar', 'article', 'glossary'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeType === type
                      ? 'bg-sidqly-green-deep text-white shadow-sm'
                      : 'text-gray-500 hover:text-sidqly-navy bg-transparent'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <Card variant="white" key={item.id} className="flex flex-col justify-between hoverable">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        item.type === 'pillar'
                          ? 'bg-[#ecfdf5] text-sidqly-green-emerald'
                          : item.type === 'article'
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-purple-50 text-purple-600'
                      }`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase">
                        <Calendar size={12} /> {item.lastUpdated}
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-sidqly-navy mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-4">
                      {item.directAnswer}
                    </p>
                  </div>

                  <div className="border-t border-gray-50 pt-4 flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-gray-400 font-bold uppercase flex items-center gap-1.5">
                      <User size={12} /> {item.author}
                    </span>
                    <Link
                      to={`/knowledge-hub/${item.slug}`}
                      className="text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald flex items-center gap-1"
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-sidqly-ivory rounded-3xl border border-gray-100 max-w-xl mx-auto">
              <HelpCircle className="mx-auto text-gray-400 mb-4" size={40} />
              <h4 className="font-bold text-sidqly-navy mb-1">No guides found</h4>
              <p className="text-xs text-gray-500">Try modifying your keyword search parameters or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Static Original Infographics Showroom */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-sidqly-navy">Original Process Infographics</h2>
            <p className="text-gray-600 text-sm mt-2">Factual, descriptive, and highly accessible flow structures detailing backend compliance pipelines.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="white" className="p-8">
              <h3 className="font-bold text-lg text-sidqly-navy mb-2">Fund Separation System</h3>
              <p className="text-xs text-gray-500 mb-6">Logical separation boundaries ensuring Zakat funds and voluntary Sadaqah are strictly isolated mathematically.</p>
              <img src="/images/fund-separation.svg" alt="Fund Separation System Flow Infographic" className="w-full h-auto border border-gray-100 rounded-2xl mb-4" />
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Static Fallback: Cash registers feed directly into a logical automated sorting ledger dividing allocations by wallet id.</div>
            </Card>

            <Card variant="white" className="p-8">
              <h3 className="font-bold text-lg text-sidqly-navy mb-2">Payment Verification Gate</h3>
              <p className="text-xs text-gray-500 mb-6">Visual desk comparison matching bank statement records to manually submitted wire screenshots.</p>
              <img src="/images/payment-verification.svg" alt="Payment Verification Process Desk Infographic" className="w-full h-auto border border-gray-100 rounded-2xl mb-4" />
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Static Fallback: Submissions enter a waiting queue; staff manually compare statements side-by-side to prevent phantom logs.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Boundaries Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 text-xs text-amber-900 font-medium">
            <ShieldCheck className="text-amber-600 shrink-0 mt-0.5" size={18} />
            <p><strong>Platform Policy Checklist:</strong> All knowledge base definitions, guides, and workflows are authored to provide complete operational transparency. No content is generated without manual scholar review, and no statements assert religious fatwas or legal audits. Organizations must maintain direct counsel with local authorities.</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default KnowledgeHub;
