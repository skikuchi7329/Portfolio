/**
 * Centralized color tokens for the portfolio site.
 * This file is the single source of truth for all colors.
 *
 * GitHub-inspired palette with explicit light / dark themes:
 * - light = white canvas + black text
 * - dark  = black canvas + white text
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
  canvas: '#ffffff',
  'canvas-subtle': '#f6f8fa',
  'canvas-inset': '#eff2f5',
  'fg-default': '#000000',
  'fg-muted': '#57606a',
  'fg-subtle': '#6e7781',
  'border-default': '#d0d7de',
  'border-muted': '#d8dee4',
  'accent-fg': '#0969da',
  'accent-emphasis': '#0969da',
  'accent-subtle': '#ddf4ff',
  'success-fg': '#1a7f37',
  'btn-bg': '#f6f8fa',
  'btn-hover-bg': '#eff2f5',
  'btn-primary-bg': '#1f883d',
  'btn-primary-hover-bg': '#1a7f37',
  'header-bg': '#ffffff',
  'header-fg': '#000000',
} as const;

type ColorToken = keyof typeof lightTheme;

const darkTheme: Record<ColorToken, string> = {
  canvas: '#000000',
  'canvas-subtle': '#0d1117',
  'canvas-inset': '#010409',
  'fg-default': '#ffffff',
  'fg-muted': '#9198a1',
  'fg-subtle': '#7d8590',
  'border-default': '#30363d',
  'border-muted': '#21262d',
  'accent-fg': '#58a6ff',
  'accent-emphasis': '#1f6feb',
  'accent-subtle': 'rgba(56, 139, 253, 0.15)',
  'success-fg': '#3fb950',
  'btn-bg': '#21262d',
  'btn-hover-bg': '#30363d',
  'btn-primary-bg': '#238636',
  'btn-primary-hover-bg': '#2ea043',
  'header-bg': '#000000',
  'header-fg': '#ffffff',
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
