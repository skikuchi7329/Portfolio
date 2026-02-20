import React from 'react';

type Props = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

const Career = ({ company, term, contents, details }: Props) => {
  return (
    <div className="timeline-item pb-8">
      <div className="glass-card rounded-xl p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-text-primary">{company}</h3>
          <span className="tech-badge">{term}</span>
        </div>
        <p className="mb-2 text-sm font-medium text-primary-400">{contents}</p>
        <p className="text-sm leading-relaxed text-text-muted">{details}</p>
      </div>
    </div>
  );
};

export default Career;
