/**
 * Sidqly Design Tokens
 *
 * Centralized source of truth for the Sidqly visual and interaction design system.
 * These tokens map directly to existing colors, layout constraints, and accessibility rules.
 */

export const tokens = {
  // Existing visual identity colors
  colors: {
    green: {
      deep: '#0F4D3E',    // Deep green brand base
      emerald: '#15803D', // Action emerald green (CTAs)
      soft: '#A7F3D0',    // Background soft tint
    },
    gold: '#D4AF37',      // Special highlight gold
    navy: '#0B1D2A',      // Primary text and solid headers
    ivory: '#F8FAFC',     // Clean secondary backgrounds
    white: '#FFFFFF',
    border: '#E2E8F0',    // Light slate border line
    text: {
      primary: '#0B1D2A',
      secondary: '#475569',
      muted: '#64748B',
      light: '#94A3B8'
    }
  },

  // Consistent typography levels
  typography: {
    family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    sizes: {
      xs: 'text-xs',      // 12px
      sm: 'text-sm',      // 14px
      base: 'text-base',  // 16px
      lg: 'text-lg',      // 18px
      xl: 'text-xl',      // 20px
      '2xl': 'text-2xl',  // 24px
      '3xl': 'text-3xl',  // 30px
      '4xl': 'text-4xl',  // 36px
      '5xl': 'text-5xl',  // 48px
      '6xl': 'text-6xl',  // 60px
    },
    weights: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    }
  },

  // Layout spacing rhythm scale
  spacing: {
    xs: 'p-2 m-2',
    sm: 'p-4 m-4',
    md: 'p-6 m-6',
    lg: 'p-8 m-8',
    xl: 'p-12 m-12',
    layout: 'px-4 sm:px-6 lg:px-8',
  },

  // Consistent rounded shapes
  borderRadius: {
    sm: 'rounded-sm',     // 2px
    md: 'rounded-md',     // 6px
    lg: 'rounded-lg',     // 8px
    xl: 'rounded-xl',     // 12px
    '2xl': 'rounded-2xl', // 16px
    '3xl': 'rounded-3xl', // 24px
    'full': 'rounded-full',
  },

  // Consistent depth shadows
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },

  // Standardized Lucide and custom SVG icon sizes
  iconSizes: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  // Framer Motion & CSS transition timings
  motion: {
    durations: {
      fast: 0.15,
      normal: 0.25,
      slow: 0.4,
    },
    ease: 'easeInOut',
    // Shared framer-motion variants respecting prefers-reduced-motion
    pageTransition: {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -15 },
      transition: { duration: 0.25, ease: 'easeOut' }
    },
    microHover: {
      hover: { scale: 1.02 },
      tap: { scale: 0.98 },
      transition: { duration: 0.15, ease: 'easeInOut' }
    }
  }
};
