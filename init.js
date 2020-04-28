// Initialize Firebase
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

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');

}).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
});

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function(currentToken) {
if (currentToken) {
    console.log('token 1 : ' + currentToken);
    var el = document.getElementById("firebaseToken").value = currentToken;
} else {
    console.log('token 2 : '+currentToken)
}
}).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
});

messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
});