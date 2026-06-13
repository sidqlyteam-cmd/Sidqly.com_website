export interface Region {
  slug: string;
  name: string;
  description: string;
  countries: string[];
  cities: string[];
  problems: string[];
  modules: string[];
  faqs: { question: string; answer: string }[];
}

export const regions: Region[] = [
  {
    slug: "europe",
    name: "Europe",
    description: "Sidqly is designed to help Islamic organizations across Europe organize giving operations, payment review, and proof approval with dignity-safe workflows.",
    countries: ["Germany", "France", "Netherlands", "Belgium", "Spain", "Italy", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Austria", "Switzerland", "Poland", "Portugal"],
    cities: ["Berlin", "Hamburg", "Munich", "Frankfurt", "Paris", "Marseille", "Lyon", "Amsterdam", "Rotterdam", "Brussels", "Antwerp", "Madrid", "Barcelona", "Milan", "Rome", "Stockholm", "Oslo", "Copenhagen", "Helsinki", "Dublin", "Vienna", "Zurich", "Geneva", "Warsaw", "Lisbon"],
    problems: [
      "Donations tracked across WhatsApp, Excel, and bank screenshots",
      "Ramadan and Qurbani operations spread across disconnected volunteers",
      "Difficulty giving donors proof without exposing recipient privacy",
      "Scattered charity request intake and screening",
      "Board and donor reporting pressure for high transparency",
      "Difficulty separating Zakat, Sadaqah, and general funds clearly"
    ],
    modules: ["Zakat Fund Separation", "Qurbani Lifecycle", "Ramadan Distribution", "Proof Trust Engine"],
    faqs: [
      { question: "Can Sidqly support Islamic organizations in Europe?", answer: "Yes, Sidqly is designed for professional organizations globally, including those across the EU and non-EU European countries." },
      { question: "How does Sidqly handle different European languages?", answer: "The platform's interface is built for clarity, allowing multi-language teams to coordinate effectively." }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    description: "Supporting UK mosques and charities with structured giving workflows, audit-ready reporting, and dignity-safe donor updates.",
    countries: ["England", "Scotland", "Wales", "Northern Ireland"],
    cities: ["London", "Birmingham", "Manchester", "Bradford", "Leeds", "Leicester", "Glasgow", "Edinburgh", "Cardiff", "Liverpool", "Sheffield", "Luton", "Slough", "Nottingham"],
    problems: [
      "Mosque donations spread across cash, bank transfer, and manual notes",
      "Ramadan and Qurbani campaigns managed through WhatsApp groups",
      "Trustees and boards needing clearer operational reporting",
      "Donors asking for professional receipts and impact updates",
      "Charity request privacy needing strong, modern protection"
    ],
    modules: ["Mosque Operations", "Charity Request Intake", "Donor-Safe Updates", "Vendor Fulfillment"],
    faqs: [
      { question: "Can UK mosques use Sidqly for Friday collections?", answer: "Yes, Sidqly provides specific tools to log and track collections with board-ready transparency." },
      { question: "Is Sidqly suitable for UK-based Qurbani providers?", answer: "Absolutely. Our Qurbani module tracks shares from booking to distribution proof." }
    ]
  },
  {
    slug: "north-america",
    name: "North America",
    description: "Premium operations for US and Canadian Islamic centers that want structured workflows and donor-ready reporting.",
    countries: ["United States", "Canada"],
    cities: ["New York", "Chicago", "Houston", "Dallas", "Los Angeles", "Toronto", "Mississauga", "Brampton", "Ottawa", "Montreal", "Vancouver"],
    problems: [
      "Donors expecting professional receipts, updates, and reports",
      "Islamic centers managing many complex campaigns simultaneously",
      "Ramadan and Qurbani workflows requiring large volunteer coordination",
      "Zakat requests needing dignity-safe and private handling",
      "Corporate and community sponsors needing impact data"
    ],
    modules: ["Zakat Management", "Volunteer Coordination", "Board-Ready Reporting", "Proof Trust Engine"],
    faqs: [
      { question: "Can North American charities use Sidqly for matching gift programs?", answer: "Yes, our reporting module can track corporate-sponsored impact and matching contributions." }
    ]
  },
  {
    slug: "united-states",
    name: "United States",
    description: "Tailored for US Islamic centers and charities handling multi-state fundraising and sensitive community support cases.",
    countries: ["United States"],
    cities: ["New York City", "Jersey City", "Chicago", "Houston", "Dallas", "Austin", "Los Angeles", "San Francisco", "San Jose", "Seattle", "Atlanta", "Detroit", "Dearborn", "Washington DC", "Philadelphia", "Miami", "Orlando"],
    problems: [
      "Centers running multiple concurrent fundraising campaigns",
      "Zakat committees handling sensitive community request data",
      "Donors demanding professional-grade impact updates",
      "Volunteer teams lacking clear task assignment and verification",
      "Proof sharing exposing private recipient information"
    ],
    modules: ["Campaign Management", "Case Screening", "Dignity-Safe Proof", "Audit Trails"],
    faqs: [
      { question: "How does Sidqly help US Zakat committees?", answer: "By providing a private, secure workflow for intake, review, and disbursement tracking." }
    ]
  },
  {
    slug: "canada",
    name: "Canada",
    description: "Helping Canadian Islamic organizations manage large communities with organized workflows and professional donor communication.",
    countries: ["Canada"],
    cities: ["Toronto", "Mississauga", "Brampton", "Ottawa", "Montreal", "Laval", "Calgary", "Edmonton", "Vancouver", "Surrey", "Winnipeg", "Regina", "Saskatoon"],
    problems: [
      "Charities and mosques managing campaigns across large distances",
      "Donors expecting high-quality receipts and verified updates",
      "Ramadan drives needing complex volunteer and delivery logistics",
      "Zakat cases requiring absolute privacy and dignity",
      "Teams relying on disconnected spreadsheets and messages"
    ],
    modules: ["Regional Distribution", "Fulfillment Tracking", "Donor Experience", "Privacy Gates"],
    faqs: [
      { question: "Can Canadian Ramadan food drives use Sidqly?", answer: "Yes, our Ramadan module coordinates ration packs, meal batches, and volunteers in real-time." }
    ]
  },
  {
    slug: "gulf-mena",
    name: "Gulf / MENA",
    description: "Operational clarity for high-volume giving and multi-city charity operations in the Gulf and MENA region.",
    countries: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Egypt", "Turkey", "Morocco"],
    cities: ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dubai", "Abu Dhabi", "Sharjah", "Doha", "Kuwait City", "Manama", "Muscat", "Amman", "Cairo", "Alexandria", "Istanbul", "Ankara", "Casablanca", "Rabat"],
    problems: [
      "High-volume Ramadan and Qurbani giving coordination",
      "Multi-branch or multi-city charity operations",
      "Donor expectations for rapid, verified impact reporting",
      "Vendor fulfillment coordination for food and aid delivery",
      "Need for separated Zakat and Sadaqah fund management"
    ],
    modules: ["Multi-Branch Ops", "Vendor Portal", "High-Volume Intake", "Fund Separation"],
    faqs: [
      { question: "Does Sidqly support multi-city operations in the Gulf?", answer: "Yes, the platform is built to handle distributed teams across different regions and branches." }
    ]
  },
  {
    slug: "south-asia",
    name: "South Asia",
    description: "Professionalizing large-scale Ramadan and Zakat campaigns with verified payments and distribution tracking.",
    countries: ["Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal", "Maldives"],
    cities: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Delhi", "Mumbai", "Hyderabad", "Bengaluru", "Chennai", "Kolkata", "Dhaka", "Chittagong", "Sylhet", "Colombo", "Kathmandu", "Male"],
    problems: [
      "Manual cash and bank transfer verification for large donor bases",
      "Payment screenshots handled manually in WhatsApp groups",
      "Ration pack and Iftar distribution tracking across cities",
      "Qurbani order and share tracking for thousands of donors",
      "Recipient privacy risks and board reporting gaps"
    ],
    modules: ["Manual Payment Review", "Ration Distribution", "Qurbani Shares", "Board Reports"],
    faqs: [
      { question: "How does manual payment review help in South Asia?", answer: "It allows your team to human-verify bank transfers and screenshots before confirming impact." }
    ]
  },
  {
    slug: "africa",
    name: "Africa",
    description: "Helping aid delivery teams and community programs organize intake, coordinate volunteers, and provide donor-safe proof.",
    countries: ["South Africa", "Kenya", "Nigeria", "Tanzania", "Uganda", "Egypt", "Morocco", "Algeria", "Tunisia", "Senegal", "Ghana", "Ethiopia"],
    cities: ["Johannesburg", "Cape Town", "Durban", "Nairobi", "Mombasa", "Lagos", "Abuja", "Kano", "Dar es Salaam", "Kampala", "Cairo", "Casablanca", "Algiers", "Tunis", "Dakar", "Accra", "Addis Ababa"],
    problems: [
      "Donor-funded aid delivery needing verified field proof",
      "Community programs needing organized aid request intake",
      "Distributed field teams needing clearer task assignment",
      "Recipient dignity needing protection during impact reporting",
      "Manual coordination tools causing confusion and delays"
    ],
    modules: ["Field Verification", "Intake Management", "Volunteer Tasks", "Impact Proof"],
    faqs: [
      { question: "Can distributed aid teams in Africa use Sidqly?", answer: "Yes, the platform coordinates field tasks and proof collection across multiple locations." }
    ]
  },
  {
    slug: "asia-pacific",
    name: "Asia-Pacific",
    description: "Structured reporting and lifecycle tracking for multi-city Islamic organizations across the Asia-Pacific region.",
    countries: ["Malaysia", "Indonesia", "Singapore", "Australia", "New Zealand", "Thailand", "Philippines", "Japan", "South Korea"],
    cities: ["Kuala Lumpur", "Selangor", "Penang", "Johor Bahru", "Jakarta", "Bandung", "Surabaya", "Singapore", "Sydney", "Melbourne", "Brisbane", "Perth", "Auckland", "Wellington", "Bangkok", "Manila", "Tokyo", "Seoul"],
    problems: [
      "Multi-city organizations needing structured reporting",
      "Ramadan and Qurbani operations needing lifecycle tracking",
      "Donors expecting high-quality receipts and verified proof",
      "Volunteer coordination across large urban centers",
      "Proof sharing needing better recipient privacy controls"
    ],
    modules: ["Lifecycle Tracking", "Urban Distribution", "Donor Reports", "Privacy Controls"],
    faqs: [
      { question: "Is Sidqly suitable for organizations in Singapore or Malaysia?", answer: "Yes, Sidqly supports professional Islamic charities and mosques in urban centers across AP." }
    ]
  }
];
