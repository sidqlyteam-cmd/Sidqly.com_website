import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const firebaseJsonPath = path.join(projectRoot, 'firebase.json');

async function updateFirebaseConfig() {
    const firebaseConfig = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));

    // Server-side 301 redirects for client-side alias routes
    const redirects = [
        {
            source: "/demo",
            destination: "/book-demo",
            type: 301
        },
        {
            source: "/how-sidqly-works",
            destination: "/how-it-works",
            type: 301
        },
        {
            source: "/trust",
            destination: "/trust-center",
            type: 301
        }
    ];

    // All valid routes are pre-rendered into static HTML files in dist/ by scripts/prerender.mjs.
    // With cleanUrls: true, Firebase Hosting serves pre-rendered HTML files (e.g. dist/features.html for /features)
    // without requiring rewrites to /index.html, ensuring page-specific canonical HTML is served on HTTP 200.
    firebaseConfig.hosting.redirects = redirects;
    firebaseConfig.hosting.rewrites = [];

    fs.writeFileSync(firebaseJsonPath, JSON.stringify(firebaseConfig, null, 2));
    console.log(`Updated firebase.json: ${redirects.length} server-side redirects configured, rewrites cleared for static pre-rendered HTML serving.`);
}

updateFirebaseConfig();
