import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "XXXXX.firebaseapp.com",
  databaseURL: "xxxx",
  projectId: "shelbyamclone",
  storageBucket: "sxxx",
  messagingSenderId: "xxxx",
  appId: "1:xxx:web:xxxx",
  measurementId: "G-xx"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
