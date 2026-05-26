import { colors } from './colors';

/**
 * Build a CSS `:root { --color-…: …; }` block from the `colors` tokens so
 * `globals.css` can reference `var(--color-…)`. Keeps `colors.ts` as the
 * single source of truth.
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

export const colorCssVariables = flatten(colors)
  .map(({ name, value }) => `  ${name}: ${value};`)
  .join('\n');

export const colorRootCss = `:root {\n${colorCssVariables}\n}`;
