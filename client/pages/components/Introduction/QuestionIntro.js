import { useEffect } from 'react';
import introJs from 'intro.js';

export default function QuestionIntro() {
 
  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '#timer',
          intro: "<p><b>Manage your time: </b> With only 1 hour to complete the test, it's important to manage your time effectively. Use the timer to keep track of how much time you have left and make sure to allocate enough time for each section or question.</p>",
          position: 'top'
        },
        {
          element: '#language',
          intro: '<p>- This test covers questions in three different programming languages: C, Java, and Python.<p>- The first 10 questions are in C language, followed by 10 questions in Java, and the final 10 questions are in Python.</p><p>- Make sure to carefully read each question and select the correct answer based on the language specified for that section. Pay attention to the programming syntax and conventions specific to each language.</p><p>- Good luck and happy coding!</p>',
          position: 'left'
        },
        {
          element: '#answerSection',
          intro: '<ul class="list-disc m-5"><li>Please note that if you have already selected an answer, you must wait at least 5 seconds before changing it. This is to prevent accidental clicks or changes to your selected answer.</li><li>If you do wish to change your answer, simply click on a different option and wait for the timer to expire before selecting your new answer.</li><li>Thank you for your understanding and good luck on the test!</li></ul>',
          position: 'top'
        },
        {
          element: '#answerMain',
          intro: 'After Selecting option, check <b>`Answer Saved to record`</b> Message Displayed or not. If not showing then kindly refresh page and select again',
          position: 'top'
        },
        {
          element: '#questionId1',
          intro: "<ul class='list-disc m-4'><li>After selecting your answer, you will see a message that says <b>`Updating Answer....`</b> This message will appear for 5 seconds while your answer is being saved to the record.</li><li>Once the update is complete, you will see a message that says <b>`Answer Saved to Record`</b> This means that your selected answer has been recorded and saved for review later.</li><li>Please keep in mind that you must wait at least 5 seconds before changing your answer. This is to prevent accidental clicks or changes to your selected answer.</li></ul>",
          position: 'bottom'
        },
      ]
    });
    intro.start();
  }, []);

  return null;
}
