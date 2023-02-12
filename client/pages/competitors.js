import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { useRouter } from 'next/router';
import Head from "next/head"
import RulesModal from './components/RulesModal';

const competitors = () => {
    const [getUserList, setgetUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentuser, setcurrentuser] = useState([])
    const router = useRouter();
    const value = router.query.value;
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
        AOS.init(document.getElementById('RulesModal'));
    };

    const hideModal = () => {
        setModalVisible(false);
    };
    const UserLists = async () => {
        try {
            const response = await fetch("/UserFullList", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    value: value
                })
            }
            ).then(res => res.json())
                .then(responseData => {
                    setgetUserList(responseData);
                    
                });


        } catch (error) {
            console.log(error);
        }

        // Logged User Data 
        try {
            await fetch("/profile", {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }
            ).then(res => res.json())
                .then(user_response => {
                    setcurrentuser(user_response);
                    setLoading(false);
                })

        } catch (error) {
            console.log(error);
            router.push("/Login")
        }
    };

    useEffect(() => {
       if(isLoading == true || getUserList.length == 0) UserLists();
    }, [getUserList]);

    getUserList.sort((a, b) => a.myround_no - b.myround_no); // Sorting Array in presence of Round Number

    return (

        <div className='md:container md:mx-auto'>

            <Head>
                <title>Batch {value} Competitiors</title>
                <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
            </Head>
            <Header />

            <div>
                <h1 data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className={"font-bold md:text-[46px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center  bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Competitors List - Batch {value}</h1>
                <div className="py-8"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal dark_theme text-white">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                                            Batch No
                                        </th>
                                        <th className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                                            Candidate Name
                                        </th>

                                        <th className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                                            Submitted Time
                                        </th>
                                        <th className="px-5 py-3 border-b border-white-200 text-white-800  text-left text-sm uppercase font-normal">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isLoading ? <tr>
                                            <td>
                                                <div className='flex justify-center h-80 place-items-center'>
                                                    <svg class="inline mr-2 w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    <span class="sr-only">Loading...</span>
                                                </div>

                                            </td>
                                        </tr> :

                                            getUserList.map((userdata, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="px-5 py-5  text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-white-900 whitespace-no-wrap">
                                                                        {/* {index + 1} */}
                                                                        {userdata.myround_no}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5  text-sm">
                                                            <h1 className="text-white-900 whitespace-no-wrap">
                                                                {userdata.candidate_name}
                                                            </h1>
                                                            <h1 className="text-[#eee]-900 text-[12px] whitespace-no-wrap">
                                                                {userdata.email}
                                                            </h1>
                                                        </td>
                                                        <td className="px-5 py-5  text-sm">
                                                            <h1 className="text-white-900 whitespace-no-wrap">
                                                                {userdata.SubmittedTime == '' ? 'Not Submitted Yet' : userdata.SubmittedTime}
                                                            </h1>
                                                        </td>
                                                        {/* <td className="px-5 py-5  text-sm">
                                                            <h1 className="text-white-900 whitespace-no-wrap">

                                                                {userdata.SubmittedTime != '' && userdata.score == 0 ? <span className='text-red-500'>Work Hard</span> :
                                                                    userdata.SubmittedTime != '' && userdata.score == userdata.questionsAssigned.length ? <span className='text-green-500'>Excellent</span> :
                                                                        userdata.SubmittedTime == '' && userdata.score == 0 ? '-' : <span className='text-orange-500'>Good</span>}
                                                            </h1>
                                                        </td> */}
                                                        <td className="px-5 py-5  text-sm">
                                                            {
                                                                userdata.SubmittedTime == '' ?

                                                                    <>
                                                                        {(userdata.candidate_name == currentuser.candidate_name) ? <a><button onClick={showModal} className='bg-[#2190FF] p-2 hover:bg-[#2170EE] rounded-full'>Start Finding</button></a> : '-'}

                                                                    </>

                                                                    : "-"
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            })



                                    }
                                </tbody>

                            </table>
                            <RulesModal isVisible={isModalVisible} onClose={hideModal} />

                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default competitors