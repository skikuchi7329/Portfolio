import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head></head>
      <body className="bg-[#101218] text-[#cdcdcd] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
