import React from 'react'
import Homepage from './Homepage'
import Header from './components/Header/Header'
import Head from 'next/head'
const index = ({token}) => {
  return (
    <div className='md:container md:mx-auto'> 
    <Head>
      <title>Crack It If You Can - CESA -CSMIT</title>
      <link rel="icon" type="image/x-icon"  href='logo-sm.jpg' />
    </Head>
      <Header  token={token}/> 
      <Homepage />
    </div>
  )
}

export default index

export function getServerSideProps({ req, res}) {
  return { props: {token: req.cookies.jwtoken || ''}}
}