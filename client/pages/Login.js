import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import { useRouter } from 'next/router'
const Login = ({token}) => {
    const router = useRouter();

    const [inputsvalues, setinputsvalues] = useState({
        email: "",
        password: "",
        // year_sem: "",
    })

    const [userdata, setuserdata] = useState({})

    const [Prevent, setPrevent] = useState(false)

    const styles =
    {
        heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
        label: "block text-gray-700 text-sm font-bold mb-2",
        input: "w-full shadow h-12  appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#161B22] border-2 border-[#b673f8]"
    }

    const LoginInput = [
        // { id: "year_sem", label: "Sem/Year", name: "year_sem", type: "text" },
        { id: "email", label: "Email", name: "email", type: "email" },
        { id: "password", label: "Password", name: "password", type: "password" },
    ]

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinputsvalues({ ...inputsvalues, [name]: value })
    }
    
    const LoginUser = async (e) => {
        e.preventDefault()
        const { email, password } = inputsvalues
        if(inputsvalues.email == "" || inputsvalues.password == ""){
            alert("Fields are empty")
        }else{
            const res = await fetch("https://ciiyc-2022.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            const data = await res.json();
            if(data.message == "Logged Successfully") {
                window.alert("Logged Successfully")
                router.push("/")

            }else{
                window.alert("Invalid Credentials")
            }
        }
    }

    // Checking user login or not 
    
  const CallUserData = async () => {
    try {
      const response = await fetch("https://ciiyc-2022.herokuapp.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
      )

      const data = await response.json();
      setuserdata(data);
      setPrevent(true)
      
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    CallUserData()
  }, [])

  if(Prevent) {
    router.push("/")
  }

    return (
        <div className='md:container md:mx-auto'>
            <Header token={token}/>
            <div className='flex justify-center mt-8'>
                {/* Login Section  */}
                <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>LOGIN</h1>
            </div>
            {/* Login Form DISPLAY  */}
            <div className='m-auto w-2/5 bg-[#161B22] h-3/5 p-10  mt-5 rounded-lg text-white'>
                {/* Login Input Fields */}
                <form method='post' onSubmit={LoginUser}>
                    {
                        LoginInput.map((input, i) => {
                            var disabled = ''
                            if (input.id == "year_sem") var disabled = 'disabled';

                            return <>
                                <div className="mb-4">
                                    <label className={styles.label} htmlFor={input.id}>
                                        {input.label}
                                    </label>
                                    <input
                                        disabled={disabled}
                                        value={inputsvalues.name}
                                        onChange={handleChange}
                                        className={styles.input} id={input.id} name={input.name} type={input.type} />
                                </div>
                            </>
                        })
                    }

                    {/* Button Proceed to Login Form */}
                    <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                        <div className="rounded-md shadow">
                            <button className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Next
                            </button>
                        </div>
                    </div>
                </form >
            </div>
        </div>
    )
}

export default Login



export function getServerSideProps({ req, res}) {
    return { props: {token: req.cookies.jwtoken || ''}}
  }