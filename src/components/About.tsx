import React from 'react';
import data from '../../data.json';
import Image from 'next/image';

const About = () => {
  const profileItems = [
    { label: '名前', value: data.about.name },
    { label: '学歴', value: data.about.carrier },
    {
      label: '言語',
      value: Array.isArray(data.about.language)
        ? data.about.language.join(' ')
        : data.about.language,
    },
    {
      label: '趣味',
      value: Array.isArray(data.about.hobby) ? data.about.hobby.join(' ') : data.about.hobby,
    },
  ];

  return (
    <div className="gh-card p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-default">
            <Image
              className="h-full w-full object-cover"
              alt="profile icon"
              src="/images/profileIcon.jpg"
              width={112}
              height={112}
              priority
            />
          </div>
        </div>

        <dl className="flex-1 space-y-3">
          {profileItems.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[64px_1fr] items-baseline gap-3 text-sm"
            >
              <dt className="font-semibold text-fg-muted">{item.label}</dt>
              <dd className="text-fg-default">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
