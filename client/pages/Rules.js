import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Link from 'next/link'
// import CallUserData from './Auth/CallUserData'
const Rules = ({token}) => {
    
    const styles =
    {
        heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
    }

    const rules = [
        "Fill up your personal details carefully.",
        "All questions are compulsory.",
        "Try to submit the paper in 40-45 minutes.",
        "You are allowed to submit only once, make sure that you have correctly attempted all the questions before submission.",
        "Never Copy and Paste."
    ]

     
    if(token != '') {
        var sendtothisPage = '/Questions'
    }else{
        var sendtothisPage = '/Login'
    }

    return (
        <div className='md:container md:mx-auto'>
            <Header  token={token}/>
            <div className='flex justify-center mt-8'>
                {/* Rules Section  */}
                <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>RULES</h1>
            </div>

            {/* RULES DISPLAY  */}
            <div className='m-auto w-4/5 bg-[#161B22] h-3/5 p-10  mt-5 rounded-lg text-white'>
                {rules.map((r, i) => {
                    return <h4 key={i} className='mb-5 text-xl'>{i + 1 + ". " + r}</h4>
                })}

                {/* Button Proceed to Login Form */}
                <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                    <div className="rounded-md shadow">
                        <Link href={sendtothisPage}>
                            <a id="button_proceed" className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Next
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules

export function getServerSideProps({ req, res}) {
    return { props: {token: req.cookies.jwtoken || ''}}
  }