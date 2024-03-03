import '@/styles/globals.css'
import Nav from '../component/nav'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Your Page Title</title>
        <meta name='description' content='Your page description' />
    </Head>
    <Nav></Nav>
      <Component {...pageProps} />
    </>
  )
}
