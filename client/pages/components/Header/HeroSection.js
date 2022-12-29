import React, { useEffect } from 'react'


const HeroSection = () => {


    return (
        <div id="FirstSectionAnchor" className="text-gray-600 body-font mt-5">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    data-aos="fade-right"
                    data-aos-anchor="#FirstSectionAnchor">
                    <h1 className="sm:text-7xl text-3xl mb-4 font-medium text-white">WHAT IS <span className={"font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"} >CIIYC</span></h1>
                    <p className="mb-8 leading-relaxed text-justify">CIIYC is a Crack it if you can, Here Students have to crack the given programs in a given period of time.This is a coding contest based on algorithms, data structures and problem solving.Participate in the coding contest Cracking The Code to better your competitive programming skills.</p>
                    <p className="mb-8 leading-relaxed">
                        If Your Registration is done, kindly check out your test slot 👇👇
                    </p>

                    <div className="flex justify-center">
                        {/* <button className="inline-flex text-white bg-[#4ca5ff] border-0 py-2 px-6 focus:outline-none hover:bg-[#b673f8] rounded text-lg">View Compitetors</button> */}

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 motion-safe:animate-pulse" data-aos="fade-left">
                    <img className="object-cover object-center rounded" alt="hero" src="ai.png" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection