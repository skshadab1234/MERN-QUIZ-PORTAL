// const QuestionsData = [ 
//     {
//         questionId: 1,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Point out the error in the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/1/question1.PNG",
//         answers:[
//             {0: "Error: in unsigned char statement"},
//             {1: "No error"},
//             {2: "Error: unknown file pointer"},
//             {3: "None of above"}
//         ],
//         correctOutput: 1,
//         type: 'text',
//         explaination: "This program tries to open the file 'trial.txt' in read mode. If file not exists or unable to read it prints 'Unable to open file' and then terminate the program."
//     },
//     {
//         questionId: 2,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Point out the error in the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/2/question2.PNG",
//         answers:[
//             {0: "Error: we may not get input for second scanf() statement"},
//             {1: "Error: suspicious char to in conversion in scanf()"},
//             {2: "No error"},
//             {3: "None of above"}
//         ],
//         correctOutput: 0,
//         type: 'text',
//         explaination: ""
//     },
//     {
//         questionId: 3,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Point out the error in the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/3/question3.PNG",
//         answers:[
//             {0: "Error: fseek() long offset value"},
//             {1: "No error"},
//             {2: "Error: unrecognised Keyword SEEK_SET"},
//             {3: "None of above"}
//         ],
//         correctOutput: 0,
//         type: 'text',
//         explaination: "Instead of '20' use 20L since fseek() need a long offset value."
//     },
//     {
//         questionId: 4,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Point out the error in the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/4/question4.PNG",
//         answers:[
//             {0: "No error, No output."},
//             {1: "Output: Unable to open file."},
//             {2: "None of above"},
//             {3: "Program crashes at run time."}
//         ],
//         correctOutput: 1,
//         type: 'text',
//         explaination: "The path of file name must be given as 'c:\\tc\file.c'"
//     },
//     {
//         questionId: 5,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Point out the error/warning in the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/5/question5.PNG",
//         answers:[
//             {0: "It prints all characters in file 'trial'"},
//             {1: "Error: while statement"},
//             {2: "No error"},
//             {3: "Error: in unsigned char declaration"}
//         ],
//         correctOutput: 3,
//         type: 'text',
//         explaination: "Here, EOF is -1. As 'ch' is declared as unsigned char it cannot deal with any negative value."
//     },
//     {
//         questionId: 6,
//         difficulty: 'easy',
//         languages: "C",
//         question_name: 'Which of the following statement is correct about the program?',
//         questionImage : "/questions-0242365adb2b122kjmnsk/6/question6.PNG",
//         answers:[
//             {0: "The code writes a text to a file in reverse order"},
//             {1: "The code writes a text to a file"},
//             {2: "The code reads a text files and display its content in reverse order"},
//             {3: "None of above"}
//         ],
//         correctOutput: 2,
//         type: 'text',
//         explaination: "This program reads the file INPUT.TXT and store it in the string str after reversing the string using strrev function."
//     },
// ]


// export default QuestionsData;

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

const QuestionsData = [ 
    {
        questionId: 1,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Why does the following code result in a segmentation fault?',
        questionImage : "/questions-0242365adb2b122kjmnsk/1/question_real.PNG",
        answers:[
            {0: "The pointer is not initialized to a valid memory address"},
            {1: "The pointer is trying to access a protected memory location"},
            {2: "The pointer is trying to dereference a null pointer"},
            {3: "The pointer is trying to access an out of bounds memory locationNone of above"}
        ],
        correctOutput: 2,
        type: 'text',
        explaination: " The pointer 'ptr' is initialized to NULL, which means it does not point to any valid memory location. When the code tries to access the memory location pointed to by 'ptr' using the '*' operator, it results in a segmentation fault because the pointer is trying to dereference a null pointer."
    },
    {
        questionId: 2,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Point out the error in the program?',
        questionImage : "/questions-0242365adb2b122kjmnsk/2/question2.PNG",
        answers:[
            {0: "There is no error in the code"},
            {1: "The variable z is not initialized"},
            {2: "The variable x is not declared."},
            {3: "The variable y is not assigned a value."}
        ],
        correctOutput: 1,
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
            {0: "x and y are equal"},
            {1: "x and y are not equal"},            
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "The if statement is using the assignment operator (=) instead of the equality operator (==) to compare x and y. This means that the if statement is assigning the value of y to x and then evaluating the resulting value (y = 10) as true, causing the first printf statement to execute"
    },
    {
        questionId: 4,
        difficulty: 'easy',
        languages: "C",
        question_name: 'What is the logical error in the following code?',
        questionImage : "/questions-0242365adb2b122kjmnsk/4/question4.PNG",
        answers:[
            {0: "There is no logical error"},
            {1: "The if statement should use >= instead of >"},
            {2: "The else if statement should use <= instead of <"},
            {3: "The printf statement should be in a separate function"}
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "In the else if statement, the < sign is used to check if x is less than 0. However, it should use the <= sign to also include the possibility that x is equal to 0."
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
