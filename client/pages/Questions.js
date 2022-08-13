import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { useRouter } from 'next/router'
import QuestionsData from '../data/api_questions'
import callUserData from '../data/callUserData'
const Questions = ({ token }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

    callUserData().then(res => {
      if(res.testOn == "false") {  
        router.push("/")
      }
      if (!res.status === 200) {
        throw new Error(res.error);
        router.push("/Login")
      }
    }).catch(err => {
      console.log(err)
      router.push("/")
    })  
  

  const styles =
  {
    Options: "cursor-pointer flex justify-center h-40 place-items-center md:text-[6xl] text-7xl font-bold text-white rounded-lg  ml-0 md:ml-6 mt-10"
  }


  
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
          const res = await fetch("https://ciiyc-2022.herokuapp.com/uploadTest", {
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
        const res = await fetch("https://ciiyc-2022.herokuapp.com/uploadTest", {
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
      {
        QuestionsData.map((question, index) => {
          return <>
            <div key={index} className='bg-[#161B22] h-3/5 p-10  mt-5 rounded-lg text-white'>
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
              {/* <div className='w-full justify-end flex'>
                <button type="button" className="mt-5 
                text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:ring-blue-300 font-medium
                rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                dark:bg-blue-600 dark:hover:bg-blue-700 
                focus:outline-none dark:focus:ring-blue-800"
                
                onClick={saveAnswer()}
                >Save</button>
              </div> */}
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
    </div>
  )
}

export default Questions

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}