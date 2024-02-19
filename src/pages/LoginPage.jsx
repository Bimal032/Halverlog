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
          className={`flex flex-1 flex-col absolute content-center items-center w-1/4 h-[70%] backdrop-blur mt-12 ${Style.form}`}
        >
          <h3 className="text-2xl text-center text-white font-semibold mt-14">
            Welcome
          </h3>
          <input
            type="email"
            placeholder="Email"
            className={`block w-3/4 h-12 p-2 pl-5 mt-12 text-white ${Style.input}`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`block w-3/4 h-12 p-2 pl-5 mt-6 text-white ${Style.input}`}
          />
          <p className="text-white mt-5 text-sm">
            <a href="#">Forget password?</a>
          </p>
          <button className={`w-2/6 h-10 mt-4 text-white ${Style.button}`}>
            Login
          </button>
          <p className="text-white mt-4 text-xs">OR LOGIN WITH</p>
          <hr className="w-5/6 mt-4" />
          <div className="flex w-1/2 justify-evenly mt-4">
            <a href="">
              <span className={`flex w-8 h-8 p-2  bg-blue-600 ${Style.social}`}>
                <img src="/icons/fb.png" alt="fb" className="w-full" />
              </span>
            </a>
            <a href="">
              <span className={`flex w-8 h-8 p-2  bg-red-700 ${Style.social}`}>
                <img src="/icons/google.png" alt="google" />
              </span>
            </a>
            <a href="">
              <span className={`flex w-8 h-8 p-2 bg-blue-600 ${Style.social}`}>
                <img src="/icons/twitter.png" alt="twitter" />
              </span>
            </a>
          </div>
          <p className="text-white text-xs mt-3">
            don't have an account{" "}
            <a href="" className="text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
