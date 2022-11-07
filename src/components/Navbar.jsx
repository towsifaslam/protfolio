import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsfillPersonLinosFill } from "react-icons/bs";
import Logo from "../Picture/logo.jpg";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "60px" }} />
      </div>

      {/* menu list for website */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Abou</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Humburger */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#8a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Abou</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* socal icons  */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between w-full text-gray-300" href="/">
              link <FaLinkedin />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#555555]-600">
            <a className="flex justify-between w-full text-gray-300" href="/">
              githum <FaGithub />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-#e7e7e7-600">
            <a className="flex justify-between w-full text-gray-300" href="/">
              Facebook <FaFacebook />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between w-full text-gray-300" href="/">
              Email <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
