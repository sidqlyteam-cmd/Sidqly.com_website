import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

import { routeClassifications } from '../src/data/routeClassification.ts';

function startPreviewServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(distDir, req.url.split('?')[0]);

      if (req.url.endsWith('/')) {
        filePath = path.join(filePath, 'index.html');
      }

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

  routeClassifications.forEach(({ path: route, type }) => {
    if (type !== 'redirect') {
      routesToPrerender.add(route);
    }
  });

  const routesList = Array.from(routesToPrerender).sort();

  const port = 5174;
  const server = await startPreviewServer(port);

  const candidates = [
    '/home/jules/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell',
    '/home/jules/.cache/ms-playwright/chromium-1228/chrome-linux/chrome',
    '/home/jules/.cache/ms-playwright/chromium-1208/chrome-linux/chrome',
    '/home/jules/.cache/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-linux64/chrome-headless-shell',
  ];
  const executablePath = candidates.find(p => fs.existsSync(p));

  const launchOpts = { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] };
  if (executablePath) {
    launchOpts.executablePath = executablePath;
  }

  let browser;
  try {
    browser = await chromium.launch(launchOpts);
  } catch {
    browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });
  }

  console.log(`Starting pre-rendering of ${routesList.length} total URLs with parallel workers...`);

  const CONCURRENCY = 6;
  const queue = [...routesList];

  const prerenderWorker = async (workerId) => {
    let page = await browser.newPage();
    await page.addInitScript(() => {
      try {
        localStorage.clear();
      } catch (_) {}
    });
    let count = 0;
    while (queue.length > 0) {
      const route = queue.shift();
      if (!route) break;

      try {
        if (page.isClosed() || count > 50) {
          if (!page.isClosed()) await page.close().catch(() => {});
          page = await browser.newPage();
          await page.addInitScript(() => {
            try {
              localStorage.clear();
            } catch (_) {}
          });
          count = 0;
        }

        await page.evaluate(() => {
          try {
            localStorage.clear();
          } catch (_) {}
        }).catch(() => {});

        await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForTimeout(50);

        const html = await page.content();

        let targetFile;
        if (route === '/') {
          targetFile = path.join(distDir, 'index.html');
        } else {
          targetFile = path.join(distDir, `${route.slice(1)}.html`);
        }

        const dir = path.dirname(targetFile);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(targetFile, html, 'utf8');
        count++;
      } catch (err) {
        console.error(`Worker ${workerId} failed to pre-render ${route}: ${err.message}`);
        try {
          if (!page.isClosed()) await page.close().catch(() => {});
        } catch (_) {}
        page = await browser.newPage();
        count = 0;
      }
    }
    try {
      if (!page.isClosed()) await page.close().catch(() => {});
    } catch (_) {}
  };

  const workers = Array.from({ length: CONCURRENCY }, (_, i) => prerenderWorker(i + 1));
  await Promise.all(workers);

  await browser.close();
  server.close();
  console.log('✅ Static pre-rendering completed successfully!');
}

runPrerender().catch(err => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
