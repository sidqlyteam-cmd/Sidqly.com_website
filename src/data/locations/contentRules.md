# Sidqly Location Content Rules (AEO, GEO, & LLM Optimization)

This document outlines the content rules for all geographic location records (regions, countries, cities) created for Sidqly. These rules ensure that our content is helpful for users, optimized for AI-driven search engines (AEO/GEO), and maintains Sidqly's ethical positioning.

## Core Directives

1. **Answer First (Quick Answer):**
   - The `quickAnswer` field must answer the main question immediately in the first sentence.
   - It should clearly explain what Sidqly does in simple, non-jargon language.
   - Example: "Sidqly helps Islamic organizations in [City] manage verified giving workflows with manual payment review..."

2. **Stakeholder Focus:**
   - The `stakeholderSummary` and `organizationTypes` sections must clearly define *who* the software helps (e.g., Mosques, Zakat Committees, Qurbani Organizers).
   - Content should address the specific operational pain points of these groups.

3. **Conversational FAQs:**
   - Questions in the `locationFaqs` bank must sound like real queries users type into Google, ChatGPT, Gemini, Perplexity, or Reddit.
   - Avoid robotic or highly artificial phrasing.
   - Answers should be concise (60-110 words) and directly address the user's intent.

4. **Cultural Awareness & Respect:**
   - Use `culturalNote` to acknowledge local giving practices and values respectfully.
   - Do not overclaim cultural authority or issue religious rulings (Fatwas).
   - Ensure the tone reflects Sidqly's role as a supportive operational tool, not a religious authority.

5. **Local Language Context:**
   - Use `localLanguageNote` to incorporate relevant terminology (e.g., Zakat, Sadaqah, Korban, Sadqa) naturally to aid understanding.
   - Avoid keyword stuffing. The goal is clarity and context, not artificial density.

6. **Action-Oriented Intent:**
   - Every page should lead naturally toward a "Book Demo" conversion.
   - Use language that explains *why* booking a demo is beneficial (e.g., "Book a demo to see how Sidqly centralizes your proof workflows.").

7. **Quality Over Quantity (No Doorway Pages):**
   - Content must be strong and useful for humans before it is marked as indexable (`indexStatus: "index"`).
   - We do not mass-publish thin city pages simply to capture search volume.

8. **Ethical Constraints (Strict):**
   - **No Fake Claims:** Do not claim Sidqly has a physical local office unless officially verified on Sidqly.com.
   - **No Fake Data:** Do not generate fake local phone numbers, addresses, coordinates, or reviews.
   - **No Advice:** Do not offer legal, tax, accounting, payment, or Shariah rulings.

9. **LLM Discovery:**
   - While `llms.txt` is maintained as an AI-readable map of our core concepts, traditional SEO fundamentals (unique value, clear answers, structured data) remain the primary drivers of visibility in both standard and AI search.

## Merge Conflict Protocol
These rules and the associated location data files are maintained by the Content Team (Agent B). Do not edit technical routing, sitemaps, schemas, or templates (Agent A's domain) to implement these rules.
