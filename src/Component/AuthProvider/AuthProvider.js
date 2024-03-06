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
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// email and password authentication
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const emailLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	// Social site Authentication

	const facebookLogin = () => {
		return signInWithPopup(auth, facebookProvider);
	};

	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const forgetPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("current user", currentUser);
			setUser(currentUser);
		});
		return () => {
			return unsubscribe;
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		emailLogin,
		logOut,
		facebookLogin,
		googleLogin,
		forgetPassword,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
