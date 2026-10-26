import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3, ShieldCheck, Heart, Beef, ShoppingBag,
  MessageSquare, Layout, CheckCircle2, Store, ClipboardCheck, QrCode, FileText,
  Shield, Zap, Check, Users, Building2, BookOpen, Clock, Languages, Scale,
  HeartHandshake, Coins, ArrowRight, Layers, Award, Lock, HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import { generateCollectionSchema, generateItemListSchema, generateBreadcrumbSchema, generateFAQSchema } from '../lib/schema';
import { modules } from '../data/solutions_modules';

const modulesFaqs = [
  {
    question: "How many modules are in the Sidqly platform?",
    answer: "Sidqly currently features 25 core operational modules organized across 12 functional suites, powering 130 localized module instances in 5 languages (English, Arabic, Urdu, French, and Turkish). Every module operates modularly, meaning your organization can activate only what you need."
  },
  {
    question: "Who does Sidqly help?",
    answer: "Sidqly is engineered for five primary audiences: 1) Mosque Trustees & Masajid Leadership, 2) Registered Islamic Charities & Global NGOs, 3) Zakat Committees & Shariah Scholars, 4) Seasonal Campaign Teams (Qurbani & Ramadan), and 5) Corporate CSR Sponsors and Muslim-owned businesses."
  },
  {
    question: "Does Sidqly comply with international Islamic accounting standards?",
    answer: "Yes. Sidqly’s Zakat fund separation and treasury ledger are architected to align with AAOIFI Standard No. 35 (Accounting for Zakat) and Shariah Governance standards, enforcing mathematical partition walls between restricted Zakat and general Sadaqah accounts."
  },
  {
    question: "Does Sidqly require any IoT hardware or physical devices?",
    answer: "No. Sidqly is a 100% cloud-based digital SaaS platform. All modules—from QR dignity merchant vouchers to live AI khutbah translation and Atiyat cash tallying—run seamlessly on standard desktop and mobile web browsers with zero on-premise hardware."
  },
  {
    question: "Can we start with a single module before adopting the full suite?",
    answer: "Yes! Many organizations start with a targeted pilot—such as Manual Payment Review for bank transfers or Atiyat Box Management for Friday cash—and expand to Qurbani or Zakat ledgers as their operational needs grow."
  }
];

const categories = [
  { id: "all", name: "All 25 Modules", desc: "Explore the complete suite of 25 verified Islamic giving, treasury, and mosque management modules." },
  { id: "donations-funds", name: "Donations & Funds", desc: "Human-verified bank transfers, deposit screenshots, and Atiyat donation box cash reconciliation." },
  { id: "governance-audit", name: "Governance & Treasury", desc: "4-Eyes AAOIFI treasury approval, partitioned Zakat ledgers, and tamper-evident audit trails." },
  { id: "programs-fulfillment", name: "Programs & Fulfillment", desc: "Qurbani animal share allocation, Ramadan ration delivery batches, and partner vendor portals." },
  { id: "dignity-relief", name: "Dignity & Direct Relief", desc: "Confidential beneficiary intake, merchant web QR vouchers, and automated face-blurring." },
  { id: "community-empowerment", name: "Community & Welfare", desc: "Mosque Khidmah cashless skill barter (1 hr = 1 credit) and volunteer dispatch networks." },
  { id: "worship-inclusion", name: "Worship & Khutbah AI", desc: "Real-time AI multilingual sermon translation on musallis' mobile browsers in 6 languages." },
  { id: "education-maktaba", name: "Education & Maktaba", desc: "Digital Islamic library cataloging, QR book lending, and quiet study carrel desk bookings." },
  { id: "proof-privacy-trust", name: "Proof, Privacy & Trust", desc: "Cryptographic proof engine, EXIF sanitization, and verified donor-safe impact links." },
  { id: "donor-communication", name: "Donor Communication", desc: "Personalized donor milestone updates, branded PDF tax certificates, and gift confirmations." },
  { id: "reporting-management", name: "Reporting & Board Packs", desc: "One-click board-ready PDF packs, trustee financial summaries, and auditor compliance exports." },
  { id: "corporate-partnerships", name: "Corporate & CSR", desc: "1:1 and 2:1 corporate donation matching, B2B tax portals, and employee giving campaigns." },
  { id: "launch-support", name: "Launch & Support", desc: "Assisted spreadsheet data migration, pilot onboarding, and staff training." }
];

const audienceSegments = [
  {
    id: "mosques",
    title: "Mosque Trustees & Masajid Leadership",
    badge: "Sanctuary Governance",
    icon: <Building2 className="text-sidqly-green-deep" size={24} />,
    painPoint: "Untracked Friday cash donations, missing paper receipts, sermon language barriers for youth/converts, and unorganized community services.",
    solution: "A complete sanctuary operating system: secure Atiyat cash box double-signoff, live AI Khutbah reader in 6 languages, Maktaba study desk bookings, and cashless TimeBank skill exchange.",
    keyModules: ["atiyat-box-management", "manual-payment-review", "ai-khutbah-reader", "maktaba-library-desk", "khidmah-timebank"]
  },
  {
    id: "charities",
    title: "Registered Islamic Charities & NGOs",
    badge: "NGO Operations",
    icon: <Award className="text-sidqly-green-deep" size={24} />,
    painPoint: "Scattered WhatsApp chats with field vendors, unverified delivery photos exposing beneficiary faces, and manual board reporting taking weeks.",
    solution: "End-to-end operational transparency: automated face-blurring for recipient dignity, centralized vendor fulfillment portals, and one-click board-ready PDF audit packs.",
    keyModules: ["proof-trust-engine", "vendor-fulfillment", "volunteer-coordination", "reports-board-packs", "privacy-dignity-controls"]
  },
  {
    id: "zakat-teams",
    title: "Zakat Committees & Shariah Scholars",
    badge: "AAOIFI Compliance",
    icon: <Scale className="text-sidqly-green-deep" size={24} />,
    painPoint: "Accidental co-mingling of Zakat funds with operational overhead, unverified hardship applications, and lack of dual-signature authorization.",
    solution: "Institutional AAOIFI Standard No. 35 adherence: mathematical partition walls between Zakat and Sadaqah, 4-Eyes dual approval for every disbursement, and confidential applicant screening.",
    keyModules: ["aaoifi-treasury-ledger", "zakat-fund-separation", "charity-request-intake", "audit-ready-records"]
  },
  {
    id: "seasonal",
    title: "Seasonal Campaigns (Qurbani & Ramadan)",
    badge: "Peak Volume Logistics",
    icon: <Beef className="text-sidqly-green-deep" size={24} />,
    painPoint: "Matching hundreds of donor shares to live animals in 72 hours, chaotic food drive routes, and duplicate family ration distributions.",
    solution: "Automated share allocation (1/7 cow / sheep), field abattoir status logging, digital QR grocery vouchers at local halal merchants, and instant donor certificates.",
    keyModules: ["qurbani-lifecycle", "ramadan-meals-rations", "dignity-qr-vouchers", "receipts-certificates"]
  },
  {
    id: "corporate",
    title: "Corporate CSR Sponsors & Donors",
    badge: "B2B Transparency",
    icon: <Coins className="text-sidqly-green-deep" size={24} />,
    painPoint: "Corporate donors demanding formal tax documentation, verifiable impact data, and matching-gift governance before releasing CSR budgets.",
    solution: "Automated employee gift matching (1:1 or 2:1), branded corporate tax receipts, and verified donor-safe impact links stripped of sensitive personal data.",
    keyModules: ["corporate-csr-matching", "corporate-csr-zakat", "donor-safe-updates"]
  }
];

const getModuleIcon = (slug: string) => {
  const icons: Record<string, React.ReactNode> = {
    "atiyat-box-management": <Lock />,
    "manual-payment-review": <Layout />,
    "proof-trust-engine": <CheckCircle2 />,
    "donor-safe-updates": <MessageSquare />,
    "zakat-fund-separation": <ShieldCheck />,
    "sadaqah-campaigns": <Heart />,
    "qurbani-lifecycle": <Beef />,
    "ramadan-meals-rations": <ShoppingBag />,
    "charity-request-intake": <ClipboardCheck />,
    "vendor-fulfillment": <Store />,
    "volunteer-coordination": <Users />,
    "corporate-csr-zakat": <FileText />,
    "receipts-certificates": <FileText />,
    "qr-code-verification": <QrCode />,
    "reports-board-packs": <BarChart3 />,
    "privacy-dignity-controls": <Shield />,
    "audit-ready-records": <CheckCircle2 />,
    "donor-communication": <MessageSquare />,
    "khidmah-timebank": <Clock />,
    "ai-khutbah-reader": <Languages />,
    "aaoifi-treasury-ledger": <Scale />,
    "dignity-qr-vouchers": <HeartHandshake />,
    "corporate-csr-matching": <Building2 />,
    "maktaba-library-desk": <BookOpen />,
    "pilot-launch-support": <Zap />,
  };
  return icons[slug] || <Layers />;
};

const Modules: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeAudience, setActiveAudience] = useState("mosques");

  const filteredModules = useMemo(() => {
    if (selectedCategory === "all") return modules;
    return modules.filter(mod => mod.category === selectedCategory);
  }, [selectedCategory]);

  const activeCategoryInfo = useMemo(() => {
    return categories.find(c => c.id === selectedCategory) || categories[0];
  }, [selectedCategory]);

  const activeAudienceData = useMemo(() => {
    return audienceSegments.find(a => a.id === activeAudience) || audienceSegments[0];
  }, [activeAudience]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateCollectionSchema(
        "Sidqly Modules Architecture: 25 Operational Cloud Modules for Islamic Giving & Mosques",
        "Explore Sidqly's complete suite of 25 specialized modules across 12 operational domains. Built for mosques, Zakat foundations, and humanitarian NGOs.",
        "/modules"
      ),
      generateItemListSchema(modules.map(mod => ({ name: mod.title, url: `/modules/${mod.slug}` }))),
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Modules", item: "/modules" }
      ]),
      generateFAQSchema(modulesFaqs)
    ]
  };

  return (
    <>
      <SEO
        title="25 Sidqly Modules | Amanah Operating System for Mosques & Charities"
        description="Explore 25 dedicated digital SaaS modules across 12 suites: AAOIFI Zakat separation, Atiyat cash box review, AI Khutbah translation, Qurbani tracking, and dignity QR vouchers."
        canonical="/modules"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 via-white to-sidqly-ivory border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-extrabold text-emerald-800 uppercase bg-emerald-100/70 rounded-full border border-emerald-200 tracking-wider">
              25 Core Modules • 12 Operational Suites • 130 Global Deployments
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-sidqly-navy mb-6 tracking-tight leading-tight">
              The Complete Amanah OS: 25 Modules for Islamic Giving & Governance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Replace fragmented spreadsheets, chat groups, and generic CRMs with specialized, 100% digital cloud modules built strictly for mosques, Zakat committees, and humanitarian NGOs.
            </p>
          </div>

          {/* Key Architectural Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-sidqly-green-deep mb-1">25</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Specialized Modules</div>
              <p className="text-[11px] text-gray-400 mt-1">Modular cloud architecture</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-sidqly-green-deep mb-1">12</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Functional Suites</div>
              <p className="text-[11px] text-gray-400 mt-1">From Treasury to Maktaba</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-sidqly-green-deep mb-1">AAOIFI</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Standard 35 Aligned</div>
              <p className="text-[11px] text-gray-400 mt-1">Mathematical Zakat partition</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-sidqly-green-deep mb-1">0%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Hardware / IoT Lock-in</div>
              <p className="text-[11px] text-gray-400 mt-1">100% Cloud Web & Mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section: Who Does Sidqly Help? */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sidqly-green-deep">Tailored Workflows</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mt-2 mb-4">
              Who Sidqly Helps (Role-Based Operating Profiles)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every role in an Islamic organization has distinct compliance and operational challenges. Select your organization type to see the exact modules designed for your team.
            </p>
          </div>

          {/* Interactive Role Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {audienceSegments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setActiveAudience(segment.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                  activeAudience === segment.id
                    ? 'bg-sidqly-navy text-white shadow-lg shadow-sidqly-navy/15 scale-105'
                    : 'bg-sidqly-ivory text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span>{segment.title}</span>
              </button>
            ))}
          </div>

          {/* Active Audience Card */}
          <div className="bg-gradient-to-br from-sidqly-ivory via-white to-emerald-50/40 rounded-3xl border border-emerald-100 p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200/60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  {activeAudienceData.icon}
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
                    {activeAudienceData.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-sidqly-navy mt-2">{activeAudienceData.title}</h3>
                </div>
              </div>
              <Link
                to={activeAudienceData.id === 'mosques' ? '/use-cases/mosques' : activeAudienceData.id === 'zakat-teams' ? '/use-cases/zakat-committees' : activeAudienceData.id === 'seasonal' ? '/use-cases/qurbani-organizers' : activeAudienceData.id === 'corporate' ? '/use-cases/corporate-sponsors' : '/use-cases/islamic-charities'}
                className="inline-flex items-center gap-2 text-xs font-bold text-sidqly-green-deep bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-xs hover:border-emerald-300 transition-all"
              >
                View Full Use Case Guide <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-2">The Operational Challenge</span>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{activeAudienceData.painPoint}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-2">The Sidqly Solution</span>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{activeAudienceData.solution}</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-4">Recommended Core Modules for This Role:</span>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeAudienceData.keyModules.map((slug) => {
                  const modObj = modules.find(m => m.slug === slug);
                  if (!modObj) return null;
                  return (
                    <Link
                      key={slug}
                      to={`/modules/${slug}`}
                      className="p-3 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 text-xs">
                        {getModuleIcon(slug)}
                      </div>
                      <span className="text-xs font-bold text-sidqly-navy group-hover:text-emerald-700 transition-colors truncate">
                        {modObj.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep E-E-A-T Institutional Trust Framework */}
      <section className="py-20 bg-sidqly-ivory border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
              Institutional E-E-A-T Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mt-3 mb-4">
              Engineered on Experience, Authority & Sacred Amanah
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Islamic charity management requires far more than generic fundraising forms. Every Sidqly module is anchored in formal Shariah accounting benchmarks, fiduciary safety, and recipient dignity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center mb-5 font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-sidqly-navy mb-2">Proven Experience</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Architected from over a decade of hands-on mosque administration, high-pressure Ramadan drives, and multi-animal Eid Qurbani campaigns across 10+ countries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center mb-5 font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-sidqly-navy mb-2">Scholarly Expertise</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Directly aligns with AAOIFI Standard No. 35 (Accounting for Zakat), Charity Commission restricted fund guidelines, and IRS/CRA donation audit regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center mb-5 font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-sidqly-navy mb-2">Authoritative Fiduciary</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enforces the four-eyes maker-checker principle: two distinct trustee approvals are mandatory for cash box openings and Zakat disbursements, eliminating single-point vulnerabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center mb-5 font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-sidqly-navy mb-2">Sacred Trust & Dignity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Automated biometric face-blurring, EXIF stripping, and non-stigmatizing QR merchant vouchers protect the honor (<em>Izzah</em>) of vulnerable families receiving aid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Module Catalog with 12 Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sidqly-navy mb-3">
              Browse All 25 Operational Modules
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Filter by operational category or explore our complete catalog. Click any module for full workflows, who it helps, and audit specifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
              {/* Mobile Scroller */}
              <div className="block lg:hidden">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Functional Suite</label>
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-sidqly-navy text-white shadow-md'
                          : 'bg-sidqly-ivory text-gray-700 border border-gray-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden lg:block bg-sidqly-ivory rounded-3xl border border-gray-200/70 p-5 shadow-xs">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-3">Functional Suites</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-emerald-800 text-white shadow-sm'
                          : 'text-gray-600 hover:bg-white hover:text-sidqly-navy'
                      }`}
                    >
                      <span>{cat.name}</span>
                      {selectedCategory === cat.id && <Check size={14} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Category Meta */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs hidden lg:block">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">Active Filter</span>
                <h4 className="font-bold text-sidqly-navy text-sm mb-1">{activeCategoryInfo.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{activeCategoryInfo.desc}</p>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-500">
                  Showing <span className="text-sidqly-navy font-extrabold">{filteredModules.length}</span> of {modules.length} Modules
                </p>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {filteredModules.map((mod) => {
                  const catObj = categories.find(c => c.id === mod.category);
                  return (
                    <Link
                      key={mod.slug}
                      to={`/modules/${mod.slug}`}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4 gap-2">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                            {getModuleIcon(mod.slug)}
                          </div>
                          {catObj && (
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-sidqly-ivory text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                              {catObj.name.replace(/\d+\s+Modules/, '')}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-sidqly-navy group-hover:text-emerald-700 transition-colors mb-2">
                          {mod.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {mod.benefit}
                        </p>

                        <div className="bg-sidqly-ivory p-3 rounded-xl mb-4 text-xs">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">Problem Solved</span>
                          <p className="text-gray-700 text-[11px] font-medium line-clamp-2">{mod.problem}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                        <span className="text-gray-400 text-[10px] font-semibold truncate max-w-[65%]">
                          {mod.who}
                        </span>
                        <span className="font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                          Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Sidqly Modules vs Alternatives */}
      <section className="py-20 bg-sidqly-ivory border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-sidqly-navy mb-4">
              How Sidqly Modules Compare to Alternatives
            </h2>
            <p className="text-gray-600 text-sm">
              See why hundreds of mosque trustees and charity directors transitioned away from spreadsheets and generic software.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-sidqly-navy text-white">
                  <tr>
                    <th className="p-4">Capability / Standard</th>
                    <th className="p-4">Manual Spreadsheets</th>
                    <th className="p-4">Generic Non-Profit CRMs</th>
                    <th className="p-4 bg-emerald-800 text-white">Sidqly Amanah Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="p-4 font-bold text-sidqly-navy">AAOIFI Zakat Partitioning</td>
                    <td className="p-4 text-red-600">Manual formulas, frequent mixing</td>
                    <td className="p-4 text-red-600">No Zakat logic (treated as raw revenue)</td>
                    <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Mathematical partition ledgers</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-4 font-bold text-sidqly-navy">Atiyat Cash Box Four-Eyes Protocol</td>
                    <td className="p-4 text-red-600">Scrap paper, single person custody</td>
                    <td className="p-4 text-red-600">Not supported (online cards only)</td>
                    <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Dual PIN authorization & tamper seals</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sidqly-navy">Recipient Face Blurring & Privacy</td>
                    <td className="p-4 text-red-600">None (raw photos shared in chat)</td>
                    <td className="p-4 text-red-600">Requires expensive third-party tools</td>
                    <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Automated AI face-blurring & EXIF scrub</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-4 font-bold text-sidqly-navy">Live Multilingual Khutbah Reader</td>
                    <td className="p-4 text-red-600">Not supported</td>
                    <td className="p-4 text-red-600">Not supported</td>
                    <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Real-time mobile browser translation in 6 languages</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sidqly-navy">Hardware / IoT Lock-in</td>
                    <td className="p-4 text-emerald-700">None</td>
                    <td className="p-4 text-yellow-600">Card readers required</td>
                    <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">100% Digital SaaS (Zero hardware needed)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="text-sidqly-green-emerald" size={24} />
              <h2 className="text-3xl font-extrabold text-sidqly-navy">Frequently Asked Questions</h2>
            </div>
            <p className="text-gray-500 text-sm">Everything you need to know about Sidqly’s modular operating architecture.</p>
          </div>

          <div className="divide-y divide-gray-100 bg-sidqly-ivory p-8 rounded-3xl border border-gray-200">
            {modulesFaqs.map((faq, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-bold text-sidqly-navy text-base mb-2">{faq.question}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modules;
