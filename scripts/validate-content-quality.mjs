import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');

console.log('=== RUNNING AUTOMATED CONTENT QUALITY & SEO VALIDATION CHECKS ===');

let hasError = false;
const processedPages = [];

// List of files to specifically audit for high-intent Phase 8 standards
const targetFiles = [
  { file: 'IslamicCharitySoftware.tsx', url: '/islamic-charity-software' },
  { file: 'IslamicGivingPlatform.tsx', url: '/islamic-giving-operations-platform' },
  { file: 'ZakatManagementSoftware.tsx', url: '/zakat-management-software' }
];

const titles = new Set();
const descriptions = new Set();

targetFiles.forEach(({ file, url }) => {
  const filepath = path.join(srcDir, 'pages', file);
  if (!fs.existsSync(filepath)) {
    console.error(`❌ Content Error: Expected page file '${file}' was not found at ${filepath}`);
    hasError = true;
    return;
  }

  const content = fs.readFileSync(filepath, 'utf8');

  console.log(`Auditing '${file}'...`);

  // 1. Title and Description checks
  const titleMatch = content.match(/title=['"]([^'"]+)['"]/);
  const descMatch = content.match(/description=['"]([^'"]+)['"]/);

  if (!titleMatch) {
    console.error(`  ❌ Error: Missing SEO title in '${file}'`);
    hasError = true;
  } else {
    const titleVal = titleMatch[1];
    if (titles.has(titleVal)) {
      console.error(`  ❌ Error: Duplicate title detected: '${titleVal}' inside '${file}'`);
      hasError = true;
    }
    titles.add(titleVal);
  }

  if (!descMatch) {
    console.error(`  ❌ Error: Missing SEO description in '${file}'`);
    hasError = true;
  } else {
    const descVal = descMatch[1];
    if (descriptions.has(descVal)) {
      console.error(`  ❌ Error: Duplicate meta description detected: '${descVal}' inside '${file}'`);
      hasError = true;
    }
    descriptions.add(descVal);
  }

  // 2. Word Count (Depth/Thin Content audit)
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 400) {
    console.error(`  ❌ Error: Thin content detected! '${file}' has only ${wordCount} words (Expected robust depth)`);
    hasError = true;
  } else {
    console.log(`  ✅ Depth Check: Passed (${wordCount} words logged)`);
  }

  // 3. Essential Sections (H1, H2, FAQ, CTA)
  if (!content.includes('<h1')) {
    console.error(`  ❌ Error: Missing H1 heading in '${file}'`);
    hasError = true;
  }
  if (!content.includes('<h2')) {
    console.error(`  ❌ Error: Missing H2 structures in '${file}'`);
    hasError = true;
  }
  if (!content.includes('faq') && !content.includes('Faq') && !content.includes('FAQ')) {
    console.error(`  ❌ Error: Missing FAQs block in '${file}'`);
    hasError = true;
  }
  if (!content.includes('/guided-pilot') && !content.includes('Guided Pilot')) {
    console.error(`  ❌ Error: Missing CTAs to Guided Pilot in '${file}'`);
    hasError = true;
  }

  // 4. Internal Linking
  if (!content.includes('internalLinkingTargets') && !content.includes('/contact-sales') && !content.includes('/guided-pilot')) {
    console.error(`  ❌ Error: Missing internal links mapping to related modules/pages in '${file}'`);
    hasError = true;
  }
});

if (hasError) {
  console.log('\n❌ Content Quality & Validation Audit Failed.');
  process.exit(1);
} else {
  console.log('\n✅ Content Quality & Validation Audit Passed successfully.');
  process.exit(0);
}
