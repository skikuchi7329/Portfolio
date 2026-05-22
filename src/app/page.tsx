import type { Metadata } from 'next';
import About from '../components/About';
import Works from '../components/Works';
import { data, careerData } from '../../data/index';
import Biography from '../components/Biography';
import CareerList from '../components/CareerList';
import ScrollReveal from '../components/effects/ScrollReveal';
import SectionArrow from '../components/SectionArrow';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shohei Kikuchi | Frontend Engineer',
  description: 'フロントエンドエンジニア 菊池翔平のポートフォリオサイト',
};

const SectionHeader = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div id={id} className="mb-10 scroll-mt-20 text-center">
    <h2 className="gradient-text inline-block text-3xl font-bold">{children}</h2>
    <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary-400 to-accent-cyan" />
  </div>
);

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero Section */}
      <section className="relative flex min-h-[78vh] flex-col items-center justify-center pb-8 pt-16 text-center">
        <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="hero-enter relative flex flex-col items-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-400">
            Frontend Engineer
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-text-primary sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Shohei Kikuchi</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-text-secondary">
            TypeScript / React / Next.js を中心としたモダンなWeb開発に取り組んでいます。
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#about"
              className="btn-glow rounded-full bg-primary-500 px-6 py-2.5 text-sm font-medium text-white no-underline transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30"
            >
              About Me
            </a>
            <a
              href="#works"
              className="rounded-full border border-border-accent bg-primary-500/10 px-6 py-2.5 text-sm font-medium text-primary-400 no-underline transition-all hover:bg-primary-500/20 hover:border-primary-400"
            >
              View Works
            </a>
          </div>
          <SectionArrow href="#about" label="Scroll to About" />
        </div>
      </section>

      {/* About */}
      <ScrollReveal>
        <About />
        <SectionArrow href="#biography" label="Scroll to Biography" />
      </ScrollReveal>

      {/* Biography */}
      <ScrollReveal delay={80}>
        <Biography />
        <SectionArrow href="#career" label="Scroll to Career" />
      </ScrollReveal>

      {/* Career Section */}
      <ScrollReveal>
        <section className="py-16">
          <SectionHeader id="career">Career</SectionHeader>
          <div className="mx-auto max-w-2xl">
            <CareerList items={careerData} />
          </div>
          <SectionArrow href="#works" label="Scroll to Works" />
        </section>
      </ScrollReveal>

      {/* Works Section */}
      <ScrollReveal>
        <section className="py-16">
          <SectionHeader id="works">Works</SectionHeader>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.map(({ title, content, language, link }) => (
              <Works key={title} title={title} content={content} language={language} link={link} />
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
