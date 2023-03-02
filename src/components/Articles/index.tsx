import  StyledArticle  from "./index.styled";

type Props = {
  title: string
  content: string
  link?: string
  language: string
}

const Article = ({title, content, language,link}:Props) => {
  return (
    <StyledArticle>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <p>{language}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </StyledArticle>
  )
}

export default Article;