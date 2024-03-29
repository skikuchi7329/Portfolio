import Head from "next/head";
import Header from "../Header/index";
import Footer from "../Footer";
import About from "../About/index";
import Article from "../Articles";
import { data } from "../../data";
import { careerData } from "../../data";
import Biography from "../Biography";
import Career from "../Career";
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
        <link rel="icon" href="/favicondog.ico" />
      </Head>
      <Header />
      <About />
      <Biography />
      <div className="Layout__title">
        <h1>Career</h1>
      </div>
      {careerData.map(({ company, term, contents, details }) => (
        <Career key={company} company={company} term={term} contents={contents} details={details} / >
      ))}
      <div className="Layout__title">
        <h1>Works</h1>
      </div>
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

  .Layout__title {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px double black;
    text-align: center;
  }

  h1 {
    margin: 0 0 5px;
  }
`;
