import React from 'react';
import Career from './Career';
import type { CareerEntry } from '../../data';

type Props = {
  items: CareerEntry[];
};

/** `YYYY-MM` strings sort correctly as plain strings — newest first. */
const byStartDesc = (a: CareerEntry, b: CareerEntry) => b.start.localeCompare(a.start);

const CareerList = ({ items }: Props) => {
  const sorted = [...items].sort(byStartDesc);
  const ongoing = sorted.filter((item) => item.end === null);

  return (
    <div>
      <p className="label num mb-4">
        {sorted.length} 社 / {ongoing.length} 社が現在進行中
      </p>
      <ol className="m-0 list-none p-0">
        {sorted.map((item) => (
          <Career key={item.company} {...item} />
        ))}
      </ol>
    </div>
  );
};

export default CareerList;
