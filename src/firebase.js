// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/auth";
import config from "./config.json"
firebase.initializeApp(config);
let provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}
export const firestore=firebase.firestore();
export default firebase;