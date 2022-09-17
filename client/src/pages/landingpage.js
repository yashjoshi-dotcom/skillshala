import React from "react";
import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";

const Landingpage = () => {
    return (
        <>
           {/* <h1>Hello</h1> */}
           
         
           <div className="bg-black h-[90.6vh] ">
            
           <Carousel leftControl="L" 
    rightControl="R" slideInterval={5000} slide='' className='' >
                    <div className=" text-white text-center pt-[10%]">
                        <div className=" text-center text-5xl font-bold"> Kickstart</div>
                        <div className=" text-center text-5xl mb-[10%] italic"> Your learning</div>
                        <button className="bg-purple-700 rounded-xl px-7 py-2 text-lg font-bold">Kickstart</button>
                    </div>
                    <div className=" text-white text-center">
                        <div className=" italic text-5xl text-slate-300"> Connect with Experts and boost your learning</div>
                        <img className=" mx-auto rounded-2xl" src="https://source.unsplash.com/800x400/?videocall" alt="" />
                        <div className=" text-xl text-slate-500"> Join live sessions with mentors and clear your doubt. </div>
                    </div>
                </Carousel>
           </div>
        </>
      
    )
}
export default Landingpage;