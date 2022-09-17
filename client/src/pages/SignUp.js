import React from "react";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function SignUp(props) {
	// Local States
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// Local form refs
	const fullNameRef = useRef();
	const emailRef = useRef();
	const genderRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	// classes
	const containerClass = "flex gap-4 items-center";
	const spanClass = "w-1/3 text-white text-l";
	const inputClasses = "w-2/3";

	const validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	function onSubmitHandler(e) {
		e.preventDefault();
		setLoading(true);

		const fullName = fullNameRef.current.value;
		const email = emailRef.current.value;
		const gender = genderRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (fullName.trim().length > 3 && gender) {
			if (validateEmail(email.trim())) {
				console.log("validate mail ran");
				if (password.trim() === confirmPassword.trim()) {
					createUserWithEmailAndPassword(auth, email, password)
						.then(async (cred) => {
							try {
								await setDoc(doc(db, "Users", cred.user.uid), {
									fullname: fullName,
									gender: gender,
								});
								setLoading(false);
							} catch (error) {
								setError(error.message);
								setLoading(false);
							}
						})
						.catch((e) => {
							console.log(e);
							setLoading(false);
						});
				} else {
					setError("Password mismatch");
					setLoading(false);
				}
			} else {
				setError("Please use correct email address");
				setLoading(false);
			}
		} else {
			setError("Name length should be greater than 3");
			setLoading(false);
		}

		console.log(
			fullNameRef.current.value,
			emailRef.current.value,
			genderRef.current.value,
			passwordRef.current.value,
			confirmPasswordRef.current.value,
			error
		);
	}

	return (
		<div className="flex h-screen w-full items-center justify-center bg-slate-700">
			<div className="h-5/6 w-1/3 rounded-xl  bg-black bg-opacity-30 px-8 py-4 shadow-slate-900 ">
				<h1 className="text-center text-2xl font-bold italic text-white">
					Sign Up
				</h1>
				<form
					onSubmit={onSubmitHandler}
					className="flex h-full flex-col justify-evenly"
				>
					<div className={containerClass}>
						<span className={spanClass}>Full Name</span>
						<input
							ref={fullNameRef}
							type="text"
							placeholder="Eg: Yuvraj"
							className={inputClasses}
							required
						></input>
					</div>
					<div className={containerClass}>
						<span className={spanClass}>Email</span>
						<input
							ref={emailRef}
							type="email"
							placeholder="Eg: yuvi@gmail.com"
							className={inputClasses}
							required
						></input>
					</div>
					<div className={containerClass}>
						<span className={spanClass}>Gender</span>
						<select
							ref={genderRef}
							name="Gender"
							id="gender"
							className={inputClasses}
							required
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div className={containerClass}>
						<span className={spanClass}>Password</span>
						<input
							ref={passwordRef}
							type="password"
							className={inputClasses}
							required
						></input>
					</div>
					<div className={containerClass}>
						<span className={spanClass}>Confirm Password</span>
						<input
							ref={confirmPasswordRef}
							type="password"
							className={inputClasses}
							required
						></input>
					</div>
					<button
						type="submit"
						className="self-end rounded bg-teal-500 px-6 py-2 text-white  hover:bg-teal-700 disabled:bg-pink-500"
						disabled={loading}
					>
						Sign Up
					</button>
					{error ? <p className="text-rose-500">{error}</p> : null}
				</form>
			</div>
		</div>
	);
}

export default SignUp;
