import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  // Search movies in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    console.log("searchText:", searchText.current.value);
    // make api call to GPT API and get movies result

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-4o-mini-2024-07-18",
    //   messages: [
    //     {
    //       role: "user",
    //       content: gptQuery,
    //       model: "GPT-4o mini",
    //     },
    //   ],
    // });
    // if (!gptResults.choices) {
    //   // TODO write error handling
    // }
    // console.log(
    //   "🚀completion:",
    //   gptResults?.choices,
    //   gptResults,
    //   gptResults?.choices?.[0]?.message?.content
    // );
    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    // const gptMovieList = gptResults?.choices?.[0]?.message?.content.split(",");

    const gptMovieList = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    // For each movie I will
    const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdbResults:", tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovieList, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-24 flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 w-full mx-2 md:w-1/2 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          name=""
          id=""
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          className="p-4 m-4 border-amber-100 col-span-9 bg-white rounded "
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
