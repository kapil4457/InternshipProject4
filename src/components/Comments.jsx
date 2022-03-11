import React from "react";
import "./css/comments.css";
const Comments = (data) => {
	console.log(data);
	return (
		<div>
			<div className="cont">
				<div className="name">
					<b> Name :</b> {data?.data.name}
				</div>
				<div className="comment">
					<b>Message :</b> {data?.data.body}
				</div>
			</div>
		</div>
	);
};

export default Comments;
