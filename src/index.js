import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { positions, transitions, Provider as AlertProvider } from "react-alert";

import AlertTemplate from "react-alert-template-basic";
const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
	transition: transitions.SCALE,
};
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AlertProvider template={AlertTemplate} {...options}>
				<App />
			</AlertProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
