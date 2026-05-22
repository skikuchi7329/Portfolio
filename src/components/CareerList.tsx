'use client';

import React, { useMemo, useState } from 'react';
import Career from './Career';

type CareerItem = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

type Props = {
  items: CareerItem[];
  initialVisibleCount?: number;
};

const DEFAULT_INITIAL_VISIBLE_COUNT = 5;
const YEAR_MONTH_ENCODING_BASE = 100;
const INVALID_DATE_SORT_KEY = 0;

const parseStartDate = (term: string): number => {
  const match = term.match(/(\d{4})\/(\d{1,2})/);
  if (!match) return INVALID_DATE_SORT_KEY;
  const year = Number(match[1]);
  const month = Number(match[2]);
  return year * YEAR_MONTH_ENCODING_BASE + month;
};

const CareerList = ({ items, initialVisibleCount = DEFAULT_INITIAL_VISIBLE_COUNT }: Props) => {
  const sortedItems = useMemo(
    () => [...items].sort((a, b) => parseStartDate(b.term) - parseStartDate(a.term)),
    [items]
  );

  const [expanded, setExpanded] = useState(false);
  const hasMore = sortedItems.length > initialVisibleCount;
  const visibleItems = expanded ? sortedItems : sortedItems.slice(0, initialVisibleCount);

  return (
    <>
      {visibleItems.map(({ company, term, contents, details }) => (
        <Career key={company} company={company} term={term} contents={contents} details={details} />
      ))}
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-border-accent bg-primary-500/10 px-6 py-2.5 text-sm font-medium text-primary-400 transition-all hover:bg-primary-500/20"
          >
            {expanded ? 'Show less' : 'Load more...'}
          </button>
        </div>
      )}
    </>
  );
};

export default CareerList;
