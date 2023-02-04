import { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import style from './index.module.css' 

type Props = {
  title: string
  content: string
}

const Post: NextPage<Props> = ({ title, content }) => {
  return ( 
      <div className={style.article}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.content}>{content}</p>
      </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: {id:'1'}},
      { params: {id:'2'}},
    ],
    fallback: false
  }
}

export const dummyData = {
  1:{
    title: 'id1のtitle',
    content: 'id1のcontext',
  },
  2:{
    title: 'id2のtitle',
    content: 'id2のcontext',
  },
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props: Props = dummyData[params!.id as '1'|'2']
  return { props }
}


export default Post;