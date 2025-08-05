import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">
        <Link href="/" className="text-zinc-100 no-underline transition-colors hover:text-zinc-300">
          Welcome To My Blog
        </Link>
      </h1>
    </header>
  );
};

export default Header;
