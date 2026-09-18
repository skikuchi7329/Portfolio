'use client';

import React, { useId, useState } from 'react';
import type { CareerEntry } from '../../data';

const formatMonth = (value: string) => value.replace('-', '.');

export const formatTerm = ({ start, end }: Pick<CareerEntry, 'start' | 'end'>) =>
  `${formatMonth(start)} — ${end ? formatMonth(end) : '現在'}`;

/**
 * One ledger row. The whole row is the disclosure control, so the table
 * stays dense by default and opens to the full story on demand.
 */
const Career = ({ company, start, end, role, summary, details, stack, team }: CareerEntry) => {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const ongoing = end === null;

  return (
    <li className="rule">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="group grid w-full grid-cols-1 gap-x-6 gap-y-2 py-5 text-left md:grid-cols-[9.5rem_minmax(0,1fr)_auto]"
      >
        <span className="label num flex items-center gap-2 pt-1 md:block">
          {formatTerm({ start, end })}
          {ongoing && <span className="now-dot" aria-label="現在稼働中" />}
        </span>

        <span className="min-w-0">
          <span className="block font-serif text-lg leading-snug text-fg-default group-hover:text-accent-fg">
            {company}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-fg-muted">{summary}</span>
          <span className="mt-2 block">
            {stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </span>
        </span>

        <span className="label flex items-center gap-3 self-start pt-1 md:justify-end">
          <span>{role}</span>
          {team && <span className="num">{team}</span>}
          <span aria-hidden className="text-fg-subtle group-hover:text-accent-fg">
            {open ? '−' : '+'}
          </span>
        </span>
      </button>

      <div id={detailsId} hidden={!open} className="pb-6 md:pl-[10.5rem]">
        <p className="measure m-0 text-sm leading-[2] text-fg-muted">{details}</p>
      </div>
    </li>
  );
};

export default Career;
