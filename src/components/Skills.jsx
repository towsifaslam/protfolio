import React from "react";
import C from "../Picture/c.png";
import Cplus from "../Picture/c++.png";
import Css from "../Picture/css.png";
import Git from "../Picture/git.jpg";
import Github from "../Picture/githut.png";
import Html from "../Picture/html.png";
import Js from "../Picture/js.png";
import Reactpng from "../Picture/react.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Skills
          </p>
          <p className="py-4"> Thes are the technologies I've workde with</p>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={C} alt=" c programmimng" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Cplus} alt=" c programmimng" />
              <p className="my-4">C plus plus</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Html} alt=" c programmimng" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Css} alt=" c programmimng" />
              <p className="my-4">Css</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Js} alt=" c programmimng" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={Github}
                alt=" c programmimng"
              />
              <p className="my-4">GitHube</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Git} alt=" c programmimng" />
              <p className="my-4">Git</p>
            </div>
            <div className="shadow-md shadow-[#840c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={Reactpng}
                alt=" c programmimng"
              />
              <p className="my-4">React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
