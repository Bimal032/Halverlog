import React, { useEffect, useRef, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";

function CreatePost({ closeModal }) {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //   };
  // }, []);
  const [imgUrl, setImgUrl] = useState("/icons/gallery-add.svg")
  const createPostImg = useRef(null);
  const handleClick = () => {
    createPostImg.current.click();
  }
  const handleChange = (event) => {
    const coverImg = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setImgUrl(e.target.result);
    reader.readAsDataURL(coverImg);

  }
  const [postStatusVal, setPostStatusVal] = useState("public")
  const getPostStatus =(e)=>{
    setPostStatusVal(e.target.value)
  }
  // const postStatus = useRef(null);

  const textArea = useRef(null);
  const getData = ()=>{
    console.log("post status", postStatusVal)// get value from post status
    console.log("text area" , textArea.current.value)// get value from text area
    // to get img url use imgUrl.
    // console.log("text area", textArea.current);

  }
  return (
    
<div className="fixed left-0 right-0 bottom-0 top-0 bg-[rgba(189,189,189,0.9)] min-w-max overflow-y-auto">
      <div className="fixed min-w-[500px] max-w-lg min-h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-[5px_5px_27px_0px_rgba(0,0,0,0.31)] mt-8">
        <div className="flex justify-center my-1">
          <h2 className="text-black flex-1 text-center text-lg font-semibold">
            CreatePost
          </h2>
          <button className="" onClick={closeModal}>
            <CiCircleRemove size={25} className="active " />
          </button>
        </div>
        <hr className="w-full bg-gray-200 mb-3" />
        <div className="flex flex-col w-full p-3">
          <div className="flex w-full">
            <div className="rounded-full border-black border-[1px] flow-root w-12 h-12 bg-black">
              <img
                src="/images/avatar.jpeg"
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black text-md ml-2">
                Bimal Kishor Mondal
              </span>
              <select
                id="post-status"
                
                className="text-sm w-20 bg-gray-300 mx-2"
                value={postStatusVal}
                onChange={getPostStatus}
              >
                <option value="public">
                  Public
                </option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
          <div id="caption" className="w-full py-2 text-gray-400">
            <textarea
              type="text"
              ref={textArea}
              className="bg-inherit w-full h-full outline-none text-black"
              placeholder="What's on your mind,Bimal Kishor?"
              
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  getData();
                }
              }}
            />
          </div>
          <div className=" bg-[rgba(236,238,240,1)] w-full h-72 rounded-lg flex flex-col items-center justify-center shadow-[-5px_-5px_10px_0px_rgba(255,255,255,1),5px_5px_27px_0px_rgba(0,0,0,0.31)]">
          <button onClick={handleClick}>
          <input type="file"
              ref={createPostImg}
              accept="image/jpg, image/png"
              onChange={handleChange}
              className="hidden"
            />
            {
              (imgUrl && imgUrl!=="/icons/gallery-add.svg") ?
              <img
              src={imgUrl}
              alt="logo"
              className="object-contain"

            />:
            <div className="text-center">
              <img
              src={imgUrl}
              alt="logo"
              className="w-20 h-20 mx-auto"

            />
            <h2 className="text-lg font-semibold">Add photos/videos</h2>
            <span className="text-sm">or drag and drop</span>
            </div>
            
            }
            
          </button>
            



            
          </div>
          <button
            onClick={getData}
            className="w-full mt-4 h-10 items-center justify-center bg-[rgba(82,182,225,1)] py-3 rounded-lg text-sm shadow-[-3px_-2px_4px_0px_rgba(255,255,255,1),2px_4px_4px_0px_rgba(0,0,0,0.34)] hover:scale-105 duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    
    
  );
}

export default CreatePost;
