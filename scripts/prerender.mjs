import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

// Read all routes from Route Classification dataset
import { routeClassifications } from '../src/data/routeClassification';

// Simple static file server serving 'dist' folder with fallback to index.html for SPA routing
function startPreviewServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(distDir, req.url.split('?')[0]);

      // If trailing slash, append index.html
      if (req.url.endsWith('/')) {
        filePath = path.join(filePath, 'index.html');
      }

      // Check if file exists, if not fall back to dist/index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distDir, 'index.html');
      }

      const ext = path.extname(filePath);
      let contentType = 'text/html';
      if (ext === '.js') contentType = 'application/javascript';
      if (ext === '.css') contentType = 'text/css';
      if (ext === '.svg') contentType = 'image/svg+xml';
      if (ext === '.png') contentType = 'image/png';
      if (ext === '.xml') contentType = 'application/xml';
      if (ext === '.txt') contentType = 'text/plain';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => {
      console.log(`Temporary preview server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function runPrerender() {
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist directory not found. Please run npm run build first.');
    process.exit(1);
  }

  const sitemaps = [
    'sitemap-pages.xml',
    'sitemap-modules.xml',
    'sitemap-use-cases.xml',
    'sitemap-resources.xml',
    'sitemap-blog.xml',
    'sitemap-locations.xml'
  ];

  let routesToPrerender = new Set();

  // Add all URLs from generated sitemaps
  for (const sitemapFile of sitemaps) {
    const sitemapPath = path.join(projectRoot, 'public', sitemapFile);
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      const matches = [...content.matchAll(/<loc>https:\/\/www\.sidqly\.com([^<]*)<\/loc>/g)];
      for (const match of matches) {
        let route = match[1].trim();
        if (route === '') route = '/';
        routesToPrerender.add(route);
      }
    }
  }

  // Add explicit noindex/system routes from Route Classification
  routeClassifications.forEach(({ path: route, type }) => {
    if (type !== 'redirect') {
      routesToPrerender.add(route);
    }
  });

  const routesList = Array.from(routesToPrerender).sort();

  const port = 5174;
  const server = await startPreviewServer(port);
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`Starting pre-rendering of ${routesList.length} total URLs...`);

  for (const route of routesList) {
    console.log(`Pre-rendering: ${route}`);
    await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle' });

    // Wait a brief moment to ensure hydration/animations are complete
    await page.waitForTimeout(500);

    const html = await page.content();

    // Compute the target static file path
    let targetFile;
    if (route === '/') {
      targetFile = path.join(distDir, 'index.html');
    } else {
      // e.g. /features -> /features.html
      // e.g. /locations/london -> /locations/london.html
      targetFile = path.join(distDir, `${route.slice(1)}.html`);
    }

    // Ensure directory exists
    const dir = path.dirname(targetFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(targetFile, html, 'utf8');
  }

  await browser.close();
  server.close();
  console.log('✅ Static pre-rendering completed successfully!');
}

runPrerender().catch(err => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
