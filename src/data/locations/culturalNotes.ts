export interface CulturalNote {
  region: string;
  country: string;
  languageContext: string;
  culturalReferences: string[];
  safeNote: string;
  howSidqlyFits: string;
}

export const culturalNotes: CulturalNote[] = [
  {
    region: "Middle East",
    country: "United Arab Emirates",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Amanah", "Ihsan", "Udhiyah", "Qurbani", "Waqf"],
    safeNote: "In Gulf communities, terms such as Zakat, Sadaqah, Amanah, Ihsan, and Udhiyah/Qurbani are closely connected to trust and responsibility.",
    howSidqlyFits: "Sidqly supports the operational side of these giving workflows by helping teams organize payment proof, approvals, dignity-safe updates, and reporting without claiming religious authority."
  },
  {
    region: "Middle East",
    country: "Saudi Arabia",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Amanah", "Ihsan", "Udhiyah", "Qurbani", "Waqf"],
    safeNote: "Giving terms like Zakat, Sadaqah, and Udhiyah carry immense trust and are central to community initiatives in the Kingdom.",
    howSidqlyFits: "Sidqly does not issue religious rulings; it sits alongside your operations to help organize payment proofs, approval steps, and reporting."
  },
  {
    region: "Middle East",
    country: "Qatar",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Amanah", "Ihsan", "Udhiyah", "Waqf"],
    safeNote: "In Qatari initiatives, giving workflows often revolve around Zakat, Sadaqah, and Ihsan, requiring high trust and clear records.",
    howSidqlyFits: "Sidqly supports operational workflows around trust, proof, dignity, and reporting, ensuring clarity for administrators."
  },
  {
    region: "Middle East",
    country: "Kuwait",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Udhiyah", "Waqf", "Amanah"],
    safeNote: "Kuwaiti charity operations heavily rely on clear structures for Zakat, Sadaqah, and Waqf management.",
    howSidqlyFits: "Sidqly helps operationalize these workflows by providing tools for proof review, team approvals, and donor-safe updates."
  },
  {
    region: "Middle East",
    country: "Bahrain",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Udhiyah"],
    safeNote: "In Bahrain, charitable terms like Zakat and Sadaqah represent a strong commitment to community welfare and trust.",
    howSidqlyFits: "Sidqly assists by organizing the operational workflow—such as proof handling and internal reporting—without replacing established local advisors."
  },
  {
    region: "Middle East",
    country: "Oman",
    languageContext: "Arabic and English",
    culturalReferences: ["Zakat", "Sadaqah", "Ihsan"],
    safeNote: "Omani giving structures often involve Zakat, Sadaqah, and Amanah, demanding transparency and organized record-keeping.",
    howSidqlyFits: "Sidqly offers a structured SaaS approach to organizing proof, approvals, and donor updates for these community initiatives."
  },
  {
    region: "South Asia",
    country: "Pakistan",
    languageContext: "English with light Urdu/Roman Urdu terms",
    culturalReferences: ["Zakat", "Sadqa", "Qurbani", "masjid committee", "Ramadan ration drive", "donor screenshot", "welfare work"],
    safeNote: "In Pakistan, many teams use familiar terms such as Zakat, Sadqa, Qurbani, masjid committees, Ramadan ration drives, and donor screenshots.",
    howSidqlyFits: "Sidqly helps organize the proof, approval, update, and reporting workflow around these community giving activities without replacing scholars, accountants, or local advisors."
  },
  {
    region: "South Asia",
    country: "India",
    languageContext: "English",
    culturalReferences: ["Zakat", "Sadqa", "Qurbani", "masjid trust", "community welfare", "Ramadan ration support"],
    safeNote: "In India, terms like Zakat, Sadqa, and Qurbani are central to masjid trust operations and community welfare drives.",
    howSidqlyFits: "Sidqly focuses on the operational layer, helping Indian giving teams organize manual payment reviews, approvals, and reporting."
  },
  {
    region: "Asia Pacific",
    country: "Malaysia",
    languageContext: "English with local terms",
    culturalReferences: ["zakat", "sedekah", "wakaf", "korban", "Ramadan giving"],
    safeNote: "In Malaysia, terms like zakat, sedekah, wakaf, korban, and Ramadan giving are familiar in community giving.",
    howSidqlyFits: "Sidqly supports the operational workflow around proof review, approvals, donor updates, and internal reports without overclaiming local religious or legal rules."
  },
  {
    region: "Asia Pacific",
    country: "Indonesia",
    languageContext: "English with local terms",
    culturalReferences: ["zakat", "sedekah", "wakaf", "kurban", "Ramadan campaigns"],
    safeNote: "In Indonesia, campaigns frequently center around zakat, sedekah, wakaf, and kurban, requiring organized multi-layered operations.",
    howSidqlyFits: "Sidqly helps manage the backend operations for these initiatives, organizing proof and approvals cleanly."
  },
  {
    region: "Europe",
    country: "United Kingdom",
    languageContext: "English",
    culturalReferences: ["diaspora Muslim communities", "mosque fundraising", "Ramadan appeals", "donor trust", "volunteer coordination", "board reporting", "transparent updates"],
    safeNote: "In UK diaspora Muslim communities, giving often flows through mosques, nonprofit appeals, Ramadan drives, and family/community networks.",
    howSidqlyFits: "Sidqly helps UK teams keep proof, approvals, donor updates, and reporting more structured and dignity-safe without making legal or tax claims."
  },
  {
    region: "North America",
    country: "United States",
    languageContext: "English",
    culturalReferences: ["diaspora Muslim communities", "mosque fundraising", "Ramadan appeals", "donor trust", "volunteer coordination", "board reporting", "transparent updates"],
    safeNote: "In US diaspora Muslim communities, charitable giving is heavily organized through mosque networks, nonprofit appeals, and Ramadan campaigns.",
    howSidqlyFits: "Sidqly provides the SaaS workflow to help US teams manage payment proofs, donor updates, and board-ready reporting without offering tax or legal advice."
  },
  {
    region: "North America",
    country: "Canada",
    languageContext: "English",
    culturalReferences: ["diaspora Muslim communities", "mosque fundraising", "Ramadan appeals", "donor trust", "volunteer coordination", "board reporting", "transparent updates"],
    safeNote: "Canadian diaspora Muslim communities frequently organize giving through community mosques, specialized nonprofits, and coordinated Ramadan drives.",
    howSidqlyFits: "Sidqly helps Canadian organizations structure their proof handling, approvals, and donor updates securely, avoiding legal or accounting claims."
  },
  {
    region: "Asia Pacific",
    country: "Australia",
    languageContext: "English",
    culturalReferences: ["diaspora Muslim communities", "mosque fundraising", "Ramadan appeals", "donor trust", "volunteer coordination", "board reporting", "transparent updates"],
    safeNote: "In Australian diaspora Muslim communities, support relies on mosque fundraising, Ramadan appeals, and strong donor trust.",
    howSidqlyFits: "Sidqly helps organize the operational workflow for these campaigns, focusing on proof, approvals, and reporting."
  },
  {
    region: "Africa",
    country: "South Africa",
    languageContext: "English",
    culturalReferences: ["community giving", "Islamic charity operations", "Ramadan campaigns", "donor trust", "dignity-safe proof"],
    safeNote: "In South Africa, strong networks of community giving and Islamic charity operations focus heavily on Ramadan campaigns and donor trust.",
    howSidqlyFits: "Sidqly supports South African teams by offering tools for dignity-safe proof, approval workflows, and clearer reporting."
  }
];
