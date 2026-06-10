import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Heart, Beef, ShoppingBag, Users, Building2, Landmark, ShieldCheck,
  Store, UserCircle, CheckCircle2, ArrowRight, MessageSquare, Calendar, ClipboardCheck
} from 'lucide-react';
import SEO from '../components/SEO';

const Solutions: React.FC = () => {
  const { slug } = useParams();

  const solutions = [
    {
      slug: "mosques",
      icon: <Landmark />,
      title: "Mosques",
      desc: "Manage donations, Zakat, and community support effortlessly.",
      unique: {
        title: "Built for Sacred Spaces",
        focus: ["Friday collections", "Ramadan campaigns", "Zakat/Sadaqah separation", "Donor receipts", "Community support tracking"],
        text: "Sidqly helps mosques move beyond manual cash boxes to a professional system that builds community trust through transparent reporting."
      }
    },
    {
      slug: "islamic-charities",
      icon: <Heart />,
      title: "Islamic Charities",
      desc: "Scale your impact with verified workflows and clear proof.",
      unique: {
        title: "High-Impact Charity Operations",
        focus: ["Charity request intake", "Requester screening", "Dignity-safe data management", "Proof approval workflows", "Donor-safe reporting"],
        text: "Streamline how your charity handles intake and distribution while keeping beneficiary data private and secure."
      }
    },
    {
      slug: "qurbani-providers",
      icon: <Beef />,
      title: "Qurbani Providers",
      desc: "Professional animal tracking, slaughtering proof, and delivery.",
      unique: {
        title: "Precision Qurbani Management",
        focus: ["Animal/share tracking", "Slaughter lifecycle logs", "Distribution proof collection", "Automated certificates", "Vendor coordination"],
        text: "Manage thousands of shares with confidence, ensuring every donor receives verified proof of their sacrifice."
      }
    },
    {
      slug: "ramadan-food-drives",
      icon: <ShoppingBag />,
      title: "Ramadan Food Drives",
      desc: "Manage rations, Iftar distribution, and vendor fulfillment.",
      unique: {
        title: "Scalable Ramadan Workflows",
        focus: ["Iftar & Suhoor meal batches", "Ration pack distribution", "Volunteer route management", "Real-time impact reports", "Donor updates"],
        text: "Coordinate complex distribution networks during the busiest month of the year with clear, real-time clarity."
      }
    },
    {
      slug: "zakat-teams",
      icon: <Users />,
      title: "Zakat Teams",
      desc: "Strict fund separation and recipient dignity management.",
      unique: {
        title: "Shariah-Aligned Zakat Workflows",
        focus: ["Zakat fund separation", "Eligibility review logs", "Human-controlled approvals", "Safe case reporting", "Dignity-first processes"],
        text: "Sidqly provides the tools for strict fund separation and eligibility tracking without automating religious rulings."
      }
    },
    {
      slug: "corporate-csr-zakat",
      icon: <Building2 />,
      title: "Corporate CSR",
      desc: "Board-ready reporting and transparent impact tracking.",
      unique: {
        title: "Audit-Ready Corporate Giving",
        focus: ["Corporate sponsorship tracking", "Employee giving portals", "Matching contribution logs", "Board-ready PDF reports", "Corporate-safe proof"],
        text: "Give your board the transparency they require with professional reports that prove every PKR of impact."
      }
    },
    {
      slug: "community-welfare",
      icon: <ShieldCheck />,
      title: "Community Welfare Teams",
      desc: "Organize donor bases and provide verified proof of local impact.",
      unique: {
        title: "Local Impact Coordination",
        focus: ["Local aid coordination", "Emergency support tracking", "Family support history", "Community donor updates", "Transparent welfare reports"],
        text: "Empower your community team to respond faster to emergencies while keeping donors updated on every success."
      }
    },
    {
      slug: "vendors",
      icon: <Store />,
      title: "Vendors & Partners",
      desc: "Coordinate with fulfillment partners and track deliveries.",
      unique: {
        title: "Professional Vendor Portal",
        focus: ["Assigned task lists", "Task acceptance tracking", "Real-time progress updates", "Proof of delivery upload", "Issue reporting"],
        text: "Give your vendors a simple interface to receive tasks and upload proof, eliminating manual follow-up calls."
      }
    },
    {
      slug: "volunteers",
      icon: <UserCircle />,
      title: "Volunteer Teams",
      desc: "Manage field teams and verify service hours.",
      unique: {
        title: "Volunteer Field Coordination",
        focus: ["Shift management", "Assigned field work", "Attendance tracking", "Proof of work collection", "Service hour reporting"],
        text: "Empower your volunteers with clear tasks and a simple way to report impact directly from the field."
      }
    }
  ];

  const currentSolution = slug ? solutions.find(s => s.slug === slug) : null;

  if (currentSolution) {
    return (
      <>
        <SEO
          title={`${currentSolution.title} Solution`}
          description={currentSolution.desc}
        />
        <section className="py-20 bg-sidqly-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/solutions" className="text-sidqly-green-emerald font-bold mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              ← Back to Solutions
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
              <div>
                <div className="w-16 h-16 bg-white text-sidqly-green-emerald rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  {currentSolution.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">{currentSolution.title}</h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  {currentSolution.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/book-demo" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                    Book Demo
                  </Link>
                  <Link to="/inquiry-form" className="bg-white text-sidqly-navy border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                    Fill Inquiry Form
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-sidqly-green-deep mb-6">{currentSolution.unique.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {currentSolution.unique.text}
                </p>
                <div className="space-y-4">
                  <h3 className="font-bold text-sidqly-navy text-sm uppercase tracking-wider">Unique Focus Areas:</h3>
                  {currentSolution.unique.focus.map((item, i) => (
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
                <Calendar className="text-sidqly-gold mb-4" />
                <h3 className="font-bold mb-2">Book a Demo</h3>
                <p className="text-sm text-gray-400 mb-6">See how Sidqly fits your {currentSolution.title.toLowerCase()} workflow.</p>
                <a href="https://calendly.com/d/dvzs-3zf-cgz" className="text-sidqly-gold font-bold flex items-center gap-2 text-sm">
                  Book on Calendly <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <ClipboardCheck className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Inquiry Form</h3>
                <p className="text-sm text-gray-500 mb-6">Tell us about your organization before we talk.</p>
                <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
                  Fill the Form <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <MessageSquare className="text-sidqly-green-emerald mb-4" />
                <h3 className="font-bold mb-2">Ask a Question</h3>
                <p className="text-sm text-gray-500 mb-6">Have a specific question about {currentSolution.title.toLowerCase()}?</p>
                <a href="mailto:team@sidqly.com" className="text-sidqly-green-emerald font-bold flex items-center gap-2 text-sm">
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
        title="Solutions"
        description="Customized giving solutions for mosques, charities, Zakat committees, and corporate teams."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Solutions for Every Organization</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every organization handles giving differently. Sidqly adapts to your specific needs with modular solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <Link key={i} to={`/solutions/${sol.slug}`} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-soft hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-sidqly-ivory text-sidqly-green-emerald rounded-xl flex items-center justify-center mb-6 group-hover:bg-sidqly-green-soft/30 transition-colors">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3 group-hover:text-sidqly-green-emerald transition-colors">{sol.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{sol.desc}</p>
                <span className="text-sidqly-green-deep font-bold text-sm flex items-center gap-2">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
