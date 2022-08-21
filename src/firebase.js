import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyDej0xJk8HzJ_kZRvZSkP1L80HpSz1QFRw",
  authDomain: "babl-backend.firebaseapp.com",
  projectId: "babl-backend",
  storageBucket: "babl-backend.appspot.com",
  messagingSenderId: "766730289891",
  appId: "1:766730289891:web:8ee1ff6a405f93d162fbd6"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const key = "BCxlK4IFkW65yh00uFbUvefpfoziS_lvKdGelUeY0moJ8N5atu7n_yt056I6k6usD2ixWVXVbrAGtEoydJWnzSo"
export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: key}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});