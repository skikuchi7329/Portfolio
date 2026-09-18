import React from 'react';
import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono, Shippori_Mincho } from 'next/font/google';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { colorRootCss } from '../styles/colorVariables';
import { profile } from '../../data';
import './globals.css';

/**
 * Latin display face. Japanese headings fall through to the OS 明朝
 * (see `tailwind.config.ts`), so no CJK webfont is shipped.
 */
const display = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

/**
 * Japanese 明朝 fallback for platforms without one installed. Placed last in
 * the serif stack (`tailwind.config.ts`), so browsers that already have
 * Hiragino / 游明朝 never fetch it.
 */
const mincho = Shippori_Mincho({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mincho',
});

const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: `${profile.nameLatin} — ${profile.role}`,
    template: `%s | ${profile.nameLatin}`,
  },
  description: `${profile.role}・${profile.name}のポートフォリオ。${profile.stack.slice(0, 3).join(' / ')} を中心に、受託から自社プロダクトまで。`,
  authors: [{ name: profile.nameLatin }],
  openGraph: {
    type: 'profile',
    locale: 'ja_JP',
    title: `${profile.nameLatin} — ${profile.role}`,
    description: `${profile.name}のポートフォリオ。${profile.stack.slice(0, 3).join(' / ')}。`,
  },
  twitter: {
    card: 'summary',
    title: `${profile.nameLatin} — ${profile.role}`,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${mincho.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorRootCss }} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-canvas font-sans text-fg-default antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
