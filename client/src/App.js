// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Video from "./pages/Video";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import NavaBar from "./pages/NavBar";
import Subject from "./pages/Subject";
import Reward from "./pages/rewards";
import Profile from "./pages/profile";
import Testimonials from "./pages/testimonials";
import ContactUs from "./pages/contactus";

import Chat from './pages/Chat';

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<NavaBar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/video" element={<Video />} />
					<Route path="/reward" element={<Reward />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/subject" element={<Subject />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="/chat" element={<Chat />} />

				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
