import fs from 'fs';
import path from 'path';

const pages = [
  'src/pages/About.tsx',
  'src/pages/blog/BlogPost.tsx',
  'src/pages/compare/CompareDetail.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Features.tsx',
  'src/pages/KnowledgeDetail.tsx',
  'src/pages/locations/LocationDetail.tsx',
  'src/pages/locations/LocationsIndex.tsx',
  'src/pages/ProductTour.tsx',
  'src/pages/regions/RegionDetail.tsx',
  'src/pages/Solutions.tsx',
  'src/pages/UseCases.tsx'
];

for (const p of pages) {
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf-8');

  // Replace text "Book a Demo" with "Organization Inquiry"
  content = content.replace(/Book a Demo/g, 'Organization Inquiry');
  content = content.replace(/Book Demo/g, 'Organization Inquiry');
  content = content.replace(/\/book-demo/g, '/purchase#inquiry');

  // Ensure Link import exists if /purchase#inquiry was added to an anchor
  fs.writeFileSync(p, content, 'utf-8');
  console.log('Updated ' + p);
}
