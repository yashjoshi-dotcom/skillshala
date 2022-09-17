import React from "react";

function Questions(props) {
	return (
		<div>
			<div>
				<p>{props.upVote}</p>
				<p>{props.downVote}</p>
			</div>
			<h2>{props.question}</h2>
			<p>{props.author}</p>
			<p>{props.timeStamp}</p>
		</div>
	);
}

export default Questions;
