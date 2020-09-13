import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCqdr4uZU6CJfZCcO8Vu1quTBlHc80GOOE",
  authDomain: "shelbyamclone.firebaseapp.com",
  databaseURL: "https://shelbyamclone.firebaseio.com",
  projectId: "shelbyamclone",
  storageBucket: "shelbyamclone.appspot.com",
  messagingSenderId: "673936215020",
  appId: "1:673936215020:web:c31d533e2d21e5c5e70ec9",
  measurementId: "G-X1V0PX3DPB"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };