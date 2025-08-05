import type { Metadata } from 'next';
import About from '../components/About';
import Works from '../components/Works';
import { data, careerData } from '../../data/index';
import Biography from '../components/Biography';
import Career from '../components/Career';
import React from 'react';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'ポートフォリオサイト',
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full border-b border-double border-black text-center dark:border-white">
    <h1 className="mb-1.5 text-2xl font-bold">{children}</h1>
  </div>
);

export default function Page() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center px-4">
      <About />
      <Biography />
      <div className="my-8 w-full">
        <SectionTitle>Career</SectionTitle>
        <div className="grid grid-cols-1 gap-2.5 py-8 sm:grid-cols-2">
          {careerData.map(({ company, term, contents, details }) => (
            <Career
              key={company}
              company={company}
              term={term}
              contents={contents}
              details={details}
            />
          ))}
        </div>
      </div>

      <div className="my-8 w-full">
        <SectionTitle>Works</SectionTitle>
        <div className="grid grid-cols-1 gap-2.5 py-8 sm:grid-cols-2">
          {data.map(({ title, content, language, link }) => (
            <Works key={title} title={title} content={content} language={language} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
