import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyD785VwdAiSol82o-VgXiAWH-iT4k2VdiE",
    authDomain: "crud-5838a.firebaseapp.com",
    projectId: "crud-5838a",
    storageBucket: "crud-5838a.appspot.com",
    messagingSenderId: "207121582997",
    appId: "1:207121582997:web:c60f35d1038b27c844449c"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)