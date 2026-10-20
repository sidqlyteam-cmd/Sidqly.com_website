import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { allBlogPosts } from '../../data/blog_regional';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../lib/schema';
import { ArrowLeft, Calendar, User, Tag, Clock, Link as LinkIcon, Linkedin, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { brand } from '../../config/brand';

const TOC_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'the-problem', label: 'The Problem' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'how-sidqly-helps', label: 'How Sidqly Helps' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'faqs', label: 'FAQs' }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allBlogPosts.find(p => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / (windowHeight || 1)}`;
      setScrollProgress(Number(scroll) * 100);

      // Active Section Spy
      const sectionIds = TOC_ITEMS.map(item => item.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="py-24 text-center bg-white min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold text-sidqly-navy mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-6">The article you are looking for may have moved or been updated.</p>
        <Link to="/blog" className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:bg-sidqly-green-emerald transition-all">Back to Blog</Link>
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
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <>
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-sidqly-green-deep via-sidqly-green-emerald to-emerald-400 z-50 transition-all duration-150"
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

      <article className="py-16 md:py-24 bg-white text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sidqly-green-deep font-bold mb-10 hover:gap-3 transition-all hover:text-sidqly-green-emerald">
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3.5 text-xs sm:text-sm text-slate-500 mb-6 font-medium">
              <span className="flex items-center gap-1.5" title="Published Date"><Calendar size={15} /> Published: {post.date}</span>
              {post.modifiedDate && post.modifiedDate !== post.date && (
                <span className="flex items-center gap-1.5 text-sidqly-green-deep font-semibold" title="Last Updated Date"><Calendar size={15} /> Updated: {post.modifiedDate}</span>
              )}
              <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readingTime}</span>
              <span className="flex items-center gap-1.5"><User size={15} /> Sidqly Team</span>
              <span className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full text-sidqly-green-deep font-bold border border-emerald-200/70"><Tag size={13} /> {post.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sidqly-navy leading-tight mb-6 tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-sidqly-gold pl-6 mb-8 font-medium">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-emerald-100/70 border border-emerald-200 rounded-full flex items-center justify-center text-sidqly-green-deep font-bold text-sm">ST</div>
                <div>
                  <p className="text-sm font-bold text-sidqly-navy">Sidqly Operations Team</p>
                  <p className="text-xs text-slate-500">Perspective: {post.perspective}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Share</span>
                <button onClick={copyLink} title="Copy Link" className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full border border-slate-200 transition-colors cursor-pointer"><LinkIcon size={16} /></button>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full border border-slate-200 transition-colors"><Linkedin size={16} /></a>
                <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`} className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full border border-slate-200 transition-colors"><Mail size={16} /></a>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 h-fit sticky top-24 order-2 lg:order-1">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <h3 className="text-xs font-extrabold text-sidqly-navy uppercase tracking-widest">Table of Contents</h3>
                  <span className="text-[11px] font-semibold text-slate-400">Jump to section</span>
                </div>
                <nav className="space-y-1">
                  {TOC_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`flex items-center justify-between text-xs sm:text-sm px-3 py-2 rounded-xl transition-all ${
                        activeSection === item.id
                          ? 'bg-emerald-100/80 text-sidqly-green-deep font-bold border border-emerald-300/80 shadow-xs'
                          : 'text-slate-600 hover:text-sidqly-green-deep hover:bg-white'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <ChevronRight size={14} className={activeSection === item.id ? 'text-sidqly-green-deep' : 'opacity-40'} />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-sidqly-green-deep to-emerald-900 rounded-3xl text-white shadow-md">
                <span className="inline-block px-2.5 py-1 bg-white/10 rounded-full text-[10px] font-bold text-sidqly-green-soft uppercase tracking-widest mb-3">
                  Ready to upgrade?
                </span>
                <h4 className="text-lg font-bold mb-3 leading-snug">Bring structure & dignity to your giving operations.</h4>
                <div className="space-y-2 mt-4">
                  <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-sidqly-green-emerald hover:bg-emerald-500 rounded-xl font-bold text-xs shadow-xs transition-all">
                    Book Live Demo
                  </a>
                  <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-white text-sidqly-navy hover:bg-slate-100 rounded-xl font-bold text-xs transition-all">
                    Fill Inquiry Form
                  </a>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {/* Quick Answer Block */}
              <div className="bg-emerald-50/70 p-6 md:p-8 rounded-3xl border border-emerald-200 mb-10 shadow-xs">
                 <h2 className="text-lg font-extrabold text-sidqly-navy mb-2.5 flex items-center gap-2">
                   <CheckCircle2 size={20} className="text-sidqly-green-emerald" /> Quick Summary
                 </h2>
                 <p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
                   {post.description}
                 </p>
              </div>

              {/* Main HTML Content */}
              <div
                className="prose prose-lg max-w-none text-slate-700 leading-relaxed prose-headings:text-sidqly-navy prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-5 prose-ul:my-4 prose-li:my-1.5"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Mid-Article CTA Block */}
              <div className="mt-14 p-8 bg-gradient-to-br from-sidqly-green-deep to-emerald-950 rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
                 <div className="relative z-10 max-w-xl mx-auto">
                    <h3 className="text-2xl font-bold mb-3">Need to manage this workflow securely?</h3>
                    <p className="text-slate-200 text-sm mb-6 leading-relaxed">
                      Sidqly helps Islamic organizations manage manual payment review, proof approval, and dignity-safe donor updates in one centralized platform.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                       <a href={brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz'} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm shadow-sm">Book a Demo</a>
                       <Link to="/features" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold transition-all text-sm">Explore Features</Link>
                    </div>
                 </div>
              </div>

              <div className="mt-10 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <p className="text-xs text-slate-500 italic leading-relaxed">
                  <strong>Editorial Note:</strong> This guide is written from Sidqly’s operational perspective to help organizations improve giving workflows. It does not replace local legal, financial, tax, or religious advice. Sidqly supports operational tracking and review; religious and legal decisions remain with the organization's authorized reviewers.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section id="faqs" className="bg-slate-50 p-8 md:p-12 rounded-3xl mb-16 border border-slate-200 shadow-xs">
              <h3 className="text-2xl font-extrabold text-sidqly-navy mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                    <h4 className="font-bold text-sidqly-navy mb-2.5 text-base sm:text-lg">{faq.question}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {post.references && post.references.length > 0 && (
            <section className="mb-16">
              <h3 className="text-xl font-bold text-sidqly-navy mb-6">References and further reading</h3>
              <ul className="space-y-3">
                {post.references.map((ref, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition-colors">
                    <div>
                      <p className="font-bold text-sidqly-navy text-sm">{ref.title}</p>
                      <p className="text-xs text-slate-500">{ref.sourceName} {ref.accessedDate && `• Accessed: ${ref.accessedDate}`}</p>
                    </div>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald flex items-center gap-1 mt-2 md:mt-0">View Source <ChevronRight size={14} /></a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Bottom Transformation CTA */}
          <section className="bg-gradient-to-r from-sidqly-green-deep to-emerald-900 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Transform your operations today</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Join leading Islamic charities, mosques, and relief organizations using Sidqly to manage their giving with trust, proof, and clarity.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md text-sm">Book a Demo</a>
              <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-sidqly-navy hover:bg-slate-100 px-8 py-3.5 rounded-xl font-bold transition-all text-sm">Fill Inquiry Form</a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
