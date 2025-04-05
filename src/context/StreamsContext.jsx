import React, { createContext, useContext } from "react";
import MovieImage from "../assets/MovieImage.png";
import SeriesImage from "../assets/SeriesImage.png";
import EpisodeImage from "../assets/EpisodeImage.png";

const StreamsContext = createContext();

export const StreamsProvider = ({ children }) => {
  const streams = [
    {
      image: MovieImage,
      title: "Movies",
      description:
        "Discover an endless world of cinematic masterpieces. From timeless classics to the latest blockbusters, find your perfect film here.",
    },
    {
      image: SeriesImage,
      title: "Series",
      description:
        "Get hooked on the most exciting series! Dive into captivating stories and binge-watch your favorites all in one place.",
    },
    {
      image: EpisodeImage,
      title: "Episodes",
      description:
        "Catch the latest episodes of your favorite shows. Stay up to date with new releases and never miss an episode again.",
    },
  ];

  return (
    <StreamsContext.Provider value={streams}>
      {children}
    </StreamsContext.Provider>
  );
};

export const useStreams = () => {
  return useContext(StreamsContext);
};
