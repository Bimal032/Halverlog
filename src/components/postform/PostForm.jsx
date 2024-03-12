import React from "react";
import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";

function PostForm() {
  return (
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
          className="object-cover w-full"
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
  );
}

export default PostForm;
