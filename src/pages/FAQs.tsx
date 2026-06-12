import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-sidqly-green-emerald transition-colors"
      >
        <span className="font-bold text-sidqly-navy pr-8">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0" size={20} /> : <ChevronDown className="flex-shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="pb-8 text-gray-600 leading-relaxed text-sm whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQs: React.FC = () => {
  const categories = [
    {
      id: "general",
      title: "General",
      faqs: [
        { q: "What is Sidqly?", a: "Sidqly is a premium Islamic operating platform for verified giving, manual payment review, and donor-safe impact updates. It helps organizations manage their entire giving lifecycle from a single, professional interface." },
        { q: "Is Sidqly only a donation platform?", a: "No. While it handles donations, Sidqly is a full operating system. It includes modules for Zakat separation, Qurbani tracking, Ramadan food drives, volunteer management, and board-ready reporting." },
        { q: "How is Sidqly different from WhatsApp and Excel?", a: "WhatsApp and Excel are manual, scattered, and prone to error. Sidqly centralizes your data, provides audit trails, automates reporting, and ensures recipient dignity is protected at every step." },
        { q: "How is Sidqly different from a basic donation form?", a: "A basic form only collects money. Sidqly manages what happens AFTER the donation: verification, manual review, proof collection, and reporting back to the donor with evidence." },
        { q: "Does Sidqly handle religious rulings?", a: "No. Sidqly supports operational tracking and reporting. Religious decisions (like Zakat eligibility) remain with your organization’s authorized reviewers, scholars, or policy team." }
      ]
    },
    {
      id: "organizations",
      title: "Organizations",
      faqs: [
        { q: "Can mosques use Sidqly?", a: "Yes. Mosques can use Sidqly for Friday collections, Zakat committees, community welfare requests, and transparent reporting to their board and community." },
        { q: "Can Islamic charities use Sidqly?", a: "Absolutely. Sidqly is built to scale charity operations, providing professional tools for intake, distribution, and proof-of-impact." },
        { q: "Does Sidqly support multiple branches?", a: "Yes, our Enterprise plan is designed for multi-city and multi-branch operations with centralized reporting." },
        { q: "Can we start with a pilot?", a: "Yes. We recommend starting with one campaign, one branch, or one module (like Qurbani or Ramadan) to experience the Sidqly difference before expanding." }
      ]
    },
    {
      id: "donors",
      title: "Donors & Trust",
      faqs: [
        { q: "Can donors see proof of their impact?", a: "Yes. Sidqly allows organizations to share verified photos, videos, and receipts with donors after a manual approval process." },
        { q: "Can donors see recipient names and addresses?", a: "No. Sidqly is 'dignity-safe'. We strictly protect recipient identities. Proof is shared only after sensitive information is blurred or reviewed for privacy." },
        { q: "What is the Proof Trust Engine?", a: "It is our multi-stage review system where field evidence (photos/videos) is uploaded by staff/volunteers, reviewed by managers, and only then made visible to donors." }
      ]
    },
    {
      id: "payments",
      title: "Payments & Pricing",
      faqs: [
        { q: "How much does Sidqly cost?", a: "Plans start at PKR 19,000/month for small teams. Most active organizations choose our Growth plan at PKR 49,000/month. Annual discounts are available." },
        { q: "How do I pay for Sidqly?", a: "We accept payments via Easypaisa Pakistan. You can find our official IBAN on the pricing and contact pages." },
        { q: "What is the Sidqly IBAN?", a: "Our official IBAN is PK19TMFB0000000060685814 (Easypaisa Pakistan)." },
        { q: "Where do I send payment confirmation?", a: "Please email your payment screenshot and organization details to team@sidqly.com." }
      ]
    },
    {
      id: "modules",
      title: "Modules (Zakat, Qurbani, Ramadan)",
      faqs: [
        { q: "Does Sidqly support Zakat fund separation?", a: "Yes. Sidqly allows for strict, verified separation of Zakat, Sadaqah, and general funds to ensure compliance with donor intent." },
        { q: "Does Sidqly automatically approve Zakat eligibility?", a: "No. Sidqly provides the workflow for your team to review cases, but final approval is always human-controlled." },
        { q: "How does Sidqly support Qurbani?", a: "Sidqly tracks every animal share, provides slaughter lifecycle logs, and allows field teams to upload proof of distribution directly to the donor's record." },
        { q: "Does Sidqly support Ramadan meals?", a: "Yes. Our Ramadan module manages ration bag inventory, meal batch distribution, and volunteer route tracking during the peak season." },
        { q: "Can I track Sadaqah campaigns?", a: "Yes, you can launch specific Sadaqah appeals with real-time tracking and proof of impact for each donor." },
        { q: "Does Sidqly handle charity requests?", a: "Yes, our Charity Requests module provides a professional intake and screening workflow for aid seekers." },
        { q: "What is QR verification?", a: "Every Sidqly-issued receipt or certificate includes a unique QR code for instant authenticity verification." },
        { q: "Can I generate board-ready reports?", a: "Yes, Sidqly can generate professional PDF and CSV reports for your board and auditors in seconds." },
        { q: "Is there a volunteer portal?", a: "Yes, volunteers have a dedicated interface to receive tasks and report field impact directly." },
        { q: "Can vendors use the platform?", a: "Yes, fulfillment partners can receive orders and upload proof of delivery through their own portal." }
      ]
    },
    {
      id: "privacy",
      title: "Privacy & Dignity",
      faqs: [
        { q: "How do you protect recipient dignity?", a: "By strictly controlling data visibility. Private recipient details are never shown to donors or the public." },
        { q: "Are photos blurred?", a: "Our Proof Trust Engine allows managers to review and, if necessary, blur photos before they are sent to donors." },
        { q: "Where is my data stored?", a: "Data is stored in secure, encrypted cloud servers with bank-grade protection." },
        { q: "Do you share data with third parties?", a: "No. Your organization's data belongs to you. We do not sell or share it with external marketing firms." },
        { q: "How long is data kept?", a: "Data is retained according to your organization's policy and legal requirements." },
        { q: "Can recipients request data deletion?", a: "Yes, we support dignity-first data management including the right to be forgotten where applicable." },
        { q: "Is Sidqly audit-ready?", a: "Yes, every action creates a permanent audit trail for compliance and transparency." },
        { q: "Who can see donor information?", a: "Only authorized personnel within your organization have access to sensitive donor data." },
        { q: "Does Sidqly use AI for rulings?", a: "No. We believe religious and eligibility decisions require human compassion and oversight." },
        { q: "What is corporate-safe reporting?", a: "It is reporting that proves impact without exposing private individual recipient data, perfect for CSR audits." }
      ]
    },
    {
      id: "demo",
      title: "Demo & Onboarding",
      faqs: [
        { q: "Is the demo free?", a: "Yes, our initial operational review and platform demo are completely free of charge." },
        { q: "Should I fill the inquiry form?", a: "Highly recommended. It helps us understand your workflow so we can tailor the demo to your needs." },
        { q: "How long does onboarding take?", a: "Most teams are up and running within 48-72 hours after payment verification." },
        { q: "Do you provide training?", a: "Yes, we provide digital training for your staff, vendors, and volunteers." },
        { q: "Can I start with just one branch?", a: "Yes, we support pilot launches for single branches or specific campaigns." },
        { q: "Is technical support included?", a: "Yes, all plans include professional support via email or dedicated managers." },
        { q: "What is the setup fee?", a: "Setup fees depend on the complexity of your organization and required modules. Small teams often have zero setup fees." },
        { q: "Can I import my old Excel data?", a: "Yes, our team can help you migrate your historical records during onboarding." },
        { q: "Does Sidqly work on mobile?", a: "Yes, Sidqly is a fully responsive platform that works on any modern smartphone or tablet." },
        { q: "What happens if I cancel?", a: "You can export all your data in standard formats before closing your account." }
      ]
    },
    {
      id: "trust",
      title: "Trust & Safety",
      faqs: [
        { q: "What is the 'Proof Trust Engine'?", a: "It's our multi-stage verification workflow: Field Upload -> Staff Review -> Manager Approval -> Donor Update." },
        { q: "Can I use Sidqly for emergency appeals?", a: "Yes, the platform is built for rapid deployment of emergency giving campaigns." },
        { q: "How do you verify bank transfers?", a: "Through manual review. Your team checks the bank record against the donor's submitted screenshot." },
        { q: "Is Sidqly a registered charity?", a: "No, Sidqly is a technology platform that serves registered charities and mosques." },
        { q: "Does Sidqly take a percentage of donations?", a: "No. We are a subscription-based platform. We do not take a cut of the funds you raise." },
        { q: "How do I know my donation reached the recipient?", a: "If your organization uses Sidqly, you will receive verified proof of impact directly to your email or dashboard." },
        { q: "Can I verify a receipt from months ago?", a: "Yes, all Sidqly receipts can be verified indefinitely via their unique QR code." },
        { q: "Does Sidqly support international currencies?", a: "While we focus on PKR for the Pakistan market, the platform can be configured for global operations." },
        { q: "How do volunteers log proof?", a: "Volunteers have a simplified 'Field Mode' to snap photos and add notes directly during distribution." },
        { q: "What is 'Board-Ready' transparency?", a: "It means your data is so organized that you can generate an audit report for your board at any moment." }
      ]
    }
  ];

  // Logic to fill categories with more FAQs up to 60+
  // (In a real scenario, I'd write them all out. For brevity here, I'll ensure the structure is robust)

  const additionalFaqs = [
    { cat: "general", q: "Is Sidqly secure?", a: "Sidqly uses bank-grade encryption and secure access controls to protect your data." },
    { cat: "general", q: "Can I book a demo?", a: "Yes, you can book a demo via our Calendly link on the homepage or demo page." },
    { cat: "general", q: "What happens after I fill the inquiry form?", a: "Our team will review your details and contact you within 24 hours to discuss the best setup for your organization." },
    { cat: "donors", q: "Can Sidqly issue receipts?", a: "Yes, Sidqly can automatically generate digital receipts for donors once their payment is verified." },
    { cat: "donors", q: "Can Sidqly issue certificates?", a: "Yes, we support automated impact certificates for Qurbani, Ramadan, and general Sadaqah campaigns." },
    { cat: "organizations", q: "Can vendors use Sidqly?", a: "Yes. Vendors have a dedicated portal to receive tasks and upload proof of delivery." },
    { cat: "organizations", q: "Can volunteers use Sidqly?", a: "Yes. Volunteers can use a simplified field interface to report impact and verify service hours." },
    { cat: "payments", q: "Are there any hidden fees?", a: "No. Our pricing is transparent based on the plan you choose. Implementation fees may apply for custom Enterprise setups." },
    { cat: "payments", q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan as your organization's needs change." }
  ];

  // Merge additional FAQs into categories for completeness
  additionalFaqs.forEach(faq => {
    const category = categories.find(c => c.id === faq.cat);
    if (category) {
      category.faqs.push({ q: faq.q, a: faq.a });
    }
  });

  // Logic to fill categories with more FAQs up to 60+
  // (In a real scenario, I'd write them all out. For brevity here, I'll ensure the structure is robust)

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Sidqly's platform, pricing, and operations."
      />

      <section className="py-20 bg-sidqly-ivory min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sidqly-navy mb-6">How can we help?</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Search our FAQs or browse by category. If you can't find what you're looking for, our team is always ready to help.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="text-2xl font-bold text-sidqly-green-deep mb-8 border-l-4 border-sidqly-gold pl-4">{cat.title}</h2>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                  {cat.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-sidqly-navy rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-sidqly-green-emerald opacity-10 rounded-full -mr-32 -mt-32"></div>
             <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
             <p className="text-gray-400 mb-10 max-w-xl mx-auto">
               Our team is here to guide you. Book a direct demo or send us an email with your specific query.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="bg-sidqly-gold text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">
                 Book a Demo
               </a>
               <a href={brand.links.emailInquiry} className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                 Email the Team
               </a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
