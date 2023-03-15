import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { useRouter } from 'next/router'
import QuestionsData from '../data/api_questions'
import settings from '../data/settings'
import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Moment from "moment";
import Countdown from 'react-countdown';
import QuestionIntro from './components/Introduction/QuestionIntro'

const Questions = ({ token }) => {
  const [testRejection, settestRejection] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [userdata, setuserdata] = useState([])
  const [answerData, setanswerData] = useState([])
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const settingsData = settings()
  const [settingall, setSettings] = useState([])
  const [questionsLists, setquestions] = useState([])
  const [Answered, setAnswered] = useState(0)
  const [NotAnswered, setNotAnswered] = useState(0)
  const [endTestInfoModal, setendTestInfoModal] = useState(false)

  const lettersArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var datenow = new Date()
  var currDate = datenow.getDate() + " " + monthNames[datenow.getMonth()] + "," + datenow.getFullYear()

  const styles =
  {
    Options: "cursor-pointer flex justify-center h-40 place-items-center rounded-lg "
  }


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
            // console.log(currDate , settingall[userdata.myround_no - 1].testDate);
            if (settingall[userdata.myround_no - 1].testGoing === false) {
              settestRejection('endedByAdmin')
            } else if (currDate == settingall[userdata.myround_no - 1].testDate) { // Current Date
              var currTime = Date.parse(currDate + " " + datenow.getHours() + ":" + datenow.getMinutes() + ":" + datenow.getSeconds())
              var DBTime = Date.parse(currDate + " " + settingall[userdata.myround_no - 1].testEndtime)
              if (currTime > DBTime) {
                settestRejection('endedTimeUp')
              } else {
                // agar time bada hai test end time ke tho test start krna hai
                if (currTime > Date.parse(currDate + " " + settingall[userdata.myround_no - 1].testTime)) {
                  if (Object.keys(userdata).length > 0) {
                    if (userdata.testOn == 'false') {
                      settestRejection('taken')
                    } else {
                      // Display question basis on database assigned questions no 
                      var arr = userdata.questionsAssigned
                      const resultArr = QuestionsData.filter(f => arr.some(item => item === f.questionId))
                      setquestions(resultArr)

                      setTimeout(() => {
                        userdata.UserTestResponse.map(item => {
                          // console.log(document.getElementById('questionId'+item.questionId))
                          const el = document.getElementById('questionId' + item.questionId);
                          if (typeof el === 'object' && el !== null) {
                            document.getElementById('questionId' + item.questionId).innerHTML = '<div>Answer ' + lettersArray[item.answer] + ' Saved to Record</div>'
                            document.getElementById("optionselect" + item.questionId + item.answer).classList.add("border-indigo-500", "mix-blend-screen", "text-gray-500")

                          }

                        })
                      }, 2000);
                      settestRejection('start')

                    }
                  }
                } else {
                  settestRejection("todayStart")
                }
              }
            } else {
              if (Object.keys(userdata).length > 0) {
                if (userdata.testOn == 'false') {
                  settestRejection('taken')
                }
              }
            }
          }).catch(err => console.log(err))
          if (user_response.testOn == 'false') {
            settestRejection("taken")
          }
        })

    } catch (error) {
      console.log(error);
      router.push("/Login")
    }
  }

  useEffect(() => {
    if (testRejection == '') callQuestionPage()
  }, [userdata])

  var flag = false
  var completeTime = Moment().format("LL") + " " + Moment().format('LTS');

  const getAnswerChoose = async (answer, totalOpt, questionId) => {
    for (let index = 0; index < totalOpt; index++) {
      document.getElementById("optionselect" + questionId + index).classList.remove("border-indigo-500", "mix-blend-screen", "text-gray-500")
    }

    document.getElementById("optionselect" + questionId + answer).classList.add("border-indigo-500", "mix-blend-screen", "text-gray-500")
    document.getElementById("getChecked" + questionId).classList.add("border-indigo-500", "mix-blend-screen", "text-gray-500")
    
    answerData.map((data, i) => {
      if (data.questionId == questionId) {
        document.getElementById('questionId' + questionId).innerHTML = 'Updating Answer.....'
        flag = true
        answerData[i].answer = answer
        setTimeout(async () => {
          const res = await fetch("/uploadTest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "_id": userdata._id,
              answerData
            })
          })

          const data = await res.json();
          if (res.status == 200) {
            const addStatusofQuestion = data.answerData.filter(item => item.questionId == questionId)
            document.getElementById('questionId' + addStatusofQuestion[0].questionId).innerHTML = 'Answer ' + lettersArray[answer] + ' Saved to Record'
          }

        }, 2000);
      }
    })

    if (flag == false) {
      document.getElementById('questionId' + questionId).innerHTML = 'Updating Answer.....'
      answerData.push({ questionId, answer, completeTime })
      setTimeout(async () => {
        const res = await fetch("/uploadTest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "_id": userdata._id,
            answerData
          })
        })

        const data = await res.json();
        if (res.status == 200) {
          const addStatusofQuestion = data.answerData.filter(item => item.questionId == questionId)
          document.getElementById('questionId' + addStatusofQuestion[0].questionId).innerHTML = 'Answer ' + lettersArray[answer] + ' Saved to Record'
         
        }
      }, 2000);
    }
  }

  const SubmitAnswertoDb = async () => {
    try {
      const response = await fetch("/EndTest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "_id": userdata._id,
          "SubmittedTime": completeTime
        })
      }
      )

      router.push("/Results")

    } catch (error) {
      console.log(error);
    }
  }

  // Random component
  const Completionist = () => {
    SubmitAnswertoDb()
  };

  function getUserTestResponses() {
    setShowModal(true)
    callQuestionPage().then(res => {
      setAnswered(userdata.UserTestResponse.length)
      setNotAnswered(questionsLists.length - userdata.UserTestResponse.length)
    })

  }

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      var text_color = 'text-white ';
      if (hours == 0 && minutes < 5) {
        text_color = 'text-red-500';
        setendTestInfoModal(false)
        if (minutes == 4 && seconds >= 55) {
          setendTestInfoModal(true)
        }
      }
      else if (hours == 0 && minutes == 0 && seconds < 60) {
        text_color = 'text-red-500 animate-pulse'
      }
      // Render a countdown
      if (hours < 10) {
        hours = "0" + hours
      }
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      return <h2 className={`${text_color} text-lg md:text-4xl font-bold tracking-wider`}>{hours}:{minutes}:{seconds}</h2>;
    }
  };

  //  console.log(settingall[0]?.testEndtime)
  let EndtimerSeconds = new Date(currDate + " " + settingall[userdata.myround_no - 1]?.testEndtime).getTime() - new Date().getTime()



  return (
    <div className='md:container md:mx-auto mb-10'>
      <Head>
        <title>Test Screen - CESA -CSMIT</title>
        <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
      </Head>
      <Header token={token} />
      {isLoading ?
        <div className='flex justify-center h-80 place-items-center'>
          <svg class="inline mr-2 w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        :
        <>
          {
            testRejection == 'taken' ? <>
              <div className="dark_theme relative top-[200px]">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                    <span className="block text-gray-500 flex">You have already submitted the test </span>
                    <span className="block text-indigo-600">Get to know the winners list.</span>
                  </h2>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                      <Link href="/Results">
                        <a
                          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          View Winners
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </> :
              // testRejection == 'start' ? 'Start' :
              testRejection == 'endedTimeUp' ?
                <div className="dark_theme relative top-[200px]">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                      <span className="block text-gray-500 flex"><AiOutlineFieldTime className='mr-2 text-red-500' /> Time is Up </span>
                      <span className="block text-indigo-600">Get to know the winners list.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                      <div className="inline-flex rounded-md shadow">
                        <Link href="/Results">
                          <a
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            View Winners
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> :
                testRejection == 'endedByAdmin' ? <div className="dark_theme relative top-[200px]">
                  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                      <span className="block text-gray-500 flex"> The admin may not have started the test <br /> or  <br />  it may have ended</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                      <div className="inline-flex rounded-md shadow">
                        <Link href="/Results">
                          <a
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            View Winners
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> :
                  testRejection == 'onStart' ? <div className="dark_theme relative top-[200px]">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                        <span className="block text-gray-500 flex"> Get Ready on { }{Moment(settingall[userdata.myround_no - 1]?.testDate + " " + settingall[userdata.myround_no - 1]?.testTime).format("dddd")}</span>
                        <span className="block text-indigo-600">This Page will Active on {Moment(settingall[userdata.myround_no - 1]?.testDate + " " + settingall[userdata.myround_no - 1]?.testTime).format("LLL")}</span>
                      </h2>

                    </div>
                  </div> :
                    testRejection == 'todayStart' ? <div className="dark_theme relative top-[200px]">
                      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                          <span className="block text-gray-500 flex"> Test will Start Soon </span>
                          <span className="block text-indigo-600">Refresh this Page when Test Start</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                          <div className="rounded-md shadow">
                            <h5 className='text-white font-bold text-xl'>Today </h5>
                            <h5 className='text-white text-sm font-lighter text-xl'>Start : {Moment(currDate + " " + settingall[userdata.myround_no - 1].testTime).format("h:mm a")} </h5>
                            <h5 className='text-white text-sm font-lighter text-xl'>End : {Moment(currDate + " " + settingall[userdata.myround_no - 1].testEndtime).format("h:mm a")} </h5>
                          </div>
                        </div>
                      </div>
                    </div> :
                      testRejection == 'start' ?
                        userdata.status == 1 ?
                          <>
                            {questionsLists.map((question, index) => {

                              return <>
                                <nav id="timer" className='dark_theme w-2/5 md:w-80 h-16 flex justify-center place-items-center fixed top-2 z-[9999] right-[5%] md:left-[40%] z-[99999]'>
                                  <h1><Countdown date={Date.now() + EndtimerSeconds} renderer={renderer} /></h1>
                                </nav>
                                <div key={index} id={index + 1} className='dark_theme h-3/5 p-10  mt-5 rounded-lg text-white'>
                                  <div className='fixed top-[96px] right-0 w-24 bg-white p-2' >
                                    <div className='grid grid-cols-2 gap-2'>
                                      {
                                        questionsLists.map((item, i) => {
                                          const status = 'bg-red-500 p-1 rounded-full'
                                          return <>
                                            <div  id={`getChecked${i + 1}`} className='text-white p-1 text-center'>
                                              {
                                                userdata.UserTestResponse.map(uitem => {
                                                  {
                                                    i + 1 == uitem.questionId ? status = 'bg-green-600 text-white p-1 rounded-full' : ''
                                                  }
                                                })
                                              }
                                              <div className={`${status}`}><a href={`#${i + 1}`} >{i + 1}</a> </div>
                                            </div>
                                          </>
                                        })
                                      }
                                    </div>
                                  </div>
                                  <div className='flex justify-between'>
                                    <h1 className='text-sm md:text-xl w-10/12 flex items-center'>Q{question.questionId + ') ' + question.question_name}</h1>
                                    <div id="language">
                                      {
                                        question.languages == 'C' ? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' width="45px" /> :
                                          question.languages == 'Java' ? <img src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' width="80px" /> :
                                            question.languages == 'Python' ? <img src='https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png' width="100px" className='mr-2 mix-blend-screen' /> : ''
                                      }
                                    </div>
                                    <h1 className='h-12 flex justify-center items-center'>Difficulty level: {question.difficulty}</h1>
                                  </div>
                                  {
                                    question.questionImage == '' ? '' : <img src={`${question.questionImage}`} className="w-full mt-6 rounded-[40px] shadow-gray-200" />
                                  }
                                  <div className='flex  justify-between'>
                                    <h1 className='text-sm md:text-xl mt-5'>  Answer : </h1>
                                    <p className='mt-5 text-xl' id={`questionId${question.questionId}`}></p>
                                  </div>
                                  <div id="answerSection" className='flex justify-center'>
                                    <div id="answerMain" className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
                                      {
                                        (question.answers).map((answers, index_ans) => {
                                          return <>
                                            <div className={styles.Options} onClick={() => getAnswerChoose(index_ans, question.answers.length, question.questionId)}>
                                              {
                                                question.type == 'text' ? <div id={`optionselect${question.questionId + "" + index_ans}`} className="getSelected font-light w-full h-auto p-10 border-2 flex justify-center items-center text-sm md:text-xl">{answers[index_ans]}</div> : 'Error'

                                              }
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
                                onClick={getUserTestResponses}
                              >End Test</button>
                            </div>
                            <QuestionIntro />
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      {/*header*/}
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-bold text-gray-600">
                                          Almost there!
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
                                      <div className="relative p-4 flex-auto">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                          Don't forget to review your work before ending the test. Check for any mistakes or incomplete answers.
                                        </p>
                                        <div>
                                          <h1><b>Total Questions: </b> {questionsLists.length}</h1>
                                          <h1 className='text-green-500'><b>You Answerd: </b> {Answered}</h1>
                                          <h1 className='text-red-500'><b>Not Answered: </b> {NotAnswered}</h1>
                                        </div>
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
                                          id="endTest"
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={SubmitAnswertoDb}
                                        >
                                          End Test
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}

                            {endTestInfoModal ? (
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
                                          5 Minutes Left: Important Reminder for Coders
                                        </h3>
                                        <button
                                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                          onClick={() => setendTestInfoModal(false)}
                                        >
                                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                          </span>
                                        </button>
                                      </div>
                                      {/*body*/}
                                      {/*footer*/}
                                      {
                                        userdata.status ?
                                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                              className="text-white bg-green-500 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                              type="button"
                                              onClick={() => setendTestInfoModal(false)}
                                            >
                                              {"Ok"}
                                            </button>
                                          </div> : 'Blocked by Admin'
                                      }
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}

                          </> : <div class="bg-red-200 shadow-md rounded px-8 pt-6 m-2 pb-8 mb-4 mt-14 ">
                            <div class="-mx-3 mb-6" >
                              <div class="px-3 mb-6 md:mb-0 text-center border-b-2 p-4">
                                <div class="text-center flex justify-center">
                                  <div className='w-20 bg-red-300 p-4 rounded-full'>
                                    <h2 className='text-3xl font-bold text-red-800'>X</h2>
                                  </div>
                                </div>
                                <div className='mt-3'>
                                  <p className='text-red-800'>Sorry to inform you that your account has been blocked by the Admin. To get more information regarding the block and to seek further assistance, please reach out to the Admin directly. Thank you.</p>
                                </div>
                              </div>

                              <div className='mx-10 mt-10'>
                                <h1 className='font-bold'>May be blocked for this reasons</h1>
                                <ul className='list-disc mt-2'>
                                  <li>Trying to access another batch test</li>
                                  <li>Violation of the terms and conditions of the event</li>
                                  <li>Suspicious activity or cheating during the event</li>
                                  <li>Use of inappropriate language or behavior towards other participants</li>
                                  <li>Sharing answers or colluding with other participants</li>
                                  <li>Non-compliance with the instructions or guidelines provided during the event</li>
                                </ul>
                              </div>
                            </div>
                          </div> : "Something Went Wrong"


          }

        </>

      }

    </div>
  )
}

export default Questions

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}