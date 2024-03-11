import React, { useEffect, useState } from "react";
import Style from "./ProfilePage.module.css";
import { FaFaceLaugh } from "react-icons/fa6";
import Rightbar from "../rightbar/Rightbar";
import Bottombar from "../bottombar/Bottombar";
import Leftbar from "../leftbar/Leftbar";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePost from "../createpost/CreatePost";
import PostForm from "../postform/PostForm";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    return setShowModal(false);
  };
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
          {/* profile image with name starts */}
          <div className="flex flex-col w-full mt-4 p-4 gap-6 bg-[rgba(236,238,240,1)] rounded-3xl shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
            <div className="flex relative p-1 w-full h-72 bg-[rgba(217,217,217,1)] rounded-2xl shadow-[0px_4px_4px_0px_rgba(143,125,125,0.42)_inset,0px_4px_4px_0px_rgba(255,255,255,0.25)]"></div>
            <div className="absolute top-[14%] ml-4">
              <img
                src={userData?.imageUrl || "/images/avatar.jpeg"}
                alt="avatar"
                className="h-40 w-40 rounded-full"
              />
            </div>
            <div className="flex justify-between">
              <div className="ml-8 text-2xl font-semibold">
                {userData?.name}
              </div>
              <div className="flex flex-1 justify-evenly flex-wrap">
                <button className="mx-2 active text-md">Timeline</button>
                <button className="active text-md">About</button>
                <button className="mx-2 active text-md">Friends</button>
                <button className="active text-md">Photos</button>
              </div>
            </div>
          </div>
          {/* profile image with name ends */}
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
                  onClick={() => setShowModal(true)}
                />
                <FaFaceLaugh className="active hover:scale-110" />
              </div>
            </div>
            <div className="flex justify-around flex-wrap">
              <button
                className="postbutton mt-1"
                onClick={() => setShowModal(true)}
              >
                <span className="w-10">
                  <img src="/images/img1.png" alt="add-image" />
                </span>
                <span className="w-full text-sm active">image</span>
              </button>
              <button
                className="postbutton mt-1"
                onClick={() => setShowModal(true)}
              >
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
              <button
                className="postbutton mt-1"
                onClick={() => setShowModal(true)}
              >
                <span className="w-16 text-sm active">post</span>
              </button>
            </div>
          </div>
          {showModal && <CreatePost closeModal={closeModal} />}
          {/* post template */}
          <PostForm />
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
