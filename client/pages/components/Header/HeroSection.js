import React, { useState, useEffect } from 'react'

const HeroSection = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <div id="FirstSectionAnchor" className="text-gray-600 body-font mt-5">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    data-aos="fade-right"
                    data-aos-anchor="#FirstSectionAnchor">
                    <h1 className="sm:text-7xl text-3xl mb-4 font-medium text-white flex">WHAT IS <img src="../web-logo.png"  className='w-24 md:w-40  ml-6 relative bottom-4 mr-2' /> ?</h1>
                    <p className="mb-8 relative bottom-12 leading-relaxed text-justify">Welcome to 'Crack it if you can', a technical event that challenges you to put your knowledge and skills to the
test. This event is designed for tech enthusiasts who are passionate about solving complex technical problems
and enjoy a good challenge.
Participants will be presented with a series of multiple-choice questions that cover a wide range of technical
topics, including programming, software development, networking, cybersecurity, and more. The questions will
be categorized into different levels, from beginner to advanced, to ensure that everyone can participate and
have fun.
The event will take place over a set period of time, with multiple rounds of questions. The winners will be
determined based on their performance and speed and will receive prizes and recognition for their
achievements.</p>
                    <p className="mb-8 leading-relaxed relative bottom-12">
                        If Your Registration is done, kindly check out your test slot 👇👇
                    </p>

                    {/* <RulesModal isVisible={isModalVisible} onClose={hideModal} /> */}
                    {/* <div className="flex justify-center">
                        <button onClick={showModal} className="inline-flex text-white bg-[#4ca5ff] border-0 py-2 px-6 focus:outline-none hover:bg-[#b673f8] rounded text-lg">Start Finding</button>
                    </div> */}
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 motion-safe:animate-pulse" data-aos="fade-left">
                    <img className="object-cover object-center rounded" alt="hero" src="ai.png" />
                </div>
            </div>
        </div>
        
    )
}

export default HeroSection