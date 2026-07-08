import type { LocationRecord, LocationContentQuality, LocationIndexStatus } from "./locationTypes";

export interface AuditResult {
  slug: string;
  cityName?: string;
  country: string;
  priorityTier: number;
  indexStatus: LocationIndexStatus;
  includeInSitemap: boolean;
  contentQuality: LocationContentQuality;
  contentStrengthScore: number;
  issues: string[];
  recommendation: string;
}

export function auditLocationContent(record: LocationRecord): AuditResult {
  const issues: string[] = [];
  let score = 0;

  // 1. Check for unique quickAnswer
  if (record.quickAnswer && record.quickAnswer.length > 50) {
    // Basic check for minimal length and presence
    score += 1;
  } else {
    issues.push("Missing or too short quickAnswer");
  }

  // 2. Check for unique localNeeds
  if (record.localNeeds && record.localNeeds.length > 20) {
    score += 1;
  } else {
    issues.push("Missing or too short localNeeds");
  }

  // 3. Check for culturalNote
  if (record.culturalNote && record.culturalNote.length > 20) {
    score += 1;
  } else {
    issues.push("Missing culturalNote");
  }

  // 4. Check for localLanguageNote (optional but adds to score)
  if (record.localLanguageNote && record.localLanguageNote.length > 10) {
    score += 1;
  }

  // 5. Check for stakeholderSummary
  if (record.stakeholderSummary && record.stakeholderSummary.length > 20) {
    score += 1;
  } else {
    issues.push("Missing stakeholderSummary");
  }

  // 6. Check for recommendedModules
  if (record.recommendedModules && record.recommendedModules.length > 0) {
    score += 1;
  } else {
    issues.push("Missing recommendedModules");
  }

  // 7. Check for relatedUtilities
  if (record.relatedUtilities && record.relatedUtilities.length > 0) {
    score += 1;
  } else {
    issues.push("Missing relatedUtilities");
  }

  // 8. Check for FAQs
  if (record.faqs && record.faqs.length >= 5) { // Assuming a minimum of 5 FAQs is good
    score += 1;
  } else {
    issues.push("Missing or not enough FAQs (need at least 5)");
  }

  // 9-11. Check for fake claims (basic text search)
  const fullText = JSON.stringify(record).toLowerCase();
  if (fullText.includes("physical office in") || fullText.includes("our branch in")) {
    issues.push("Contains potentially fake local office claim");
  } else {
    score += 1;
  }

  // Basic address/phone checks can be added here if needed, but for now rely on manual review

  // 12. Check for safe disclaimer language (implicit in cultural/language notes, but can look for keywords)
  if (fullText.includes("not issue religious rulings") || fullText.includes("does not replace") || fullText.includes("legal advice") || fullText.includes("operational side")) {
    score += 1;
  } else {
    issues.push("Missing safe compliance disclaimer language");
  }

  // Determine recommendation based on score
  let recommendation = "Review needed.";
  let calculatedQuality: LocationContentQuality = "weak";
  let recommendedIndexStatus: LocationIndexStatus = "noindex";

  if (score >= 9 && issues.length === 0) {
    recommendation = "Content is strong and safe to index.";
    calculatedQuality = "strong";
    recommendedIndexStatus = "index";
  } else if (score >= 6) {
    recommendation = "Content is medium. Consider improving before indexing.";
    calculatedQuality = "medium";
    recommendedIndexStatus = "noindex";
  } else {
    recommendation = "Content is weak. Do not index.";
    calculatedQuality = "weak";
    recommendedIndexStatus = "noindex";
  }

  return {
    slug: record.slug,
    cityName: record.cityName,
    country: record.country,
    priorityTier: record.priorityTier,
    indexStatus: recommendedIndexStatus,
    includeInSitemap: recommendedIndexStatus === "index",
    contentQuality: calculatedQuality,
    contentStrengthScore: score,
    issues,
    recommendation
  };
}

export function auditAllLocations(records: LocationRecord[]): AuditResult[] {
  return records.map(auditLocationContent);
}
