import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDxQ6JuGxllQrLYuhHQX7z-bELVpaFkW0U",
    authDomain: "biblioteca-virtual-8cfb1.firebaseapp.com",
    projectId: "biblioteca-virtual-8cfb1",
    storageBucket: "biblioteca-virtual-8cfb1.appspot.com",
    messagingSenderId: "1097243240320",
    appId: "1:1097243240320:web:5a15bf5e48bca4d5550365"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()