import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import { useRouter } from 'next/router'

const Rules = ({ token }) => {
    const [addLoding, setLoading] = useState(false)
    const router = useRouter();
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


    if (token != '') {
        var sendtothisPage = '/Questions'
        var buttonText = 'Start Test';
    } else {
        var sendtothisPage = '/Login'
        var buttonText = 'Login';
    }

    return (
        <div className='md:container md:mx-auto'>
            <Header token={token} />
            <div className='flex justify-center mt-8'>
                {/* Rules Section  */}
                <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>RULES</h1>
            </div>

            {/* RULES DISPLAY  */}
            <div className='m-auto w-4/5 dark_theme h-3/5 p-5 md:p-10 mt-5 rounded-lg text-white'>
                {rules.map((r, i) => {
                    return <h4 key={i} className='mb-5 text-sm md:text-xl'>{i + 1 + ". " + r}</h4>
                })}

                {/* Button Proceed to Login Form */}
                <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                    <div className="rounded-md shadow">
                        <a 
                            onClick={() => {
                                setLoading(true)
                                setTimeout(() => {
                                    router.push(sendtothisPage)
                                }, 1000);
                            }}
                            className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            {addLoding ? <><div role="status">
                                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div> </> : buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.jwtoken || '' } }
}