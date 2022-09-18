import React from "react";
import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Lottie from "react-lottie";
import animationData from "../lotties/MasHi.json";

const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <h1>Hello</h1> */}

      <div className="h-[90.6vh] w-[100%]  bg-no-repeat">
        <Carousel
          leftControl="L"
          rightControl="R"
          slideInterval={5000}
          slide=""
          className="pt-0"
        >
          <div className=" mt-0 h-[92vh] bg-background bg-cover bg-no-repeat object-fill pt-0 text-center text-white">
            <div className="flex justify-center">
              <div className=" pt-[15vh] text-center text-5xl font-bold">
                {" "}
                Kickstart Learning
              </div>
            </div>
            <div className=" mr-[35vw] flex flex-row-reverse">
              <div className="  ml-[10vw] text-center text-5xl italic">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
              <button className="my-[24vh] w-52 rounded-full bg-purple-700 bg-opacity-50 px-[] text-lg font-bold">
                Kickstart
              </button>
            </div>
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
