# Sidqly Public Website v1.5

This repository contains the source code for the official Sidqly marketing website.

## Project Overview
Sidqly is a premium Islamic operating platform for verified giving, protected dignity, and clear impact.

## Brand Identity
- **Logo:** White rounded square with blue/deep-green Islamic geometric border.
- **Colors:** Deep Green (#0F4D3E), Emerald Green (#15803D), Soft Green (#A7F3D0), Gold Accent (#D4AF37), charcoalNavy (#0B1D2A), Warm Ivory (#F8FAFC), White (#FFFFFF), Slate Text (#475569), Logo Blue Border (#1E4E8C).
- **Tagline:** Verified giving. Protected dignity. Clear impact.

## Tech Stack
- Vite
- React 19
- TypeScript
- Tailwind CSS v4
- React Router

## Local Setup
1. Clone the repository.
2. Install dependencies: `npm install --legacy-peer-deps`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`
5. Lint the project: `npm run lint`

## Firebase Hosting Deployment
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize (if not done): `firebase init` (select Hosting)
4. Deploy: `firebase deploy`

## Custom Domain Checklist (sidqly.com)
- [ ] Connect domain in Firebase Console.
- [ ] Update DNS records (A/TXT) as provided by Firebase.
- [ ] Verify SSL certificate generation.
- [ ] Set up Google Search Console.
- [ ] Set up Bing Webmaster Tools.

## Lead Capture & Official Links
- **Calendly Demo:** https://calendly.com/d/dvzs-3zf-cgz
- **Google Inquiry Form:** https://forms.gle/bvSMog9pw2Ri4kMt9
- **Email:** team@sidqly.com

## Official Payment Details
- **Payment Method:** Easypaisa Pakistan
- **IBAN:** PK19TMFB0000000060685814
- **Confirmation Email:** team@sidqly.com

## SEO & AI (GEO/LLMO)
The website includes specialized files for search engines and AI crawlers in the `public/` directory:
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `ai-summary.md`
- `ai-crawlers-policy.md`
- `schema-map.md`
- ... and other summary markdown files.

## Directory Structure
- `src/pages`: Website pages.
- `src/components`: Reusable UI components and diagrams.
- `src/data`: Blog content and FAQs.
- `src/config`: Brand configuration.
- `public`: Static assets and SEO/AI files.
