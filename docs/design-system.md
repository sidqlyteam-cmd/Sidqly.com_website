# Sidqly Design System Documentation

Welcome to the Sidqly Design System documentation. This systemization has been implemented to enforce maximum consistency, accessibility, and high performance across all Sidqly UI components without altering the pre-existing visual brand.

---

## 1. Design Tokens

Design tokens are defined centrally in `src/design/tokens.ts` and encompass the core variables for styling, sizing, and movement.

### Colors
- **Green Deep:** `#0F4D3E` — Primary brand context
- **Green Emerald:** `#15803D` — Prime action colors (buttons, interactive controls)
- **Green Soft:** `#A7F3D0` — Highlights and background soft washes
- **Gold:** `#D4AF37` — Luxury and trust badges
- **Navy:** `#0B1D2A` — Text and solid header containers
- **Ivory:** `#F8FAFC` — Light panel backgrounds

### Typography Hierarchy
- **Primary Font Family:** `Inter, system-ui, sans-serif`
- **Sizes:** mapped to standard tailwind font scales (`xs` through `6xl`)
- **Weights:** standard weights (`normal` up to `extrabold`)

### Spacing & Layout
Standardizes padding and margins across forms, headings, and cards to create a predictable visual rhythm. Layout widths use `px-4 sm:px-6 lg:px-8` to ensure responsive alignment.

---

## 2. Component Guidelines

Standardized UI components reside in `src/components/ui/` and serve as foundational elements across pages.

### Button (`src/components/ui/Button.tsx`)
- **Focus Indicators:** Includes high-contrast, offset focus outline styles (`focus-visible:ring-2 focus-visible:ring-sidqly-green-soft`).
- **Micro-interactions:** Configured with subtle hover/tap scale effects via Framer Motion.
- **Variants:**
  - `emerald`: Used for priority sign-ups and pilot applications.
  - `deep`: Standard action items.
  - `secondary` / `outline`: Muted actions.

### Card (`src/components/ui/Card.tsx`)
- Standardized container component with a custom `rounded-[32px]` border radius, subtle borders, and soft shadows.
- Supports `hoverable` motion cues.

### Input & Select (`src/components/ui/Input.tsx` / `Select.tsx`)
- Fully compliant form elements enforcing associated `<label>` references, visible borders, accessible validation states, and standard ARIA accessibility attributes (`aria-invalid`, `aria-describedby`).

---

## 3. Motion & Reduced Motion Rules

We use a fast, lightweight motion system:
1. **Subtle Transitions:** Page entrance transitions feature a 12px vertical slide-up coupled with an opacity fade over `0.25s`.
2. **Micro-animations:** Hover actions use minor scaling (`1.02`).
3. **Reduced Motion Protection:** All motion elements query the user's browser `prefers-reduced-motion` settings. When active, Framer Motion transitions are disabled instantly to protect accessibility.

---

## 4. Accessibility (A11y) Notes
- Input fields must have visible, readable label tags.
- Focus outlines are highly visible and never suppressed on interactive elements.
- ARIA-described tags explicitly reference error message fields so screen readers can narrate failures seamlessly.

---

## 5. Dependency Registry

All third-party libraries integrated within this visual and operational framework are permissive:

| Library Name | Version | License | Purpose |
|---|---|---|---|
| `react` | `^19.0.0` | MIT | Core UI component foundation |
| `react-dom` | `^19.0.0` | MIT | DOM rendering library |
| `framer-motion` | `^11.x` | MIT | Lightweight, accessible motion transitions |
| `lucide-react` | `^0.475.0` | ISC | Standardized vector visual icons |
| `react-router-dom` | `^7.1.5` | MIT | Routing and layout layers |
