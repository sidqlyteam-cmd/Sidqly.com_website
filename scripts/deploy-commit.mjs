import { execSync } from 'child_process';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf-8');
const env = { ...process.env };
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const idx = trimmed.indexOf('=');
    if (idx !== -1) env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
}

const commitHash = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
console.log('Latest Git Commit Hash:', commitHash);

const cmd = `npx wrangler pages deploy dist --project-name=sidqly --branch=main --commit-hash=${commitHash}`;
console.log('Deploying command:', cmd);

const out = execSync(cmd, { env, encoding: 'utf-8' });
console.log(out);

console.log('Deployment to Cloudflare Pages successful!');
