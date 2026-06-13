import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allBlogPosts } from '../../data/blog_regional';
import { Tag, ArrowRight } from 'lucide-react';

const BlogIndex: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Practical guides and insights for modern Islamic organizations on managing Zakat, Sadaqah, Qurbani, and more."
        canonical="/blog"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Guides & Insights</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert guidance on scaling your impact, building donor trust, and professionalizing your giving operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-sidqly-green-soft hover:shadow-xl transition-all flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-sidqly-green-emerald uppercase tracking-widest mb-4">
                    <Tag size={14} /> {post.category}
                  </div>
                  <h2 className="text-2xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-deep transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
