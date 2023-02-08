import Link from "next/link";
import  StyledArticle  from "./index.styled";

type Props = {
  title: string
  content: string
  link?: string
}

const Article = ({title, content, link}:Props) => {
  return (
    <StyledArticle>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <a href="{link}">{link}</a>
    </StyledArticle>
  )
}

export default Article;