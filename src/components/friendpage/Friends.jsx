import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Leftbar from "../leftbar/Leftbar";
import Rightbar from "../rightbar/Rightbar";
import Bottombar from "../bottombar/Bottombar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Style from "../ProfilePage/ProfilePage.module.css";
import Friend from "./Friend";

const Friends = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [clicked, setClicked] = useState("hide");
  // console.log(userData);
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus, navigate]);
  const [temp, setTemp] = useState(
    userData.friend.map((user) => user.friendId)
  );
  return (
    <div className="w-full bg-[rgba(236,238,240,1)] min-w-[470px] min-h-[100lvh]">
      <Navbar userData={userData} clicked={clicked} setClicked={setClicked} />
      <div className="flex w-full relative h-full mt-[5rem]">
        <Leftbar userData={userData} clicked={clicked} />
        <div
          className={`hide-scroll overflow-y-auto p-2 bg-[rgba(236,238,240,1)] w-[50%] max-[900px]:w-[65%] flex flex-col gap-4 z-[1] ${Style.add}`}
        >
          <div className="w-full h-16 bg-[rgba(236,238,240,1)] rounded-lg p-4 mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)] justify-center flex">
            <div className="font-semibold ml-2 mt-1 text-lg">All Following</div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {temp
              ? temp.map((user) => <Friend user={user} key={user.$id} />)
              : "Friends Page"}
          </div>
        </div>
        <Rightbar userData={userData} />
      </div>
      <Bottombar userData={userData} />
    </div>
  );
};

export default Friends;
