import React, { useEffect } from "react";
import { useState, useRef } from "react";
import {
	collection,
	getDocs,
	setDoc,
	serverTimestamp,
	doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import Questions from "../components/Questions";
import { useAuth } from "../context/AuthContext";

function Forum() {
	const [questionsList, setQuestionsList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [btnLoading, setBtnLoading] = useState(false);
	const questionRef = useRef();
	const { currentUser, userName, fetchUserDetails } = useAuth();
	var c = 0;

	if (!userName) {
		fetchUserDetails();
	}

	useEffect(() => {
		fetchQuestions();
		console.log(questionsList);
	}, []);

	async function askQuestionHandler(e) {
		setBtnLoading(true);
		e.preventDefault();
		const question = questionRef.current.value;
		const newQuestionRef = doc(collection(db, "Forum"));
		if (currentUser) {
			// console.log(currentUser, userName);
			await setDoc(newQuestionRef, {
				question: question.trim(),
				authorName: userName,
				authorId: currentUser.uid,
				timestamp: serverTimestamp(),
			})
				.then(setBtnLoading(false))
				.catch((error) => {
					console.log(error);
					setBtnLoading(false);
				});
		}
	}

	async function fetchQuestions() {
		// setLoading(true);
		const querySnapshot = await getDocs(collection(db, "Forum"));
		if (c === 1) return;
		c = c + 1;

		querySnapshot.forEach((doc) => {
			const id = doc.id;
			const Author = doc.data().authorName;
			const Question = doc.data().question;
			const TimeStamp = doc.data().timestamp;

			console.log(id, Author, Question, TimeStamp);

			setQuestionsList((prevState) => {
				const newList = [...prevState];
				newList.push({ id, Author, Question, TimeStamp });
				return newList;
			});
		});
		setLoading(false);
	}

	return (
		<div className="flex h-full min-h-screen gap-4 bg-slate-700 px-12 py-12">
			<div className="h-full w-2/3 divide-y-2 divide-indigo-500 border-2 border-indigo-500">
				{loading ? (
					<p>Loading...</p>
				) : (
					questionsList.forEach((question) => (
						<Questions
							key={question.id}
							author={question.Author}
							question={question.Question}
							timestamp={question.TimeStamp}
						/>
					))
				)}
			</div>
			<div className="h-1/2 w-1/3 rounded border-2 border-indigo-500">
				<form
					className="flex flex-col gap-4 px-4 py-8"
					onSubmit={askQuestionHandler}
				>
					<span className="text-xl text-white">Question</span>
					<textarea className="h-full " ref={questionRef} />
					<button className="self-end bg-indigo-500 px-6 py-2 text-white">
						Ask
					</button>
				</form>
			</div>
		</div>
	);
}

export default Forum;
