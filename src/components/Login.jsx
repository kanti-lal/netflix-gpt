import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign In / signup
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/44689191?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 user signIn:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="main"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/85 w-3/12 mx-auto my-36 right-0 left-0 rounded-md"
      >
        <h1 className="text-3xl text-white mb-3 font-semibold text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            name="Name"
            placeholder="Full Name"
            className="p-2 my-2 h-[56px] bg-[#161616b3]  text-white border border-[#808080b3] rounded-md w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-2 my-2 h-[56px] bg-[#161616b3]  text-white border border-[#808080b3] rounded-md w-full"
        />

        <input
          ref={password}
          type="text"
          name="password"
          placeholder="Password"
          className="p-2 my-2 h-[56px] bg-[#161616b3] text-white border border-[#808080b3] rounded-md  w-full"
        />
        <p className="text-red-500 text-sm">{errorMessage}</p>
        <button
          className="px-6 py-2 rounded-md my-2 bg-red-600 text-white w-full"
          onClick={handleButtonClick}
          // type="submit"
        >
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
