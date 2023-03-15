import React, { useState } from 'react'
import Header from './components/Header/Header'
const event = ({ token }) => {
    const [questionsasked, setquestionsasked] = useState([
        {
            question: 'What is "Crack it if you can"?',
            answer: "'Crack it if you can', a technical event that challenges you to put your knowledge and skills to the test. This event is designed for tech enthusiasts who are passionate about solving complex technical problems and enjoy a good challenge. Participants will be presented with a series of multiple-choice questions that cover a wide range of technical topics, including programming, software development, networking, cybersecurity, and more. The questions will be categorized into different levels, from beginner to advanced, to ensure that everyone can participate and have fun"
        },
        {
            question: 'Who can participate in the event?',
            answer: 'The event is open to students who are interested in solving technical problems and have the required technical skills.'
        },
        {
            question: 'What are the technical problems that will be presented in the event?',
            answer: 'The technical problems that will be presented in the event could be related to programming languages such as C, C++, Java.'
        },
        {
            question: 'How will the problems be presented to the participants?',
            answer: 'The problems could be presented to the participants in different ways, such as written questions, code snippets'
        },
        {
            question: 'How many questions will there be in the event?',
            answer: 'There are a total of 30 questions in the "Crack it if you can" technical event.'
        },
        {
            question: 'What is the duration of the event?',
            answer: ' The "Crack it if you can" technical event will last for one hour. The event will include 30 multiple-choice questions, and students will need to choose the correct option to solve them.'
        },
        {
            question: 'What will be the format of the questions?',
            answer: 'The format of the questions could be multiple choice, true/false, or a combination of these.'
        },
        {
            question: 'Will the participants have access to any external resources during the event?',
            answer: 'The participants may or may not have access to external resources, depending on the rules of the event'
        },
        {
            question: 'How will the winners be determined?',
            answer: 'The winners will be determined based on the number of correct answers and the time taken to solve the questions.'
        },
        {
            question: 'What are the prizes for the winners?',
            answer: 'Yes, there will be prizes for the winners of the "Crack it if you can" technical event. The winner will receive a cash prize of Rs. 800 and a medal with Certificate, the runner-up will receive a cash prize of Rs. 400 and a medal with Certificate, and the third rank holder will receive a certificate and a medal. The prizes will be awarded during the prize distribution ceremony, which will be held after the event.'
        },
        {
            question: 'How do I register for the event?',
            answer: 'The participants can register for the event through an online registration form or by contacting the CESA coordinator(Sahil Nakti - +91 75065 26132)'
        },
        {
            question: 'Is there any registration fee?',
            answer: 'No, there is no registration fee for participating in the "Crack it if you can" technical event. The event is free for all eligible participants. However, interested students need to register themselves.'
        },
        {
            question: 'What are the technical requirements for participating in the event?',
            answer: 'No, there are no specific technical requirements for participating in the "Crack it if you can" technical event. Students from any academic background can participate in the event. However, interested students need to bring their college ID card as proof of their enrollment in a college or university. This is a mandatory requirement to participate in the event.'
        },
        {
            question: 'Can I participate as an individual or do I need a team?',
            answer: 'No, "Crack it if you can" technical event is an individual event, and only individual participants are allowed to participate. Students cannot participate as a team or in a group. Each participant will need to solve the problems individually and choose the correct option to move forward in the event.'
        },
        {
            question: 'How will I be notified about the event updates and results?',
            answer: 'Participants will be notified about the "Crack it if you can" technical event updates and results via a specific WhatsApp group. After registering for the event, participants will be added to the group by the CESA coordinator or by scanning QR code. All important updates regarding the event, such as the event schedule, rules, and other details, will be communicated to the participants through this group. Additionally, the winners of the event will also be announced on the same group. Therefore, it is important for all participants to join the group and stay updated with the event updates.'
        },
    ])
    return (
        <>
            <Header token={token} />
            <main className='flex items-center justify-center mt-10'>
                <div className=''>
                    <img src="./CiiycPoster.jpg" className='w-100' />

                    <div class="dark_theme py-12 mt-20">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="lg:text-center">
                                <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Frequently Asked Questions</h2>
                                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                                    Get answers to your questions
                                </p>
                                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                    Here are some frequently asked questions and their answers.
                                </p>
                            </div>

                            <div class="mt-10">
                                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                    {
                                        questionsasked.map((data, index) => {
                                            return <>
                                                <div class="flex">
                                                    <div class="flex-shrink-0">
                                                        <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                    <div class="ml-4">
                                                        <dt class="text-lg leading-6 font-medium text-gray-400">{data.question}</dt>
                                                        <dd class="mt-2 text-base text-gray-500 text-justify">
                                                            {data.answer}
                                                        </dd>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                    }



                                </dl>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-100 py-16">
                        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="text-center">
                                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Contact Us
                                </h2>
                                <p class="mt-4 text-lg text-gray-600">
                                    If you have any questions or concerns, please don't hesitate to get in touch with us.
                                </p>
                            </div>
                            <div class="mt-16 md:flex md:items-center md:justify-center">
                                <div class="md:flex-shrink-0">
                                    <img class="mx-auto h-10 w-10" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png" alt="Email icon" />
                                </div>
                                <div class="mt-4 md:mt-0 md:ml-6">
                                    <p class="text-base font-medium text-gray-900">
                                        Email
                                    </p>
                                    <p class="mt-1 text-lg text-gray-600">
                                        <a href="mailto://csmit.techhead@gmail.com">
                                            csmit.techhead@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="mt-8 md:flex md:items-center md:justify-center">
                                <div class="md:flex-shrink-0">
                                    <img class="mx-auto h-10 w-10" src="https://i1.wp.com/zeevector.com/wp-content/uploads/Phone-Icon-Vector-PNG.png?fit=591%2C623&ssl=1" alt="Phone icon" />
                                </div>
                                <div class="mt-4 md:mt-0 md:ml-6">
                                    <p class="text-base font-medium text-gray-900">
                                        Phone
                                    </p>
                                    <p class="mt-1 text-lg text-gray-600">
                                        Sahil Nakti - +91 7506526132
                                    </p>
                                    <p class="mt-1 text-lg text-gray-600">
                                        Aman Pinjar - +91 9867960166
                                    </p>
                                    <p class="mt-1 text-lg text-gray-600">
                                        Khan Shadab Alam - +91 9167263576
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}

export default event


  
export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.jwtoken || '' } }
}