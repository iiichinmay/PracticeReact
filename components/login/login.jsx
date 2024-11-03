import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-cover bg-center"
      style={{ backgroundImage: "url('/Sun.png')" }}
    >
      <div
        className="box backdrop-blur-md  p-8 border opacity-90 rounded-3xl "
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}
      >
        {/* Title */}
        <form action="">
          <h3 className="title text-3xl font-bold mb-4 text-center text-white">Login</h3>

          {/* UserName Password */}
          <div className="input flex flex-col gap-5">
            <div className="relative flex items-center">
              <input
                className="p-3 pl-5 pr-10 font-bold rounded-3xl w-full"
                type="text"
                placeholder="Username"
                required
              />
              <IoPerson className="absolute right-5 text-black-500 text-lg" />
            </div>

            <div className="relative flex items-center">
              <input
                className="p-3 pl-5 pr-10 font-bold rounded-3xl w-full"
                type="password"
                placeholder="Password"
                required
              />
              <FaLock className="absolute right-5 text-black-500" />
            </div>
          </div>

          {/* Remember Forget */}
          <div className="remember-forget p-5 space-x-4 font-semibold text-center ">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="text-yellow-500 hover:underline ">
              Forget Password?
            </a>
          </div>

          {/* login button */}
          <div className="flex justify-center">
            <button
              className="border border-black bg-white rounded-3xl text-lg font-bold px-4 py-1.5"
              type="submit"
            >
              Login
            </button>
          </div>

          {/* signup */}
          <div className="registerlink ">
            <p className="mt-2 text-center font-semibold flex justify-evenly  ">
              Don't Have Account?
              <a href="#" className="text-yellow-500 hover:underline border border-black rounded-3xl px-3 ">
                SignUp
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
