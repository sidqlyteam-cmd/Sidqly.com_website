import fs from 'fs';
import path from 'path';

const filesToClean = [
  'src/App.tsx',
  'src/components/ReadingProgressSidebar.tsx',
  'src/pages/Home.tsx',
  'src/pages/HowItWorks.tsx',
  'src/pages/Resources.tsx',
  'src/pages/WhatIsSidqly.tsx',
  'src/pages/WhySidqly.tsx',
  'src/pages/modules/ModuleDetail.tsx',
  'src/pages/resources/RequestOrganization.tsx',
  'src/pages/resources/ResourceDetail.tsx',
  'src/pages/use-cases/UseCaseDetail.tsx',
  'src/pages/ThankYou.tsx',
  'src/pages/Contact.tsx',
  'src/pages/AskSidqly.tsx',
  'src/pages/FAQs.tsx',
  'src/pages/Features.tsx',
  'src/pages/Help.tsx',
  'src/pages/Implementation.tsx',
  'src/pages/ProductTour.tsx',
  'src/pages/Security.tsx',
  'src/pages/Solutions.tsx',
  'src/pages/StartPilot.tsx',
  'src/pages/UseCases.tsx',
  'src/pages/blog/BlogPost.tsx',
  'src/pages/compare/CompareDetail.tsx',
  'src/data/solutions_modules.ts',
  'src/data/faqs.ts',
  'src/data/blog_regional.ts',
  'src/pages/SitemapPage.tsx'
];

for (const relPath of filesToClean) {
  if (!fs.existsSync(relPath)) continue;
  let content = fs.readFileSync(relPath, 'utf-8');
  const original = content;

  // Replace text
  content = content.replace(/Book Demo Walkthrough/g, 'Organization Inquiry');
  content = content.replace(/Book a Demo/g, 'Organization Inquiry');
  content = content.replace(/Book Demo/g, 'Organization Inquiry');
  content = content.replace(/Book a Call/g, 'Organization Inquiry');
  content = content.replace(/Book Setup Discussion/g, 'Organization Inquiry');
  content = content.replace(/Book Security Briefing/g, 'Organization Inquiry');
  content = content.replace(/Book on Calendly/g, 'Submit Inquiry');

  // Replace direct Calendly links
  content = content.replace(/https:\/\/calendly\.com\/d\/dvzs-3zf-cgz/g, '/purchase#inquiry');

  // Replace references in FAQs / text
  content = content.replace(/You can book a demo directly with our team via our Calendly link available throughout the website\./g, 'You can submit an inquiry directly with our team via our organization inquiry form.');
  content = content.replace(/You can book a demo via our <strong>Calendly link<\/strong>\./g, 'You can submit an inquiry via our <strong>organization inquiry form</strong>.');
  content = content.replace(/Check your email for the Calendly confirmation and meeting link\./g, 'Our team will review your inquiry and reach out to schedule onboarding.');

  if (content !== original) {
    fs.writeFileSync(relPath, content, 'utf-8');
    console.log('Cleaned:', relPath);
  }
}
