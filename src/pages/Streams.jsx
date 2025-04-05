
import React from "react";
import { useStreams } from "../context/StreamsContext";
import { StreamCard } from "../components/StreamCard";

export const Streams = () => {
  const streams = useStreams(); 
  return (
    <section id="streams" className="bg-[rgb(0,0,0)] text-[rgb(245,197,24)] py-12 sm:mb-8">
      <div className="p-6 container mx-auto flex flex-col justify-center items-center">
        <h2 className="custom-underline text-center text-2xl uppercase font-semibold">
          Streams
        </h2>
        <p className="text-white text-center text-lg leading-6 mt-10 w-full sm:w-[60%]">
          "Dive into your favorite genres. Whether you're in the mood for
          action, romance, thriller, or something else, we’ve got you covered."
        </p>
        <div className="w-[80%] sm:w-full lg:w-[85%] max-w-[1300px] flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          {streams.map((stream, index) => (
            <StreamCard
              key={index}
              image={stream.image}
              title={stream.title}
              description={stream.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

