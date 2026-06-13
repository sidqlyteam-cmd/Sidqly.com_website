export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const stakeholderGroups = [
  {
    category: "Mosques",
    faqs: [
      { q: "Can Sidqly track Friday collections?", a: "Yes. Sidqly allows mosques to log both cash and digital collections, providing a unified view for the board." },
      { q: "How does Sidqly help with Zakat and Sadaqah separation?", a: "We provide strict fund separation at the point of entry so your Zakat and Sadaqah remain distinct throughout the operational lifecycle." },
      { q: "Can we issue receipts to donors?", a: "Yes, Sidqly automates the generation and delivery of professional receipts for every donation." },
      { q: "Can we manage mosque expenses too?", a: "Sidqly focuses on giving operations (donations, Zakat, Qurbani). While we track disbursement, we recommend dedicated accounting software for general mosque utilities." },
      { q: "Is the system easy for elderly board members?", a: "We prioritize clarity and simplicity. Our reporting dashboards are designed to be board-ready and easy to understand at a glance." },
      { q: "Does Sidqly integrate with our mosque website?", a: "Sidqly can be linked from any website to handle the collection and tracking process professionally." },
      { q: "How do we handle cash donations in the box?", a: "Team members can manually log box collections into Sidqly to maintain a complete digital audit trail." },
      { q: "Can we track specific construction projects?", a: "Yes, you can create separate funds for construction, education, or general maintenance." },
      { q: "Is there a limit on the number of donors we can track?", a: "No, Sidqly is built to handle thousands of donor records and transaction histories." },
      { q: "Can we send annual tax statements?", a: "Yes, Sidqly can generate summaries of a donor's total giving for any specific period." },
      { q: "How do we handle recurring monthly donations?", a: "While we don't automatically pull funds, you can track recurring commitments and mark them as paid each month." },
      { q: "Can we use Sidqly for funeral fund management?", a: "Yes, many mosques use Sidqly to manage funeral funds and bereavement support operations." }
    ]
  },
  {
    category: "Islamic Charities",
    faqs: [
      { q: "Can we manage charity requests and intake?", a: "Yes, Sidqly includes a dedicated intake module for tracking and screening aid requests from the community." },
      { q: "How is recipient dignity protected?", a: "Our Proof Trust Engine blurs faces and encrypts sensitive identifiers before impact proof is ever shared." },
      { q: "Can we track field verification?", a: "Yes, field teams can update case statuses and upload verification notes directly to the platform." },
      { q: "Is Sidqly audit-ready?", a: "Every status change, payment, and disbursement is logged with a full audit trail for complete transparency." },
      { q: "Can we manage international aid?", a: "Yes, Sidqly supports tracking distribution across multiple locations and teams." },
      { q: "How do we prevent duplicate aid requests?", a: "Sidqly flags similar requester details to help your team identify potential duplicate case files." },
      { q: "Can we assign specific cases to different team members?", a: "Yes, role-based assignments ensure that each case is handled by the right person." },
      { q: "Does Sidqly work in areas with poor internet?", a: "The platform is optimized for mobile performance, though a basic connection is required to sync data." },
      { q: "Can we customize the intake questions?", a: "Yes, you can define the specific data points your organization needs to collect during the screening process." },
      { q: "How do we share impact updates with donors?", a: "Sidqly generates secure, non-indexed links that you can send to donors via email or messaging apps." },
      { q: "Can we track the delivery of physical goods?", a: "Yes, our fulfillment tracking covers everything from cash disbursement to ration pack delivery." },
      { q: "Is there a limit on the number of volunteers we can manage?", a: "No, you can coordinate as many volunteers as your organization requires." }
    ]
  },
  {
    category: "Qurbani Providers",
    faqs: [
      { q: "Can we track individual shares?", a: "Yes, our Qurbani module is built specifically to handle animal share booking and tracking." },
      { q: "How do we provide proof of slaughter?", a: "Vendors can upload proof (images/notes) directly to the platform, which is then verified by your team before sharing with donors." },
      { q: "Can we generate Qurbani certificates?", a: "Yes, Sidqly automates the creation of professional Qurbani certificates for every donor." },
      { q: "How do we manage animal weight and types?", a: "The platform allows you to define animal categories and track stock levels in real-time." },
      { q: "Can we assign tasks to slaughterhouse vendors?", a: "Yes, our vendor fulfillment portal allows you to assign specific tasks and track their completion status." },
      { q: "How do we handle late bookings?", a: "Real-time stock tracking ensures you never overbook shares, even for last-minute requests." },
      { q: "Can we track distribution to different villages?", a: "Yes, distribution can be tracked by location, batch, and date." },
      { q: "Does the system work for both cattle and goats?", a: "Yes, you can manage any type of animal and its respective shares." },
      { q: "Can we send SMS updates to donors?", a: "While we focus on web-based updates, you can export donor lists for use with SMS platforms." },
      { q: "How do we verify vendor performance?", a: "Sidqly tracks vendor task completion times and the quality of proof uploaded." },
      { q: "Can we manage multi-country Qurbani?", a: "Yes, the platform handles multi-location operations seamlessly." },
      { q: "How do we handle cancellations?", a: "Manual review gates allow your team to process cancellations and reallocate shares easily." }
    ]
  },
  {
    category: "Ramadan Teams",
    faqs: [
      { q: "Can we track daily Iftar meal distribution?", a: "Yes, you can track distribution by batch, location, and date throughout the month." },
      { q: "How do we manage ration pack delivery?", a: "Sidqly provides status tracking for every ration pack, from packing to final delivery." },
      { q: "Can we coordinate volunteer shifts?", a: "Yes, our volunteer management module handles shift assignments and attendance tracking." },
      { q: "How do we show proof to donors during Ramadan?", a: "Real-time updates can be shared via dignity-safe secure links, showing the direct impact of their support." },
      { q: "Can we handle Zakat-ul-Fitr specifically?", a: "Yes, Sidqly treats Fitrana as a distinct fund type with its own tracking and disbursement rules." },
      { q: "How do we manage meal batches?", a: "You can define batch sizes and track fulfillment for each kitchen or distribution point." },
      { q: "Can we track volunteer hours for certificates?", a: "Yes, the system logs service hours which can be used for volunteer recognition." },
      { q: "How do we handle changes in distribution locations?", a: "Locations can be updated in real-time to reflect operational changes on the ground." },
      { q: "Can donors see their specific meal distribution?", a: "Yes, if your team assigns proof to a specific donation, the donor can view it securely." },
      { q: "Is the platform fast enough for busy Ramadan nights?", a: "Yes, the interface is designed for rapid status updates by field teams." },
      { q: "How do we manage inventory for ration packs?", a: "Sidqly tracks the number of packs prepared vs delivered to ensure no family is missed." },
      { q: "Can we export reports for our Ramadan sponsors?", a: "Yes, board-ready impact reports can be generated at any time during or after the month." }
    ]
  },
  {
    category: "Zakat Teams",
    faqs: [
      { q: "How is Zakat fund separation enforced?", a: "Sidqly uses logical and operational filters at the point of entry to ensure Zakat and Sadaqah funds never mix." },
      { q: "Can we track Zakat eligibility review?", a: "Yes, every case has a dedicated workflow for eligibility screening and manual review." },
      { q: "Is there an automatic approval for Zakat?", a: "No. Sidqly empowers your team to review cases, but all final eligibility decisions are made manually." },
      { q: "Can we generate Zakat disbursement reports?", a: "Yes, you can generate detailed reports on how much Zakat was disbursed, to whom (dignity-safe), and for what purpose." },
      { q: "How is requester privacy maintained?", a: "Requester data is restricted to authorized reviewers and is never exposed in donor-facing proof." },
      { q: "Does Sidqly calculate Zakat amounts for donors?", a: "No, Sidqly is an operational platform for organizations, not a Zakat calculator for individuals." },
      { q: "Can we manage a Zakat waiting list?", a: "Yes, the intake module allows you to maintain a queue of pending cases for review." },
      { q: "How do we track Zakat disbursement via different methods?", a: "You can log whether Zakat was paid via cash, bank transfer, or mobile wallet." },
      { q: "Can we attach Mufti reviews to cases?", a: "Yes, you can upload internal notes and verification documents for every Zakat case." },
      { q: "How do we ensure Zakat is spent within the year?", a: "Our aging reports help you track how long funds have been held and prioritize disbursement." },
      { q: "Can we manage specific Zakat categories (e.g., healthcare, education)?", a: "Yes, you can define sub-funds to track Zakat allocation to specific causes." },
      { q: "Is the system audit-ready for Zakat committees?", a: "Yes, we provide the transparency needed for both religious and financial audits." }
    ]
  },
  {
    category: "Corporate CSR",
    faqs: [
      { q: "Can corporate sponsors get board-ready reports?", a: "Yes, our platform generates high-level impact summaries suitable for corporate leadership and CSR compliance." },
      { q: "Can we track employee giving?", a: "Yes, Sidqly can track donations by corporate team or individual employee for matching programs." },
      { q: "Is the proof 'corporate-safe'?", a: "Our dignity-safe proof is professional and suitable for corporate social responsibility reports and presentations." },
      { q: "Can we manage multi-year sponsorships?", a: "Yes, the platform tracks recurring donor relationships and long-term impact metrics." },
      { q: "Do you provide audit trails for corporate compliance?", a: "Yes, Sidqly maintains full records of all transactions and distributions for audit purposes." },
      { q: "Can employees see the impact of their matching funds?", a: "Yes, corporations can share dignity-safe impact links with their staff to boost engagement." },
      { q: "How do we handle tax certificates for corporations?", a: "Sidqly generates official donation receipts that can be used for corporate tax documentation." },
      { q: "Can we track volunteer hours for CSR goals?", a: "Yes, employee volunteer hours can be logged and included in your CSR reports." },
      { q: "Is there a dedicated dashboard for corporate partners?", a: "Organizations can export dedicated views and reports for their corporate sponsors." },
      { q: "Can we track impact across different CSR initiatives?", a: "Yes, you can categorize donations by specific corporate-sponsored projects." },
      { q: "How secure is corporate data on Sidqly?", a: "We use industry-standard security and strict data isolation for every organization." },
      { q: "Can we integrate Sidqly reports into our annual CSR report?", a: "Yes, our clear visuals and data points are designed to be easily incorporated into professional publications." }
    ]
  },
  {
    category: "Donors",
    faqs: [
      { q: "Can I see exactly where my money went?", a: "Yes, Sidqly provides verified proof of impact for every donation through secure, dignity-safe links." },
      { q: "Is my privacy protected?", a: "Yes, we prioritize donor and recipient privacy. We do not share your data with third parties." },
      { q: "How do I get my receipt?", a: "Receipts are automatically generated and sent to you via email once your payment is verified by the organization." },
      { q: "Can I track my historical donations?", a: "Yes, the organization you give to can provide you with a summary of your lifetime impact." },
      { q: "Why is proof blurred?", a: "We blur faces to protect the dignity and privacy of those receiving help, ensuring your charity does no harm." },
      { q: "How long does it take to verify my payment?", a: "Organizations typically verify payments within 24 hours of receiving your confirmation email." },
      { q: "Can I choose which fund my donation goes to?", a: "Yes, you can specify if your donation is for Zakat, Sadaqah, or a specific project." },
      { q: "Is the impact proof real-time?", a: "Yes, you receive updates as soon as the organization's field team completes the distribution and approves the proof." },
      { q: "What if I lose my donation certificate?", a: "You can contact the organization and they can re-send your verified certificate at any time." },
      { q: "Can I share my impact update on social media?", a: "Yes, the secure links we provide can be shared, but they maintain the privacy of the recipients." },
      { q: "Does Sidqly handle my credit card data?", a: "No, Sidqly currently tracks bank and mobile transfers. We do not process credit cards directly." },
      { q: "How do I know the organization I'm giving to is using Sidqly?", a: "Professional organizations will often mention 'Powered by Sidqly' or send you official Sidqly-verified updates." }
    ]
  },
  {
    category: "Requesters",
    faqs: [
      { q: "Is my personal data safe?", a: "Yes. Sidqly is built to protect the privacy of those receiving help. Your name and face are never shared publicly." },
      { q: "How will I know if my request is approved?", a: "The organization will contact you directly once they have reviewed your case on the Sidqly platform." },
      { q: "Does Sidqly decide who gets help?", a: "No. Sidqly is a tool used by charities to organize their work. All decisions are made by the charity's team." },
      { q: "How long does the review process take?", a: "This depends on the organization's internal policies, but Sidqly helps them speed up the review of your case." },
      { q: "Can I update my details if they change?", a: "Yes, you can contact the charity and they can update your record in the Sidqly system." },
      { q: "Is my dignity respected in the proof photos?", a: "Absolutely. Sidqly's technology automatically blurs faces to ensure you are never publicly exposed." },
      { q: "Can I see what data the charity has on me?", a: "You can request this information directly from the organization managing your case." },
      { q: "Does anyone else have access to my data?", a: "Only authorized members of the organization you applied to can see your sensitive information." }
    ]
  }
];

export const faqs: FAQ[] = stakeholderGroups.flatMap(group =>
  group.faqs.map(f => ({
    category: group.category,
    question: f.q,
    answer: f.a
  }))
);

// Add general and billing FAQs
faqs.push(
  { category: "General", question: "Can Sidqly replace WhatsApp and Excel?", answer: "Yes. Sidqly centralizes your operations into a professional, audit-ready platform." },
  { category: "Billing", question: "How do we pay for Sidqly?", answer: "Payments are made via Easypaisa Pakistan. We manually review every payment for professional onboarding." },
  { category: "Billing", question: "Is there a refund policy?", answer: "Sidqly focuses on professional implementation. We do not offer standard refund guarantees; we focus on ensuring your team is satisfied during onboarding." },
  { category: "Onboarding", question: "Can we book a demo first?", answer: "Yes, we encourage all organizations to book a demo to see how Sidqly fits their specific workflow." },
  { category: "Onboarding", question: "Why fill the inquiry form?", answer: "The form allows us to understand your challenges and organization scale before we recommend a plan." },
  { category: "General", question: "Is Sidqly a mosque website builder?", answer: "No, Sidqly is an operating platform. While we provide a brandable interface for donors and vendors, our focus is on operational trust and data integrity." },
  { category: "General", question: "Can we use Sidqly for emergency aid?", answer: "Yes, many teams use Sidqly to rapidly organize and track aid distribution during crises." },
  { category: "General", question: "Does Sidqly provide religious rulings?", answer: "No, Sidqly is a technology tool. Organizations must seek their own religious guidance for Zakat and Qurbani compliance." },
  { category: "General", question: "What countries does Sidqly support?", answer: "While our billing is focused on Pakistan, the platform can be used by organizations operating anywhere in the world." }
);
