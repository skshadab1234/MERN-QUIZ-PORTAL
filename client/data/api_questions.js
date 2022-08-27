const QuestionsData = [ 
    {
        questionId: 1,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/1/question1.PNG",
        answers:[
            {0: "Error: in unsigned char statement"},
            {1: "No error"},
            {2: "Error: unknown file pointer"},
            {3: "None of above"}
        ],
        correctOutput: 1,
        type: 'text',
        explaination: "This program tries to open the file 'trial.txt' in read mode. If file not exists or unable to read it prints 'Unable to open file' and then terminate the program."
    },
    {
        questionId: 2,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/2/question2.PNG",
        answers:[
            {0: "Error: we may not get input for second scanf() statement"},
            {1: "Error: suspicious char to in conversion in scanf()"},
            {2: "No error"},
            {3: "None of above"}
        ],
        correctOutput: 0,
        type: 'text',
        explaination: ""
    },
    {
        questionId: 3,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/3/question3.PNG",
        answers:[
            {0: "Error: fseek() long offset value"},
            {1: "No error"},
            {2: "Error: unrecognised Keyword SEEK_SET"},
            {3: "None of above"}
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "Instead of '20' use 20L since fseek() need a long offset value."
    },
    {
        questionId: 4,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/4/question4.PNG",
        answers:[
            {0: "No error, No output."},
            {1: "Output: Unable to open file."},
            {2: "None of above"},
            {3: "Program crashes at run time."}
        ],
        correctOutput: 1,
        type: 'text',
        explaination: "The path of file name must be given as 'c:\\tc\file.c'"
    },
    {
        questionId: 5,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error/warning in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/5/question5.PNG",
        answers:[
            {0: "It prints all characters in file 'trial'"},
            {1: "Error: while statement"},
            {2: "No error"},
            {3: "Error: in unsigned char declaration"}
        ],
        correctOutput: 3,
        type: 'text',
        explaination: "Here, EOF is -1. As 'ch' is declared as unsigned char it cannot deal with any negative value."
    },
    {
        questionId: 6,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Which of the following statement is correct about the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/6/question6.PNG",
        answers:[
            {0: "The code writes a text to a file in reverse order"},
            {1: "The code writes a text to a file"},
            {2: "The code reads a text files and display its content in reverse order"},
            {3: "None of above"}
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "This program reads the file INPUT.TXT and store it in the string str after reversing the string using strrev function."
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