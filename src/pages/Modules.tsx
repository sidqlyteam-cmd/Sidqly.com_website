import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart3, ShieldCheck, Heart, Beef, ShoppingBag,
  MessageSquare, Layout, CheckCircle2, ArrowRight, Store, ClipboardCheck, QrCode, FileText, Shield, Zap
} from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const Modules: React.FC = () => {
  const { slug } = useParams();

  const modules = [
    {
      slug: "zakat",
      icon: <ShieldCheck />,
      title: "Zakat Management",
      desc: "Shariah-compliant fund separation and eligibility tracking.",
      unique: {
        title: "Organized Zakat Distribution",
        focus: ["Strict fund separation", "Eligibility status logs", "Dignity-safe recipient profiles", "Re-verification alerts", "Human-controlled approvals"],
        text: "Track Zakat from collection to distribution with the highest standards of Shariah compliance and operational dignity. Sidqly supports operational tracking and reporting. Religious decisions remain with the organization’s authorized reviewers, scholars, or policy team."
      }
    },
    {
      slug: "qurbani",
      icon: <Beef />,
      title: "Qurbani Operations",
      desc: "End-to-end tracking of animal booking and slaughter proof.",
      unique: {
        title: "Transparent Qurbani Services",
        focus: ["Animal share allocation", "Field slaughter logs", "Proof of delivery collection", "Automated donor certificates", "Vendor status tracking"],
        text: "Manage complex Qurbani campaigns with real-time updates and verified evidence for every share. Proof becomes donor-visible only after review and approval."
      }
    },
    {
      slug: "ramadan",
      icon: <ShoppingBag />,
      title: "Ramadan Modules",
      desc: "Scalable workflows for ration drives and Iftar distribution.",
      unique: {
        title: "Ramadan Impact Tracking",
        focus: ["Ration bag inventory", "Meal batch distribution", "Volunteer route tracking", "Real-time fulfillment logs", "Post-Ramadan impact reports"],
        text: "Organize your Ramadan activities with professional tools that keep your team coordinated during the peak season."
      }
    },
    {
      slug: "sadaqah",
      icon: <Heart />,
      title: "Sadaqah Campaigns",
      desc: "Manage general donations and specific emergency appeals.",
      unique: {
        title: "Versatile Sadaqah Workflows",
        focus: ["Emergency appeal setup", "Ongoing charity projects", "Donor updates with proof", "Campaign-specific reporting", "Verified impact trails"],
        text: "Launch and manage Sadaqah campaigns with ease, providing donors with the transparency they expect from a modern platform."
      }
    },
    {
      slug: "charity-requests",
      icon: <ClipboardCheck />,
      title: "Charity Requests",
      desc: "Professional intake and screening for aid seekers.",
      unique: {
        title: "Dignified Intake Management",
        focus: ["Custom request forms", "Internal screening logs", "Document verification", "Status communication", "Beneficiary history"],
        text: "Manage charity requests professionally while protecting applicant dignity. Ensure aid reaches those who need it most through a clear review process."
      }
    },
    {
      slug: "proof-trust",
      icon: <CheckCircle2 />,
      title: "Proof Trust Engine",
      desc: "Professional review system for field evidence verification.",
      unique: {
        title: "Verified Field Evidence",
        focus: ["Multi-stage proof review", "Photo & Video evidence logs", "Approval audit trails", "Donor-safe proof sharing", "Dignity-first blurring tools"],
        text: "Build absolute trust by showing donors exactly how their contribution was used, verified by your own team. Proof becomes donor-visible only after review and approval."
      }
    },
    {
      slug: "qr-verification",
      icon: <QrCode />,
      title: "QR Verification",
      desc: "Instant verification of receipts and certificates.",
      unique: {
        title: "Fraud-Ready Verification",
        focus: ["Unique QR codes for every record", "Mobile-ready scan portal", "Instant validity checks", "Secure audit trail", "Public-facing trust signals"],
        text: "Allow donors, partners, and regulators to verify the authenticity of any Sidqly-issued document instantly."
      }
    },
    {
      slug: "reports",
      icon: <BarChart3 />,
      title: "Professional Reporting",
      desc: "Real-time analytics and board-ready reports.",
      unique: {
        title: "Board-Ready Transparency",
        focus: ["Custom PDF report generation", "Real-time operational dashboards", "Zakat distribution summaries", "Donor impact certificates", "Audit-ready CSV exports"],
        text: "Generate professional reports in seconds, saving hundreds of hours of manual data entry for your team."
      }
    },
    {
      slug: "vendor-fulfillment",
      icon: <Store />,
      title: "Vendor Fulfillment",
      desc: "Coordinate with fulfillment partners and track deliveries.",
      unique: {
        title: "Collaborative Partner Portals",
        focus: ["Partner task assignment", "Fulfillment status tracking", "Bulk proof uploads", "Payment reconciliation", "Quality control logs"],
        text: "Bring your vendors into a unified system where tasks are clear and accountability is automated."
      }
    },
    {
      slug: "corporate-csr-zakat",
      icon: <FileText />,
      title: "Corporate CSR & Zakat",
      desc: "Board-ready reports for institutional sponsors.",
      unique: {
        title: "Audit-Ready Corporate Reporting",
        focus: ["Employee giving logs", "Corporate-safe impact proof", "Matching program tracking", "Annual CSR reports", "Whitelabel reporting options"],
        text: "Support corporate sponsors with the professional reporting and verified impact data they need for their board and compliance teams."
      }
    },
    {
      slug: "receipts-certificates",
      icon: <FileText />,
      title: "Receipts & Certificates",
      desc: "Automated, branded donor documents.",
      unique: {
        title: "Professional Donor Documents",
        focus: ["Automated PDF generation", "Custom branding", "Tax-ready formats", "Instant email delivery", "Download portals"],
        text: "Replace manual receipt writing with automated, branded documents that professionalize your donor experience."
      }
    },
    {
      slug: "privacy-dignity-controls",
      icon: <Shield />,
      title: "Privacy & Dignity Controls",
      desc: "Granular data boundaries and access logs.",
      unique: {
        title: "Amanah-Safe Data Operations",
        focus: ["Role-based access", "Automated face-blurring", "Data minimization", "Audit logging", "Secure sharing links"],
        text: "Ensure the highest standards of dignity and privacy are built directly into your daily operational workflows."
      }
    },
    {
      slug: "audit-ready-records",
      icon: <CheckCircle2 />,
      title: "Audit-Ready Records",
      desc: "Comprehensive action logs for compliance teams.",
      unique: {
        title: "Complete Operational Transparency",
        focus: ["Timestamped action logs", "Approval tracking", "Financial reconciliation", "Exportable CSVs", "Compliance-ready data"],
        text: "Be prepared for any internal or external review with automatic, comprehensive audit trails of every action."
      }
    },
    {
      slug: "donor-communication",
      icon: <MessageSquare />,
      title: "Donor Communication",
      desc: "Automated but dignified recipient updates.",
      unique: {
        title: "Verified Impact Updates",
        focus: ["Campaign progress tracking", "Dignity-safe proof links", "Automated milestone emails", "Donor portal", "Clear impact summaries"],
        text: "Keep donors engaged with clear, verified updates that show the impact of their giving without compromising privacy."
      }
    },
    {
      slug: "pilot-launch-support",
      icon: <Zap />,
      title: "Pilot Launch Support",
      desc: "Guided onboarding for starting your digital journey safely.",
      unique: {
        title: "Structured Transformation",
        focus: ["Dedicated strategy sessions", "Workflow mapping", "Data migration support", "Team training", "Go-live assistance"],
        text: "Don't just buy software. Get the operational support needed to successfully transition your team to a professional standard."
      }
    }
  ];

  const currentModule = slug ? modules.find(m => m.slug === slug) : null;

  if (currentModule) {
    return (
      <>
        <SEO
          title={`${currentModule.title} Module`}
          description={currentModule.desc}
        />
        <section className="py-20 bg-sidqly-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/modules" className="text-sidqly-green-emerald font-bold mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              ← Back to Modules
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
              <div>
                <div className="w-16 h-16 bg-white text-sidqly-green-emerald rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  {currentModule.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">{currentModule.title}</h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  {currentModule.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                    Book Demo
                  </a>
                  <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="bg-white text-sidqly-navy border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                    Fill Inquiry Form
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-sidqly-green-deep mb-6">{currentModule.unique.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {currentModule.unique.text}
                </p>
                <div className="space-y-4">
                  <h3 className="font-bold text-sidqly-navy text-sm uppercase tracking-wider">Module Highlights:</h3>
                  {currentModule.unique.focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-sidqly-green-emerald" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-sidqly-navy text-white p-8 rounded-3xl">
                <Layout className="text-sidqly-gold mb-4" />
                <h3 className="font-bold mb-2">Book a Demo</h3>
                <p className="text-sm text-gray-400 mb-6">See the {currentModule.title.toLowerCase()} module in action.</p>
                <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="text-sidqly-gold font-bold flex items-center gap-2 text-sm">
                  Book on Calendly <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <ClipboardCheck className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Inquiry Form</h3>
                <p className="text-sm text-gray-500 mb-6">Request this module for your organization.</p>
                <a href={brand.links.inquiryForm} target="_blank" rel="noopener noreferrer" className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
                  Fill the Form <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <MessageSquare className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Ask a Question</h3>
                <p className="text-sm text-gray-500 mb-6">Have a query about how this module works?</p>
                <a href={brand.links.emailInquiry} className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
                  Email the Team <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Modules"
        description="Explore the professional operating modules built for modern Islamic giving."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Modular Operating System</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sidqly is built from specialized modules that work together to simplify your organization's entire giving lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <Link key={i} to={`/modules/${mod.slug}`} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-emerald rounded-xl flex items-center justify-center mb-6 group-hover:bg-sidqly-green-soft/30 transition-colors">
                  {mod.icon}
                </div>
                <h3 className="text-lg font-bold text-sidqly-navy mb-2 group-hover:text-sidqly-green-emerald transition-colors">{mod.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{mod.desc}</p>
                <span className="text-sidqly-green-deep font-bold text-xs flex items-center gap-2">
                  View Module <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modules;
