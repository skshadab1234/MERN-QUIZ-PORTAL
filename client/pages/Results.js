import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Head from 'next/head'
import QuestionsData from "../data/api_questions"
import { useRouter } from 'next/router'
import Moment from "moment";
import settings from '../data/settings'
const Results = ({ token }) => {
  const [ResultData, setResultData] = useState([])
  const [userdata, setuserdata] = useState({})
  const router = useRouter()
  const settingsData = settings()
  const [settingall, setSettings] = useState([])
  let [timerend, setTimerEnd] = useState(10)

  const timerLoad = setInterval(() => {
    if (timerend > 0) {
        timerend--
        setTimerEnd(timerend)
    } else {
      timerend = 0
    }
  }, 1000)

  useEffect(() => {
    clearInterval(timerLoad)
  }, [timerend])


  useEffect(() => {
    settingsData.then(res => {
      setSettings(res)
    }).catch(err => console.log(err))
  }, [])

  function getFirstString(text) {
    if (text) {
      var text_arr = text.split(" ");
      return text_arr[0].charAt(0) + "" + text_arr[text_arr.length - 1].charAt(0);
    }
  }

  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
      hours = hours + 24;

    return (hours <= 0 ? "" : (hours <= 9 ? "0" : "") + hours + " Hours ") + (minutes <= 9 ? "0" : "") + minutes + ' Minutes';
  }
  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
  }

  const StoreUserScore = async () => {
    // Get USer Details
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
      } else {
        // Getting User Score
        try {
          const res = await fetch("/GetUserScore", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              data,
              QuestionsData
            })
          })
          const scoreData = await res.json();
          if (!scoreData.status === 200) {
            throw new Error(scoreData.error);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
      router.push("/Login")
    }


  }

  const callResultData = async () => {
    try {
      const res = await fetch("/getWinnersList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          QuestionsData
        })
      })
      const data = await res.json();
      if (!data.status === 200) {
        throw new Error(data.error);
      } else {
        setResultData(data);

      }
    } catch (error) {
      console.log(error);
    }
  }

  let sortedList = ResultData.filter((v, i, a) => a.findIndex(v2 => ['email'].every(k => v2[k] === v[k])) === i)

  // Sorting Our Array in case of score and time taken 
  sortedList.sort((a, b) => {
    if (a.score == b.score) return a.SubmitTime - b.SubmitTime;
    return b.score - a.score;
  })

  useEffect(() => {
    StoreUserScore()
    callResultData()
  }, [settingall])

  return (
    <>
      <Head>
        <title>Results - CESA -CSMIT</title>
        <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
      </Head>
      <div className='md:container md:mx-auto mb-10'>
        <Header token={token} />
        {
          // check if test end time is greater than current time then show wait for Test Ending 
          new Date().getTime() < new Date(settingall.testDate+" "+settingall.testEndtime).getTime() ? 
          <>
             <div className="dark_theme relative top-[200px]">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                      <span className="block text-indigo-600">Let everyone submit their test after that you will be able to see your score and rank.</span>
                    </h2>
                  </div>
              </div>
          </> :
          // Checking when 10s timer ended 
           timerend > 0 ? <>
            <div className='text-white flex flex-col justify-center h-[80vh] place-items-center'>
              <h2 className='p-9 transition animate-bounce text-9xl font-bold'>{timerend}</h2>
              <h2 className='text-lg'>Generating Results <span className='animate-ping '>...</span></h2>
              <h2 className='text-sm mt-20 text-gray-500'>Do not close or change this tab.</h2>
            </div>
          </> : 
          (typeof sortedList !== 'undefined' && sortedList.length > 0) ? 
          <>
            <div className='flex justify-center mt-8 '>
              {/* Rules Section  */}
              <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Congratulations!!</h1>
            </div>

            <div className='grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-1  p-4 mt-10 '>

              {
                sortedList.map((ele, index) => {
                  return index < 3 ? <>
                    <figure className={`md:flex dark_theme rounded-xl p-8 md:p-0  relative ${index == 1 ? "order-0 md:order-first md:transform  md:translate-y-28  md:scale-[.9]" : index == 2 ? "md:transform  md:translate-y-28  md:scale-[.9] " : index == 0 ? "md:scale-[1.1]" : ""}`}>
                      {/* <img className="w-28 h-28  md:w-38 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" /> */}
                      <div className='w-28 h-28  md:w-38 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto flex justify-center place-items-center border-r-2 border-indigo-400 bg-[#2C2448]'>
                        <h2 className='text-4xl md:text-5xl font-bold text-white '>
                          {getFirstString(ele.candidate_name)}
                        </h2>
                      </div>
                      <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                        <h1 className='font-bold text-8xl text-yellow-400 absolute right-5 -bottom-8 '>
                          {index + 1}
                        </h1>
                        <figcaption className="font-medium">
                          <div className="text-sky-500 ">
                            {ele.candidate_name}
                          </div>
                          <div className="text-slate-300 text-sm">
                            <h2>{ele.Semester} / {ele.YearofStudy}</h2>
                            <h2>{diff(settingall.testTime, Moment(ele.SubmittedTime).format('LTS'))}</h2>
                            {settingall.totalQuestion == ele.score ? <p className='text-green-500 text-lg font-bold'>Excellent</p> :
                              ele.score == 0 ? <p className='text-red-500 text-lg font-bold'>Work Hard</p> :
                                <p className='text-orange-500 text-lg font-bold'>Good Job</p>}
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  </> : ""
                })
              }

            </div>

            {/* View All Users Results  */}
            <div className='relative md:top-[200px] top-[10px] w-full p-3  overflow-x-hidden'>
              <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden" >
                      <table className="min-w-full dark_theme text-white rounded-xl">
                        <thead>
                          <tr>
                            <th scope="col" className="text-sm px-6 py-4 text-center font-bold">
                              Ranked
                            </th>
                            <th scope="col" className="text-sm px-6 py-4 text-center font-bold">
                              Profile / Name
                            </th>
                            <th scope="col" className="text-sm px-6 py-4 text-center font-bold">
                              Scored
                            </th>
                            <th scope="col" className="text-sm px-6 py-4 text-center font-bold">
                              Completion Time
                            </th>
                            <th scope="col" className="text-sm px-6 py-4 text-center font-bold">
                              Performance
                            </th>
                          </tr>
                        </thead>
                        <tbody className='text-center'>
                          {

                            sortedList.map((element, i) => {
                              return i > 2 ? <>
                                <tr >
                                  <td key={i} className="px-6 py-4 whitespace-nowrap text-6xl text-yellow-400 font-medium ">
                                    {i + 1}
                                  </td>
                                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex md:justify-center">
                                    <div className='w-3/5   flex flex-col md:flex-row justify-left'>
                                      <div className='w-16 h-16  md:w-18 md:h-auto  rounded-full md:mx-0 mx-auto flex justify-center place-items-center border-2 border-indigo-400 bg-[#2C2448]'>
                                        <h2 className='text-md md:text-xl font-bold text-white'>
                                          {getFirstString(element.candidate_name)}
                                          {/* {element.score} */}
                                        </h2>
                                      </div>
                                      <div className='md:ml-6 mt-2 font-bold tracking-wide text-left'>
                                        <h3 >{element.candidate_name}</h3>
                                        <h3 className='font-light mt-1 text-left'>{element.Semester} / {element.YearofStudy}</h3>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                    {element.score} / {settingall.totalQuestion}
                                  </td>

                                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                    {diff(settingall.testTime, Moment(element.SubmittedTime).format('LTS'))}
                                  </td>

                                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                    {settingall.totalQuestion == element.score ? <p className='text-green-500 text-lg font-bold'>Excellent</p> :
                                      element.score == 0 ? <p className='text-red-500 text-lg font-bold'>Work Hard</p> :
                                        <p className='text-orange-500 text-lg font-bold'>Good Job</p>}
                                  </td>
                                </tr>
                              </> : ''
                            })}

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </> : <div className="dark_theme relative top-[200px]">
                  <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8  text-center">
                    <h2 className="font-bold ">
                      <span className="text-gray-500  text-lg md:text-3xl "> No one submitted the Response </span>
                      {/* <span className="block text-indigo-600">Let everyone submit their test after that you will be able to see your score and rank.</span> */}
                    </h2>
                  </div>
              </div>
        }

      </div>

    </>
  )
}

export default Results


export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}