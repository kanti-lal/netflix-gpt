import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="main"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <form className="absolute p-12 bg-black/85 w-3/12 mx-auto my-36 right-0 left-0 rounded-md">
        <h1 className="text-3xl text-white mb-3 font-semibold text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="p-2 my-2 h-[56px] bg-[#161616b3]  text-white border border-[#808080b3] rounded-md w-full"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-2 my-2 h-[56px] bg-[#161616b3]  text-white border border-[#808080b3] rounded-md w-full"
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          className="p-2 my-2 h-[56px] bg-[#161616b3] text-white border border-[#808080b3] rounded-md  w-full"
        />
        <button className="px-6 py-2 rounded-md my-2 bg-red-600 text-white w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="rems"
              className="h-[18px] w-[18px] bg-[#ffffff80]"
            />
            <label
              htmlFor="remember"
              className="text-[#ffffff80] text-sm ml-[2px] leading-1"
            >
              Remember me
            </label>
          </div>
          <p className="text-sm ml-[2px] leading-1 text-[#ffffff80]">
            Need Help?
          </p>
        </div>
        <p
          className="text-[#ffffff80] text-sm  leading-1  mt-20 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? " : " Already registered?"}
          <span className="text-md text-white">
            {isSignInForm ? "Sign up now. " : " Sign in now."}
          </span>
        </p>
        <p className="text-[#ffffff80] text-sm  mt-5">
          This page is protected by Google reCAPTCHA to ensure you're not a bot{" "}
          <span className="text-md text-blue-800">Learn more</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
