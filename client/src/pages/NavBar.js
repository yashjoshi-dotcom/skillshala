import React from "react";
import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
// import Menu from "./Menu";
import "flowbite";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar";

const NavaBar = () => {
	//   // const [isMenuOpen, SetMenu] = useState(false);
	//   const [userdata,setUserData] =useState();
	// const CallAboutPage= async()=>
	// {
	//   console.log("Call about")
	//       try{
	//       console.log("tried");
	//       const res=await fetch('/profilec',{
	//           method:"GET",
	//           headers:{
	//               Accept:"application/json",
	//               "Content-Type":"application/json"
	//           },
	//           credentials:"include"
	//       });
	//       const object= await res.json();
	//   //    setUserData(object);
	//       console.log(object);
	//       setUserData(object);
	//       console.log(userdata);
	//       if(!res.status===200)
	//       {
	//           const error= new Error (res.error);
	//           alert('There seems to be some issue with your credentials. We are working on it.');
	//           throw error;
	//       }
	//   }
	//   catch(err){
	//       console.log(err);
	//       console.log("caught error");
	//      }
	// };
	//   useEffect(()=>{
	//       CallAboutPage();
	//   },[])

	return (
		<div className="dark ">
			<Navbar fluid={true} rounded={false}>
				<div className=" sm:absolute">
					<Navbar.Brand href="/">
						<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							College Bazzar
						</span>
					</Navbar.Brand>
				</div>
				<div className="flex md:order-2 ">
					<NavLink
						to="/profile"
						className=" text-lg text-neutral-400 hover:text-neutral-200"
					>
						<img
							className=" w-10 rounded-full"
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
					</NavLink>

					<Navbar.Toggle />
				</div>
				<div className="m-0 lg:m-auto">
					<Navbar.Collapse>
						<NavLink
							to="/Home"
							className=" text-lg text-neutral-400 hover:text-neutral-200"
						>
							Home
						</NavLink>
						<NavLink
							to="/aboutus"
							className="text-lg text-neutral-400 hover:text-neutral-200"
						>
							About Us
						</NavLink>
						<NavLink
							to="/contact"
							className="text-lg text-neutral-400 hover:text-neutral-200"
						>
							Contact
						</NavLink>
						<NavLink
							to="/testimonials"
							className="text-lg text-neutral-400 hover:text-neutral-200"
						>
							Testimonials
						</NavLink>
						<NavLink
							to="/signin"
							className="text-lg text-neutral-400 hover:text-neutral-200"
						>
							Login
						</NavLink>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default NavaBar;
