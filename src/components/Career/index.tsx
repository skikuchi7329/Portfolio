import StyledCareer from "./index.styled";

type Props = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

const Career = ({ company, term, contents, details }: Props) => {
  return (
    <StyledCareer>
      <h2 className="company">{company}</h2>
      <p className="term">{term}</p>
      <p className="contents">{contents}</p>
      <p className="details">{details}</p>
    </StyledCareer>
  );
};

export default Career;
