import React from "react";
import css from "./css.css";
const Home = () => {
    return (
        <>
            <div class="">
                <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?home')] bg-cover  ">
                    <div className="flex justify-center w-4/5">
                        <input
                            type="text"
                            className="my-16 w-9/12  sm:h-20 rounded-xl px-4 outline-none "
                            placeholder="Search here..."
                        // onChange={(e) => searchtags(e)}
                        />
                        {/* <button className=" my-36 sm:h-20 w-20 rounded-l-none rounded-r-xl  px-4 bg-sky-600  border-0 hover:bg-sky-700">
                <img className=" object-contain py-2 w-10" src={image5} alt="" />
              </button> */}
                    </div>

                </div>
                <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?dark')] bg-cover   px-3 grid grid-cols-4 gap-5">


                    <div class="py-4">
                        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                            <div>
                                <div class="w-full image-cover rounded-t-md " >
                                    {/* <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                                </div>
                                {/* <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                            </div>
                            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Computer Science</span>
                                <div class="pt-8 text-center">
                                    <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Start Learning</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Home;