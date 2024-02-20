import Style from "./login.module.css";

const LoginPage = () => {
  return (
    <div
      className={`flex justify-center items-center h-screen bg-[url('/img/background.jpeg')]`}
    >
      <div
        className={`flex w-4/5 h-5/6 rounded-3xl justify-center shadow-[0px_19px_11px_10px_rgba(0,0,0,0.35)] min-h-[550px]`}
      >
        <img
          src="/img/login.jpeg"
          alt="bg"
          className="h-auto w-full rounded-3xl brightness-75"
        />
        <div
          className={`flex flex-1 flex-col absolute content-center items-center w-1/4 h-[70%] backdrop-blur mt-12   bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)),
          linear-gradient(0deg, rgba(217, 217, 217, 0.05), rgba(217, 217, 217, 0.05))'] 
        border-[1px] border-[rgba(0, 0, 0, 0.01)]
        box-shadow-['-1px -1px 9px 2px rgba(255, 255, 255, 0.18)']
        min-w-[280px]
        min-h-[520px]
        rounded-[25px]`}
        >
          <div className="w-40 h-24 flex justify-center items-center mt-6">
            
            <img
              src="/icons/halverlog.png"
              alt="logo"
              className="absolute h-[22%] ml-[-10px] z-[-1]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className={`block w-3/4 h-12 p-2 pl-5 mt-3 text-black bg-[rgba(217, 217, 217, 0.2)]
            shadow-[-2px -1px 3px 1px rgba(255, 255, 255, 0.34)] rounded-[32px]  `}
          />
          <input
            type="password"
            placeholder="Password"
            className={`block w-3/4 h-12 p-2 pl-5 mt-6 text-black bg-[rgba(217, 217, 217, 0.2)]
            shadow-[-2px -1px 3px 1px rgba(255, 255, 255, 0.34)] rounded-[32px]`}
          />
          <p className="text-white mt-5 text-sm">
            <a href="#">Forget password?</a>
          </p>

          <button
            className={`w-2/6 h-10 mt-4 text-white rounded-[52px] bg-[#FF5959]`}
          >
            Login
          </button>
          <p className="text-white mt-4 text-xs">OR LOGIN WITH</p>
          <hr className="w-5/6 mt-4" />
          <div className="flex w-1/2 justify-evenly mt-4">
            <a href="">
              <span className={`flex w-8 h-8 p-2  bg-blue-600 rounded-[50%]`}>
                <img src="/icons/fb.png" alt="fb" className="w-full" />
              </span>
            </a>
            <a href="">
              <span className={`flex w-8 h-8 p-2  bg-red-700 rounded-[50%]`}>
                <img src="/icons/google.png" alt="google" />
              </span>
            </a>
            <a href="">
              <span className={`flex w-8 h-8 p-2 bg-blue-600 rounded-[50%]`}>
                <img src="/icons/twitter.png" alt="twitter" />
              </span>
            </a>
          </div>
          <p className="text-white text-xs mt-3">
            don't have an account <a className="text-blue-500">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
