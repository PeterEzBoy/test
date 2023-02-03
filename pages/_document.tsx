import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <script src='/assets/js/main.min.js' async />
        <NextScript />
      </body>
    </Html>
  )
}
