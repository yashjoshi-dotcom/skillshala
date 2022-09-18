import React from "react";
import {
	ArrowSmallUpIcon,
	ArrowSmallDownIcon,
} from "@heroicons/react/24/outline";

function Questions(props) {
	console.log(props.question, props.timestamp);
	return (
		<div className="flex w-full gap-8  py-4 px-4 text-white">
			{/* <div className="flex flex-col text-center">
				<p>
					<span>
						<ArrowSmallUpIcon className="h-5 w-5" />
					</span>
					{props.upVote}
				</p>
				<p>
					{props.downVote}
					<span>
						<ArrowSmallDownIcon className="h-5 w-5" />
					</span>
				</p>
			</div> */}
			<h2 className="flex w-3/6 items-center text-2xl">
				Question: {props.question}
			</h2>
			<p className="self-end">Asked by: {props.author}</p>
			<p>{new Date(props.timestamp.seconds * 1000)}</p>
		</div>
	);
}

export default Questions;
