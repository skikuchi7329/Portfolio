import React from 'react';

type Props = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

const Career = ({ company, term, contents, details }: Props) => {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md transition-opacity duration-300 hover:opacity-80 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{term}</p>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">{contents}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{details}</p>
      </div>
    </div>
  );
};

export default Career;
