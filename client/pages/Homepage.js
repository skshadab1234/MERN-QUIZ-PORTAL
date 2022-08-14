import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import settings from '../data/settings'
const Homepage = () => {

  const [timecuntdoum, settimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [addLoding, setLoading] = useState(false)
  const router = useRouter();
const [Settings, setSetting] = useState([])
  useEffect(() => {
    settings().then(res => {
      setSetting(res)
    }).catch(err => console.log(err))
  }, [])
  

  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
    subHead: "text-center mt-3 text-xl text-white md:text-[24px] text-[18px] ",
    timerDiv: "dark_theme flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg w-40 md:w-60 ml-0 md:ml-6 mt-10"
  }

  // Set the date we're counting down to
  var countDownDate = new Date("AUG 14, 2022 3:58:00 pm").getTime();

  // Update the count down every 1 second
  var timer = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    settimer({ days, hours, minutes, seconds })

  }, 1000);
    

  let { days, hours, minutes, seconds } = timecuntdoum
  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    clearInterval(timer);
    if (typeof window !== "undefined") {
      document.getElementById("button_proceed").classList.remove("hidden")
      document.getElementById("timer__section").classList.add('hidden')
    }
  }

  if (days < 10) {
    days = "0" + days
  }
  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  return (
    <div className='h-full'>
      <div className='flex justify-center mt-8'>
        {/* Hero Section  */}
        <div>
          {/* <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Welcome, Khan Shadab Alam</h1> */}
          <h1 className={styles.heading + " text-white"}>CESA</h1>
          <p className={styles.subHead}>PRESENTS</p>
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>CRACK IT IF YOU CAN</h1>
          <p className={styles.subHead}>ON {Settings.testDate}</p>
        </div>
      </div>

      {/* Timer Section  */}
      <div id="timer__section" className=' container flex justify-center'>
        <div className='p-3 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3'>
          <div className={styles.timerDiv}>
            <h1><span id="days">{days}</span> <span className='text-base font-light'>Days</span></h1>
          </div>
          <div className={styles.timerDiv}>
            <h1><spam id="hours">{hours}</spam>  <span className='text-base	font-light'>Hours</span> </h1>
          </div>
          <div className={styles.timerDiv}>
            <h1><span id="mins">{minutes}</span>  <span className='text-base	font-light'>Min</span> </h1>
          </div>
          <div className={styles.timerDiv}>
            <h1><span id="secs">{seconds}</span>  <span className='text-base	font-light'>Sec</span> </h1>
          </div>
        </div>
      </div>

      {/* Button Proceed to Rules  */}
      <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow flex justify-center ">
          <a id="button_proceed"
            onClick={() => {
              setLoading(true)
              setTimeout(() => {
                router.push("/Rules")
              }, 1000);
            }}
            className="hidden cursor-pointer w-40 md:w-60 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            {addLoding ? <><div role="status">
              <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div> </> : "Get started"} 
          </a>

        </div>
      </div>
    </div>
  )
}

export default Homepage







