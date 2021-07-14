import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAPaiRt3yXIQK5qPUUjsuhNZhIUw5DKQlA",
    authDomain: "unitchatapp-7f6aa.firebaseapp.com",
    projectId: "unitchatapp-7f6aa",
    storageBucket: "unitchatapp-7f6aa.appspot.com",
    messagingSenderId: "198771446149",
    appId: "1:198771446149:web:fcdddf4d206e0d29cd74ec"
  }).auth();