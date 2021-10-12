import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL99Q3ZByC5-j7R1yaQJlzsSVzELQnvDQ",
  authDomain: "task-9bcbe.firebaseapp.com",
  projectId: "task-9bcbe",
  storageBucket: "task-9bcbe.appspot.com",
  messagingSenderId: "201289699083",
  appId: "1:201289699083:web:78a3167553ad33ad881c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;



