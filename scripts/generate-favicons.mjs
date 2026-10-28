import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const svgSourcePath = path.join(publicDir, 'brand', 'sidqly-mark.svg');
const svgContent = fs.readFileSync(svgSourcePath, 'utf8');

// Copy official mark directly to public/favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
console.log('✅ Updated public/favicon.svg with official Sidqly brand mark');

function createIco(pngBuffersWithSizes) {
  const numImages = pngBuffersWithSizes.length;
  const headerSize = 6;
  const entrySize = 16;
  const dirSize = headerSize + numImages * entrySize;

  let totalSize = dirSize;
  for (const { buffer } of pngBuffersWithSizes) {
    totalSize += buffer.length;
  }

  const icoBuffer = Buffer.alloc(totalSize);

  // Write ICONDIR
  icoBuffer.writeUInt16LE(0, 0); // reserved
  icoBuffer.writeUInt16LE(1, 2); // type: 1 = ICO
  icoBuffer.writeUInt16LE(numImages, 4); // count

  let currentOffset = dirSize;
  for (let i = 0; i < numImages; i++) {
    const { width, height, buffer } = pngBuffersWithSizes[i];
    const entryOffset = headerSize + i * entrySize;

    icoBuffer.writeUInt8(width >= 256 ? 0 : width, entryOffset); // width
    icoBuffer.writeUInt8(height >= 256 ? 0 : height, entryOffset + 1); // height
    icoBuffer.writeUInt8(0, entryOffset + 2); // color count
    icoBuffer.writeUInt8(0, entryOffset + 3); // reserved
    icoBuffer.writeUInt16LE(1, entryOffset + 4); // color planes
    icoBuffer.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    icoBuffer.writeUInt32LE(buffer.length, entryOffset + 8); // image size in bytes
    icoBuffer.writeUInt32LE(currentOffset, entryOffset + 12); // image offset

    buffer.copy(icoBuffer, currentOffset);
    currentOffset += buffer.length;
  }

  return icoBuffer;
}

async function renderIcons() {
  console.log('Starting Playwright Chromium to render favicon PNGs...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load SVG into page HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { width: 100%; height: 100%; overflow: hidden; background: transparent; }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `;

  await page.setContent(html);

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  const renderedBuffers = [];

  for (const { name, size } of sizes) {
    await page.setViewportSize({ width: size, height: size });
    const buffer = await page.screenshot({ omitBackground: true, type: 'png' });
    const outPath = path.join(publicDir, name);
    fs.writeFileSync(outPath, buffer);
    console.log(`✅ Generated public/${name} (${size}x${size})`);

    if (size === 16 || size === 32 || size === 48) {
      renderedBuffers.push({ width: size, height: size, buffer });
    }
  }

  await browser.close();

  // Create combined favicon.ico
  const icoData = createIco(renderedBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
  console.log('✅ Generated public/favicon.ico with multi-resolution 16x16, 32x32, 48x48 icon data');
}

renderIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
