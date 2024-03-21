import React from "react";

const Temp = ({ user }) => {
  return (
    <div className="w-full h-16 bg-[rgba(236,238,240,1)] rounded-lg p-4 mt-1 flex border-[1px] border-gray-400 items-center">
      <div className="rounded-full flow-root w-12 h-12 bg-black">
        <img
          src={user ? user.imageUrl : "/images/avatar.jpeg"}
          alt="avatar"
          className="rounded-full w-12 h-12"
        />
      </div>
      <div className="font-semibold ml-2 mt-1 text-md">{user.name}</div>
    </div>
  );
};

export default Temp;
