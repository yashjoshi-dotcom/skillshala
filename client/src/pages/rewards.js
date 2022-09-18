import React from "react";
import css from "./css.css";
import { Flowbite } from "flowbite-react";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
const Reward = () => {
    return (
        <>
            <div className="h-[60vh] bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800">
                <Carousel

                    slideInterval={5000}


                >
                    <div className=" ">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/300x300/?cup" alt="" />
                        <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">SkillShala Goodies</div>
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/300x300/?cup" alt="" />
                        <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">Bagpack</div>
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/300x300/?cup" alt="" />
                        <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">Dell inspiron 1540 2in1 Laptop</div>
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/300x300/?cup" alt="" />
                        <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">I Pad air 5</div>
                    </div>
                </Carousel>
                <div class="grid overflow-hidden grid-cols-3 grid-rows-4 gap-2 py-2">
                    <div class="box row-span-3"><div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div></div>
                    <div class="box col-start-2 col-span-2">2</div>
                    <div class="box row-span-2 col-start-2">3</div>
                    <div class="box row-span-3">4</div>
                    <div class="box col-span-2">5</div>
                </div>
            </div>
        </>
    )
}
export default Reward;