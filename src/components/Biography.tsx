import React from 'react';

const paragraphs = [
  '理科大数学科卒のエンジニア。在学時代の専攻は離散数学。',
  '在学中に友人のフロントエンドエンジニアを師として、独学で勉強を進め、ホームページ作成の実務を経験。',
  'その後、インターンのフロントエンドエンジニアとしてWEBサービスの開発に従事。',
  'TypeScript, React, Nextjs等のモダンな技術を中心に日々勉強中。',
];

const Biography = () => {
  return (
    <article className="gh-card p-5">
      <div className="space-y-3 text-sm leading-relaxed text-fg-default">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
};

export default Biography;
