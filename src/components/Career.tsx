import React from 'react';

type Props = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

const Career = ({ company, term, contents, details }: Props) => {
  return (
    <article className="gh-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-fg-default">{company}</h3>
        <span className="gh-pill">{term}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent-fg">{contents}</p>
      <p className="mt-2 text-xs leading-relaxed text-fg-muted">{details}</p>
    </article>
  );
};

export default Career;
