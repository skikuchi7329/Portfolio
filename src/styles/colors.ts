/**
 * Centralized color tokens for the portfolio site.
 * This file is the single source of truth for all colors.
 *
 * Editorial palette — warm paper + ink, with a single accent (弁柄 / red ochre).
 * Deliberately not borrowed from any product UI: the site should read as a
 * printed page, not as a dashboard.
 *
 * - `tailwind.config.ts` imports `colors` (which are `var(--color-…)` aliases)
 *   to expose Tailwind utility classes (e.g. `bg-canvas`, `text-fg-default`).
 *   The actual values are resolved at runtime via CSS variables, so the same
 *   utility class flips with the active theme.
 * - `src/styles/colorVariables.ts` emits `:root { --color-…: … }` (light) and
 *   `html.dark { --color-…: … }` (dark) blocks injected into `<head>` from
 *   `app/layout.tsx`.
 *
 * Do NOT introduce raw hex / rgb / rgba literals anywhere else in the codebase.
 */

const lightTheme = {
  canvas: '#faf8f4',
  'canvas-subtle': '#f2efe8',
  'canvas-inset': '#e9e5db',
  'fg-default': '#17150f',
  'fg-muted': '#5b554a',
  'fg-subtle': '#8b8478',
  'border-default': '#dbd5c8',
  'border-muted': '#e7e2d8',
  'border-strong': '#17150f',
  'accent-fg': '#9a3b26',
  'accent-emphasis': '#9a3b26',
  'accent-subtle': '#f0e2dc',
  'accent-contrast': '#faf8f4',
  'btn-bg': 'transparent',
  'btn-hover-bg': '#e9e5db',
  'header-bg': 'rgba(250, 248, 244, 0.82)',
  'header-fg': '#17150f',
  'focus-ring': '#9a3b26',
} as const;

type ColorToken = keyof typeof lightTheme;

const darkTheme: Record<ColorToken, string> = {
  canvas: '#13120f',
  'canvas-subtle': '#1a1815',
  'canvas-inset': '#24211c',
  'fg-default': '#f3f0e8',
  'fg-muted': '#a6a094',
  'fg-subtle': '#7d7669',
  'border-default': '#302d27',
  'border-muted': '#242119',
  'border-strong': '#f3f0e8',
  'accent-fg': '#e3866a',
  'accent-emphasis': '#e3866a',
  'accent-subtle': '#2c211c',
  'accent-contrast': '#13120f',
  'btn-bg': 'transparent',
  'btn-hover-bg': '#24211c',
  'header-bg': 'rgba(19, 18, 15, 0.82)',
  'header-fg': '#f3f0e8',
  'focus-ring': '#e3866a',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

/**
 * Map every token to its `var(--color-…)` alias so Tailwind utilities resolve
 * through the runtime CSS variables (and therefore flip with the theme).
 */
export const colors: Record<ColorToken, string> = Object.fromEntries(
  (Object.keys(lightTheme) as ColorToken[]).map((key) => [key, `var(--color-${key})`])
) as Record<ColorToken, string>;

export type Colors = typeof colors;
