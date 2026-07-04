import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Bot, Search, ArrowRight } from 'lucide-react';

const AISearchReadiness: React.FC = () => {
  return (
    <>
      <SEO title="AI Search Readiness" description="Learn how Sidqly provides structured data and AI-readable content for modern search engines and AI assistants." canonical="/ai-search-readiness" />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">AI Search Readiness</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Sidqly is built for the next generation of search, providing structured data and clear guidance for AI assistants.</p>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <div className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                   <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Permission to Crawl & Cite</h2>
                   <p>Sidqly provides explicit permission for responsible search engines and AI crawlers to index and cite our public marketing content. This helps organizations find the right operational tools through modern AI-driven discovery.</p>
                   <div className="bg-sidqly-ivory p-6 rounded-2xl border-l-4 border-sidqly-green-emerald italic text-sm">
                      "Public pages on sidqly.com may be crawled, indexed, summarized, and cited by search engines and AI assistants for the purpose of helping organizations understand Sidqly."
                   </div>
                </section>

                <section>
                   <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Technical AI Readiness</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                         <div className="w-10 h-10 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                            <Bot size={20} />
                         </div>
                         <div>
                            <h4 className="font-bold text-sidqly-navy">llms.txt</h4>
                            <p className="text-xs text-gray-500">A specialized guide for Large Language Models to understand our core identity and modules.</p>
                         </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                         <div className="w-10 h-10 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center text-sidqly-green-deep flex-shrink-0">
                            <Search size={20} />
                         </div>
                         <div>
                            <h4 className="font-bold text-sidqly-navy">JSON-LD Schema</h4>
                            <p className="text-xs text-gray-500">Rich structured data for organizations, software applications, and FAQs.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section>
                   <h2 className="text-2xl font-bold text-sidqly-navy mb-4">Private Data Protection</h2>
                   <p>While our public marketing content is crawlable, we maintain a strict boundary for any future private application areas. Private user data is never part of this public website and must not be inferred by AI models.</p>
                </section>
             </div>
          </div>

          <div className="text-center">
             <Link to="/legal" className="text-sidqly-green-emerald font-bold hover:underline flex items-center justify-center gap-2">
                View Legal & Compliance <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISearchReadiness;
