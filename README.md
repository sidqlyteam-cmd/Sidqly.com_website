# Sidqly Public Website v1.5

Verified giving. Protected dignity. Clear impact. The premium operating platform for modern Islamic organizations.

## Tech Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- React Helmet Async (for SEO)

## Local Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173)

## Build and Preview
- Build: `npm run build`
- Preview: `npm run preview`
- Typecheck: `npm run typecheck`

## Deployment Checklist
- [ ] Run `npm run build`
- [ ] Verify `dist/` content
- [ ] Initialize Firebase: `firebase init hosting` (use existing `firebase.json`)
- [ ] Deploy: `firebase deploy --only hosting`

## Custom Domain Checklist (sidqly.com)
- [ ] Configure A records in DNS
- [ ] Verify SSL certificate in Firebase Console
- [ ] Update `MainLayout.tsx` and `SEO.tsx` if domain changes

## SEO & LLMO Checklist
- [ ] Verify `sitemap.xml` links
- [ ] Verify `robots.txt` accessibility
- [ ] Check `llms.txt` and markdown summaries for accuracy
- [ ] Validate JSON-LD structured data on key pages
