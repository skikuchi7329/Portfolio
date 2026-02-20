import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border-subtle">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10">
        <p className="gradient-text text-lg font-bold">S.Kikuchi</p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex h-10 w-10 items-center justify-center rounded-full"
          >
            <Image
              priority
              src="/images/github_icon.png"
              width={18}
              height={18}
              alt="GitHub"
              className="invert"
            />
          </Link>
          <Link
            href="https://twitter.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex h-10 w-10 items-center justify-center rounded-full"
          >
            <Image
              priority
              src="/images/x_icon.png"
              width={18}
              height={18}
              alt="X (Twitter)"
              className="invert"
            />
          </Link>
        </div>

        <p className="text-xs text-text-muted">&copy; 2025 Shohei Kikuchi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
