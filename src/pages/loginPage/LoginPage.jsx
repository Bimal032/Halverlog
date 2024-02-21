import { FaUserTie } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex flex-auto justify-center items-center h-full w-full bg-[#e4f0f7]">
      <div className="flex flex-col w-1/4 h-3/4 p-4 shrink justify-around items-center bg-[#ECEEF0] shadow-[-4px_-4px_19px_11px_rgba(255,255,255,1),14px_19px_36px_8px_rgba(0,0,0,0.6)] rounded-[10%] min-w-max min-h-[480px]">
        <div className="rounded-full w-28 h-28 p-3 flex shrink bg-[#ECEEF0] shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]">
          <img src="/icons/user.png" alt="logo" />
        </div>
        <div className="flex flex-col w-full items-center mt-6">
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl hover:scale-105  hover:border-sky-600  duration-500 ">
            <FaUserTie color="black" size={20} />
            <input
              type="username"
              placeholder="username"
              className="outline-none bg-inherit flex-1 mx-3"
            />
          </div>
          <div className="px-10 hidden">
            <p className="text-red-500">
              The email or username you entered isn't connected to an account
            </p>
          </div>
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 hover:scale-105 duration-500 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl mt-4">
            <BiSolidLock color="black" size={20} />
            <input
              type="password"
              placeholder="password"
              className="outline-none bg-inherit flex-1 mx-3"
            />
          </div>
          <div className="px-10 hidden">
            <p className="text-red-500">
              The password you have entered is incorrect
            </p>
          </div>
          <span className="text-xs text-gray-500 font-semibold mt-5">
            <a href="">forgotten password ?</a>
          </span>
          <button className="w-4/5 h-[45px] bg-[#4482BF] rounded-3xl text-white font-semibold mt-4 hover:scale-105 duration-500 shadow-[-5px_-4px_16px_0px_rgba(255,255,255,1),4px_5px_13px_0px_rgba(0,0,0,0.63)]">
            Login
          </button>
          <span className="text-xs text-gray-500 font-semibold mt-3">
            <a href="" className="text-sky-600 mr-1">
              Register{" "}
            </a>
            Or login with
          </span>
        </div>
        <div className="flex w-4/5 place-content-around">
          <div className="flex justify-center items-center bg-[#ECEEF0] hover:scale-110 duration-500 w-10 h-10 shadow-[-4px_-3px_4px_0px_rgba(255,255,255,1),3px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
            <a href="">
              <FaFacebookF size={20} />
            </a>
          </div>
          <div className="flex justify-center items-center bg-[#ECEEF0] hover:scale-110 duration-500 w-10 h-10 shadow-[-4px_-3px_4px_0px_rgba(255,255,255,1),3px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
            <a href="">
              <FaGoogle size={20} />
            </a>
          </div>
          <div className="flex justify-center items-center bg-[#ECEEF0] hover:scale-110 duration-500 w-10 h-10 shadow-[-4px_-3px_4px_0px_rgba(255,255,255,1),3px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
            <a href="">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
