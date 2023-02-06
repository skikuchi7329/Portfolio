import Link from "next/link";
import  StyledArticle  from "./index.styled";

type Props = {
  title: string
  content: string
}

const Article = ({title, content}:Props) => {
  return (
    <StyledArticle>
      <h1 className="title">{title}</h1>
      <p className="content">{content}</p>
    </StyledArticle>
  )
}

export default Article;