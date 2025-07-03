'use client';

import Head from 'next/head';
import About from './components/About';
import Works from './components/Works';
import { data, careerData } from '../data/index';
import Biography from './components/Biography';
import Career from './components/Career';
import { styled } from '@mui/system';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1000px;
  padding: 0 1rem;
  margin: 0rem auto;
`;

const Title = styled('div')`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px double black;
  text-align: center;

  h1 {
    margin: 0 0 5px;
  }
`;

const GridWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  transition: 0.5s;

  & > div:hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Page() {
  return (
    <>
      <Head>
        <title key="title">My Portfolio</title>
        <meta key="description" content="description" name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <About />
        <Biography />
        <Title>
          <h1>Career</h1>
        </Title>
        <GridWrapper>
          {careerData.map(({ company, term, contents, details }) => (
            <Career
              key={company}
              company={company}
              term={term}
              contents={contents}
              details={details}
            />
          ))}
        </GridWrapper>
        <Title>
          <h1>Works</h1>
        </Title>
        <GridWrapper>
          {data.map(({ title, content, language, link }) => (
            <Works key={title} title={title} content={content} language={language} link={link} />
          ))}
        </GridWrapper>
      </Wrapper>
    </>
  );
}
