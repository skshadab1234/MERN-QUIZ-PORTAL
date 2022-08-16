import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Head from 'next/head'
import QuestionsData from "../data/api_questions"

const Results = ({ token }) => {
  const [ResultData, setResultData] = useState([])
  var array = [
    {
      ranked: 4,
      name: "Khan Shadab Alam",
      Scored: "4/5",
      completeTime: "33 Minutes",
      performance: 'Good'
    },
    {
      ranked: 5,
      name: "Khan Mehtab",
      Scored: "4/5",
      completeTime: "33 Minutes",
      performance: 'Good'
    },
  ]
  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
  }

  const callResultData = async () => {
    try {
      const res = await fetch("/getWinnersList", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          QuestionsData
        })
    })
      const data = await res.json();
      if (!data.status === 200) {
        throw new Error(data.error);
      } else {
        // setResultData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(ResultData)

  useEffect(() => {
    callResultData()
  }, [])

  return (
    <>
      <Head>
        <title>Results - CESA -CSMIT</title>
        <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
      </Head>
      <div className='md:container md:mx-auto mb-10'>
        <Header token={token} />
        <div className='flex justify-center mt-8 '>
          {/* Rules Section  */}
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Congratulations!!</h1>
        </div>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-1  p-4 mt-10 '>

          <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative md:scale-115">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
              <img src="https://www.picng.com/upload/gold_medal/png_gold_medal_82717.png" className='w-20 md:w-24 absolute -bottom-12 right-2  md:right-8' />
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Khan Shadab Alam
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  7 Sem/B.E
                </div>
              </figcaption>
            </div>
          </figure>

          <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative md:transform  md:translate-y-28  md:scale-65 order-0 md:order-first">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
              <img src="https://www.pngmart.com/files/21/2nd-Award-PNG-Clipart.png" className='w-20 md:w-24 absolute -bottom-12 right-2  md:right-8' />
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Khan Shadab Alam
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  7 Sem/B.E
                </div>
              </figcaption>
            </div>
          </figure>

          <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative md:transform  md:translate-y-28 md:scale-65 ">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
              <img src="https://www.pngplay.com/wp-content/uploads/8/3rd-Place-Medal-Background-PNG-Image.png" className='w-16 md:w-24 absolute -bottom-10 right-2  md:right-8' />
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Khan Shadab Alam
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  7 Sem/B.E
                </div>
              </figcaption>
            </div>
          </figure>

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

                        array.map((element, i) => {
                          return <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-6xl text-yellow-400 font-medium ">
                                {element.ranked}
                              </td>
                              <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex md:justify-center">
                                <div className='w-3/5   flex flex-col md:flex-row justify-left'>
                                  <img className=" w-16 rounded-full" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" />
                                  <div className='md:ml-6 mt-2 font-bold tracking-wide'>
                                    <h3 >{element.name}</h3>
                                    <h3 className='font-light mt-1 text-left'>7<sup>th</sup>Sem/B.E</h3>
                                  </div>
                                </div>
                              </td>
                              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                4 / 5
                              </td>
                              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                23 Minutes
                              </td>

                              <td className="text-sm text-green-200 font-light px-6 py-4 whitespace-nowrap">
                                Good
                              </td>
                            </tr>
                          </>
                        })}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Results


export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}