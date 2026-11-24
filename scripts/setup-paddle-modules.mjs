import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf-8');
let apiKey = '';
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (trimmed.startsWith('PADDLE_API_KEY=')) {
    apiKey = trimmed.slice('PADDLE_API_KEY='.length).trim();
  }
}

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

async function api(path, options = {}) {
  const res = await fetch(`https://api.paddle.com${path}`, {
    ...options,
    headers: { ...headers, ...options.headers }
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

async function run() {
  console.log('Checking existing products for modular apps...');
  const existingProducts = await api('/products');

  const modules = [
    {
      name: 'Matrimonial & Nikah Portal (Add-on)',
      description: 'Shariah-compliant matrimonial service for mosque communities. Verified profiles, Wali workflow, confidential vetting ($29/mo or $290/yr)',
      monthlyPrice: '2900',
      annualPrice: '29000'
    },
    {
      name: 'Hifz & Quran Academy (Add-on)',
      description: 'Madrassah student tracking, daily Sabak/Sabqi/Manzil logs, parent portal, tuition billing ($39/mo or $390/yr)',
      monthlyPrice: '3900',
      annualPrice: '39000'
    },
    {
      name: 'Janazah & Bereavement Fund (Add-on)',
      description: 'Community funeral mutual-aid fund, cemetery plot allocation, emergency Janazah SMS/WhatsApp alerts ($19/mo or $190/yr)',
      monthlyPrice: '1900',
      annualPrice: '19000'
    }
  ];

  const results = [];

  for (const mod of modules) {
    let product = existingProducts.data.find(p => p.name === mod.name);
    if (!product) {
      console.log(`Creating product: ${mod.name}...`);
      const prodRes = await api('/products', {
        method: 'POST',
        body: JSON.stringify({
          name: mod.name,
          tax_category: 'standard',
          description: mod.description
        })
      });
      product = prodRes.data;
      console.log(`✅ Created product ${product.id}`);
    } else {
      console.log(`Product already exists: ${product.id}`);
    }

    const existingPrices = await api(`/prices?product_id=${product.id}`);
    
    // Monthly
    let monthPrice = existingPrices.data.find(p => p.billing_cycle?.interval === 'month');
    if (!monthPrice) {
      console.log(`Creating monthly price for ${mod.name}...`);
      const pRes = await api('/prices', {
        method: 'POST',
        body: JSON.stringify({
          product_id: product.id,
          description: `${mod.name} - Monthly`,
          unit_price: { amount: mod.monthlyPrice, currency_code: 'USD' },
          billing_cycle: { interval: 'month', frequency: 1 }
        })
      });
      monthPrice = pRes.data;
      console.log(`✅ Created monthly price ${monthPrice.id}`);
    }

    // Annual
    let yearPrice = existingPrices.data.find(p => p.billing_cycle?.interval === 'year');
    if (!yearPrice) {
      console.log(`Creating annual price for ${mod.name}...`);
      const pRes = await api('/prices', {
        method: 'POST',
        body: JSON.stringify({
          product_id: product.id,
          description: `${mod.name} - Annual`,
          unit_price: { amount: mod.annualPrice, currency_code: 'USD' },
          billing_cycle: { interval: 'year', frequency: 1 }
        })
      });
      yearPrice = pRes.data;
      console.log(`✅ Created annual price ${yearPrice.id}`);
    }

    results.push({
      module: mod.name,
      productId: product.id,
      monthlyPriceId: monthPrice?.id,
      annualPriceId: yearPrice?.id,
      monthly: `$${parseInt(mod.monthlyPrice)/100}/mo`,
      annual: `$${parseInt(mod.annualPrice)/100}/yr`
    });
  }

  console.log('\n================ PADDLE MODULE CATALOG ================');
  console.table(results);
}

run().catch(console.error);
