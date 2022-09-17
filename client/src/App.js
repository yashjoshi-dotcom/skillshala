// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landingpage />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
