import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-header-bg text-header-fg">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-header-fg no-underline hover:opacity-80"
        >
          S.Kikuchi
        </Link>

        <nav className="ml-auto flex items-center gap-1">
          <a href="#about" className="gh-nav-link">
            About
          </a>
          <a href="#biography" className="gh-nav-link">
            Biography
          </a>
          <a href="#career" className="gh-nav-link">
            Career
          </a>
          <a href="#works" className="gh-nav-link">
            Works
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
