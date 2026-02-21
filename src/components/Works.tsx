import React from 'react';

type Props = {
  title: string;
  content: string;
  link?: string;
  language: string;
};

const Works = ({ title, content, language, link }: Props) => {
  const languages = language.split('/');

  return (
    <div className="glass-card group flex flex-col rounded-2xl p-6">
      <div className="flex flex-grow flex-col">
        <h3 className="mb-3 text-lg font-semibold text-text-primary transition-colors group-hover:text-primary-400">
          {title}
        </h3>
        <p className="mb-4 flex-grow text-sm leading-relaxed text-text-secondary">{content}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span key={lang} className="tech-badge">
              {lang.trim()}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start rounded-lg border border-border-accent bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 no-underline transition-all hover:bg-primary-500/20 hover:text-primary-400"
        >
          View Project
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default Works;
