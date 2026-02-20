import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold tracking-tight">
          <Link href="/" className="gradient-text no-underline transition-opacity hover:opacity-80">
            S.Kikuchi
          </Link>
        </h1>
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm text-text-secondary no-underline transition-colors hover:text-text-primary"
          >
            About
          </a>
          <a
            href="#career"
            className="text-sm text-text-secondary no-underline transition-colors hover:text-text-primary"
          >
            Career
          </a>
          <a
            href="#works"
            className="text-sm text-text-secondary no-underline transition-colors hover:text-text-primary"
          >
            Works
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
