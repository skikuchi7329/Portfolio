import type { Config } from 'tailwindcss';
import { colors } from './src/styles/colors';

/**
 * Type stack — deliberately mixed per script:
 *   serif : Instrument Serif for latin (loaded via next/font) +
 *           the OS 明朝 for Japanese (Hiragino on macOS/iOS, 游明朝 on
 *           Windows). Shippori Mincho sits *after* those on purpose: a
 *           webfont is only downloaded when the browser actually needs it
 *           to render a glyph, so most visitors pay nothing for it and
 *           Linux / Android still get a 明朝 face.
 *   mono  : JetBrains Mono for dates, numbers and labels.
 *   sans  : system UI stack for body copy — fast, and the plainness is
 *           what lets the serif headings carry the page.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Hiragino Sans',
          'Noto Sans JP',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'var(--font-display)',
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'YuMincho',
          'var(--font-mincho)',
          'Noto Serif JP',
          'serif',
        ],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
};
export default config;
