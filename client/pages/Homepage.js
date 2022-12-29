import React, { useState, useEffect } from 'react'
import settings from '../data/settings'
import Moment from "moment";
import Link from "next/link"
import Rules from './Rules';
import HeroSection from "./components/Header/HeroSection"
import Footer from './components/Footer';
import { useRouter } from 'next/router';

const Homepage = () => {
  const [settingsdata, setsettingsdata] = useState([])
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleClick = (value) => {
    router.push({
      pathname: '/competitors',
      query: { value },
    });
  };

  const styles =
  {
    heading: "font-bold md:text-[46px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
  }
  useEffect(() => {
    settings().then((res) => {
      setsettingsdata(res)
      setLoading(false)
    })
  }, [settingsdata])

  return (
    <div className="md:container md:mx-auto">
      <HeroSection />

      <div className='mt-20'>
        {/* <h1 className={styles.h?eading+ " text-white"}>Welcome to <span className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>CIIYC</span> Contest</h1>  */}
      </div>
      <div className='mt-20'
        data-aos="fade-up"
        data-aos-duration="1000"
        >
        {/* Upcomeing Event Section  */}
        <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>CIIYC Batch</h1>
      </div>
      <div className="py-8" 
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
          >
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal dark_theme text-white">
              <thead>
                <tr>
                  <th scope="col" className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                    Batch No
                  </th>
                 
                  <th scope="col" className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                    Start Time
                  </th>
                  <th scope="col" className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                    End Time
                  </th>
                  <th scope="col" className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                    Competitors
                  </th>
                  <th scope="col" className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                    Status
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {
                  isLoading ? "" :
                    settingsdata.map((tabdata, i) => {
                      var now = new Date();
                      var d = new Date(tabdata.testDate + " " + tabdata.testEndtime); // pass all the parameters you need to create the time
                      return <>
                        <tr key={i}>
                          <td className="px-5 py-5  text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-white-900 whitespace-no-wrap">
                                  {i + 1}
                                </p>
                              </div>
                            </div>
                          </td>
                          
                          <td className="px-5 py-5  text-sm">
                            <p className="text-white-900 whitespace-no-wrap">
                              {Moment(tabdata.testDate + " " + tabdata.testTime).format('llll')}

                            </p>
                          </td>
                          <td className="px-5 py-5  text-sm">
                            <p className="text-white-900 whitespace-no-wrap">
                              {Moment(tabdata.testDate + " " + tabdata.testEndtime).format('llll')}

                            </p>
                          </td>
                          <td className="px-5 py-5  text-sm">
                            <p className="text-white-900 whitespace-no-wrap">
                              <button onClick={() => handleClick(i+1)} className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
                                <span aria-hidden="true" className="absolute inset-0 bg-blue-200 opacity-50 rounded-full">
                                </span>
                                <span className="relative">
                                  View Competitors
                                </span>
                              </button>

                            </p>
                          </td>
                          <td className="px-5 py-5  text-sm">
                            {
                              now.getTime() > d.getTime() ? <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                                </span>
                                <span className="relative">
                                  Test Ended
                                </span>
                              </span> :
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                  </span>
                                  <span className="relative">
                                    Active
                                  </span>
                                </span>
                            }
                          </td>
                          {/* <td className="px-5 py-5 text-sm">
                            {
                              now.getTime() > d.getTime() ? "-" : <button className='bg-[#2190FF] p-2 w-52 hover:bg-[#2170EE] rounded-full'>Proceed</button>
                            }
                          </td> */}
                        </tr>
                      </>
                    })

                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  )
}

export default Homepage