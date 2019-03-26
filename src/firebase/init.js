import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCjIePWt53YvL7AunCm9LgW1StXBs17KXM",
    authDomain: "ninja-smoothies-d4725.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-d4725.firebaseio.com",
    projectId: "ninja-smoothies-d4725",
    storageBucket: "ninja-smoothies-d4725.appspot.com",
    messagingSenderId: "868299179283"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore()
  