// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAwchW_Or1c3ns5xWdcxcHlpxx5U3hA1LE",
    authDomain: "netflix-clone-f07ea.firebaseapp.com",
    projectId: "netflix-clone-f07ea",
    storageBucket: "netflix-clone-f07ea.appspot.com",
    messagingSenderId: "955541085837",
    appId: "1:955541085837:web:1cd5a1fe92468d3a89ccc4",
    measurementId: "G-8HEC57FRC7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default db;