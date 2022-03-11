import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import "./css/AddPost.css";

const AddPost = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [userId, setUserId] = useState();
	const history = useHistory();
	const alert = useAlert();
	const addHandler = async (e) => {
		e.preventDefault();
		if (title == "" || body == "" || userId == "") {
			alert.error("Please fill in all the details");
			return;
		}
		await axios.post("https://jsonplaceholder.typicode.com/posts", {
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, body, userId }),
		});
		alert.success("Post added successfully");
		history.push("/");
	};
	return (
		<div className="addPostCont">
			<form>
				<h1>Add Post</h1>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Body"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<input
					type="number"
					placeholder="UserId"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>
				<input
					type="submit"
					value="Add"
					className="submit"
					onClick={addHandler}
				/>
			</form>
		</div>
	);
};

export default AddPost;
