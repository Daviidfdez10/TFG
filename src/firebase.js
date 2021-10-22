
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCMAbbDkYCG0bIr0RJPcvk8mU2aEYdgQ9Q",
    authDomain: "trabajodavidfdez.firebaseapp.com",
    projectId: "trabajodavidfdez",
    storageBucket: "trabajodavidfdez.appspot.com",
    messagingSenderId: "342818268114",
    appId: "1:342818268114:web:f8d5868c804181d59f9e0b"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
console.log(firebaseApp);
  export {auth};
