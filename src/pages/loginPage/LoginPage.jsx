import Style from "./login.module.css";

const LoginPage = () => {
  return (
    <div
      className={`flex justify-center items-center h-screen bg-[url('/img/background.jpeg')] min-h-[640px] min-w-[360px]`}
    >
      <div
        className={`flex w-4/5 h-5/6 rounded-3xl justify-center ${Style.login}`}
      >
        <img
          src="/img/login.jpeg"
          alt="bg"
          className=" w-full rounded-3xl brightness-75"
        />
        <div
          className={`flex flex-1 flex-col absolute content-center items-center w-1/4 h-[70%] backdrop-blur mt-12  ${Style.form}`}
        >
          <div className="w-48 h-24 flex justify-center items-center mt-4 ml-[-10px]">
            <img
              src="/icons/halverlog.png"
              alt="logo"
              className=" relative z-[-1] brightness-110"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className={`block w-3/4 h-12 p-2 pl-5 mt-5 ${Style.input}`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`block w-3/4 h-12 p-2 pl-5 mt-6 ${Style.input}`}
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
            don't have an account ?
            <a href="./register" className="text-blue-500 ml-1">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
