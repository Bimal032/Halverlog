import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdFeed } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import classes from "./ProfilePage.module.css"
export default function ProfilePage() {
    return (
        <>
            
            <div className='pb-5 ' style={{
                fontFamily: "Roboto", boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.25)", background: "rgba(215, 218, 221, 1)", boxShadow: "14px 19px 36px 8px rgba(0, 0, 0, 0.4)",

                boxShadow: "-4px -4px 19px 11px rgba(255, 255, 255, 1)"

            }}>

                {/* //Navbar section start */}
                <div className='flex justify-around items-center h-[5em] ' style={{
                    borderRadius: "0 0 19px 19px", background: "rgba(231, 231, 231, 1)", boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.25)"


                }}>
                    <div >
                        <img src="/images/f6d6d00bad5abaabd6d4e5bcd5dbf164.jpg" alt="" className=' w-[5em]' />
                    </div>
                    <div className='flex items-center bg-[#ECEEF0] rounded-[20px] px-3 py-1 w-[30%] ' style={{
                        background: "rgba(236, 238, 240, 1)",
                        boxShadow: "5px 4px 16px 0px rgba(0, 0, 0, 0.25) inset",
                        boxShadow: "-5px -6px 15px 0px rgba(255, 255, 255, 1) inset",


                    }}>
                        <IoIosSearch color="grey" size={20} />
                        <input type="text" placeholder='Search' className='outline-none px-3 ' style={{ background: "rgba(236, 238, 240, 1)" }} />
                    </div>
                    <div className='flex justify-around items-center p-4'>
                        <div className='flex justify-around items-center mx-2 p-1 bg-[#ECEEF0] rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)] ' style={{
                            background: "rgba(236, 238, 240, 1)"

                        }}>
                            <IoMdHome color="grey" size={20} />
                            <h1 className='mx-1 '>Home</h1>
                        </div>
                        <div className='mx-1 bg-[#ECEEF0] p-1 rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <BiSolidMessageRoundedDots color="grey" size={20} />
                        </div >
                        <div className='mx-1 bg-[#ECEEF0] p-1 rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <IoNotificationsSharp color="grey" size={20} />
                        </div>
                        <div className='mx-1 bg-[#ECEEF0] p-1 rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <IoIosPeople color="grey" size={20} />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex justify-around items-center mx-1 p-1 bg--[#ECEEF0] rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <FaUserAlt color="grey" size={16} />
                        </div>
                        <h1 className='mx-1'>User Name</h1>
                    </div>

                </div>
                {/* Navbar section end */}

                {/* main section start */}
                <div className={`${classes.main}`} >

                    {/* left section start */}
                    <div className='left'>

                        {/* left upper box */}
                        <div className=' h-[60vh] text-center px-2 pt-[.05em] shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)] mb-4' style={{
                            background: "rgba(236, 238, 240, 1)"

                        }}>
                            <div className=' h-[25%] bg-[#D9D9D9]  shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset]'></div>
                            <div className={`h-[6em] w-[6em] bg-black ${classes.circle}`}></div>
                            <h1 className='relative bottom-11'>Biswajit Panda</h1>
                            <p className='relative bottom-11'>@username</p>
                            <div className='flex justify-around font-normal relative bottom-11'>
                                <div>
                                    <p className=' bg-[#ECEEF0] px-1 rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>POST</p>
                                    <p className='my-2'>00</p>
                                </div>
                                <div>
                                    <p className=' bg-[#ECEEF0] px-1  rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>FOLLOWERS</p>
                                    <p className='my-2'>00</p>
                                </div>
                                <div>
                                    <p className=' bg-[#ECEEF0] px-1  rounded-lg shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>FOLLOWING</p>
                                    <p className='my-2'>00</p>
                                </div>

                            </div>
                            <div className='w-[70%] relative bottom-11 mx-auto p-2 bg-[#52B6E1] mb-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]' style={{ borderRadius: "30px" }}>MY PROFILE</div>
                        </div>

                        {/* left upper  box end */}

                        {/* left lower box start */}
                        <div className=' h-[60vh] py-5 px-7 font-semibold shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]' style={{
                            background: "rgba(236, 238, 240, 1)"
                        }}>
                            <h1 className='my-5'>Shortcuts</h1>
                            <div className='flex items-center p-3 bg-[#D9D9D9] w-[60%] my-5 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                <MdFeed size={25} />
                                <h1 className='mx-2'>Feeds</h1>
                            </div>
                            <div className='flex items-center p-3 bg-[#D9D9D9] w-[60%] my-5 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                <IoIosPeople size={25} />
                                <h1 className='mx-2'>Groups</h1>
                            </div>
                            <div className='flex items-center p-3 bg-[#D9D9D9] w-[60%] my-5 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                <PiVideoFill size={25} />
                                <h1 className='mx-2'>Video</h1>
                            </div>
                            <div className='flex items-center p-3 bg-[#D9D9D9] w-[60%] my-5 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                <FaBookmark size={25} />
                                <h1 className='mx-2'>Saved</h1>
                            </div>

                        </div>
                        {/* left lower box end */}
                    </div>
                    {/* left side end */}

                    {/* center side start */}
                    <div className='center mx-3 '>

                        {/* center upper side start */}
                        <div className=' h-[24vh] shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)] mb-4'>
                            <div className='flex justify-around items-center'>
                                <div className='bg-black h-[3em] w-[3em]' style={{ borderRadius: "50%" }}></div>
                                <div className='flex justify-center items-center w-[80%] bg-[#D9D9D9] py-2 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset]'>
                                    <input type="text" placeholder='Share something...' className='bg-[#D9D9D9] mx-4 w-[80%] outline-none ' />
                                    <FaSmile size={20} />
                                </div>
                            </div>
                            <div className='flex justify-center ' style={{ fontSize: ".8em", marginBlock: "1.5em" }}>
                                <div className='flex items-center justify-center bg-[##E5E8EA] mx-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                    <img src="/images/img1.png" alt="" style={{ height: "2em" }} />
                                    <h1>image</h1>
                                </div>
                                <div className='flex items-center justify-center bg-[##E5E8EA] mx-3 px-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                    <img src="/images/img2.png" alt="" style={{ height: "2em" }} />
                                    <h1>videos</h1>
                                </div>
                                <div className='flex items-center justify-center bg-[##E5E8EA] mx-3 px-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                                    <img src="/images/img3.png" alt="" style={{ height: "2em" }} />
                                    <h1>news</h1>
                                </div>
                                <div className='flex items-center justify-center bg-[##E5E8EA]  mx-3 px-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>

                                    <h1>post</h1>
                                </div>

                            </div>
                        </div>
                        {/* center upper side end */}

                        {/* center lower side start */}

                        <div className='bg-[#ECEEF0] h-[96vh] px-4 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center  relative w-[100%] pt-4' style={{ fontSize: ".8em" }}>
                                    <div className='w-[4em] h-[4em] bg-black' style={{ borderRadius: "50%" }}></div>
                                    <div className='mx-3 '>
                                        <h1 className='bg-gray-300 w-[8em] px-2' style={{ borderRadius: "20px", fontSize: "1.3em" }} >dsda</h1>
                                        <p className='bg-gray-300 w-[8em] px-2' style={{ borderRadius: "20px" }}>casdas</p>
                                    </div>


                                </div>
                                {/* style={{ left: "24em", top: "-1em" }} */}
                                <div className=''  >
                                    <BsThreeDotsVertical size={20} />
                                </div>
                            </div>

                            <div className='bg-[#959595] w-[100%] h-[73%]'></div>
                            <div className='flex text-3xl w-[40%] justify-around'>
                                <FaRegHeart />
                                <AiOutlineMessage />
                                <PiShareFat />
                            </div>


                        </div>
                        {/* center lower side end */}
                    </div>
                    {/* center end */}

                    {/* right side start */}

                    <div className='right'>

                        {/* right upper box start */}
                        <div className='bg-[#ECEEF0] h-[80vh] px-4 p-2 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)] mb-4'>
                            <div className='flex justify-between '>
                                <h1 className='font-semibold'>Friends</h1>
                                <p className="hover:underline text-blue-700">See all</p>
                            </div>
                            <div className='overflow-auto h-[90%]'>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='h-[4em] w-[4em] bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                    <div className='ml-2'>
                                        <h1 className='font-semibold'>Suman Das</h1>
                                        <p style={{ fontSize: ".8em" }}>following</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* right upper box end */}
                        {/* right lower box start */}

                        <div className='bg-[#ECEEF0] h-[40vh] px-4 py-3 shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]'>
                            <div className='flex justify-between'>
                                <h1 className='font-semibold'>Suggesti ons</h1>
                                <p className='hover:underline text-blue-700'>See all</p>
                            </div>
                            <div className=' overflow-auto h-[80%]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='h-[4em] w-[4em] mr-2 bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                        <div className=''>
                                            <h1 className='font-semibold'>Suman Das</h1>
                                            <p style={{ fontSize: ".8em" }}>following</p>
                                        </div>

                                    </div>
                                    <div>
                                        <IoMdAddCircle size={30} />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='h-[4em] w-[4em] mr-2 bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                        <div className=''>
                                            <h1 className='font-semibold'>Suman Das</h1>
                                            <p style={{ fontSize: ".8em" }}>following</p>
                                        </div>

                                    </div>
                                    <div>
                                        <IoMdAddCircle size={30} />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='h-[4em] w-[4em] mr-2 bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                        <div className=''>
                                            <h1 className='font-semibold'>Suman Das</h1>
                                            <p style={{ fontSize: ".8em" }}>following</p>
                                        </div>

                                    </div>
                                    <div>
                                        <IoMdAddCircle size={30} />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between '>
                                    <div className='flex items-center'>
                                        <div className='h-[4em] w-[4em] mr-2 bg-gray-400' style={{ borderRadius: "50%" }}></div>
                                        <div className=''>
                                            <h1 className='font-semibold'>Suman Das</h1>
                                            <p style={{ fontSize: ".8em" }}>following</p>
                                        </div>

                                    </div>
                                    <div>
                                        <IoMdAddCircle size={30} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* right lower box end */}
                    </div>
                    {/* right side end */}

                </div>
                {/* main section end */}
            </div>
            {/* parent div end */}

        </>
    )
}
