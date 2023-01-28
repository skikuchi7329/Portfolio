import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'

const POSTS_DIRECTORIES = path.join(process.cwd(), 'posts')

type MatterResult = {
  content: string
  data: {
    title: string
  }
}

export type Post = {
  content: string
  title: string
}

// 全てのpostのid一覧を取得
export function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORIES)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '')
  })
}

// idからpostを取得する
export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(POSTS_DIRECTORIES, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContent)
  const matterResultData = matterResult.data as MatterResult['data']

  const processedContent = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(stringify)
    .process(matterResult.content)
  const content = processedContent.toString()

  return {
    content,
    ...matterResultData,
  }
}