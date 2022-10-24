import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import {GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCYdiGAsnajMz4NQtytGfX37TFjkyAFGC4",
  authDomain: "my-facebook-c0d8d.firebaseapp.com",
  projectId: "my-facebook-c0d8d",
  storageBucket: "my-facebook-c0d8d.appspot.com",
  messagingSenderId: "666337172559",
  appId: "1:666337172559:web:3ae6a66ccc4a1999169e3a"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=  firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new GoogleAuthProvider();


  export { db , auth , provider , storage }