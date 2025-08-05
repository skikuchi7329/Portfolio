import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-4 py-8">
      <div className="flex items-center gap-x-6">
        <Link
          href="http://github.com/skikuchi7329"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-75"
        >
          <Image
            priority
            src="/images/github_icon.png"
            width={24}
            height={24}
            alt="GitHub logo"
            className="dark:invert"
          />
        </Link>
        <Link
          href="http://twitter.com/skikuchi7329"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-75"
        >
          <Image
            priority
            src="/images/x_icon.png"
            width={24}
            height={24}
            alt="X logo"
            className="dark:invert"
          />
        </Link>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; 2025 Shohei Kikuchi</p>
      </div>
    </footer>
  );
};

export default Footer;
