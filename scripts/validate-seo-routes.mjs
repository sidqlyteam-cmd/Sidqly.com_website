import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');
const publicDir = path.join(__dirname, '../public');
const sitemapIndexPath = path.join(publicDir, 'sitemap.xml');
let hasError = false;

function checkPageFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            checkPageFiles(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<SEO')) {
                if (!content.includes('canonical=') && !content.includes('{...seoData')) {
                    console.error(`❌ Missing canonical prop in ${fullPath}`);
                    hasError = true;
                }
                if (content.includes('firebaseapp.com') || content.includes('web.app')) {
                    console.error(`❌ Firebase URL found in canonical for ${fullPath}`);
                    hasError = true;
                }
            }
        }
    }
}

// 1. Check pages for canonicals
checkPageFiles(pagesDir);

// 2. Check sitemaps
const requiredRoutes = [
    'https://www.sidqly.com/features',
    'https://www.sidqly.com/modules',
    'https://www.sidqly.com/pricing',
    'https://www.sidqly.com/resources',
    'https://www.sidqly.com/compare',
    'https://www.sidqly.com/trust-center',
    'https://www.sidqly.com/modules/manual-payment-review'
];

let allSitemapContent = '';
const sitemapFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));

sitemapFiles.forEach(file => {
    allSitemapContent += fs.readFileSync(path.join(publicDir, file), 'utf8');
});


for (const route of requiredRoutes) {
    if (!allSitemapContent.includes(`<loc>${route}</loc>`)) {
        console.error(`❌ Missing route in sitemaps: ${route}`);
        hasError = true;
    }
}


// 3. Check robots.txt and llms.txt
if (!fs.existsSync(path.join(publicDir, 'robots.txt'))) {
    console.error(`❌ robots.txt not found`);
    hasError = true;
}

if (!fs.existsSync(path.join(publicDir, 'llms.txt'))) {
    console.error(`❌ llms.txt not found`);
    hasError = true;
}

process.exit(hasError ? 1 : 0);
