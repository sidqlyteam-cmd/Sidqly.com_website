const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts['admin:repair-super-admin'] = 'npx tsx scripts/repair-super-admin.ts';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
