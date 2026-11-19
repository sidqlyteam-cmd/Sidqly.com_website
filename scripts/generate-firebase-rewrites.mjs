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
        { source: "/demo", destination: "/book-demo", type: 301 },
        { source: "/how-sidqly-works", destination: "/how-it-works", type: 301 },
        { source: "/trust", destination: "/trust-center", type: 301 },
        { source: "/locations/north-america", destination: "/regions/north-america", type: 301 },
        { source: "/locations/europe", destination: "/regions/europe", type: 301 },
        { source: "/locations/middle-east", destination: "/regions/gulf-mena", type: 301 },
        { source: "/locations/south-asia", destination: "/regions/south-asia", type: 301 },
        { source: "/locations/asia-pacific", destination: "/regions/asia-pacific", type: 301 },
        { source: "/locations/africa", destination: "/regions/africa", type: 301 },
        { source: "/regions/united-kingdom", destination: "/locations/united-kingdom", type: 301 },
        { source: "/regions/united-states", destination: "/locations/united-states", type: 301 },
        { source: "/regions/canada", destination: "/locations/canada", type: 301 },
        { source: "/trust-and-dignity", destination: "/modules/privacy-dignity-controls", type: 301 },
        { source: "/proof-trust-engine", destination: "/modules/trust-and-dignity-engine", type: 301 },
        { source: "/verified-giving", destination: "/modules/verified-giving", type: 301 },
        { source: "/manual-payment-review", destination: "/modules/manual-payment-review", type: 301 },
        { source: "/donor-safe-impact", destination: "/modules/donor-safe-updates", type: 301 },
        { source: "/corporate-reporting", destination: "/modules/corporate-csr-zakat", type: 301 },
        { source: "/zakat-fund-separation", destination: "/modules/zakat-fund-separation", type: 301 },
        { source: "/qurbani-management-software", destination: "/solutions/qurbani-organizers", type: 301 },
        { source: "/ramadan-donation-management", destination: "/solutions/ramadan-campaigns", type: 301 },
        { source: "/charity-request-management", destination: "/modules/charity-request-intake", type: 301 },
        { source: "/vendor-fulfillment-platform", destination: "/modules/vendor-management", type: 301 },
        { source: "/mosque-donation-management", destination: "/use-cases/mosques", type: 301 },
        { source: "/alternatives/launchgood", destination: "/alternatives/launchgood-alternatives", type: 301 },
        { source: "/alternatives/donorbox", destination: "/alternatives/donorbox-alternatives", type: 301 },
        { source: "/alternatives/qurbanapp", destination: "/alternatives/qurbanapp-alternatives", type: 301 },
        { source: "/alternatives/zakat-management-software", destination: "/alternatives/zakat-management-software-alternatives", type: 301 },
        { source: "/compare/atiyat-box", destination: "/compare/sidqly-vs-atiyat-box", type: 301 },
        { source: "/:lang(ar|ur|fr|de)", destination: "/", type: 301 },
        { source: "/:lang(ar|ur|fr|de)/:slug*", destination: "/:slug*", type: 301 }
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
