import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const name: string = "Shohei Kikuchi";

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title || "my blog";
  return (
    <div className={styles.contaner}>
      <Head> 
        <title>{ pageTitle }</title>
        <meta name="description" content={ description || 'my blog'} />
      </Head>
        <header className={styles.header}>
          <h1><Link href="/">{ pageTitle }</Link></h1>
        </header>
        <main>
          <div>
            <h2>自己紹介</h2>
            <ul>
              <li>名前：{name}</li>
              <li>学歴：東京理科大学理学部第二部数学科</li>
              <li>趣味：プログラミング学習、お酒、ゲーム、アニメ、麻雀、温泉</li>
              <li></li>
            </ul>
          </div>
        </main>
        <footer className={styles.footer}>
          <a href="http://github.com/skikuchi7329" target="_blank">
            <Image priority src='/images/github.png' width={20} height={20} alt='logo'></Image>
          </a>
          <a href="http://twitter.com/shopecohealsu" target="_blank">
            <Image priority src='/images/twitter.png' width={20} height={20} alt='logo'></Image>
          </a>
        </footer>
    </div>
  );
}
