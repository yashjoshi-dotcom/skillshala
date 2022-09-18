import React from "react";
import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";

const LandingPage = () => {
  return (
    <>
      {/* <h1>Hello</h1> */}

      <div className="h-[90.6vh] w-[100%]  bg-no-repeat">
        <Carousel
          leftControl="L"
          rightControl="R"
          slideInterval={5000}
          slide=""
          className=""
        >
          <div className="mt-0 pt-[10%] text-center bg-background text-white">
            <div className=" text-center text-5xl font-bold"> Kickstart</div>
            <div className=" mb-[10%] text-center text-5xl italic">
              {" "}
              Your learning
            </div>
            <button className="rounded-xl bg-purple-700 px-7 py-2 text-lg font-bold">
              Kickstart
            </button>
          </div>
          <div className=" text-center text-white">
            <div className=" text-5xl italic text-slate-300">
              {" "}
              Connect with Experts and boost your learning
            </div>
            <img
              className=" mx-auto rounded-2xl"
              src="https://source.unsplash.com/800x400/?videocall"
              alt=""
            />
            <div className=" text-xl text-slate-500">
              {" "}
              Join live sessions with mentors and clear your doubt.{" "}
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default LandingPage;
