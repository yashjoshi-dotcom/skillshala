import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Questions from "../components/Questions";

function Forum() {
	const [questionsList, setQuestionsList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchQuestions();
	}, []);

	async function fetchQuestions() {
		const querySnapshot = await getDocs(collection(db, "Forum"));
		querySnapshot.forEach((doc) => {
			const id = doc.id;
			const Author = doc.data().Author;
			const Question = doc.data().Question;
			const TimeStamp = doc.data().TimeStamp;
			const Upvote = doc.data().Upvote;
			const Downvote = doc.data().Downvote;

			console.log(id, Author, Question, TimeStamp, Upvote, Downvote);

			setQuestionsList((prevData) => {
				return [
					...prevData,
					{
						id,
						author: Author,
						question: Question,
						timeStamp: TimeStamp,
						upVote: Upvote,
						downVote: Downvote,
					},
				];
			});
		});
		setLoading(false);
	}

	return (
		<div className="flex h-screen gap-4 bg-slate-700 px-12 py-12">
			<div className="h-full w-2/3 border-2 border-indigo-500">
				{loading ? (
					<p>Loading...</p>
				) : (
					questionsList.forEach((question) => {
						<Questions
							key={question.id}
							Author={question.Author}
							Question={question.Question}
							TimeStamp={question.TimeStamp}
							Upvote={question.Upvote}
							Downvote={question.Downvote}
						/>;
					})
				)}
			</div>
			<div className="h-1/2 w-1/3 rounded border-2 border-indigo-500">
				<form className="flex flex-col gap-4 px-4 py-8">
					<span className="text-xl text-white">Question</span>
					<textarea className="h-full " />
					<button className="self-end bg-indigo-500 px-6 py-2 text-white">
						Ask
					</button>
				</form>
			</div>
		</div>
	);
}

export default Forum;
