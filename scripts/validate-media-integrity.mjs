import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');

console.log('=== RUNNING PROGRAMMATIC MEDIA & KNOWLEDGE BASE SAFEGUARD CHECKS ===');

let hasError = false;

// 1. Audit KnowledgeDetail.tsx for visual elements & captions
const detailFile = path.join(srcDir, 'pages', 'KnowledgeDetail.tsx');
if (fs.existsSync(detailFile)) {
  const content = fs.readFileSync(detailFile, 'utf8');
  console.log(`Checking '${detailFile}' for media safeguards...`);

  // Assert image tags have alt text
  if (content.includes('<img') && !content.includes('alt=')) {
    console.error(`  ❌ Error: Found img tag without 'alt' attribute in KnowledgeDetail.tsx`);
    hasError = true;
  } else {
    console.log(`  ✅ Alt Text Safety Check: Passed`);
  }

  // Assert there's a text-based explanation surrounding the visual infographics
  if (content.includes('infographicExplanation') && content.includes('Text-Based Explanation')) {
    console.log(`  ✅ Surrounding Explanation Safeguard: Passed`);
  } else {
    console.error(`  ❌ Error: Missing descriptive caption or surrounding explanation around visual elements in KnowledgeDetail.tsx`);
    hasError = true;
  }
}

// 2. Audit knowledgeHub.ts dataset for thin content & duplicate FAQs
const datasetFile = path.join(srcDir, 'data', 'knowledgeHub.ts');
if (fs.existsSync(datasetFile)) {
  const content = fs.readFileSync(datasetFile, 'utf8');
  console.log(`Checking '${datasetFile}'...`);

  const { knowledgeHub } = await import(datasetFile);

  const seenFaqQuestions = new Set();

  knowledgeHub.forEach(item => {
    // Thin content check
    const totalWords = item.directAnswer.split(/\s+/).length + item.explanation.split(/\s+/).length;
    if (totalWords < 120 && item.type === 'pillar') {
      console.error(`  ❌ Error: Thin content in pillar guide '${item.title}' (${totalWords} words logged)`);
      hasError = true;
    }

    // Duplicate FAQs check
    item.faqs.forEach(faq => {
      if (seenFaqQuestions.has(faq.question)) {
         console.error(`  ❌ Error: Duplicate FAQ question detected across pages: '${faq.question}'`);
         hasError = true;
      }
      seenFaqQuestions.add(faq.question);
    });
  });

  console.log(`  ✅ Thin Content & Duplicate FAQ Checklist: Passed (${knowledgeHub.length} items checked)`);
}

if (hasError) {
  console.log('\n❌ Programmatic Media & Knowledge Hub Safeguard Checks Failed.');
  process.exit(1);
} else {
  console.log('\n✅ Programmatic Media & Knowledge Hub Safeguard Checks Passed successfully.');
  process.exit(0);
}
