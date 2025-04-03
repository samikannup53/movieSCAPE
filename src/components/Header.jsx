import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isStreamOpen, setIsStreamOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleStream = () => {
    setIsStreamOpen(!isStreamOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [queryTerm, setQueryTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryTerm.trim()) {
      navigate(`/search/${queryTerm}`);
      setQueryTerm("");
    }
  };

  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)] sticky top-0">
      <nav className="container mx-auto flex justify-between items-cneter p-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 text-[1.5rem] sm:text-[1.75rem] font-semibold ">
          <i className="fa-solid fa-film"></i>
          <h1 className="">movieSCAPE</h1>
        </div>
        <div className="flex items-center">
          {/* Search Option */}
          <form
            onSubmit={handleSubmit}
            className="hidden sm:flex items-center border-[1.75px] rounded-full px-4 py-1 text-[18px]"
          >
            <input
              type="search"
              placeholder="Search Movies ..."
              className="outline-none"
              value={queryTerm}
              onChange={(e) => setQueryTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          {/* Streams Option */}
          <div className="relative hidden lg:block">
            <button
              type="submit"
              onClick={toggleStream}
              className="border-[1.75px] rounded-full py-1 px-3 ml-4"
            >
              Streams
              <i className="fa-solid fa-caret-down text-lg ml-2"></i>
            </button>
            {isStreamOpen && (
              <div className="bg-[rgb(0,0,0)] absolute p-4 ml-2 rounded-xl flex flex-col">
                <Link
                  to="streams/movies"
                  onClick={toggleStream}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Movies
                </Link>
                <Link
                  to="streams/series"
                  onClick={toggleStream}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Series
                </Link>
                <Link
                  to="streams/episodes"
                  onClick={toggleStream}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Episodes
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Home, Favourites, Menu Option */}
        <div className="flex items-center gap-3 sm:gap-4 text-[1.25rem] sm:text-2xl">
          <Link to="/" className="hidden sm:block">
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link to="/favourites" className="hidden sm:block">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <span className="sm:hidden">
            <i className="fa-solid fa-magnifying-glass "></i>
          </span>
          <span onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        <div
          className={`h-screen w-[75%] sm:w-[250px] fixed right-0 top-20 bg-[rgb(0,0,0)] transition-transform duration-500 ease-in-out transform 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-3 items-end text-[rgb(245,197,24)] pb-4 px-8 text-xl sm:text-lg sm:mr-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
            >
              Home
            </Link>
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
            <Link
              to="/favourites"
              onClick={toggleMenu}
              className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
            >
              Favourites
            </Link>
            <Link
              onClick={toggleMenu}
              className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};
