import React from 'react';

type Props = {
  title: string;
  content: string;
  link?: string;
  language: string;
};

const Works = ({ title, content, language, link }: Props) => {
  return (
    // カード全体のコンテナ
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md transition-opacity duration-300 hover:opacity-80 dark:border-gray-700 dark:bg-gray-800">
      {/* メインコンテンツ部分 */}
      <div className="flex flex-grow flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">{content}</p>
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400">{language}</p>
      </div>

      {/* リンクが存在する場合のみボタンを表示 */}
      {link && (
        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gray-800 px-5 py-2 text-sm font-medium text-white no-underline transition hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            詳細を見る
          </a>
        </div>
      )}
    </div>
  );
};

export default Works;
