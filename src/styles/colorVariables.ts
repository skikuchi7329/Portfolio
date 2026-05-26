import { themes } from './colors';

/**
 * Build CSS `:root { --color-…: …; }` (light) and
 * `html.dark { --color-…: … }` (dark) blocks from the `themes` tokens so
 * `globals.css` can reference `var(--color-…)` and have it flip with the
 * active theme. Keeps `colors.ts` as the single source of truth.
 */
const toCssVarName = (path: string[]) => {
  const segments = path.map((segment) => (segment === 'DEFAULT' ? '' : segment)).filter(Boolean);
  return `--color-${segments.join('-')}`;
};

const flatten = (value: unknown, path: string[] = []): Array<{ name: string; value: string }> => {
  if (typeof value === 'string') {
    return [{ name: toCssVarName(path), value }];
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => flatten(child, [...path, key]));
  }
  return [];
};

const toDeclarations = (palette: Record<string, unknown>) =>
  flatten(palette)
    .map(({ name, value }) => `  ${name}: ${value};`)
    .join('\n');

const lightDeclarations = toDeclarations(themes.light);
const darkDeclarations = toDeclarations(themes.dark);

export const colorCssVariables = lightDeclarations;

export const colorRootCss = `:root {
  color-scheme: light;
${lightDeclarations}
}
html.dark {
  color-scheme: dark;
${darkDeclarations}
}`;
