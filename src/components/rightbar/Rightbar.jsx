import React from "react";

const Rightbar = () => {
  return (
    <div className="w-[25%] bg-[rgba(236,238,240,1)] max-[900px]:hidden py-2 px-6">
      <div className="flex flex-col mt-4 bg-white rounded-3xl p-4 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
        <div className="flex justify-between p-2">
          <span className="font-bold text-lg">Friends</span>
          <span className="text sm">see all</span>
        </div>
        <div className="flex flex-col px-4 mt-2 gap-5 max-h-[29rem] overflow-y-auto">
          {/* friend list start*/}
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-md">Bimal Kishor Mondal</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
          {/* friend list end */}
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-3xl max-h-[19rem] p-4 h-2/6 mt-6 shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
        <div className="flex justify-between p-2">
          <span className="font-bold text-lg">Suggestions</span>
          <span className="text-sm">see all</span>
        </div>
        <div className="flex flex-col px-4 mt-2 gap-6 overflow-y-auto">
          {/* Suggestion list start*/}
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Bimal Kishor Mondal</span>
              <span className="text-xs">Suggestions</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Bimal Kishor Mondal</span>
              <span className="text-xs">Suggestions</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <button className="font-semibold text-sm">
                Bimal Kishor Mondal
              </button>
              <span className="text-xs">Suggestions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
