import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allBlogPosts } from '../../data/blog_regional';
import { Tag, ArrowRight } from 'lucide-react';

const BlogIndex: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog & Operational Guides | Sidqly"
        description="Practical guides and operational insights for modern Islamic organizations on managing Zakat, Sadaqah, Qurbani, and more."
        canonical="/blog"
      />

      <section className="py-16 md:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 bg-emerald-50 text-sidqly-green-deep rounded-full text-xs font-extrabold uppercase tracking-widest border border-emerald-200/80 mb-4">
              Knowledge & Strategy
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-5 tracking-tight">Guides & Operational Insights</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">Expert guidance on scaling your impact, protecting beneficiary dignity, building donor trust, and professionalizing your giving operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sidqly-green-deep hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col shadow-xs"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-sidqly-green-deep uppercase tracking-widest mb-4">
                    <span className="px-2.5 py-1 bg-emerald-50 rounded-lg border border-emerald-200/60 flex items-center gap-1.5">
                      <Tag size={13} className="text-sidqly-green-emerald" /> {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-deep transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm pt-4 border-t border-slate-100 group-hover:text-sidqly-green-emerald transition-colors">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
