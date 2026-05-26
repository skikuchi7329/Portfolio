import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import AmbientBackground from '../components/effects/AmbientBackground';
import CursorSpotlight from '../components/effects/CursorSpotlight';
import { colorRootCss } from '../styles/colorVariables';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorRootCss }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-grid-pattern font-sans text-text-primary antialiased">
        <AmbientBackground />
        <CursorSpotlight />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
