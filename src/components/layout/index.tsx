import Head from "next/head";
import Header from "../Header/index";
import Footer from "../Footer";
import About from "../About/index";
import Article from "../Articles";
import { data } from "../../data";
import Biography from "../Biography";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title || "my blog";
  return (
    <StyledLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "my blog"} />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css" />
        <link rel="icon" href="/favicondog.ico" />
        <html data-theme="light"></html>
      </Head>
      <Header />
      <About />
      <Biography />
      <div className="works">
        <h1>Works</h1>
      </div>
      {data.map(({ title, content, language,link }) => (
        <Article title={title} content={content} language={language} link={link} />
      ))}
      <Footer />
    </StyledLayout>
  );
}


const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 36rem;
  padding: 0 1rem;
  margin: 0.5rem auto;

  .works  {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px double black;
    text-align: center;
  }

  h1 {
    margin: 0 0 5px;
  }
`