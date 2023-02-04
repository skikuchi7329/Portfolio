import Link from "next/link";
import  StyledArticles  from "./index.styled";
import {dummyData} from "../../pages/posts/[id]/index";


const Articles = () => {
  return (
    <StyledArticles>
      <h1 className="title"><Link href="/posts/1">{dummyData[1].title}</Link></h1>
      <p className="content">{dummyData[1].content}</p>
    </StyledArticles>
  )
}

export default Articles;