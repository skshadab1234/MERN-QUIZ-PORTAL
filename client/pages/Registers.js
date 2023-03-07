import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from './components/Header/Header'
import Head from 'next/head'
import Swal from 'sweetalert2'

const Registers = ({ token }) => {
    const router = useRouter();
    const [inputsvalues, setinputsvalues] = useState({
        email: "",
        password: "cesa@1234",
        candidate_name: "",
        Semester: "",
        YearofStudy: "",
        Set: ''
        // year_sem: "",
    })
    const styles =
    {
        heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
        subHead: "text-center mt-3 text-xl text-white md:text-[24px] text-[18px] ",
        timerDiv: "bg-[#161B22] flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg w-40 md:w-60 ml-0 md:ml-6 mt-10",
        label: "block text-gray-700 text-sm font-bold mb-2",
        input: "w-full shadow h-12  appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline dark_bg border-2 border-[#b673f8]"
    }
    const [registerLoading, setregisterLoading] = useState(false)


    const callRegistersPage = async () => {
        try {
            const response = await fetch("/profile", {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }
            )

            const data = await response.json();
            if (data.email != 'ks615044@gmail.com') {
                router.push("/")
            }
            if (!response.status === 200) {
                throw new Error(response.error);
                router.push("/Login")
            }

        } catch (error) {
            console.log(error);
            router.push("/Login")

        }

    }


    const YearofStudy = ['First Year', 'Second Year', 'Third Year', 'B.E']
    const Semester = [1, 2, 3, 4, 5, 6, 7, 8]
    const Sets = [
        { set: [1, 2, 3, 4], difficulty: 'easy' },
        { set: [1, 2, 3, 4], difficulty: 'hard' },
        { set: [1, 2, 3, 4], difficulty: 'medium' },

    ]

    // Adding Study Year in Input Box 
    const addYear = (year, addto) => {
        document.getElementById("YearofStudy").value = year
        for (let i = 0; i < YearofStudy.length; i++) {
            document.getElementById("addYear" + i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addYear" + addto).classList.add("border-indigo-500", "mix-blend-screen")
        inputsvalues.YearofStudy = year
    }

    const addSemester = (sem, addto) => {
        document.getElementById("Semester").value = sem
        for (let i = 0; i < Semester.length; i++) {
            document.getElementById("addSem" + i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addSem" + addto).classList.add("border-indigo-500", "mix-blend-screen")
        inputsvalues.Semester = sem
    }

    const addSet = (set, setno, addto) => {
        document.getElementById("Sets").value = setno
        for (let i = 0; i < Sets.length; i++) {
            document.getElementById("addSet" + i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addSet" + addto).classList.add("border-indigo-500", "mix-blend-screen")
        inputsvalues.Set = set
    }

    useEffect(() => {
        callRegistersPage()
    }, [])

    const RegisterInput = [
        // { id: "year_sem", label: "Sem/Year", name: "year_sem", type: "text" },
        { id: "candidate_name", label: "Candidate Name", name: "candidate_name", type: "text", disabled: false },
        { id: "email", label: "Email", name: "email", type: "email", disabled: false },
        { id: "YearofStudy", label: "Pursuing Year", name: "YearofStudy", type: "text", disabled: true },
        { id: "Semester", label: "Semester", name: "Semester", type: "number", disabled: true },
        { id: "Sets", label: "Sets", name: "Sets", type: "text", disabled: true },
        { id: "myroudn_no", label: "myroudn_no", name: "myroudn_no", type: "text", disabled: false },
    ]


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinputsvalues({ ...inputsvalues, [name]: value })
    }

    const RegisterUser = async (e) => {
        e.preventDefault()
        const { email, password, candidate_name, YearofStudy, Semester, Set, batch } = inputsvalues
        if (email == "" || password == "" || candidate_name == "" || YearofStudy == "" || Semester == "" || Set.length == 0 || batch == '') {
            Swal.fire(
                {
                    title: "<div class='text-red-500 text-xl md:text-2xl'>All Fields are required</div>",
                    icon: "error"
                }
            )
        } else {
            setregisterLoading(true)

            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password, candidate_name, YearofStudy, Semester, Set, myroudn_no
                })
            })

            const data = await res.json();
            if (data.message == 'Registered Successfully') {
                setregisterLoading(false)
                Swal.fire({
                    title: '<p class="text-green-500">' + data.message + '</p>',
                    icon: 'success',
                })
            } else {
                setregisterLoading(false)
                Swal.fire(
                    {
                        title: "<div class='text-red-500 text-xl md:text-2xl'>" + data.message + "</div>",
                        icon: "error"
                    }
                )
            }
            document.getElementById('email').value = ''
            document.getElementById('candidate_name').value = ''
            inputsvalues.email = ''
            inputsvalues.candidate_name = ''
        }
    }
    return (
        <div className='md:container md:mx-auto mb-10'>
            <Head>
                <title>Register - CESA -CSMIT</title>
                <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
            </Head>
            <Header token={token} />
            <div className='flex justify-center mt-8'>
                {/* Login Section  */}
                <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Register</h1>
            </div>
            {/* Login Form DISPLAY  */}
            <div className='m-auto w-4/5 md:w-2/5 dark_theme h-3/5 p-10  mt-5 rounded-lg text-white'>
                {/* Login Input Fields */}
                <form method='post' onSubmit={RegisterUser}>
                    {
                        RegisterInput.map((input, i) => {

                            return <>
                                <div className="mb-4">
                                    <label className={styles.label} htmlFor={input.id}>
                                        {input.label}
                                    </label>
                                    <input
                                        key={i}
                                        value={inputsvalues.name}
                                        onChange={handleChange}
                                        className={styles.input + (input.id == 'YearofStudy' || input.id == 'Semester' || input.id == 'Sets' ? ' hidden' : "")} id={input.id} name={input.name} type={input.type} disabled={input.disabled ? "disabled" : ''} />
                                    <div className={input.id == 'YearofStudy' ? "flex" : ''}>

                                        {
                                            input.id == 'YearofStudy' ?
                                                YearofStudy.map((year, i) => {
                                                    return <>
                                                        <h4 onClick={() => addYear(year, i)} id={`addYear${i}`} className='dark_bg mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >{year}</h4>
                                                    </>
                                                }) : input.id == 'Semester' ?
                                                    Semester.map((sem, i) => {
                                                        return <>
                                                            <h4 onClick={() => addSemester(sem, i)} id={`addSem${i}`} className='dark_bg inline-flex w-20 justify-center mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >{sem}</h4>
                                                        </>
                                                    }) : input.id == 'Sets' ?
                                                        Sets.map((Set, i) => {
                                                            return <>
                                                                <h4 onClick={() => addSet(Set.set, 'Set ' + (i + 1), i)} id={`addSet${i}`} className='dark_bg inline-flex w-20 justify-center mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >
                                                                    Set {i + 1}
                                                                </h4>

                                                            </>
                                                        }) : ''
                                        }

                                    </div>
                                </div>
                            </>
                        })
                    }

                    {/* Button Proceed to Login Form */}
                    <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                        <div className="rounded-md shadow">
                            <button className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                {
                                    registerLoading ? <>
                                    <div role="status">
                                        <svg className="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div> Register
                                </> : 'Register'
                                }
                            </button>
                        </div>
                    </div>
                </form >
            </div>
        </div>
    )
}

export default Registers

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.jwtoken || '' } }
}