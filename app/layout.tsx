"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Article from "./components/Articles";
import { data, careerData } from "../data/index";
import Biography from "./components/Biography";
import Career from "./components/Career";
import { styled } from "@mui/material";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 36rem;
  padding: 0 1rem;
  margin: 0.5rem auto;
`;

const Title = styled("div")`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px double black;
  text-align: center;

  h1 {
    margin: 0 0 5px;
  }
`;

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ title, description }: Props) {
  const pageTitle = title || "my blog";
  return (
    <html lang="ja">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "my blog"} />
        <link rel="icon" href="/favicondog.ico" />
      </Head>
      <body>
        <Wrapper>
          <Header />
          <About />
          <Biography />
          <div className="Layout__title">
            <h1>Career</h1>
          </div>
          {careerData.map(({ company, term, contents, details }) => (
            <Career
              key={company}
              company={company}
              term={term}
              contents={contents}
              details={details}
            />
          ))}
          <Title>
            <h1>Works</h1>
          </Title>
          {data.map(({ title, content, language, link }) => (
            <Article
              key={title}
              title={title}
              content={content}
              language={language}
              link={link}
            />
          ))}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
