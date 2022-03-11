import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Home.css";
import PostCard from "./PostCard";

const Home = () => {
	const [Info, SetInfo] = useState([]);
	const GetData = async () => {
		const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
		SetInfo(data.data);
		console.log(data.data[0]);
	};
	useEffect(() => {
		GetData();
	}, []);
	return (
		<div className="container">
			<div className="head">
				<h1>All Posts</h1>
				<NavLink to="/addPost">
					<button>Write a post</button>
				</NavLink>
			</div>

			<div className="postContainer">
				{Info.map((post) => (
					<PostCard key={post.id} data={post} />
				))}
			</div>
		</div>
	);
};

export default Home;
