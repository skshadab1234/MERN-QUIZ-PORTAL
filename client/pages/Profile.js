import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from './components/Header/Header'

const Profile = ({token}) => {
  const router = useRouter();
  const [userdata, setuserdata] = useState({})

  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
    subHead: "text-center mt-3 text-xl text-white md:text-[24px] text-[18px] ",
    timerDiv: "bg-[#161B22] flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg w-40 md:w-60 ml-0 md:ml-6 mt-10"
  }
  
  function getFirstString(text) {
    if(text) {
      var text_arr = text.split(" ");
      return text_arr[0].charAt(0) + "" + text_arr[text_arr.length-1].charAt(0);
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
      <Header  token={token}/>
      <div className='flex justify-center mt-8'>
        {/* Hero Section  */}
        <div>
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Profile</h1>
        </div>
      </div>

      {/* Profile body */}
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="">
              <div className="image overflow-hidden flex justify-center">
                <h1 className='text-white bg-[#757B80] flex justify-center text-8xl font-bold p-6 rounded-full w-52 place-items-center h-48'>{getFirstString(userdata.candidate_name)}</h1>
              </div>
              {/* <h1 className="text-white text-center font-bold text-xl leading-8 my-4">{userdata.candidate_name}</h1> */}
            </div>
          </div>
          <div className="w-full md:w-9/12 h-64">
            <div className="bg-[#303134] p-3 shadow-sm my-4 rounded-sm p-6">
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
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

export function getServerSideProps({ req, res}) {
  return { props: {token: req.cookies.jwtoken || ''}}
}