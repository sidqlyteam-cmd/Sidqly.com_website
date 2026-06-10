import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileCheck, Users, BarChart, Settings } from 'lucide-react';
import SEO from '../components/SEO';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="text-sidqly-green-emerald" />,
      title: "Manual Payment Review",
      description: "Every transaction is verified by your team before it's approved. No automated errors, full human oversight for trust."
    },
    {
      icon: <FileCheck className="text-sidqly-green-emerald" />,
      title: "Proof Approval Workflow",
      description: "Collect proof of impact from the field and review it centrally before sharing it with your donors."
    },
    {
      icon: <Lock className="text-sidqly-green-emerald" />,
      title: "Dignity-Safe Records",
      description: "Manage beneficiary details securely. Protect the dignity of those those you serve with strict privacy controls."
    },
    {
      icon: <Users className="text-sidqly-green-emerald" />,
      title: "Role-Based Access",
      description: "Give your team, vendors, and volunteers the exact access they need to do their jobs without exposing sensitive data."
    },
    {
      icon: <BarChart className="text-sidqly-green-emerald" />,
      title: "Audit-Ready Reporting",
      description: "Generate professional reports for your board and donors with one click. Clear tracking of every PKR."
    },
    {
      icon: <Settings className="text-sidqly-green-emerald" />,
      title: "Customizable Workflows",
      description: "Whether it's Zakat, Qurbani, or Ramadan drives, adapt Sidqly to match your organization's specific process."
    }
  ];

  return (
    <>
      <SEO
        title="Features"
        description="Explore the premium features of Sidqly. Manual review, proof approval, and dignity-safe charity management."
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">Built for Excellence in Giving</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sidqly isn't just a tool; it's a professional operating platform that ensures every step of your charity workflow is verified and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-sidqly-green-soft/30 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-sidqly-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-sidqly-green-deep rounded-3xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Need a custom feature?</h2>
            <p className="text-sidqly-green-soft mb-10 max-w-2xl mx-auto text-lg">
              Our enterprise plan includes custom module development to solve your organization's unique operational challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-demo" className="bg-sidqly-green-emerald text-white px-8 py-3 rounded-xl font-bold hover:bg-sidqly-green-soft hover:text-sidqly-green-deep transition-all">
                Book a Demo
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
