import fs from 'fs';

// Read .env
const envFile = fs.readFileSync('.env', 'utf-8');
let apiKey = '';
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (trimmed.startsWith('PADDLE_API_KEY=')) {
    apiKey = trimmed.slice('PADDLE_API_KEY='.length).trim();
  }
}

if (!apiKey) {
  console.error('No PADDLE_API_KEY found in .env');
  process.exit(1);
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
  console.log('1. Checking existing products in Live...');
  const existingProducts = await api('/products');
  console.log(`Found ${existingProducts.data.length} existing products.`);

  const plans = [
    {
      name: 'Starter Plan',
      description: 'Essential Islamic charity management for single-workspace organizations ($29/mo or $290/yr)',
      monthlyPrice: '2900', // in cents ($29.00)
      annualPrice: '29000', // in cents ($290.00)
    },
    {
      name: 'Growth Plan',
      description: 'Advanced features for growing charities with up to 3 organizations ($99/mo or $990/yr)',
      monthlyPrice: '9900', // in cents ($99.00)
      annualPrice: '99000', // in cents ($990.00)
    },
    {
      name: 'Premium Plan',
      description: 'Full multi-organization platform managing up to 10 organizations ($199/mo or $1990/yr)',
      monthlyPrice: '19900', // in cents ($199.00)
      annualPrice: '199000', // in cents ($1990.00)
    }
  ];

  const results = [];

  for (const plan of plans) {
    let product = existingProducts.data.find(p => p.name === plan.name);
    if (!product) {
      console.log(`Creating product: ${plan.name}...`);
      const prodRes = await api('/products', {
        method: 'POST',
        body: JSON.stringify({
          name: plan.name,
          tax_category: 'standard',
          description: plan.description
        })
      });
      product = prodRes.data;
      console.log(`✅ Created product ${product.id} (${product.name})`);
    } else {
      console.log(`Product already exists: ${product.id} (${product.name})`);
    }

    // Check existing prices for this product
    const existingPrices = await api(`/prices?product_id=${product.id}`);
    
    // Monthly price
    let monthPrice = existingPrices.data.find(p => p.billing_cycle?.interval === 'month');
    if (!monthPrice) {
      console.log(`Creating monthly price for ${plan.name} ($${parseInt(plan.monthlyPrice)/100}/mo)...`);
      const pRes = await api('/prices', {
        method: 'POST',
        body: JSON.stringify({
          product_id: product.id,
          description: `${plan.name} - Monthly`,
          unit_price: {
            amount: plan.monthlyPrice,
            currency_code: 'USD'
          },
          billing_cycle: {
            interval: 'month',
            frequency: 1
          }
        })
      });
      monthPrice = pRes.data;
      console.log(`✅ Created monthly price ${monthPrice.id}`);
    } else {
      console.log(`Monthly price already exists: ${monthPrice.id}`);
    }

    // Annual price
    let yearPrice = existingPrices.data.find(p => p.billing_cycle?.interval === 'year');
    if (!yearPrice) {
      console.log(`Creating annual price for ${plan.name} ($${parseInt(plan.annualPrice)/100}/yr)...`);
      const pRes = await api('/prices', {
        method: 'POST',
        body: JSON.stringify({
          product_id: product.id,
          description: `${plan.name} - Annual`,
          unit_price: {
            amount: plan.annualPrice,
            currency_code: 'USD'
          },
          billing_cycle: {
            interval: 'year',
            frequency: 1
          }
        })
      });
      yearPrice = pRes.data;
      console.log(`✅ Created annual price ${yearPrice.id}`);
    } else {
      console.log(`Annual price already exists: ${yearPrice.id}`);
    }

    results.push({
      plan: plan.name,
      productId: product.id,
      monthlyPriceId: monthPrice.id,
      annualPriceId: yearPrice.id,
      monthlyAmount: `$${parseInt(plan.monthlyPrice)/100}/mo`,
      annualAmount: `$${parseInt(plan.annualPrice)/100}/yr`
    });
  }

  console.log('\n================ PADDLE LIVE CATALOG READY ================');
  console.table(results);
  fs.writeFileSync('paddle_live_catalog.json', JSON.stringify(results, null, 2));
}

run().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
