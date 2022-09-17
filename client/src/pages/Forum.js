import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";

const Forum = () => {
	const [question, setquestion] = useState("");
	const handleQuestion = (e) => {
		setquestion(e.target.value);
		console.log(question);
	};
	const usersCollectionRef = collection(db, "Forum");

	const createUser = async () => {
		await addDoc(usersCollectionRef, { Question: question });
	};
	return (
		<div>
			<input
				type="text"
				value={question}
				required
				onChange={(e) => {
					handleQuestion(e);
				}}
			/>
			<button
				onClick={() => {
					createUser();
				}}
			>
				Send
			</button>
		</div>
	);
};

export default Forum;
