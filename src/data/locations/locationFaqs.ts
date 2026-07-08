export interface LocationFaqTemplate {
  questionTemplate: string;
  answerTemplate: string;
  category: "general" | "mosque" | "islamicCharity" | "zakatSadaqah" | "qurbani" | "ramadan" | "paymentProof" | "donorUpdates" | "recipientDignity" | "boardReporting" | "remoteSaaS" | "pricingDemo" | "localCulture";
  suitableFor: string[];
  riskLevel: "low" | "medium" | "high";
  notes?: string;
}

export const locationFaqBanks: LocationFaqTemplate[] = [
  {
    category: "localCulture",
    suitableFor: ["city", "country"],
    riskLevel: "low",
    questionTemplate: "Does Sidqly understand the needs of {City} Islamic giving networks?",
    answerTemplate: "Yes. Sidqly supports the operational workflow for local giving networks in {City}, such as Zakat, Sadaqah, or Ramadan campaigns, helping teams manage proof and approvals safely."
  },
  {
    category: "general",
    suitableFor: ["city", "country", "region"],
    riskLevel: "low",
    questionTemplate: "Can Sidqly help Islamic charities in {City}?",
    answerTemplate: "Yes. Sidqly can help Islamic charities serving {City} organize verified giving workflows, manual payment review, proof approval, donor-safe updates, and board-ready reporting. It is useful when teams need a clearer way to manage Zakat, Sadaqah, Qurbani, Ramadan campaigns, or donor-funded programs without relying only on scattered messages, spreadsheets, or folders."
  },
  {
    category: "remoteSaaS",
    suitableFor: ["city"],
    riskLevel: "low",
    questionTemplate: "Does Sidqly have a physical office in {City}?",
    answerTemplate: "Sidqly should be understood as a cloud SaaS platform, not a local branch office in {City}. Organizations can use Sidqly remotely to manage payment proof, approval workflows, donor updates, recipient dignity protection, and internal reporting. Any physical office presence should only be claimed if it is officially confirmed on Sidqly.com.",
    notes: "Mandatory FAQ for every city record."
  },
  {
    category: "mosque",
    suitableFor: ["city", "country"],
    riskLevel: "low",
    questionTemplate: "How does Sidqly help mosque committees in {City}?",
    answerTemplate: "Mosque committees in {City} often manage donations across various channels like Friday collections or direct bank transfers. Sidqly helps mosque teams centralize these payment proofs, review them efficiently, and maintain audit-ready records. This reduces the administrative burden on volunteers and provides clearer oversight for the mosque board."
  },
  {
    category: "zakatSadaqah",
    suitableFor: ["city", "country", "region"],
    riskLevel: "medium",
    questionTemplate: "Can Sidqly help manage Zakat and Sadaqah funds in {City}?",
    answerTemplate: "Sidqly provides operational workflows to help organizations serving {City} keep their Zakat and Sadaqah records logically separated. While Sidqly does not issue religious rulings on Zakat eligibility, it provides the tracking, proof collection, and approval layers necessary to maintain transparent and organized fund separation for your internal operations."
  },
  {
    category: "qurbani",
    suitableFor: ["city", "country"],
    riskLevel: "low",
    questionTemplate: "Is Sidqly useful for Qurbani organizers serving {City}?",
    answerTemplate: "Yes. During Eid, Qurbani organizers managing orders from or serving {City} deal with a massive influx of manual payments and shares. Sidqly offers a clear Qurbani lifecycle workflow to track shares, approve payment screenshots, and send completion updates to donors without the chaos of scattered spreadsheets."
  },
  {
    category: "ramadan",
    suitableFor: ["city", "country", "region"],
    riskLevel: "low",
    questionTemplate: "How can Sidqly assist Ramadan campaign teams in {City}?",
    answerTemplate: "Ramadan drives often involve high volumes of manual donations, ration distributions, and daily updates. Sidqly helps teams in {City} manage this spike by organizing payment reviews, coordinating meal/ration tracking, and ensuring board reporting remains clear despite the rush. Book a demo to see how it can support your next Ramadan campaign."
  },
  {
    category: "paymentProof",
    suitableFor: ["city", "country"],
    riskLevel: "low",
    questionTemplate: "Does Sidqly help with WhatsApp payment screenshots in {City}?",
    answerTemplate: "Many organizations rely on donors in {City} sending bank transfer screenshots via WhatsApp. Sidqly offers a Manual Payment Review module that replaces unstructured messages with a centralized queue. Admins can review, approve, and match these proofs to specific campaigns securely and efficiently."
  },
  {
    category: "recipientDignity",
    suitableFor: ["city", "country", "region"],
    riskLevel: "low",
    questionTemplate: "How does Sidqly protect recipient dignity when reporting to donors in {City}?",
    answerTemplate: "Donors in {City} rightly expect proof of their impact, but sharing raw field photos can compromise recipient privacy. Sidqly’s Recipient Dignity Protection module helps organizations anonymize or restrict sensitive details before generating donor-safe updates, ensuring transparency without violating dignity."
  },
  {
    category: "boardReporting",
    suitableFor: ["city", "country"],
    riskLevel: "low",
    questionTemplate: "Can Sidqly generate board-ready reports for charities in {City}?",
    answerTemplate: "Yes. For Islamic charities and nonprofits operating in {City}, providing clear oversight to the board is critical. Sidqly centralizes all proof approvals and fund tracking, making it simple to generate professional, audit-ready reports that give trustees confidence in the organization’s operations."
  },
  {
    category: "pricingDemo",
    suitableFor: ["city", "country", "region"],
    riskLevel: "low",
    questionTemplate: "How can organizations in {City} try Sidqly?",
    answerTemplate: "Islamic organizations serving {City} can start by booking a demo on Sidqly.com. During the demo, our team will understand your specific workflows—whether for Zakat, Sadaqah, or Ramadan campaigns—and show how Sidqly’s modules can bring clarity and security to your manual operations."
  },
  {
    category: "islamicCharity",
    suitableFor: ["city", "country", "region"],
    riskLevel: "low",
    questionTemplate: "Why should Islamic charities in {City} use Sidqly instead of standard spreadsheets?",
    answerTemplate: "Standard spreadsheets lack secure file attachments for proof, clear approval workflows, and privacy controls. Sidqly provides Islamic charities in {City} with a purpose-built platform that handles manual payment reviews, dignified donor updates, and structured reporting, reducing the risk of lost records or privacy breaches."
  }
];

export function generateLocationFaqs(city: string, categories: string[]): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Ensure the mandatory remoteSaaS FAQ is included for cities
  if (!categories.includes("remoteSaaS")) {
    categories.push("remoteSaaS");
  }

  for (const category of categories) {
    const template = locationFaqBanks.find((faq) => faq.category === category);
    if (template) {
      faqs.push({
        question: template.questionTemplate.replace(/\{City\}/g, city),
        answer: template.answerTemplate.replace(/\{City\}/g, city)
      });
    }
  }

  return faqs;
}
