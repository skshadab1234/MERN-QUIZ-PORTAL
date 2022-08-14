import React from 'react'
import Header from './components/Header/Header'
const Results = ( {token }) => {
  return (
    <Header  token={token}/>
  )
}

export default Results


export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}