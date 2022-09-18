import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider(props) {
	const [currentUser, setCurrentUser] = useState(false);
	const [userRole, setUserRole] = useState(false);
	const [userGender, setUserGender] = useState(false);
	const [userName, setUserName] = useState(false);

	const navigate = useNavigate();

	async function fetchUserDetails(uid) {
		console.log(db, uid);
		const docRef = doc(db, "Users", uid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
			setUserGender(docSnap.data().gender);
			setUserName(docSnap.data().fullname);
			setUserRole(docSnap.data().role);
			navigate("/");
		} else {
			console.log("No such document!");
		}
	}

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user);
		} else {
			setCurrentUser(false);
			navigate("/login");
		}
	});

	function logOut() {
		signOut(auth)
			.then(() => {
				setCurrentUser(false);
			})
			.catch((error) => {
				console.log("There was some error");
			});
	}

	const value = {
		currentUser,
		setCurrentUser,
		logOut,
		userName,
		setUserName,
		userGender,
		setUserGender,
		userRole,
		setUserRole,
		fetchUserDetails,
	};

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
}
