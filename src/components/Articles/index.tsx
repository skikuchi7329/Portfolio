import Link from "next/link";
import  StyledArticle  from "./index.styled";

type Props = {
  title: string
  content: string
}

const Article = ({title, content}:Props) => {
  return (
    <StyledArticle>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
    </StyledArticle>
  )
}

export default Article;