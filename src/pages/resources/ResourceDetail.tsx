import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { ChevronRight, BookOpen, CheckCircle, Target } from 'lucide-react';
import { resources } from '../../data/resources';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../lib/schema';

const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resources.find(r => r.slug === slug);

  if (!resource) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Resource Not Found</h1>
        <Link to="/resources" className="text-sidqly-green-emerald underline">Back to Resources</Link>
      </div>
    );
  }

  const Icon = resource.category === 'Checklist' ? CheckCircle : resource.category === 'Strategy' ? Target : BookOpen;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: resource.title,
        description: resource.description || "",
        date: "2026-06-12",
        author: "Sidqly Team",
        url: `/resources/${resource.slug}`
      }),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Resources", item: "/resources" },
        { name: resource.title, item: `/resources/${resource.slug}` }
      ])
    ]
  };

  return (
    <>
      <SEO
        title={resource.title}
        description={resource.description}
        canonical={`/resources/${resource.slug}`}
        schema={schema}
      />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/resources" className="hover:text-sidqly-green-emerald transition-colors">Resources</Link>
            <ChevronRight size={14} />
            <span className="text-sidqly-navy font-medium">{resource.title}</span>
          </nav>

          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
             <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-sidqly-ivory rounded-2xl flex items-center justify-center text-sidqly-green-deep">
                   <Icon size={32} />
                </div>
                <div>
                   <span className="inline-block px-3 py-1 bg-sidqly-soft-green text-sidqly-green-deep text-xs font-bold rounded-full mb-2">
                      {resource.category}
                   </span>
                   <h1 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy">{resource.title}</h1>
                </div>
             </div>

             <div
                className="prose prose-sidqly max-w-none text-gray-700 leading-relaxed
                           prose-headings:text-sidqly-navy prose-headings:font-bold
                           prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                           prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                           prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
                           prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-4
                           prose-strong:text-sidqly-navy"
                dangerouslySetInnerHTML={{ __html: resource.content }}
             />

             <div className="mt-16 pt-16 border-t border-gray-100">
                <div className="bg-sidqly-navy rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                   <div>
                      <h4 className="font-bold text-xl mb-2">Need a tailored {resource.category.toLowerCase()}?</h4>
                      <p className="text-gray-400 text-sm">Our strategy team can help your organization implement these professional standards.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                      <a href={brand.calendlyUrl} className="bg-sidqly-green-emerald text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-center">
                         Book Demo
                      </a>
                      <a href={brand.inquiryFormUrl} className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                         Fill Inquiry Form
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceDetail;
