import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from './components/Header/Header'
import Head from 'next/head'

const Registers = ({ token }) => {
    const router = useRouter();
    const [inputsvalues, setinputsvalues] = useState({
        email: "",
        password: "cesa@1234",
        candidate_name: "",
        Semester: "",
        YearofStudy: "",
        Set : ''
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
    const Semester = [1,2,3,4,5,6,7,8]
    const Sets= [ 
        {set: [1,2,3,4], difficulty: 'easy'},
        {set: [1,2,3,4], difficulty: 'hard'},
        {set: [1,2,3,4], difficulty: 'medium'},

    ]

    // Adding Study Year in Input Box 
    const addYear = (year, addto) => {
        document.getElementById("YearofStudy").value = year
        for(let i = 0; i < YearofStudy.length; i++) {
            document.getElementById("addYear"+i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addYear"+addto).classList.add("border-indigo-500", "mix-blend-screen")
        inputsvalues.YearofStudy = year
    }

    const addSemester = (sem, addto) => {
        document.getElementById("Semester").value = sem
        for(let i = 0; i < Semester.length; i++) {
            document.getElementById("addSem"+i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addSem"+addto).classList.add("border-indigo-500", "mix-blend-screen")
        inputsvalues.Semester = sem
    }

    const addSet = (set, setno, addto) => {
        document.getElementById("Sets").value = setno
        for(let i = 0; i < Sets.length; i++) {
            document.getElementById("addSet"+i).classList.remove("border-indigo-500", "mix-blend-screen")
        }
        document.getElementById("addSet"+addto).classList.add("border-indigo-500", "mix-blend-screen")
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
        { id: "Batch", label: "Batch", name: "batch", type: "text", disabled: false },
    ]


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinputsvalues({ ...inputsvalues, [name]: value })
    }
    
    const RegisterUser = async (e) => {
        e.preventDefault()
        const { email, password, candidate_name, YearofStudy, Semester, Set, batch } = inputsvalues
        if(email == "" || password == "" || candidate_name == "" || YearofStudy == "" || Semester == "" || Set.length == 0 || batch == ''){
            alert("Fields are empty")
        }else{
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email, password, candidate_name, YearofStudy, Semester, Set, batch
                })
            })

            const data = await res.json();
            if(data.status == 200) {
                window.alert(data.message)
            }else{
                window.alert(data.message)
            }
            document.getElementById('email').value = ''
            document.getElementById('candidate_name').value = ''
            inputsvalues.email = ''
            inputsvalues.candidate_name = ''
        }
        console.log(inputsvalues);
    }
    return (
        <div className='md:container md:mx-auto'>
            <Head>
                <title>Register - CESA -CSMIT</title>
                <link rel="icon" type="image/x-icon"  href='logo-sm.jpg' />
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
                                        className={styles.input + (input.id == 'YearofStudy' ||  input.id == 'Semester' || input.id == 'Sets'  ? ' hidden' : "")}  id={input.id} name={input.name} type={input.type} disabled={input.disabled ?  "disabled" : ''} />
                                        <div className={input.id == 'YearofStudy' ? "flex" : ''}>
                                            
                                    {
                                        input.id == 'YearofStudy' ?
                                        YearofStudy.map((year,i) => {
                                            return <>
                                                <h4 onClick={() =>  addYear(year, i)} id={`addYear${i}`} className='dark_bg mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >{year}</h4>
                                            </>
                                        }) : input.id == 'Semester' ?  
                                        Semester.map((sem,i) => {
                                            return <>
                                                <h4 onClick={() =>  addSemester(sem, i)} id={`addSem${i}`} className='dark_bg inline-flex w-20 justify-center mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >{sem}</h4>
                                            </>
                                        }) : input.id == 'Sets' ? 
                                        Sets.map((Set, i) => {
                                            return <>
                                            <h4 onClick={() =>  addSet(Set.set, 'Set '+(i+1), i)} id={`addSet${i}`} className='dark_bg inline-flex w-20 justify-center mt-4 ml-3 p-2 w-25 text-sm rounded-lg cursor-pointer hover:animate-pulse' >
                                                Set {i+1} 
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
                                Register
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