import React from 'react';
import data from '../../data.json';
import Image from 'next/image';

const About = () => {
  const profileItems = [
    { label: '名前', value: data.about.name },
    { label: '学歴', value: data.about.carrier },
    { label: '趣味', value: data.about.hobby },
    { label: '言語', value: data.about.language },
  ];

  return (
    <section id="about" className="w-full scroll-mt-20 py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="glow relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-border-accent ring-offset-2 ring-offset-surface">
            <Image
              className="h-full w-full object-cover"
              alt="profile icon"
              src="/images/profileIcon.jpg"
              width={128}
              height={128}
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="gradient-text mb-6 text-center text-3xl font-bold md:text-left">About</h2>

          <dl className="space-y-4">
            {profileItems.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-lg px-4 py-3 sm:grid sm:grid-cols-[80px_1fr] sm:items-baseline sm:gap-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-text-secondary sm:mt-0">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
