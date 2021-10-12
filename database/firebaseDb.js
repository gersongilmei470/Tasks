// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDL99Q3ZByC5-j7R1yaQJlzsSVzELQnvDQ",
    authDomain: "task-9bcbe.firebaseapp.com",
    projectId: "task-9bcbe",
    storageBucket: "task-9bcbe.appspot.com",
    messagingSenderId: "201289699083",
    appId: "1:201289699083:web:78a3167553ad33ad881c0e"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;