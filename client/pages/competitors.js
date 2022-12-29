import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Head from "next/head"

const competitors = () => {
    const [getUserList, setgetUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentuser, setcurrentuser] = useState([])
    const router = useRouter();
    const value = router.query.value;
    
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
                setLoading(false);
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
            })
      
          } catch (error) {
            console.log(error);
            router.push("/Login")
          }
    };

    useEffect(() => {
        UserLists();
    }, [getUserList]);

    getUserList.sort((a, b) => a.myround_no - b.myround_no); // Sorting Array in presence of Round Number
    
    return (

        <div className='md:container md:mx-auto'>

<Head>
      <title>Batch {value} Competitiors</title>
      <link rel="icon" type="image/x-icon"  href='logo-sm.jpg' />
    </Head>
            <Header />

            <div>
                <h1  data-aos="fade-down"
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
                                        isLoading ? '' :

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
                                                                    <Link href={"/Questions"}>
                                                                        {(userdata.candidate_name == currentuser.candidate_name) ? <a><button className='bg-[#2190FF] p-2 hover:bg-[#2170EE] rounded-full' >Start Finding</button></a> : '-'}
                                                                    </Link>
                                                                : "-"
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            })



                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>

    )
}

export default competitors