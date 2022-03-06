
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCSkCQT7YP0nl6GHUXjBt2kqdMcLPjRI20",
  authDomain: "rescue-pet.firebaseapp.com",
  projectId: "rescue-pet",
  storageBucket: "rescue-pet.appspot.com",
  messagingSenderId: "743621625503",
  appId: "1:743621625503:web:3984b7ac839dbc23c644aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const googleAuthProvider = new GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  app
}
