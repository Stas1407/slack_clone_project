import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsEJ63cfLf_XUwwKrgo5wPAYVUYutPvDE",
    authDomain: "slack-clone-ac0da.firebaseapp.com",
    projectId: "slack-clone-ac0da",
    storageBucket: "slack-clone-ac0da.appspot.com",
    messagingSenderId: "237369238787",
    appId: "1:237369238787:web:8685597d817b23a7353536"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();


export default db;