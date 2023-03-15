import { useEffect } from 'react';
import introJs from 'intro.js';

export default function Introduction() {
 
  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '#profileIcon',
          intro: 'Welcome back, This is your profile dropdown. You can use it to access your account settings, view your test results, and see your test responses. If you have any questions or issues, please contact our support team at csmit.techhead@gmail.com',
          position: 'bottom'
        },
        {
          element: '#table',
          intro: 'Here you can view all of the test batches that have been created, including the batch number, start time, end time, competitors, and status (active or ended).',
          position: 'top'
        },
        {
          element: '#competitors',
          intro: 'After clicking on view competitors, you can visit to respective batch details page.',
          position: 'left'
        }
      ]
    });
    intro.start();
  }, []);

  return null;
}
