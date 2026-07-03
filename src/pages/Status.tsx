import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle, Clock, ShieldCheck } from 'lucide-react';

const Status: React.FC = () => {
  return (
    <>
      <SEO title="Platform Status" description="Public status page for Sidqly services and support expectations." canonical="/status" noindex={true} />
      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Platform Status</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real-time status updates and support expectations for the Sidqly platform.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <div className="flex items-center gap-6 mb-12 p-6 bg-sidqly-green-soft/20 rounded-3xl border border-sidqly-green-soft/50">
                <div className="w-12 h-12 bg-sidqly-green-emerald rounded-full flex items-center justify-center text-white">
                   <CheckCircle size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-sidqly-green-deep">All Systems Operational</h3>
                    <p className="text-sm text-sidqly-green-emerald font-medium">Last updated: June 12, 2026</p>
                </div>
             </div>

             <div className="space-y-8">
                <div>
                   <h4 className="font-bold text-sidqly-navy mb-4 flex items-center gap-2">
                      <Clock size={20} className="text-sidqly-green-emerald" /> Support Expectations
                   </h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      Our team typically reviews all payment confirmations and inquiry forms within 24 hours. Technical support for active organizations is prioritized based on the selected plan level.
                   </p>
                </div>
                <div>
                   <h4 className="font-bold text-sidqly-navy mb-4 flex items-center gap-2">
                      <ShieldCheck size={20} className="text-sidqly-green-emerald" /> Security Updates
                   </h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      Maintenance and security patches are typically deployed during low-usage windows to minimize operational impact for our global partners.
                   </p>
                </div>
             </div>
          </div>

          <div className="text-center">
             <p className="text-gray-400 text-sm italic">
                Need immediate help? Please email <a href={`mailto:${brand.email}`} className="text-sidqly-green-emerald font-bold hover:underline">{brand.email}</a>
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Status;
