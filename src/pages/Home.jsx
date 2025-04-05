import HeroImage from "../assets/HeroImage.jpg";
import { Streams } from "../pages";
import { useEffect } from "react";
import {StreamsScroll} from "../utilities/StreamScroll"

export const Home = ({ title }) => {
  useEffect(() => {
    document.title = `${title}`;
  });

  return (
    <section
      className="sm:min-h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="sm:min-h-[90vh] bg-black/30 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 sm:px-10 lg:px-30 ">
          <div className="my-10 px-2 sm:px-8 py-15 sm:py-10 flex flex-col items-center justify-center gap-6 xl:gap-8 bg-black/75 rounded-[30px]">
            <h3 className="text-white text-xl sm:text-3xl font-medium text-center">
              Welcome to &nbsp;
              <span className="text-[rgb(245,197,24)]">
                <i class="fa-solid fa-film"></i> movieSCAPE
              </span>
            </h3>
            <h1 className="text-[#00FFAB] text-2xl sm:text-4xl font-bold text-center">
              Your Ultimate Movie Destination
            </h1>
            <h3 className="text-[rgb(245,197,24)] border rounded-full px-8 py-2 text-center text-lg sm:text-4xl lg:text-5xl font-semibold">
              Movie Tailored to Your Mood
            </h3>
            <h4 className="text-white text-xl text-center">
              Movies &nbsp; &nbsp;| &nbsp; &nbsp; Found &nbsp; &nbsp; | &nbsp;
              &nbsp; Fast
            </h4>
            <span className="text-[rgb(245,197,24)] text-5xl xl;mt-10 animate-bounce">
              <i class="fa-solid fa-arrow-down"></i>
            </span>
            <button onClick={StreamsScroll} className="cursor-pointer text-2xl bg-[rgb(245,197,24)] text-[rgb(0,0,0)] font-semibold border rounded-full px-6 py-2">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <Streams />
    </section>
  );
};
