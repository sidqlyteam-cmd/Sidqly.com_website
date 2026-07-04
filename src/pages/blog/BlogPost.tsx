import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allBlogPosts } from '../../data/blog_regional';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../lib/schema';
import { ArrowLeft, Calendar, User, Tag, Clock, Link as LinkIcon, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { brand } from '../../config/brand';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allBlogPosts.find(p => p.slug === slug);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll) * 100);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="text-sidqly-green-emerald mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    modifiedDate: post.modifiedDate,
    author: "Sidqly Operations Team",
    url: `/blog/${post.slug}`
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` }
  ]);

  const shareUrl = `${brand.domain}/blog/${post.slug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <>
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-sidqly-green-deep to-sidqly-green-emerald z-50 transition-all duration-300"
      />
      <SEO
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        schema={articleSchema}
      />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readingTime}</span>
              <span className="flex items-center gap-1.5"><User size={16} /> Sidqly Team</span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-sidqly-ivory rounded-full text-sidqly-green-deep font-bold"><Tag size={14} /> {post.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-sidqly-gold pl-6 mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-sidqly-ivory rounded-full flex items-center justify-center text-sidqly-green-deep font-bold">ST</div>
                <div>
                  <p className="text-sm font-bold text-sidqly-navy">Sidqly Operations Team</p>
                  <p className="text-xs text-gray-500">Perspective: {post.perspective}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Share</p>
                <button onClick={copyLink} title="Copy Link" className="p-2 bg-gray-50 rounded-full hover:bg-sidqly-ivory transition-colors"><LinkIcon size={18} /></button>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-sidqly-ivory transition-colors"><Linkedin size={18} /></a>
                <a href={`mailto:?subject=${post.title}&body=${shareUrl}`} className="p-2 bg-gray-50 rounded-full hover:bg-sidqly-ivory transition-colors"><Mail size={18} /></a>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <aside className="lg:col-span-4 h-fit sticky top-24 order-2 lg:order-1">
              <div className="bg-sidqly-ivory p-8 rounded-3xl border border-gray-100">
                <h3 className="text-sm font-bold text-sidqly-navy uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Table of Contents</h3>
                <nav className="space-y-4">
                  <a href="#overview" onClick={(e) => handleTocClick(e, 'overview')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> Overview</a>
                  <a href="#the-problem" onClick={(e) => handleTocClick(e, 'the-problem')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> The Problem</a>
                  <a href="#best-practices" onClick={(e) => handleTocClick(e, 'best-practices')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> Best Practices</a>
                  <a href="#how-sidqly-helps" onClick={(e) => handleTocClick(e, 'how-sidqly-helps')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> How Sidqly Helps</a>
                  <a href="#faqs" onClick={(e) => handleTocClick(e, 'faqs')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> FAQs</a>
                  <a href="#conclusion" onClick={(e) => handleTocClick(e, 'conclusion')} className="flex items-center gap-2 text-sm text-gray-600 hover:text-sidqly-green-emerald transition-colors"><ChevronRight size={14} /> Conclusion</a>
                </nav>
              </div>

              <div className="mt-8 p-8 bg-sidqly-green-deep rounded-3xl text-white">
                <p className="text-xs font-bold text-sidqly-green-soft uppercase tracking-widest mb-2">Ready to improve?</p>
                <h4 className="text-xl font-bold mb-4">Start your professional transformation.</h4>
                <a href={brand.calendlyUrl} className="block w-full text-center py-3 bg-sidqly-green-emerald rounded-xl font-bold text-sm hover:shadow-lg transition-all mb-3">Book Demo</a>
                <a href={brand.inquiryFormUrl} className="block w-full text-center py-3 bg-white text-sidqly-navy rounded-xl font-bold text-sm hover:shadow-lg transition-all">Fill Form</a>
              </div>
            </aside>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div
                className="prose prose-lg prose-sidqly max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <p className="text-xs text-gray-500 italic">
                  <strong>Editorial Note:</strong> This guide is written from Sidqly’s operational perspective to help organizations improve giving workflows. It does not replace local legal, financial, tax, or religious advice. Sidqly supports operational tracking and review; religious and legal decisions remain with the organization's authorized reviewers.
                </p>
              </div>
            </div>
          </div>

          {post.faqs.length > 0 && (
            <section id="faqs" className="bg-sidqly-ivory p-8 md:p-12 rounded-3xl mb-20">
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

          {post.references && post.references.length > 0 && (
            <section className="mb-20">
              <h3 className="text-xl font-bold text-sidqly-navy mb-6">References and further reading</h3>
              <ul className="space-y-4">
                {post.references.map((ref, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-bold text-sidqly-navy text-sm">{ref.title}</p>
                      <p className="text-xs text-gray-500">{ref.sourceName} {ref.accessedDate && `• Accessed: ${ref.accessedDate}`}</p>
                    </div>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-sidqly-green-emerald flex items-center gap-1 mt-2 md:mt-0">View Source <ChevronRight size={14} /></a>
                  </li>
                ))}
              </ul>
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
