# Sidqly Competitor Comparison & Alternatives System

This document outlines the system architecture, guidelines, and review processes for managing factual, source-backed competitor comparisons and alternative pages on the Sidqly platform.

---

## 1. System Design & Architecture

Rather than hardcoding comparison pages individually, we've designed a reusable data-driven structure:
1. **Modelled Dataset (`src/data/comparisons.ts`):** Stores all structured comparison data including target keywords, quick answers, "Old Way" vs "Sidqly Way", capability checklists, step-by-step workflows, honest limitations, and verified references.
2. **Dynamic UI Template (`src/pages/compare/CompareDetail.tsx`):** A single component that parses data dynamically based on routing slugs, rendering high-intent headings, feature comparison grids, modesty/trust panels, and FAQ blocks cleanly.
3. **Canonical Routing Logic:** Configured dynamically so that `/compare/*` and `/alternatives/*` paths map to self-referencing canonical URLs automatically depending on the location context, avoiding search engine penalties.

---

## 2. Mandatory Verification Guidelines

All comparison information must adhere to our credibility principles:
- **Facts-First:** Avoid promotional generalizations (e.g. "We are the best"). Use neutral and objective comparisons.
- **Official Citing:** Ground capability reports in official product pages. Cites are preserved inside the `sourceReferences` data array.
- **Honest Limitations:** Every comparison contains a dedicated limitations card, detailing what Sidqly does **not** do (e.g. no credit card processing) alongside competitor trade-offs.
- **Verification Dates:** Every entry logs a `lastReviewed` stamp to let buyers know the data is current.

---

## 3. Quarterly Competitor Review Checklist

To maintain up-to-date credibility, the marketing and tech teams execute this four-step checklist quarterly:

### Step 1: Audit Competitor Pricing & Feature Logs
Review official websites for LaunchGood, Donorbox, Givebutter, Bloomerang, and QurbanApp to verify if pricing models or feature scopes have changed.

### Step 2: Update `lastReviewed` Timestamps
If updates are made, modify the corresponding datasets inside `src/data/comparisons.ts` and set the `lastReviewed` string to the current month.

### Step 3: Flag Unknown or Unverifiable Data
If a new competitor capability cannot be verified via official public records, mark it explicitly as "Unknown" rather than making assumptions.

### Step 4: Run Post-Build Pre-Render Checks
After any data update, execute `npm run build` and `npx ts-node scripts/seo-monitor.ts` to ensure all sitemapped landing pages compile and pre-render without any canonical discrepancies.
