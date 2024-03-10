import React, { useEffect, useState } from "react";
import { MdFeed } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import Style from "./leftbar.module.css";
import { useLocation } from "react-router-dom";

const Leftbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/profile") {
      setShow(true);
    }
  }, []);

  return (
    <div
      className={`flex flex-col bg-[rgba(236,238,240,1)] left-0 w-[25%] max-[900px]:w-[35%] min-w-72 px-6 py-2 overscroll-contain ${Style.remove}`}
    >
      <div
        className={
          show
            ? "flex relative flex-col mt-4 bg-[rgba(217,222,226,1)] rounded-3xl p-4 min-h-[27rem] shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]"
            : "hidden"
        }
      >
        <div className="flex p-2 w-full h-32 bg-[rgba(217,217,217,1)] rounded-2xl shadow-[0px_4px_4px_0px_rgba(143,125,125,0.42)_inset,0px_4px_4px_0px_rgba(255,255,255,0.25)]"></div>
        <div className="flex rounded-full absolute top-[23%] left-[35%]">
          <img
            src="/images/avatar.jpeg"
            alt="avatar"
            className="h-20 w-20 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-evenly gap-6 mt-16">
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm font-semibold">Bimal Kishor Mondal</span>
            <span className="text-xs">@bimal12</span>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <button className="profilebutton active">Post</button>
              <span className="mt-2">00</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="profilebutton active">Followers</button>
              <span className="mt-2">00</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="profilebutton active">Following</button>
              <span className="mt-2">00</span>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className="w-1/2 items-center justify-center bg-[rgba(82,182,225,1)] py-3 rounded-3xl text-xs shadow-[-3px_-2px_4px_0px_rgba(255,255,255,1),2px_4px_4px_0px_rgba(0,0,0,0.34)] hover:scale-110">
              MY PROFILE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[rgba(236,238,240,1)] rounded-3xl p-6 mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)] items-start">
        <div className="font-semibold ml-3 mt-2 self-start text-lg">
          Shortcuts
        </div>
        <div className="flex flex-col p-4 ml-3 ">
          <button className="sbutton">
            <MdFeed size={25} className="active" />
            <span className="text-lg ml-2 active">Feeds</span>
          </button>
          <button className="sbutton">
            <FaUsers size={25} className="active" />
            <span className="text-lg ml-2 active">Groups</span>
          </button>
          <button className="sbutton">
            <PiVideoFill size={25} className="active" />
            <span className="text-lg ml-2 active">Video</span>
          </button>
          <button className="sbutton">
            <FaBookmark size={20} className="active" />
            <span className="text-lg ml-2 active">Saved</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
