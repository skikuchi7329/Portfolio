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
    <div className="w-full py-16">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        <Image
          className="mb-6 h-24 w-24 rounded-full object-cover"
          alt="profile icon"
          src="/images/profileIcon.jpg"
          width={100}
          height={100}
        />
        <h2 className="mb-8 w-full border-b border-double border-gray-400 pb-2 text-center text-2xl font-bold dark:border-gray-600">
          About
        </h2>

        <dl className="space-y-4">
          {profileItems.map((item) => (
            <div key={item.label} className="grid grid-cols-[80px_1fr] items-baseline gap-4">
              <dt className="hidden text-right text-sm font-semibold text-lg sm:block">
                {item.label}
              </dt>
              <dd className="text-base text-lg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
