import { useEffect } from 'react';
import Head from 'next/head'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

