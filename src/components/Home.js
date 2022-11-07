import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  ">
        <p className="text-orange-600">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#c4bcd2]">
          Towsif
        </h2>
        <p className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Fronted developer
        </p>
        <p className="text-2xl text-[gray] max-w-[700px] py-4">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <div>
          <button className="text-white group border-2 my-2 px-5 py-3 flex items-center hover:bg-orange-600 hover:border-orange-600">
            {" "}
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
