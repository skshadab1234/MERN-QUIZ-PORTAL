import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import QuestionsData from '../data/api_questions'
import Head from "next/head"
import { useRouter } from 'next/router'
import settings from '../data/settings'
import Link from 'next/link'

const detaiilResult = () => {
  const [questionsLists, setquestions] = useState([])
  const [userdata, setuserdata] = useState([])
  const [isLoading, setLoading] = useState(true)
  const router = useRouter();
  const settingsData = settings()
  const [settingall, setSettings] = useState([])
  const [answerData, setanswerData] = useState([])

  const styles =
  {
    Options: "cursor-pointer  rounded-lg "
  }

  const alphabets = ["A", "B", 'C', 'D', "E", 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const callQuestionPage = async () => {
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
          setuserdata(user_response);
          setanswerData(user_response.UserTestResponse)
          settingsData.then(res => {
            setLoading(false)
            setSettings(res)
            var arr = userdata.questionsAssigned
            const resultArr = QuestionsData.filter(f => arr.some(item => item === f.questionId))
            setquestions(resultArr)
          }).catch(err => console.log(err))
        })

    } catch (error) {
      console.log(error);
      // router.push("/Login")
    }
  }

  useEffect(() => {
    callQuestionPage()
  }, [userdata])

  return (
    <>
      <Head>
        <title>Detail Results</title>
        <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
      </Head>
      {

        isLoading ? <div class="text-center">
          <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div> :

          userdata.SubmittedTime != '' ? <div className='md:container md:mx-auto'>

            <Header />
            <div>
              <h1 data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="1000"
                className={"font-bold md:text-[46px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center  bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] mb-4"}>
                Detail Result
              </h1>
              <div className='dark_theme w-full p-2 rounded text-gray-200'>
                <h2 className='p-3 text-2xl'>Your Score : {userdata.score}</h2>
              </div>

              {questionsLists.map((question, index) => {
                return <>
                  <div key={index} className='dark_theme h-3/5 p-10  mt-5 rounded-lg text-white'>
                    <h1 className='text-sm md:text-xl'>Q{question.questionId + ') ' + question.question_name}</h1>
                    <div className='flex justify-center'>
                      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
                        <img src={question.questionImage} className="w-full mt-6 rounded-[40px] shadow-gray-200" />
                        <div>
                          <h1 className='text-sm md:text-xl mt-5'>  Options :</h1>
                          {
                            (question.answers).map((answers, index_ans) => {
                              return <>
                                <div className={styles.Options + " mix-blend-screen mt-2"}>
                                  {
                                    question.type == 'image' ? <img src={answers[index_ans]} id={`optionselect${question.questionId + "" + index_ans}`} className={`w-full h-full object-contain`} />
                                      : question.type == 'text' ? <div id={`optionselect${question.questionId + "" + index_ans}`} className={`font-light w-full h-auto p-3  flex justify-center items-center text-sm`}>{alphabets[index_ans]}. {answers[index_ans]}</div> : 'Error'
                                  }
                                </div>
                              </>
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className='mt-10'>
                      <div className='flex justify-between'>
                        <h2 className='text-2xl text-gray-200 border-b-2 border-sky-200'>Correct Answer {'->'}  {alphabets[question.correctOutput]}</h2>
                        <h2 className='text-2xl text-gray-200 border-b-2 border-sky-200'>You Selected:  {'->'}{answerData.map((element, i) => {
                          if (i === index) {
                            return alphabets[element.answer];
                          }
                        })}
                        </h2>
                      </div>
                      <h2 className='text-xl mt-3 text-gray-300'>Explaination - </h2>
                      <p className='text-sm text-gray-400 ml-0 mt-4 font-medium md:ml-2'>{question.explaination}</p>
                    </div>
                  </div>
                </>
              })
              }
            </div>
          </div> :
            <div className='flex items-center justify-center h-screen'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Submit your test..</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Please submit your test before viewing your results.</p>
                <Link href="/">
                  <a  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back to Homepage
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </Link>
              </div>
            </div>



      }
    </>
  )
}

export default detaiilResult