// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyDjjVBuf7eVCKY13qohAI54VXGYOBRTG7s",
    authDomain: "push-notification-d30e0.firebaseapp.com",
    projectId: "push-notification-d30e0",
    storageBucket: "push-notification-d30e0.appspot.com",
    messagingSenderId: "229268426438",
    appId: "1:229268426438:web:dedc101b1d0cf0e66f91c7"
  };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };