export interface Stakeholder {
  id: string;
  label: string;
  shortDescription: string;
  painPoint: string;
  howSidqlyHelps: string;
  relatedModules: string[];
  ctaAngle: string;
}

export const stakeholders: Record<string, Stakeholder> = {
  mosque_committees: {
    id: "mosque_committees",
    label: "Mosque committees",
    shortDescription: "Teams managing mosque funds, community collections, and operational expenses.",
    painPoint: "Mosque teams often manage donations, campaign records, payment screenshots, volunteer updates, and donor questions across different people and message threads.",
    howSidqlyHelps: "Sidqly helps mosque committees organize giving campaigns, review payment proof, approve updates, protect recipient dignity, and prepare clearer internal records.",
    relatedModules: ["manual-payment-review", "donor-safe-updates", "audit-ready-records"],
    ctaAngle: "Book a demo to see how Sidqly can support your mosque’s giving workflow.",
  },
  islamic_charity_teams: {
    id: "islamic_charity_teams",
    label: "Islamic charity teams",
    shortDescription: "Staff running registered Islamic charities, managing multiple campaigns and fund separations.",
    painPoint: "Islamic charities often struggle with siloed spreadsheets, mixed funds, and producing audit-ready records while trying to keep donors informed.",
    howSidqlyHelps: "Sidqly offers a structured workflow for charities to manage manual payment review, ensure Zakat funds are kept separate, and generate board-ready reports.",
    relatedModules: ["manual-payment-review", "zakat-fund-separation", "reports-board-packs", "audit-ready-records"],
    ctaAngle: "Book a demo to discover how Sidqly centralizes your charity’s manual proof and reporting workflows.",
  },
  zakat_committees: {
    id: "zakat_committees",
    label: "Zakat committees",
    shortDescription: "Specialized teams assessing eligibility and distributing Zakat funds safely.",
    painPoint: "Zakat distribution requires strict separation from Sadaqah and careful eligibility proof, which is hard to maintain in generic spreadsheets.",
    howSidqlyHelps: "Sidqly provides clear workflows to keep Zakat separated, track distribution requests, and manage approval layers securely without compromising privacy.",
    relatedModules: ["zakat-fund-separation", "charity-request-intake", "privacy-dignity-controls"],
    ctaAngle: "Book a demo to learn how Sidqly helps manage Zakat operations transparently.",
  },
  sadaqah_teams: {
    id: "sadaqah_teams",
    label: "Sadaqah teams",
    shortDescription: "Teams coordinating general Sadaqah campaigns, emergency relief, and community support.",
    painPoint: "Sadaqah campaigns can generate hundreds of micro-donations with payment screenshots that must be manually reviewed and matched.",
    howSidqlyHelps: "Sidqly helps Sadaqah teams collect manual payment proofs efficiently, approve them quickly, and update donors without sharing sensitive recipient details.",
    relatedModules: ["sadaqah-campaigns", "manual-payment-review", "donor-safe-updates"],
    ctaAngle: "Book a demo to see how Sidqly simplifies Sadaqah campaign tracking and proof review.",
  },
  qurbani_organizers: {
    id: "qurbani_organizers",
    label: "Qurbani organizers",
    shortDescription: "Organizations managing annual Udhiyah/Qurbani orders, shares, and distribution.",
    painPoint: "Tracking Qurbani shares, matching manual payments to specific animals, and sending completion proofs to donors is chaotic during Eid.",
    howSidqlyHelps: "Sidqly gives Qurbani organizers a clear lifecycle workflow to track shares, approve payment screenshots, and send dignified completion updates to donors.",
    relatedModules: ["qurbani-lifecycle", "vendor-fulfillment", "donor-safe-updates"],
    ctaAngle: "Book a demo to streamline your Qurbani tracking and donor updates with Sidqly.",
  },
  ramadan_campaign_teams: {
    id: "ramadan_campaign_teams",
    label: "Ramadan campaign teams",
    shortDescription: "Teams running intensive month-long drives for Iftar, rations, and Zakat.",
    painPoint: "Ramadan brings a massive spike in manual payments, ration distribution requests, and donor inquiries that overwhelm standard admin processes.",
    howSidqlyHelps: "Sidqly helps Ramadan teams manage high-volume payment reviews, coordinate meal and ration tracking, and keep board reporting clear despite the rush.",
    relatedModules: ["ramadan-meals-rations", "manual-payment-review", "volunteer-coordination"],
    ctaAngle: "Book a demo to prepare your operations for the next Ramadan campaign.",
  },
  donor_relations_teams: {
    id: "donor_relations_teams",
    label: "Donor relations teams",
    shortDescription: "Staff focused on communicating impact, issuing receipts, and retaining donors.",
    painPoint: "Donors frequently demand proof of where their funds went, but sharing raw field photos can violate recipient dignity and privacy.",
    howSidqlyHelps: "Sidqly enables donor relations teams to provide donor-safe updates and receipts without exposing private recipient details.",
    relatedModules: ["donor-communication", "receipts-certificates", "privacy-dignity-controls"],
    ctaAngle: "Book a demo to learn how Sidqly helps you build trust while protecting dignity.",
  },
  finance_admin_teams: {
    id: "finance_admin_teams",
    label: "Finance/admin teams",
    shortDescription: "Teams responsible for reconciling bank statements with donation claims.",
    painPoint: "Finance teams spend hours manually matching bank deposit screenshots sent via WhatsApp to claimed donation forms.",
    howSidqlyHelps: "Sidqly creates a structured queue for manual payment reviews, making it easier to match proofs with campaigns and maintain audit-ready records.",
    relatedModules: ["manual-payment-review", "audit-ready-records", "reports-board-packs"],
    ctaAngle: "Book a demo to see how Sidqly can clear up your finance team’s manual review backlog.",
  },
  board_members: {
    id: "board_members",
    label: "Board members",
    shortDescription: "Trustees and directors responsible for oversight and compliance.",
    painPoint: "Board members often lack clear visibility into campaign progress, fund separation, and operational bottlenecks.",
    howSidqlyHelps: "Sidqly generates board-ready reports and audit trails, giving trustees confidence in how giving operations are managed.",
    relatedModules: ["reports-board-packs", "audit-ready-records"],
    ctaAngle: "Book a demo to discover how Sidqly provides clearer oversight for your board.",
  },
  volunteers: {
    id: "volunteers",
    label: "Volunteers and field teams",
    shortDescription: "People on the ground collecting funds or distributing aid.",
    painPoint: "Volunteers often have to send loose messages or photos to admins to prove distribution, leading to lost context and privacy risks.",
    howSidqlyHelps: "Sidqly provides structured coordination tools for volunteers to upload fulfillment proofs securely, keeping field updates organized and safe.",
    relatedModules: ["volunteer-coordination", "proof-trust-engine"],
    ctaAngle: "Book a demo to see how Sidqly coordinates field teams securely.",
  },
  vendors: {
    id: "vendors",
    label: "Vendors and suppliers",
    shortDescription: "Third parties supplying rations, meals, or animals for charity.",
    painPoint: "Working with charities often involves messy communication regarding order fulfillment and proof of delivery.",
    howSidqlyHelps: "Sidqly offers vendor fulfillment tracking so partners can upload delivery proofs directly into the campaign’s workflow.",
    relatedModules: ["vendor-fulfillment", "proof-trust-engine"],
    ctaAngle: "Book a demo to see how Sidqly integrates vendor proofs into your workflow.",
  },
  donors: {
    id: "donors",
    label: "Donors",
    shortDescription: "Individuals or organizations funding campaigns.",
    painPoint: "Donors want to know their money reached the right place but often receive generic updates or invasive recipient photos.",
    howSidqlyHelps: "Sidqly helps organizations send safe, dignified updates to donors, proving impact without compromising privacy.",
    relatedModules: ["donor-safe-updates", "receipts-certificates"],
    ctaAngle: "Book a demo to learn how Sidqly helps you report back to donors effectively.",
  }
};
