import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html data-theme="light">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );    
  }
}

export default Document;