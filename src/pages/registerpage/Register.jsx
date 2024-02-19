import Style from "./Register.module.css";
const Register = () => {
  return (
    <div
      className={`flex justify-center items-center h-screen ${Style["background"]}`}
    >
      <div className={`flex w-4/5 h-5/6 rounded-3xl ${Style.login}`}>
        <img
          src="/img/register.png"
          alt="bg"
          className="h-auto w-full rounded-3xl brightness-75"
        />
        <div
          className={`flex flex-1 flex-col absolute content-center items-center w-1/4 h-[70%] backdrop-blur mt-12 ${Style.form}`}
        >
          <h3 className="text-2xl text-center text-white font-semibold mt-12">
            Register
          </h3>
          <input
            type="username"
            placeholder="Username"
            className={`block w-3/4 h-12 p-2 pl-5 mt-12 text-white ${Style.input}`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`block w-3/4 h-12 p-2 pl-5 mt-5 text-white ${Style.input}`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`block w-3/4 h-12 p-2 pl-5 mt-5 text-white ${Style.input}`}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={`block w-3/4 h-12 p-2 pl-5 mt-5 text-white ${Style.input}`}
          />
          <button className={`w-3/6 h-10 mt-6 text-white rounded-[52px] bg-[rgba(255, 89, 89, 1)]`}>
            Register
          </button>
          <p className="text-white text-xs mt-3">
            Already have an account{" "}
            <a href="" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
