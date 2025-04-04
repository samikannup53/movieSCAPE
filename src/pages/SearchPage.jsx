import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components";
import { OrbitProgress } from "react-loading-indicators";

export const SearchPage = () => {
  const { queryTerm } = useParams();
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!queryTerm) return;

      setIsLoading(true);
      setError(null);

      const url = `https://www.omdbapi.com/?s=${queryTerm}&apikey=${key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setSearch(data.Search);
        } else {
          setSearch([]);
        }
      } catch (err) {
        setError("An error occurred while fetching the movies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [queryTerm]);

  return (
    <section className="min-h-[70vh] p-6 bg-black text-yellow-500">
      <div className="container mx-auto p-6">
        <h1 className="bg-[rgb(0,0,0)] sticky z-40 top-[84px] text-2xl my-4 border-b font-medium border-[rgb(245,197,24)] pb-2 text-white flex flex-items-center">
          <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
          Search Results
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <h1 className="text-xl mb-4 font-medium">
          Search Results For : <span className="text-white">"{queryTerm}"</span>
        </h1>
        {isLoading && <div className="flex justify-center items-center">
                  {isLoading && (
                    <OrbitProgress
                      variant="spokes"
                      color="rgb(245,197,24)"
                      size="medium"
                      text="loading..."
                      textColor=""
                    />
                  )}
                </div>}
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
