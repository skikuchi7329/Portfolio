import React from 'react';
import Profile from '../components/Profile';
import Biography from '../components/Biography';
import CareerList from '../components/CareerList';
import Works from '../components/Works';
import { career, profile, works } from '../../data';
import { sections } from '../constants/sections';

const CONTAINER = 'mx-auto w-full max-w-[72rem] px-6 sm:px-10';

const firstYear = career
  .reduce((earliest, item) => (item.start < earliest ? item.start : earliest), career[0].start)
  .slice(0, 4);
const ongoingCount = career.filter((item) => item.end === null).length;

const facts = [
  { label: '実務', value: `${firstYear}年〜` },
  { label: '関わった会社', value: `${career.length}社` },
  { label: '現在', value: `${ongoingCount}社と並行` },
  { label: '専攻', value: profile.major },
];

type SectionProps = {
  index: number;
  children: React.ReactNode;
};

/**
 * Sections are positioned on a 12-column grid rather than stacked in
 * equal blocks: the heading rail stays with the reader while the
 * content column scrolls.
 */
const Section = ({ index, children }: SectionProps) => {
  const { no, id, title, en } = sections[index];

  return (
    <section id={id} className="scroll-mt-20 border-t border-border-default">
      <div className={`${CONTAINER} grid gap-x-10 gap-y-8 py-14 md:grid-cols-12 md:py-20`}>
        <header className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <p className="label num m-0">{no}</p>
            <h2 className="mt-1.5 font-serif text-2xl leading-tight text-fg-default">{title}</h2>
            <p className="label mt-1">{en}</p>
          </div>
        </header>
        <div className="rise md:col-span-9">{children}</div>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <>
      {/* Hero — asymmetric: the name owns two thirds, the facts sit in the
          remaining column, aligned to the same baseline as the rule below. */}
      <section className="border-b border-border-strong">
        <div className={`${CONTAINER} grid gap-10 pt-16 pb-12 md:grid-cols-12 md:pt-28 md:pb-16`}>
          <div className="md:col-span-8">
            <p className="label m-0">
              {profile.role} / {profile.base}
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3.25rem,11vw,7rem)] leading-[0.92] tracking-tight text-fg-default">
              {profile.name}
            </h1>
            <p className="mt-3 font-serif text-[clamp(1.25rem,3vw,2rem)] italic leading-none text-fg-muted">
              {profile.nameLatin}
            </p>
          </div>

          <dl className="m-0 md:col-span-4 md:self-end">
            {facts.map(({ label, value }) => (
              <div key={label} className="rule flex items-baseline justify-between gap-4 py-2.5">
                <dt className="label">{label}</dt>
                <dd className="num m-0 text-sm text-fg-default">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section index={0}>
        <div className="space-y-12">
          <Biography />
          <Profile />
        </div>
      </Section>

      <Section index={1}>
        <CareerList items={career} />
      </Section>

      <Section index={2}>
        <ol className="m-0 list-none p-0">
          {works.map((work, index) => (
            <Works key={work.title} work={work} index={index} />
          ))}
        </ol>
      </Section>
    </>
  );
}
