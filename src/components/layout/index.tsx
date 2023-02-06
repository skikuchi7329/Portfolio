import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import Header from "../Header/index";
import Footer from "../Footer";
import About from "../About/index";
import Article from "../Articles";
import { data } from "../../data";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title || "my blog";
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "my blog"} />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css" />
      </Head>
      <Header />
      <About />
      {data.map(({ title, content }) => (
        <Article title={title} content={content} />
      ))}
      <Footer />
    </div>
  );
}
