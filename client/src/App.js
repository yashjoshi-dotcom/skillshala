// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import Home from "./pages/home";
import Navabr from "./pages/navbar";

function App() {
	return (
		<div className="App">
      <Navabr/>
			<Routes>
				<Route path="/" element={<Landingpage />} />
				<Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
				<Route path="/upload" element={<Upload />} />
			</Routes>
		</div>
	);
}

export default App;
