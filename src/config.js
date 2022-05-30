import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBw--jOoWg-zeUHKuJkJxmEOWML3_yeTZ4",
    authDomain: "trashout-1eeb4.firebaseapp.com",
    projectId: "trashout-1eeb4",
    storageBucket: "trashout-1eeb4.appspot.com",
    messagingSenderId: "525776750949",
    appId: "1:525776750949:web:e22baec3edd7941bf2b98c",
    measurementId: "G-92ME655WHB"
});

export default firebaseConfig;