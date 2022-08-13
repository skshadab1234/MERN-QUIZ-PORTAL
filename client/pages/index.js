import React from 'react'
import Homepage from './Homepage'
import Header from './components/Header/Header'

const index = ({token}) => {
  return (
    <div className='md:container md:mx-auto'> 
      <Header  token={token}/> 
      <Homepage />
    </div>
  )
}

export default index

export function getServerSideProps({ req, res}) {
  return { props: {token: req.cookies.jwtoken || ''}}
}