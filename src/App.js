import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddPost from "./components/AddPost.jsx";
import PostDetails from "./components/PostDetails.jsx";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/post/:id">
					<PostDetails />
				</Route>
				<Route exact path="/addPost">
					<AddPost />
				</Route>
			</Switch>
		</>
	);
}
export default App;
