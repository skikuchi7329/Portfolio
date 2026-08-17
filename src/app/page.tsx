import type { Metadata } from 'next';
import About from '../components/About';
import Works from '../components/Works';
import { data, careerData } from '../../data/index';
import Biography from '../components/Biography';
import CareerList from '../components/CareerList';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shohei Kikuchi | Frontend Engineer',
  description: 'フロントエンドエンジニア 菊地昇平のポートフォリオサイト',
};

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="scroll-mt-20 text-2xl font-bold text-fg-default">
    {children}
  </h2>
);

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-20 text-center sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-fg-muted">
          Frontend Engineer
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-fg-default sm:text-5xl">
          Shohei Kikuchi
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
          TypeScript / React / Next.js を中心としたモダンな Web 開発に取り組んでいます。
        </p>
      </section>

      <div className="flex flex-col gap-16 pb-20">
        <section>
          <SectionHeading id="about">About</SectionHeading>
          <div className="mt-6">
            <About />
          </div>
        </section>

        <section>
          <SectionHeading id="biography">Biography</SectionHeading>
          <div className="mt-6">
            <Biography />
          </div>
        </section>

        <section>
          <SectionHeading id="career">Career</SectionHeading>
          <div className="mt-6">
            <CareerList items={careerData} />
          </div>
        </section>

        <section>
          <SectionHeading id="works">Works</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.map(({ title, content, language, link }) => (
              <Works key={title} title={title} content={content} language={language} link={link} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
