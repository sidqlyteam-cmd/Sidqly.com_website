import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allBlogPosts } from '../../data/blog_regional';
import { generateArticleSchema } from '../../lib/schema';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { brand } from '../../config/brand';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="text-sidqly-green-emerald mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  const schema = generateArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    author: "Sidqly Operations Team",
    url: `/blog/${post.slug}`
  });

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        schema={schema}
      />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><User size={16} /> Sidqly Team</span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-sidqly-ivory rounded-full text-sidqly-green-deep font-bold"><Tag size={14} /> {post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-sidqly-gold pl-6">
              {post.description}
            </p>
          </header>

          <div
            className="prose prose-lg prose-sidqly max-w-none text-gray-700 leading-relaxed mb-20"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.faqs.length > 0 && (
            <section className="bg-sidqly-ivory p-8 md:p-12 rounded-3xl mb-20">
              <h3 className="text-2xl font-bold text-sidqly-navy mb-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-sidqly-navy mb-3">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="bg-sidqly-green-deep rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Transform your operations today</h2>
            <p className="text-sidqly-green-soft mb-10 max-w-2xl mx-auto">
              Join leading Islamic organizations using Sidqly to manage their giving with trust, proof, and clarity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book a Demo</a>
              <a href={brand.inquiryFormUrl} className="bg-white text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Fill Inquiry Form</a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
