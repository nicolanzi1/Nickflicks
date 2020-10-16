import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDD8gw89Rsexxsqb_b8nlu5Uo66BxfyQsQ',
  authDomain: 'nickflicks-ee6a4.firebaseapp.com',
  databaseURL: 'https://nickflicks-ee6a4.firebaseio.com',
  projectId: 'nickflicks-ee6a4',
  storageBucket: 'nickflicks-ee6a4.appspot.com',
  messagingSenderId: '557360279581',
  appId: '1:557360279581:web:f672bbac8538be59c196f4',
  measurementId: 'G-ET6JMCLR0Z',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
