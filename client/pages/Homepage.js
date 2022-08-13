import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const Homepage = () => {
  const [timecuntdoum, settimer] = useState({
    days: 0,
    hours:0,
    minutes:0,
    seconds:0
  })

  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
    subHead: "text-center mt-3 text-xl text-white md:text-[24px] text-[18px] ",
    timerDiv: "bg-[#161B22] flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg w-40 md:w-60 ml-0 md:ml-6 mt-10"
  }

  // Set the date we're counting down to
  var countDownDate = new Date("AUG 12, 2022 11:26:00 pm").getTime();

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
    settimer({days, hours, minutes, seconds})

    
  }, 1000);
  
  
  let {days, hours, minutes, seconds} = timecuntdoum
  if(days < 0 && hours < 0 && minutes <0 && seconds<0){
    clearInterval(timer);
    if (typeof window !== "undefined") {
      document.getElementById("timer__section").style.display = 'none'
      document.getElementById("button_proceed").classList.remove("hidden")
    }  
  }

  if(days < 10) {
    days = "0"+days
  }
  if(hours < 10) {
    hours = "0"+hours
  }
  if(minutes < 10) {
    minutes = "0"+minutes
  }
  if(seconds < 10) {
    seconds = "0"+seconds
  }
   return (
    <>
      <div className='flex justify-center mt-8'>
        {/* Hero Section  */}
        <div>
          <h1 className={styles.heading + " text-white"}>CESA</h1>
          <p className={styles.subHead}>PRESENTS</p>
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>CRACK IT IF YOU CAN</h1>
          <p className={styles.subHead}>ON 3<sup>rd</sup> SEPTEMBER, 2022</p>
        </div>
      </div>

      {/* Timer Section  */}
      <div id="timer__section" className='container flex justify-center'>
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
        <div className="rounded-md shadow">
          <Link href='/Rules'>
            <a id="button_proceed" className="hidden w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Homepage







