import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../ThemeToggle';
import { sections } from '../../constants/sections';
import { profile } from '../../../data';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-header-bg backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[72rem] items-baseline gap-5 px-6 py-3.5 sm:px-10">
        <Link href="/" className="font-serif text-base text-header-fg no-underline">
          {profile.nameLatin}
        </Link>

        <nav className="ml-auto hidden items-baseline gap-5 sm:flex">
          {sections.map(({ no, id, title }) => (
            <a key={id} href={`#${id}`} className="label hover:text-accent-fg">
              <span className="num mr-1.5">{no}</span>
              {title}
            </a>
          ))}
        </nav>

        <div className="ml-auto sm:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
