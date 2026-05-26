/**
 * Centralized color tokens for the portfolio site.
 * This file is the single source of truth for all colors.
 *
 * - `tailwind.config.ts` imports `colors` to expose Tailwind utility classes
 *   (e.g. `bg-primary-500`, `text-text-secondary`).
 * - `globals.css` references the corresponding `var(--color-…)` CSS variables
 *   that Tailwind generates from this object.
 *
 * Do NOT introduce raw hex / rgb / rgba literals anywhere else in the codebase.
 */

export const colors = {
  primary: {
    300: '#7dd3fc',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#93c5fd',
    800: '#bfdbfe',
  },
  accent: {
    cyan: '#38bdf8',
    deep: '#1e40af',
  },
  surface: {
    DEFAULT: '#05080f',
    card: 'rgba(255, 255, 255, 0.035)',
    'card-hover': 'rgba(96, 165, 250, 0.08)',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.07)',
    accent: 'rgba(59, 130, 246, 0.35)',
    'accent-strong': 'rgba(96, 165, 250, 0.5)',
  },
  text: {
    primary: '#e6edf7',
    secondary: '#94a3b8',
    muted: '#64748b',
  },
  glow: {
    'primary-soft': 'rgba(96, 165, 250, 0.22)',
    'primary-medium': 'rgba(96, 165, 250, 0.45)',
    'primary-strong': 'rgba(96, 165, 250, 0.7)',
    'cyan-soft': 'rgba(56, 189, 248, 0.1)',
    'badge-bg': 'rgba(59, 130, 246, 0.14)',
    'badge-bg-hover': 'rgba(59, 130, 246, 0.24)',
    'badge-border': 'rgba(59, 130, 246, 0.25)',
    'hero-glow': 'rgba(59, 130, 246, 0.38)',
    'btn-shadow': 'rgba(59, 130, 246, 0.3)',
    'grid-dot': 'rgba(125, 211, 252, 0.05)',
  },
} as const;

export type Colors = typeof colors;
