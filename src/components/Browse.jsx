import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
          Main view container 
              - Video background
              - video title 
          
          Secondary container
            - MoviesList * n
            - cards * n
      */}
    </>
  );
};

export default Browse;
