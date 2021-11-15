import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkXSR0FRaTGyW_9IrYZQdcbKrZOgOGPns",
    authDomain: "postgram-2021.firebaseapp.com",
    projectId: "postgram-2021",
    storageBucket: "postgram-2021.appspot.com",
    messagingSenderId: "354199397822",
    appId: "1:354199397822:web:2f2b52ae75c8a9596185ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;