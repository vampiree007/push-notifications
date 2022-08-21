// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDej0xJk8HzJ_kZRvZSkP1L80HpSz1QFRw",
  authDomain: "babl-backend.firebaseapp.com",
  projectId: "babl-backend",
  storageBucket: "babl-backend.appspot.com",
  messagingSenderId: "766730289891",
  appId: "1:766730289891:web:8ee1ff6a405f93d162fbd6"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
