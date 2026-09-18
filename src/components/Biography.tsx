import React from 'react';
import { profile } from '../../data';

/**
 * Lead paragraph set larger than the rest — the one place on the page
 * where the prose is allowed to take the stage.
 */
const Biography = () => {
  const [lead, ...rest] = profile.bio;

  return (
    <div className="measure">
      <p className="m-0 font-serif text-xl leading-[1.9] text-fg-default sm:text-2xl">{lead}</p>
      <div className="mt-6 space-y-4 text-sm leading-[2] text-fg-muted">
        {rest.map((paragraph) => (
          <p key={paragraph} className="m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Biography;
