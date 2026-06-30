# Performance Checklist

## Assets
- [ ] Images and logos use appropriate formats (SVG, WebP).
- [ ] `width` and `height` attributes are present on key images to prevent layout shift.
- [ ] Heavy third-party libraries (e.g., charting) are avoided in favor of lightweight CSS/SVG.

## Code
- [x] Route-based code splitting is enabled (handled natively by Vite).
- [x] Unnecessary JavaScript removed.
- [x] Tailwind CSS is optimized and unused classes are purged.

## Metrics (Target)
- [ ] Good LCP (Largest Contentful Paint).
- [ ] Minimal CLS (Cumulative Layout Shift).
- [ ] Fast TTFB (Time to First Byte) via Firebase Hosting CDN.
