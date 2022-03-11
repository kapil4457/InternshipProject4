import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import "./css/PostDetails.css";
const PostDetails = () => {
	const params = useParams();
	const [data, setData] = useState();
	const [com, setCom] = useState([]);
	const details = async () => {
		const data = await axios.get(
			` https://jsonplaceholder.typicode.com/posts/${params.id}`
		);
		setData(data.data);
	};

	const comments = async () => {
		const comm = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
		);
		setCom(comm.data);
		console.log(comm.data);
	};

	useEffect(() => {
		details();
		comments();
	}, []);
	return (
		<div className="postDetailsCont">
			<div className="box">
				<h1>Details :</h1>
				<div className="postNum">
					<b> Post Number :</b> {data?.id}
				</div>
				<div className="postTitle">
					<b>Title :</b> {data?.title}
				</div>
				<div className="postBody">
					<b>Body : </b> {data?.body}
				</div>
			</div>
			<div className="comments">
				<h1>Comments : </h1>

				{com.map((mes) => (
					<Comments data={mes} />
				))}
			</div>
		</div>
	);
};

export default PostDetails;
