import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description}: Props) {
  const pageTitle = title || 'my blog'
  return (
    <div className='wrap'>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ description || 'about my blog'} />
      </Head>
      <header>
        <h1>{ pageTitle }</h1>
      </header>
    </div>
  )
}