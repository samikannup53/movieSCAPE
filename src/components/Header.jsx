import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTop } from "../utilities/ScrollTop";

export const Header = () => {
  const [isStreamOpen, setIsStreamOpen] = useState(false); // To Store Stream Menu Open/Close Status
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To Store Side Menu Open/Close Status
  const [queryTerm, setQueryTerm] = useState(""); // To Store User Search Input
  const [isSearchOpen, setIsSearchOpen] = useState(false); // To Store Search Menu Open/Close Status

  const navigate = useNavigate();

  // Toggle Stream Dropdown Menu
  const toggleStream = () => setIsStreamOpen(!isStreamOpen);

  // Toggle Side Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Side Menu
  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  // Handle Search Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryTerm.trim()) {
      navigate(`/search/${queryTerm}`);
      ScrollTop();
      setQueryTerm("");
    }
  };

  return (
    // Header Section
    <section className="z-50 bg-[rgb(0,0,0)] text-[rgb(245,197,24)] sticky top-0 overflow-x-hidden lg:overflow-x-visible">
      {/* Section Container */}
      {/* Nav Bar */}
      <nav className="container mx-auto flex justify-between items-center p-6 ">
        {/* Logo */}
        <div className="cursor-default flex items-center justify-center gap-3 text-[1.5rem] sm:text-[1.75rem] font-semibold">
          <i className="fa-solid fa-film"></i>
          <h1>movieSCAPE</h1>
        </div>
        {/* Search & Stream Options Container */}
        <div className="flex items-center lg:mr-35">
          {/* Search Option */}
          <form
            onSubmit={handleSubmit}
            // onClick={ScrollTop}
            className="hidden sm:flex items-center border-[1.75px] rounded-full px-4 py-1 lg:text-[18px]"
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
              type="button"
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
                  onClick={() => {
                    toggleStream(), ScrollTop();
                  }}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Movies
                </Link>
                <Link
                  to="streams/series"
                  onClick={() => {
                    toggleStream(), ScrollTop();
                  }}
                  className="px-3 py-1 font-medium rounded-full text-center hover:text-black hover:bg-yellow-300"
                >
                  Series
                </Link>
                <Link
                  to="streams/episodes"
                  onClick={() => {
                    toggleStream(), ScrollTop();
                  }}
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
          <Link onClick={ScrollTop} to="/" className="hidden sm:block">
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link
            onClick={ScrollTop}
            to="/favourites"
            className="hidden sm:block"
          >
            <i className="fa-solid fa-heart"></i>
          </Link>
          <span onClick={toggleSearchBar} className="sm:hidden">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span onClick={toggleMenu} className="lg:hidden">
            <i className="fa-solid fa-bars "></i>
          </span>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        className={`z-50 lg:hidden min-h-[100vh]  w-[75%] sm:w-[250px]  fixed right-0 top-0 bg-[rgb(0,0,0)] duration-1000 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3 items-end text-[rgb(245,197,24)] px-10 text-lg mt-20">
          <button
            onClick={toggleMenu}
            className="px-2  border rounded-full  fixed top-8 right-10"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <Link
            to="/"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            Home
          </Link>
          <Link
            to="streams/movies"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            Movies
          </Link>
          <Link
            to="streams/series"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            Series
          </Link>
          <Link
            to="streams/episodes"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            Episodes
          </Link>
          <Link
            to="/favourites"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            Favourites
          </Link>
          <Link
            to="/about"
            onClick={() => {
              toggleMenu(), ScrollTop();
            }}
          >
            About Us
          </Link>
        </div>
      </div>
      {/* Mobile View Search Bar */}
      <div
        className={`h-20 px-2 flex items-center justify-center gap-4 sm:hidden  w-full fixed   right-0 top-0 bg-[rgb(0,0,0)] duration-1000 ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="px-2 py-1 rounded-full border-[1.75px]"
        >
          <input
            type="search"
            placeholder="Search Movies ..."
            className="outline-none w-55"
            value={queryTerm}
            onChange={(e) => setQueryTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <button
          onClick={toggleSearchBar}
          className="px-2 text-xl  border rounded-full"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </section>
  );
};
