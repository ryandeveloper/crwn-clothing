import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyBrHQNROf6BRPvjbnaLi7hh87RuXy0F35Y",
   authDomain: "crwn-db-e5cfe.firebaseapp.com",
   databaseURL: "https://crwn-db-e5cfe.firebaseio.com",
   projectId: "crwn-db-e5cfe",
   storageBucket: "crwn-db-e5cfe.appspot.com",
   messagingSenderId: "762497391394",
   appId: "1:762497391394:web:7be35a3de6b48dab3ba37b",
   measurementId: "G-9BGDP7ZDSG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;