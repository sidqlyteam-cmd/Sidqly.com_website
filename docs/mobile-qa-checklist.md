# Mobile QA Checklist

## Navigation
- [x] Hamburger menu opens/closes properly.
- [x] Menu items are easily tappable (min 44x44px target).
- [x] Dropdown sections expand/collapse without jumping.
- [x] Menu overlay does not overflow device height (`max-h-[calc(100vh-80px)]` applied).

## Layout & Spacing
- [x] No horizontal scrolling on 320px, 375px, 390px, and 414px breakpoints.
- [x] Padding and margins scale down appropriately on small screens.
- [x] Data tables and grids are responsive (e.g., Calendar grid uses `gap-1 sm:gap-2` and `text-[8px] sm:text-[9px]`).

## Forms & Interactions
- [x] CTA buttons stack vertically or wrap gracefully on mobile.
- [x] Input fields have sufficient height and do not zoom unnecessarily on iOS Safari.
- [x] Tooltips or hover states have click-alternatives for touch devices.
