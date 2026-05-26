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
    <div className="space-y-3">
      {visibleItems.map(({ company, term, contents, details }) => (
        <Career key={company} company={company} term={term} contents={contents} details={details} />
      ))}
      {hasMore && (
        <div className="flex justify-center pt-1">
          <button type="button" onClick={() => setExpanded((prev) => !prev)} className="gh-btn">
            {expanded ? 'Show less' : `Show ${sortedItems.length - initialVisibleCount} more`}
          </button>
        </div>
      )}
    </div>
  );
};

export default CareerList;
