import type { Metadata } from 'next';
import About from '../components/About';
import Works from '../components/Works';
import { data, careerData } from '../../data/index';
import Biography from '../components/Biography';
import CareerList from '../components/CareerList';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shohei Kikuchi | Frontend Engineer',
  description: 'フロントエンドエンジニア 菊池翔平のポートフォリオサイト',
};

const TabIcon = {
  Overview: (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M1.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H1.75ZM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm3 1.5v1.5h1.5v-1.5H3Zm-.75-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75ZM3 10.25v1.5h1.5v-1.5H3Zm-.75-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75ZM9.5 4.25v1.5H11v-1.5H9.5Zm-.75-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75ZM9.5 10.25v1.5H11v-1.5H9.5Zm-.75-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" />
    </svg>
  ),
  Repo: (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  ),
  Star: (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  ),
};

const Counter = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-canvas-subtle px-1.5 text-xs font-medium text-fg-default">
    {children}
  </span>
);

export default function Page() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
      {/* Profile tabs (GitHub-style) */}
      <nav
        aria-label="Profile sections"
        className="-mx-4 mb-6 flex items-center gap-1 overflow-x-auto border-b border-border-default px-4 pt-6 sm:-mx-6 sm:px-6"
      >
        <a href="#about" className="gh-tab is-active">
          {TabIcon.Overview} Overview
        </a>
        <a href="#works" className="gh-tab">
          {TabIcon.Repo} Repositories <Counter>{data.length}</Counter>
        </a>
        <a href="#career" className="gh-tab">
          {TabIcon.Star} Career <Counter>{careerData.length}</Counter>
        </a>
      </nav>

      {/* Two-column profile layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[296px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="md:sticky md:top-20 md:self-start">
          <About />
        </aside>

        {/* Main content */}
        <div className="flex flex-col gap-8">
          {/* Pinned / Works */}
          <section id="works" className="scroll-mt-20">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="gh-section-heading border-b-0 pb-0">Pinned</h2>
              <a href="#works" className="gh-link text-sm">
                Customize your pins
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.map(({ title, content, language, link }) => (
                <Works
                  key={title}
                  title={title}
                  content={content}
                  language={language}
                  link={link}
                />
              ))}
            </div>
          </section>

          {/* Biography */}
          <section id="biography" className="scroll-mt-20">
            <h2 className="gh-section-heading mb-4">Biography</h2>
            <Biography />
          </section>

          {/* Career */}
          <section id="career" className="scroll-mt-20">
            <h2 className="gh-section-heading mb-4">
              Career
              <span className="ml-2 align-middle font-normal text-fg-muted">
                {careerData.length} entries
              </span>
            </h2>
            <CareerList items={careerData} />
          </section>
        </div>
      </div>
    </div>
  );
}
