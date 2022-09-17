// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landingpage />} />
			</Routes>
			hello
		</div>
	);
}

export default App;
