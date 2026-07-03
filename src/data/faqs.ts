export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // 1. General
  { category: "General", question: "What is Sidqly?", answer: "Sidqly is a premium operating platform designed specifically for Islamic organizations. It centralizes verified giving, manual payment review, dignity-safe proof approval, and board-ready reporting." },
  { category: "General", question: "Who is Sidqly for?", answer: "Sidqly is built for mosques, registered Islamic charities, Zakat committees, Qurbani providers, Ramadan food drives, community welfare teams, and corporate CSR sponsors who manage giving and impact operations." },
  { category: "General", question: "Is Sidqly only for one country?", answer: "No, Sidqly is a global standard and is used by organizations internationally to track giving operations." },
  { category: "General", question: "Can pages be translated by browser tools?", answer: "Yes, Sidqly is designed to be fully compatible with standard browser translation tools for accessibility in different regions." },
  { category: "General", question: "How do we book a demo?", answer: "You can book a demo directly with our team via our Calendly link available throughout the website." },
  { category: "General", question: "How does the inquiry form work?", answer: "The inquiry form allows you to provide details about your organization's specific needs before we meet, ensuring our demo is perfectly tailored to your workflows." },

  // 2. Pricing
  { category: "Pricing", question: "What happens after plan confirmation?", answer: "After your plan is confirmed, the Sidqly team will share the correct payment and onboarding instructions. We do not use automated public checkout to ensure every organization gets proper setup support." },

  // 3. Implementation
  { category: "Implementation", question: "Can we start with one campaign?", answer: "Yes, many organizations prefer to run a pilot launch, starting with a single campaign (like Ramadan or Qurbani) before expanding platform use to all their operations." },

  // 4. Donors
  { category: "Donors", question: "Can a donor ask their mosque to use Sidqly?", answer: "Absolutely. Donors and community members can recommend Sidqly to their mosque or charity leadership using our Request Organization page." },

  // 5. Mosques
  { category: "Mosques", question: "How does Sidqly help Mosques?", answer: "Sidqly helps mosques track Friday collections, manage construction appeals, and communicate clear impact back to their congregation without relying on scattered WhatsApp messages." },

  // 6. Charities
  { category: "Charities", question: "How does Sidqly help registered Islamic charities?", answer: "Sidqly provides an audit-ready operating layer for complex charity workflows, managing everything from volunteer assignments to multi-stage proof approval and donor-safe updates." },

  // 7. Zakat
  { category: "Zakat", question: "Does Sidqly replace scholars or Zakat committees?", answer: "No. Sidqly supports your operational tracking and workflows. Religious, legal, and eligibility decisions remain entirely with your organization’s authorized reviewers, scholars, advisors, or policy team." },
  { category: "Zakat", question: "Does Sidqly automatically approve Zakat?", answer: "No. Sidqly provides the workflow and tools for your team to review cases, but all Zakat approvals must be made manually by your authorized team." },
  { category: "Zakat", question: "How does Zakat fund separation work?", answer: "Sidqly uses strict operational logic and tagging to ensure restricted Zakat funds are tracked separately from general Sadaqah and operating expenses." },

  // 8. Sadaqah/Sadqa
  { category: "Sadaqah", question: "Can we use Sidqly for Sadaqah/Sadqa?", answer: "Yes, Sidqly is perfect for tracking general Sadaqah, emergency appeals, and Khairat, ensuring every contribution is verified and tracked to its final delivery." },

  // 9. Qurbani/Udhiya
  { category: "Qurbani", question: "Can we use Sidqly for Qurbani?", answer: "Yes, the Qurbani Lifecycle module tracks everything from initial share booking and vendor assignment to slaughter proof and automated donor certificates." },
  { category: "Qurbani", question: "Can Sidqly help organize Qurbani campaigns for Eid ul Adha?", answer: "Yes, our operational modules are designed to manage the complexities of Qurbani campaign logistics." },
  { category: "Qurbani", question: "Can Sidqly track Qurbani shares and vendor assignments?", answer: "Yes, from initial order intake to final slaughter tracking." },
  { category: "Qurbani", question: "Can Sidqly prepare donor-safe Qurbani updates?", answer: "Yes, our Proof Trust Engine ensures dignified visual updates are shared with donors." },
  { category: "Qurbani", question: "Does Sidqly issue religious rulings for Qurbani?", answer: "No. Sidqly supports operational tracking and reporting. Religious decisions remain with the organization's authorized reviewers, scholars, or policy team." },

  // 10. Ramadan/Ramzan
  { category: "Ramadan", question: "Can we use Sidqly for Ramadan ration packs?", answer: "Yes, the Ramadan module is designed to handle the high volume of daily Iftar, Suhoor, and ration pack distributions, tracking batches and delivery proof." },

  // 11. Vendors
  { category: "Vendors", question: "Can vendors use Sidqly?", answer: "Yes, vendors and fulfillment partners get access to specific task assignments and can upload delivery proof directly into the system for your team to review." },

  // 12. Volunteers
  { category: "Volunteers", question: "Can volunteers use Sidqly?", answer: "Yes, volunteer coordinators can assign field tasks, and volunteers can receive instructions and upload impact evidence directly from the field." },

  // 13. Corporate sponsors
  { category: "Corporate", question: "Can a corporate sponsor request a charity to use Sidqly?", answer: "Yes. Corporate CSR teams often recommend Sidqly to their charity partners to ensure they receive board-ready, corporate-safe impact reports without exposing private recipient data." },

  // 14. Privacy and dignity
  { category: "Privacy", question: "How does Sidqly protect recipient dignity?", answer: "Sidqly enforces strict data boundaries. Our Proof Trust Engine allows you to blur faces and scrub sensitive documents so that donors see verified impact without compromising the privacy or dignity of the recipient." },
  { category: "Privacy", question: "What is donor-safe proof?", answer: "Donor-safe proof is field evidence (like photos or reports) that has been reviewed by management, stripped of Personally Identifiable Information (PII) and clear faces, and approved for public or donor viewing." },

  // 15. Proof review
  { category: "Proof Review", question: "What happens before proof is shown to donors?", answer: "Field staff upload raw proof. It remains internal until an authorized manager reviews it, ensures dignity protections (like blurring) are applied, and explicitly clicks 'Approve' for donor visibility." },
  { category: "Proof Review", question: "How does manual payment review work?", answer: "When a donor claims to have made a bank transfer, they upload a screenshot or reference. Your finance team must manually verify this against the bank statement in Sidqly before the contribution is considered active." },
  { category: "Proof Review", question: "Does Sidqly automatically detect fraud?", answer: "No. Sidqly enforces human-in-the-loop manual review gates (like checking payment screenshots) to prevent fraud, but it does not use automated black-box fraud detection algorithms." },

  // 16. Reports and audit records
  { category: "Reporting", question: "Can Sidqly help with receipts and certificates?", answer: "Yes, Sidqly can generate professional, branded receipts and certificates (like Qurbani completion certificates) complete with verifiable QR codes." },
  { category: "Reporting", question: "What does audit-ready mean?", answer: "It means every major action in Sidqly—such as approving a payment, verifying a proof image, or changing a Zakat status—is logged with a timestamp and reviewer ID, providing a clear trail for board members and external auditors." },

  // 17. Request organization to join
  { category: "Request Organization", question: "Is there a template I can use to recommend Sidqly?", answer: "Yes, visit our 'Request Organization' page for suggested message copy you can easily send to your mosque or charity leadership." },

  // 18. Analytics/search/crawlers
  { category: "Analytics", question: "Does Sidqly allow search engines and AI to crawl the site?", answer: "Yes, our public marketing site permits responsible crawling by search engines and AI agents to help organizations find the best operational tools. You can view our policies in our robots.txt and llms.txt files." },

  // --- HOMEPAGE FAQS ---
  { category: "Homepage", question: "What is Sidqly and how does it work?", answer: "Sidqly is a web-based operating platform built specifically for Islamic organizations. It replaces scattered spreadsheets and WhatsApp groups with a unified system to manage manual payment reviews, Zakat separation, and donor-safe impact updates." },
  { category: "Homepage", question: "Why should our organization use Sidqly instead of standard software?", answer: "General tools aren't built for complex Islamic workflows like restricted Zakat tracking, Qurbani lifecycle management, or dignity-safe proof. Sidqly gives you an audit-ready standard that respects both donor expectations and recipient dignity." },
  { category: "Homepage", question: "Is Sidqly a payment processor or a bank?", answer: "No. Sidqly is an operational layer. We do not touch your funds or issue religious rulings. Your organization keeps its existing bank accounts and authorized scholars, while Sidqly handles the operational tracking and clear reporting." },
  { category: "Homepage", question: "Who is Sidqly designed for?", answer: "Sidqly is designed for any team managing Islamic giving—from mosques and registered charities to Zakat committees, Ramadan ration teams, and corporate CSR sponsors." },

  // --- ABOUT US / PRODUCT OVERVIEW FAQS ---
  { category: "About Us", question: "What is the main problem Sidqly solves?", answer: "Many Islamic organizations struggle with 'trust gaps' caused by disorganized manual records, delayed donor updates, and mixed funds. Sidqly solves this by providing a professional, transparent, and audit-ready framework that proves to donors their contributions were delivered safely and accurately." },
  { category: "About Us", question: "How does Sidqly protect the dignity of those receiving aid?", answer: "Our core philosophy is 'Protected Dignity.' Sidqly includes a Proof Trust Engine that allows field staff to upload delivery evidence (like photos or IDs), while giving managers the tools to blur faces and scrub sensitive data before any donor sees it." },
  { category: "About Us", question: "How is Sidqly different from traditional CRM or fundraising tools?", answer: "Traditional CRMs focus primarily on collecting money. Sidqly focuses on what happens after the donation. We provide end-to-end tracking for complex campaigns—like managing Qurbani vendor assignments or separating restricted Zakat from general Sadaqah—ensuring operational clarity that standard tools cannot match." },
  { category: "About Us", question: "Does Sidqly offer different modules for different campaigns?", answer: "Yes! Sidqly is highly modular. Whether you are running a daily Ramadan food drive, an annual Qurbani campaign, or managing year-round Zakat distribution, you can activate the specific workflows and reporting tools your team needs." },

  // --- USE CASES FAQS ---
  { category: "Use Cases", question: "How do Mosques use Sidqly for daily operations?", answer: "Mosques use Sidqly to track Friday collections, manage construction appeals, and handle local Sadaqah distributions. It allows the administration to provide board-ready reporting and share dignified, clear impact updates with the congregation." },
  { category: "Use Cases", question: "What role does Sidqly play for Zakat Committees and Charities?", answer: "Registered charities and Zakat committees rely on Sidqly for strict fund separation and manual workflow tracking. It provides an audit-ready log of every payment reviewed, Zakat status change, and proof verified, giving boards and external auditors complete confidence." },
  { category: "Use Cases", question: "How does the platform support Corporate CSR sponsors?", answer: "Corporate sponsors often mandate strict compliance and reporting. CSR teams recommend Sidqly to their charity partners to ensure they receive professional, corporate-safe impact reports without ever exposing private recipient data." },
  { category: "Use Cases", question: "Can field volunteers and vendors access the platform?", answer: "Yes. Volunteer coordinators can assign specific tasks, and both volunteers and fulfillment vendors can use Sidqly to receive instructions and upload delivery proof directly from the field, which managers then review centrally." },
];
