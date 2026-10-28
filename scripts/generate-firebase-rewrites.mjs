import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const firebaseJsonPath = path.join(projectRoot, 'firebase.json');

async function updateFirebaseConfig() {
    const firebaseConfig = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));

    // Server-side 301 redirects for client-side alias routes and language cleanup
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
        },
        {
            source: "/:lang(ar|ur|fr|de)",
            destination: "/",
            type: 301
        },
        {
            source: "/:lang(ar|ur|fr|de)/:slug*",
            destination: "/:slug*",
            type: 301
        }
    ];

    firebaseConfig.hosting.redirects = redirects;
    firebaseConfig.hosting.rewrites = [
        {
            source: "**",
            destination: "/index.html"
        }
    ];

    fs.writeFileSync(firebaseJsonPath, JSON.stringify(firebaseConfig, null, 2));
    console.log(`Updated firebase.json: ${redirects.length} server-side redirects configured with SPA rewrite.`);
}

updateFirebaseConfig();
