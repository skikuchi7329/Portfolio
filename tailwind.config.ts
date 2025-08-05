import type { Config } from 'tailwindcss';

const config: Config = {
  // ...
  content: [
    // Next.jsのApp Routerでは、以下のパスを監視するのが一般的です
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ...
};
export default config;
