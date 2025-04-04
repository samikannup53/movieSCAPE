import { useEffect, useState } from "react";
import { Card } from "../components";
import { OrbitProgress } from "react-loading-indicators";

export const MovieList = ({ title, apiPath, stream }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${apiPath}&type=${stream}&page=${currentPage}`;

  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    setError("");

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((jsonData) => {
        if (jsonData.Response === "True") {
          setMovies(jsonData.Search);
          setTotalResults(parseInt(jsonData.totalResults));
        } else {
          setError(`No ${stream} Found`);
          setCurrentPage(1);
          setTotalResults(0);
        }
      })
      .catch((error) => {
        setError("Failed to Fetch Data :" + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    document.title = title;
  }, [url, title, stream, currentPage]);

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
    <section className="min-h-[60vh] z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)]">
      <div className="container mx-auto px-6">
        <div className="bg-[rgb(0,0,0)] sticky z-40 top-[84px] flex justify-between items-center border-b border-[rgb(245,197,24)] mb-4 ">
          <h1 className=" text-2xl mb-2  font-medium   text-white flex items-center">
            <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
            {stream === "movie"
              ? "Movies"
              : stream === "series"
              ? "Series"
              : "Episodes"}
            <span className="text-3xl">&nbsp; &gt;</span>
          </h1>
          <div className="text-xl font-medium flex">
            <span className="text-white hidden sm:block">
              Total Pages -{" "}
              <span className="text-[rgb(245,197,24)]">{totalPages}</span>
            </span>
            <span className="text-white ml-2 mr-2 hidden sm:block">|</span>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              <i class="fa-solid fa-circle-chevron-left"></i>
            </button>
            <span className="text-white ml-2 mr-2 hidden sm:block">
              {currentPage}
            </span>
            <span className="text-white ml-2 mr-2 sm:hidden">
              {currentPage}/{totalPages}
            </span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </div>
        </div>
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
        {error && (
          <p className="text-red-500 capitalize text-xl font-medium">{error}</p>
        )}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {movies.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} page="movielist" />;
          })}
        </div>
      </div>
    </section>
  );
};
