// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Video from "./pages/Video";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import NavaBar from "./pages/NavBar";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<NavaBar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/video" element={<Video />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/upload" element={<Upload />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
