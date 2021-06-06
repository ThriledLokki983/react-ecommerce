/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: "AIzaSyCNoqXJR2tNHiZlNQxI0F-jJjUjgjjl5Xg",
	authDomain: "first-react-app-3ec5f.firebaseapp.com",
	projectId: "first-react-app-3ec5f",
	storageBucket: "first-react-app-3ec5f.appspot.com",
	messagingSenderId: "158115638212",
	appId: "1:158115638212:web:7ca79df24712db8223d291",
	measurementId: "G-0947392811",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * Setting up google authentication utilities
 */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
