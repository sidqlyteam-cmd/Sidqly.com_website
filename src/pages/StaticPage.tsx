import React from 'react';
import SEO from '../components/SEO';

interface StaticPageProps {
  title: string;
  description: string;
  content: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, description, content }) => {
  return (
    <>
      <SEO title={title} description={description} canonical="/" />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-sidqly-navy mb-10">{title}</h1>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm prose prose-sidqly max-w-none">
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaticPage;
