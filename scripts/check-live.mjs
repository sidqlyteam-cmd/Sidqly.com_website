async function test() {
  const preview = await fetch('https://e5b6d55e.sidqly.pages.dev/purchase').then(r => r.text());
  const prod = await fetch('https://www.sidqly.com/purchase').then(r => r.text());
  console.log('Preview length:', preview.length, 'has sidqly.team:', preview.includes('sidqly.team'), 'has Inquiry:', preview.includes('Inquiry'));
  console.log('Prod length:', prod.length, 'has sidqly.team:', prod.includes('sidqly.team'), 'has Inquiry:', prod.includes('Inquiry'));

  const scriptRegex = /src="([^"]+index[^"]+\.js)"/;
  console.log('Preview script:', preview.match(scriptRegex)?.[1]);
  console.log('Prod script:', prod.match(scriptRegex)?.[1]);

  // Let's check what's in purchase page on preview
  const formIdx = preview.indexOf('id="inquiry"');
  if (formIdx !== -1) {
    console.log('Preview has id="inquiry":', preview.slice(formIdx, formIdx + 300));
  } else {
    console.log('id="inquiry" NOT found in preview HTML. Checking where InquiryForm renders:');
    console.log('Preview has Organization Inquiry Form:', preview.includes('Organization Inquiry Form'));
    console.log('Preview has Submit Inquiry:', preview.includes('Submit Inquiry'));
  }

  const prodFormIdx = prod.indexOf('id="inquiry"');
  console.log('Prod has id="inquiry":', prodFormIdx !== -1);
  if (prodFormIdx !== -1) {
    console.log('Prod slice:\n', prod.slice(prodFormIdx, prodFormIdx + 400));
  }
}
test();
