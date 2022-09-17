import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useAuth } from "../context/AuthContext";

function Login(props) {
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const emailRef = useRef();
	const passwordRef = useRef();

	const { currentUser, setCurrentUser } = useAuth();

	const containerClass = "flex gap-4 items-center";
	const spanClass = "w-1/3 text-white text-l";
	const inputClasses = "w-2/3";

	function submitHandler(e) {
		e.preventDefault();
		isLoading(true);
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		signInWithEmailAndPassword(auth, email.trim(), password.trim())
			.then((userCredentials) => {
				setCurrentUser(userCredentials);
				isLoading(false);
				navigate("/");
				console.log(currentUser);
			})
			.catch((error) => {
				setError(error.message);
				console.log(error);
				setCurrentUser(false);
				isLoading(false);
			});
	}

	if (currentUser) {
		console.log(currentUser);
		return navigate("/");
	} else {
		return (
			<div className="flex h-screen items-center justify-center bg-slate-700">
				<div className="h-3/5 w-1/3 flex-col rounded-xl bg-slate-800">
					<form
						onSubmit={submitHandler}
						className="flex h-full w-full flex-col justify-evenly px-8 py-12"
					>
						<h1 className="text-center text-2xl font-bold italic text-white">
							Log In
						</h1>
						<div className={containerClass}>
							<span className={spanClass}>Email</span>
							<input
								ref={emailRef}
								type="email"
								required
								className={inputClasses}
							/>
						</div>
						<div className={containerClass}>
							<span className={spanClass}>Password</span>
							<input
								ref={passwordRef}
								type="password"
								required
								className={inputClasses}
							/>
						</div>
						<button
							className="w-1/4 self-end bg-indigo-500 py-2 text-white disabled:bg-rose-500"
							type="submit"
							disabled={loading}
						>
							Log In
						</button>
						{error ? <p className="text-rose-500">{error}</p> : null}
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
