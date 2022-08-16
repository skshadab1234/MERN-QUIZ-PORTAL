const QuestionsData = [ 
    {
        questionId: 1,
        difficulty: 'easy',
        languages: "JavaScript",
        question_name: 'What will the code below output to the console?',
        questionImage : "/questions-0242365adb2b122kjmnsk/1/question1.PNG",
        answers:[
            {0: "/questions-0242365adb2b122kjmnsk/1/ans1.PNG"},
            {1: "/questions-0242365adb2b122kjmnsk/1/ans2.PNG"},
            {2: "/questions-0242365adb2b122kjmnsk/1/ans3.PNG"},
            {3: "/questions-0242365adb2b122kjmnsk/1/ans4.PNG"}
        ],
        correctOutput: 0
    },
    {
        questionId: 2,
        difficulty: 'easy',
        languages: "JavaScript",
        question_name: 'What will the code below output to the console?',
        questionImage : "/questions-0242365adb2b122kjmnsk/2/question2.PNG",
        answers:[
            {0: "/questions-0242365adb2b122kjmnsk/2/ans1.PNG"},
            {1: "/questions-0242365adb2b122kjmnsk/2/ans2.PNG"},
            {2: "/questions-0242365adb2b122kjmnsk/2/ans3.PNG"},
            {3: "/questions-0242365adb2b122kjmnsk/2/ans4.PNG"}
        ],
        correctOutput: 2
    },
]


export default QuestionsData;

// import React, {useState, useEffect} from "react";
// const QuestionsDatas = async () => {
//     const {QuestionsData,setQuestion} = useState([])
//     try {
//       const response = await fetch("/QuestionsData", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           }
//       })

//       const getQuestionsData = await response.json();
//       setQuestion(getQuestionsData)
//     } catch (error) {
//       console.log(error)
//     }

//     return QuestionsData
    
// }


// export default QuestionsDatas