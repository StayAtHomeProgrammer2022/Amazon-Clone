var firebaseConfig = {
    apiKey: "AIzaSyBEYGFFhlOqk5TpFCCUXcykrGIsrLii-40",
    authDomain: "clone-two-c1e16.firebaseapp.com",
    projectId: "clone-two-c1e16",
    storageBucket: "clone-two-c1e16.appspot.com",
    messagingSenderId: "246892670059",
    appId: "1:246892670059:web:908ad195af9fbe1f36d52e",
    measurementId: "G-RXDR8ZDPSZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();