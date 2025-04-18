import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-64 pl-2 md:pl-12 relative z-20">
          <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
