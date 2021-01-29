import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA8oHMEj0RBqxawONUQqCB6Fh3HTI8cxqI',
  authDomain: 'clone-b04c4.firebaseapp.com',
  projectId: 'clone-b04c4',
  storageBucket: 'clone-b04c4.appspot.com',
  messagingSenderId: '199974235647',
  appId: '1:199974235647:web:1b1de71bcd972d6e670bca',
});

const auth = firebase.auth();

export { auth };
