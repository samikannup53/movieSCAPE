import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components";
import { OrbitProgress } from "react-loading-indicators";
import { ScrollTop } from "../utilities/ScrollTop";

export const SearchPage = (stream) => {
  const { queryTerm } = useParams();
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!queryTerm) return;

      setIsLoading(true);
      setError(null);

      const url = `https://www.omdbapi.com/?s=${queryTerm}&apikey=${key}&page=${currentPage}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setSearch(data.Search);
          setTotalResults(parseInt(data.totalResults));
        } else {
          setSearch([]);
          setTotalResults(0);
        }
      } catch (err) {
        setError("An error occurred while fetching the movies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [queryTerm, currentPage]);

  const totalPages = Math.ceil(totalResults / 10);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [stream]);

  return (
    <section className="min-h-[60vh] p-6 bg-black text-yellow-500">
      <div className="container mx-auto px-6">
        <div className="bg-[rgb(0,0,0)] sticky z-40 top-[84px] flex justify-between items-center border-b border-[rgb(245,197,24)] mb-4 ">
          <h1 className=" text-xl sm:text-2xl mb-2  font-medium   text-white flex items-center">
            <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
            Search Results
            <span className="text-3xl mt-[5px]"> &gt;</span>
          </h1>
          <div className="text-xl font-medium mb-2 flex">
            <span className="text-white hidden sm:block">
              Total Pages -{" "}
              <span className="text-[rgb(245,197,24)]">{totalPages}</span>
            </span>
            <span className="text-white ml-2 mr-2 hidden sm:block">|</span>
            <button
              onClick={() => {
                handlePrevious(), ScrollTop();
              }}
              disabled={currentPage === 1}
            >
              <i class="fa-solid fa-circle-chevron-left"></i>
            </button>
            <span className="text-white ml-2 mr-2 hidden sm:block">
              {currentPage}
            </span>
            <span className="text-white ml-2 mr-2 sm:hidden">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={() => {
                handleNext(), ScrollTop();
              }}
              disabled={currentPage === totalPages}
            >
              <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </div>
        </div>
        <h1 className="text-xl mb-4 font-medium">
          Search Results For : <span className="text-white">"{queryTerm}"</span>
        </h1>
        {isLoading && (
          <div className="flex justify-center items-center">
            {isLoading && (
              <OrbitProgress
                variant="spokes"
                color="rgb(245,197,24)"
                size="medium"
                text="loading..."
                textColor=""
              />
            )}
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {!isLoading && search.length === 0 && !error && (
          <p>No movies found for "{queryTerm}".</p>
        )}{" "}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {search.map((movie) => (
            <Card key={movie.imdbID} movie={movie} page="search" />
          ))}
        </div>
      </div>
    </section>
  );
};
