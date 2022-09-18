import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider(props) {
	const [currentUser, setCurrentUser] = useState(false);
	const navigate = useNavigate();

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
				navigate("/login");
			})
			.catch((error) => {
				console.log("There was some error");
			});
	}

	const value = {
		currentUser,
		setCurrentUser,
		logOut,
	};

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
}
