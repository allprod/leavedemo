importScripts("./flutter_service_worker.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCmZc4rHWdnHN1Jts3qUZH42q08vgAZd8Y",
  authDomain: "leavelog-22f4d.firebaseapp.com",
  // databaseURL: "...",
  projectId: "leavelog-22f4d",
  storageBucket: "leavelog-22f4d.appspot.com",
  messagingSenderId: "826994624156",
  appId: "1:826994624156:web:dedc835a574f5523794f59",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
  // TODO: add logic to deal with BG messages here.
});