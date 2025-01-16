"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Article from "./components/Articles";
import { data, careerData } from "../data/index";
import Biography from "./components/Biography";
import Career from "./components/Career";
import { styled } from "@mui/system";

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

export default function Page() {
  return (
    <>
      <Head>
        <title key="title">My Portfolio</title>
        <meta key="description" content="description" name="description" />
      </Head>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}
