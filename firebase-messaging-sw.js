importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDqbECwcZgoHQZW1Rqg4cg32u0djrha-jc",
  authDomain: "app-push-94c0d.firebaseapp.com",
  databaseURL: "https://app-push-94c0d.firebaseio.com",
  projectId: "app-push-94c0d",
  storageBucket: "app-push-94c0d.appspot.com",
  messagingSenderId: "639724581713",
  appId: "1:639724581713:web:d8f2dc08362302987f5970",
  measurementId: "G-2FFF206PBY"
};

var defaultApp = firebase.initializeApp(firebaseConfig);
console.log(defaultApp.name);  

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'https://pt.m.wikipedia.org/wiki/Ficheiro:Slack_Icon.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});