import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf-8');
const env = {};
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const idx = trimmed.indexOf('=');
    if (idx !== -1) env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
}

async function run() {
  const token = env.CLOUDFLARE_API_TOKEN;
  const accountId = env.CLOUDFLARE_ACCOUNT_ID;
  const zoneId = '386dee5c5f3012dd852d2a0a9d4ed887';

  console.log('--- 1. CLOUDFLARE PAGES CUSTOM DOMAINS ---');
  const domainsRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/sidqly/domains`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const domainsData = await domainsRes.json();
  console.log('Pages Domains:', JSON.stringify(domainsData.result?.map(d => ({ name: d.name, status: d.status, certificate_authority: d.certificate_authority })), null, 2));

  console.log('\n--- 2. CLOUDFLARE DNS RECORDS FOR SIDQLY.COM ---');
  const dnsRes = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const dnsData = await dnsRes.json();
  if (dnsData.result) {
    for (const r of dnsData.result) {
      console.log(`${r.type.padEnd(6)} ${r.name.padEnd(25)} -> ${r.content} (proxied: ${r.proxied})`);
    }
  }

  console.log('\n--- 3. HTTP / HTTPS TESTING ---');
  const testUrls = [
    'http://www.sidqly.com',
    'https://www.sidqly.com',
    'http://sidqly.com',
    'https://sidqly.com',
    'https://www.sidqly.com/pricing',
    'https://sidqly.com/pricing'
  ];

  for (const url of testUrls) {
    try {
      const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0' } });
      const location = res.headers.get('location') || '';
      console.log(`${url.padEnd(32)} => Status: ${res.status} ${location ? '-> ' + location : ''}`);
    } catch (err) {
      console.log(`${url.padEnd(32)} => Error: ${err.message}`);
    }
  }
  console.log('\n--- 4. CANONICAL & PAGE TITLE CHECKS ---');
  for (const domain of ['https://www.sidqly.com', 'https://sidqly.com']) {
    const html = await fetch(domain).then(r => r.text());
    const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log(`${domain} => Title: "${titleMatch?.[1]}" | Canonical: ${canonMatch?.[1]}`);
  }
}

run().catch(console.error);
