import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border-default bg-canvas">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-fg-muted sm:flex-row">
        <p>&copy; 2025 Shohei Kikuchi</p>
        <nav className="flex items-center gap-4">
          <Link
            href="https://github.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link"
          >
            X (Twitter)
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
