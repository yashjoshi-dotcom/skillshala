// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Landingpage from "./pages/landingpage";
import SignUp from "./pages/SignUp";
import Video  from "./pages/video";
import Upload from "./pages/Upload";
import Home from "./pages/home";
import Navabr from "./pages/navbar";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Navabr />
				<Routes>
					<Route path="/" element={<Landingpage />} />
					<Route path="/video" element={<Video />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home" element={<Home />} />
					<Route path="/upload" element={<Upload />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
