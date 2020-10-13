import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDfILjJYNRMLN4HN6TA_Ja_0eWsbDWmzI4",
    authDomain: "discord-clone-45c77.firebaseapp.com",
    databaseURL: "https://discord-clone-45c77.firebaseio.com",
    projectId: "discord-clone-45c77",
    storageBucket: "discord-clone-45c77.appspot.com",
    messagingSenderId: "898991709797",
    appId: "1:898991709797:web:0e4b602fd228b43836b08c",
    measurementId: "G-G411C2V605"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;