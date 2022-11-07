import React from "react";
import CssProject from "../Picture/cssprojct.png";
import Loging from "../Picture/login.jpeg";
import Webs from "../Picture/webjs.jpg";
import Web2 from "../Picture/wjs.png";
function Works() {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-100 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div
          style={{ backgroundImage: `url(${CssProject})` }}
          className="grid sm:grid-cols-2 grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow[#840c10] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-green-600 tracking-wider">
                Html css application
              </span>

              <div className="pt-8 text-center  ">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[orange] text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[orange] text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
