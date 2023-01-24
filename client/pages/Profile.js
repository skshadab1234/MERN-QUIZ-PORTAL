import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from './components/Header/Header'
import Head from 'next/head'
import Link from 'next/link'

const Profile = ({ token }) => {
  const router = useRouter();
  const [userdata, setuserdata] = useState({})
  const [isLoading, setLoading] = useState(true)
  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
    subHead: "text-center mt-3 text-xl text-white md:text-[24px] text-[18px] ",
    timerDiv: "bg-[#161B22] flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg w-40 md:w-60 ml-0 md:ml-6 mt-10"
  }

  function getFirstString(text) {
    if (text) {
      var text_arr = text.split(" ");
      return text_arr[0].charAt(0) + "" + text_arr[text_arr.length - 1].charAt(0);
    }
  }

  const callProfilePage = async () => {
    try {
      const response = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      }
      )

      const data = await response.json();
      setuserdata(data);
      setLoading(false)
      if (!response.status === 200) {
        throw new Error(response.error);
        router.push("/Login")
      }
    } catch (error) {
      console.log(error);
      router.push("/Login")

    }
  }

  useEffect(() => {
    callProfilePage()
  }, [])


  return (
    <div className='md:container md:mx-auto'>
      <Head>
                <title>{userdata.candidate_name} Profile - CESA -CSMIT</title>
                <link rel="icon" type="image/x-icon"  href='logo-sm.jpg' />
      </Head>
      <Header token={token} />
      <div className='flex justify-center mt-8'>
        {/* Hero Section  */}
        <div>
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Profile</h1>
        </div>
      </div>

      {/* Profile body */}
      {
        isLoading ?
          <div className='flex justify-center h-80 place-items-center'>
            <svg class="inline mr-2 w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          :
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap  ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="my-4">
                  <div className="image overflow-hidden flex justify-center">
                    <h1 className='text-white cursor-default select-none hover:bg-gradient-to-l bg-gradient-to-r from-[#0099CC] to-[#9933FF] flex justify-center text-8xl font-bold p-6 rounded-full w-52 place-items-center h-48'>{getFirstString(userdata.candidate_name)}</h1>
                  </div>
                  {/* <h1 className="text-white text-center font-bold text-xl leading-8 my-4">{userdata.candidate_name}</h1> */}
                </div>
              </div>
              <div className="w-full md:w-9/12 h-64">
                <div className="dark_theme p-3 shadow-sm my-4 rounded-sm p-6">
                  <div className="text-white">
                    <div className="grid md:grid-cols-2">
                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Full Name</div>
                        <div className="px-4 py-2">{userdata.candidate_name}</div>
                      </div>

                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Email</div>
                        <div className="px-4 py-2">
                          <div >{userdata.email}</div>
                        </div>
                      </div>

                    </div>

                    <div className="grid md:grid-cols-2">
                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Year of Study</div>
                        <div className="px-4 py-2">{userdata.YearofStudy}</div>
                      </div>

                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Semester</div>
                        <div className="px-4 py-2">
                          <div >{userdata.Semester}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Test Scored</div>
                        <div className="px-4 py-2">
                          <div>{userdata.score}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1">
                        <div className="px-4 py-2 text-gray-500 font-semibold">Result Declaration</div>
                        <div className="px-4 py-2">
                            <Link href={"/detaiilResult"} className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
                              <a>
                                <span aria-hidden="true" className="inset-0 bg-blue-200 opacity-50 rounded-full">
                                </span>
                                <span className="relative">
                                  View Result
                                </span>
                              </a>
                            </Link>
                          </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
      }
    </div>
  )
}

export default Profile

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}