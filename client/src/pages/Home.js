import React from "react";
import css from "./css.css";

const Home = () => {
  return (
    <>
      <div className="bg-[url('https://source.unsplash.com/1600x800/?dark')] bg-cover">
        <div className="min-h-[90.6vh] ">
          <div className="pt-4 text-center text-5xl font-bold italic text-gray-400 ">
            Choose your Subject
          </div>
          {/* <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?home')] bg-cover  ">
                    <div className="flex justify-center w-4/5">
                        <input
                            type="text"
                            className="my-16 w-9/12  sm:h-20 rounded-xl px-4 outline-none "
                            placeholder="Search here..."
                        // onChange={(e) => searchtags(e)}
                        />
                        
                    </div>

                </div> */}
          <div className=" flex  grid min-h-[90.6vh] grid-cols-4 justify-center     gap-y-8 gap-x-5 px-3 before:hidden after:hidden">
            <div className="py-4">
              <div className="content-div group container mx-auto  flex max-w-sm  items-center justify-center rounded-md bg-white bg-electronics shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Electronics
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/subject" >
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700"
                    
                    >
                      Start Learning
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Web Development
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Maths
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Chemistry
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Physics
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    English
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Game Development
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    App Development
                  </span>
                  <div className="pt-8 text-center">
                    <button className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
