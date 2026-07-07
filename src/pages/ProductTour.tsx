import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2, ArrowRight, PlayCircle, Shield, FileText, CheckSquare, EyeOff, LayoutTemplate } from 'lucide-react';
import { generateBreadcrumbSchema } from '../lib/schema';

const ProductTour: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Product Tour", item: "/product-tour" }
      ])
    ]
  };

  return (
    <>
      <SEO
        title="Sidqly Product Tour | Verified Giving Software for Islamic Charities"
        description="See how Sidqly helps mosques, Islamic charities, Zakat committees, Qurbani teams, and Ramadan relief teams manage payment proof, approvals, donor-safe updates, and board-ready reporting."
        canonical="/product-tour"
        schema={schema}
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">See How Sidqly Works</h1>
            <p className="text-xl text-sidqly-green-soft leading-relaxed mb-10">
              Walk through the Sidqly workflow for verified giving, manual payment review, proof approval, donor-safe updates, recipient dignity protection, and board-ready reporting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} /> Book a Demo
              </a>
              <Link to="/features" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sidqly-ivory p-8 rounded-[2rem] border border-sidqly-green-soft/30 flex gap-6 items-start">
             <div className="w-12 h-12 bg-sidqly-green-emerald text-white rounded-xl flex items-center justify-center flex-shrink-0">
               <Shield size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold text-sidqly-navy mb-2">Quick Answer</h3>
               <p className="text-gray-600 leading-relaxed">
                 Sidqly helps Islamic giving teams move from scattered payment screenshots, manual proof tracking, and messy reporting into a structured workflow for review, approval, dignity-safe updates, and clearer records.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy">The Operational Shift</h2>
            <p className="text-gray-600 mt-4 text-lg">Why teams move their workflow to Sidqly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm">✕</span> Before Sidqly
              </h3>
              <ul className="space-y-4">
                {[
                  "Payment screenshots in scattered chats",
                  "Manual review without clear logs",
                  "Proof files stored in messy folders",
                  "Donor updates written manually",
                  "Sensitive recipient proof shared too widely",
                  "Board reports created at the end under pressure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-400 mt-1">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sidqly-navy p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-sidqly-green-soft mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-sidqly-green-deep flex items-center justify-center text-sm">✓</span> After Sidqly
              </h3>
              <ul className="space-y-4">
                {[
                  "Central review queue",
                  "Clear approval status",
                  "Structured campaign tracking",
                  "Dignity-safe proof review",
                  "Donor-ready updates",
                  "Cleaner internal reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-sidqly-green-emerald mt-1 flex-shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-6">Step-by-Step Product Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how data moves through Sidqly from submission to board-ready reporting.</p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 rounded-full hidden md:block"></div>

            {[
              { title: "Create a campaign or giving category", what: "Define a specific Zakat fund, Qurbani location, or Mosque project.", helps: "Centralizes rules and reporting categories from day one.", matters: "Prevents commingling of funds like Zakat and Sadaqah." },
              { title: "Receive payment proof or donor submission", what: "Donors submit receipts via secure forms.", helps: "Puts all submissions in a single queue.", matters: "Stops screenshots from getting lost in WhatsApp." },
              { title: "Review the proof manually", what: "Finance team checks the receipt against bank statements.", helps: "Provides a structured dashboard for visual verification.", matters: "Ensures no phantom donations inflate the budget." },
              { title: "Approve, reject, or request follow-up", what: "Admins log the decision with a single click.", helps: "Creates a permanent audit trail.", matters: "Reduces miscommunication and duplicate approvals." },
              { title: "Assign fulfillment or field action", what: "Send tasks to volunteers or vendors.", helps: "Limits data access only to what the vendor needs.", matters: "Keeps donor data secure while getting work done." },
              { title: "Collect proof from team/vendor/field worker", what: "Field agents upload photos of distribution.", helps: "Links proof directly to the specific donation/campaign.", matters: "Creates accountability for every dollar spent." },
              { title: "Review proof for accuracy and dignity", what: "Admins check photos before external sharing.", helps: "Applies automated face-blurring tools.", matters: "Protects recipient privacy and dignity absolutely." },
              { title: "Prepare donor-safe update", what: "Generate an impact summary.", helps: "Uses approved, blurred photos and verified numbers.", matters: "Builds trust without violating ethical boundaries." },
              { title: "Send or export update", what: "Share the link with donors or sponsors.", helps: "Provides a professional, secure portal view.", matters: "Replaces messy email threads with a clean experience." },
              { title: "Generate board-ready report", what: "Download a PDF or Excel summary.", helps: "Aggregates all approved proof and financial data.", matters: "Makes audits and trustee meetings stress-free." }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start relative bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft transition-all">
                <div className="w-16 h-16 bg-sidqly-navy text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg hidden md:flex">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sidqly-navy mb-4 flex items-center gap-3">
                    <span className="md:hidden w-8 h-8 bg-sidqly-navy text-white rounded-lg flex items-center justify-center text-sm">{i + 1}</span>
                    {step.title}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600"><strong className="text-sidqly-navy">What you do:</strong> {step.what}</p>
                    <p className="text-gray-600"><strong className="text-sidqly-navy">How Sidqly helps:</strong> {step.helps}</p>
                    <p className="text-sidqly-green-deep font-medium"><strong className="text-sidqly-navy">Why it matters:</strong> {step.matters}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Preview Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sidqly-navy mb-4">Illustrative Workflow Previews</h2>
            <p className="text-gray-600">A conceptual look at how Sidqly organizes complex operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckSquare />, title: "Payment Review Queue", desc: "Compare submitted receipts side-by-side with bank references." },
              { icon: <Shield />, title: "Proof Approval Dashboard", desc: "Gatekeeper workflow to ensure only verified proof passes." },
              { icon: <LayoutTemplate />, title: "Campaign Tracker", desc: "Real-time visibility into collection vs fulfillment targets." },
              { icon: <FileText />, title: "Qurbani Fulfillment", desc: "Track shares, vendor assignments, and distribution status." },
              { icon: <CheckCircle2 />, title: "Zakat Record View", desc: "Isolated dashboard purely for Zakat-eligible case tracking." },
              { icon: <ArrowRight />, title: "Donor Update Preview", desc: "Clean, professional portal views for major donors and sponsors." },
              { icon: <FileText />, title: "Board Report Generator", desc: "One-click aggregations of all approved proof for audit." },
              { icon: <EyeOff />, title: "Dignity Checklist", desc: "Automated prompts to review recipient privacy before sharing." }
            ].map((preview, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-start shadow-sm">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-emerald rounded-xl flex items-center justify-center mb-4">
                  {preview.icon}
                </div>
                <h4 className="font-bold text-sidqly-navy mb-2">{preview.title}</h4>
                <p className="text-sm text-gray-500">{preview.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-navy mb-4">Who Uses This Workflow?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: "Mosques", url: "/use-cases/mosques" },
              { name: "Islamic Charities", url: "/use-cases/islamic-charities" },
              { name: "Qurbani Organizers", url: "/use-cases/qurbani-organizers" },
              { name: "Ramadan Teams", url: "/use-cases/sadaqah-campaign-teams" },
              { name: "Zakat Committees", url: "/use-cases/zakat-committees" },
              { name: "Donor Reporting Teams", url: "/modules/reports-board-packs" }
            ].map((uc, i) => (
              <Link key={i} to={uc.url} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-bold text-sidqly-navy hover:bg-sidqly-green-emerald hover:text-white hover:border-sidqly-green-emerald transition-all">
                {uc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tell us how your team currently handles payment proof, approvals, donor updates, Zakat, Sadaqah, Qurbani, Ramadan campaigns, or reporting. We will show where Sidqly fits into your workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all text-lg">
                Book a Demo
             </a>
             <Link to="/features" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-lg">
                Explore Features
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTour;
