import React from 'react';
import type { Work } from '../../data';

type Props = {
  work: Work;
  index: number;
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden>
    <path d="M3.22 12.78a.75.75 0 0 1 0-1.06L10.44 4.5H5.25a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V5.56l-7.22 7.22a.75.75 0 0 1-1.06 0Z" />
  </svg>
);

/**
 * A ruled list entry, not a card: the numeral and the year hold the grid,
 * the title carries the weight.
 */
const Works = ({ work, index }: Props) => {
  const { title, year, role, content, stack, link } = work;
  const number = String(index + 1).padStart(2, '0');

  const heading = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="linkline">
      {title}
    </a>
  ) : (
    title
  );

  return (
    <li className="rule group grid grid-cols-1 gap-x-6 gap-y-2 py-6 md:grid-cols-[2.5rem_minmax(0,1fr)_auto]">
      <span className="label num pt-2">{number}</span>

      <div className="min-w-0">
        <h3 className="m-0 flex items-baseline gap-2 font-serif text-2xl leading-tight text-fg-default">
          {heading}
          {link && (
            <span className="text-fg-subtle transition-colors group-hover:text-accent-fg">
              <Arrow />
            </span>
          )}
        </h3>
        <p className="measure mt-2 text-sm leading-relaxed text-fg-muted">{content}</p>
        <p className="mt-2">
          {stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </p>
      </div>

      <span className="label num flex gap-3 whitespace-nowrap pt-2 md:flex-col md:items-end md:gap-1 md:text-right">
        <span>{year}</span>
        <span>{role}</span>
      </span>
    </li>
  );
};

export default Works;
