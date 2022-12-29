import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import { useRouter } from 'next/router'
import Link from 'next/link'

const user_settings = ({ token }) => {
    const router = useRouter()
    const [userdata, setuserdata] = useState([])
    const [profileLoading, setProfileLoading] = useState(true)
    const callData = async () => {
      try {
        const response = await fetch("/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        }
        )
        const data = await response.json();
        if (!data.status === 200) {
          throw new Error(data.error)
          router.push("/Login")
        } else {
          setProfileLoading(false)
          setuserdata(data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      callData()
    }, [])
  return (
    <>
      {
        userdata.email == 'ks615044@gmail.com' ? 
        <>
          <Head>
            <title>Setting - CESA -CSMIT</title>
            <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
          </Head>

            <div className='md:container md:mx-auto mb-10'>
              <Header token={token} />
            </div>
        </> : <>
        <Head>
            <title>Unauthorized Page</title>
            <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
          </Head>
            <div className='md:container md:mx-auto mb-10'>
            <Header token={token} />

              <div className='flex justify-center relative top-56'>
                <div className='text-center tracking-wide'>
                  <h3 className='text-white text-4xl'>You are not an authorized user to visit this page.</h3>
                  <h3 className='text-white text-4xl'>Go back to  
                    <Link href="/">
                      <a className='text-blue-500'> Homepage</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
        </>
      }
    </>
  )
}

export default user_settings