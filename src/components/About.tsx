import React from 'react';
import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const profileItems = [
    {
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01Z" />
        </svg>
      ),
      label: data.about.carrier,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.189l2.72-2.719a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Z" />
        </svg>
      ),
      label: Array.isArray(data.about.language)
        ? data.about.language.join(' ')
        : data.about.language,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M8 0a.75.75 0 0 1 .671.415l1.945 3.94 4.348.632a.75.75 0 0 1 .416 1.279l-3.146 3.067.742 4.328a.75.75 0 0 1-1.088.791L8 12.347l-3.888 2.105a.75.75 0 0 1-1.088-.79l.742-4.328L.62 6.266a.75.75 0 0 1 .416-1.28l4.348-.63L7.329.415A.75.75 0 0 1 8 0Z" />
        </svg>
      ),
      label: Array.isArray(data.about.hobby) ? data.about.hobby.join(' ') : data.about.hobby,
    },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      {/* Avatar */}
      <div className="flex justify-center md:justify-start">
        <div className="relative h-[260px] w-[260px] max-w-full overflow-hidden rounded-full border border-border-default">
          <Image
            className="h-full w-full object-cover"
            alt="Shohei Kikuchi"
            src="/images/profileIcon.jpg"
            width={296}
            height={296}
            priority
          />
        </div>
      </div>

      {/* Name */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold leading-tight text-fg-default">{data.about.name}</h1>
        <p className="text-xl font-light text-fg-muted">skikuchi7329</p>
      </div>

      {/* Bio */}
      <p className="mt-4 text-base leading-snug text-fg-default">
        Frontend Engineer working with TypeScript / React / Next.js.
      </p>

      {/* Follow-style button */}
      <div className="mt-4">
        <a href="#works" className="gh-btn w-full">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
            <path d="M10.5 5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm.5 5a4.875 4.875 0 0 1 0-9.75 4.875 4.875 0 0 1 0 9.75ZM7 11.5c-2.21 0-4 1.79-4 4v.5h8v-.5c0-2.21-1.79-4-4-4Z" />
          </svg>
          Follow
        </a>
      </div>

      {/* Profile info list */}
      <ul className="mt-4 space-y-2 text-sm text-fg-default">
        {profileItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-fg-muted">{item.icon}</span>
            <span className="break-words">{item.label}</span>
          </li>
        ))}
        <li className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-fg-muted">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </span>
          <Link
            href="https://github.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link"
          >
            @skikuchi7329
          </Link>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-fg-muted">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M11.92 0H14.4l-5.4 6.17L15.36 16h-5L6.45 10.4 1.93 16H-.55l5.78-6.6L-.83 0h5.13l3.55 4.94L11.92 0Zm-.87 14.5h1.38L4.05 1.42H2.55l8.5 13.08Z" />
            </svg>
          </span>
          <Link
            href="https://twitter.com/skikuchi7329"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-link"
          >
            @skikuchi7329
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default About;
