import React from "react";
import { NavLink } from "react-router-dom";
import "./css/PostCard.css";

const PostCard = (data) => {
	return (
		<>
			<div className="postCardcontainer">
				<div className="title">
					<b>Title : </b> {data?.data.title}
				</div>
				<div className="userId">
					<b>UserId : </b>
					{data?.data.userId}
				</div>
				<NavLink to={`/post/${data?.data.id}`} className="btn">
					<button>Read More</button>
				</NavLink>
			</div>
		</>
	);
};

export default PostCard;
