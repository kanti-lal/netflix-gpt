import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("🚀 ~ Header ~ user:", user);
  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        console.log("signout");
        navigate("/");
      })
      .catch((error) => {
        navigate("/error", { state: error });
      });
  };
  return (
    <div className="absolute px-8 py-2 z-30 w-full flex justify-between">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="p-2 flex">
          <img
            src={
              user.photoURL ||
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            }
            alt=""
            className="h-10 w-10 rounded"
          />
          <button className="font-semibold" onClick={handleButtonClick}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
