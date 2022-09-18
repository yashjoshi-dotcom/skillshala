import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Questions from "../components/Questions";

function Forum() {
	const [questionsList, setQuestionsList] = useState([]);
	const [loading, setLoading] = useState(true);
	var c=0;

	async function fetchQuestions() {
		// setLoading(true);
		const querySnapshot = await getDocs(collection(db, "Forum"));
		console.log("hello")
		if(c==1) return;
		c=c+1;
		

		querySnapshot.forEach((doc) => {
			const id = doc.id;
			const Author = doc.data().Author;
			const Question = doc.data().Question;
			const TimeStamp = doc.data().TimeStamp;
			const Upvote = doc.data().Upvote;
			const Downvote = doc.data().Downvote;

			console.log(id, Author, Question, TimeStamp, Upvote, Downvote);

			setQuestionsList((prevState) => {
				const newList = [...prevState];
				 newList.push({ id, Author, Question, TimeStamp, Upvote, Downvote });
				return newList;
				// return [
                //     prevData,
                //     {
                //         id,
                //         author: Author,
                //         question: Question,
                //         timeStamp: TimeStamp,
                //         upVote: Upvote,
                //         downVote: Downvote,
                //     },
                // ];
			});
			return;
		});
		setLoading(false);
	    
		
	}

	useEffect(() => {
		fetchQuestions();
		console.log(questionsList);
	}, []);

	return (
		<div className="flex h-full gap-4 bg-slate-700 px-12 py-12">
			<div className="h-full w-2/3 divide-y-2 divide-indigo-500 border-2 border-indigo-500">
				{loading ? (
					<p>Loading...</p>
				) : (
					questionsList.map((question) => (
						<Questions
							className=""
							key={question.id}
							author={question.Author}
							question={question.Question}
							timeStamp={question.TimeStamp}
							upVote={question.Upvote}
							downVote={question.Downvote}
						/>
					))
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
