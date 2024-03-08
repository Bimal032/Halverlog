import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { FaBell, FaUsers, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 h-[5rem] rounded-b-lg bg-[rgba(231,231,231,1)] w-full justify-around py-5 items-center shadow-[0px_6px_16px_0px_rgba(0,0,0,0.25)] z-10">
      <div className="mr-2 min-w-fit">
        <img className="h-full w-20" src="/img/halverlog1.png" alt="" />
      </div>
      <div className="hidden md:flex flex-row h-full min-w-fit bg-[rgba(236,238,240,1)] items-center w-[30%] pl-6 pr-4 rounded-[42px] shadow-[-5px_-6px_15px_0px_rgba(255,255,255,1)_inset,5px_4px_16px_0px_rgba(0,0,0,0.25)_inset]">
        <IoMdSearch size={20} />
        <input
          type="text"
          className="w-[80%] bg-inherit ml-2 pl-2 text-sm h-1/3 outline-none active"
          placeholder="search"
        />
      </div>
      <div className="hidden gap-4 items-center h-full lg:flex">
        <div className="flex bg-[rgba(236,238,240,1)] w-24 h-10  rounded-xl shadow-[-4px_-3px_4px_0px_rgba(255,255,255,1),3px_4px_4px_0px_rgba(0,0,0,0.25)] hover:scale-105">
          <Link to="/" className="flex items-center justify-center w-full">
            <MdHome size={20} color="black" className="active" />
            <p className="text-xs ml-1 font-semibold active">Home</p>
          </Link>
        </div>
        <Link to="#" className="navbtn">
          <BsChatDotsFill size={20} className="active" />
        </Link>
        <Link to="#" className="navbtn">
          <FaBell size={20} className="active" />
        </Link>
        <Link to="#" className="navbtn">
          <FaUsers size={20} className="active" />
        </Link>
      </div>
      <div className="flex items-center gap-2 ml-2 min-w-max">
        <Link to="/profile" className="navbtn">
          <FaUser size={20} className="active" />
        </Link>
        <p className="text-xs ml-1 font-semibold active">User Name</p>
      </div>
      <div className="flex items-center gap-2 min-w-max">
        <Link to="/login" className="navbtn">
          <TbLogout size={20} className="active" />
        </Link>
        <p className="text-xs ml-1 font-semibold active">Logout</p>
      </div>
    </nav>
  );
};

export default Navbar;
