import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useState, useEffect } from "react";
// import Menu from "./Menu";
import "flowbite";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar";

const Navabr = () => {
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

  const { logOut } = useAuth();

  return (
    <>
    
     <div className="">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
     </div>
  
    </>
  );
};

export default Navabr;
