import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)] sticky top-0">
      <nav className="container mx-auto flex justify-between items-cneter p-6    ">
        <div className="flex items-center justify-center gap-3 text-[1.75rem] font-semibold ">
          <i className="fa-solid fa-film"></i>
          <h1 className="">movieSCAPE</h1>
        </div>
        <div className="flex items-center">
          <div className="border-[1.75px] rounded-full px-4 py-1 text-[18px] ">
            <input
              type="text"
              placeholder="Search Movies ..."
              className="outline-none"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="border-[1.75px] rounded-full py-1 w-25 ml-4"
            >
              Streams
              <i className="fa-solid fa-caret-down text-lg ml-2"></i>
            </button>
            {isMenuOpen && (
              <div className="bg-[rgb(0,0,0)] absolute p-4 ml-1 rounded-xl flex flex-col">
                <Link
                  to="streams/movies"
                  onClick={toggleMenu}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Movies
                </Link>
                <Link
                  to="streams/series"
                  onClick={toggleMenu}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Series
                </Link>
                <Link
                  to="streams/episodes"
                  onClick={toggleMenu}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Episodes
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </section>
  );
};
