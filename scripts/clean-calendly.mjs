import fs from 'fs';

// 1. Home.tsx
let home = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
const homeOld = `<a
                href={brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm text-center"
              >
                Book a Demo
              </a>`;

const homeNew = `<Link
                to="/purchase#inquiry"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm text-center"
              >
                Organization Inquiry
              </Link>`;

home = home.replace(homeOld.replace(/\r\n/g, '\n'), homeNew);
home = home.replace(homeOld.replace(/\n/g, '\r\n'), homeNew.replace(/\n/g, '\r\n'));
fs.writeFileSync('src/pages/Home.tsx', home, 'utf-8');
console.log('Processed Home.tsx');

// 2. ModuleDetail.tsx
let mod = fs.readFileSync('src/pages/modules/ModuleDetail.tsx', 'utf-8');
const modOld = `<a href={brand.links?.calendly || "https://calendly.com/d/dvzs-3zf-cgz"} target="_blank" rel="noopener noreferrer" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                    Book a Demo
                  </a>`;
const modNew = `<Link to="/purchase#inquiry" className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                    Organization Inquiry
                  </Link>`;
mod = mod.replace(modOld.replace(/\r\n/g, '\n'), modNew);
mod = mod.replace(modOld.replace(/\n/g, '\r\n'), modNew.replace(/\n/g, '\r\n'));
fs.writeFileSync('src/pages/modules/ModuleDetail.tsx', mod, 'utf-8');
console.log('Processed ModuleDetail.tsx');

// 3. SolutionDetail.tsx
let sol = fs.readFileSync('src/pages/solutions/SolutionDetail.tsx', 'utf-8');
const solOld = `<a href={brand.links?.calendly || 'https://calendly.com/d/dvzs-3zf-cgz'} className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>`;
const solNew = `<Link to="/purchase#inquiry" className="bg-sidqly-green-deep text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Organization Inquiry</Link>`;
sol = sol.replace(solOld, solNew);
fs.writeFileSync('src/pages/solutions/SolutionDetail.tsx', sol, 'utf-8');
console.log('Processed SolutionDetail.tsx');
