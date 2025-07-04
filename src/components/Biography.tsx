import React from 'react';
import styles from './Biography.module.scss';

const Biography = () => {
  return (
    <div>
      <h2 className={styles.title}>Biography</h2>
      <p className={styles.description}>
        紆余曲折を経て、現在理科大の数学科に所属しているエンジニアです。友人のフロントエンドエンジニアを師として、独学で勉強を進め、ホームページ作成の実務経験を2つ行いました。
        現在はTypeScritp, React, Nextjs等のモダンな技術を獲得するために日々勉強中です。
      </p>
      <p className={styles.description}>
        一方大学では、基礎数学(代数学、解析学、幾何学)だけでなく、統計学や情報数学、データサイエンス等を主に履修しております。簡単なマークアップや
        JavaScript等の簡単なコーディングから、Pythonを使用してのデータ解析等も行なっています。これらの経験を活かして、スマートなコーディングを心がけるようにしています。
      </p>
    </div>
  );
};

export default Biography;
