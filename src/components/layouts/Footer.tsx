import React from 'react';
import { profile } from '../../../data';

const Footer = () => {
  return (
    <footer className="border-t border-border-strong">
      <div className="mx-auto flex w-full max-w-[72rem] flex-col gap-3 px-6 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:px-10">
        <p className="label num m-0">© 2025 {profile.nameLatin}</p>
        <nav className="flex gap-6">
          {profile.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-accent-fg"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
