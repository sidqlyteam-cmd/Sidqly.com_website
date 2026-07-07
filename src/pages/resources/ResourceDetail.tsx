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

  const graph: Record<string, unknown>[] = [
    generateArticleSchema({
      title: resource.seoTitle || resource.title,
      description: resource.seoDescription || resource.description || "",
      date: "2026-06-12",
      author: "Sidqly Team",
      url: `/resources/${resource.slug}`
    }),
    generateBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Resources", item: "/resources" },
      { name: resource.title, item: `/resources/${resource.slug}` }
    ])
  ];

  if (resource.faqs && resource.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": resource.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  if (resource.steps && resource.steps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "name": resource.seoTitle || resource.title,
      "description": resource.seoDescription || resource.description,
      "step": resource.steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "url": step.url || `https://sidqly.com/resources/${resource.slug}#step-${index + 1}`
      }))
    });
  }

  if (resource.relatedModules && resource.relatedModules.length > 0) {
    graph.push({
      "@type": "Service",
      "name": "Sidqly Operational Modules",
      "provider": {
        "@type": "Organization",
        "name": "Sidqly"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Related Modules",
        "itemListElement": resource.relatedModules.map((slug) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": slug.replace(/-/g, " "),
            "url": `https://sidqly.com/modules/${slug}`
          }
        }))
      }
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <>
      <SEO
        title={resource.seoTitle || resource.title}
        focusKeyword={resource.focusKeyword}
        secondaryKeywords={resource.secondaryKeywords}
        description={resource.seoDescription || resource.description}
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


                {/* Quick Answer Block */}
                <div className="bg-sidqly-green-soft/10 p-6 md:p-8 rounded-3xl border border-sidqly-green-soft/20 mb-12 shadow-sm">
                   <h2 className="text-xl font-bold text-sidqly-navy mb-3 flex items-center gap-2">
                     <span className="w-8 h-8 rounded-full bg-sidqly-green-soft/30 flex items-center justify-center text-sidqly-green-deep text-sm">✓</span> Quick Answer
                   </h2>
                   <p className="text-gray-700 leading-relaxed font-medium">
                     {resource.description}
                   </p>
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


             {resource.relatedModules && resource.relatedModules.length > 0 && (
                <div className="mt-12 p-8 bg-sidqly-soft-green rounded-3xl border border-sidqly-green-emerald/20">
                   <h3 className="text-xl font-bold text-sidqly-green-deep mb-4">Related Sidqly Modules</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {resource.relatedModules.map((moduleSlug) => (
                         <li key={moduleSlug}>
                            <Link to={`/modules/${moduleSlug}`} className="text-sidqly-navy font-medium hover:text-sidqly-green-emerald flex items-center gap-2 transition-colors">
                               <CheckCircle size={16} className="text-sidqly-green-emerald" />
                               {moduleSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </Link>
                         </li>
                      ))}
                   </ul>
                </div>
             )}

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
