import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { useRouter } from 'next/router'
import QuestionsData from '../data/api_questions'
const Questions = ({ token }) => {
  const [userdata, setuserdata] = useState([])
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(true)
  const styles =
  {
    Options: "cursor-pointer flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg  ml-0 md:ml-6 mt-10"
  }
  const callQuestionPage = async () => {
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
      setuserdata(data);
      setLoading(false)
      
      if(!userdata.testOn) {  
        // router.push("/")
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

  useEffect(() => {
    callQuestionPage()
  }, [])

  
  var answerData = []
  var flag = false
  const getAnswerChoose = async(answer, totalOpt, questionId) => {
    for (let index = 0; index < totalOpt; index++) {
      document.getElementById("optionselect" + questionId + index).classList.remove("border-indigo-500", "mix-blend-screen")
    }
    
    document.getElementById("optionselect" + questionId + answer).classList.add("border-indigo-500", "mix-blend-screen")
    
    answerData.map((data,i) => {
      if(data.questionId == questionId){
        flag = true
        answerData[i].answer = answer
        setTimeout(async () => {
          const res = await fetch("/uploadTest", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "_id":userdata._id,
                answerData
              })
          })
      
          const data = await res.json();
        }, 5000);
      }else{
        flag = false
      }
    })

    if(flag == false){
      answerData.push({questionId,answer})
      setTimeout(async () => {
        const res = await fetch("/uploadTest", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              "_id":userdata._id,
              answerData
            })
        })
    
        const data = await res.json();
      }, 5000);
    }

   
  }

  return (
    <div className='md:container md:mx-auto mb-10'>
      <Header token={token} />
      {isLoading ? 
        <div className='flex justify-center h-80 place-items-center'>
          <svg class="inline mr-2 w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
      :
       <>
         {QuestionsData.map((question, index) => {
          return <>
            <div key={index} className='dark_theme h-3/5 p-10  mt-5 rounded-lg text-white'>
              <h1 className='text-xl md:text-2xl'>Q{index + 1 + ') ' + question.question_name}</h1>
              <img src={question.questionImage} className="w-full mt-6" />
              <h1 className='text-xl md:text-2xl mt-5'>Answer:</h1>

              <div className='flex justify-center'>
                <div className='p-3 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-5'>
                  {
                    (question.answers).map((answers, index_ans) => {
                      return <>
                        <div className={styles.Options} onClick={() => getAnswerChoose(index_ans, question.answers.length, question.questionId)}>
                          <img src={answers[index_ans]} id={`optionselect${question.questionId + "" + index_ans}`} className="getSelected mt-6 w-full h-full border-2" />
                        </div>
                      </>
                    })
                  }
                  
                </div>
              </div>
             
            </div>
            
          </>
        
        })
      }
        <div className='flex justify-end mt-5'>
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >End Test</button>
    </div>
    {showModal ? (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              Would You Like to End Test?
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Review Your answers before Submitting the test.
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              {"<<Back"}
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => SubmitAnswertoDb()}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}
       </>

      }
    
    </div>
  )
}

export default Questions

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}