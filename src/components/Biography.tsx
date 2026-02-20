import React from 'react';

const Biography = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="gradient-text mb-8 text-center text-3xl font-bold">Biography</h2>
        <div className="glass-card space-y-5 rounded-2xl p-6 sm:p-8">
          <p className="text-base leading-relaxed text-text-secondary">
            理科大数学科卒のエンジニア。在学時代の専攻は離散数学。
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            在学中に友人のフロントエンドエンジニアを師として、独学で勉強を進め、ホームページ作成の実務を経験。
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            その後、インターンのフロントエンドエンジニアとしてWEBサービスの開発に従事。
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            TypeScript, React, Nextjs等のモダンな技術を中心に日々勉強中。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
