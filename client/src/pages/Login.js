import React from "react";
import { useAuth } from "../context/AuthContext";

function Login(props) {
	const { currentUser, setCurrentUser } = useAuth();

	return (
		<div>
			<form>
				<div>
					<span>Email</span>
					<input type="email" required />
				</div>
				<div>
					<span>Password</span>
					<input type="password" required />
				</div>
			</form>
		</div>
	);
}

export default Login;
