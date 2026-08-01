import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const publicDir = path.join(projectRoot, 'public');
const historyFile = path.join(projectRoot, 'scripts', '.indexnow-history.json');

async function sendRequest(url, data) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const postData = JSON.stringify(data);

    const options = {
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const client = u.protocol === 'https:' ? https : http;
    const req = client.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body
        });
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function runIndexNow() {
  console.log('--- INDEXNOW AUTOMATION ---');

  const key = process.env.INDEXNOW_KEY || process.env.VITE_INDEXNOW_KEY || 'sidqlyindexnowkey12345';

  if (!key) {
    console.log('⚠️ INDEXNOW_KEY not defined in environment. Skipping IndexNow submittal.');
    return;
  }

  // 1. Write the key verification file to the public folder
  const verificationFilePath = path.join(publicDir, `${key}.txt`);
  fs.writeFileSync(verificationFilePath, key, 'utf8');
  console.log(`✅ IndexNow Key Verification file written to public/${key}.txt`);

  // 2. Read sitemaps to get current canonical indexable URLs
  const sitemaps = [
    'sitemap-pages.xml',
    'sitemap-modules.xml',
    'sitemap-use-cases.xml',
    'sitemap-resources.xml',
    'sitemap-blog.xml',
    'sitemap-locations.xml'
  ];

  let currentUrls = [];

  for (const sitemapFile of sitemaps) {
    const sitemapPath = path.join(publicDir, sitemapFile);
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      const matches = [...content.matchAll(/<loc>(https:\/\/www\.sidqly\.com[^<]*)<\/loc>/g)];
      for (const match of matches) {
        currentUrls.push(match[1].trim());
      }
    }
  }

  // 3. Load historical submissions to prevent spamming
  let history = { submitted: {} };
  if (fs.existsSync(historyFile)) {
    try {
      history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
    } catch (e) {
      console.log('⚠️ Error parsing history file, resetting history.');
    }
  }

  // 4. Identify new or changed URLs (excluding unchanged to prevent API spam)
  const newOrChanged = [];
  const now = new Date().toISOString();

  currentUrls.forEach(url => {
    // If the URL has never been submitted, or if it was modified (we can track by sitemap's lastmod or just treat as new)
    if (!history.submitted[url]) {
      newOrChanged.push(url);
    }
  });

  if (newOrChanged.length === 0) {
    console.log('ℹ️ No new or updated URLs detected. Skipping submission to prevent API spam.');
    return;
  }

  console.log(`Submitting ${newOrChanged.length} new/updated URLs to IndexNow...`);

  // 5. Submit to Bing IndexNow Endpoint
  const indexNowPayload = {
    host: 'www.sidqly.com',
    key: key,
    keyLocation: `https://www.sidqly.com/${key}.txt`,
    urlList: newOrChanged
  };

  try {
    const response = await sendRequest('https://api.indexnow.org/indexnow', indexNowPayload);
    console.log(`📡 IndexNow API Response Status: ${response.status}`);

    if (response.status === 200 || response.status === 202) {
      console.log('✅ URLs submitted successfully to IndexNow!');

      // Update history with timestamps
      newOrChanged.forEach(url => {
        history.submitted[url] = {
          timestamp: now,
          status: response.status
        };
      });

      fs.writeFileSync(historyFile, JSON.stringify(history, null, 2), 'utf8');
      console.log(`Saved submission history to scripts/.indexnow-history.json`);
    } else {
      console.error(`❌ IndexNow submission failed with status code ${response.status}`);
    }
  } catch (err) {
    console.error('❌ Error sending IndexNow request:', err.message);
  }
}

runPrerenderAndIndexNow();

async function runPrerenderAndIndexNow() {
  try {
    await runIndexNow();
  } catch (e) {
    console.error('IndexNow automated step failed:', e);
  }
}
