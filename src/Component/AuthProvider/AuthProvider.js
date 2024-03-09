import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithPopup,
	sendPasswordResetEmail,
	updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
// console.log(auth);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// email and password authentication
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const emailLogin = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserName = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Social site Authentication

	const facebookLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, facebookProvider);
	};

	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const forgetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// console.log("current user", currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			return unsubscribe;
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		emailLogin,
		logOut,
		facebookLogin,
		googleLogin,
		forgetPassword,
		updateUserName,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
