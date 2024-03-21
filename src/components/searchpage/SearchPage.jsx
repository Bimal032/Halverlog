import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Leftbar from "../leftbar/Leftbar";
import Rightbar from "../rightbar/Rightbar";
import Bottombar from "../bottombar/Bottombar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Style from "../ProfilePage/ProfilePage.module.css";

const SearchPage = () => {
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
  return (
    <div className="w-full bg-[rgba(236,238,240,1)] min-w-[470px] min-h-[100lvh]">
      <Navbar userData={userData} clicked={clicked} setClicked={setClicked} />
      <div className="flex w-full relative h-full mt-[5rem]">
        <Leftbar userData={userData} clicked={clicked} />
        <div
          className={`hide-scroll overflow-y-auto p-2 bg-[rgba(236,238,240,1)] h-[55rem] w-[50%] max-[900px]:w-[65%] flex flex-col z-[1] ${Style.add}`}
        >
          Search page
        </div>
        <Rightbar userData={userData} />
      </div>
      <Bottombar userData={userData} />
    </div>
  );
};

export default SearchPage;
