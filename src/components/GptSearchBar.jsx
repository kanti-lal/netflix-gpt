import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-24 flex justify-center">
      <form className=" bg-black grid grid-cols-12 w-1/2 rounded">
        <input
          type="text"
          name=""
          id=""
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          className="p-4 m-4 border-amber-100 col-span-9 bg-white rounded "
        />
        <button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3 cursor-pointer">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
