import React, { useEffect } from "react";
import Bottombar from "../../components/bottombar/Bottombar";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rightbar from "../../components/rightbar/Rightbar";
import Style from "../../components/ProfilePage/ProfilePage.module.css";
function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus, navigate]);
  return (
    <div className="w-full bg-[rgba(236,238,240,1)] min-w-[470px] min-h-[100lvh]">
      <Navbar userData={userData} />
      <div className="flex w-full relative h-full mt-[5rem]">
        <Leftbar userData={userData} />
        <div
          className={`p-2 bg-[rgba(236,238,240,1)] h-full w-[50%] max-[900px]:w-[65%] border-black border-2 flex flex-col z-[1] ${Style.add}`}
        >
          {authStatus
            ? "Home User is logged in"
            : "Welcome to Halverlog Login to see posts"}
        </div>
        <Rightbar userData={userData} />
      </div>
      <Bottombar userData={userData} />
    </div>
  );
}

export default Home;
