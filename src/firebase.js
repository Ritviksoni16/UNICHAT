import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB-MILN_84Hsk-iK9YVWrI9kGBxc4eT5FM",
    authDomain: "unichat-778e0.firebaseapp.com",
    projectId: "unichat-778e0",
    storageBucket: "unichat-778e0.appspot.com",
    messagingSenderId: "388136547242",
    appId: "1:388136547242:web:edd3c6a482a9b2ef7131d3"
  }).auth();