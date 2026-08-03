# Sidqly Interactive Workflow Visualizer System

This document explains the technical architecture, layout engine parameters, schema configurations, and documentation on how to add, modify, or extend workflows in the Sidqly design system.

---

## 1. System Architecture

The interactive workflow visualizer resides in `src/components/ui/WorkflowVisualizer.tsx` and leverages:
1. **React Flow:** For client-side interactive rendering of nodes, layout backgrounds, drag overlays, and navigation control pins.
2. **ELKjs (Eclipse Layout Kernel):** For automated layered placement, layered routing, and node alignment.
3. **Responsive Timelines:** Automatically transforms layered 2D layouts into clean, vertical timelines on mobile viewports (< 1024px) to avoid horizontal scroll regressions.
4. **Static Fallback:** Incorporates plain SVG layout fallback definitions embedded inside `<noscript>` and screen reader descriptions to ensure 100% crawlable SEO indexes.

---

## 2. Core Workflow Schemas

Workflows are defined centrally inside `src/data/workflows.ts`. The 6 mandatory workflows implemented are:

1. **General Donation Lifecycle (`donation-lifecycle`):** Tracks intention records, payment verifications, budget divisions, volunteer task dispatches, quality audits, privacy blurring, and secure donor updates.
2. **Zakat Lifecycle (`zakat-lifecycle`):** Evaluates eligibility criteria, Screens requesters, checks wealth balances, calculates gold/silver Nisab, separates accounts, disburses aid (Tamleek), verifies recipts, and generates Shariah audit trails.
3. **Qurbani Fulfillment (`qurbani-fulfillment`):** Tracks animal share portfolios, assigns vendor agreements, oversees Tashreeq slaughter periods, receives volunteer proof, checks quality metrics, packs chilled cuts, generates slaughter certificates, and logs histories.
4. **Ramadan Sourcing & Distribution (`ramadan-distribution`):** Plans sourcing thresholds, orders 가족 packs, optimizes route logistics, dispatches volunteer cards, executes handovers, receives drop-off files, anonymizes beneficiary photos, and reports to sponsors.
5. **Recipient Privacy & Review (`recipient-privacy`):** Standardizes original photo uploads, applies automated face detection, blurs target vectors, enforces a manual quality controller gate, strips EXIF metadata, stores with AES-256 encryption, restricts role-based access, and exports reports securely.
6. **Organization Onboarding & Data Migration (`onboarding-migration`):** Submits intakes, reviews processes, schedules calls, maps legacy Excel files, audits cleanliness, deploys custom sandbox modules, trains operators, and launches live operations.

---

## 3. How to Add or Edit Workflows

To update a step, change an input/output, or add a completely new lifecycle:

### Step 1: Modify `src/data/workflows.ts`
Appended new elements to the `workflows` array. Ensure your object matches the `WorkflowConfig` interface:

```typescript
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
  svgFallback: string; // Plain HTML-safe SVG string for crawler pre-rendering
}
```

### Step 2: Recalculate Static SVG Fallback
Prepare a corresponding simplified SVG representation of the workflow. The visualizer places this inline within a `<noscript>` container so that Googlebots and crawler engines can parse and index the content without relying on JavaScript compilation.

---

## 4. ELKjs Layout Options

ELKjs organizes graph elements automatically using hierarchical, layered configurations:

- **elk.algorithm:** `layered` (Arranges graph nodes in distinct horizontal or vertical layers)
- **elk.direction:** `RIGHT` (Pushes flow direction from left to right)
- **spacing.nodeNode:** `40` (Specifies horizontal distance between sibling nodes)
- **spacing.edgeNode:** `30` (Determines padding clearance between edges and adjacent nodes)
