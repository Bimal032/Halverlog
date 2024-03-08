import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUsers } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";

const Bottombar = () => {
  return (
    <div className="fixed bottom-0 h-14 bg-[rgba(231,231,231,1)] w-full lg:hidden z-10">
      <div className="flex gap-2 items-center justify-around h-full">
        <Link to="/" className="bottombtn">
          <MdHome size={20} color="grey" className="hover:fill-black" />
        </Link>
        <Link to="#" className="bottombtn">
          <BsChatDotsFill size={20} color="grey" className="hover:fill-black" />
        </Link>
        <Link to="#" className="bottombtn">
          <FaBell size={20} color="grey" className="hover:fill-black" />
        </Link>
        <Link to="#" className="bottombtn">
          <FaUsers size={20} color="grey" className="hover:fill-black" />
        </Link>
      </div>
    </div>
  );
};

export default Bottombar;
