import React from 'react';

type Props = {
  title: string;
  content: string;
  link?: string;
  language: string;
};

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  React: '#61dafb',
  'Next.js': '#000000',
  'styled-components': '#db7093',
  pug: '#a86454',
  SCSS: '#c6538c',
  CSS: '#563d7c',
  HTML: '#e34c26',
};

const dotFor = (lang: string) => langColor[lang] ?? '#8b949e';

const Works = ({ title, content, language, link }: Props) => {
  const languages = language.split('/').map((l) => l.trim());
  const primaryLang = languages[0];

  return (
    <article className="gh-card flex h-full flex-col p-4">
      <header className="flex items-center gap-2">
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden
          className="text-fg-muted"
        >
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
        </svg>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link truncate text-sm font-semibold"
          >
            {title}
          </a>
        ) : (
          <span className="truncate text-sm font-semibold text-fg-default">{title}</span>
        )}
        <span className="gh-pill ml-1">Public</span>
      </header>

      <p className="mt-2 line-clamp-3 flex-grow text-xs leading-relaxed text-fg-muted">{content}</p>

      <footer className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-muted">
        {primaryLang && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="gh-lang-dot"
              style={{ backgroundColor: dotFor(primaryLang) }}
              aria-hidden
            />
            {primaryLang}
          </span>
        )}
        {languages.slice(1).map((lang) => (
          <span key={lang} className="inline-flex items-center gap-1.5">
            <span className="gh-lang-dot" style={{ backgroundColor: dotFor(lang) }} aria-hidden />
            {lang}
          </span>
        ))}
      </footer>
    </article>
  );
};

export default Works;
