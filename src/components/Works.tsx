import React from 'react';

type Props = {
  title: string;
  content: string;
  link?: string;
  language: string;
};

const Works = ({ title, content, language, link }: Props) => {
  const languages = language.split('/').map((l) => l.trim());

  return (
    <article className="gh-card flex h-full flex-col p-5">
      <header className="flex items-center justify-between gap-3">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link truncate text-base font-semibold"
          >
            {title}
          </a>
        ) : (
          <span className="truncate text-base font-semibold text-fg-default">{title}</span>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="shrink-0 text-fg-muted hover:text-fg-default"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
            </svg>
          </a>
        )}
      </header>

      <p className="mt-3 flex-grow text-sm leading-relaxed text-fg-muted">{content}</p>

      <footer className="mt-4 flex flex-wrap gap-1.5">
        {languages.map((lang) => (
          <span key={lang} className="gh-pill">
            {lang}
          </span>
        ))}
      </footer>
    </article>
  );
};

export default Works;
