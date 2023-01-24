import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
const RulesModal = ({ isVisible, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userdata, setuserdata] = useState([])
    const router = useRouter(); 

    const divs = [0, 1];

    function handleNext() {
        (currentIndex == divs.length - 1) ? router.push("/Questions") : setCurrentIndex((currentIndex + 1) % divs.length);
    }

    function handlePrevious() {
        setCurrentIndex((currentIndex + divs.length - 1) % divs.length);
    }

    const callData = async () => {
        try {
            const response = await fetch("/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
            )
            const data = await response.json();
            if (!data.status === 200) {
                throw new Error(data.error);
            } else {
                setuserdata(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        callData()
    }, [])
    return (
        <div className={`fixed inset-0 ${isVisible ? 'flex' : 'hidden'} z-[999]`}>
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="fixed inset-0 flex justify-center items-center" id="RulesModal" data-aos="fade-up" >
                <div className="relative p-4 rounded-lg shadow-lg w-5/6 m-4 dark_bg" >
                    <button
                        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-600"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <div className="p-4">
                        {/* Rules content goes here */}
                        {
                            divs[currentIndex] == 0 ?
                                <>
                                    <h3 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]">Rules.</h3>
                                    <ol className="list-decimal leading-zero pl-4 mt-6">
                                        <li>Follow the instructions provided by the event organizers and test administrator.</li>
                                        <li>Do not share any test materials or questions with anyone outside of the event.</li>
                                        <li>Do not use any unauthorized resources or tools during the test.</li>
                                        <li>Do not engage in any activity that could compromise the security or integrity of the test.</li>
                                        <li>Do not attempt to gain access to unauthorized areas of the system or test environment.</li>
                                        <li>Follow all rules and guidelines for online conduct, including any guidelines for interacting with other participants.</li>
                                        <li>Do not disclose any information about the test or its contents to anyone outside of the event.</li>
                                        <li>Respect the terms of service and privacy policies of the system being tested.</li>
                                        <li>Complete the test within the allotted time frame.</li>
                                        <li>Do not alter or manipulate any test results or data</li>
                                    </ol>
                                </>
                                : divs[currentIndex] == 1 ?
                                    <>
                                        <h3 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]">Check Details.</h3>
                                        <div className='flex '>
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg dark_theme mt-6 w-100 mb-5">
                                                <div class="px-6 py-4">
                                                    <div class="font-bold text-xl text-gray-400 mb-2">{userdata.candidate_name}</div>
                                                    <p class="text-gray-500 text-base">{userdata.email}</p>
                                                    <p class="text-gray-500 text-base">{userdata.YearofStudy}/{userdata.Semester}</p>
                                                </div>

                                            </div>
                                            <div class="max-w-sm rounded overflow-hidden shadow-lg  mt-6 w-100 mb-5 ml-2">
                                                <div class="px-6 py-4">
                                                    <div class="font-bold text-xl text-gray-400 mb-2">Note:</div>
                                                    <p>Once you have verified that the information is correct, please click on the "Start Test" button to proceed.</p>
                                                </div>

                                            </div>
                                        </div>

                                    </>
                                    : ''
                        }
                        <div className="flex justify-end">

                            <button onClick={handlePrevious} className={`px-4 py-2 text-white ${currentIndex == 0 ? 'hidden' : "show"}`}>
                                Previous
                            </button>
                            <button onClick={handleNext} className={`px-4 py-2 ml-2 bg-blue-500 rounded-full text-white font-bold hover:bg-blue-600 `}>
                                {(currentIndex == divs.length - 1) ? 'Start Test' : "Next"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesModal;

