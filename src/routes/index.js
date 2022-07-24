import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes
} from "react-router-dom";
import Login from "../pages/LoginUser";
import ResetPassword from "../pages/reset-password";

export default function App() {
	return (
		<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
		</Router>
	);
}