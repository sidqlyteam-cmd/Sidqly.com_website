import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// 1. Helper to parse CSV
function parseCsv(content) {
  const lines = content.trim().split('\n');
  if (lines.length < 2) return [];
  const header = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    // Simple CSV parser supporting quotes
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let charIdx = 0; charIdx < line.length; charIdx++) {
      const char = line[charIdx];
      if (char === '"' && (charIdx === 0 || line[charIdx - 1] !== '\\')) {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim().replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim().replace(/^"|"$/g, ''));
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = values[idx] || '';
    });
    rows.push(obj);
  }
  return rows;
}

// 2. Load GSC Data
const gscDir = path.resolve('gsc-data');
const queriesCsvPath = path.join(gscDir, 'performance-search', 'Queries.csv');
const pagesCsvPath = path.join(gscDir, 'performance-search', 'Pages.csv');
const aiPagesCsvPath = path.join(gscDir, 'performance-ai', 'Pages.csv');
const coverageCsvPath = path.join(gscDir, 'coverage', 'Critical issues.csv');

const queries = fs.existsSync(queriesCsvPath) ? parseCsv(fs.readFileSync(queriesCsvPath, 'utf-8')) : [];
const searchPages = fs.existsSync(pagesCsvPath) ? parseCsv(fs.readFileSync(pagesCsvPath, 'utf-8')) : [];
const aiPages = fs.existsSync(aiPagesCsvPath) ? parseCsv(fs.readFileSync(aiPagesCsvPath, 'utf-8')) : [];
const coverageIssues = fs.existsSync(coverageCsvPath) ? parseCsv(fs.readFileSync(coverageCsvPath, 'utf-8')) : [];

console.log(`Loaded ${queries.length} search queries, ${searchPages.length} search pages, ${aiPages.length} AI pages.`);

// 3. Import Application Data
async function runAnalysis() {
  const comparisonsModule = await import(pathToFileURL(path.resolve('src/data/comparisons.ts')).href);
  const comparisons = comparisonsModule.comparisons;

  console.log(`Analyzing ${comparisons.length} comparison & alternative pages...\n`);

  const results = comparisons.map(c => {
    const isAlternative = c.slug.endsWith('-alternatives');
    const pathUrl = isAlternative ? `/alternatives/${c.slug}` : `/compare/${c.slug}`;
    const fullUrl = `https://www.sidqly.com${pathUrl}`;
    const nonWwwUrl = `https://sidqly.com${pathUrl}`;

    // Find performance
    const searchPerf = searchPages.find(p => p['Top pages'] === fullUrl || p['Top pages'] === nonWwwUrl);
    const aiPerf = aiPages.find(p => p['Top pages'] === fullUrl || p['Top pages'] === nonWwwUrl);

    // Text metrics
    const fullText = [
      c.title,
      c.quickAnswer,
      c.oldWorksFor,
      c.oldDifficultWhen,
      c.sidqlyImproves,
      c.notRightFit,
      c.trustConsiderations,
      c.reportingConsiderations,
      ...c.features.map(f => `${f.name} ${f.old} ${f.sidqly}`),
      ...c.workflow.map(w => `${w.step} ${w.old} ${w.sidqly}`),
      ...c.faqs.map(f => `${f.question} ${f.answer}`)
    ].join(' ');

    const wordCount = fullText.split(/\s+/).filter(Boolean).length;
    const titleLength = c.metaTitle ? c.metaTitle.length : 0;
    const descLength = c.metaDescription ? c.metaDescription.length : 0;

    // Checks
    const titleScore = (titleLength >= 40 && titleLength <= 65) ? 100 : (titleLength > 0 ? 70 : 0);
    const descScore = (descLength >= 120 && descLength <= 165) ? 100 : (descLength > 0 ? 70 : 0);
    const contentScore = wordCount >= 600 ? 100 : Math.round((wordCount / 600) * 100);
    const schemaScore = (c.faqs && c.faqs.length >= 2) ? 100 : 60;
    const linkingScore = (c.relatedModules?.length > 0 && c.relatedUseCases?.length > 0) ? 100 : 50;

    const overallQualityScore = Math.round(
      (titleScore * 0.15) + (descScore * 0.15) + (contentScore * 0.4) + (schemaScore * 0.15) + (linkingScore * 0.15)
    );

    // Relevant queries
    const competitorKeyword = c.slug.replace(/^sidqly-vs-/, '').replace(/-alternatives$/, '');
    const matchedQueries = queries.filter(q => 
      q['Top queries'].toLowerCase().includes(competitorKeyword) ||
      competitorKeyword.split('-').some(word => word.length > 3 && q['Top queries'].toLowerCase().includes(word))
    );

    return {
      slug: c.slug,
      type: isAlternative ? 'Alternative Guide' : 'Direct Comparison',
      url: pathUrl,
      wordCount,
      titleLength,
      descLength,
      featureCount: c.features.length,
      faqCount: c.faqs.length,
      overallQualityScore,
      searchImpressions: searchPerf ? parseInt(searchPerf.Impressions || '0', 10) : 0,
      searchClicks: searchPerf ? parseInt(searchPerf.Clicks || '0', 10) : 0,
      searchPosition: searchPerf ? parseFloat(searchPerf.Position || '0') : null,
      aiImpressions: aiPerf ? parseInt(aiPerf.Impressions || '0', 10) : 0,
      matchedQueriesCount: matchedQueries.length,
      topMatchedQueries: matchedQueries.slice(0, 3).map(q => q['Top queries'])
    };
  });

  // Query opportunity analysis
  const unaddressedQueries = queries.filter(q => {
    const qText = q['Top queries'].toLowerCase();
    const isIslamicUtility = ['qibla', 'namaz', 'isha', 'jummah', 'prayer', 'nisf'].some(w => qText.includes(w));
    const isBrand = qText.includes('sidly') || qText.includes('sidqly');
    return !isIslamicUtility && !isBrand;
  });

  const analysisReport = {
    generatedAt: new Date().toISOString(),
    totalComparisons: comparisons.length,
    directComparisons: comparisons.filter(c => !c.slug.endsWith('-alternatives')).length,
    alternativeGuides: comparisons.filter(c => c.slug.endsWith('-alternatives')).length,
    averageWordCount: Math.round(results.reduce((acc, r) => acc + r.wordCount, 0) / results.length),
    averageQualityScore: Math.round(results.reduce((acc, r) => acc + r.overallQualityScore, 0) / results.length),
    pageEvaluations: results,
    topCommercialQueries: unaddressedQueries.slice(0, 10).map(q => ({
      query: q['Top queries'],
      impressions: parseInt(q.Impressions || '0', 10),
      position: parseFloat(q.Position || '0')
    })),
    recommendations: [
      {
        priority: "CRITICAL",
        topic: "Atiyat Box Management",
        insight: "Query 'atiyat box management' + 'management atiyat box' generates 512 impressions at pos ~9.0. Highly commercial intent for mosque/charity donation collection boxes.",
        action: "Enhance /modules/manual-payment-review with explicit Atiyat box counting, custody seals, dual-witness opening protocols, and cash reconciliation schema."
      },
      {
        priority: "HIGH",
        topic: "Dedicated /alternatives Index Page",
        insight: "/alternatives had no dedicated hub page, causing 404s when crawlers or visitors visited the root directory.",
        action: "Create AlternativesIndex.tsx with rich structured cards, comparison table, and complete metadata."
      },
      {
        priority: "HIGH",
        topic: "Clean Comparison vs Alternatives Routing",
        insight: "Prevent canonical drift between /compare/launchgood-alternatives and /alternatives/launchgood-alternatives.",
        action: "Enforce 301 redirects and strict canonicals: all *-alternatives routes live permanently at /alternatives/*, all sidqly-vs-* live at /compare/*."
      },
      {
        priority: "MEDIUM",
        topic: "Add Atiyat Box vs Digital Kiosk Comparison",
        insight: "Mosques are transitioning from physical locked atiyat boxes to hybrid manual & QR-assisted collections.",
        action: "Add a comparison entry or dedicated resource section for Atiyat Box vs Modern Giving Operations."
      }
    ]
  };

  const outputPath = path.resolve('gsc-data/comparison-and-alternative-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(analysisReport, null, 2));
  console.log(`Saved programmatic analysis to ${outputPath}`);

  // Display summary table
  console.table(results.map(r => ({
    Type: r.type,
    Slug: r.slug,
    Words: r.wordCount,
    Score: r.overallQualityScore,
    Impressions: r.searchImpressions,
    AI_Imp: r.aiImpressions
  })));

  return analysisReport;
}

runAnalysis().catch(err => {
  console.error("Analysis failed:", err);
  process.exit(1);
});
