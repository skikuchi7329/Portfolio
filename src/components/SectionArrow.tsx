import React from 'react';

type Props = {
  href: string;
  label?: string;
};

const SectionArrow = ({ href, label = 'Scroll down' }: Props) => (
  <div className="mt-10 flex justify-center">
    <a
      href={href}
      aria-label={label}
      className="scroll-indicator inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-primary-400 no-underline transition-colors hover:border-border-accent"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>
);

export default SectionArrow;
