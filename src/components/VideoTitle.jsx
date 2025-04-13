import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview.slice(0, 200)}</p>
      <div className="flex gap-2">
        <button
          className="px-8 py-3 bg-white hover:bg-white/80 text-black rounded-lg text-2xl flex gap-2 cursor-pointer"
          type="button"
        >
          <img src="/public/icons/play.svg" alt="" />
          Play
        </button>
        <button
          className="px-6 py-3 bg-gray-500/40 text-white rounded-lg text-2xl flex gap-2 hover:bg-gray-500/30 cursor-pointer"
          type="button"
        >
          <img src="/public/icons/info.svg" alt="" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
