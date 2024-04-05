import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";

const Room = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const users = useSelector((state) => state.user.users);
  const user = users.filter((data) => data.accountId == id);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/message");
  };
  const identification = userData.accountId + user[0].accountId;
  //   console.log(identification);
  //   console.log(user[0].imageUrl);
  return (
    <>
      <div className="w-full h-16 bg-[rgba(236,238,240,1)] rounded-lg p-4 mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)] justify-start items-center flex gap-4">
        <div onClick={handleBack} className="cursor-pointer">
          <IoMdArrowRoundBack size={25} />
        </div>
        <div className="rounded-full flow-root w-10 h-10 bg-black">
          <img
            src={user ? user[0].imageUrl : "/images/avatar.jpeg"}
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="font-semibold ml-2 mt-1 text-lg">{user[0].name}</div>
      </div>
      <div className="w-full h-[87%] bg-[rgba(236,238,240,1)] rounded-lg p-4 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)] justify-center flex-col">
        <div className=" flex justify-center gap-2 ">
          <div className="flex w-4/5 h-12 rounded-3xl justify-center items-center text-black bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset]">
            <input
              type="text"
              placeholder="share something..."
              className="w-[85%] outline-none bg-inherit text-black active"
            />
          </div>
          <div className="flex rounded-full h-12 w-12 bg-blue-600 justify-center items-center">
            <IoSend size={25} />
          </div>
        </div>
        <div className="flex-col mt-2 overflow-y-auto p-4 pl-10 flex-1">
          No Messages yet
        </div>
      </div>
    </>
  );
};

export default Room;
