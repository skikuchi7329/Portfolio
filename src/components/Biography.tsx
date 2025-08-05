import React from 'react';

const Biography = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-prose">
        <h2 className="mb-5 border-b border-double border-gray-400 pb-2 text-center text-2xl font-bold">
          Biography
        </h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-justify">
            理科大数学科卒のエンジニア。在学時代の専攻は離散数学。
          </p>
          <p className="text-lg leading-relaxed text-justify">
            在学中に友人のフロントエンドエンジニアを師として、独学で勉強を進め、ホームページ作成の実務を経験。
          </p>
          <p className="text-lg leading-relaxed text-justify">
            その後、インターンのフロントエンドエンジニアとしてWEBサービスの開発に従事。
          </p>
          <p className="text-lg leading-relaxed text-justify">
            TypeScript, React, Nextjs等のモダンな技術を中心に日々勉強中。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
