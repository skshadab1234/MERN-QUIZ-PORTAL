/* const QuestionsData = [
    {
        questionId: 1,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the president of CESA?',
        questionImage : "",
        answers:[
            {0: "Shadab Khan"},
            {1: "Harshita Chawhan"},
            {2: "Vijay Sharma"},
            {3: "Aman Pinjar"}
        ],
        correctOutput: 1,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 2,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Technical Head of CESA?',
        questionImage : "",
        answers:[
            {0: "Shadab Khan"},
            {1: "Sahil Nakti"},
            {2: "Atharva Patil"},
            {3: "Aman Pinjar"}
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 3,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Vice President of CESA?',
        questionImage : "",
        answers:[
            {0: "Shadab Khan"},
            {1: "Harshita Chawhan"},
            {2: "Atharva Patil"},
            {3: "Aman Pinjar"}
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 4,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Co. Vice President of CESA?',
        questionImage : "",
        answers:[
            {0: "Atharva Patil"},
            {1: "Harshita Chawhan"},
            {2: "Vijay Sharma"},
            {3: "Amaan Khan"}
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 5,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Technical Coordinator of CESA?',
        questionImage : "",
        answers:[
            {0: "Aman Pinjar"},
            {1: "Sahil Bhoir"},
            {2: "Shadab Khan"},
            {3: "Sahil Nakti"},
            {4: "Atharva Patil"}
        ],
        correctOutput: 3,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 6,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the CESA Coordinator?',
        questionImage : "",
        answers:[
            {0: "Anup Maurya"},
            {1: "HarishChandra Maurya"},
            {2: "Kalidas"},
            {3: "Ankush Pawar"},
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 7,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Cultural Head of CESA?',
        questionImage : "",
        answers:[
            {0: "Khizar Solkar"},
            {1: "Aqsa Sarnaik"},
            {2: "Shivani Patil"},
            {3: "Tushar"},
        ],
        correctOutput: 1,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 8,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Cultural Coordinator of CESA?',
        questionImage : "",
        answers:[
            {0: "Khizar Solkar"},
            {1: "Aqsa Sarnaik"},
            {2: "Shivani Patil"},
            {3: "Tushar"},
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 9,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Sports Head of CESA?',
        questionImage : "",
        answers:[
            {0: "Amaan Khan"},
            {1: "Shadab Khan"},
            {2: "Harshita Chawhan"},
            {3: "Vijay Sharma"},
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 10,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Sports Coordinator of CESA?',
        questionImage : "",
        answers:[
            {0: "Amaan Khan"},
            {1: "Aditya Karanjekar"},
            {2: "Harshita Chawhan"},
            {3: "Vijay Sharma"},
        ],
        correctOutput: 1,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 11,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Event Executive of CESA?',
        questionImage : "",
        answers:[
            {0: "Aman Pinjar"},
            {1: "Shadab Khan"},
            {2: "Harshita Chawhan"},
            {3: "Vijay Sharma"},
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 12,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who is the Winner of Chess in Annual Sports 2023?',
        questionImage : "",
        answers:[
            {0: "Prabhat Mukhiya"},
            {1: "Rohit Shinde"},
            {2: "Saad Siddique"},
            {3: "Anurag Randive"},
        ],
        correctOutput: 0,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 13,
        difficulty: 'easy',
        languages: "C",
        question_name: 'When was the first CESA inauguration held?',
        questionImage : "",
        answers:[
            {0: "12 August, 2022"},
            {1: "21 August, 2022"},
            {2: "22 August, 2022"},
            {3: "22 September, 2022"},
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 14,
        difficulty: 'easy',
        languages: "C",
        question_name: 'Who was the guest present at the CESA inauguration?',
        questionImage : "",
        answers:[
            {0: "Prof. Rajendra Madavi"},
            {1: "Shri Sanjay Kadu"},
            {2: "Dr Batu Lonere"},
            {3: "Dr. P.S Lokande PhD"},
        ],
        correctOutput: 3,
        type: 'text',
        explaination: "N/A"
    },
    {
        questionId: 15,
        difficulty: 'easy',
        languages: "C",
        question_name: 'When was the Ankush Sir farewell organized by CESA?',
        questionImage : "",
        answers:[
            {0: "22 August,2022"},
            {1: "22 September,2022"},
            {2: "22 December,2022"},
            {3: "23 December,2022"},
        ],
        correctOutput: 2,
        type: 'text',
        explaination: "N/A"
    },
]

export default QuestionsData; */

const QuestionsData = [
        {
            questionId: 1,
            difficulty: 'easy',
            languages: "C",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/1/q1.PNG",
            answers:[
                {0: "5 10"},
                {1: "10 15"},
                {2: "5 10 15"},
                {3: "Compilation error"},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: 'The printf() function has two placeholders ("%d %d"), but three arguments are provided to it (a, b, c). This will result in a compilation error.'
        },
        {
            questionId: 2,
            difficulty: 'easy',
            languages: "C",
            question_name: 'What is wrong with the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/2/q2.PNG",
            answers:[
                {0: "There is no error"},
                {1: "The string length of str1 is too short to store 'Hello'"},
                {2: "The string length of str2 is too short to store 'World'"},
                {3: "The %s format specifier is incorrect"},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'The size of str2 is 5, which is not enough to store "World" (which has 6 characters, including the terminating null character). This will result in undefined behavior.'
        },
        {
            questionId: 3,
            difficulty: 'easy',
            languages: "C",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/3/q3.PNG",
            answers:[
                {0: " x is equal to y"},
                {1: "Nothing is printed"},
                {2: "Compilation error"},
                {3: "Run-time error"},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: ' The assignment operator (=) is used instead of the equality operator (==) in the if statement. This will result in x being assigned the value of y (which is 10), and the if statement will evaluate to true, so "x is equal to y" will be printed.'
        },
        {
            questionId: 4,
            difficulty: 'easy',
            languages: "C",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/4/q4.PNG",
            answers:[
                {0: " 5 10 \n 10 5"},
                {1: "5 10 \n 5 10"},
                {2: "Compilation error"},
                {3: "Run-time error"},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'The swap() function takes two arguments by value, which means that changes made to x and y inside the function will not affect a and b outside the function. Therefore, the values of a and b will not be swapped, and the output will be "5 10" followed by "5 10".'
        },
        {
            questionId: 5,
            difficulty: 'easy',
            languages: "C",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/5/q5.PNG",
            answers:[
                {0: "11 22"},
                {1: "12 23"},
                {2: "12 22"},
                {3: "11 23"},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'The variable x is first assigned the value 10.In the expression x++ + ++x, the value of x is first incremented to 11 and added to the original value of x (10). So, y becomes 21. Then, the value of x is incremented again to 12. Finally, the values of x and y are printed, which are 12 and 21, respectively.'
        },
        {
            questionId: 6,
            difficulty: 'high',
            languages: "C",
            question_name: 'Memory Allocation Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/6/q6.PNG",
            answers:[
                {0: "This code will allocate memory for an integer and set its value to 10."},
                {1: "This code will result in a memory leak."},
                {2: "This code will cause a segmentation fault."},
                {3: "This code is invalid and will not compile."},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'The code correctly allocates memory for an integer and sets its value to 10. However, the memory is not freed, resulting in a memory leak. To prevent a memory leak, the memory should be freed using the free() function, like this free(p)'
        },
        {
            questionId: 7,
            difficulty: 'high',
            languages: "C",
            question_name: 'Pointer Arithmetic Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/7/q7.PNG",
            answers:[
                {0: "This code will output 3."},
                {1: "This code will output 2."},
                {2: "This code will output 4."},
                {3: "This code will cause a segmentation fault."},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: 'The code creates an integer array a with five elements, and sets the pointer p to point to the first element of the array. The pointer q is then set to p + 2, which means it points to the third element of the array. The printf() statement then outputs the value of the third element, which is 3.'
        },
        {
            questionId: 8,
            difficulty: 'high',
            languages: "C",
            question_name: 'Bit Manipulation Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/8/q8.PNG",
            answers:[
                {0: "This code will output 0."},
                {1: "This code will output 38."},
                {2: "This code will output 185."},
                {3: "This code will cause a compilation error."},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'The code creates two unsigned integer variables x and y, and sets them to binary values. The bitwise XOR operator ^ is then used to perform bitwise XOR on x and y, resulting in a new value for z. The printf() statement outputs the decimal value of z, which is 38.'
        },
        {
            questionId: 9,
            difficulty: 'high',
            languages: "C",
            question_name: 'Recursion Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/9/q9.PNG",
            answers:[
                {0: "This code will cause a stack overflow error."},
                {1: "This code will return the sum of the integers from 1 to n."},
                {2: "This code will return the factorial of n."},
                {3: "This code will cause a compilation error."},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'The code defines a recursive function sum() that calculates the sum of the integers from 1 to n. The base case for the recursion is when n equals 0, in which case the function returns 0. Otherwise, the function returns n plus the result of calling sum() with n - 1, which recursively calculates the sum of the integers from 1 to n - 1. The recursion continues until n equals 0, at which point the recursion stops and the final result is returned.'
        },
        {
            questionId: 10,
            difficulty: 'high',
            languages: "C",
            question_name: ' Pointers to Pointers Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/10/q10.PNG",
            answers:[
                {0: "This code will output 5."},
                {1: "This code will output the memory address of `a`."},
                {2: "This code will output a compilation error."},
                {3: "This code will cause a segmentation fault."},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'The code defines an integer variable `a` with the value 5, and sets the pointer `p` to point to `a`. The pointer `q` is then set to point to `p`. The printf() statement uses the double pointer `q` to access the value of `a` indirectly, and outputs the value 5.'
        },
        {
            questionId: 11,
            difficulty: 'easy',
            languages: "Java",
            question_name: ' Basic Java Syntax Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/11/q11.PNG",
            answers:[
                {0: "This code will output `Hello, World!`."},
                {1: "This code will output a compilation error."},
                {2: "This code will output nothing."},
                {3: "This code will cause a runtime error."},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: 'This code defines a class called HelloWorld with a main method that prints the string "Hello, World!" to the console using System.out.println(). When the program is run, this message will be output to the console.'
        },
        {
            questionId: 12,
            difficulty: 'easy',
            languages: "Java",
            question_name: 'Java Variables and Data Types Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/12/q12.PNG",
            answers:[
                {0: "This code will output 15.5."},
                {1: "This code will output a compilation error."},
                {2: "This code will output a runtime error."},
                {3: "This code will output a boolean value."},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'This code defines an integer variable x, a double variable y, and a boolean variable z. It then attempts to print the sum of these three variables using System.out.println(). However, this code will not compile because the System.out.println() statement is not inside a method.'
        },
        {
            questionId: 13,
            difficulty: 'easy',
            languages: "Java",
            question_name: ' Java Control Structures Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/13/q13.PNG",
            answers:[
                {0: "This code will output `x is greater than 10`"},
                {1: "This code will output `x is greater than 5 but less than or equal to 10`."},
                {2: "This code will output `x is less than or equal to 5`."},
                {3: "This code will not compile."},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'This code defines an integer variable x with the value 5, and uses an if-else statement to determine whether x is greater than 10, greater than 5 but less than or equal to 10, or less than or equal to 5. Since x is equal to 5, the else block will be executed and the message "x is less than or equal to 5" will be output to the console.'
        },
        {
            questionId: 14,
            difficulty: 'easy',
            languages: "Java",
            question_name: 'Java Loops Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/14/q14.PNG",
            answers:[
                {0: "This code will output `0``."},
                {1: "This code will output `0 1 2 3 4`."},
                {2: "This code will output `1 2 3 4 5`."},
                {3: "This code will not compile."},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'This code initializes an integer variable i with the value 0, and uses a while loop to print the value of i to the console and increment i until i is greater than or equal to 5. Since i starts at 0 and increments by 1 with each iteration of the loop, the loop will execute five times and output the numbers 0, 1, 2, 3, and 4 to the console.'
        },
        {
            questionId: 15,
            difficulty: 'easy',
            languages: "Java",
            question_name: 'Java Arrays Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/15/q15.PNG",
            answers:[
                {0: "This code will output a runtime error."},
                {1: "This code will output a compilation error."},
                {2: "This code will output `2 4 6 8`."},
                {3: "This code will output `8 6 4 2`."},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'This code defines an array called numbers that contains the integers 2, 4, 6, and 8. It then uses a for loop to iterate through the array and print each element to the console using System.out.print(). Since the elements of the array are 2, 4, 6, and 8, this code will output "2 4 6 8" to the console.'
        },
        {
            questionId: 16,
            difficulty: 'Medium',
            languages: "Java",
            question_name: 'Java Inheritance Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/16/q16.PNG",
            answers:[
                {0: "This code will output `Animal is eating` and `Dog is barking`."},
                {1: "This code will output a compilation error."},
                {2: "This code will output a runtime error."},
                {3: "This code will output `Dog is barking` only."},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: 'This code defines a class Animal with a method eat(), and a subclass Dog that extends Animal and has a method bark(). The Main class creates a new Dog object and calls its eat() and bark() methods. Since Dog is a subclass of Animal, it inherits the eat() method and can call it. Therefore, this code will output "Animal is eating" followed by "Dog is barking" to the console.'
        },
        {
            questionId: 17,
            difficulty: 'Medium',
            languages: "Java",
            question_name: 'Java Interfaces Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/17/q17.PNG",
            answers:[
                {0: "This code will output a compilation error."},
                {1: "This code will output a runtime error."},
                {2: "This code will output `Drawing circle`"},
                {3: "This code will output nothing."},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'This code defines an interface Shape with a method draw(), and a class Circle that implements Shape and overrides its draw() method. The Main class creates a new Circle object and assigns it to a Shape variable shape. It then calls the draw() method on the shape variable. Since Circle implements Shape and overrides its draw() method to print "Drawing circle" to the console, this code will output "Drawing circle" to the console.'
        },
        {
            questionId: 18,
            difficulty: 'Hard',
            languages: "Java",
            question_name: 'Java Generics Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/18/q18.PNG",
            answers:[
                {0: 'The code will output "1", "2", "3".'},
                {1: "This code will output a runtime error."},
                {2: "The code will output nothing."},
                {3: "The code will output a compilation error."},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: 'This code defines an interface Shape with a method draw(), and a class Circle that implements Shape and overrides its draw() method. The Main class creates a new Circle object and assigns it to a Shape variable shape. It then calls the draw() method on the shape variable. Since Circle implements Shape and overrides its draw() method to print "Drawing circle" to the console, this code will output "Drawing circle" to the console.'
        },
        {
            questionId: 19,
            difficulty: 'Hard',
            languages: "Java",
            question_name: 'Java Generics Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/19/q19.PNG",
            answers:[
                {0: 'The code will output "[2, 4, 6, 8, 10]".'},
                {1: 'The code will output "[2, 4]".'},
                {2: "The code will output nothing."},
                {3: 'The code will output "[4, 8]".'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: 'The code creates a list of integers and uses a stream to filter out the even numbers, double them using map(), and collect the results into a new list. The resulting list contains only the even numbers doubled, which are 4 and 8. Therefore, the code will output "[4, 8]" to the console.'
        },
        {
            questionId: 20,
            difficulty: 'Hard',
            languages: "Java",
            question_name: 'Java Networking Question. What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/20/q20.PNG",
            answers:[
                {0: 'The code will not compile because of a semantic error'},
                {1: 'The code will not compile because of a syntax error'},
                {2: "The code will compile and run without errors."},
                {3: 'The code will compile but throw an ArrayIndexOutOfBoundsException at runtime'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: 'In this code, the for loop is iterating over the numbers array and trying to print each element using an index i. However, the loop is using <= instead of < in the condition, which means that it will iterate one more time than the length of the array. This will throw an ArrayIndexOutOfBoundsException when i becomes equal to numbers.length, because there is no element at that index. To fix this, you can use < instead of <= in the condition.'
        },
        {
            questionId: 21,
            difficulty: 'Easy',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/21/q21.PNG",
            answers:[
                {0: '[1, 2, 4, 5]'},
                {1: '[1, 2, 4, 5, 3]'},
                {2: "[1, 2, 4, 5, 4]"},
                {3: '[1, 2, 4, 5, 5]'},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'The code attempts to remove the value 3 from the list my_list using the remove() method. However, modifying a list while iterating over it can cause unexpected behavior. In this case, the loop skips over the value 3 and removes the first occurrence of the value 3, which is at index 2. This causes the value at index 3 (which is 4) to move down to index 2. When the loop continues, it checks the value at index 3 (which is now 5), and the loop completes normally. Therefore, the output is [1, 2, 4, 5, 4].'
        },
        {
            questionId: 22,
            difficulty: 'Easy',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/22/q22.PNG",
            answers:[
                {0: '5 + 2 = 7'},
                {1: '7'},
                {2: '"5 + 2 = 7"'},
                {3: 'Error'},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: 'The code defines three variables x, y, and z. x is assigned the value 5, y is assigned the value 2, and z is assigned the sum of x and y. The code then uses an f-string to print the values of x, y, and z in the format "x + y = z". The output is "5 + 2 = 7".'
        },
        {
            questionId: 23,
            difficulty: 'Easy',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/23/q23.PNG",
            answers:[
                {0: '5  '},
                {1: '10'},
                {2: 'None'},
                {3: 'Error'},
            ],
            correctOutput: 0,
            type: 'text',
            explaination: ' The code defines a function double that takes a parameter num and doubles it. The code then defines a variable x with the value 5, and calls the function double with x as the argument. The function double modifies its parameter num, but it does not modify the variable x. Therefore, the output is 5.'
        },
        {
            questionId: 24,
            difficulty: 'Easy',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/24/q24.PNG",
            answers:[
                {0: '1'},
                {1: '2'},
                {2: '3'},
                {3: 'Error'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: 'The code attempts to access an index that is out of bounds of the list my_list. The list has a length of 5, so the maximum valid index is 4. Therefore, an error is raised: IndexError: list index out of range.'
        },
        {
            questionId: 25,
            difficulty: 'Easy',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/25/q25.PNG",
            answers:[
                {0: '7'},
                {1: '52'},
                {2: 'None'},
                {3: 'Error'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: "The code attempts to add an integer (x) and a string (y) together. This operation is not supported in Python, and it results in a TypeError being raised: TypeError: unsupported operand type(s) for +: 'int' and 'str'."
        },
        {
            questionId: 26,
            difficulty: 'Hard',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/26/q26.PNG",
            answers:[
                {0: 'The number of lines in the file "my_file.txt"'},
                {1: 'The number of words in the file "my_file.txt"'},
                {2: 'The number of characters in the file "my_file.txt"'},
                {3: 'The name of the file "my_file.txt"'},
            ],
            correctOutput: 1,
            type: 'text',
            explaination: 'The code defines a function count_words that takes a filename as an argument, reads the contents of the file, splits the contents into a list of words, counts the number of words, and returns the word count. The code then calls the function with the filename "my_file.txt" and prints the word count. Therefore, the output is the number of words in the file "my_file.txt".'
        },
        {
            questionId: 27,
            difficulty: 'Hard',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/27/q27.PNG",
            answers:[
                {0: '10'},
                {1: '55'},
                {2: '89'},
                {3: '144'},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: 'The code defines a recursive function fibonacci that computes the nth Fibonacci number. The function returns 0 for n=0, 1 for n=1, and the sum of the (n-1)th and (n-2)th Fibonacci numbers for n>1. The code then calls the function with the argument 10 and prints the result. Therefore, the output is the 10th Fibonacci number, which is 89'
        },
        {
            questionId: 28,
            difficulty: 'Hard',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/28/q28.PNG",
            answers:[
                {0: '5'},
                {1: '10'},
                {2: 'None'},
                {3: 'Error'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: "The code defines a class MyClass with an __init__ method that initializes two attributes x and y. The code then creates an object my_object of type MyClass. Finally, the code attempts to access an attribute z that does not exist on the object my_object. Therefore, an error is raised: AttributeError: 'MyClass' object has no attribute 'z'."
        },
        {
            questionId: 29,
            difficulty: 'Hard',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/29/q29.PNG",
            answers:[
                {0: '0'},
                {1: '10'},
                {2: '9'},
                {3: 'Error'},
            ],
            correctOutput: 2,
            type: 'text',
            explaination: "The code defines a recursive function foo that takes a parameter bar. The function checks if bar is less than 10, and if it is, it calls itself with bar + 1 as the argument. This continues until bar is greater than or equal to 10, at which point the function returns bar. The initial call to foo with an argument of 0 results in recursive calls until bar is 10, at which point the final value of bar (9) is returned. Therefore, the output is 9."
        },
        {
            questionId: 30,
            difficulty: 'Hard',
            languages: "Python",
            question_name: 'What is the output of the following code snippet?',
            questionImage : "/questions-0242365adb2b122kjmnsk/30/q30.PNG",
            answers:[
                {0: '[(1, 4), (2, 5), (3, 6)], []'},
                {1: '[], [(1, 4), (2, 5), (3, 6)]'},
                {2: 'Error'},
                {3: '[(1, 4), (2, 5), (3, 6)], [(1, 4), (2, 5), (3, 6)]'},
            ],
            correctOutput: 3,
            type: 'text',
            explaination: " The code defines two lists x and y, and uses the zip() function to create an iterator that aggregates elements from both lists. The code then uses the list() function to convert the iterator to a list and prints it twice. The first call to list() consumes the iterator and produces the expected output. The second call to list() attempts to consume the same iterator again, but the iterator has already been exhausted, so it produces an empty list. Therefore, the output is [(1, 4), (2, 5), (3, 6)], []."
        },
]

export default QuestionsData