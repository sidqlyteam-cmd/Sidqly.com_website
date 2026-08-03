import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateBreadcrumbSchema, generateFAQSchema } from '../lib/schema';
import { knowledgeHub } from '../data/knowledgeHub';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../components/ui/PageTransition';
import { Calendar, User, ChevronLeft, ShieldCheck, Layers } from 'lucide-react';

const KnowledgeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = knowledgeHub.find(k => k.slug === slug);

  if (!item) {
    return <Navigate to="/knowledge-hub" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Knowledge Hub", item: "/knowledge-hub" },
        { name: item.title, item: `/knowledge-hub/${item.slug}` }
      ]),
      generateFAQSchema(item.faqs)
    ]
  };

  // Match topic to specific local SVG files created
  let infographicSrc = "";
  let infographicAlt = "";
  let infographicExplanation = "";

  if (item.svgIconName === "donation-lifecycle") {
    infographicSrc = "/images/donation-lifecycle.svg";
    infographicAlt = "Donation Lifecycle Trace Flow Diagram";
    infographicExplanation = "This visual mapping outlines the exact trace of donor funds: from Cash/Bank intake through manual statement checking, isolated ledger categorizations, field volunteer routing, quality reviews, face-blurring, and secure donor-ready reports.";
  } else if (item.svgIconName === "zakat-calculation") {
    infographicSrc = "/images/zakat-calculation.svg";
    infographicAlt = "Zakat Calculation and Case Screening Flow Diagram";
    infographicExplanation = "This diagram charts the caseworker screening process: logging applicant wealth, calculating liabilities, evaluating gold/silver Nisab boundaries manually, separating ledgers, and recording signed direct recipient handovers (Tamleek).";
  } else if (item.svgIconName === "ramadan-campaign-flow") {
    infographicSrc = "/images/ramadan-campaign-flow.svg";
    infographicAlt = "Ramadan Sourcing & Volunteer Dispatch Flow Diagram";
    infographicExplanation = "This flow shows the high-volume Ramadan routing pipeline: organizing Family Ration batches, optimizing driver route schedules, assigning tasks with row-restricted maps, and uploading sanitized delivery evidence.";
  } else if (item.svgIconName === "payment-verification") {
    infographicSrc = "/images/payment-verification.svg";
    infographicAlt = "Manual Payment Verification Process Flow Diagram";
    infographicExplanation = "This visual tracks the manual statement checking desk: receiving wire screenshots, matching transaction entries against actual corporate bank statement files, and locking the confirmed ledger status.";
  }

  return (
    <PageTransition>
      <SEO
        title={`${item.title} | Islamic Operations Guide | Sidqly`}
        description={item.definition}
        canonical={`/knowledge-hub/${item.slug}`}
        schema={schema}
      />

      {/* Hero Header */}
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/knowledge-hub" className="inline-flex items-center text-sidqly-green-soft hover:text-white font-bold text-sm mb-6 transition-colors">
              <ChevronLeft size={16} /> Back to Knowledge Hub
            </Link>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="px-3 py-1 rounded-full bg-sidqly-green-soft/20 text-sidqly-green-soft text-[10px] font-bold uppercase tracking-wider">
                {item.type}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-300 font-bold uppercase">
                <Calendar size={14} /> Last Updated: {item.lastUpdated}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {item.title}
            </h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed mb-8">
              Focus keyword: <span className="font-semibold text-white">"{item.focusKeyword}"</span>
            </p>

            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6 text-xs text-gray-400 font-bold uppercase">
              <span className="flex items-center gap-1.5"><User size={14} /> Author: {item.author}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Shariah Reviewer: {item.reviewer}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First Component Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Direct Answer (40-70 words) */}
          <div className="bg-[#ecfdf5] border-l-4 border-sidqly-green-emerald p-8 rounded-r-3xl mb-12 shadow-sm">
            <h4 className="font-bold text-sidqly-green-deep uppercase tracking-widest text-xs mb-2">Direct Answer</h4>
            <p className="text-gray-800 leading-relaxed font-semibold text-base md:text-lg">
              {item.directAnswer}
            </p>
          </div>

          <div className="prose prose-lg prose-sidqly max-w-none text-gray-700 leading-relaxed space-y-12">

            {/* Definition */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">What It Is</h2>
              <p className="text-gray-600 font-medium">
                {item.definition}
              </p>
            </div>

            {/* Expanded Explanation */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">Expanded Explanation</h2>
              <p className="text-gray-600">
                {item.explanation}
              </p>
            </div>

            {/* Original SVG Infographics Showroom */}
            {infographicSrc && (
              <div className="not-prose my-12">
                <Card variant="ivory" className="p-8 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-lg text-sidqly-navy mb-2">Process Infographic</h3>
                  <p className="text-xs text-gray-500 mb-6">{infographicAlt}</p>

                  <img src={infographicSrc} alt={infographicAlt} className="w-full h-auto border border-gray-100 rounded-2xl mb-6 bg-white" />

                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-xs text-gray-600 leading-relaxed">
                     <p className="font-bold text-sidqly-navy mb-2 flex items-center gap-1.5"><Layers size={14} className="text-sidqly-green-deep" /> Text-Based Explanation:</p>
                     <p>{infographicExplanation}</p>
                  </div>
                </Card>
              </div>
            )}

            {/* Step-by-step Workflow */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">Step-by-Step Workflow</h2>
              <div className="space-y-4 mt-6">
                {item.workflow.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-sidqly-ivory p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-sidqly-green-soft text-sidqly-green-deep flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mt-1">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Use Case Examples */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-4">Real-World Examples</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {item.examples.map((ex, idx) => (
                  <Card variant="white" key={idx} className="p-6 border border-gray-100 hoverable">
                    <h4 className="font-bold text-sidqly-navy mb-2 text-sm">Example Scenario {idx + 1}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{ex}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sidqly-navy mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {item.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-sidqly-ivory p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-sidqly-navy mb-2 text-sm">{faq.question}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Onboarding CTA */}
      <section className="py-24 bg-sidqly-navy text-white text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">See If Sidqly Fits Your Operations</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ready to transition your charity or committee to an audit-ready, dignified giving standard? Begin today with our risk-free, 30-day Guided Pilot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="emerald" className="px-10 py-4 text-base" onClick={() => window.location.href = "/guided-pilot"}>
              Apply for Guided Pilot
            </Button>
            <Button variant="outline" className="px-10 py-4 text-base text-white hover:text-sidqly-navy" onClick={() => window.location.href = "/book-demo"}>
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default KnowledgeDetail;
