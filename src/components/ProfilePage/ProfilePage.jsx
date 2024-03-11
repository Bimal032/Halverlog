import React, { useEffect } from "react";
import Style from "./ProfilePage.module.css";
import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";
import { FaFaceLaugh } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import Rightbar from "../rightbar/Rightbar";
import Bottombar from "../bottombar/Bottombar";
import Leftbar from "../leftbar/Leftbar";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus, navigate]);

  return (
    <div className="w-full bg-[rgba(236,238,240,1)] min-w-[470px]">
      {/* navbar starts*/}
      <Navbar userData={userData} />
      {/* navbar ends */}
      <div className="flex w-full relative h-full mt-[5rem]">
        {/* Leftbar start */}
        <Leftbar userData={userData} />
        {/* middle content start*/}
        <div
          className={`p-2 bg-[rgba(236,238,240,1)] h-full w-[50%] max-[900px]:w-[65%] flex flex-col z-[1] ${Style.add}`}
        >
          {/* create post */}
          <div className="flex flex-col w-full mt-4 p-10 gap-6 bg-[rgba(236,238,240,1)] rounded-3xl shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
            <div className="flex mx-2 justify-center gap-4">
              <div className="rounded-full flow-root w-12 h-12 bg-black">
                <img
                  src={userData.imageUrl || "/images/avatar.jpeg"}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
              <div className="flex w-4/5 rounded-3xl justify-center items-center text-black bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset]">
                <input
                  type="text"
                  placeholder="share something..."
                  className="w-[85%] outline-none bg-inherit text-black active"
                />
                <FaFaceLaugh className="active hover:scale-110" />
              </div>
            </div>
            <div className="flex justify-around flex-wrap">
              <button className="postbutton mt-1">
                <span className="w-10">
                  <img src="/images/img1.png" alt="add-image" />
                </span>
                <span className="w-full text-sm active">image</span>
              </button>
              <button className="postbutton mt-1">
                <span className="w-10">
                  <img src="/images/img2.png" alt="add-video" />
                </span>
                <span className="w-full text-sm active">video</span>
              </button>
              <button className="postbutton mt-1">
                <span className="w-10">
                  <img src="/images/img3.png" alt="add-news" />
                </span>
                <span className="w-full text-sm active">news</span>
              </button>
              <button className="postbutton mt-1">
                <span className="w-16 text-sm active">post</span>
              </button>
            </div>
          </div>
          {/* post template */}
          <div className=" flex flex-col rounded-2xl bg-white mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
            <div className="flex w-full p-6">
              <div className="flex w-full gap-4 px-6">
                <div className="rounded-full border-black border-[1px] flow-root w-14 h-14 bg-black">
                  <img
                    src="/images/avatar.jpeg"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-black text-lg">
                    Bimal Kishor Mondal
                  </span>
                  <span className="text-sm">12 Feb 2024</span>
                </div>
              </div>
              <button className="justify-self-end">
                <CiMenuKebab size={20} className="active" />
              </button>
            </div>
            <div id="caption" className="text-md px-6">
              One Piece Proves Luffy's Gear 5 is not Goofy, Its terrifying
            </div>
            <div className="w-full px-4 flex justify-center">
              <img
                src="/img/background.jpeg"
                alt="post-img"
                className="object-cover w-full h-[30rem]"
              />
            </div>
            <div className="flex p-3 w-1/2 justify-around">
              <button className="profilebutton">
                <FaRegHeart size={25} className="active" />
              </button>
              <button className="profilebutton">
                <FaRegCommentDots size={25} className="active" />
              </button>
              <button className="profilebutton">
                <PiShareFat size={25} className="active" />
              </button>
            </div>
          </div>
          {/* post template */}
          <div className=" flex flex-col rounded-2xl bg-white mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
            <div className="flex w-full p-8">
              <div className="flex w-full gap-4 px-6">
                <div className="rounded-full border-black border-[1px] flow-root w-14 h-14 bg-black">
                  <img
                    src="/images/avatar.jpeg"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-black text-lg">
                    Bimal Kishor Mondal
                  </span>
                  <span className="text-sm">12 Feb 2024</span>
                </div>
              </div>
              <button className="justify-self-end">
                <CiMenuKebab size={20} className="active" />
              </button>
            </div>
            <div id="caption" className="text-md px-6">
              One Piece Proves Luffy's Gear 5 is not Goofy, Its terrifying
            </div>
            <div className="flex justify-center w-full px-4">
              <img
                src="/img/background.jpeg"
                alt="post-img"
                className="object-cover w-full h-[30rem]"
              />
            </div>
            <div className="flex p-3 w-1/2 justify-around">
              <button className="profilebutton">
                <FaRegHeart size={25} className="active" />
              </button>
              <button className="profilebutton">
                <FaRegCommentDots size={25} className="active" />
              </button>
              <button className="profilebutton">
                <PiShareFat size={25} className="active" />
              </button>
            </div>
          </div>
        </div>
        {/* Rightbar starts */}
        <Rightbar userData={userData} />
      </div>
      {/* bottom bar */}
      <Bottombar userData={userData} />
    </div>
  );
};

export default ProfilePage;
