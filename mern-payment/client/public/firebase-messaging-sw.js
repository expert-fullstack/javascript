importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyDjjVBuf7eVCKY13qohAI54VXGYOBRTG7s",
    authDomain: "push-notification-d30e0.firebaseapp.com",
    projectId: "push-notification-d30e0",
    storageBucket: "push-notification-d30e0.appspot.com",
    messagingSenderId: "229268426438",
    appId: "1:229268426438:web:dedc101b1d0cf0e66f91c7"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=sph'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});