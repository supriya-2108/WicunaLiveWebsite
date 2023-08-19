// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCcCau6DrN_ldPPKMfkt1HzEzVI2x5XpsE",

  authDomain: "wicunaclientsdata.firebaseapp.com",

  databaseURL: "https://wicunaclientsdata-default-rtdb.firebaseio.com",

  projectId: "wicunaclientsdata",

  storageBucket: "wicunaclientsdata.appspot.com",

  messagingSenderId: "797700983489",

  appId: "1:797700983489:web:4ca4990b2d1fa36ef96240"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage =getStorage(app);