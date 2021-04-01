import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuZ_9dnDqX3pQqN1kSUfPvVUqmkKuDmtM",
  authDomain: "linkedin-clone-d0547.firebaseapp.com",
  projectId: "linkedin-clone-d0547",
  storageBucket: "linkedin-clone-d0547.appspot.com",
  messagingSenderId: "205725897960",
  appId: "1:205725897960:web:febd1135e4e6014a90e55d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}