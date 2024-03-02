import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <title>Your Page Title</title>
        <meta name='description' content='Your page description' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
