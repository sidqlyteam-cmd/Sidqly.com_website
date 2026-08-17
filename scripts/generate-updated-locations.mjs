import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

import { regionsData } from '../src/data/locations/regions.ts';
import { countriesData } from '../src/data/locations/countries.ts';
import { cityContentTier1 } from '../src/data/locations/cityContentTier1.ts';

// Map of location slug to detailed location-specific use cases
const useCaseDefinitions = {
  // REGIONS
  'gulf': {
    title: 'Example: How Sidqly Could Support Gulf Regional Operations',
    problemStatement: 'Organizations managing seasonal relief and Udhiyah drives across multiple Gulf countries often face heavy volumes of bank transfer receipts, multi-currency reporting needs, and vendor proof coordination during peak holy days.',
    description: 'A step-by-step operational workflow showing how a Gulf regional charity can coordinate Udhiyah shares, verify direct bank wires, and generate executive reporting packs.',
    steps: [
      { stepNumber: 1, name: 'Zakat & Campaign Setup', detail: 'Configure designated Zakat and Qurbani appeals with fund separation boundaries.', moduleName: 'Zakat Fund Separation', moduleSlug: 'zakat-fund-separation' },
      { stepNumber: 2, name: 'Bank Transfer Receipt Review', detail: 'Batch-verify direct wire transfer screenshots and bank confirmations submitted by Gulf donors.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Slaughterhouse & Vendor Allocation', detail: 'Assign verified Qurbani shares to licensed local fulfillment partners.', moduleName: 'Vendor Fulfillment', moduleSlug: 'vendor-fulfillment' },
      { stepNumber: 4, name: 'Field Proof & Timestamp Checks', detail: 'Log field execution photos and timestamp records into an internal audit queue.', moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
      { stepNumber: 5, name: 'Dignity-Safe Impact Updates', detail: 'Send private completion updates to donors without public exposure of recipient faces.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Executive & Board Reporting', detail: 'Produce consolidated balance sheets and corporate reporting summaries for committee leadership.', moduleName: 'Corporate CSR / Zakat Reporting', moduleSlug: 'corporate-csr-zakat' }
    ],
    outcome: 'Instead of managing cross-border campaign steps through fragmented messaging apps, regional teams maintain a connected workflow that simplifies payment verification, fulfillment tracking, and corporate sponsor reporting.'
  },
  'north-america': {
    title: 'Real-World Use Case for North American Mosque & Charity Operations',
    problemStatement: 'North American 501(c)(3) charities and mosques handling local Zakat and hardship relief frequently collect donor contributions via ACH, Zelle, and direct deposit, making manual bank reconciliation, applicant screening, and board balance sheets difficult to coordinate.',
    description: 'An operational scenario showing how a North American Islamic center can streamline hardship intake, verify electronic transfers, and produce audit-ready financial records.',
    steps: [
      { stepNumber: 1, name: 'Community Hardship Application', detail: 'Receive family assistance applications through a dignity-safe digital intake queue.', moduleName: 'Charity Request Intake', moduleSlug: 'charity-request-intake' },
      { stepNumber: 2, name: 'ACH & Zelle Transfer Review', detail: 'Verify incoming electronic deposit references against bank records before approving funds.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Zakat & Sadaqah Fund Tagging', detail: 'Maintain strict operational ledger separation between designated Zakat and general Sadaqah funds.', moduleName: 'Zakat Fund Separation', moduleSlug: 'zakat-fund-separation' },
      { stepNumber: 4, name: 'Recipient Dignity Check', detail: 'Enforce privacy gates to obscure sensitive applicant medical and financial documents.', moduleName: 'Privacy and Dignity Controls', moduleSlug: 'privacy-dignity-controls' },
      { stepNumber: 5, name: 'Donor Impact Confirmation', detail: 'Deliver verified, dignity-safe campaign updates to community donors.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Board Governance Summary', detail: 'Generate one-click balance sheets and operational summaries for board governance.', moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
    ],
    outcome: 'Instead of tracking hardship applications and bank transfers on separate spreadsheets, organizations can run a connected operational flow that protects applicant privacy while preparing audit-ready reports.'
  },
  'europe': {
    title: 'Example: How Sidqly Could Support European Islamic Charity Workflows',
    problemStatement: 'Charities operating in European countries often coordinate local community welfare alongside international relief drives, receiving donor bank transfers across multiple currencies that require careful manual review, proof sanitization, and compliance logging.',
    description: 'A practical operational scenario illustrating how European charities can link donation verification, volunteer tasking, and recipient privacy controls.',
    steps: [
      { stepNumber: 1, name: 'Seasonal Appeal Launch', detail: 'Set up campaign parameters and designated giving tiers for European donor appeals.', moduleName: 'Sadaqah Campaigns', moduleSlug: 'sadaqah-campaigns' },
      { stepNumber: 2, name: 'Bank Transfer Verification', detail: 'Review direct SEPA wire transfer receipts and match them to appeal accounts.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Volunteer & Logistics Tasking', detail: 'Deploy local volunteers and assign distribution tasks with clear field instructions.', moduleName: 'Volunteer Coordination', moduleSlug: 'volunteer-coordination' },
      { stepNumber: 4, name: 'Beneficiary Dignity Protection', detail: 'Automatically filter and obscure sensitive beneficiary faces from distribution photos.', moduleName: 'Privacy and Dignity Controls', moduleSlug: 'privacy-dignity-controls' },
      { stepNumber: 5, name: 'Donor Impact Updates', detail: 'Send encrypted digital update links to European community donors.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Compliance Audit Logging', detail: 'Maintain permanent timestamped logs for registered charity compliance and internal review.', moduleName: 'Audit-Ready Records', moduleSlug: 'audit-ready-records' }
    ],
    outcome: 'European charities can link donation verification, volunteer coordination, and privacy-safe impact updates, reducing administrative burden during peak appeals.'
  },
  'middle-east': {
    title: 'Real-World Use Case for Middle East Relief & Giving Workflows',
    problemStatement: 'Relief groups operating in the Middle East handle high-volume Ramadan meal distributions and family welfare assistance, where collecting field proof without exposing recipient identities and verifying wire transfers creates operational friction.',
    description: 'An operational overview showing how a Middle Eastern relief agency can manage family intake, payment proof, and dignified updates.',
    steps: [
      { stepNumber: 1, name: 'Family Assistance Intake', detail: 'Process welfare requests and hardship applications through a protected review queue.', moduleName: 'Charity Request Intake', moduleSlug: 'charity-request-intake' },
      { stepNumber: 2, name: 'Wire Transfer Verification', detail: 'Review bank deposit documents and wire transfer confirmations manually.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Iftar & Food Pack Allocation', detail: 'Coordinate meal batching, distribution routes, and field partner assignments.', moduleName: 'Ramadan Meals and Ration Packs', moduleSlug: 'ramadan-meals-rations' },
      { stepNumber: 4, name: 'Field Proof Processing', detail: 'Review field delivery images and apply automated dignity controls.', moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
      { stepNumber: 5, name: 'Dignity-Safe Donor Notices', detail: 'Send private, dignified impact notifications directly to donors.', moduleName: 'Donor Communication', moduleSlug: 'donor-communication' },
      { stepNumber: 6, name: 'Audit Summary Export', detail: 'Compile timestamped distribution records for administrative oversight.', moduleName: 'Audit-Ready Records', moduleSlug: 'audit-ready-records' }
    ],
    outcome: 'Connecting intake, payment verification, and field proof helps relief organizations maintain clear distribution records while protecting beneficiary dignity.'
  },
  'south-asia': {
    title: 'Example: How Sidqly Could Support South Asian Welfare Operations',
    problemStatement: 'Welfare organizations across South Asia run large Ramadan ration distribution drives and emergency relief, receiving thousands of mobile payment screenshots (EasyPaisa, JazzCash, UPI, direct bank transfers) that create massive review backlogs and chaotic field proof tracking.',
    description: 'A step-by-step workflow showing how a South Asian welfare committee can verify mobile transfer screenshots, manage ration packing, and export board reports.',
    steps: [
      { stepNumber: 1, name: 'Community Relief Setup', detail: 'Launch targeted welfare appeals for Ramadan ration packs and medical assistance.', moduleName: 'Sadaqah Campaigns', moduleSlug: 'sadaqah-campaigns' },
      { stepNumber: 2, name: 'Mobile Transfer Screenshot Review', detail: 'Process mobile wallet screenshots (EasyPaisa, JazzCash, UPI) and bank receipts in a structured queue.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Ration Pack Procurement', detail: 'Issue tracked procurement orders to wholesale food suppliers and vendors.', moduleName: 'Ramadan Meals and Ration Packs', moduleSlug: 'ramadan-meals-rations' },
      { stepNumber: 4, name: 'Delivery Proof Anonymization', detail: 'Collect field distribution photos and apply privacy filters before sharing.', moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
      { stepNumber: 5, name: 'Donor Progress Updates', detail: 'Notify supporters that their contribution reached verified ration distribution.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Board Balance Sheet Export', detail: 'Generate audit-ready campaign balance sheets for local trustees.', moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
    ],
    outcome: 'By replacing chaotic chat screenshot queues with a structured review pipeline, South Asian welfare teams can handle high donation volumes and verify field deliveries cleanly.'
  },
  'asia-pacific': {
    title: 'Real-World Use Case for Asia Pacific Community Giving',
    problemStatement: 'Islamic organizations and Korban/Qurbani committees across Asia Pacific handle distributed volunteer networks, vendor slaughterhouse tracking, and community Zakat distributions that require synchronized field communication and clear record-keeping.',
    description: 'An operational flow demonstrating how Asia Pacific community charities can manage Korban shares, volunteer shifts, and donor certificates.',
    steps: [
      { stepNumber: 1, name: 'Korban Share Booking', detail: 'Register Korban/Udhiyah orders and assign shares to specific vendor partners.', moduleName: 'Qurbani Lifecycle', moduleSlug: 'qurbani-lifecycle' },
      { stepNumber: 2, name: 'Electronic Payment Verification', detail: 'Review online bank deposits and electronic transfer confirmations.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Volunteer Shift Assignment', detail: 'Deploy volunteer teams to distribution points with clear task guidelines.', moduleName: 'Volunteer Coordination', moduleSlug: 'volunteer-coordination' },
      { stepNumber: 4, name: 'Vendor Fulfillment Proof', detail: 'Collect slaughterhouse timestamps and vendor delivery receipts.', moduleName: 'Vendor Fulfillment', moduleSlug: 'vendor-fulfillment' },
      { stepNumber: 5, name: 'Donor Certificate Generation', detail: 'Issue verified digital completion certificates and impact cards to donors.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Executive Summary Pack', detail: 'Compile campaign performance metrics for organizational leadership.', moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
    ],
    outcome: 'Organizations across the Asia Pacific region gain clear visibility over volunteer deployments, vendor fulfillment, and donor receipts in one unified platform.'
  },
  'africa': {
    title: 'Example: How Sidqly Could Support African Relief Operations',
    problemStatement: 'Charities and community trusts operating across African regions manage remote water, food, and seasonal campaigns, where receiving field proof from local suppliers and communicating impact to distant donors while preserving beneficiary dignity is challenging.',
    description: 'A realistic workflow showing how field relief teams in Africa can coordinate with vendors, review evidence, and update international donors securely.',
    steps: [
      { stepNumber: 1, name: 'Relief Campaign Launch', detail: 'Establish project objectives and funding goals for water wells or food distribution.', moduleName: 'Sadaqah Campaigns', moduleSlug: 'sadaqah-campaigns' },
      { stepNumber: 2, name: 'International Wire Verification', detail: 'Match overseas bank wire transfers and donor submissions to project accounts.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Vendor Task Assignment', detail: 'Assign drilling or supply tasks to local vendors via a dedicated portal.', moduleName: 'Vendor Fulfillment', moduleSlug: 'vendor-fulfillment' },
      { stepNumber: 4, name: 'Field Evidence Review', detail: 'Examine field photos, GPS coordinates, and completion timestamps.', moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
      { stepNumber: 5, name: 'Encrypted Donor Updates', detail: 'Generate restricted update links for international sponsors protecting recipient dignity.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Audit Record Export', detail: 'Store permanent audit trails of all approvals and disbursements.', moduleName: 'Audit-Ready Records', moduleSlug: 'audit-ready-records' }
    ],
    outcome: 'Connecting vendor proof submission with multi-stage verification allows field teams in Africa to share clear, dignity-safe progress reports with international supporters.'
  }
};

// Function to generate location-specific use case for any country or city
function getOrGenerateUseCase(record) {
  if (useCaseDefinitions[record.slug]) {
    return useCaseDefinitions[record.slug];
  }

  const name = record.cityName || record.country || record.region;
  const isCity = record.pageType === 'city';
  const isCountry = record.pageType === 'country';

  // Customize based on country / city / region characteristics
  if (record.slug === 'karachi-islamic-charity-software') {
    return {
      title: 'Real-World Use Case for Karachi: Ramadan Ration Distribution',
      problemStatement: 'A Karachi welfare committee running a Ramadan food drive may receive hundreds of donation screenshots over WhatsApp, EasyPaisa, JazzCash, and bank transfers, making payment verification, ration pack allocation, field proof collection, and donor reporting difficult to manage across scattered chats.',
      description: 'A complete operational workflow showing how a Karachi charity could organize Ramadan ration distribution from payment proof to donor updates.',
      steps: [
        { stepNumber: 1, name: 'Campaign & Target Planning', detail: 'Configure ration pack targets and neighborhood distribution lists across Karachi.', moduleName: 'Sadaqah Campaigns', moduleSlug: 'sadaqah-campaigns' },
        { stepNumber: 2, name: 'Mobile Transfer Review', detail: 'Review incoming EasyPaisa, JazzCash, and bank transfer receipts in a structured queue.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
        { stepNumber: 3, name: 'Ration Pack Procurement', detail: 'Issue tracked purchase orders to wholesale food vendors in Karachi markets.', moduleName: 'Ramadan Meals and Ration Packs', moduleSlug: 'ramadan-meals-rations' },
        { stepNumber: 4, name: 'Recipient Dignity Check', detail: 'Verify field delivery photos while automatically protecting beneficiary faces.', moduleName: 'Privacy and Dignity Controls', moduleSlug: 'privacy-dignity-controls' },
        { stepNumber: 5, name: 'Dignity-Safe Donor Update', detail: 'Send verified impact updates and receipts directly to contributing donors.', moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
        { stepNumber: 6, name: 'Committee Board Report', detail: 'Export audit-ready financial and distribution balance sheets for committee trustees.', moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
      ],
      outcome: 'Instead of managing donation receipts and delivery photos across WhatsApp groups, the organization maintains a connected workflow that ensures every donation is verified, allocated, and reported transparently.'
    };
  }

  if (record.slug === 'dubai-islamic-charity-software') {
    return {
      title: 'Real-World Use Case for Dubai: Ramadan & Zakat Donor Operations',
      problemStatement: 'A Dubai-based nonprofit coordinating Ramadan Iftar meals and Zakat campaigns receives contributions from major corporate donors, wire transfers, and community members, making payment verification, vendor meal delivery tracking, and board-ready reporting difficult to synchronize.',
      description: 'An operational scenario demonstrating how a Dubai Islamic organization could streamline Zakat collections, vendor Iftar catering, and corporate CSR reporting.',
      steps: [
        { stepNumber: 1, name: 'Zakat & CSR Campaign Setup', detail: 'Establish designated Zakat fund accounts and corporate sponsorship tiers.', moduleName: 'Zakat Fund Separation', moduleSlug: 'zakat-fund-separation' },
        { stepNumber: 2, name: 'Wire & Payment Verification', detail: 'Verify bank deposit records and electronic payment confirmations manually.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
        { stepNumber: 3, name: 'Vendor Meal Allocation', detail: 'Assign Iftar meal counts and delivery schedules to licensed Dubai caterers.', moduleName: 'Vendor Fulfillment', moduleSlug: 'vendor-fulfillment' },
        { stepNumber: 4, name: 'Field Proof Review', detail: 'Inspect delivery timestamps and vendor proof photos in an internal queue.', moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
        { stepNumber: 5, name: 'Corporate Impact Reporting', detail: 'Generate executive CSR summary decks for corporate sponsors without exposing private recipient data.', moduleName: 'Corporate CSR / Zakat Reporting', moduleSlug: 'corporate-csr-zakat' },
        { stepNumber: 6, name: 'Board Audit Trail Export', detail: 'Compile permanent timestamped audit logs for internal governance.', moduleName: 'Audit-Ready Records', moduleSlug: 'audit-ready-records' }
      ],
      outcome: 'Instead of handling donor updates and vendor coordination through separate channels, the organization connects donation verification, meal delivery proof, and corporate CSR reporting into one clear process.'
    };
  }

  if (record.slug === 'london-islamic-charity-software') {
    return {
      title: 'Real-World Use Case for London: Multi-Campaign Ramadan & Relief Workflow',
      problemStatement: 'A London Islamic charity running concurrent Ramadan campaigns, local food bank drives, and international relief appeals receives thousands of direct UK bank transfers (BACS/Faster Payments), making donation verification, volunteer coordination, field proof review, and trustee governance hard to manage.',
      description: 'A step-by-step operational workflow for a London charity managing peak seasonal appeals, volunteer shifts, and trustee board reporting.',
      steps: [
        { stepNumber: 1, name: 'Campaign Appeal Launch', detail: 'Launch designated Zakat and Sadaqah appeals for London community donors.', moduleName: 'Sadaqah Campaigns', moduleSlug: 'sadaqah-campaigns' },
        { stepNumber: 2, name: 'UK Bank Transfer Verification', detail: 'Verify incoming direct bank transfer receipts and match donor references.', moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
        { stepNumber: 3, name: 'Volunteer Shift Assignment', detail: 'Deploy local volunteers for food bank packing and distribution tasks.', moduleName: 'Volunteer Coordination', moduleSlug: 'volunteer-coordination' },
        { stepNumber: 4, name: 'Recipient Dignity Check', detail: 'Filter and obscure sensitive recipient faces collected from distribution sites.', moduleName: 'Privacy and Dignity Controls', moduleSlug: 'privacy-dignity-controls' },
        { stepNumber: 5, name: 'Donor Update Generation', detail: 'Distribute dignity-safe digital impact updates and receipts to UK supporters.', moduleName: 'Donor Communication', moduleSlug: 'donor-communication' },
        { stepNumber: 6, name: 'Trustee Board Pack Export', detail: 'Compile audit-friendly financial summaries for charity trustee governance meetings.', moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
      ],
      outcome: 'Instead of managing bank reconciliation, volunteer schedules, and trustee reports on separate systems, the charity maintains a unified workflow that keeps campaign data clear, accurate, and audit-ready.'
    };
  }

  // Generic fallback generator tailored specifically by location type and geography
  const locName = name;
  let scenarioType = 'Community Welfare & Zakat Operations';
  let problemDetails = `An organization operating in ${locName} may receive campaign donations through bank transfers and direct deposits, making payment verification, fulfillment tracking, proof collection, and donor reporting difficult to coordinate across scattered tools.`;
  let outcomeDetails = `Instead of managing these steps separately, the organization can keep the campaign workflow connected in Sidqly, making it easier to track donations, fulfillment, proof, and reporting.`;

  if (record.country === 'Pakistan' || record.slug.includes('pakistan') || record.slug.includes('lahore') || record.slug.includes('islamabad')) {
    scenarioType = 'Ramadan Ration Pack & Zakat Distribution';
    problemDetails = `A local welfare organization serving ${locName} running a Ramadan ration pack drive may receive donations through mobile transfers (EasyPaisa/JazzCash) and direct bank deposits, making payment verification, wholesale procurement, delivery proof, and donor updates hard to coordinate.`;
  } else if (record.country === 'United States' || record.country === 'Canada' || record.region === 'North America') {
    scenarioType = 'Mosque Zakat & Community Assistance Workflow';
    problemDetails = `An Islamic center or charity in ${locName} receiving hardship applications and donor contributions via ACH, Zelle, or e-Transfers may struggle to verify payments, maintain strict Zakat fund separation, protect applicant privacy, and generate clean board balance sheets.`;
  } else if (record.country === 'United Kingdom') {
    scenarioType = 'Ramadan Appeal & Local Community Welfare';
    problemDetails = `A charity operating in ${locName} managing seasonal appeals and local community aid may receive direct bank transfers with missing references, making manual payment reconciliation, volunteer shift deployment, and trustee board reporting time-consuming.`;
  } else if (record.region === 'Gulf' || record.country === 'United Arab Emirates' || record.country === 'Saudi Arabia' || record.country === 'Qatar' || record.country === 'Kuwait' || record.country === 'Bahrain' || record.country === 'Oman') {
    scenarioType = 'Qurbani Share & Seasonal Giving Operations';
    problemDetails = `An organization managing Qurbani shares and Ramadan distributions in ${locName} may receive high volumes of bank wire receipts during peak holiday periods, making vendor slaughterhouse assignments, field proof review, and donor notifications chaotic.`;
  }

  return {
    title: `Example: How Sidqly Could Support ${locName} Operations`,
    problemStatement: problemDetails,
    description: `A practical operational scenario illustrating how an organization in ${locName} could manage ${scenarioType.toLowerCase()} using Sidqly modules.`,
    steps: [
      { stepNumber: 1, name: 'Campaign Planning & Intake', detail: `Configure designated giving appeals and intake requirements for ${locName}.`, moduleName: 'Charity Request Intake', moduleSlug: 'charity-request-intake' },
      { stepNumber: 2, name: 'Payment Proof Verification', detail: `Review direct deposit receipts, bank transfers, and payment confirmations in a structured queue.`, moduleName: 'Manual Payment Review', moduleSlug: 'manual-payment-review' },
      { stepNumber: 3, name: 'Zakat & Fund Allocation', detail: `Tag donations to specific fund ledgers to keep Zakat separate from general Sadaqah.`, moduleName: 'Zakat Fund Separation', moduleSlug: 'zakat-fund-separation' },
      { stepNumber: 4, name: 'Field Fulfillment & Proof', detail: `Assign fulfillment tasks to staff or vendors and collect timestamped delivery photos.`, moduleName: 'Proof Trust Engine', moduleSlug: 'proof-trust-engine' },
      { stepNumber: 5, name: 'Dignity-Safe Donor Update', detail: `Generate encrypted impact updates for donors while enforcing recipient face-blurring and privacy.`, moduleName: 'Donor-Safe Impact Updates', moduleSlug: 'donor-safe-updates' },
      { stepNumber: 6, name: 'Board Reporting & Audits', detail: `Export structured balance sheets and governance summaries for committee review.`, moduleName: 'Reports and Board Packs', moduleSlug: 'reports-board-packs' }
    ],
    outcome: outcomeDetails
  };
}

// Function to construct relevantModules array
function buildRelevantModules(useCase) {
  const modMap = {
    'manual-payment-review': { label: 'Manual Payment Review', href: '/modules/manual-payment-review', description: 'Review donor bank transfer screenshots and deposit receipts in a structured queue.' },
    'proof-trust-engine': { label: 'Proof Trust Engine', href: '/modules/proof-trust-engine', description: 'Verify field proof photos and enforce dignity controls prior to donor sharing.' },
    'donor-safe-updates': { label: 'Donor-Safe Impact Updates', href: '/modules/donor-safe-updates', description: 'Send secure, dignity-safe campaign updates to donors using restricted links.' },
    'zakat-fund-separation': { label: 'Zakat Fund Separation', href: '/modules/zakat-fund-separation', description: 'Maintain strict operational ledger boundaries between Zakat and Sadaqah funds.' },
    'sadaqah-campaigns': { label: 'Sadaqah Campaigns', href: '/modules/sadaqah-campaigns', description: 'Track general giving projects, emergency relief, and community appeals.' },
    'qurbani-lifecycle': { label: 'Qurbani Lifecycle', href: '/modules/qurbani-lifecycle', description: 'Coordinate Udhiyah share orders, slaughterhouse allocation, and vendor proof.' },
    'ramadan-meals-rations': { label: 'Ramadan Meals and Ration Packs', href: '/modules/ramadan-meals-rations', description: 'Organize ration bag distribution, Iftar meal batching, and volunteer routes.' },
    'charity-request-intake': { label: 'Charity Request Intake', href: '/modules/charity-request-intake', description: 'Process family hardship applications while protecting sensitive applicant data.' },
    'vendor-fulfillment': { label: 'Vendor Fulfillment', href: '/modules/vendor-fulfillment', description: 'Assign tasks to vendors and suppliers and collect delivery confirmations.' },
    'volunteer-coordination': { label: 'Volunteer Coordination', href: '/modules/volunteer-coordination', description: 'Deploy volunteer teams, assign field tasks, and track activity completion.' },
    'corporate-csr-zakat': { label: 'Corporate CSR / Zakat Reporting', href: '/modules/corporate-csr-zakat', description: 'Generate executive PDF summary reports for corporate sponsors and patrons.' },
    'reports-board-packs': { label: 'Reports and Board Packs', href: '/modules/reports-board-packs', description: 'Compile structured financial and operational balance sheets for leadership.' },
    'privacy-dignity-controls': { label: 'Privacy and Dignity Controls', href: '/modules/privacy-dignity-controls', description: 'Enforce automatic face-blurring and access role boundaries.' },
    'audit-ready-records': { label: 'Audit-Ready Records', href: '/modules/audit-ready-records', description: 'Maintain permanent timestamped logs for internal governance and compliance.' },
    'donor-communication': { label: 'Donor Communication', href: '/modules/donor-communication', description: 'Deliver clear, dignified follow-ups and campaign progress updates to supporters.' }
  };

  const relevant = [];
  const added = new Set();

  if (useCase.steps) {
    for (const step of useCase.steps) {
      if (step.moduleSlug && modMap[step.moduleSlug] && !added.has(step.moduleSlug)) {
        relevant.push(modMap[step.moduleSlug]);
        added.add(step.moduleSlug);
      }
    }
  }

  // Ensure 3-4 modules
  const fallbacks = ['manual-payment-review', 'proof-trust-engine', 'donor-safe-updates', 'reports-board-packs'];
  for (const f of fallbacks) {
    if (relevant.length < 4 && !added.has(f) && modMap[f]) {
      relevant.push(modMap[f]);
      added.add(f);
    }
  }

  return relevant.slice(0, 4);
}

// Transform records
function processRecords(records) {
  return records.map(record => {
    const uc = getOrGenerateUseCase(record);
    const relevantModules = buildRelevantModules(uc);

    const updatedUseCase = {
      title: uc.title,
      problemStatement: uc.problemStatement,
      description: uc.description,
      steps: uc.steps,
      outcome: uc.outcome,
      relevantModules: relevantModules
    };

    return {
      ...record,
      locationUseCase: updatedUseCase
    };
  });
}

const updatedRegions = processRecords(regionsData);
const updatedCountries = processRecords(countriesData);
const updatedCities = processRecords(cityContentTier1);

console.log('Processed:', updatedRegions.length, 'regions,', updatedCountries.length, 'countries,', updatedCities.length, 'cities.');

// Write back to .ts and .js files
function writeFiles(filenameBase, varName, data) {
  const tsPath = path.join(projectRoot, 'src', 'data', 'locations', `${filenameBase}.ts`);
  const jsPath = path.join(projectRoot, 'src', 'data', 'locations', `${filenameBase}.js`);

  const tsContent = `import type { LocationRecord } from './locationTypes';\n\nexport const ${varName}: LocationRecord[] = ${JSON.stringify(data, null, 2)};\n`;
  const jsContent = `export var ${varName} = ${JSON.stringify(data, null, 2)};\n`;

  fs.writeFileSync(tsPath, tsContent, 'utf8');
  fs.writeFileSync(jsPath, jsContent, 'utf8');
  console.log(`Updated ${tsPath} and ${jsPath}`);
}

writeFiles('regions', 'regionsData', updatedRegions);
writeFiles('countries', 'countriesData', updatedCountries);
writeFiles('cityContentTier1', 'cityContentTier1', updatedCities);

console.log('Location data update complete!');
