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

        <dl className="w-full space-y-4">
          {profileItems.map((item) => (
            <div
              key={item.label}
              className="sm:grid sm:grid-cols-[80px_1fr] sm:items-baseline sm:gap-4"
            >
              <dt className="text-sm font-semibold text-gray-500 dark:text-gray-400 sm:text-right sm:text-lg sm:text-gray-900 sm:dark:text-white">
                {item.label}：
              </dt>
              <dd className="pl-4 text-base sm:pl-0 sm:text-lg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
