/**
 * Sidqly 6 Core Operational Workflows Configuration
 *
 * Enforces structured schema mapping for automatic ELKjs layouts and interactive React Flow rendering.
 */

export interface WorkflowNode {
  id: string;
  label: string;
  role: string;
  input: string;
  output: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  description: string;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}

export interface WorkflowConfig {
  id: string;
  title: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  svgFallback: string; // Plain SVG code for static pre-rendering and non-JS clients
}

export const workflows: WorkflowConfig[] = [
  {
    id: "donation-lifecycle",
    title: "General Donation Lifecycle",
    description: "The end-to-end trace of a donation from donor intention and payment verification through field delivery and privacy-safe proof reporting.",
    nodes: [
      { id: "1", label: "Receive Intention", role: "Donor", input: "Intention & Cash/Transfer", output: "Digital Record Pending", status: "Completed", description: "Donor specifies donation category (Zakat, Sadaqah, Qurbani) and submits the transaction." },
      { id: "2", label: "Verify Payment", role: "Finance Team", input: "Bank Statement & Screenshot", output: "Reconciled Status", status: "Completed", description: "Staff manually match bank statements to the submitted proof receipt to avoid phantom donations." },
      { id: "3", label: "Categorize Fund", role: "System Administrator", input: "Verified Deposit", output: "Assigned Wallet ID", status: "Completed", description: "Logical separation rules are applied so that funds are allocated to the correct isolated ledger (e.g. Zakat vs Sadaqah)." },
      { id: "4", label: "Allocate Budget", role: "Management", input: "Campaign Ledger", output: "Fulfillment Fund", status: "In Progress", description: "Aggregated donations are allocated to active projects based on community priority and budget rules." },
      { id: "5", label: "Assign Task", role: "Operations Lead", input: "Fulfillment Target", output: "Volunteer/Vendor Order", status: "In Progress", description: "Tasks (e.g., distributing 10 ration packs) are assigned to volunteers or vendors with row-level restrictions." },
      { id: "6", label: "Deliver Aid", role: "Volunteer / Vendor", input: "Assigned Work Order", output: "Physical Delivery", status: "Pending", description: "Fulfillment partner delivers resources on the ground following strict dignity guidelines." },
      { id: "7", label: "Review Proof", role: "Auditor Desk", input: "Raw Photos & Receipts", output: "Verified Evidence", status: "Pending", description: "The field evidence (slaughter pictures or delivery sign-offs) are manually audited for compliance." },
      { id: "8", label: "Protect Information", role: "Dignity Controller", input: "Raw Evidence", output: "Anonymized Output", status: "Pending", description: "Sensitive recipient details are scrubbed and automated face-blurring is applied to protect recipient modesty." },
      { id: "9", label: "Update Donor", role: "Communications Team", input: "Anonymized Evidence Pack", output: "Impact Notification", status: "Pending", description: "Donor receives a professional, secure portal link with verified proof, completing the circle of trust (Amanah)." }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
      { id: "e4-5", source: "4", target: "5" },
      { id: "e5-6", source: "5", target: "6" },
      { id: "e6-7", source: "6", target: "7" },
      { id: "e7-8", source: "7", target: "8" },
      { id: "e8-9", source: "8", target: "9" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="90" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="55" y="64" fill="white" text-anchor="middle">1. Receive Intention</text>
        <line x1="100" y1="60" x2="120" y2="60" stroke="#0F4D3E" stroke-width="2" marker-end="url(#arrow)" />

        <rect x="120" y="35" width="90" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="165" y="64" fill="white" text-anchor="middle">2. Verify Payment</text>
        <line x1="210" y1="60" x2="230" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="230" y="35" width="90" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="275" y="64" fill="white" text-anchor="middle">3. Categorize Fund</text>
        <line x1="320" y1="60" x2="340" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="340" y="35" width="90" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="385" y="64" fill="#0F4D3E" text-anchor="middle">4. Allocate Budget</text>
        <line x1="430" y1="60" x2="450" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="450" y="35" width="90" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="495" y="64" fill="#0F4D3E" text-anchor="middle">5. Assign Task</text>
        <line x1="540" y1="60" x2="560" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="560" y="35" width="90" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="605" y="64" fill="#0F4D3E" text-anchor="middle">6. Deliver Aid</text>
        <line x1="650" y1="60" x2="670" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="670" y="35" width="90" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="715" y="64" fill="#0F4D3E" text-anchor="middle">7. Review Proof</text>
        <line x1="760" y1="60" x2="780" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="780" y="35" width="90" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="825" y="64" fill="#0F4D3E" text-anchor="middle">8. Protect Privacy</text>
        <line x1="870" y1="60" x2="890" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="890" y="35" width="100" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="940" y="64" fill="#0F4D3E" text-anchor="middle">9. Update Donor</text>
      </g>
    </svg>`
  },
  {
    id: "zakat-lifecycle",
    title: "Zakat Allocation & Eligibility Workflow",
    description: "Ensures compliance with Shariah guidelines, checking recipient eligibility, managing screening criteria, calculating nisab thresholds, and establishing verified ledger separation.",
    nodes: [
      { id: "1", label: "Check Eligibility", role: "Scholarly Board", input: "Zakat Mandate Criteria", output: "Approved Criteria Form", status: "Completed", description: "Establish strict Shariah-compliant screening definitions of who constitutes a valid recipient (Masarif-e-Zakat)." },
      { id: "2", label: "Screen Requester", role: "Case Worker", input: "Applicant File", output: "Screened Status Log", status: "Completed", description: "Verify that the applicant does not possess wealth above the Nisab threshold to qualify." },
      { id: "3", label: "Verify Wealth", role: "Verification Officer", input: "Bank Statements/Assets", output: "Verified Asset Balance", status: "Completed", description: "Officer reviews evidence of cash, gold, silver, and commercial assets manually to ensure total precision." },
      { id: "4", label: "Calculate Nisab", role: "Operations Lead", input: "Current Gold/Silver Rate", output: "Qualifying Statement", status: "Completed", description: "Compare applicant wealth with gold and silver Nisab benchmarks to double check eligibility." },
      { id: "5", label: "Separate Funds", role: "Finance Team", input: "Isolated Ledger ID", output: "Sadaqah/Zakat Division", status: "In Progress", description: "Finance applies strict logical gates so Zakat funds are never combined or mixed with other donations." },
      { id: "6", label: "Disburse Aid", role: "Disbursing Officer", input: "Allocated Cash/Resource", output: "Direct Recipient Handover", status: "Pending", description: "Direct transfer of wealth to the beneficiary, satisfying ownership rules (Tamleek) completely." },
      { id: "7", label: "Verify Receipt", role: "Auditor Desk", input: "Handover Receipt", output: "Tamleek Certification", status: "Pending", description: "Verify recipient confirmation to ensure the disbursement safely reached the intended beneficiary." },
      { id: "8", label: "Shariah Audit Trail", role: "Scholarly Board", input: "Completed Transaction Logs", output: "Audited Ledger Certification", status: "Pending", description: "Prepare complete, row-restricted reports for Shariah auditors, assuring total operational purity." }
    ],
    edges: [
      { id: "z1-2", source: "1", target: "2" },
      { id: "z2-3", source: "2", target: "3" },
      { id: "z3-4", source: "3", target: "4" },
      { id: "z4-5", source: "4", target: "5" },
      { id: "z5-6", source: "5", target: "6" },
      { id: "z6-7", source: "6", target: "7" },
      { id: "z7-8", source: "7", target: "8" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="62" y="64" fill="white" text-anchor="middle">1. Check Eligibility</text>
        <line x1="115" y1="60" x2="135" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="135" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="187" y="64" fill="white" text-anchor="middle">2. Screen Requester</text>
        <line x1="240" y1="60" x2="260" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="260" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="312" y="64" fill="white" text-anchor="middle">3. Verify Wealth</text>
        <line x1="365" y1="60" x2="385" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="385" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="437" y="64" fill="white" text-anchor="middle">4. Calculate Nisab</text>
        <line x1="490" y1="60" x2="510" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="510" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="562" y="64" fill="#0F4D3E" text-anchor="middle">5. Separate Funds</text>
        <line x1="615" y1="60" x2="635" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="635" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="687" y="64" fill="#0F4D3E" text-anchor="middle">6. Disburse Aid</text>
        <line x1="740" y1="60" x2="760" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="760" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="812" y="64" fill="#0F4D3E" text-anchor="middle">7. Verify Receipt</text>
        <line x1="865" y1="60" x2="885" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="885" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="937" y="64" fill="#0F4D3E" text-anchor="middle">8. Shariah Audit</text>
      </g>
    </svg>`
  },
  {
    id: "qurbani-fulfillment",
    title: "Qurbani Fulfillment & Vendor Tracking",
    description: "Tracks livestock ordering, share separation, vendor status checklists, visual proof uploads, and digital donor slaughter certificate archiving.",
    nodes: [
      { id: "1", label: "Order Shares", role: "Donor", input: "Desired Animals & Portions", output: "Logged Share Inventory", status: "Completed", description: "Donors order animals or individual portion shares for local or international campaigns." },
      { id: "2", label: "Assign Vendor", role: "Operations Lead", input: "Aggregate Portion Demand", output: "Vendor Purchase Agreement", status: "Completed", description: "Aggregate volume orders are dispatched to trusted local vendors and farmers with strict SLAs." },
      { id: "3", label: "Slaughter Oversight", role: "Field Inspector", input: "Slaughter Checklist", output: "Completed Status Tag", status: "In Progress", description: "Sourcing and sanitary regulations are reviewed during slaughter times (days of Tashreeq)." },
      { id: "4", label: "Upload Proof", role: "Field Worker", input: "Livestock Photos/Videos", output: "Raw Media Files", status: "In Progress", description: "Volunteers upload visual assets directly to Sidqly's task boards to confirm completion." },
      { id: "5", label: "Verify Share Quality", role: "Auditor Desk", input: "Evidence Review Flow", output: "Verified Quality Status", status: "Pending", description: "Audit managers verify livestock health records and distribution weight files." },
      { id: "6", label: "Pack & Distribute", role: "Volunteer", input: "Chilled Sliced Portions", output: "Completed Drop-offs", status: "Pending", description: "Aid packs are compiled and delivered directly to high-need families with row-restricted maps." },
      { id: "7", label: "Generate Certificate", role: "System Administrator", input: "Verified Slaughter Record", output: "Donor Slaughter Certificate", status: "Pending", description: "Branded, personalized certificates with verified times and locations are compiled automatically." },
      { id: "8", label: "Archive Audit Log", role: "Auditor Desk", input: "Certificates & Vendor Logs", output: "Permanent Campaign Archive", status: "Pending", description: "Compile final records for subsequent trustee, compliance, and donor audit reviews." }
    ],
    edges: [
      { id: "q1-2", source: "1", target: "2" },
      { id: "q2-3", source: "2", target: "3" },
      { id: "q3-4", source: "3", target: "4" },
      { id: "q4-5", source: "4", target: "5" },
      { id: "q5-6", source: "5", target: "6" },
      { id: "q6-7", source: "6", target: "7" },
      { id: "q7-8", source: "7", target: "8" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="62" y="64" fill="white" text-anchor="middle">1. Order Shares</text>
        <line x1="115" y1="60" x2="135" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="135" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="187" y="64" fill="white" text-anchor="middle">2. Assign Vendor</text>
        <line x1="240" y1="60" x2="260" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="260" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="312" y="64" fill="#0F4D3E" text-anchor="middle">3. Slaughter Oversight</text>
        <line x1="365" y1="60" x2="385" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="385" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="437" y="64" fill="#0F4D3E" text-anchor="middle">4. Upload Proof</text>
        <line x1="490" y1="60" x2="510" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="510" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="562" y="64" fill="#0F4D3E" text-anchor="middle">5. Verify Share Quality</text>
        <line x1="615" y1="60" x2="635" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="635" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="687" y="64" fill="#0F4D3E" text-anchor="middle">6. Pack & Distribute</text>
        <line x1="740" y1="60" x2="760" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="760" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="812" y="64" fill="#0F4D3E" text-anchor="middle">7. Generate Certificate</text>
        <line x1="865" y1="60" x2="885" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="885" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="937" y="64" fill="#0F4D3E" text-anchor="middle">8. Archive Audit Log</text>
      </g>
    </svg>`
  },
  {
    id: "ramadan-distribution",
    title: "Ramadan Distribution & Volunteer Flow",
    description: "Supports hot meal deliveries and dry ration pack sourcing, volunteer logistics, map routing optimizations, and progress boards.",
    nodes: [
      { id: "1", label: "Campaign Setup", role: "Management", input: "Ramadan Sourcing Targets", output: "Active Campaign Slate", status: "Completed", description: "Design feed-a-family goals and assign coordinate lists." },
      { id: "2", label: "Order Ration Meals", role: "Sourcing Manager", input: "Supplier Catalog", output: "Purchased Ingredients", status: "Completed", description: "Ingredients or bulk pre-packed rations are secured from trusted vendors with specific SLAs." },
      { id: "3", label: "Design Delivery Routes", role: "Operations Lead", input: "Recipient Demographics", output: "Optimized Route Map", status: "Completed", description: "Schedules and route directions are optimized to reduce travel time and ensure fresh delivery." },
      { id: "4", label: "Volunteer Assignment", role: "Volunteer Coordinator", input: "Volunteer List", output: "Dispatched Drivers", status: "In Progress", description: "Volunteers receive isolated task cards via our secure board view, restricting access to private recipient addresses." },
      { id: "5", label: "Deliver Packages", role: "Volunteer", input: "Ration Packs & App Map", output: "Aid Handovers", status: "In Progress", description: "Drivers execute distribution runs on the ground, logging drop-off statuses in real-time." },
      { id: "6", label: "Capture Delivery Proof", role: "Volunteer", input: "Handover Photo / Receipt", output: "Raw Delivery Evidence", status: "Pending", description: "Field workers photograph packaging drop-offs or verify confirmation on-site." },
      { id: "7", label: "Anonymize Photos", role: "Dignity Controller", input: "Raw Photos", output: "Blurred Images", status: "Pending", description: "Automated filters blur names and facial features to prevent accidental exposure of private data." },
      { id: "8", label: "Compile Donor Update", role: "Communications Team", input: "Anonymized Proof Items", output: "Finished Impact Report", status: "Pending", description: "Sponsors are updated with aggregate data, preserving absolute beneficiary safety." }
    ],
    edges: [
      { id: "r1-2", source: "1", target: "2" },
      { id: "r2-3", source: "2", target: "3" },
      { id: "r3-4", source: "3", target: "4" },
      { id: "r4-5", source: "4", target: "5" },
      { id: "r5-6", source: "5", target: "6" },
      { id: "r6-7", source: "6", target: "7" },
      { id: "r7-8", source: "7", target: "8" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="62" y="64" fill="white" text-anchor="middle">1. Campaign Setup</text>
        <line x1="115" y1="60" x2="135" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="135" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="187" y="64" fill="white" text-anchor="middle">2. Sourcing Meals</text>
        <line x1="240" y1="60" x2="260" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="260" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="312" y="64" fill="white" text-anchor="middle">3. Route Design</text>
        <line x1="365" y1="60" x2="385" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="385" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="437" y="64" fill="#0F4D3E" text-anchor="middle">4. Volunteer Assign</text>
        <line x1="490" y1="60" x2="510" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="510" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="562" y="64" fill="#0F4D3E" text-anchor="middle">5. Deliver Packages</text>
        <line x1="615" y1="60" x2="635" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="635" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="687" y="64" fill="#0F4D3E" text-anchor="middle">6. Capture Proof</text>
        <line x1="740" y1="60" x2="760" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="760" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="812" y="64" fill="#0F4D3E" text-anchor="middle">7. Anonymize Photos</text>
        <line x1="865" y1="60" x2="885" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="885" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="937" y="64" fill="#0F4D3E" text-anchor="middle">8. Donor Update</text>
      </g>
    </svg>`
  },
  {
    id: "recipient-privacy",
    title: "Recipient Privacy & Dignity Review",
    description: "Our strict visual and metadata auditing flow to ensure recipient modesty and dignity are protected before sharing evidence with sponsors.",
    nodes: [
      { id: "1", label: "Field Upload", role: "Field Worker", input: "Raw Device Photo", output: "Pending Verification", status: "Completed", description: "Volunteers upload original evidence photos straight from distribution points." },
      { id: "2", label: "Face Detection", role: "Dignity Controller", input: "Pending Verification", output: "Identified Regions", status: "Completed", description: "System detects areas containing facial, local, or text details to prevent accidental exposure." },
      { id: "3", label: "Automatic Blurring", role: "System Administrator", input: "Identified Regions", output: "Candidate Blurred Image", status: "Completed", description: "Strict filters blur features instantly, hiding sensitive beneficiary details." },
      { id: "4", label: "Manual Approval Gate", role: "Dignity Controller", input: "Candidate Blurred Image", output: "Approved Anonymized File", status: "In Progress", description: "A dignity controller reviews the anonymized image manually before releasing it." },
      { id: "5", label: "Remove EXIF Metadata", role: "System Administrator", input: "Approved Anonymized File", output: "Sanitized Asset File", status: "Pending", description: "All GPS coordinates, device identifiers, and timestamp metadata are stripped from files." },
      { id: "6", label: "Encrypted Rest Storage", role: "System Administrator", input: "Sanitized Asset File", output: "Secured Binary Storage", status: "Pending", description: "Assets are stored using state-of-the-art AES-256 encryption." },
      { id: "7", label: "Role-Based Viewing Only", role: "System Administrator", input: "Secured Binary Storage", output: "Restricted View Access", status: "Pending", description: "Only approved admins can access raw files. General staff and sponsors only see anonymized, sanitized visuals." },
      { id: "8", label: "Protected Export", role: "Communications Team", input: "Restricted View Access", output: "Dignity-Safe Donor Report", status: "Pending", description: "Export professional impact documents with zero private data elements, assuring ultimate peace of mind." }
    ],
    edges: [
      { id: "p1-2", source: "1", target: "2" },
      { id: "p2-3", source: "2", target: "3" },
      { id: "p3-4", source: "3", target: "4" },
      { id: "p4-5", source: "4", target: "5" },
      { id: "p5-6", source: "5", target: "6" },
      { id: "p6-7", source: "6", target: "7" },
      { id: "p7-8", source: "7", target: "8" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="62" y="64" fill="white" text-anchor="middle">1. Field Upload</text>
        <line x1="115" y1="60" x2="135" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="135" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="187" y="64" fill="white" text-anchor="middle">2. Face Detection</text>
        <line x1="240" y1="60" x2="260" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="260" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="312" y="64" fill="white" text-anchor="middle">3. Auto Blurring</text>
        <line x1="365" y1="60" x2="385" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="385" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="437" y="64" fill="#0F4D3E" text-anchor="middle">4. Manual Gate</text>
        <line x1="490" y1="60" x2="510" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="510" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="562" y="64" fill="#0F4D3E" text-anchor="middle">5. Remove EXIF</text>
        <line x1="615" y1="60" x2="635" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="635" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="687" y="64" fill="#0F4D3E" text-anchor="middle">6. Encrypted Storage</text>
        <line x1="740" y1="60" x2="760" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="760" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="812" y="64" fill="#0F4D3E" text-anchor="middle">7. Role-Based View</text>
        <line x1="865" y1="60" x2="885" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="885" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="937" y="64" fill="#0F4D3E" text-anchor="middle">8. Protected Export</text>
      </g>
    </svg>`
  },
  {
    id: "onboarding-migration",
    title: "Organization Onboarding & Data Migration",
    description: "Detailed setup sequence transitioning teams from chaotic spreadsheets and WhatsApp files into professional sandbox ledgers securely.",
    nodes: [
      { id: "1", label: "Submit Intake", role: "Organization Lead", input: "Inquiry Form Details", output: "Form Review Ticket", status: "Completed", description: "Fill our pilot or demo request forms detailing team size, volume, and active giving modules." },
      { id: "2", label: "Process Review", role: "Migration Specialist", input: "Form Review Ticket", output: "Roadmap Assessment", status: "Completed", description: "Our team assesses your exact needs and designs an implementation plan." },
      { id: "3", label: "Schedule Onboarding", role: "Migration Specialist", input: "Roadmap Assessment", output: "Onboarding Call Event", status: "Completed", description: "Launch kick-off calls with your team leads to align expectations." },
      { id: "4", label: "Map Excel Spreadsheets", role: "SaaS Engineer", input: "Legacy Excel/WhatsApp Backups", output: "Formatted SQLite Tables", status: "Completed", description: "Our migration team cleans and formats legacy donor and requester files securely." },
      { id: "5", label: "Verify Cleanliness", role: "Auditor Desk", input: "Formatted SQLite Tables", output: "Clean Database Output", status: "In Progress", description: "Verify ledger balances and de-duplicate contacts to prevent overlaps." },
      { id: "6", label: "Deploy Sandbox", role: "SaaS Engineer", input: "Clean Database Output", output: "Active Client Workspace", status: "Pending", description: "Launch your private sandbox module containing your migrated lists." },
      { id: "7", label: "Team Training", role: "Migration Specialist", input: "Client Workspace", output: "Fully-Trained Staff", status: "Pending", description: "Live, recorded interactive workshop sessions prepare operators, finance, volunteers, and vendors." },
      { id: "8", label: "Launch Live", role: "Management", input: "Fully-Trained Staff", output: "Active Verified Operations", status: "Pending", description: "Decommission messy spreadsheets and WhatsApp workflows. Begin tracking with absolute trust and compliance!" }
    ],
    edges: [
      { id: "o1-2", source: "1", target: "2" },
      { id: "o2-3", source: "2", target: "3" },
      { id: "o3-4", source: "3", target: "4" },
      { id: "o4-5", source: "4", target: "5" },
      { id: "o5-6", source: "5", target: "6" },
      { id: "o6-7", source: "6", target: "7" },
      { id: "o7-8", source: "7", target: "8" }
    ],
    svgFallback: `<svg viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#0b1d2a]">
      <rect width="100%" height="100%" fill="#F8FAFC" rx="16"/>
      <g fill="#0F4D3E" font-family="sans-serif" font-size="10" font-weight="bold">
        <rect x="10" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="62" y="64" fill="white" text-anchor="middle">1. Submit Intake</text>
        <line x1="115" y1="60" x2="135" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="135" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="187" y="64" fill="white" text-anchor="middle">2. Process Review</text>
        <line x1="240" y1="60" x2="260" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="260" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="312" y="64" fill="white" text-anchor="middle">3. Onboarding Call</text>
        <line x1="365" y1="60" x2="385" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="385" y="35" width="105" height="50" rx="8" fill="#15803D" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="437" y="64" fill="white" text-anchor="middle">4. Map Spreadsheets</text>
        <line x1="490" y1="60" x2="510" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="510" y="35" width="105" height="50" rx="8" fill="#A7F3D0" stroke="#0F4D3E" stroke-width="1.5" />
        <text x="562" y="64" fill="#0F4D3E" text-anchor="middle">5. Verify Data</text>
        <line x1="615" y1="60" x2="635" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="635" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="687" y="64" fill="#0F4D3E" text-anchor="middle">6. Deploy Sandbox</text>
        <line x1="740" y1="60" x2="760" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="760" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="812" y="64" fill="#0F4D3E" text-anchor="middle">7. Team Training</text>
        <line x1="865" y1="60" x2="885" y2="60" stroke="#0F4D3E" stroke-width="2" />

        <rect x="885" y="35" width="105" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <text x="937" y="64" fill="#0F4D3E" text-anchor="middle">8. Launch Live</text>
      </g>
    </svg>`
  }
];
export default workflows;
