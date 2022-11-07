import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBApUFakqjK3Xeo_0WWp2lpQ_x-7Lvm3uY",
    authDomain: "shopping-app-fba89.firebaseapp.com",
    projectId: "shopping-app-fba89",
    storageBucket: "shopping-app-fba89.appspot.com",
    messagingSenderId: "393091120324",
    appId: "1:393091120324:web:d32c872385f46a6ffe5d91",
    measurementId: "G-CT6JHMZY23"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}