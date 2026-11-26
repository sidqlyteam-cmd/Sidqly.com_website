import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) results = results.concat(walk(p));
    else if (p.endsWith('.tsx')) results.push(p);
  }
  return results;
}

const pages = walk('src/pages');
console.log('--- PAGES WITHOUT <SEO or canonical= ---');
for (const p of pages) {
  const c = fs.readFileSync(p, 'utf-8');
  if (!c.includes('<SEO')) {
    console.log('NO <SEO>:', p);
  } else if (!c.includes('canonical')) {
    console.log('NO canonical prop:', p);
  }
}

async function testRedirects() {
  const lines = fs.readFileSync('public/_redirects', 'utf-8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'));

  console.log('\n--- TESTING _redirects ON LIVE ---');
  for (const line of lines) {
    const [from] = line.split(/\s+/);
    if (from === '/*') continue;
    const testPath = from.replace('/*', '/pricing');
    try {
      const res = await fetch('https://www.sidqly.com' + testPath, { redirect: 'manual' });
      const loc = res.headers.get('location') || '';
      let hop2 = '';
      if (res.status >= 300 && res.status < 400 && loc) {
        const nextUrl = loc.startsWith('http') ? loc : 'https://www.sidqly.com' + loc;
        const r2 = await fetch(nextUrl, { redirect: 'manual' });
        hop2 = ` -> ${r2.status} ${r2.headers.get('location') || ''}`;
      }
      if (res.status !== 301 || hop2.includes('301') || hop2.includes('308') || hop2.includes('404')) {
        console.log(`CHECK: ${testPath} => ${res.status} ${loc}${hop2}`);
      }
    } catch (e) {
      console.log(`ERROR: ${testPath} => ${e.message}`);
    }
  }

  console.log('\n--- EDGE TESTS ---');
  for (const u of [
    'https://www.sidqly.com/pricing/',
    'https://sidqly.com/pricing/',
    'https://sidqly.com/pricing',
    'https://www.sidqly.com/ar/',
    'https://www.sidqly.com/nonexistent-test-404'
  ]) {
    const r = await fetch(u, { redirect: 'manual' });
    console.log(`${u} => ${r.status} ${r.headers.get('location') || ''}`);
  }
}

testRedirects().catch(console.error);
